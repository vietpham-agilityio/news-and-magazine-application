// components
import Image, { StaticImageData } from "next/image";
import { Typography } from "@/ui/components";

// types
import { FontWeight, Size } from "@/types";

interface IProps {
  id: string;
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  alt?: string;
}

export const CardSingle = ({
  id,
  title,
  content,
  imageSrc,
  alt = "Image cover",
}: IProps) => (
  <div className="h-full relative rounded-xl flex items-end justify-end bg-transparent w-[300px] p-2.5 xl:w-[360px] hover:cursor-pointer ">
    <Image
      className="rounded-xl absolute"
      src={imageSrc}
      alt="car image"
      fill
    />
    {/* card body */}
    <div className="absolute left-[9px] p-4 w-[95%] bg-white-75 rounded-xl opacity-90">
      <Typography
        tag="h3"
        textSize={Size.LG}
        weight={FontWeight.Normal}
        additionalClasses="text-black-100"
      >
        {title}
      </Typography>
      <Typography
        tag="p"
        textSize={Size.XSM}
        weight={FontWeight.Light}
        additionalClasses="text-dark-100 h-10 w-[328px] leading-5 text-ellipsis overflow-hidden "
      >
        {content}
      </Typography>
    </div>
  </div>
);
