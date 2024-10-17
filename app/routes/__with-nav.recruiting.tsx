import { MetaFunction } from "@remix-run/react";
import ScrollText from "~/components/scroll-text";
import { baseMeta } from "~/utils/meta";

export const meta: MetaFunction = () => {
  return baseMeta(
    "Serotonin Web3 Recruiting Services",
    "Serotonin’s web3 recruiting service finds the best talent in the industry for your startup, application, or company."
  );
};

export default function Recruiting() {
  return (
    <div className="col-span-3 leading-7 min-w-[320px]">
      <ScrollText>
        We deeply understand the needs of teams building new technologies
        through our daily work with them. Our recruiting service thoughtfully
        matches your job openings with professionals from our extensive network
        at the heart of frontier technology communities.
      </ScrollText>
    </div>
  );
}
