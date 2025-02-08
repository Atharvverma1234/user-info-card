import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center h-screen text-gray-700 text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-purple-300">
      <div className="bg-white p-8 rounded-xl shadow-2xl flex w-[500px] border border-gray-300 flex-row items-center space-x-6 transform transition duration-500 hover:scale-105">
        <div className="w-32 h-32 border-4 border-blue-600 rounded-lg overflow-hidden shadow-lg">
          <img
            src={user.picture.large}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left space-y-3">
          <h2 className="text-3xl font-bold text-gray-900">{user.name.first} {user.name.last}</h2>
          <p className="text-gray-700 text-lg font-medium capitalize">Gender: {user.gender}</p>
          <p className="text-gray-600 text-md font-semibold"> {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
