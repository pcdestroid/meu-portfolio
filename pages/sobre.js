import { Headpage, Menu, Animation } from '../global';

function Sobre() {
    return (<div>
        <Headpage />
        <Menu />
        <article className="font-exo">
            <p>Sobre</p>
        </article>
        {Animation()}
    </div>)
}

export default Sobre