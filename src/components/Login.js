import React from 'react'
import styled from "styled-components"
const Login = () => {
  return (
    <Container>
        <Content>
             <CTA>
                <CTAlogoOne src="/images/cta-logo-one.svg" alt=""/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
                </Description>
                <CTAlogoTwo src="/images/cta-logo-two.png" alt=""/>
            </CTA>
            <BgImage/> 
            
        </Content>
    </Container> 
  )
}

const Container = styled.section`
overflow : hidden;
display : flex;
flex-direction: column;
text-align : center;
height : 100vh;
`

const Content = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content : center;
width: 100%;
min-height : 100vh;
height : 100%;
padding: 80px 40px;
margin-bottom : 10vw;
position : relative;
box-sizing : border-box;
`

const BgImage = styled.div`
height : 100%;
background-position : top;
background-size : cover;
background-repeat : no-repeat;
background-image : url("images/login-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`

const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 2vw;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 0;
margin-right: auto;
margin-left: auto;
transition: opacity 0.2s;

`

const CTAlogoOne = styled.img`
max-width: 600px;
width : 100%;
margin-bottom: 12px;
display: block;
min-height: 1px;
`

const SignUp = styled.a`
width : 100%;
margin-bottom: 15px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
font-size: 18px;
letter-spacing: 1.5px;
background-color : #0063e5;
color: #f9f9f9;
font-weight: bold;

&:hover{
    background-color: #0483ee;
}
`

const Description = styled.p`
color: hsla(0,0%,95.3%,1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;

`

const CTAlogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
width: 100%;
vertical-align: bottom;
`

export default Login