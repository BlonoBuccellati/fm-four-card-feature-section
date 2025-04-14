import Card from "@/components/card";
import IconCalculator from "@/assets/images/icon-calculator.svg";
import IconKarma from "@/assets/images/icon-karma.svg";
import IconSupervisor from "@/assets/images/icon-supervisor.svg";
import IconTeamBuilder from "@/assets/images/icon-team-builder.svg";

export default function Home() {
  return (
    <div className="font-poppins text-neutral-gray-500 bg-[#FAFAFA] font-thin">
      <div className="m-auto mt-15 flex w-[90%] max-w-[316px] flex-col gap-10">
        {/* ヒーローセクション？ */}
        <section className="text-preset-1 flex flex-col gap-4 border border-black text-center">
          <h1 className="">
            Reliable, efficient delivery
            <br />
            <span className="font-semibold">Powered by Technology</span>
          </h1>
          <p className="text-preset-4 font-normal">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </section>
        <div className="grid gap-8">
          {/* Card1 */}
          <Card
            title="Supervisor"
            color="border-primary-cyan"
            icon={IconSupervisor}
          >
            Monitors activity to identify project roadblocks
          </Card>
          {/* Card2 */}
          <Card
            title="Team Builder"
            color="border-primary-red"
            icon={IconTeamBuilder}
          >
            Scans our talent network to create the optimal team for your project
          </Card>
          {/* Card3 */}
          <Card title="Karma" color="border-primary-orange" icon={IconKarma}>
            Regularly evaluates our talent to ensure quality
          </Card>
          {/* Card4 */}
          <Card
            title="Calculator"
            color="border-primary-blue"
            icon={IconCalculator}
          >
            Uses data from past projects to provide better delivery estimates
          </Card>
        </div>
      </div>
    </div>
  );
}
