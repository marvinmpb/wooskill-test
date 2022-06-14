import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import axios from 'axios';
import './styles.scss'

function CarouselComponent(props) {
  const [dogs, setDogs] = useState([])

  const getDogs = async () => {
    try {
      const res = await axios.get('https://dog.ceo/api/breeds/image/random')
      if (res.data.message.includes('.jpg')) {
        setDogs(res.data.message)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getDogs()
  }, [])


  return (
    <Carousel onChange={() => getDogs()} className='carousel'>
      <div>
        <img alt="a random dog" src={dogs} className='carousel-img' />
      </div>
      <div>
        <img alt="a random dog" src={dogs} />
      </div>
      <div>
        <img alt="a random dog" src={dogs} />
      </div>
      <div>
        <img alt="a random dog" src={dogs} />
      </div>
    </Carousel>

  )
}



export default CarouselComponent