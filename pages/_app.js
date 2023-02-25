import { useState } from 'react';
import Head from 'next/head'
import '../styles/global.css'
import Forge from './_forge.js'


const Home = () => {
    const [forja, setMostrarForja] = useState(false)
    const mostrarForja = () => {
        setMostrarForja(true)
    }
    return (
        <>
            <Head>
                <title>Alan Francis</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Space+Mono&display=swap" rel="stylesheet" />
            </Head>

            {
                forja ? (
                    <Forge />
                ) : (

                    <div class="drop-shadow-[_0px_2px_rgba(0,0,0,0.25)] absolute text-white text-center center">
                        <Inicio />

                        <button
                            class="border px-4 py-2 rounded-lg font-space-mono text-lg uppercase tracking-wide mt-8 hover:bg-white hover:text-gray-800 inline-block"
                            type="button" onClick={mostrarForja}>Forja de Pedra
                        </button>
                    </div>

                )
            }

        </>
    )
}


function goToGitHub() {
    window.open('https://github.com/pcdestroid');
}

function Inicio() {
    return (
        <div>


            <h1 class="font-space-mono text-lg uppercase tracking-wide">Alan Francis</h1>
            <div class="font-exo text-3xl mt-4">
                <p class="par">BEM-VINDO AO MEU MUNDO!</p>
                <p class="par">ONDE A CRIATIVIDADE ENCONTRA</p>
                <p class="par">A FUNCIONALIDADE</p>
            </div>
            <button
                class="border px-4 py-2 rounded-lg font-space-mono text-lg uppercase tracking-wide mt-8 hover:bg-white hover:text-gray-800 inline-block"
                type="button" onClick={goToGitHub}>github
            </button>

            <p class="font-space-mono mt-8 uppercase text-lg">
                Da ideia ao código, do código à solução.
            </p>
            <p class="font-space-mono uppercase text-lg">
                Aqui está o meu portfólio de projetos de programação.
            </p>


        </div>
    )
}

export default Home