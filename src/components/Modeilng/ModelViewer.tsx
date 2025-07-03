'use client';

import {Canvas, useThree} from '@react-three/fiber';
import {Html, OrbitControls, useGLTF } from '@react-three/drei';
import {FC, useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
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

    return <primitive object={scene} scale={0.65} />;
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
    modelId: string;
    view: string;
}

const ModelViewer = ({language, modelId, view}: Props) => {
    const router = useRouter();

    const { scene, animations } = useGLTF('/model/dongpae-iceup-model.glb');
    const [buttonIndex, setButtonIndex] = useState<number>(5);

    useEffect(() => {
        if(!view) {
            setButtonIndex(5);
        }
    }, [view]);

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
            default:
                setCameraPosition([-2, 1, 5]);
                setCameraTarget([0, 0, 0]);
                break;
        }
    }, [buttonIndex]);


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
                <CameraController newPosition={cameraPosition} targetPosition={cameraTarget}/>
                <Model url={`/model/dongpae-iceup-model.glb`}/>
                <Html position={[-0.05, 2.75, 0.1]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => {
                            setButtonIndex(4);
                            router.push(`/product/${modelId}?view=${buttonIndex}`);
                        }}
                    />
                </Html>
                <Html position={[-0.05, 2.3, 0.95]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => {
                            setButtonIndex(0);
                            router.push(`/product/${modelId}?view=${buttonIndex}`);
                        }}
                    />
                </Html>
                <Html position={[-0.05, 1.2, 0.95]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => {
                            setButtonIndex(1);
                            router.push(`/product/${modelId}?view=${buttonIndex}`);
                        }}
                    />
                </Html>
                <Html position={[-0.05, -0.1, 0.95]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => {
                            setButtonIndex(2);
                            router.push(`/product/${modelId}?view=${buttonIndex}`);
                        }}
                    />
                </Html>
                <Html position={[-0.05, -1.2, 0.95]} distanceFactor={10}>
                    <div
                        style={{background: '#00E5FF', padding: '5px', borderRadius: '5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => {
                            setButtonIndex(3);
                            router.push(`/product/${modelId}?view=${buttonIndex}`);
                        }}
                    />
                </Html>
            </Canvas>

            <div className="features col-md-5">

                      {/* Top Banner */}
                {/*<div id="top-banner" className="container-fluid bg-light py-3 border-bottom fixed-top">
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
                </div>*/}
                {buttonIndex === 5 && (
                  <div>
                      <table className="table table-responsive table-bordered">
                          <thead>
                          <tr>
                              <th className="text-center bg-navy text-white py-2">{language?.product_38}</th>
                              <th className="text-center bg-navy text-white py-2">{language?.product_39}</th>
                              <th className="text-center bg-navy text-white py-2">Specification</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th rowSpan={6} className="text-center bg-pale-navy py-1" style={{verticalAlign: 'middle'}}>{language?.product_40}</th>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_41}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>330 x 500 x 1,250 mm</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_42}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>44.5 kg</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_43}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>220 V~, 60 Hz</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_44}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>2,700 L</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_45}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>60 kg/day</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_46}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>4 ~ 38 ℃</td>
                          </tr>

                          <tr>
                              <th rowSpan={3} className="text-center bg-pale-navy py-1" style={{verticalAlign: 'middle'}}>{language?.product_47}</th>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_48}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>6 L</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_49}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>2 L</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_50}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>4 kg</td>
                          </tr>

                          <tr>
                              <th rowSpan={4} className="text-center bg-pale-navy py-1" style={{verticalAlign: 'middle'}}>{language?.product_51_01}</th>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_51}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_60}</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_52}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_61}</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_53}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_62}</td>
                          </tr>
                          <tr>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_54}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_63}</td>
                          </tr>

                          <tr>
                              <th className="text-center bg-pale-navy py-1" style={{verticalAlign: 'middle'}}>{language?.product_55}</th>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_56}</td>
                              <td className="text-center py-1" style={{verticalAlign: 'middle'}}>{language?.product_57}<br/>{language?.lang === 'en' && <br/>}
                                  {language?.product_58}<br/>{language?.lang === 'en' && <br/>}
                                  {language?.product_59}
                              </td>
                          </tr>
                          </tbody>
                      </table>
                  </div>
                )}

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
