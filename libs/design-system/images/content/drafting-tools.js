import * as React from "react"

const SvgDraftingTools = (props) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.726 10.72-3.168-3.168 3.167-3.167a1 1 0 0 0 0-1.414V2.97l-1.79-1.79a1 1 0 0 0-1.414-.001L7.352 4.348 4.186 1.179a1.002 1.002 0 0 0-1.414 0L.31 3.639a1 1 0 0 0 0 1.415l3.167 3.167-3.46 3.46v3.206h3.205l3.46-3.46 3.168 3.168a1.004 1.004 0 0 0 1.415 0l2.46-2.461a1 1 0 0 0 0-1.415Zm-2.501-8.835L13.02 3.68 9.853 6.847 8.058 5.052l3.167-3.167ZM3.018 13.887h-2V12.09l3.165-3.164 1.838 1.838-3.003 3.121Zm7.54.002-9.54-9.542 2.461-2.46L5.373 3.78 4.247 4.907l.708.707L6.08 4.488l2.065 2.065-1.127 1.125.708.707 1.126-1.126 2.065 2.065-1.126 1.125.707.707 1.126-1.125 1.395 1.396-2.46 2.462Z"
      fill="currentColor"
    />
  </svg>
) // for backwards-compat–

export const ReactComponent = SvgDraftingTools
export default SvgDraftingTools
