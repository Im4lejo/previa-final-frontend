import { saveTeacher } from "../../services/TeacherServices"
import { useState } from "react"
export default function Create() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const save = async (e) => {
        e.preventDefautlt();
        
        const params = {
            name: "Alejandro",
            last_name: "Pérez",
            email: "correo@gmail.com",
            username: "alejo"
        };
        
        const response = await saveTeacher(params);
        console.log(response.data);
    };
    return (
        <div>
            {show ?
                <>
                    <form onSubmit={save}>
                        <input type="text" placeholder="Nombre" className="teacher-create-input" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Apellido" className="teacher-create-input" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
                        <br />
                        <input type="email" placeholder="correo" className="teacher-create-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="username" className="teacher-create-input" value={username} onChange={(e) => setUsername(e.target.value)} />
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