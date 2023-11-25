import LeftContent from "@/components/leftContent";
import { left4 } from "../../../../public";

export default function Mission() {
  return (
    <LeftContent
      leftButton="Say Hello"
      photo={left4}
      heading="Care to join our mission?"
      content="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
    />
  );
}
