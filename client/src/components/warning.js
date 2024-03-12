import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthWarning({ letter }) {
  const navigate = useNavigate();

  useEffect(() => {
    let alertMessage;
    if (letter === 'c') {
      alertMessage = "Please create an account or log in to place orders and view order history.";
    } else if (letter === 'w') {
      alertMessage = "Message 2: Another message goes here...";
    } else {
      alertMessage = "Default message goes here...";
    }
    alert(alertMessage);
    navigate('/');
  }, [letter, navigate]);

  // Return null since the component doesn't render anything
  return null;
}

export default AuthWarning;