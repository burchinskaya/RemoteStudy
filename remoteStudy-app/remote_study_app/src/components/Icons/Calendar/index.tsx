import React from "react";
import IDefaultIconProps from "../IDefaultIconProps";

const CalendarIcon = ({
  width = 31.448,
  height = 35.996,
  color = "#545557",
  className,
}: IDefaultIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 31.5 36"
      className={className}
    >
      <path
        id="Icon_awesome-calendar-check"
        data-name="Icon awesome-calendar-check"
        d="M30.656,11.25H.844A.844.844,0,0,1,0,10.406V7.875A3.375,3.375,0,0,1,3.375,4.5H6.75V.844A.844.844,0,0,1,7.594,0h2.813a.844.844,0,0,1,.844.844V4.5h9V.844A.844.844,0,0,1,21.094,0h2.813a.844.844,0,0,1,.844.844V4.5h3.375A3.375,3.375,0,0,1,31.5,7.875v2.531A.844.844,0,0,1,30.656,11.25ZM.844,13.5H30.656a.844.844,0,0,1,.844.844V32.625A3.375,3.375,0,0,1,28.125,36H3.375A3.375,3.375,0,0,1,0,32.625V14.344A.844.844,0,0,1,.844,13.5Zm23.435,6.746-1.981-2a.844.844,0,0,0-1.193,0l-7.456,7.4-3.233-3.259a.844.844,0,0,0-1.193,0l-2,1.981a.844.844,0,0,0,0,1.193l5.808,5.855a.844.844,0,0,0,1.193,0l10.051-9.971a.844.844,0,0,0,0-1.193Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarIcon;
