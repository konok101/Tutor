import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <article>
                <div>
                    1 Difference between authorization and authentication? <br />
                    <b>Ans: </b>Amra kno website a user and password diya login korta chasse. User login korta parsa ki na  aitai holo authentication.
                    and  authorization holo extra kicu kora r permission aca ki na. Orthat login kora er por extra kicu korta parba ki na. jmn, admin bah moderator, amn kicu power thakba.
                </div>
                <div className='mt-4'>
                    2 Why are you using firebase? What other options do you have to implement authentication? <br />
                    <b>Ans: </b> Firebase allow the real-time data across all the devices- like as- Android, iOS, and the web without refreshing the screen.And other  way to authentication can be  voice fingerprints.
                </div>
                <div className='mt-3 mb-5'>
                    3 What other services does firebase provide other than authentication? <br />
                    <b>Ans: </b> The core features of Firebase include  databases, real-time queries,  hosting, data storage, file storage, Rest api, authentication, machine learning .
                </div>
            </article>
        </div>
    );
};

export default Blogs;