import React, {useContext} from 'react'
import { CounterContext } from '../Context/context'


const Compo1 = () => {

    const counter = useContext(CounterContext)


  return (
    <div>{counter}</div>
  )
}

export default Compo1