import React, { useState } from "react";
import { ImRadioChecked, ImRadioUnchecked } from "react-icons/im";
const QuizData = [
  {
    id: 1,
    question: `What is the capital of Nigeria?`,
    options: [`New Delhi`, `Abuja`, `Owerri`, `Enugu`],
    answer: `Abuja`,
  },
  {
    id: 2,
    question: `What is the capital of India?`,
    options: [`New Delhi`, `Abuja`, `Mumbai`, `Aba`],
    answer: `New Delhi`,
  },
  {
    id: 3,
    question: `What is the capital of Australia?`,
    options: [`Melbourne`, `Akokwa`, `Owerri`, `Sydney`],
    answer: `Sydney`,
  },
  {
    id: 4,
    question: `What is the capital of Turkey?`,
    options: [`Rijadh`, `Ankara`, `Istanbul`, `Abakaliki`],
    answer: `Ankara`,
  },
  {
    id: 5,
    question: `What is the capital of Syria?`,
    options: [`Syria`, `Damascus`, `Anambra`, `Enugu`],
    answer: `Damascus`,
  },
];
const Quiz = () => {
  const [goto, setGoto] = useState(1);
  const [click, setClick] = useState(false);
//   const [pro,setPro]=useState()
  // let goto=1
  const handleIncrease = () => {
    setGoto(goto + 1);
  };
  const handleDecrease = () => {
    setGoto(goto - 1);
  };
  const handleClick = () => {
    setClick(!click);
  };
//   if(QuizData){
//     let progress=(100/(QuizData.length - goto))
//     setPro(progress)
//   }


//   console.log(QuizData.length, goto, pro);
  return (
    <div className=" mt-20  h-screen bg-blue-100">
      <div className="flex px-20 flex-col pt-32 justify-center items-center">
        <div className="w-screen px-64 ">
          <h1 className="text-4xl font-semibold my-5 text-center ">
            ({QuizData[goto].id}) {QuizData[goto].question}{" "}
          </h1>
          <h1 className="text-xl font-semibold my-5 text-center uppercase ">
            Select up to one option{" "}
          </h1>
          <div className="grid grid-cols-2 gap-10">
            {QuizData[goto]?.options?.map((data) => (
              <div
                onClick={() => handleClick()}
                className="bg-gray-600 cursor-pointer flex justify-start items-center text-white px-10 py-5 rounded-md"
              >
                {click ? <ImRadioChecked /> : <ImRadioUnchecked />}
                <p className="ml-5">{data}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-screen px-64 mt-5 ">
          {goto === 0 ? (
            <button
              class={`inline-flex disabled text-white bg-[#8b8686] border-0 py-2 px-6 focus:outline-none rounded `}
            >
              Previous
            </button>
          ) : (
            <button
              onClick={() => handleDecrease()}
              class={`inline-flex disabled text-white bg-[#EE4248] border-0 py-2 px-6 focus:outline-none rounded `}
            >
              Previous
            </button>
          )}
          <div class="w-full mx-10 mt-4 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div class={`bg-red-600 h-2.5 w-1/2 rounded-full dark:bg-red-500`}></div>
          </div>
          {QuizData.length - 1 === goto ? (
            <button class="inline-flex  text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none rounded ">
              Submit
            </button>
          ) : (
            <button
              onClick={() => handleIncrease()}
              class="inline-flex  text-white bg-[#EE4248] border-0 py-2 px-6 focus:outline-none rounded "
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
