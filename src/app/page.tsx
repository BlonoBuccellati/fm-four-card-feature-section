import CardContent from "@/components/contents/card-content";
import CardHero from "@/components/header/card-hero";

export default function Home() {
  return (
    <main className="font-poppins text-neutral-gray-500 min-h-screen bg-[#FAFAFA] font-thin">
      <div className="m-auto flex w-[86%] flex-col gap-15 pt-[clamp(60px,10.5vw,102px)] pb-[clamp(2.5rem,.09rem+10.25vw,5rem)] md:gap-[74px]">
        {/* ヒーローセクション？ */}
        <CardHero />
        {/* コンテンツ */}
        <CardContent />
      </div>
    </main>
  );
}
