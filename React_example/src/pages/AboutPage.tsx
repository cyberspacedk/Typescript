import React from 'react';
import {useHistory} from 'react-router-dom'

const AboutPage : React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim?</p>
      <button 
        className="btn"
        onClick={()=>history.push('/')}
      >
        Go back
      </button>
    </div>
  )
}

export default AboutPage;