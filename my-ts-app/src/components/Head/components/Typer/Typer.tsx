import { useEffect, useState } from "react";

const Typer = () => {
  const [text, setText] = useState("");
  const [isTyped, setIsTyped] = useState(false);
  const typingSpeed = 150;

  const type = (line: string) => {
    const length = line.length;
    let i = 0;
    let text_ = "";
    const interval = setInterval(() => {
      text_ += line[i];
      setText(text_);
      i++;
      if (i === length) {
        setIsTyped(true);
        clearInterval(interval);
      }
    }, typingSpeed);
  };

  useEffect(() => {
    const content = [
      "Hello, \n visters, \n Welcome to my website.",
      "I'm Douglas Yang, \n a frontend developer.",
      "The son of React JS, \n the father of Vue JS.😁",
    ];
    if (!isTyped) {
      type(content[1]);
    } else {
      setTimeout(() => {
        setText("");
      }, 1000);
    }
  }, [isTyped]);

  return (
    <div className="flex items-center w-full p-5 bg-black text-white font-sans text-4xl font-bold">
      <div className="leading-[4rem] whitespace-nowrap">{text}</div>
      <span className="inline"> | </span>
    </div>
  );
};

export default Typer;
