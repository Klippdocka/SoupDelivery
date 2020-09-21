import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/home';
import SoupMeny from '../components/SoupMeny/SoupMeny';



const Routes = () => {
    return(
        <BrowserRouter>

             <Switch>

                <Route exact path="/">
                   
                     <Home/>
                    
                </Route>

                <Route exact path="/SoupMeny">

                    <SoupMeny/>


                </Route>

             </Switch>

        
        </BrowserRouter>



    );
}

export default Routes;