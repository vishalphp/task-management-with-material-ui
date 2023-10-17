import React from 'react'

export default function Logo(props) {
  return (
     <>
      <div className='logo' style={{color: `${props.theme.palette.primary.topmenuText}`, textAlign:'left'}} >MatLearnTut</div>
     </>
  )
}
