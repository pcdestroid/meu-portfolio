import { Headpage, Menu, Animation } from '../global';
function Projetos() {
    return (<div>
        <Headpage />
        <Menu />

        <article className="font-exo">
            <p>Projetos</p>
        </article>

        {Animation()}
    </div>)
}

export default Projetos