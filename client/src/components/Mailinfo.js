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
  return (
    <>
      <div className="Mailinfo-wrapper">
        <label for="receiver">
          받는사람
          <label for="tome">
            <input name="tome" type="checkbox" />
            내게쓰기
          </label>
          <input
            type="email"
            name="receiver"
            placeholder="수신이메일"
            className="Mailinfo-input"
          />
        </label>
        <label for="title">
          제목
          <input
            type="text"
            name="title"
            placeholder="제목"
            className="Mailinfo-input"
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
      </div>
    </>
  );
}
export default Mailinfo;
