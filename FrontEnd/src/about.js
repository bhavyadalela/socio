import React from 'react';
import video from './video/video.mp4'

export default function About() {
    return (
        <div style={styles.container}>
            <h1>About Us</h1>
            <p>Welcome to our website! Here you can learn more about us and our mission.</p>
            <div style={styles.videoContainer}>
                {/* You can embed your video here */}
                <video width="640" height="360" controls >
                    <source src={video} type='video/mp4' />
                </video>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    videoContainer: {
        maxWidth: '800px',
        margin: '20px auto',
    },
};
