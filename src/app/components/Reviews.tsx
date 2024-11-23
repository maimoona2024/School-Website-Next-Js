import React from 'react';
import Image from 'next/image';

const Reviews = () => {
    return (
        <div>
            <div id='reviews' className='w-screen mt-3 bg-transparent text-purple-950 h-10 flex justify-center'>
                <h1 className="text-center font-sans font-bold text-4xl hover:text-gray-400">Reviews</h1>
            </div>
            <div className='mx-6 grid grid-cols-2 gap-32'>
                <div>
                    <h1 className='text-4xl text-purple-950'>Student's Reviews:</h1>
                            <p>
                            As students, we’ve truly enjoyed our time at this school. The teachers are incredibly supportive and make learning exciting with interactive lessons. Activities like science fairs, sports days, and coding workshops keep us engaged beyond the classroom.
                            One of the highlights has been how modern and creative the school is in incorporating technology into education. For instance, learning tools like Next.js sessions for building websites were a fun way to explore coding and even inspired us to create our own portfolio projects. While everything has been great overall, we sometimes face challenges like occasional electricity issues that interrupt some activities, but the school always finds a way to adapt. We’re grateful for the opportunities and would recommend this school to anyone looking for a well-rounded education.
                            </p>
                </div>
                <div className='flex items-center'>
                    <Image className='rounded-xl border-purple-950 border-2' src={"/reviews.jpg"} width={500} height={500} alt=''></Image>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
