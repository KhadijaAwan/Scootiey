import {
  shape1,
  shape2,
  shape3,
  point1,
  point2,
  point3,
} from "../../public/index";

// NavBar Items Section
export const navItems = [
  {
    id: "nav1",
    title: "About",
    link: "/about",
  },
  {
    id: "nav2",
    title: "Location",
    link: "/location",
  },
  {
    id: "nav3",
    title: "Careers",
    link: "/careers",
  },
];

// Home Listings Section
export const homeItems = [
  {
    id: "home1",
    photo: shape1,
    title: "Locate with app",
    content:
      "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ",
  },
  {
    id: "home2",
    photo: shape2,
    title: "Pick your scooter",
    content:
      "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    id: "home3",
    photo: shape3,
    title: "Enjoy the ride",
    content:
      "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways.",
  },
];

// Point Listings Section
export const pointItems = [
  {
    id: "point1",
    photo: point1,
    title: "Our tech",
    count: "01",
    content:
      "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
  },
  {
    id: "point2",
    photo: point2,
    title: "Our integrity",
    count: "02",
    content:
      "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
  },
  {
    id: "point3",
    photo: point3,
    title: "Our community",
    count: "03",
    content:
      "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
  },
];

// Position Items
export const positionItems = [
  {
    id: "position-1",
    designation: "General Manager",
    location: "Jakarta, Indonesia",
  },
  {
    id: "position-2",
    designation: "UI/UX Designer",
    location: "Yokohama, Japan",
  },
  {
    id: "position-3",
    designation: "Blog Content Copywriter",
    location: "New York, United States",
  },
  {
    id: "position-4",
    designation: "Graphic Designer",
    location: "New York, United States",
  },
  {
    id: "position-5",
    designation: "Fleet Supervisor",
    location: "Jakarta, Indonesia",
  },
  {
    id: "position-6",
    designation: "UI/UX Analyst",
    location: "London, United Kingdom",
  },
];

// faq Items
export const faqItems = [
  {
    id: "faq-1",
    title: "How it works",
    options: [
      {
        id: "f1-option1",
        title: "How do I download the app?",
        content:
          "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page",
        back: "gray.100",
      },
      {
        id: "f1-option2",
        title: "Can I find a nearby Scoots?",
        content:
          "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page",
        back: "pink.100",
      },
      {
        id: "f1-option3",
        title: "Do I need a license to ride?",
        content:
          "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page",
        back: "orange.100",
      },
    ],
  },
  {
    id: "faq-2",
    title: "Safe driving",
    options: [
      {
        id: "f2-option1",
        title: "Should I wear a helmet?",
        content:
          "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
        back: "gray.100",
      },
      {
        id: "f2-option2",
        title: "How about the rules & regulations?",
        content:
          "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
        back: "pink.100",
      },
      {
        id: "f2-option3",
        title: "What if I damage my Scoot?",
        content:
          "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
        back: "orange.100",
      },
    ],
  },
];
