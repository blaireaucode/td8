// See:
// dice logic + old, but great ui - http://a.teall.info/dice
// dice throw - https://github.com/byWulf/threejs-dice/blob/master/examples/rolling.html
// three.js in React - https://medium.com/@colesayershapiro/using-three-js-in-react-6cb71e87bdf4
// Thanks to all the authors!!!
//
// https://github.com/lehaSVV2009/territories/blob/master/src/libs/react-dice-3d/index.js

import React, {Component} from "react";
import * as THREE from "three";
import * as CANNON from "cannon";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import {
//    DiceD10, DiceD10_100, DiceD10_1, DiceD12,
//    DiceD20, DiceD4, DiceD6, DiceD8, DiceManager
//} from './DiceManager2';


import {
    DiceD10, DiceD12, DiceD20, DiceD4, DiceD6, DiceD8, DiceManager
} from "threejs-dice";

export const DICE_TYPES = {
    D4: "D4",
    D6: "D6",
    D8: "D8",
    D10: "D10",
    //D10_1: "D10_1",
    //D10_100: "D10_100",
    D12: "D12",
    D20: "D20"
};
const DEFAULT_DICE_SIZE = 4;

class DicesAnimation extends Component {

    componentDidMount() {
        console.log('DicesAnimation componentDidMount ', this.props.dices);
        this.go();
    }

    go() {
        console.log('DicesAnimation go ', this.props.dices);

        if (!Array.isArray(this.props.dices)) {
            console.log('before throw)');
            throw new Error(
                "Required argument 'dices' is missing. It has to be an array of dice configs like [{ type: 'D6', backColor: 'red', value: 4 }]"
            );
        }

        // SCENE
        this.scene = new THREE.Scene();
        //var color = new THREE.Color(0x282c34);
        //this.scene.background = color;//"#282c34";//"white";
        //this.scene.background = null;
        this.scene.background = new THREE.Color(0xff0000);
        console.log('after scene');

        // CAMERA
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        const viewAngle = 45;
        const ratio = width / height;
        const near = 0.9;
        const far = 2000;
        this.camera = new THREE.PerspectiveCamera(viewAngle, ratio, near, far);
        this.camera.position.set(0, 30, 30);
        this.scene.add(this.camera);

        // RENDERER
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        //this.renderer.setClearColor(0x282c34, 0.9);
        this.renderer.setClearColor(0x282c34);
        this.renderer.setClearAlpha(0.0);
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = true;

        console.log('before appendChild');
        this.mount.appendChild(this.renderer.domElement);

        // CONTROLS
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        console.log('after controls');

        // LIGHTS
        const ambient = new THREE.AmbientLight("#ffffff", 0.3);
        this.scene.add(ambient);
        const directionalLight = new THREE.DirectionalLight("#ffffff", 0.5);
        directionalLight.position.x = -1000;
        directionalLight.position.y = 1000;
        directionalLight.position.z = 1000;
        this.scene.add(directionalLight);
        const light = new THREE.SpotLight(0xefdfd5, 1.3);
        light.position.y = 100;
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow.camera.near = 50;
        light.shadow.camera.far = 110;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        this.scene.add(light);

        ////////////
        // CUSTOM //
        ////////////
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.82 * 20, 0);
        this.world.broadphase = new CANNON.NaiveBroadphase();
        this.world.solver.iterations = 16;// default = 16;
        DiceManager.setWorld(this.world);
        console.log('after setWorld');

        // Floor
        const floorBody = new CANNON.Body({
            mass: 0,
            shape: new CANNON.Plane(),
            material: DiceManager.floorBodyMaterial
        });
        floorBody.quaternion.setFromAxisAngle(
            new CANNON.Vec3(1, 0, 0),
            -Math.PI / 2
        );
        this.world.add(floorBody);

        // Dice
        this.diceModels = this.generateDiceModels(this.props.dices);
        this.diceModels.forEach(dice => this.scene.add(dice.getObject()));
        this.prepareDicesValues(this.props.dices.map(dice => dice.value));
        console.log('after prepareDicesValues');

        this.start();
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    }

    generateDiceModels = dices => {
        return dices.map(dice => {
            const {type, size} = dice;
            const diceSize = size || DEFAULT_DICE_SIZE;
            if (type === DICE_TYPES.D4) {
                return new DiceD4({size: diceSize, ...dice});
            }
            if (type === DICE_TYPES.D6) {
                return new DiceD6({size: diceSize, ...dice});
            }
            if (type === DICE_TYPES.D8) {
                return new DiceD8({size: diceSize, ...dice});
            }
            if (type === DICE_TYPES.D10) {
                return new DiceD10({size: diceSize, ...dice});
            }
            /*if (type === DICE_TYPES.D10_1) {
                return new DiceD10_1({size: diceSize, ...dice});
            }
            if (type === DICE_TYPES.D10_100) {
                return new DiceD10_100({size: diceSize, ...dice});
            }*/
            if (type === DICE_TYPES.D12) {
                var d = new DiceD12({size: diceSize, scaleFactor: this.props.scaleFactor, ...dice});
                return d;
            }
            if (type === DICE_TYPES.D20) {
                return new DiceD20({size: diceSize, ...dice});
            }
            console.log('ERROR unknown dice type', type);
            return new DiceD6({size: diceSize, ...dice});
        });
    };

    prepareDicesValues = values => {
        console.log('prepareDicesValues ', values);
        const diceValues = this.diceModels.map((diceModel, index) => {
            const {size} = diceModel;
            // diceModel.scaleFactor = 0.2;
            const diceObject = diceModel.getObject();
            diceObject.position.x = -15 - (index % 3) * size;
            diceObject.position.y = this.props.posY + Math.floor(index / 3) * size; // Was 2 -> 5
            diceObject.position.z = -15 + (index % 3) * size;
            diceObject.quaternion.x = ((Math.random() * 90 - 45) * Math.PI) / 180;
            diceObject.quaternion.z = ((Math.random() * 90 - 45) * Math.PI) / 180;
            diceModel.updateBodyFromMesh();
            const yRand = Math.random() * 20;
            const rand = Math.random() * 5;
            diceObject.body.velocity.set(25 + rand, 40 + yRand, 15 + rand);
            return {dice: diceModel, value: values[index]};
        });
        console.log('diceValues ', diceValues);
        DiceManager.prepareValues(diceValues);
    };

    start = () => {
        console.log('START');
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    };

    stop = () => {
        //console.log('stop', this);
        cancelAnimationFrame(this.frameId);
    };

    animate = () => {
        this.updatePhysics();
        this.renderScene();
        this.controls.update();
        this.frameId = window.requestAnimationFrame(this.animate);
    };

    updatePhysics = () => {
        this.world.step(1.0 / 60.0);
        this.diceModels.forEach(diceModel => diceModel.updateMeshFromBody());
    };

    renderScene = () => {
        this.renderer.render(this.scene, this.camera);
    };

    render() {
        console.log('render animation2', this.props);
        return (
            <div
                //className={this.props.className}
                style={{
                    width: this.props.width,
                    height: this.props.height || "150px",
                    ...this.props.style
                }}
                ref={mount => {
                    this.mount = mount;
                }}
                onClick={this.props.onClick}
            />
        );
    }
}

export default DicesAnimation;
