'use client';

import { Canvas } from '@react-three/fiber';
import {Html, OrbitControls, useGLTF } from '@react-three/drei';
import {FC, useEffect, useState} from 'react';
import * as THREE from 'three';
import {useRouter} from "next/navigation";

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

interface Props {
    language: any;
    modelId: string;
    view: string;
}

const ModelViewer2 = ({language, modelId, view}: Props) => {
    const router = useRouter();

    const [buttonIndex, setButtonIndex] = useState<number>(5);

    useEffect(() => {
        if(!view) {
            setButtonIndex(5);
        }
    }, [view]);

    return (
        <>
            <Canvas className="model-canvas" style={{position:"relative", width: '50%'}}>
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
                        onClick={() => {
                            setButtonIndex(0);
                            router.push(`/product/${modelId}?view=${buttonIndex}`);
                        }}
                    />
                </Html>
            </Canvas>
            <div className="features col-md-5">
                {buttonIndex === 5 && (
                  <div>
                      <table className="table table-responsive table-bordered">
                          <thead className="bg-pale-gray">
                          <tr>
                              <th className="text-center bg-navy text-white">{language?.product_64}</th>
                              <th className="text-center bg-navy text-white">Specification</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th className="text-center bg-pale-navy" style={{verticalAlign: 'middle'}}>{language?.product_65}</th>
                              <td className="text-center" style={{verticalAlign: 'middle'}}>Auger Type</td>
                          </tr>
                          <tr>
                              <th className="text-center bg-pale-navy" style={{verticalAlign: 'middle'}}>{language?.product_66}</th>
                              <td className="text-center" style={{verticalAlign: 'middle'}}>60 kg/day</td>
                          </tr>
                          <tr>
                              <th className="text-center bg-pale-navy" style={{verticalAlign: 'middle'}}>{language?.product_67}</th>
                              <td className="text-center" style={{verticalAlign: 'middle'}}>121 x 216 x 305 mm</td>
                          </tr>
                          <tr>
                              <th className="text-center bg-pale-navy" style={{verticalAlign: 'middle'}}>{language?.product_68}</th>
                              <td className="text-center" style={{verticalAlign: 'middle'}}>R134a, R404A, R600a, R290</td>
                          </tr>
                          <tr>
                              <th className="text-center bg-pale-navy" style={{verticalAlign: 'middle'}}>{language?.product_69}</th>
                              <td className="text-center" style={{verticalAlign: 'middle'}}>220 V~, 60 Hz</td>
                          </tr>

                          </tbody>
                      </table>
                  </div>
                )}

                {buttonIndex === 0 && (
                  <div>
                      <h2>60 kg Ice Maker Module</h2>
                      <iframe title="vimeo-player" className="vimeo-player" src="https://player.vimeo.com/video/1035854486?h=4647f51639&autoplay=1&loop=1&muted=1&controls=1" allowFullScreen></iframe>
                        <br/><br/>

                        <h2>25 kg Ice Maker Module</h2>
                        <iframe title="vimeo-player" className="vimeo-player" src="https://player.vimeo.com/video/1035854351?h=4647f51639&autoplay=1&loop=1&muted=1&controls=1" allowFullScreen></iframe>
                    </div>
                )}
                {/* {buttonIndex === 1 && (
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
                )} */}
            </div>
        </>
    );
};

export default ModelViewer2;
