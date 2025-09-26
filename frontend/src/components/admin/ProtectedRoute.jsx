import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    } else if (user.role !== "recruiter") {
      navigate("/");
    }
  }, [user, navigate]); 

  return <>{user && children}</>;
};

export default ProtectedRoute;
