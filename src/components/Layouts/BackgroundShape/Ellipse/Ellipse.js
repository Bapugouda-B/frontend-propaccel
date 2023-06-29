import "./ellipse.css";

export default function Ellipse() {
  const numRows = 7;
  const numColumns = 9;

  const ellipses = Array.from({ length: numRows * numColumns }, (_, index) => (
    <div key={index} className="ellipse"></div>
  ));

  return (
    <div className="matrix-container">
      <div className="matrix">{ellipses}</div>
    </div>
  );
}
