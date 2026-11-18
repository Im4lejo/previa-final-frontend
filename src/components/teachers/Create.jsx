import { saveTeacher } from "../../services/TeacherServices"
import { useState } from "react"
export default function Create() {
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [cedula, setCedula] = useState("");
    const save = async (e) => {
        e.preventDefault();
        
        const params = {
            nombre,
            apellido,
            telefono,
            cedula
        };
        
        const response = await saveTeacher(params);
        console.log(response.data);
    };
    return (
        <div>
            {show ?
                <>
                    <form onSubmit={save}>
                        <input type="text" placeholder="Nombre" className="teacher-create-input" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input type="text" placeholder="Apellido" className="teacher-create-input" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        <br />
                        <input type="text" placeholder="teléfono" className="teacher-create-input" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        <input type="text" placeholder="cédula" className="teacher-create-input" value={cedula} onChange={(e) => setCedula(e.target.value)} />
                        <br />
                        <button type="submit">Incribir profesor</button>
                    </form>

                    <button onClick={() => setShow(!show)}> Cerrar X</button>
                </>
                : (
                    <button onClick={() => setShow(!show)}>Incribir profesor</button>
                )
            }
        </div>
    )
}