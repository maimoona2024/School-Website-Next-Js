import React from 'react'
import Image from 'next/image'
const Why = () => {
    return (
        <div>
                <div id='why' className='w-screen mt-3 bg-transparent text-purple-950 h-10 flex justify-center'>
                    <h1 className="text-center font-sans font-bold text-4xl hover:text-gray-400">Why Us</h1>
                </div>
                <div className='grid grid-cols-2 ml-6 my-10 gap-32'>
                    <div>
                    <h1 className='text-4xl text-purple-950'>Why Choose Us?</h1>
                    <div>
                        <h1  className="text-xl text-purple-950">Academic Excellence:</h1>
                        <p>A rigorous curriculum designed to challenge and inspire.</p>
                        <h1 className="text-xl text-purple-950">Holistic Approach:</h1>
                        <p>Focus on intellectual, emotional, and physical development.</p>
                        <h1 className="text-xl text-purple-950">State-of-the-Art Facilities:</h1>
                        <p>Modern classrooms, science labs, libraries, and sports arenas to enhance learning experiences.</p>
                        <h1 className="text-xl text-purple-950">Experienced Educators:</h1>
                        <p>A team of qualified and passionate teachers dedicated to student success.</p>
                    </div>
                    </div>
                        <Image src={"/b1.png"} width={250} height={250} alt=''></Image>
                </div>

        </div>

    )
}

export default Why
