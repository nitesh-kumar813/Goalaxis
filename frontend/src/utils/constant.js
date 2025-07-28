// export const USER_API_END_POINT="http://localhost:8000/api/v1/user";
// export const JOB_API_END_POINT="http://localhost:8000/api/v1/job";
// export const APPLICATION_API_END_POINT="http://localhost:8000/api/v1/application";
// export const COMPANY_API_END_POINT = "http://localhost:8000/api/v1/company";

const BASE_API = import.meta.env.VITE_BASE_API_URL;

export const USER_API_END_POINT = `${BASE_API}/user`;
export const JOB_API_END_POINT = `${BASE_API}/job`;
export const APPLICATION_API_END_POINT = `${BASE_API}/application`;
export const COMPANY_API_END_POINT = `${BASE_API}/company`;
