import { Routes, Route, Navigate } from "react-router-dom"
import { About, Home, Projects } from "../pages"

export const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    )
}