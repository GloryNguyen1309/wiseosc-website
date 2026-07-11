import { useEffect, useRef, useState } from "react";

interface Props {
  disabled?: boolean
  duration: number
  endValue: number
}

export default function useCountUp(props: Props) {
  const [value, setValue] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    if (props.disabled) {
      return
    }
    
    const tick = (timestamp: number) => {
      if (start.current === null) start.current = timestamp;
      const elapsed = timestamp - start.current;

      const progress = Math.min(elapsed / props.duration, 1); // 0 → 1

      // linear easing
      const currentValue = Math.floor(progress * props.endValue);
      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [props.disabled, props.duration, props.endValue]);

  return value
}
