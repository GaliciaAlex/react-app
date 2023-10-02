import React from 'react'
import PropTypes from 'prop-types'
//import image1 from "../assets/reactJs.jpeg"

export default function Card({id, title, image, instructor}) {
  return (
    <div className='card text-center bg-dark'>
     <div className='card-body text-light'>
      <img src={image} alt='' className='card-imf-top'></img>
      <h4 className='card-title'>{title}</h4>
      <p className='card-text text-primary'>
       Instructor: {instructor}
      </p>
      <a href='#!' className='btn btn-outline-secondary rounded-3'>
        Ir al sitio web
      </a>
     </div>
    </div>
  )
  Card.propTypes ={
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string
  }
}