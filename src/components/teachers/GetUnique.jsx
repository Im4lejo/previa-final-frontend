import { useParams } from "react-router-dom"
import { deleteTeacher, getUniqueTeacher } from "../../services/TeacherServices";
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
    const deleteTeachers = async (e) => {
        e.preventDefault();

        const params = {
            name,
            last_name,
            email,
            username,
        };

        const response = await deleteTeacher(params);
        console.log(response.data);
    };
    return (
        <div>
            {teacher !== null ?
                <>
                    {!edit ?
                        <div>
                            <h2>{teacher.nombre}</h2>
                            <p>{teacher.apellido}</p>
                            <p>{teacher.telefono}</p>
                            <p>{teacher.cedula}</p>
                            <br />
                            <button onClick={() => setEdit(!edit)}>Editar</button>
                        </div>

                        :
                        <form onSubmit={editInfo}>
                            <input type="text" placeholder="Nombre" className="teacher-create-input" value={t_name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Apellido" className="teacher-create-input" value={t_last_name} onChange={(e) => setLast_name(e.target.value)} />
                            <br />
                            <input type="text" placeholder="correo" className="teacher-create-input" value={t_email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder="username" className="teacher-create-input" value={t_username} onChange={(e) => setUsername(e.target.value)} />
                            <br />
                            <button type="submit">Incribir profesor</button>
                            <button onClick={() => setEdit(!edit)}>Cerrar edición</button>
                        </form>
                    }


                    <button type="submit" onSubmit={deleteTeachers}> Eliminar </button>

                </>
                :
                <>
                    <p>pailas, no hay</p>
                </>
            }
        </div>
    )
}