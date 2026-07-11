import Image from "next/image";
import { FC } from "react";

interface Props {
  src: string
}

const SlideItem: FC<Props> = (props) => {
  const { src } = props

  return (
    <div className="mt-4">
      <Image
        height={200}
        width={178}
        alt="slide-item"
        src={src}
        className="h-[200px] w-[178px] mr-5 rounded object-cover lg:mb-5 lg:h-[306px] lg:w-[255px]"
      />
    </div>
  )
}

export default SlideItem;