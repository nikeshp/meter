import SpreadMeter from "./SpreadMeter";

export default function App() {
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <SpreadMeter min={60} max={120} value={90} size={"small"} />
    </div>
  );
}
