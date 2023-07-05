import React from "react";

export default function MyLearning() {
  return (
    <div>
      <h1 className="mt-6 mb-6 ml-4 lg:mt-6 lg:mb-6 lg:ml-12 font-bold text-2xl text-gray-950">My Learning</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:ml-10">
        <div className="bg-white shadow rounded-2xl lg:p-3 flex mb-4 pt-2 pb-2 h-32 md:h-36 lg:h-40 w-full lg:w-11/12 relative">
          <div className="mr-4">
            <img
              src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Card Image"
              className="w-30 h-24 mt-2 ml-2 md:w-44 md:h-32 md:mt-0 lg:w-44 lg:h-32 lg:mt-1 rounded-2xl lg:object-cover"
            />
          </div>
          <div>
            <h6 className="text-s lg:text-l font-bold mb-1 md:mt-2 break-words">Becoming A Photographer</h6>
            <p className="text-s lg:text-md mb-1 md:mb-4 lg:mb-4 text-zinc-600">Clara Manning</p>
            <div className="bg-stone-200 h-3 w-56 md:w-96 rounded-lg">
              <div className="bg-blue-500 h-full  rounded-lg" style={{ width: "50%" }}></div>
              <p className="font-bold text-zinc-500 mt-1 md:mt-3 lg:mt-3">69% complete</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 m-2">
            <div className="flex justify-center items-center w-9 h-9 p-0 overflow-hidden opacity-100 text-blue-600 bg-gray-100 rounded-lg border-0">
              <svg className="w-4 h-4 overflow-visible opacity-100 z-1 fill-current" viewBox="0 0 384 512">
                <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-2xl lg:p-3 flex mb-4 h-32 md:h-36 w-full lg:h-40 lg:w-11/12 relative">
          <div className="mr-4">
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg"
              alt="Card Image"
              className="w-30 h-24 mt-4 ml-2 md:w-44 md:h-32 md:mt-2 lg:w-44 lg:mt-1 lg:h-32 rounded-2xl lg:object-cover"
            />
          </div>
          <div className="mt-2 lg:mt-0">
            <h6 className="text-s lg:text-l font-bold md:mt-2 mb-1">Design Thinking 2.0</h6>
            <p className="text-s lg:text-md mb-2 lg:mb-4 md:mb-4 text-zinc-600">Chris Kinley</p>
            <div className="bg-stone-200 h-3 w-56 md:w-96 rounded-lg">
              <div className="bg-blue-500 h-full rounded-lg" style={{ width: "50%" }}></div>
              <p className="font-bold text-zinc-500 mt-1 md:mt-3 lg:mt-3">27% complete</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 m-2">
            <div className="flex justify-center items-center w-9 h-9 p-1 overflow-hidden opacity-100 text-gray-400 bg-gray-100 rounded-lg border-0">
              <svg className="w-4 h-4 overflow-visible opacity-100 z-1 fill-current" viewBox="0 0 384 512">
                <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 md:mt-8 md:w-44 lg:mt-8 lg:w-44 rounded-xl">
          See All
        </button>
      </div>
    </div>
  );
}
