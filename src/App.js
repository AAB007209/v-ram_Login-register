import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
// import { Route, Routes } from "react-router-dom";
// import { LoginForm } from "./components/accountBox/loginForm";
// import { SignupForm } from "./components/accountBox/signupForm";
// import Navbar from "./components/accountBox/Navbar";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <>
            <AppContainer>
                <AccountBox />
            </AppContainer>
        </>
    );
}

export default App;
