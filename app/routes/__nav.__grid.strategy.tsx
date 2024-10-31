import ScrollText from "~/components/scroll-text";
import { canonical } from "~/utils/meta";

export const links = canonical("/strategy");

export default function Strategy() {
  return (
    <div className="col-span-3 leading-7 min-w-[320px]">
      <ScrollText>
        We are natives of frontier technology, guiding companies to new
        opportunities through strategic transformation. We align a company{"'"}s
        core strengths with capabilities of new technologies and market
        dynamics. The result is a tailored strategy spanning product, marketing,
        and brand positioning.
      </ScrollText>
    </div>
  );
}
