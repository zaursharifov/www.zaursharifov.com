import "../style/app.scss";

export default function Content({ changeComponent }) {
  return (
    <div className="content">
      <div>{changeComponent}</div>
    </div>
  );
}
