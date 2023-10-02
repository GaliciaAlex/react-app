import React from 'react'
import Card from './Card'
import image1 from "../assets/reactJs.jpeg"
import image2 from "../assets/angularJ.jpeg"
import image3 from "../assets/javascript.jpeg"


const cards =[
  {
    id: 1,
    title: 'Fast React',
    image: image1,
    instructor: "Victor A. Galicia Zarco"
  },
  {
    id: 2,
    title: 'Fast Java-Docker',
    image: image2,
    instructor: "Jose Luis Lopez Manuel"
  },
  {
    id: 3,
    title: 'Fast Java',
    image: image3,
    instructor: "Hasive Leon Bautista"
  }
]

export default function Cards() {
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map( c => (
            <div className='col-md-4' key={cards.id}>
              <Card
              Key ={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              />
              </div>
          ))
        }
      </div>
    </div>
  );
} 