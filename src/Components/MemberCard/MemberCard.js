import React from 'react'
import { useState, useEffect } from 'react'
import './MemberCard.css'
import MemberJson from '../../Content/members.json'
import ButtonMailto from './ButtonMailto'

const member = MemberJson[0]
const name = member['英文全名']
const role = member['职位']
const linkedin = ''
const git = ''
const email = member['邮箱']
const test_img = ''

function RandomImage() {
  const [randomImagePath, setRandomImagePath] = useState('')

  useEffect(() => {
    const imagePaths = [
      'avatar-d1.png',
      'avatar-d2.png',
      'avatar-d3.png',
      'avatar-d4.png',
      'avatar-d5.png',
      'avatar-d6.png',
      'avatar-d7.png',
      'avatar-d8.png',
      'avatar-d9.png',
      'avatar-d10.png',
      'avatar-d11.png',
      'avatar-d12.png',
      'avatar-d13.png',
      'avatar-d14.png',
    ]
    const randomIndex = Math.floor(Math.random() * imagePaths.length)
    const randomPath = `Images/Avatars/${imagePaths[randomIndex]}`
    setRandomImagePath(randomPath)
  }, [])

  return randomImagePath
}

function MemberCard() {
  let image
  if (test_img === '') {
    image = RandomImage()
    console.log(image)
  } else {
    image = test_img
  }

  return (
    <div className='parent-card'>
      <div className='memberCard'>
        <div className='profile-card'>
          <div className='card-top'>
            <img src={image} alt='member image' className='member-image' />
          </div>
          <div className='card-bottom'>
            <div className='member-name'>{name}</div>
            <div className='member-role'>{role}</div>
          </div>
        </div>
      </div>
      <div className='contact-card'>
        {git ? (
          <a href={git} target='_blank' rel='noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='Icon'
            >
              <title>github</title>
              <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
            </svg>
          </a>
        ) : (
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='disabled'
            >
              <title>github</title>
              <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
            </svg>
          </a>
        )}
        {linkedin ? (
          <a href={linkedin} target='_blank' rel='noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='Icon'
            >
              <title>linkedin</title>
              <path d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z' />
            </svg>
          </a>
        ) : (
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='disabled'
            >
              <title>linkedin</title>
              <path d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z' />
            </svg>
          </a>
        )}

        <ButtonMailto mailto={'mailto:' + email} />
      </div>
    </div>
  )
}

// function MemberCard({ props }) {
//   const name = props.英文全名
//   const role = props.职位
//   const linkedin = props['LinkedIn(optional)']
//   const git = props['Github(optional)']
//   const email = props['邮箱']
//   const image = props['照片(optional)']
//   if (!image) {
//     image =
//       'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60'
//   }
//   return (
//     <div className='parent-card'>
//       <div className='MemberCard'>
//         <div className='profile-card'>
//           <div className='card-top'>
//             <img src={image} alt='member image' className='member-image' />
//           </div>
//           <div className='card-bottom'>
//             <div className='member-name'>{name}</div>
//             <div className='member-role'>{role}</div>
//           </div>
//         </div>
//       </div>
//       <div className='contact-card'>
//         <a href={git} target='_blank' rel='noreferrer'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             viewBox='0 0 24 24'
//             className='Icon'
//           >
//             <title>github</title>
//             <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
//           </svg>
//         </a>
//         <a href={linkedin} target='_blank' rel='noreferrer'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             viewBox='0 0 24 24'
//             className='Icon'
//           >
//             <title>linkedin</title>
//             <path d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z' />
//           </svg>
//         </a>
//         <a href={email} target='_blank' rel='noreferrer'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             viewBox='0 0 24 24'
//             className='Icon'
//           >
//             <title>email-outline</title>
//             <path d='M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z' />
//           </svg>
//         </a>
//       </div>
//     </div>
//   )
// }

export default MemberCard
