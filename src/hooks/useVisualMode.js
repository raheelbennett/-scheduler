import { useState, } from "react";



export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (next, replace) => {
    setMode(next);
    const historyCopy = [...history];
    replace ? historyCopy.splice(-1, 1, next) : historyCopy.push(next);
    setHistory(historyCopy);
  };

  const back = () => {
    const historyCopy = [...history];
    if (historyCopy.length >= 1) {
      historyCopy.pop();
      setMode(historyCopy[historyCopy.length - 1]);
      setHistory(historyCopy);
    }
  };


  return { mode, transition, back };
}