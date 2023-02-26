import { Headpage, Menu, Animation } from '../global';

function Contato() {
    return (<div>
        <Headpage />
        <Menu />
        <article className="font-exo">
            <p>Contato</p>
        </article>
        {Animation()}
    </div>)
}

export default Contato