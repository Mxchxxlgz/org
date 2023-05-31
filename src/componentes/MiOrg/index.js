import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {

    //Estado - hooks

    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props);

    // const [mostrar, actulizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("Mostar/Ocultar elemento", !mostrar);
    //     actulizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg