import { useEffect, useState } from 'react'

export const Preloader = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    


    setTimeout(() => {
      document.body.style.overflow = '';
      setloading(false);
    }, 500);

      
  }, []);

if (!loading){
  return null;
}

    return(
        <div className="preloader">
          <div className="loader"/>
        </div>
    )
}
