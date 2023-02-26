import { Headpage, Menu } from '../global';
import * as THREE from 'three';
import { useEffect } from 'react'
import gsap from 'gsap'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


function Home() {

    return (
        <div>
            <Headpage />
            <Menu />


            <article className="font-exo">
                <p>BEM-VINDO AO MEU MUNDO!</p>
                <p>ONDE A CRIATIVIDADE ENCONTRA</p>
                <p>A FUNCIONALIDADE</p>
            </article>

            <article className="font-exo-small">
                <p>Da ideia ao código, do código à solução.</p>
                <p>Aqui está o meu portfólio de projetos de programação.</p>
            </article>


            <footer>
                <p>© 2023 by pcdestroid. All rights reversed.</p>
            </footer>
            {Animation()}
        </div>

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

export default Home
