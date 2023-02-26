import { Headpage, Menu } from '../global';
import { useEffect, useState } from 'react';

function Home() {
    const [audioPlayer, setAudioPlayer] = useState(null);

    useEffect(() => {
        const audio = new Audio('/music/music.mp3');
        audio.autoplay = true;
        setAudioPlayer(audio);
    }, []);

    return (<div>
        <Headpage />
        <Menu />

        <main>
            <article class="font-exo">
                <h2>Alan Francis</h2>
                <p>BEM-VINDO AO MEU MUNDO!</p>
                <p>ONDE A CRIATIVIDADE ENCONTRA</p>
                <p>A FUNCIONALIDADE</p>
            </article>

            <article class="font-exo">
                <p>Da ideia ao código, do código à solução.</p>
                <p>Aqui está o meu portfólio de projetos de programação.</p>
            </article>

        </main>

        <footer>
            <p>©Copyright 2023 by pcdestroid. All rights reversed.</p>
        </footer>
        { }
    </div>)


};

export default Home