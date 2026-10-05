
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import BlogView from "./components/BlogView";
import BlogEdit from "./components/BlogEdit";

function App() {

    return (
        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<BlogList />}
                />

                <Route path="/add" element={<BlogForm />}/>
                <Route path="/view/:id" element={<BlogView />} />
                <Route path="/edit/:id" element={<BlogEdit />}/>

            </Routes>
        </>
    );
}

export default App;
