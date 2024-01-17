import { Route, Routes as Switch, BrowserRouter, Navigate } from "react-router-dom"
import {Login, Home} from "../pages"

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" Component={() => <h1>Ola mundo</h1>}/> */}
                <Route path="/login" Component={Login}/>
                <Route path="/home" Component={Home}/>

                <Route path="*" element={<Navigate to="/home" />}/>
            </Switch>
        </BrowserRouter>
    )
}