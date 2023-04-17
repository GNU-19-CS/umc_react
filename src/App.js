/*import logo from './logo.svg';*/

import './App.css';
import {Link} from "react-router-dom";

function Header(){
  return (
    <>
      <div id="header">
          <div id="header_content">
              <div className="new_red" onclick="changeBg()">
                  <div className="red_text">
                      NEW!
                  </div>
              </div>
              <div className="price" style={{fontSize : "25px"}}>
                  <span style={{fontWeight : "Bold"}}>공짜</span>로 지금 시작하세요!
              </div>
              <div className="detail">
                  자세히 알아보기
              </div>
          </div>
      </div>
    </>
  );
}

function Main(){
  return(
    <>
      <div id="main">
          <div id="blur">
              <div id="main_header">
                  <div className="logo">
                      <div className="main_logo">
                          NETFLIX
                      </div>
                  </div>
                  <div className="lang">
                      <button class="lang_check">한국어</button>
                  </div>
                  <div className="sign_in">
                      <Link to="login"><button className="sign_in_text">로그인</button></Link>
                  </div>
              </div>
              <div id="main_content">
                  <div className="main_content_title">영화와 시리즈를 무제한으로</div>
                  <div className="main_content_1">다양한 디바이스에서 시청하세용. 공짜에요~</div>
                  <div className="main_content_2">시청할 준비가 되셨나요? 멤버쉽 등록은 개나줘버려요!</div>
                  <div>
                      <form className="input_box">
                          <input className="input" type="email" placeholder="이메일 주소"></input>
                          <input className="submit" type="submit" value="시작하기 >"></input>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

function Line(){
  return (
    <div id="line"></div>
  );
}

function Sub1(){
  return (
    <>
      <div id="sub1">
          <div className="sub1_content">
              <div class="sub1_content_1">
                  TV로 즐겨용~
              </div>
              <div className="sub1_content_2">
                  스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청가능하다네요~
              </div>
          </div>
          <div className="sub1_img">
              <img width={{width : "500"}} alt={{alt : ""}} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>
          </div>
      </div>
    </>
  );
}

function Sub2(){
  return (
    <>
      <div id="sub2">
        <div className="sub2_img">
            <img width={{width : "500"}} alt={{alt : ""}} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"></img>
        </div>
        <div className="sub2_content">
            <div className="sub2_content_1">
                다양한 디바이스에서 시청하세요.
            </div>
            <div className="sub2_content_2">
                각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.
            </div>
        </div>
    </div>
    </>
  );
}

function Sub3(){
  return (
    <>
      <div id="sub3">
          <div className="sub3_content">
              <div class="sub3_content_1">
                  애기들 전용 프로필은 만들어보아요~
              </div>
              <div className="sub3_content_2">
                 뽀로로보던 그 시절이 그립네요ㅠㅠ
              </div>
          </div>
          <div className="sub3_img">
              <img width={{width : "500"}} alt={{alt : ""}} src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf"></img>
          </div>
      </div>
    </>
  );
}

function Sub4(){
  return (
    <>
      <div id="sub4">
        <div className="sub4_img">
            <img width={{width : "500"}} alt={{alt : ""}} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>
        </div>
        <div className="sub4_content">
            <div className="sub4_content_1">
                다양한 디바이스에서 시청하세요.
            </div>
            <div className="sub4_content_2">
                각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.
            </div>
        </div>
    </div>
    </>
  );
}

function Qna(){
  return (
    <>
      <div id="qna">
          <div id="qna_title">자주 묻는 질문</div>
          <ul id="qna_list">
              <div className="list">
                  <li>넷플릭스에서 뭐 볼 수 있음? <a id="list_1">+</a></li>
              </div>
              <p id="hidden_content1">넷플릭스는 장편 영화, 다큐멘터리 등을 시청할 수 있음</p>
              <div className="list">
                  <li>넷플릭스가 뭐에요? <a id="list_2">+</a></li>
              </div>
              <p id="hidden_content2">넷플릭스는 스트리밍 서비스에용~</p>
              <div className="list">
                  <li>요금제는? <a id="list_3">+</a></li>
              </div>
              <p id="hidden_content3">조금 비싸용</p>
              <div className="list">
                  <li>멤버쉽? <a id="list_4">+</a></li>
              </div>
              <p id="hidden_content4">광고 줄여준다네요</p>
              <div className="list">
                  <li>어디서 봄? <a id="list_5">+</a></li>
              </div>
              <p id="hidden_content5">어디서든 가능!</p>
              <div className="list">
                  <li>해지는 어케 함? <a id="list_6">+</a></li>
              </div>
              <p id="hidden_content6">클릭 두 번!</p>
              <div className="list">
                  <li>애기들이 봐도 됨? <a id="list_7">+</a></li>
              </div>
              <p id="hidden_content7">당근!</p>
          </ul>
          <div id="qna_last_title">
              <h2>시청할 준비됨? 그럼 이메일 주소 입력해!</h2>
          </div>
          <div>
              <form className="qna_input_box">
                  <input className="qna_input" type="email" placeholder="이메일 주소"></input>
                  <input className="qna_submit" type="submit" value="시작하기 >"></input>
              </form>
          </div>
      </div>
    </>
  );
}

function Footer(){
  return (
    <>
      <div id="footer">
        <div id="footer_title">질문있는 사람? 문의전화 : 하지마셈</div>
        <table className="info">
            <tr style={{hegiht : "30px"}}>
                <td style={{width : "300"}}>자주 묻는 질문</td>
                <td style={{width : "300"}}>기프트카드 약관</td>
                <td style={{width : "300"}}>고객 센터</td>
            </tr>
            <tr style={{hegiht : "30px"}}>
                <td style={{width : "300"}}>계정</td>
                <td style={{width : "300"}}>미디어 센터</td>
                <td style={{width : "300"}}>투자 정보(IR)</td>
            </tr>
            <tr style={{hegiht : "30px"}}>
                <td style={{width : "300"}}>입사 정보</td>
                <td style={{width : "300"}}>넷플릭스 지원 디바이스</td>
                <td style={{width : "300"}}>이용 약관</td>
            </tr>
            <tr style={{hegiht : "30px"}}>
                <td style={{width : "300"}}>개인정보 처리방침</td>
                <td style={{width : "300"}}>쿠키 설정</td>
                <td style={{width : "300"}}>회사 정보</td>
            </tr>
            <tr style={{hegiht : "30px"}}>
                <td width="300">문의하기</td>
                <td width="300">속도 테스트</td>
                <td width="300">법적 고지</td>
            </tr>
            <tr>
                <td style={{colspan : "3", width : "900"}}>오직 넷플릭스에서</td>
            </tr>
        </table>
        <div className="footer_lang">
            <div className="footer_lang_text">
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

function App() {
  return (
    <>
    {/* 여기는 원본
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      그 원자 모양같은거 나오는 부분 */}
      <Header></Header>
      <Main></Main>
      <Line></Line>
      <Sub1></Sub1>
      <Line></Line>
      <Sub2></Sub2>
      <Line></Line>
      <Sub3></Sub3>
      <Line></Line>
      <Sub4></Sub4>
      <Line></Line>
      <Qna></Qna>
      <Line></Line>
      <Footer></Footer>
    </>
  );
}

export default App;
