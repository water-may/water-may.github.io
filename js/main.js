import * as THREE from '../node_modules/three/build/three.module.js';
import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls.js';


document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#233143");renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
});
