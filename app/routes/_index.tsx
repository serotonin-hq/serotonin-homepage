import ScrollText from "~/components/scroll-text";
import { canonical } from "~/utils/meta";

export const links = canonical("/");

export default function Index() {
  return (
    <p className="uppercase text-[18px] h-dvh flex items-end leading-6 p-8">
      <ScrollText>
        Bringing the world’s breakthrough technologies to market.
      </ScrollText>
    </p>
  );
}
