import { PropsWithChildren } from "react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface CardProps {
  title: string;
  color: string;
  icon: string | StaticImport;
}
const Card = ({
  title,
  color,
  icon,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <section className={`rounded border-t-4 ${color} p-10 shadow-xl`}>
      <h2 className="text-preset-3 font-semibold">{title}</h2>
      <p>{children}</p>
      <Image src={icon} alt="test" width={100} />
    </section>
  );
};

export default Card;
