'use client';

import { Canvas } from '@react-three/fiber';
import {Html, OrbitControls, useGLTF } from '@react-three/drei';
import {FC, useEffect, useState} from 'react';
import * as THREE from 'three';

interface ModelProps {
    url: string;
}

const Model: FC<ModelProps> = ({ url }) => {
    const { scene } = useGLTF(url);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
    }, [scene]);

    return <primitive object={scene} scale={1.3} />;
};

const ModelViewer2: FC = () => {
    const [buttonIndex, setButtonIndex] = useState<number>();

    return (
        <>
            <Canvas className="model-canvas" style={{width: "50%", position:"relative"}}>
                <ambientLight intensity={1}/>
                <directionalLight position={[10, 30, 20]} intensity={1}/>
                <directionalLight position={[10, -180, -90]} intensity={1}/>
                <directionalLight position={[-10, -30, 20]} intensity={1}/>
                <directionalLight position={[0, 50, 50]} intensity={1}/>
                <directionalLight position={[-30, 10, -40]} intensity={1}/>
                <directionalLight position={[50, -50, 30]} intensity={1}/>
                <directionalLight position={[-50, 50, -30]} intensity={1}/>
                <directionalLight position={[-40, 40, -10]} intensity={1}/>
                <directionalLight position={[50, 50, 30]} intensity={1}/>
                <directionalLight position={[1, 1, 1]} intensity={1}/>
                <OrbitControls enableZoom={true}/>
                <Model url={`/model/module/iceup_60k_module_3d_2.glb`}/>
                <Html position={[-0.5, 2.3, 0.1]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(0)}
                    />
                </Html>
                <Html position={[-0.5, 0.5, 0]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(1)}
                    />
                </Html>
                <Html position={[-0.5, -1.5, 0.2]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(2)}
                    />
                </Html>
                <Html position={[1, 0.5, 0]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(3)}
                    />
                </Html>
            </Canvas>
            <div className="features col-md-5">
                {buttonIndex === 0 && (
                    <div>
                        <h2>Video</h2>
                        <iframe title="vimeo-player" className="vimeo-player" src="https://player.vimeo.com/video/1003088041?h=4647f51639&autoplay=1&loop=1&muted=1&controls=0" allowFullScreen></iframe>
                    </div>
                )}
                {buttonIndex === 1 && (
                    <div>
                        <h2>Feature</h2>
                        <ul>
                        <li>test1</li>
                            <li>test2</li>
                            <li>test3</li>
                            <li>test4</li>
                        </ul>
                    </div>
                )}
                {buttonIndex === 2 && (
                    <div>
                        <h2>Feature2</h2>
                        <ul>
                            <li>test1</li>
                            <li>test2</li>
                            <li>test3</li>
                            <li>test4</li>
                            <li>test5</li>
                        </ul>
                    </div>
                )}
                {buttonIndex === 3 && (
                    <div>
                        <h2>Feature3</h2>
                        <ul>
                            <li>test1</li>
                            <li>test2</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default ModelViewer2;
