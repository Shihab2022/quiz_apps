import React from "react";

const Quiz = () => {
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
  console.log("quiz");
  return (
    <div className=" mt-20 text-5xl h-screen bg-blue-400">
      <div className="flex pt-32 justify-center items-center">
        <div className="w-[100vh]">
          <h1>What is this ? </h1>
          <div className="grid grid-cols-2 gap-10">
            <p className="bg-red-500 px-10 py-5 rounded-md">hello</p>
            <p className="bg-red-500 px-10 py-5 rounded-md">hello</p>
            <p className="bg-red-500 px-10 py-5 rounded-md">hello</p>
            <p className="bg-red-500 px-10 py-5 rounded-md">hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
