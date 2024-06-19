/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react"

function MenuIcon(props: any) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.702 10c0-.552.441-1 .986-1h5.462c.545 0 .986.448.986 1s-.441 1-.986 1h-5.462a.993.993 0 01-.986-1zm3.717 4.692c-4.986 0-9.028 4.099-9.028 9.154 0 5.056 4.042 9.154 9.028 9.154 4.986 0 9.027-4.098 9.027-9.154 0-5.055-4.041-9.154-9.027-9.154zm-11 9.154c0-6.16 4.925-11.154 11-11.154s11 4.994 11 11.154S29.494 35 23.419 35s-11-4.994-11-11.154zm16.203-5.277a1.01 1.01 0 010 1.415l-4.506 4.569a.977.977 0 01-1.394 0 1.01 1.01 0 010-1.414l4.506-4.57a.977.977 0 011.394 0z"
      />
    </svg>
  )
}

export default MenuIcon
