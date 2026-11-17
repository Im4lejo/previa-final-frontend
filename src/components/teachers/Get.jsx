import "../../App.css"
import { getTeachers } from "../../services/TeacherServices"
import { Link } from "react-router-dom";
import { useState } from "react"
export default function Get() {
    const [teachers, setTeachers] = useState([
        {
            id: 1,
            name: 'Camila',
            last_name: 'Gómez',
            email: 'camila.gomez@ejemplo.com',
            username: 'camilag'
        },
        {
            id: 2,
            name: 'Mateo',
            last_name: 'Rodríguez',
            email: 'mateo.rod@ejemplo.com',
            username: 'mrodriguez'
        },
        {
            id: 3,
            name: 'Sofía',
            last_name: 'Martínez',
            email: 'sofia.martinez@ejemplo.com',
            username: 'sofiam'
        },
        {
            id: 4,
            name: 'Sebastián',
            last_name: 'López',
            email: 'sebas.lopez@ejemplo.com',
            username: 'slopez99'
        }
    ]);
    return (
        <div>
            {teachers.length > 0 ?

                teachers.map((teacher) => (
                    <div key={teacher.id}>
                        <p>{teacher.name} {teacher.last_name}</p>
                        <Link to={`/teachers/teacher/${teacher.id}`} className="btn-see-more">
                            Ver más
                        </Link>
                    </div>
                ))
                : (
                    <p>No hay profesores inscritos</p>
                )
            }
        </div>
    )
}