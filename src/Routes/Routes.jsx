import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import { useState, useEffect } from 'react'


function Routes(){

    const [authenticaded, setAuthenticaded] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@kenziehub:token'))

        if(token){
            return setAuthenticaded(true)
        }
    }, [authenticaded])


    return (
        <Switch>
            <Route exact path='/'>
                <Login
                authenticaded={authenticaded}
                setAuthenticaded={setAuthenticaded}
                />
            </Route>
            <Route path='/signup'>
                <Signup authenticaded={authenticaded}/>
            </Route>
            <Route path='/dashboard'>
                <Dashboard setAuthenticaded={setAuthenticaded} authenticaded={authenticaded} />
            </Route>
        </Switch>
    )
}

export default Routes