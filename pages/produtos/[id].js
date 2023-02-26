// export async function getServerSideProps(context) {
//     const id = context.query.id;

//     return {
//         props: {
//             id: id
//         }
//     }
// }

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        }, {
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
        //falback: false (qual pagina que não está lista da retorna 404)
        //falback: true (aceita qualquer pagina e gera de forma assíncrona)
        //falback: 'blocking' (bloqueia a requisição da pagina atá consegui gerar a pagina final)
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}

function Produtos(props) {
    return <div>Id do Produto: {props.id}</div>
}

export default Produtos












// import { useRouter } from "next/router";
// function Produtos() {
//     const router = useRouter();
//     const id = router.query.id;
//     return <div>Id do Produto: {id}</div>

// }
// export default Produtos