import * as React from "react"

const SvgTrendUp = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m23 6-9.5 9.5-5-5L1 18"
      stroke="#2F353F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 6h6v6"
      stroke="#2F353F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
) // for backwards-compat–

export const ReactComponent = SvgTrendUp
export default SvgTrendUp
