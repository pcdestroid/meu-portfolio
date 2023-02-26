import Link from 'next/link';
import Head from 'next/head';
import MusicHome from '/music'


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
            <nav class="font-exo">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projetos">Projetos</Link></li>
                <li><Link href="/sobre">Sobre mim</Link></li>
                <li><Link href="/contato">Contato</Link></li>
                <a class="fundo-logo-git" href="https://github.com/pcdestroid" target="_blank">
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a>
                <MusicHome></MusicHome>

            </nav>
        </>
    )
}


function animation3D() {

}

export { Headpage, Menu };