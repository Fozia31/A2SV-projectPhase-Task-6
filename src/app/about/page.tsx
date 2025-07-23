import React from 'react';
import { job_postings } from '../../../data/job_postings';
import Image from 'next/image' ;



const AboutPage = ( ) => {
    const singleJob = job_postings[0];
  return (
    <div className='flex text-black ml-15' >
        <div className='mr-20'>
            <div className='w-270 h-30'>
                <h1 className='font-bold text-xl text mt-4 mb-2'> Description </h1>
                <h1>{singleJob.description}</h1>
            </div>
            <div className="responsibilities">
                <h1 className='font-bold text-xl text mt-3 mb-3'> Responsibilities </h1>
                <ul className='space-y-0'>
                    {singleJob.responsibilities.map((r ,i) => (
                        
                        <li key={i} className='flex p-0 m-0 mb-2 gap-1'> <Image src='/right.png' alt='log' width={20} height={20} className='m-0 p-0'/><span className='ml-0 p-0'> {r}</span> </li>
                    ))}
                </ul>
            </div>
            <div className="ideal">
                <h1 className='font-bold text-xl text mt-5 mb-3'> ideal_candidate </h1>
                <p className='font-bold'>● Young({singleJob.ideal_candidate.age}) {singleJob.ideal_candidate.gender} {singleJob.title}</p>
                <ul className='w-270'>
                    {singleJob.ideal_candidate.traits.map((r ,i) => (
                        <li key={i}>● {r}</li>
                    ))} 
                </ul>
            </div>
            <div className="where">
                <h1 className='font-bold text-xl mt-5 mb-3'> when & where </h1>
                <p className='flex'><Image src= '/location.png' alt='Location' width={35} height={35} className='mr-3 m-0 p-0' /> <span className='mt-2'>{singleJob.when_where }</span> </p>
            </div>
        </div> 

        <div>
            <div className="about">
            <h1 className='font-bold text-xl mt-7 mb-5'> About </h1>
            <p className='flex mb-3'> <Image src='/plus.png' alt='plus' width={35} height={13} className='mr-3'/> <p><span className='text-gray-500'>posted_on</span> <p>{singleJob.about.posted_on}</p></p></p>
            <p className='flex mb-3'> <Image src='/fire.png' alt='plus' width={35} height={13} className='mr-3'/> <p><span className='text-gray-500'>deadline</span> <p>{singleJob.about.deadline}</p></p></p>
            <p className='flex mb-3'> <Image src='/location.png' alt='plus' width={35} height={13} className='mr-3'/> <p><span className='text-gray-500'>location</span> <p>{singleJob.about.location}</p></p></p>
            <p className='flex mb-3'> <Image src='/calander.png' alt='plus' width={35} height={13} className='mr-3'/> <p><span className='text-gray-500'>start_date</span> <p>{singleJob.about.start_date}</p></p></p>
            <p className='flex mb-3'> <Image src='/calander.png' alt='plus' width={35} height={13} className='mr-3'/> <p><span className='text-gray-500'>end_date</span> <p>{singleJob.about.end_date}</p></p></p>
            
            <h1 className='font-bold mb-3 text-[18px]'> categories </h1>
            <ul className='flex'>
                {singleJob.about.categories.map((r ,i) => (
                    <li key={i} className='mr-5 mb-3 border rounded-[20px] h-7 w-22  bg-orange-100 text-center align-centerbg-orange-300 text-orange-500 '>{r}</li>
                ))}
            </ul>

            <h1 className=' font-bold mb-3 text-[18px] '> required_skills </h1>
            <ul className='flex flex-wrap gap-2' >
                {singleJob.about.required_skills.map((r ,i) => (
                    <li key={i} className='m-0 text-purple-400 border-purple-200 borer flex bg-purple-100 items-center w-25 h-15 rounded-[20px] text-center justify-center '>{r}</li>
                ))}
            </ul>
        </div>
    </div>
        
        
    </div>
      )
}

export default AboutPage
