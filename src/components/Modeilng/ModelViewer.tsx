'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FC } from 'react';
// import * as THREE from 'three';

interface ModelProps {
    url: string;
    floorName?: string;
}

const Model: FC<ModelProps> = ({ url }) => {
    const { scene } = useGLTF(url);

    return <primitive object={scene} />;
};


const ModelViewer: FC = () => {
    return (
        <>
            <Canvas className="model-canvas" camera={{position: [3, 1, 3], fov: 50}}>
                <ambientLight intensity={7}/>
                <directionalLight position={[10, 10, 10]} intensity={1}/>
                <directionalLight position={[-10, 10, 10]} intensity={1}/>
                <directionalLight position={[10, -10, 10]} intensity={1}/>
                <directionalLight position={[10, 10, -10]} intensity={1}/>
                <directionalLight position={[-10, -10, 10]} intensity={1}/>
                <directionalLight position={[-10, 10, -10]} intensity={1}/>
                <directionalLight position={[10, -10, -10]} intensity={1}/>
                <directionalLight position={[-10, -10, -10]} intensity={1}/>

                <OrbitControls enableZoom={true}/>
                <Model url="/model/scene.gltf"/>
            </Canvas>
        </>
    );
};

export default ModelViewer;
