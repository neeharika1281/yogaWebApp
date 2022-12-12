import React from 'react'
import Typical from 'react-typical'
import '../Misc/Styles/Homepagestyle.css'


const steps = [
  'Hello 👋', 3000,
  'Yoga is a study of life. ', 3000,
  'Yoga unites our hearts, mind, body.', 3000,
  'Yoga takes you close to your true nature.', 3000,
  'Yoga is a discipline that opens the door to inner freedom.', 3000,
  'Join us now!!!', 3000,
];

const Homepage = () => {
  return (
    <div id='hpid'>
      <div class="container111">
        <Typical wrapper="span" steps={steps} loop={1} className={'caca'} />
      </div>
      </div>
  )
}

export default Homepage