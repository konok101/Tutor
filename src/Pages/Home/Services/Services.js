import React from 'react';
import english from '../../../images/serviceImg/english.png'
import math from '../../../images/serviceImg/math.png'
import ict from '../../../images/serviceImg/ict.png'
import science from '../../../images/serviceImg/science.png'
import chemistry from '../../../images/serviceImg/chemistry.png'
import Service from '../Service/Service';
const services = [
    { id: 1, Sub: "English problem Solve", Cost: 350, time: 'One houirs', img: english },
    { id: 2, Sub: "Math problem Solve", Cost: 290, time: 'One houirs', img: math },
    { id: 3, Sub: "Chemistry Solving", Cost: 180, time: 'One houirs', img: chemistry },
    { id: 4, Sub: "Science Solving", Cost: 250, time: 'One houirs', img: science },
    { id: 5, Sub: "ICt Solving", Cost: 200, time: 'One houirs', img: ict }

]

const Services = () => {


    return (
        <div className='container'>
            <h1>Services</h1>
            <div className='row'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;