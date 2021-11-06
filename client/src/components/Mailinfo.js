import "./Mailinfo.css";
import { useState } from "react";
import Select from "react-select";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";
const { getTomorrow } = require("./funcs/dateFuncs");

function Mailinfo() {
  const options = [
    { value: "1주일 후", label: "1주일 후" },
    { value: "1개월 후", label: "1개월 후" },
    { value: "3개월 후", label: "3개월 후" },
    { value: "6개월 후", label: "6개월 후" },
    { value: "1년 후", lable: "1년 후" },
  ];
  const [reservedDate, setStartDate] = useState(() => getTomorrow());
  registerLocale("ko", ko);

  const [emailInfo, setEmailInfo] = useState({
    title: "",
    receiver: "",
  });

  const handleChange = (e) => {
    setEmailInfo({ ...emailInfo, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="Mailinfo-wrapper">
        <form>
          <label htmlFor="receiver">
            받는사람
            <label htmlFor="tome" className="checkbox-tome">
              <input name="tome" type="checkbox" />
              내게쓰기
            </label>
            <input
              type="email"
              name="receiver"
              placeholder="수신이메일을 작성해주세요"
              className="Mailinfo-input"
              value={emailInfo.receiver}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="title">
            제목
            <input
              type="text"
              name="title"
              placeholder="제목을 작성해주세요"
              className="Mailinfo-input Mailinfo-input-title"
              value={emailInfo.title}
              onChange={handleChange}
            />
          </label>
          <Select options={options} />
          <DatePicker
            selected={reservedDate}
            onChange={(date) => setStartDate(date)}
            locale="ko"
            dateFormat="yyyy-MM-dd"
            minDate={subDays(new Date(), -1)}
            maxDate={addDays(new Date(), 365)}
          />
        </form>
      </div>
    </>
  );
}
export default Mailinfo;
