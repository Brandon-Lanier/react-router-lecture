import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

const history = useHistory();

  const handleClick = () => {
    alert('You clicked me!')
    // change location
    history.push('/animals')
  }

  
  return (
    <div>
      <h1>HOME</h1>
      <button onClick={handleClick}>Lets Go!</button>
      <img src="https://pixy.org/download/4718707/" width={500}/>
    </div>
  );
}

export default Home;
