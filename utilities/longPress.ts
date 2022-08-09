import { useState, useEffect, useCallback } from "react";

export default function useLongPress(
  callback = (data: boolean) => {},
  ms = 300
) {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timerId: any;
    callback(startLongPress);
    if (startLongPress) {
      timerId = setTimeout(callback, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [callback, ms, startLongPress]);

  const start = useCallback(() => {
    setStartLongPress(true);
  }, []);
  const stop = useCallback(() => {
    setStartLongPress(false);
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  };
}