
import React, { useState, useEffect } from 'react';

function SidebarHeader( ) {
   // Access the first (and only) element in the array
   const [User, setuser] = useState({
    FullName: '',
    username: '',
    
    photo: '',
    //description: 'Administrator',
    email:'',
      password:'',
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const token=localStorage.getItem("access")
      let token2 = token.replace(/"/g, '');
        const response = await fetch("http://127.0.0.1:8000/manage/settings/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token2}`,
            "Content-Type": "application/json",
          },
        });
        
        if (response.ok) {
          const userData = await response.json();
          setuser(userData);
          
          
          console.log(User)
        } else {
          // Handle error
          console.error("Error fetching user data");
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  
  return (
    <div className="flex flex-col lg:w-[60%] md:w-[65%] w-[60%] items-center mt-8 mb-8">
      <div
        key={User.FullName}
        className="flex flex-col items-left cursor-pointer"
        
      >
        <img src={`http://127.0.0.1:8000${User.photo}`} alt={User.FullName} className="lg:w-24 md:w-[85px] md:h-[85px] lg:h-24 h-14 w-14 rounded-full mb-4" />
        <h3 className="lg:text-lg md:text-[20px] text-sm text-person-col font-bold">{User.FullName}</h3>
        <p className="text-person-col lg:text-[16px] md:text-[13px] text-[11px]">{User.username}</p>
      </div>
    </div>
  );
}

export default SidebarHeader;

/**
 * import React, { useState, useEffect } from 'react';

function SidebarHeader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user information from the API
    const fetchUser = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT/user'); // Replace with your actual API endpoint
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Failed to fetch user information');
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUser();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  if (!user) {
    return null; // You can render a loading state while waiting for user data
  }

  return (
    <div className="flex flex-col lg:w-[60%] md:w-[65%] w-[60%] items-center mt-8 mb-8">
      <div className="flex flex-col items-center cursor-pointer">
        <img
          src={user.img}
          alt={user.title}
          className="lg:w-24 md:w-[85px] md:h-[85px] lg:h-24 h-14 w-14 rounded-full mb-4"
        />
        <h3 className="lg:text-lg md:text-[20px] text-sm text-person-col font-bold">{user.title}</h3>
        <p className="text-person-col lg:text-[16px] md:text-[13px] text-[11px]">{user.description}</p>
      </div>
    </div>
  );
}

export default SidebarHeader;

 */