import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/home';
import SoupMeny from '../components/SoupMeny/SoupMeny';
import Main from '../components/Main/Main'


const Routes = () => {
    return(
        <BrowserRouter>

             <Switch>

                <Route exact path="/">
                   <Main>
                     <Home/>
                     </Main>
                    
                </Route>

                <Route exact path="/SoupMeny">
                    <Main>
                    <SoupMeny/>
                    </Main>


                </Route>

                <Route exact path="/Main">

                    <Main/>


                    </Route>

             </Switch>

        
        </BrowserRouter>



    );
}

export default Routes;