import { Route,Routes } from "react-router-dom";

export function Router(){
    return(
    <Routes>
        <Route index element={<h1>Testing</h1>} />
    </Routes>
);
}