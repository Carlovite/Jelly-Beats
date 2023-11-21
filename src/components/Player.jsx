import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

const Player = () => {
  const [value, setValue] = useState(0);

  return (
    <RangeSlider
      value={value}
      onChange={(changeEvent) => setValue(changeEvent.target.value)}
    />
  );
};
export default Player;
