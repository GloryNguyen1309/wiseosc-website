import { cn } from "@/lib/utils";
import React from "react";

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function Container(props: DivProps) {
  return (
    <div className={cn("mx-auto max-w-[760px] px-4", props.className)}>
      {props.children}
    </div>
  );
}

export default Container;
