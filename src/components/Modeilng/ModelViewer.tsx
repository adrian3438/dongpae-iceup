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

interface Props {
    language: any;
}

const ModelViewer = ({language}: Props) => {

    console.log('language : ', language);
    const { scene, animations } = useGLTF('/model/dongpae-iceup-model.glb');
    const [buttonIndex, setButtonIndex] = useState<number>();

        // closeBanner 함수 정의
        const closeBanner = () => {
            const banner = document.getElementById('top-banner');
            if (banner) {
                banner.style.display = 'none';
            }
        };

    const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([-2, 1, 5]);
    const [cameraTarget, setCameraTarget] = useState<[number, number, number]>([0, 0, 0]);
    useEffect(() => {
        const coverMesh = scene.getObjectByName("cover_cover_0");
        if (coverMesh) {
            coverMesh.visible = buttonIndex !== 4;
        }

        switch (buttonIndex) {
            case 0:
                setCameraPosition([0, 2, 2]);
                setCameraTarget([0, 1.9, 1.1]);
                break;
            case 1:
                setCameraPosition([1.0, 0.5, 2.0]);
                setCameraTarget([0, 0.6, 0.7]);
                break;
            case 2:
                const mixer = new THREE.AnimationMixer(scene);
                const renderer = new THREE.WebGLRenderer();
                document.body.appendChild(renderer.domElement);

                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

                animations.map((clip) => {
                    const action = mixer.clipAction(clip);

                    // 루프를 한 번만 실행하도록 설정
                    action.setLoop(THREE.LoopOnce, 0);
                    action.clampWhenFinished = true;
                    action.play();

                    return action;
                });

                const animate = () => {
                    requestAnimationFrame(animate);
                    if (mixer) {
                        mixer.update(0.05);
                    }
                    renderer.render(scene, camera);
                };
                animate();

                setCameraPosition([-1, 0.5, 1.5]);
                setCameraTarget([0, 0, 1]);
                break;
            case 3:
                setCameraPosition([-1.4, -0.8, 2.5])
                setCameraTarget([0, -1.5, 0]);
                break;
            case 4:
                setCameraPosition([-1.2, 4.2, 1.7]);
                setCameraTarget([0, 2.5, 0.5]);
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
                <Model url={`/model/dongpae-iceup-model.glb`}/>
                <Html position={[-0.05, 2.75, 0.1]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(4)}
                    />
                </Html>
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

                      {/* Top Banner */}
                <div id="top-banner" className="container-fluid bg-light py-3 border-bottom fixed-top">
                    <div className="row align-items-center">
                        <div className="col-md-11">
                            <h2>{language?.product_35}</h2>
                            <p>{language?.product_36}</p>
                        </div>
                        <div className="col-md-1 text-end">
                            <button
                                className="btn-close"
                                aria-label="Close"
                                onClick={closeBanner} // onClick에서 closeBanner 호출
                            >
                            </button>
                        </div>
                    </div>
                </div>

                        
                {buttonIndex === 0 && (
                    <div>
                        <h2>{language?.product_28}</h2>
                        <p>{language?.product_29}</p>
                    </div>
                )}
                {buttonIndex === 1 && (
                    <div>
                        {/*<h2>Blue Lighting</h2>*/}
                        <iframe title="vimeo-player" className="vimeo-player" src="https://player.vimeo.com/video/1046295111?h=4647f51639&autoplay=1&loop=1&muted=1&controls=1" allowFullScreen></iframe>
                        <iframe title="vimeo-player" className="vimeo-player" src="https://player.vimeo.com/video/1046292241?h=4647f51639&autoplay=1&loop=1&muted=1&controls=1" allowFullScreen></iframe>
                    </div>
                )}
                {buttonIndex === 2 && (
                    <div>
                        <h2>{language?.product_31}</h2>
                        <p>{language?.product_32}</p>
                    </div>
                )}
                {buttonIndex === 3 && (
                    <div>
                        <h2>{language?.product_33}</h2>
                        <p>{language?.product_34}</p>
                    </div>
                )}
                {buttonIndex === 4 && (
                    <div>
                        <iframe title="vimeo-player" className="vimeo-player" src="https://player.vimeo.com/video/1044842889?h=4647f51639&autoplay=1&loop=1&muted=1&controls=1" allowFullScreen></iframe>
                        <iframe title="vimeo-player" className="vimeo-player" src="https://player.vimeo.com/video/1044842412?h=4647f51639&autoplay=1&loop=1&muted=1&controls=1" allowFullScreen></iframe>
                    </div>
                )}

            </div>
        </>
    );
};

export default ModelViewer;
