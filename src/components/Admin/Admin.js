import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Loggo from '../Icone/Loggo';
import { withRouter } from 'react-router';
import Firebase from '../../firebase';
import { AuthContext } from '../../Auth';
import HamburgerIcone from '../../components/Icone/hamburgerIcone';
import axios from '../../axios';
import theme from '../../theme';
import CloseIcone from '../../components/Icone/CloseIcone';
import Delite from '../../components/Icone/Delite';
import { useHistory } from "react-router-dom";

const MainWrapper = styled.div`
height:100%;
width:100%;
margin-top:5rem;

`;


const Navbar = styled.div`
top:0rem;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:5rem;
background-color:#f2f3f5;
box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);

`;

const HamburgerDiv = styled.div`


`;


const Drawer = styled.div`
left:0rem;
top:0rem;
display: ${props => props.menuOpen ? 'block' : 'none'};
flex-direction:row;
background-color:#f2f3f5;

`;




const StyledATag = styled.a`
text-decoration:none;
color:#8b8b8b;
font-size:1rem;
padding-bottom:1rem;
margin-top:2rem;



`;


const DrawerContent = styled.div`
position:fixed;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
height:40rem;
background-color:#f2f3f5;
left:0rem;
top:0rem;
width:10rem;
padding-top:2.2rem;
text-align:center;
margin-top:5rem;
cursor: pointer;
z-index:10;

`;


const BorderUnderline = styled.div`
width:100%;
height:0.1rem;
background-color:#dedede;
`;

const SoupList = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:100%;

`;

const SoupWrapper = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 width:100%;
 


`;


const StyledH3 = styled.h3`
color:#23591e;
padding-right:1rem;
font-size:1.5rem;
`;



const MenuSoupContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:80%;
height:55rem;
max-width:60rem;
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;
box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.11);
border-radius:1rem;
margin-top:1rem;
margin-bottom:4rem;


`;

const SoupMainContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:100%;

`;


const BtnAdd = styled.div`
position: static;
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:4rem;
background-color:#9ab54a;
color:white;
font-size:1.5rem;
box-shadow: 1px -2px 1px 0px rgba(0,0,0,0.15);
border-bottom-left-radius: 1rem;
border-bottom-right-radius: 1rem;



`;


const TitleContainer = styled.div`
position: static;
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
width:100%;
background-color:white;


`;


const Title = styled.h1`
color:#2f3030;
padding-top:1.5rem;
margin-block-start: 0em;
margin-block-end: 0em;
margin-left:3rem;
`;

const SoupDescription = styled.p`
width:20rem;
margin-left:3rem;
margin-block-start: 0em;
margin-block-end: 0em;
padding-top:1rem;
padding-bottom:1.5rem;
    
color:#2f3030;
`;

const ContentContainer = styled.div`
   margin-top:auto;
    width: 100%;
    
    
   

@media screen and (max-width: ${theme.screenSize.small}){
    width:100%;
}
`

const PriceContainer = styled.h2`
margin-top:0rem;
margin-left:3rem;
margin-bottom:2rem;
color:#2f3030;
`;

const AddSoupWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:fixed;
top:0rem;
width:100%;
height:100%;
background:rgba(79,79,79,0.4);
display: ${props => props.menuOpen ? 'flex' : 'none'};

`;

const AddSoupContent = styled.div`
position:absolute;
display:flex;
align-items:center;
width:70%;
height:50rem;
flex-direction:column;
background-color:#f5f5f5;
border-radius:0.5rem;
overflow:none;

`;

const Input = styled.input`
margin-top:2rem;
display:flex;
justify-content:center;
align-items:center;
height:3rem;
width:80%;
border:none;
font-size:1.5rem;
-webkit-box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
-moz-box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
margin-bottom:1.5rem;
color:black;
padding-left:1rem; 


::placeholder,
  ::-webkit-input-placeholder {
    color: black;
    padding-left:1rem;


  } 
  
 `;


const InputBig = styled.textarea`
margin-top:1rem;
padding-top:1rem;
height:7rem;
width:80%;
border:none;
font-size:1.5rem;
-webkit-box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
-moz-box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
margin-bottom:1.5rem;
color:black;
text-align:start;
padding-left:1rem; 


::placeholder,
  ::-webkit-input-placeholder {
    color: black;
    padding-left:1rem;

  } `;


const AddSoupBtn = styled.div`
display:flex;
height:3rem;
width:15rem;
background-color:#9ab54a;
margin-top:5rem;
color:white;
font-size:1.5rem;
text-align:center;
align-items:center;
justify-content:center;

`;


const CloseIconeContainer = styled.div`
padding-top:0.5rem;
padding-right:0.5rem;
display:flex;
justify-content:flex-end;
align-items:center;
width:100%;

`;

const DeliteContainer = styled.div`
padding-top:0.5rem;
padding-right:1rem;
display:flex;
justify-content:flex-end;
align-items:flex-end;
width:100%;
height:3rem;
cursor: pointer;

`;

const DeleteWrapper = styled.div`
`;

const OrderWrapper = styled.div`
display: ${props => props.menuOpenOrder ? 'flex' : 'none'};
position:fixed;
justify-content:center;
align-items:center;
top:5rem;
width:100%;
height:100%;
background:rgba(79,79,79,0.4);

`;

const OrderContext = styled.div`
width:30rem;
height:50rem;
background-color:white;

`;

const H1Order = styled.h1`
text-align:center;
`;

const OrderDiv = styled.div`
display:flex;
justify-content:space-around;
flex-direction:row;
align-items:center;
height:4rem;
`;

const OrderP = styled.p`
margin-bottom:1rem;
font-size:1.5rem;
font-weight:500;
`;

const DivTitle = styled.div`
display:flex;
justify-content:space-around;
`;


const Admin = (props) => {

    const [items, setItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState('');
    const { currentUser } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [urlImage, setUrlImage] = useState(null);
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [progress, setProgress] = useState(0);
    const [isModalOpenOrder, setIsModalOpenOrder] = useState('');
    const [menuOrder, setMenuOrder] = useState(false);
    const [orders, setOrders] = useState([]);

    let history = useHistory();

    useEffect(() => {

        axios.getSoups()
            .then(response => {
                setItems(response.data)

            })

    }, []);

    useEffect(() => {
        axios.getOrder()
            .then(resp => {
                setOrders(Object.values(resp.data))
            })
            .catch(error => console.log(error))
    }, [])





    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }





    const HandleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file['type']
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']
            if (validImageTypes.includes(fileType)) {
                setError('');
                setImage(file);
            } else {
                setError('Du behöver välja en bild i rätt format , gif,jpeg eller png.')
            }
        }
    };

    const HandleUpdate = () => {
        if (image) {
            const uploadTask = Firebase.storage.ref(`images/${image.name}`).put(image)

            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                error => {
                    setError(error)
                },
                () => {
                    Firebase.storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        setUrlImage(url)
                        setProgress(0);
                    });
                }
            );
        } else {
            setError('välj en bild för att ladda upp');
        }
    };

    const DeleteHandler = (id) => {

        let soups = items

        soups = soups.filter(soup => soup.id != id)

        axios.updateSoups(soups)
            .then(resp => {
                setItems(soups)
                alert("Soppa borttagen!")
            })
            .catch(error => console.log(error))
    }




    const AddOrdrarHandler = () => {

        if (!isModalOpenOrder) {
            setIsModalOpenOrder(true)
        } else {
            setIsModalOpenOrder(false)
        }
        setIsMenuOpen(false);


    }



    const AddSoupHandler = () => {
        if (!isModalOpen) {
            setIsModalOpen(true)
        } else {
            setIsModalOpen(false)
        }
        setIsMenuOpen(false);
    };

    const PostNewSoupHandler = () => {


        let soup = {
            description: description,
            id: makeid(5),
            image: urlImage,
            title: title,
            price: price,

        }
        let soups = items
        soups.unshift(soup)

        axios.updateSoups(soups)
            .then(response => {
                setItems(soups)
                alert('Soppan sparad')
            })
            .catch(error => console.log(error));


        setIsModalOpen(false);

    }

    const ModalCloseHandler = () => {
        setIsModalOpen(false);
    }

    const ModalCloseHandlerOrder = () => {
        setIsModalOpenOrder(false);
        
    }

    const LogOut = () => {
        Firebase.logout();
        props.history.push('/AdminLogin');
    };


    const openHandler = (e) => {

        if (!isMenuOpen) {
            setIsMenuOpen(true)

        } else {
            setIsMenuOpen(false)
        }

    }


    if (currentUser != null) {
        return <MainWrapper>
            <Navbar><HamburgerDiv onClick={openHandler}><HamburgerIcone /></HamburgerDiv><StyledH3>{currentUser.email}</StyledH3></Navbar>


            <Drawer menuOpen={isMenuOpen}>
                <DrawerContent>


                    <StyledATag onClick={() => AddOrdrarHandler()}>
                        <span>Ordrar</span>
                    </StyledATag>
                    <BorderUnderline />

                    <StyledATag onClick={() => AddSoupHandler()}>
                        <span>Lägg till soppa</span>
                    </StyledATag>
                    <BorderUnderline />

                    <StyledATag onClick={() => LogOut()}>
                        <span>Logga ut</span>
                    </StyledATag>
                    <BorderUnderline />



                </DrawerContent>
            </Drawer>




            <SoupList>

                {items.map((element, index) => {
                    return (<SoupWrapper key={index} item={element} id={element.id} value={element.title} image={element.image}>



                        <MenuSoupContainer image={element.image}>
                            <DeliteContainer><DeleteWrapper onClick={() => DeleteHandler(element.id)}><Delite /></DeleteWrapper></DeliteContainer>

                            <ContentContainer>

                                <TitleContainer>
                                    <Title>{element.title}</Title>
                                    <SoupDescription>{element.description}</SoupDescription>
                                    <PriceContainer>{element.price} kr</PriceContainer>

                                </TitleContainer>

                            </ContentContainer>

                        </MenuSoupContainer>

                    </SoupWrapper>



                    );
                })}
            </SoupList>



            <OrderWrapper menuOpenOrder={isModalOpenOrder}>
                <OrderContext>
                <CloseIconeContainer onClick={() => ModalCloseHandlerOrder()}><CloseIcone /></CloseIconeContainer>
                    <H1Order>Ordrar</H1Order>
                    <DivTitle> <OrderP>Ordernummer</OrderP> <OrderP>Totaltvärde</OrderP></DivTitle>
                    <BorderUnderline/>
                    {orders.map((element, index) => {
                        return (
                            <div key={index}>
                                
                                <OrderDiv>
                              
                                    <p>{element.id}</p>
                        <p>{element.price} SEK</p>
                      
                        </OrderDiv>
                        <BorderUnderline/>
                            </div>
                        );
                    })}
               
                </OrderContext>
            </OrderWrapper>

            <AddSoupWrapper menuOpen={isModalOpen}>

                <AddSoupContent>
                    <CloseIconeContainer onClick={() => ModalCloseHandler()}><CloseIcone /></CloseIconeContainer>
                    <StyledH3>Lägg till soppa</StyledH3>

                    <Input type="text" name="title" value={title} placeholder="Titel" onChange={e => setTitle(e.target.value)}></Input>

                    <InputBig type="text" placeholder="Beskrivning" name="description" value={description} onChange={e => setDescription(e.target.value)}></InputBig>
                    <Input type="number" placeholder="Pris" name="price" value={price} onChange={e => setPrice(parseInt(e.target.value))}></Input>
                    <Input type="file" onChange={HandleChange}></Input>
                    <div>{error}{progress > 0 ? <progress value={progress} max="100" /> : ""}</div>
                    <button onClick={() => HandleUpdate()}>Ladda upp bild</button>


                    <AddSoupBtn onClick={() => PostNewSoupHandler()}>Lägg till</AddSoupBtn>
                </AddSoupContent>
            </AddSoupWrapper>





        </MainWrapper>





    }
    return <MainWrapper>

    </MainWrapper>

}

export default withRouter(Admin);

