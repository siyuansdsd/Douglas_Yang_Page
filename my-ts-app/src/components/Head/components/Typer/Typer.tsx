import { useEffect, useState } from "react";
import ShiningInputIcon from "./components/ShiningInputIcon";
import content from "./components/content";
import Logo from "./components/Logo";

const Typer = () => {
  const [text, setText] = useState("");
  // const [isTyped, setIsTyped] = useState(false);
  const isTyped = false;
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
        clearInterval(interval);
      }
    }, typingSpeed);
  };

  useEffect(() => {
    const getprev = (n: number) => {
      if (n === 0) {
        return 0;
      } else {
        return n - 1;
      }
    };
    if (!isTyped) {
      for (let i = 0; i < content.length; i++) {
        setTimeout(() => {
          type(content[i]);
        }, i * (content[getprev(i)].length + 4) * typingSpeed);
      }
    } else {
      setTimeout(() => {
        setText("");
      }, 1000);
    }
  }, [isTyped]);

  return (
    <div className="flex items-center w-full p-5 bg-black text-white font-sans text-4xl font-bold rounded-2xl">
      <div className="leading-[4rem] w-1/3 whitespace-pre min-h-[50vh]">
        {text}
        <ShiningInputIcon />
      </div>
      <div className="flex flex-col items-center justify-center h-full w-1/3 group">
        <hr className="border-white border-2 animate-wiggleback group-hover:animate-wiggle" />
        <Logo />
        <hr className="border-white border-2 animate-wiggleback group-hover:animate-wiggle" />
      </div>
    </div>
  );
};

export default Typer;
