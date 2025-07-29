// import { setAllJobs } from '@/redux/jobSlice'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const useGetAllJobs = () => {
//     const dispatch = useDispatch();
//     const {searchedQuery} = useSelector(store=>store.job);
//     useEffect(()=>{
//         const fetchAllJobs = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
//                 console.log(res.data)
//                 if(res.data.success){
//                     dispatch(setAllJobs(res.data.jobs));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAllJobs();
//     },[searchedQuery])
// }

// export default useGetAllJobs

import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllJobs = async () => {
            console.log("Searched Query:", searchedQuery);
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
                console.log("API response:", res.data);
                if (res.data.success && Array.isArray(res.data.jobs)) {
                    dispatch(setAllJobs(res.data.jobs));
                  } else {
                    console.error("Invalid jobs data", res.data.jobs);
                  }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    },[searchedQuery])
}

export default useGetAllJobs