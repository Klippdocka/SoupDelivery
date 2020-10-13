import React, { useState }from 'react';
import styled from 'styled-components';
import Loggo from '../Icone/Loggo';
import { withRouter } from 'react-router';
import firebase from '../../firebase';


const MainContainer = styled.div`
height:100%;
width:100%;
display:flex;
background-color:#f2f3f5;
flex-direction:column;
`;

const SignInContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:40rem;
width:30rem;
background-color:white;
box-shadow: 10px 11px 6px -6px rgba(0,0,0,0.18);
`;

const SignInWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const Input = styled.input`
display:flex;
justify-content:center;
align-items:center;
height:4rem;
width:30rem;
border:none;
font-size:1.5rem;
-webkit-box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
-moz-box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
margin-bottom:1.5rem;
color:black;
padding-left:1.5rem;

&::placeholder {
    color: black;
  
  }

  `;

const SignInBtn = styled.button`
display:flex;
justify-content:center;
align-items:center;
width:10rem;
height:3rem;
background-color:#9ab54a;
border-radius:0.2rem;
-webkit-box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
-moz-box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);
text-align:center;
margin-top:1rem;
color:white;
font-size:1.5rem;
border:none;
`;


const PasswordForget = styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-end;
width:30rem;
height:2rem;

`;

const StyledP = styled.p`
font-size:1.1rem;
`;

const LoggoDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:30rem;

`;

 const Form = styled.form`
 `;


const AdminLogin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const handleSubmit = e => {
  //  e.preventDefault();
 //   Firebase.login(email, password)
 //   .then(props.history.push('/Admin'))
 //   .catch(err => {
 //     alert(err);
 //   })

 // };

 async function login() {
   try {
     await firebase.login(email, password)
     props.history.push('/Admin')
   } catch(err) {
     alert(err.message)
   }
 }
    
        return (
            <MainContainer>

               <LoggoDiv> <Loggo/></LoggoDiv>

  
          <SignInWrapper>
        
              <Input  autoComplete="off" placeholder="Email" autoFocus value={email} onChange={e => setEmail(e.target.value)}/>
              <Input type="password" autoComplete="off" placeholder="Lösenord"  autoFocus value={password} onChange={e => setPassword(e.target.value)}/>
              <PasswordForget onClick={() => props.history.push('AdminRegi')}> <StyledP>Ny användare? Skapa konto här</StyledP></PasswordForget>    <PasswordForget> <StyledP>Glömt lösenord?</StyledP></PasswordForget>
              <SignInBtn onClick={() => login()}>Logga in</SignInBtn>
          

          </SignInWrapper>
        
                
            </MainContainer>


        )
     
}

export default withRouter(AdminLogin);