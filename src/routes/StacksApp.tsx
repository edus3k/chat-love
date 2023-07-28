import React, { useState, useEffect} from "react";

import Loading from '@components/Loading';
import useAuthentication from '@config/useAuthentication';
import StacksUsers from '@routes/StacksUsers';
import StacksAuth from '@routes/StacksAuth';

const StacksApp = ()=>{
 
  const [loading, setLoading] = useState(false);
  const { user } = useAuthentication();
  
  useEffect(() => {
    startLoading();
  }, []);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },2000);
  };

  if(!user){
    console.log('users == false');
    return loading == true ? <Loading state={loading}/> : <StacksAuth/> 
  }else{
    console.log('users == true');
    return loading == true ? <Loading state={loading}/> : <StacksUsers/>
    
  }

}

export default StacksApp;