import Link from 'next/link';
import Head from 'next/head';
import MusicHome from '/music';
import { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function Headpage() {
    return (
        <>
            <Head>
                <link rel="icon" href="./favicon.png" type="image/png" />

                <link rel="icon" href="favicon.png" />
                <link rel="stylesheet" href="/css/styles.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Space+Mono&display=swap" rel="stylesheet" />
            </Head>
        </>
    )
}

function Menu() {

    return (
        <>
            <nav className='menu'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projetos">Projetos</Link></li>
                <li><Link href="/sobre">Sobre mim</Link></li>
                <li><Link href="/contato">Contato</Link></li>
                <a className="fundo-logo-git" href="https://github.com/pcdestroid" target="_blank">
                    <svg href="https://github.com/pcdestroid" target="_blank" height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a>
                <MusicHome></MusicHome>
            </nav>
        </>
    )
}

function Animation() {

    useEffect(() => {

        const world = {
            plane: {
                width: 40,
                height: 40,
                widthSegments: 10,
                heightSegments: 10
            }
        }

        function generatePlane() {
            planeMesh.geometry.dispose()
            planeMesh.geometry = new THREE.
                PlaneGeometry(
                    world.plane.width,
                    world.plane.height,
                    world.plane.widthSegments,
                    world.plane.heightSegments
                )

            // vertice position randomization
            const { array } = planeMesh.geometry.attributes.position
            const randomValues = []
            for (let i = 0; i < array.length; i++) {
                if (i % 3 === 0) {
                    const x = array[i]
                    const y = array[i + 1]
                    const z = array[i + 2]
                    array[i] = x + (Math.random() - 0.5)
                    array[i + 1] = y + (Math.random() - 0.5)
                    array[i + 2] = z + (Math.random() - .5) * 3
                }
                randomValues.push(Math.random() * 5)
            }

            planeMesh.geometry.attributes.position.
                randomValues = randomValues

            planeMesh.geometry.attributes.position.
                originalPosition =
                planeMesh.geometry.attributes.position
                    .array

            const colors = []
            for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
                colors.push(0.0, 0.0, 0)
            }

            planeMesh.geometry.setAttribute(
                'color',
                new THREE.BufferAttribute(new Float32Array(colors), 3)
            )
        }

        const raycaster = new THREE.Raycaster()

        //Criando cena
        const scene = new THREE.Scene();

        //Criando a camera
        const camera = new THREE.
            PerspectiveCamera(
                75, //Raio de visão
                innerWidth / innerHeight,
                0.1,
                1000 // distância de visão
            )

        // create an AudioListener and add it to the camera
        const listener = new THREE.AudioListener();
        camera.add(listener);

        // create a global audio source
        const soundAmb = new THREE.Audio(listener);
        const soundEfect = new THREE.Audio(listener);

        //Criando a camera
        const renderer = new THREE.WebGLRenderer()

        renderer.setSize(innerWidth, innerHeight) //Definir tamanho da tela que irá renderizar a cena.
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', onWindowResize)


        renderer.setPixelRatio(devicePixelRatio)

        //add render ao body
        document.body.appendChild(renderer.domElement)

        //Criando material que tem interação com a luz "MeshPhongMaterial"
        const planeMaterial = new THREE.
            MeshPhongMaterial({
                side: THREE.DoubleSide,
                flatShading: THREE.FlatShading,
                vertexColors: true
            })

        new OrbitControls(camera, renderer.domElement)
        //Posição da camera
        camera.position.z = 10

        //Criando um objeto
        const planeGeometry = new THREE.
            PlaneGeometry(
                world.plane.width,
                world.plane.height,
                world.plane.widthSegments,
                world.plane.heightSegments
            )

        //Juntar o objeto ao material criado
        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
        //add o objeto com o material na cena
        scene.add(planeMesh)
        generatePlane()

        //Criando Luz de frete
        const frontLight = new THREE.DirectionalLight(0xffffff, 1)
        frontLight.position.set(0, 0, 2)
        scene.add(frontLight)

        //Criando Luz de tras
        const backLight = new THREE.DirectionalLight(0xffffff, 1)
        backLight.position.set(0, 0, -2)
        scene.add(backLight)

        const mouse = {
            x: undefined,
            y: undefined
        }

        let frame = 0

        //Criar função de animação
        function animate() {

            requestAnimationFrame(animate)
            //renderizando a cena
            frame += 0.01
            renderer.render(scene, camera)
            raycaster.setFromCamera(mouse, camera)
            const { array,
                originalPosition,
                randomValues
            } = planeMesh.geometry.attributes.
                    position

            for (let i = 0; i < array.length; i +=
                3) {
                // x
                array[i] = originalPosition[i] +
                    Math.cos(frame + randomValues[i])
                    * 0.01
                // y 
                array[i + 1] =
                    originalPosition[i + 1] + Math.sin
                        (frame + randomValues[i + 1]) *
                    0.001
            }

            planeMesh.geometry.attributes.position
                .needsUpdate = true

            const intersects = raycaster.intersectObject(planeMesh)

            if (intersects.length > 0) {

                const { color } = intersects[0].object.geometry.attributes

                //vertice 1
                color.setX(intersects[0].face.a, 0.1)
                color.setY(intersects[0].face.a, 0.)
                color.setZ(intersects[0].face.a, 0)
                //vertice 2
                color.setX(intersects[0].face.b, 0.1)
                color.setY(intersects[0].face.b, 0.)
                color.setZ(intersects[0].face.b, 0)
                //vertice 3
                color.setX(intersects[0].face.c, 0.1)
                color.setY(intersects[0].face.c, 0.)
                color.setZ(intersects[0].face.c, 0)

                color.
                    needsUpdate = true

                const initialColor = {
                    r: 0.,
                    g: 0,
                    b: 0
                }

                //Cor mousemove
                const hoverColor = {
                    r: 0.8,
                    g: 0.0,
                    b: 4
                }

                gsap.to(hoverColor, {
                    r: initialColor.r,
                    g: initialColor.g,
                    b: initialColor.b,
                    duration: 2,
                    onUpdate: () => {
                        //vertice 1
                        color.setX(intersects[0].face.a, hoverColor.r)
                        color.setY(intersects[0].face.a, hoverColor.g)
                        color.setZ(intersects[0].face.a, hoverColor.b)
                        //vertice 2
                        color.setX(intersects[0].face.b, hoverColor.r)
                        color.setY(intersects[0].face.b, hoverColor.g)
                        color.setZ(intersects[0].face.b, hoverColor.b)
                        //vertice 3
                        color.setX(intersects[0].face.c, hoverColor.r)
                        color.setY(intersects[0].face.c, hoverColor.g)
                        color.setZ(intersects[0].face.c, hoverColor.b)
                        color.needsUpdate = true
                    }
                })

            }

        }

        animate()

        addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / innerWidth)
                * 2 - 1
            mouse.y = -(event.clientY / innerHeight)
                * 2 + 1
        })

    }, [])


}

export { Headpage, Menu, Animation };