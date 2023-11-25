import LeftContent from "@/components/leftContent";
import { left2 } from "../../../../public";

export default function ZeroHassle() {
  return (
    <LeftContent
      leftButton="Learn More"
      photo={left2}
      heading="Zero hassle payments"
      content="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
    />
  );
}
