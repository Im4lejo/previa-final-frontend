import { useParams } from "react-router-dom"
import { getUniqueTeacher } from "../../services/TeacherServices";
import { useState, useEffect } from "react";
export default function GetUnique() {
    const { id } = useParams();
    const [teacher, setTeacher] = useState(null);
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        getUniqueTeacher(id)
            .then(response => {
                setTeacher(response.data);
            });
    }, [id]);

    return (
        <div>
            {teacher !== null ?
                <>
                    {!edit ?
                        <div>
                            <h2>{teacher.name}</h2>
                            <p>{teacher.last_name}</p>
                            <p>{teacher.email}</p>
                            <p>{teacher.username}</p>
                            <br />
                            <button onClick={() => setEdit(!edit)}>Editar</button>
                        </div>
                        
                        :
                        <form onSubmit={editInfo}>
                            <input type="text" placeholder="Nombre" className="teacher-create-input" value={t_name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Apellido" className="teacher-create-input" value={t_last_name} onChange={(e) => setLast_name(e.target.value)} />
                            <br />
                            <input type="email" placeholder="correo" className="teacher-create-input" value={t_email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder="username" className="teacher-create-input" value={t_username} onChange={(e) => setUsername(e.target.value)} />
                            <br />
                            <button type="submit">Incribir profesor</button>
                            <button onClick={() => setEdit(!edit)}>Cerrar edición</button>
                        </form>
                    }

                    
                    <button type="submit" onSubmit={deleteTeacher}> Eliminar </button>

                </>
                :
                <>
                    <p>pailas, no hay</p>
                </>
            }
        </div>
    )
}