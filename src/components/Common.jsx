import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Common = () => {

    const [, dispatch] = useRegFormContext();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: 'CHANGE_PERCENT', data: 0 })
    }, []);

    const { register, handleSubmit, formState: { isValid } } = useForm();

    const onSubmit = (values) => {
        if (isValid) {
            dispatch({ type: 'SET_COMMON_DATA', data: values });
            navigate('/address');
        }
    }

    return (
        <>
            <h2>DATOS DEL CLIENTE</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" {...register('name')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" {...register('email')} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Número de contacto</label>
                    <input type="text" className="form-control" {...register('contact')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Identificación Fiscal</label>
                    <input type="text" className="form-control" {...register('fiscal')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo de Identificación</label>
                    <input type="text" className="form-control" {...register('ident')} />
                </div>
                
                <input type="submit" className="btn btn-info" value="Siguiente" />
            </form>
        </>
    );
}

export default Common;