'use client'
import useCountUp from "@/hooks/use-count-up";
import { FC } from "react";

interface Props {
  disabled?: boolean
  endValue: number
}

const Countable: FC<Props> = (props) => {
  const value = useCountUp({
    disabled: props.disabled,
    duration: 1800,
    endValue: props.endValue
  })

  return <span>{value}</span>
}

export default Countable