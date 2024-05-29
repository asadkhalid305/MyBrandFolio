import Image from "next/image";
import { TCardProps } from "@/app/utils/types";
import Tooltip from "./tooltip";
import Link from "next/link";

export default function TCard({ text, author }: TCardProps) {
  const {
    name,
    image: { src = "/images/default.webp", alt = "" } = {},
    job,
    link,
  } = author || {};
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-c-light border-b border-gray-200 rounded-t-lg transition-all duration-300 ease-in-out md:rounded-t-none md:rounded-ss-lg md:border-e hover:bg-c-semidark hover:shadow-2xl">
      <blockquote className="max-w-xl mx-auto mb-4 text-c-dark cursor-pointer lg:mb-8">
        <Tooltip text={text}>
          <p className="my-4 line-clamp-3 text-md font-normal">{text}</p>
        </Tooltip>
      </blockquote>
      <Link href={link} rel="noopener noreferrer" target="_blank">
        <figcaption className="flex items-center justify-center ">
          <Image
            className="rounded-full w-9 h-9"
            width={200}
            height={200}
            src={src}
            alt={alt}
          />
          <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
            <div className="text-md font-medium">{name}</div>
            <div className="text-sm font-light">{job}</div>
          </div>
        </figcaption>
      </Link>
    </figure>
  );
}
