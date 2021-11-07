import styled from "styled-components";
import "./Mypage.css";
import emptyImg from "./resources/empty.png";
import { useState } from "react";

function Mypage() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="Mypage-container">
        <div className="tab-wrapper">
          <StyledTabs>
            <span
              className={
                toggleState === 1 ? "tab-text active-tabs" : "tab-text"
              }
              onClick={() => toggleTab(1)}
            >
              활동로그
            </span>
            <span className="tab-divider">|</span>
            <span
              className={
                toggleState === 2 ? "tab-text active-tabs" : "tab-text"
              }
              onClick={() => toggleTab(2)}
            >
              개인정보 수정
            </span>
          </StyledTabs>
          <div className="styledTabContent-wrapper">
            <div
              className={
                toggleState === 1 ? "active-content" : "inactive-content"
              }
            >
              <StyledTabContent>
                <StyledTabs innerTab>
                  <span className="tab-text">받은 편지</span>
                  <span className="tab-text">보낸 편지</span>
                </StyledTabs>
                <StyledLogs>
                  <img src={emptyImg} alt="empty" className="emptyImg" />
                  <p className="no-logs">내역이 없습니다</p>
                </StyledLogs>
              </StyledTabContent>
            </div>
            <div
              className={
                toggleState === 2 ? "active-content" : "inactive-content"
              }
            >
              <form className="form-renewPw">
                <p className="p-renew-pw">새로운 비밀번호</p>
                <input type="password" className="input-renew-pw" required />
                <span className="span-alert unavailable">
                  비밀번호는 8~15자리 이상이어야합니다
                </span>
                <span className="span-alert available">
                  사용가능한 비밀번호입니다
                </span>
                <p className="p-renew-pw">비밀번호 확인</p>
                <input type="password" className="input-renew-pw" required />
                <span className="span-alert unavailable">
                  비밀번호가 일치하지 않습니다
                </span>
                <span className="span-alert available">
                  비밀번호가 일치합니다
                </span>
                <button type="button" className="btn-submit">
                  변경하기
                </button>
                <button type="button" className="btn-withdrawal">
                  탈퇴하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const StyledTabContent = styled.div`
  align-items: flex-start;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  border: 4px solid palevioletred;
  border-radius: 3px;
`;

const StyledTabs = styled.div`
  flex: 1 1 auto;
  background: ${(props) => (props.send ? "palevioletred" : "white")};
  color: ${(props) => (props.send ? "white" : "palevioletred")};
  font-size: ${(props) => (props.innerTab ? "1em" : "1.2em")};
  padding: ${(props) => (props.innerTab ? "1.2em" : "0.25em 1em")};
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const StyledLogs = styled.div`
  width: 100%;
  border: 3px solid green;
  position: relative;
`;

export default Mypage;
