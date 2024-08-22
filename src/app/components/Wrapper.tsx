import { ReactNode } from "react"

const Wrapper = ({children}: {children: ReactNode}) => {
  return (
    <div className="px-12">
        {children}
    </div>
  )
}

export default Wrapper