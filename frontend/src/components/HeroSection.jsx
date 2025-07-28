import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        // <div className='text-center'>
        //     <div className='flex flex-col gap-5 my-10'>
        //         <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
        //         <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
        //         <p>Stop scrolling through endless listings. Find the perfect job, apply in minutes, and take the next step in your career journey—starting today.</p>
        //         <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
        //             <input
        //                 type="text"
        //                 placeholder='Find your dream jobs'
        //                 onChange={(e) => setQuery(e.target.value)}
        //                 className='outline-none border-none w-full'

        //             />
        //             <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
        //                 <Search className='h-5 w-5' />
        //             </Button>
        //         </div>
        //     </div>
        // </div>
        <div className='text-center px-4'>
  <div className='flex flex-col gap-5 my-10'>
    <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm sm:text-base'>
      No. 1 Job Hunt Website
    </span>
    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
      Search, Apply & <br />
      Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
    </h1>
    <p className='text-sm sm:text-base max-w-2xl mx-auto'>
      Stop scrolling through endless listings. Find the perfect job, apply in minutes, and take the next step in your career journey—starting today.
    </p>
    <div className='flex w-85 sm:w-3/4 md:w-2/3 lg:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-2 sm:gap-4 mx-auto'>
      <input
        type="text"
        placeholder='Find your dream jobs'
        onChange={(e) => setQuery(e.target.value)}
        className='outline-none border-none w-full text-sm sm:text-base py-2'
      />
      <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
        <Search className='h-5 w-5' />
      </Button>
    </div>
  </div>
</div>

    )
}

export default HeroSection