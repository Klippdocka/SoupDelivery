import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/home';
import SoupMenu from '../components/SoupMenu/SoupMenu';
import Main from '../components/Main/Main';
//import Form from '../components/Checkbox/Checkbox';
import CheckOutProgressMain from '../components/CheckOutProgress/CheckOutProgressMain';
import CheckOutProgressBasket from '../components/CheckOutProgress/CheckOutProgressBasket';
import CheckOutMain from '../components/CheckOutProgress/CheckOutMain';

const Routes = (props) => {
    return(
        <BrowserRouter>

             <Switch>

                <Route exact path="/">
                   <Main showCart={false}>
                     <Home/>
                     </Main>
                    
                    
                </Route>

                <Route exact path="/SoupMenu">
                    <Main showCart={true} >
                    <SoupMenu/>
                    </Main>


                </Route>

                <Route exact path="/ShoppingCart">

                 <CheckOutMain>
                <CheckOutProgressBasket/>
                </CheckOutMain>
                
                    


                    </Route>

             </Switch>

        
        </BrowserRouter>



    );
}

export default Routes;