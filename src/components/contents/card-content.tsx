import Card from "@/components/contents/card";
import IconCalculator from "@/assets/images/icon-calculator.svg";
import IconKarma from "@/assets/images/icon-karma.svg";
import IconSupervisor from "@/assets/images/icon-supervisor.svg";
import IconTeamBuilder from "@/assets/images/icon-team-builder.svg";

const CardContent = () => {
  return (
    <div className="mx-auto flex w-full max-w-[316px] flex-col gap-8 md:max-lg:max-w-[1114px] lg:max-w-max lg:flex-row lg:items-center">
      {/* Card1 */}
      <Card
        title="Supervisor"
        className="border-primary-cyan"
        icon={IconSupervisor}
      >
        Monitors activity to identify project roadblocks
      </Card>
      <div className="flex flex-col gap-8 md:max-lg:flex-row md:max-lg:justify-evenly lg:flex-col">
        {/* Card2 */}
        <Card
          title="Team Builder"
          className="border-primary-red"
          icon={IconTeamBuilder}
        >
          Scans our talent network to create the optimal team for your project
        </Card>
        {/* Card3 */}
        <Card title="Karma" className="border-primary-orange" icon={IconKarma}>
          Regularly evaluates our talent to ensure quality
        </Card>
      </div>
      {/* Card4 */}
      <Card
        title="Calculator"
        className="border-primary-blue"
        icon={IconCalculator}
      >
        Uses data from past projects to provide better delivery estimates
      </Card>
    </div>
  );
};

export default CardContent;
