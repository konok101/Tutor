import React from 'react';
import english from '../../../images/serviceImg/english.png'
import math from '../../../images/serviceImg/math.png'
import ict from '../../../images/serviceImg/ict.png'
import science from '../../../images/serviceImg/science.png'
import chemistry from '../../../images/serviceImg/chemistry.png'
import  program from '../../../images/serviceImg/program.png'
import Service from '../Service/Service';
const services = [
    { id: 1, Sub: "English Solving", Cost: 350, time: '1.30h', img: english, Description:'I am good In english, If you need good result then Hire me'},
    { id: 2, Sub: "Math Solving", Cost: 290, time: '1.45h', img: math,Description:'I am good In  Math, If you need good result then Hire me' },
    { id: 3, Sub: "Chemistry learing", Cost: 180, time: '1.25h', img: chemistry,Description:'I am good In  Chemistry, If you need good result then Hire me' },
    { id: 4, Sub: "Physics Solving", Cost: 250, time: '1.10h', img: science,Description:'I am good In  Physics, If you need good result then Hire me' },
    { id: 5, Sub: "Ict  learning", Cost: 200, time: '1.25h', img: ict,Description:'I am good In  ICT, If you need good result then Hire me' },
    { id: 6, Sub: "Javascript  learning", Cost: 500, time: '1.20h', img: program, Description:'I am good In JavaScript, If you need good result then Hire me' }

]

const Services = () => {


    return (
        <div className='container' id='services'>
            <h1 className='text-center text-primary py-3'>Services</h1>
            <div className='row'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;