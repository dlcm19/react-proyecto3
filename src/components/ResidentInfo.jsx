import React from 'react'
import myHook from '../hook/myHook'

const ResidentInfo = ({url}) => {
   
  const CardResident = myHook(url)

  // console.log(CardResident);

  return (
    <article className='container_RedidentInfo'>
      <div>
        <img src={CardResident?.image} alt="" />
      </div>
      <div>
        <ul>
          <li><span className='span_Residentinfo'>Name :</span>{CardResident?.name} </li>
          <li> <span className='span_Residentinfo'>Status :</span> {CardResident?.status} </li>
          <li> <span className='span_Residentinfo'>Origin :</span>{CardResident?.origin.name} </li>
          <li> <span className='span_Residentinfo'>Appearance in episodes :</span>{CardResident?.episode.length}</li>
        </ul>
       </div>
    </article>
  )
}

export default ResidentInfo
