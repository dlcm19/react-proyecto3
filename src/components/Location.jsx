import React from 'react'


const Location = ({location}) => {

    
  return (
<article>
    <div className='h1'>
      <h1>{location?.name}</h1>
    </div>
    <div className='container_data'>
        <h2><span className='span_conatiner_data'>Type :</span> {location?.type}</h2>
        <h2><span className='span_conatiner_data'>Dimension :</span> {location?.dimension}</h2>
        <h2><span className='span_conatiner_data'>Population :</span> {location?.residents.length}</h2>
    </div>
</article>
  )
}

export default Location

