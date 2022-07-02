import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calander = ({ date, setDate }) => {
  return (
    <div className="mx-auto">
      <DayPicker mode="single" selected={date} onSelect={setDate} />
    </div>
  );
};

export default Calander;
