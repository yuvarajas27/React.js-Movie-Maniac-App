import React from 'react'
import { useParams } from 'react-router-dom'

const SingleCard = () => {
    const {id} = useParams()
  return (
    <div>
        {`ProductID:${id}`}
      
    </div>
  )
}

export default SingleCard
