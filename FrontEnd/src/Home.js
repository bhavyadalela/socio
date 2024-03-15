
// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import Counter from './Counter';

// export default function Home() 
// {
//     const [display_counter, setDisplay_Counter] = useState(false);
    
//     if(display_counter)
//     {
//         return <Counter></Counter>
//     }


//     return (
//         <div>
//             <h1>Home</h1>
//             <Link to = "/login">Login</Link>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    const [displayCounter, setDisplayCounter] = useState(false);

    const toggleCounter = () => {
        setDisplayCounter(!displayCounter);
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to Our Website</h1>
            <p>Explore amazing features and services.</p>
            <div style={styles.buttonContainer}>
                <Link to="/login" style={styles.button}>Login</Link>
                <Link to="/about" style={styles.button}>About</Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    buttonContainer: {
        marginTop: '20px',
    },
    button: {
        textDecoration: 'none',
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: 'bold',
        margin: '0 10px',
        transition: 'background-color 0.3s ease',
    },
    // button:hover: {
    //     backgroundColor: 'darkblue',
    // },
};

