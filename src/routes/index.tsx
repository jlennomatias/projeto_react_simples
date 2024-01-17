import { Route, Routes as Switch, BrowserRouter, Navigate } from "react-router-dom"

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" Component={() => <h1>Ola mundo</h1>}/> */}
                <Route path="/" element={<Navigate to="/pagina-inicial" />}/>

                <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
            </Switch>
        </BrowserRouter>
    )
}