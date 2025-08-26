import { useState } from "react";

export default function TestPage() {
  const [count, setCount] = useState(10);
  const [status, setStatus] = useState("Online");

  return (
    <div className="w-full h-full justify-center items-center flex">
      <div className="w-[500px] h-[500px] bg-amber-100 text-white flex flex-col items-center justify-center gap-[25px] ">
        <div className="flex items-center justify-center gap-[20px]">
          <button
            className="w-[100px] h-[40px] bg-accent rounded-lg text-lg"
            onClick={() => {
              setCount(count - 1);
              console.log("Decreasing....");
              console.log(count - 1);
            }}
          >
            -
          </button>
          <span className="text-accent text-4xl">{count}</span>

          <button
            className="w-[100px] h-[40px] bg-accent rounded-lg text-lg"
            onClick={() => {
              setCount(count + 1);
              console.log("Increasing....");
              console.log(count + 1);
            }}
          >
            +
          </button>
        </div>

        <div className=" flex flex-col items-center justify-center gap-[20px]">
          <span className="text-accent text-4xl">{status}</span>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <button
            className=" bg-accent w-[100px] h-[40px] rounded-lg text-lg"
            onClick={() => {
              setStatus("Online");
            }}
          >
            Online
          </button>
          <button
            className=" bg-accent w-[100px] h-[40px] rounded-lg text-lg"
            onClick={() => {
              setStatus("Offline");
            }}
          >
            Offline
          </button>
          <button
            className=" bg-accent w-[100px] h-[40px] rounded-lg text-lg"
            onClick={() => {
              setStatus("Busy");
            }}
          >
            Busy
          </button>
        </div>
      </div>
    </div>
  );
}
