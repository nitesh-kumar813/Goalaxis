
//------------------------best-------------------------

// import { setAllJobs } from '@/redux/jobSlice'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'


// const useGetAllJobs = () => {

        

//     const dispatch = useDispatch();
//     const { searchedQuery } = useSelector(store => store.job);
    
//     useEffect(() => {
        
//         const fetchAllJobs = async () => {
//             console.log("Searched Query:", searchedQuery);
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });

//                 console.log("API response:", res.data);

//                 if (res.data.success && Array.isArray(res.data.jobs)) {
//                     dispatch(setAllJobs(res.data.jobs));
//                   } else {
//                     console.error("Invalid jobs data", res.data.jobs);
                    
//                   }
//             } catch (error) {
//                 console.log(error);
                
//             }
//         }
//         fetchAllJobs();


//     },[searchedQuery])
// }

// export default useGetAllJobs


//---------------------------------new test-----------------------


import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = (activePage = "jobs") => {
  const dispatch = useDispatch();
  const { searchedQuery } = useSelector(store => store.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        let res;

        if (activePage === "jobs") {
          res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true });
        } else if (activePage === "browse" && searchedQuery) {
          res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
        } else {
          return;
        }

        if (res?.data?.success && Array.isArray(res.data.jobs)) {
          dispatch(setAllJobs(res.data.jobs));
        } else {
          dispatch(setAllJobs([]));
          console.error("Invalid jobs data", res?.data?.jobs);
        }
      } catch (error) {
        console.error("API error:", error);
        dispatch(setAllJobs([]));
      }
    };

    fetchAllJobs();
  }, [searchedQuery, activePage, dispatch]);
};

export default useGetAllJobs;

