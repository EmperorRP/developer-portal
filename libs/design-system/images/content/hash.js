import * as React from "react"

const SvgHash = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.369.01a.75.75 0 0 1 .622.859L5.57 3.5h3.98l.46-2.868a.75.75 0 0 1 1.48.237L11.07 3.5h2.18a.75.75 0 0 1 0 1.5h-2.42l-.64 4h2.56a.75.75 0 0 1 0 1.5h-2.8l-.46 2.869a.75.75 0 0 1-1.48-.237l.42-2.632H4.45l-.46 2.869a.75.75 0 0 1-1.48-.237l.42-2.632H.75a.75.75 0 0 1 0-1.5h2.42l.64-4H1.25a.75.75 0 1 1 0-1.5h2.8L4.51.632A.75.75 0 0 1 5.368.01ZM8.67 9l.64-4H5.33l-.64 4h3.98Z"
      fill="currentColor"
    />
  </svg>
) // for backwards-compat–

export const ReactComponent = SvgHash
export default SvgHash
