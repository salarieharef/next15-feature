'use client'
import { useFormStatus } from "react-dom"

const SubmitButton4 = () => {
    const {pending} = useFormStatus()

  return (
    <button type="submit" disabled={pending} className="disabled:bg-red-300" >Submit</button>

  )
}

export default SubmitButton4