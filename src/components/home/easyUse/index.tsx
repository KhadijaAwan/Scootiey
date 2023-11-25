import LeftContent from "@/components/leftContent";
import { left1 } from "../../../../public";

export default function EasyUse() {
  return (
    <LeftContent
      leftButton="Learn More"
      photo={left1}
      heading="Easy to use riding telemetry"
      content="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
    />
  );
}
