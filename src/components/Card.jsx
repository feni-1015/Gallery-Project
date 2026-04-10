import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank '>
          <div className='h-55 w-65 overflow-hidden rounded m-2'>
            <img className='h-full w-full object-cover rounded' src={props.elem.download_url} alt="" />
          </div>
          <h2 className='p-2 font-medium text-xl'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card