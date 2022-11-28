import "./spreadmeter-styles.css";

type SpreadMeterProps = {
  min: number;
  max: number;
  value: number;
  direction?: number;
  size?: string;
  unit?: string;
};

const SpreadMeter = ({
  min,
  max,
  value,
  direction = 0,
  size = "big",
  unit = "bps",
}: SpreadMeterProps): JSX.Element => {
  const sliderPosition = ((value - min) / (max - min)) * 100;
  const thumbWidth = size === "big" ? 93 : 65;

  const sliderPositionWithWidth =
    sliderPosition < 10
      ? `${sliderPosition}%`
      : `calc(${sliderPosition}% - ${thumbWidth / 2}px)`;
  return (
    <div className={`slider-container-${size}`}>
      <div className={`slider-${size}`}>
        <div className={`track-${size}`} />
        <div
          className={`thumb-${size}`}
          style={{ left: `${sliderPositionWithWidth}` }}
        >
          <div className={`number-${size}`}>{value}</div>
        </div>
      </div>
      <div className={`unit-${size}`}>
        <div className={`min-unit-${size}`}>
          {min} {unit}
        </div>
        <div className={`max-unit-${size}`}>
          {max} {unit}
        </div>
      </div>
    </div>
  );
};

export default SpreadMeter;
