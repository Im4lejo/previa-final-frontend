import { Outlet, Link } from "react-router-dom";
import Get from "./Get";
import Create from "./Create"
export default function Title() {
    return (
        <>
            <h3>Profesores</h3>
            <Create/>
            <Get/>
            
        </>
    )
}