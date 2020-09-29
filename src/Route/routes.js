import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/home';
import SoupMenu from '../components/SoupMenu/SoupMenu';
import Main from '../components/Main/Main';
import Form from '../components/Checkbox/Checkbox';

const Routes = () => {
    return(
        <BrowserRouter>

             <Switch>

                <Route exact path="/">
                   <Main>
                     <Home/>
                     </Main>
                    
                </Route>

                <Route exact path="/SoupMenu">
                    <Main>
                    <SoupMenu/>
                    </Main>


                </Route>

                <Route exact path="/Form">

                 
                       <Form/>
                    


                    </Route>

             </Switch>

        
        </BrowserRouter>



    );
}

export default Routes;