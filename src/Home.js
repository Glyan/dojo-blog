import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('Glyan')

    const handleClick = () => {
        setName('Pam');
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;