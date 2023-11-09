import { useEffect, useState } from "react";
import ShiningInputIcon from "./components/ShiningInputIcon";
import content from "./components/content";
import { isFloat32Array } from "util/types";

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
    <div className="flex items-center w-full p-10 bg-black text-white font-apple-sans text-4xl font-bold">
      <div className="leading-[4rem] whitespace-pre min-h-[50vh]">
        {text}
        <ShiningInputIcon />
      </div>
    </div>
  );
};

export default Typer;
