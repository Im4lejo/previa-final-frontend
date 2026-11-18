import "../../App.css"
import { getTeachers } from "../../services/TeacherServices"
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react"
export default function Get() {
    const [teachers, setTeachers] = useState([]);

    const getAllTeachers = async () => {
        try {
            const response = await getTeachers();
            // OJO: Si en Laravel usaste paginate(15), los registros están en response.data.data
            // Si usaste get() sin paginar, están en response.data
            setTeachers(response.data.data || response.data);
        } catch (error) {
            console.error('Error al cargar profesores:', error);
        }
    };
    useEffect(() => {
        getAllTeachers();
    }, []);
    return (
        <div>
            {teachers.length > 0 ?

                teachers.map((teacher) => (
                    <div key={teacher.id}>
                        <p>{teacher.nombre} {teacher.apellido}</p>
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