import Mailinfo from "./Mailinfo";
import Editor from "./Editor";
import Buttons from "./Buttons";
import "./Mailform.css";
function Mailform() {
  return (
    <>
      <div className="Mailform-wrapper">
        <Mailinfo />
        <Editor />
        <Buttons />
      </div>
    </>
  );
}
export default Mailform;
