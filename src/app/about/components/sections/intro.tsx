import Image from "next/image";
import { intro } from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";

const { heading, description } = intro;

export default function Intro() {
  return (
    <div className="flex flex-col py-20 lg:flex-row lg:py-36 lg:items-center">
      <div className="flex-1">
        <div className="lg:pr-10 pb-16 pt-16">
          <DisplayInfo description={description} heading={heading} />
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-96 h-96">
          <Image
            alt="personal photo"
            className="bg-c-dark rounded-full"
            draggable="false"
            fill
            priority
            sizes="100%"
            src="/images/user-profile.svg"
          />
        </div>
      </div>
    </div>
  );
}
