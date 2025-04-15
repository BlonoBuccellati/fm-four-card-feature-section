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
  className: color,
  icon,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <section
      className={`mx-auto max-w-[314px] rounded border-t-4 p-10 shadow-xl ${color}`}
    >
      <h2 className="text-preset-3 font-semibold">{title}</h2>
      <p>{children}</p>
      <Image src={icon} alt="test" width={100} />
    </section>
  );
};

export default Card;
