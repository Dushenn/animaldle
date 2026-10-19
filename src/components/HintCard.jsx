/* export default function HintCard(props) {
  return (
    <div className="hint-card">
      <span className="hint-number">{props.number}</span>
      <p className="hint-text">{props.text}</p>
    </div>
  );
} */


//kraca verzija:
export default function HintCard({number, text}) {
  return (
    <div className="hint-card">
      <span className="hint-number">{number}</span>
      <p className="hint-text">{text}</p>
    </div>
  );
}