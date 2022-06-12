import React from 'react';
import pp from '../../images/about/kk.JPG'
import './About.css'

const About = () => {
    return (
        <div className=' container  info '>
            <div className='my-goals'>

                I'm a Web Developer. I am always ready to learn any
                technology or language. A highly dedicated, disciplined
                and self-learning individual looking to expand my horizons
                in the field of Web design and Development.  I’m expert in
                HTML, CSS, Bootstrap, JavaScript, ES6, React, MongoDB etc.

            </div>
            <div >
                <img src={pp} width='300px' height='270px
                ' alt="" />
                <h3
                >Konok Mamader</h3>
            </div>
        </div>
    );
};

export default About;