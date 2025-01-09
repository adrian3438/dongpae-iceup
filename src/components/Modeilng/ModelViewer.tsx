'use client';

import {Canvas, useThree} from '@react-three/fiber';
import {Html, OrbitControls, useGLTF } from '@react-three/drei';
import {FC, useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

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

    return <primitive object={scene} scale={0.6} />;
};

const CameraController: FC<{ newPosition: [number, number, number]; targetPosition: [number, number, number] }> = ({ newPosition, targetPosition }) => {
    const { camera, gl } = useThree();
    const controlsRef = useRef<any>();

    useEffect(() => {
        gsap.to(camera.position, {
            x: newPosition[0],
            y: newPosition[1],
            z: newPosition[2],
            duration: 1,
            onUpdate: () => {
                if (controlsRef.current) {
                    controlsRef.current.target.set(...targetPosition);
                    controlsRef.current.update();
                }
            },
        });
    }, [newPosition, targetPosition, camera]);

    return <OrbitControls ref={controlsRef} enableZoom={true} />;
};


const ModelViewer: FC = () => {
    const [buttonIndex, setButtonIndex] = useState<number>();

    const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 5]);
    const [cameraTarget, setCameraTarget] = useState<[number, number, number]>([0, 0, 0]);
    useEffect(() => {
        switch (buttonIndex) {
            case 0:
                setCameraPosition([0, 2, 2]);
                setCameraTarget([0, 1.9, 1.1]);
                break;
            case 1:
                setCameraPosition([0, 0.5, 2]);
                setCameraTarget([0, 1, 0.6]);
                break;
            case 2:
                setCameraPosition([-1, 0.5, 1.5]);
                setCameraTarget([0, 0, 0]);
                break;
            case 3:
                setCameraPosition([-1.4, -0.9, 2.5])
                setCameraTarget([0, -1.5, 0]);
                break;
        }
    }, [buttonIndex]);


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
                <CameraController newPosition={cameraPosition} targetPosition={cameraTarget}/>
                <Model url={`/model/scene.gltf`}/>
                <Html position={[-0.05, 2.3, 0.95]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(0)}
                    />
                </Html>
                <Html position={[-0.05, 1.2, 0.95]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(1)}
                    />
                </Html>
                <Html position={[-0.05, -0.1, 0.95]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(2)}
                    />
                </Html>
                <Html position={[-0.05, -1.2, 0.95]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(3)}
                    />
                </Html>
            </Canvas>
            <div className="features col-md-5">
                {buttonIndex === 0 && (
                    <div>
                        <h2>직관적인 UX</h2>
                        <p>터치 버튼으로 손쉬운 조작이 가능하며 직관적인 디자인으로 기능을 쉽게 파악할 수 있습니다.</p>
                    </div>
                )}
                {buttonIndex === 1 && (
                    <div>
                        <h2>파란색 조명</h2>
                        <p>터치 버튼으로 손쉬운 조작이 가능하며 직관적인 디자인으로 기능을 쉽게 파악할 수 있습니다.</p>
                    </div>
                )}
                {buttonIndex === 2 && (
                    <div>
                        <h2>파란색 조명</h2>
                        <p>터치 버튼으로 손쉬운 조작이 가능하며 직관적인 디자인으로 기능을 쉽게 파악할 수 있습니다.</p>
                    </div>
                )}
                {buttonIndex === 3 && (
                    <div>
                        <h2>깔끔한 디자인</h2>
                        <p>어느장소에도 어울리는 디자인을 적용하였습니다.</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default ModelViewer;
