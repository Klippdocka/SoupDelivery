import React from 'react';
import styled from 'styled-components';
import Loggo from '../Icone/Loggo';

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
::placeholder,
  ::-webkit-input-placeholder {
    color: black;
    padding-left:1rem;
  }

`;

const SignInBtn = styled.div`
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


const AdminLogin = (props) => {

  const [email, setEmail] = useState=('');
  const [password, setPassword] = useState=('');

    
        return (
            <MainContainer>

               <LoggoDiv> <Loggo/></LoggoDiv>


          <SignInWrapper>
              <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
              <Input placeholder="Lösenord" value={password} onChange={e => password(e.target.value)}/>
             <PasswordForget> <StyledP>Glömt lösenord?</StyledP></PasswordForget>
              <SignInBtn>Logga in</SignInBtn>

          </SignInWrapper>


                
            </MainContainer>


        )

        async function login() {
          try {
            await firebase.login(email, password)
          } catch(error) {
            alert(error.message)
          }

        }
    

}

export default AdminLogin;