import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage';
import Header from './components/Header';
import ChatPage from './pages/ChatPage';
import SchedulePage from './pages/SchedulePage';
import MyPage from './pages/Mypage';
import SignIn from './components/User/SignIn';
import Sign from './components/User/Sign';
import Intro from './pages/Intro';
import Footer from './components/Footer'
import './App.css'


function App() {
    //세션스토리지에 저장된 유저 정보 가져오기
    let user = sessionStorage.getItem("user_id");

    //유저정보가 없으면 인트로 화면 있으면 메인 화면
    const loginUser = () => {
        if(user == null){
            return <MainPage/>
            // return <Intro/> 로그인 정보 담으면 주석 풀어서 실행하기
        }else{
            return <MainPage/>
        }

    }

    return (
        <div>
            <Header/>
            {/*{loginUser()}*/}
            {/* 로그인 정보 저장하면 아래 메인 페이지 지우기, root경로 인트로 페이지로 바꾸기 */}
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/Intro" element={<Intro/>}/>
                <Route path="/Chat" element={<ChatPage/>}/>
                <Route path="/Schedule" element={<SchedulePage/>}/>
                <Route path="/MyPage" element={<MyPage/>}/>
                <Route path="/SignIn" element={<SignIn/>}/>
                <Route path="/SignUp" element={<Sign/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;