import Image from "next/image";
import HeroSection from "@/components/homepage/HeroSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MainSection from "@/components/homepage/mainSection";
import SocialLinksBar from "@/components/ui/sociallink";
export default function Home() {
  return (
    <main className="">
      <HeroSection />

      <MainSection />

      <SocialLinksBar />
    </main>

  );
}
