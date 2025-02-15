import React from 'react'

type Props = {
  form:{
    name:string
    numberofReviews:number
    
  }
}

const ProductForm = ({form}: Props) => {
  return (
    <div className='px-2'>
        ProductReviews
    </div>
  )
}

export default ProductForm