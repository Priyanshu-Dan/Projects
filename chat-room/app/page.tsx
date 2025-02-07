
"use client"
import { useState } from "react";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const handleCreateRoom = () => {
    console.log("Room Name:", roomName);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 ">
      <div className="bg-gray-600 p-6 rounded-2xl shadow-lg w-80 " >
        <h2 className="text-white text-xl font-semibold text-center mb-4">
          Create Room
        </h2>

        <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="w-full p-2 mb-4 bg-white text-gray-600 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 bg-white text-gray-600 rounded-md"
        />

        <button
          onClick={handleCreateRoom}
          className="w-full py-2 bg-white text-gray-600 font-semibold rounded-md hover:bg-gray-200"
        >
          Create Room
        </button>
      </div>
    </div>
  );
};

export default CreateRoom;
