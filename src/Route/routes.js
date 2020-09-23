import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/home';
import SoupMenu from '../components/SoupMenu/SoupMenu';
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

                <Route exact path="/SoupMenu">
                    <Main>
                    <SoupMenu/>
                    </Main>


                </Route>

                <Route exact path="/">

                    <Main>
                        <Home>
                            
                        </Home>
                    </Main>


                    </Route>

             </Switch>

        
        </BrowserRouter>



    );
}

export default Routes;