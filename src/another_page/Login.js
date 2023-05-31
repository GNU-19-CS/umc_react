import React from 'react';
import './Login.css';

function Login(){
    const REST_API_KEY = "99f9feab00aea76b9f8da39c1b5bd3dc";
    const REDIRECT_URI = "http://localhost:3000/login"
    const KAKAO_AUTH_URL=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    return(
        <>
        <div id="main">
        <div id="main_header">
            <div class="logo">
                <div class="main_logo">
                    NETFLIX
                </div>
            </div>
        </div>
        <div id="login_frame">
            <div id="login_text">
                로그인
            </div>
            <div id="login_id">
                <input type="email" placeholder="이메일 주소 또는 전화번호" id="id_button"></input>
            </div>
            <div id="login_password">
                <input type="password" placeholder="비밀번호" id="password_button"></input>
            </div>
            <div id="login">
                <a href={KAKAO_AUTH_URL}><button type="submit" id="login_button">로그인</button></a>
            </div>
            <div id="frame_container">
                Netflix 회원이 아닌가요?<br></br><br></br>
                이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
            </div>
        </div>
    </div>
    <div id="footer">
        <div id="footer_title">질문있는 사람? 문의전화 : 하지마셈</div>
        <table class="info">
            <tr height="30">
                <td width="200">자주 묻는 질문</td>
                <td width="200">기프트카드 약관</td>
                <td width="200">고객 센터</td>
                <td width="200">개인정보 처리방침</td>
            </tr>
            <tr>
                <td width="200">쿠키 설정</td>
                <td colspan = "3" width="400">회사 정보</td>
            </tr>
        </table>
        <div class="footer_lang">
            <div class="footer_lang_text">
                한국어
            </div>
        </div>
        <div id="footer_last_title">넷플릭스 대한민국</div>
        <div id="footer_last">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587<br></br>
            대표: 레지널드 숀 톰프슨<br></br>
            이메일 주소: korea@netflix.com<br></br>
            주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br></br>
            사업자등록번호: 165-87-00119<br></br>
            클라우드 호스팅: Amazon Web Services Inc.<br></br>
            공정거래위원회 웹사이트
        </div>
    </div>
        </>
    );
}

export default Login;