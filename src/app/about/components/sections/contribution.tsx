import { contribution } from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";
import VCardGrid from "../general/v-card-grid";

const { heading, description, items } = contribution;

export default function Contribution() {
  return (
    <>
      <div className="pt-20 lg:pt-36">
        <DisplayInfo
          description={description}
          heading={heading}
          paddingBottom
        />
      </div>

      {Object.entries(items).map(([key, value], index) => (
        <VCardGrid key={index} heading={key} records={value} />
      ))}
    </>
  );
}
