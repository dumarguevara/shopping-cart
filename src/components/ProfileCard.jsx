import { useRegFormContext } from "../providers/RegFormProvider";

const ProfileCard = () => {

    const [state] = useRegFormContext();

    return (
        <div className="profile-card">
            <h3>ORDEN DE TRABAJO</h3>
            <hr />
            <h4>Datos del cliente</h4>
            {state.common &&
                <>
                    <p>Nombre: {state.common.name}</p>
                    <p>Email: {state.common.email}</p>
                    <p>Número de contacto: {state.common.contact}</p>
                    <p>Identificación Fiscal: {state.common.fiscal}</p>
                    <p>Tipo de Identificación: {state.common.ident}</p>
                </>
            }
            <h4>Datos del Vehículo</h4>
            {state.address &&
                <>

                    <p>Marca: {state.address.marca}</p>
                    <p>Modelo: {state.address.modelo}</p>
                    <p>Placa: {state.address.placa}</p>
                    <p>Nivel de tanque de gasolina: {state.address.nivel}</p>
                    <p>Estado Vehículo: {state.address.estado}</p>
                </>
            }
            <h4>Servicios</h4>
            {state.description &&
                <p>{state.description}</p>
            }
        </div>
    )
}

export default ProfileCard;