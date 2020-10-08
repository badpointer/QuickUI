import React from "react";

export default function (props) {
  return (
    <svg
      aria-hidden="true"
      width="1em"
      height="1em"
      style={{
        msTransform: "rotate(360deg)",
        WebkitTransform: "rotate(360deg)"
      }}
      viewBox="0 0 24 24"
      transform="rotate(360)"
      {...props}
    >
      <path
        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        fill="#0071E9"
      />
      <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
    </svg>
  );
}
