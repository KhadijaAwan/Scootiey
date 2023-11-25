import RightContent from "@/components/rightContent";
import { right1 } from "../../../../public";

export default function NearYou() {
  return (
    <RightContent
      photo={right1}
      heading="Coming to a city near you"
      content="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
    />
  );
}
