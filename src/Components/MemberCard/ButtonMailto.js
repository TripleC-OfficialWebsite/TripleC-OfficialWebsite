import React from 'react'
import { Link } from 'react-router-dom'

const ButtonMailto = ({ mailto }) => {
  return (
    <Link
      to='#'
      onClick={(e) => {
        window.location.href = mailto
        e.preventDefault()
      }}
    >
      <a target='_blank' rel='noreferrer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='Icon'
        >
          <title>email-outline</title>
          <path d='M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z' />
        </svg>
      </a>
    </Link>
  )
}

export default ButtonMailto
