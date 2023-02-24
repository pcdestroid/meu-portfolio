import { useState } from 'react';
import Head from 'next/head'
import '../styles/global.css'


function Home() {
    return (
        <>
            <Head>
                <title>Alan Francis</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Space+Mono&display=swap" rel="stylesheet" />
            </Head>

            <div class="drop-shadow-[_0px_2px_rgba(0,0,0,0.25)] absolute text-white text-center center">

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

            {/* ... */}
        </>
    )
}

function goToGitHub() {
    window.open('https://github.com/pcdestroid');
}

// function Contador() {

//     const [contador, setContador] = useState(1);

//     function adcionarContador() {
//         setContador(contador + 1);
//     }

//     return (
//         <div>
//             <div>{contador}</div>
//             <button onClick={adcionarContador}>Adcionar</button>
//         </div>
//     )
// }

export default Home