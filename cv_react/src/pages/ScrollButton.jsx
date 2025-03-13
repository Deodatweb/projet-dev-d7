import "../global.css";
import "../styles/scrollbutton.css";

const GoTop = (props) => {
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button className="goTop">Haut</button>
      </div>
    </>
  );
};
export default GoTop;
