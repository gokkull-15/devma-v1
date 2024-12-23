import React from "react";
import { Calendar, CheckCircle } from "lucide-react";

const EventApplyingPage = () => {
  const events = [
    { id: 1, name: "Hackathon 2024", date: "March 15, 2024" },
    { id: 2, name: "CodeSprint Challenge", date: "April 10, 2024" },
    { id: 3, name: "Networking Gala", date: "May 20, 2024" },
    { id: 4, name: "Innovation Contest", date: "June 5, 2024" },
  ];

  const applyForEvent = (eventName) => {
    alert(`You have applied for ${eventName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center py-10">
      <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
        Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-purple-600 border-opacity-30 transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="text-blue-400" size={32} />
              <h3 className="text-xl font-semibold">{event.name}</h3>
            </div>

            <p className="text-gray-300 mb-6 text-sm">
              Event Date: {event.date}
            </p>

            <button
              onClick={() => applyForEvent(event.name)}
              className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full text-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition duration-700 blur-md"></div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                <CheckCircle size={20} /> Apply for Event
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventApplyingPage;
