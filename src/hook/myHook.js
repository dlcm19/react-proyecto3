import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const myHook = URL => { 
const [headerData, useHeaderData] =useState()

useEffect(() =>{
     axios.get(URL)
     .then(res =>  useHeaderData(res.data))
     .catch(err => console.log(err))
},[])

return headerData

}
export default myHook
