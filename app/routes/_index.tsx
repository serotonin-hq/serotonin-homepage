import type { MetaFunction } from "@remix-run/node";
import ScrollText from "~/components/scroll-text";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <p className="uppercase text-[18px] h-screen flex items-end leading-6 p-8">
      <ScrollText>
        Bringing the world’s breakthrough technologies to market.
      </ScrollText>
    </p>
  );
}
