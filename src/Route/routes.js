import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/home';
import SoupMenu from '../components/SoupMenu/SoupMenu';
import Main from '../components/Main/Main';
import CheckOutProgressMain from '../components/CheckOutProgress/CheckOutProgressMain';
import CheckOutProgressBasket from '../components/CheckOutProgress/CheckOutProgressBasket';
import CheckOutMain from '../components/CheckOutProgress/CheckOutMain';
import CheckOutProgressAddres from '../components/CheckOutProgress/CheckOutProgressAddres';
import CheckOutProgressPayment from '../components/CheckOutProgress/CheckOutProgressPayment';

const Routes = (props) => {
    return (
        <BrowserRouter>

            <Switch>

                <Route exact path="/">
                    <Main showCart={false}>
                        <Home />
                    </Main>


                </Route>

                <Route exact path="/SoupMenu">
                    <Main showCart={true} >
                        <SoupMenu />
                    </Main>


                </Route>

                <Route exact path="/ShoppingCart">

                    <CheckOutMain pageTitle={1}>
                        <CheckOutProgressBasket />
                    </CheckOutMain>




                </Route>


                <Route exact path="/ShoppingCartAddres">

                    <CheckOutMain pageTitle={2}>
                        <CheckOutProgressAddres />
                    </CheckOutMain>




                </Route>


                <Route exact path="/ShoppingCartPayment">

                    <CheckOutMain pageTitle={3}>
                       <CheckOutProgressPayment />
                    </CheckOutMain>




                </Route>


            </Switch>


        </BrowserRouter>



    );
}

export default Routes;