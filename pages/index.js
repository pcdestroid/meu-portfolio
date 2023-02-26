import { Headpage, Menu } from '../global';


function Home() {

    return (
        <div>
            
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
                <p>© 2023 by pcdestroid. All rights reversed.</p>
            </footer>
        </div>
    )
}

export default Home
