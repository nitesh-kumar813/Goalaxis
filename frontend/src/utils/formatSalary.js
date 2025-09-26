export const formatSalary = (salary) => {
    if (!salary) return "N/A";
  
    if (salary >= 200000) {
      const lpa = (salary / 100000).toFixed(1); 
      return `${lpa} LPA`;
    } else {
      
      const monthly = (salary / 12).toFixed(0);
      return `₹${monthly}/mo`;
    }
  };