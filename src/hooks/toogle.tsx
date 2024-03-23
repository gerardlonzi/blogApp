import { useState } from 'react'

interface prop {
    initial?:boolean
}

const Boolen = ({initial=false}:prop) => {

    const [value , setValue] = useState<boolean>(initial)

    function Toogle(){
        return setValue(!value)
    }
  return (
    {
        value,setValue,Toogle
    }
  )
}




export default Boolen