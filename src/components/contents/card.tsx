import { PropsWithChildren } from "react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface CardProps {
  title: string;
  className: string;
  icon: string | StaticImport;
}
const Card = ({
  title,
  className: borderColor,
  icon,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <section
      className={`mx-auto grid max-w-[314px] gap-8 rounded border-t-4 bg-white p-8 shadow-xl lg:max-w-[350px] ${borderColor}`}
    >
      <div>
        <h2 className="text-preset-3 font-semibold">{title}</h2>
        <p className="text-preset-5 font-normal">{children}</p>
      </div>
      <div className="mb-4.5 flex h-[64px] flex-row-reverse">
        <Image src={icon} alt="test" width={64} />
      </div>
    </section>
  );
};

export default Card;
