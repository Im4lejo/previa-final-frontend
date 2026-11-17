import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teachers from "../components/teachers/Index"
import GetTeacher from "../components/teachers/GetUnique"

export default function Navbar() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/teachers" element={<Teachers />}/>
                    <Route path="/teachers/teacher/:id" element={<GetTeacher />} />
                    <Route>
                        <Route />

                    </Route>
                    <Route>
                        <Route />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
