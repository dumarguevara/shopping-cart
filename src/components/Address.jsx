import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Address = () => {

    const [, dispatch] = useRegFormContext();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: 'CHANGE_PERCENT', data: 42 })
    }, []);

    const { register, handleSubmit, formState: { isValid } } = useForm();

    const onSubmit = (values) => {
        if (isValid) {
            dispatch({ type: 'SET_ADDRESS_DATA', data: values });
            navigate('/description');
        }
    }

    return (
        <>
            <h2>DATOS DEL VEHICULO</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Marca</label>
                    <input type="text" className="form-control" {...register('marca')} />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Modelo</label>
                    <input type="text" className="form-control" {...register('modelo')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Placa</label>
                    <input type="text" className="form-control" {...register('placa')} />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Nivel de tanque de gasolina</label>
                    <input type="text" className="form-control" {...register('nivel')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado del Vehículo</label>
                    <input type="text" className="form-control" {...register('estado')} />
                </div>

                <input type="submit" className="btn btn-info" value="Siguiente" />
            </form>
        </>
    );
}

export default Address;