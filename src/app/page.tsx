"use client";
import Hero from "@/components/home/hero";
import EasyUse from "@/components/home/easyUse";
import NearYou from "@/components/home/nearYou";
import ZeroHassle from "@/components/home/zeroHassle";
import HomeListings from "@/components/home/homeListings";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeListings />
      <EasyUse />
      <NearYou />
      <ZeroHassle />
    </>
  );
}
