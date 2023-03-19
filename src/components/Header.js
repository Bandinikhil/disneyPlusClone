import React,{useEffect} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { auth,provider } from '../firebase';
import { setUserLoginDetails, setSignOutState, selectUserName, selectUserEmail,selectUserPhoto } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=> {
                 if(user){
                    setUser(user);
                    navigate('/home');
                 }
        });
    
    
    }, [userName]);
    const  handleAuth = ()=> {
        if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                navigate('/');
            }).catch((err) => alert(err.message));
        }
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            
            })
        );
    };
  return (
     <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="Disney"/>
        </Logo>
        {!userName ? (
        <Login onClick={handleAuth}>LogIn</Login> ) : (<> 
    <NavMenu>
        <NavLink href="/home" style={{"display":"flex", "alignItems":"center", "padding":"0 12px" }}>
            <img src='/images/home-icon.svg' alt='home'/>
            <span>HOME</span>
        </NavLink>
        <NavLink style={{"display":"flex", "alignItems":"center", "padding":"0 12px" }}>
            <img src='/images/search-icon.svg' alt='Search'/>
            <span>SEARCH</span>
        </NavLink>
        <NavLink style={{"display":"flex", "alignItems":"center", "padding":"0 12px" }}>
            <img src='/images/watchlist-icon.svg' alt='home'/>
            <span>WATCHLIST</span>
        </NavLink>
        <NavLink style={{"display":"flex", "alignItems":"center", "padding":"0 12px" }}>
            <img src='/images/original-icon.svg' alt='home'/>
            <span>ORIGINALS</span>
        </NavLink>
        <NavLink style={{"display":"flex", "alignItems":"center", "padding":"0 12px" }}>
            <img src='/images/movie-icon.svg' alt='home'/>
            <span>MOVIES</span>
        </NavLink>
        <NavLink style={{"display":"flex", "alignItems":"center", "padding":"0 12px" }}>
            <img src='/images/series-icon.svg' alt='home'/>
            <span>SERIES</span>
        </NavLink>
    </NavMenu>
    <SignOut>
        <UserImg src={userPhoto} alt={userName} />
        <DropDown>
            <span onClick={handleAuth}>SignOut</span>
        </DropDown>
     </SignOut>
    </>)}
   
     </Nav>
  )
};

const Nav = styled.nav`
height : 70px;
position: fixed;
top: 0;
right: 0;
left: 0;
background-color: black;
display: flex;

justify-content: space-between;
align-items: center;
z-index: 3;
padding: 0 36px;
letter-spacing: 16px;
`
const Logo = styled.a`
padding: 0;
max-height: 70px;
width: 80px;
margin-top: 4px;
font-size: 0;
display: inline-block;


img{
    display: block;
    width: 100%;
}
`

const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex-flow: row nowrap;
height: 100%;
margin: 0;
padding: 0;
position: relative;
margin-right: auto;
margin-left: 25px;



img{
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
}

span {
    color: rgb(249,249,249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;


    &:before {
        background-color: white;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        position: absolute;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width : auto;
        right: 0px;
        left: 0px;
        content: "";
    }

    

}


&:hover{
    span:before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
}

`

const Login = styled.a`
background-color: black;
color: white;
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid white;
border-radius: 4px;
transition: all 1.2s ease 0s;

&:hover{
    background-color: white;
    color: black;
    border-color: transparent;
}
`

const UserImg = styled.img`
height: 100%;
`;

const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0;
background: rgb(19,19,19);
border: 1px solid rgba(151,151,151,0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100px;
opacity: 0;
`

const SignOut = styled.div`
width: 48px;
height: 48px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

${UserImg} {
    border-radius: 50%;
    height: 100%;
    width: 100%;
}

&:hover {
    ${DropDown}{
        opacity: 1;
        transition-duration: 1s ;
    }
}
`;



export default Header