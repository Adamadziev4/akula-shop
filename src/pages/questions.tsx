import React from "react";
import Image from "next/image";

import { SectionTitle } from "@/components/SectionTitle";
import { Wrapper } from "@/components/Wrapper";

const questions: { id: number; name: string; answer: string }[] = [
  {
    id: 1,
    name: "Как подобрать размер?",
    answer:
      "Достаточно знать примерный вес и рост человека. Даже в случае когда размер не подошел, всегда есть возможность обмена товара",
  },
];

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = React.useState(0);

  return (
    <Wrapper>
      <SectionTitle title="Часто задаваемые вопросы" />

      <div className="flex justify-center px-4">
        <ul className="flex flex-col justify-center md:text-xl mt-4 w-[600px] bg-black/5">
          {questions.map(({ id, name, answer }) => (
            <>
              <li
                key={id}
                className={`cursor-pointer ${
                  id !== 1 ? "border-t border-black/20" : ""
                } px-5 py-3 flex justify-between`}
                onClick={() =>
                  setActiveQuestion((prev) => (prev === id ? 0 : id))
                }
              >
                {`${id}. ${name}`}
                <Image
                  src="/svgs/arrowDown.svg"
                  width={18}
                  height={18}
                  alt="Стрелочка вниз"
                />
              </li>
              <p
                className={`${
                  id === activeQuestion ? "block" : "hidden"
                } text-base bg-white py-2 px-4`}
              >
                {answer}
              </p>
            </>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Questions;
