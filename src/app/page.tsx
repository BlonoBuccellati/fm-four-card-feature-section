import Card from "@/components/card";
import IconCalculator from "@/assets/images/icon-calculator.svg";
import IconKarma from "@/assets/images/icon-karma.svg";
import IconSupervisor from "@/assets/images/icon-supervisor.svg";
import IconTeamBuilder from "@/assets/images/icon-team-builder.svg";

export default function Home() {
  return (
    <div className="font-poppins text-neutral-gray-500 min-h-screen bg-[#FAFAFA] font-thin">
      <div className="m-auto flex w-[86%] flex-col gap-15 pt-[clamp(60px,10.5vw,102px)] md:gap-[74px]">
        {/* ヒーローセクション？ */}
        <section className="mx-auto flex max-w-[540px] flex-col gap-4 text-center">
          <h1 className="text-preset-1">
            Reliable, efficient delivery
            <br />
            <span className="font-semibold">Powered by Technology</span>
          </h1>
          <p className="text-preset-4 font-normal">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </section>
        <div className="mx-auto flex w-full max-w-[316px] flex-col gap-8 md:max-lg:max-w-[1114px] lg:max-w-max lg:flex-row lg:items-center">
          {/* Card1 */}
          <Card
            title="Supervisor"
            className="border-primary-cyan"
            icon={IconSupervisor}
          >
            Monitors activity to identify project roadblocks
          </Card>
          <div className="flex flex-col gap-8 md:max-lg:flex-row md:max-lg:justify-evenly lg:flex-col-reverse">
            {/* Card2 */}
            <Card
              title="Team Builder"
              className="border-primary-red"
              icon={IconTeamBuilder}
            >
              Scans our talent network to create the optimal team for your
              project
            </Card>
            {/* Card3 */}
            <Card
              title="Karma"
              className="border-primary-orange"
              icon={IconKarma}
            >
              Regularly evaluates our talent to ensure quality
            </Card>
          </div>
          {/* Card4 */}
          <Card
            title="Calculator"
            className="border-primary-blue mb-10 md:mb-20"
            icon={IconCalculator}
          >
            Uses data from past projects to provide better delivery estimates
          </Card>
        </div>
      </div>
    </div>
  );
}
