import { useEffect, useState } from "react";

const Typer = () => {
  const [text, setText] = useState("");
  const [isTyped, setIsTyped] = useState(false);
  const typingSpeed = 300;

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
      "hello, world \n welcome to my website",
      "this is a typing test",
      "how fast can you type?",
    ];
    if (!isTyped) {
      type(content[0]);
    } else {
      setTimeout(() => {
        setText("");
      }, 1000);
    }
  }, [isTyped]);

  return (
    <div className="w-full p-5 bg-black text-white font-sans text-4xl">
      <h1
        dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
      ></h1>
    </div>
  );
};

export default Typer;
