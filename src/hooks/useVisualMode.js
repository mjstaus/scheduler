import {useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace=false) {
    if(replace){
      history.pop()
    }
    history.push(mode);
    setMode(mode);
  }

  function back() {
    if(history.length > 1){
      history.pop();
      setMode(history[history.length-1])
    } 
  }
  
  return {
    mode,
    transition,
    back,
  }
}