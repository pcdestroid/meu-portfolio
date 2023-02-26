import { Headpage, Menu, Animation } from '../global';

function Home() {

    return (
        <div>
            <Headpage />
            <Menu />


            <article className="font-exo texto-central">
                <p>BEM-VINDO AO MEU MUNDO!</p>
                <p>ONDE A CRIATIVIDADE ENCONTRA </p>
                <p> A FUNCIONALIDADE</p>
            </article>

            <article className="font-exo-small texto-final">
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

export default Home
