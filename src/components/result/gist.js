/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import { FormattedMessage } from "react-intl";

export default function Gist({ width = "250px", value, title, bgColor }) {
  // eslint-disable-next-line no-console
  return (
    <div style={{ width: width }} className="mr-2 mb-1">
      <p
        className={bgColor + " text-center text-light mb-1 p-3"}
        style={{ fontSize: "1.5rem" }}
      >
        {value}
      </p>
      <p
        className={bgColor + " bg-warning text-center text-light p-1"}
        style={{ fontSize: "1rem" }}
      >
        <FormattedMessage id={title.toLowerCase()} defaultMessage={title} />
      </p>
    </div>
  );
}
