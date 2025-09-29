import { useState } from "react";
import { cn } from "../lib/utils";

const message: string[] = [
  "Learn React",
  "Apply for jobs",
  "Invest you new income",
];

//main branch
export default function Step() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen flex justify-center items-center">
      {/* Container */}
      <section className="bg-gray-100 font-semibold rounded-2xl w-full px-6 py-6 max-w-3xl flex gap-y-8   flex-col">
        {/* Numbers */}
        <div className="flex justify-between">
          <div
            className={cn(
              "bg-gray-300  rounded-full w-7 h-7 flex justify-center items-center ",
              step >= 1 ? "bg-[#7950f2] text-white " : ""
            )}
          >
            1
          </div>
          <div
            className={cn(
              "bg-gray-300 rounded-full w-7 h-7 flex justify-center items-center",
              step >= 2 ? "bg-[#7950f2] text-white" : ""
            )}
          >
            2
          </div>
          <div
            className={cn(
              "bg-gray-300 rounded-full w-7 h-7 flex justify-center items-center",
              step >= 3 ? "bg-[#7950f2] text-white" : ""
            )}
          >
            3
          </div>
        </div>

        {/* Message */}
        <p className="w-full  text-center font-medium text-lg">
          Step {step}: {message[step - 1]}
        </p>

        {/* Button */}
        <div className="flex text-white  justify-around">
          <button
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            type="button"
            className="bg-[#7950f2] p-2 rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            disabled={step === message.length}
            onClick={() => setStep(step + 1)}
            type="button"
            className="bg-[#7950f2] p-2 rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
