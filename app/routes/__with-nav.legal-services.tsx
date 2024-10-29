import { MetaFunction } from "@remix-run/react";
import ScrollText from "~/components/scroll-text";
import { baseMeta, canonical } from "~/utils/meta";

export const meta: MetaFunction = () => {
  return baseMeta(
    "Business & Compliance Services",
    "With a founder-first approach, Serotonin provides comprehensive business and compliance services for startups and VC firms, from formation through growth stages, including compliance, fundraising, and M&As."
  );
};

export const links = canonical("/legal-services");

export default function Legal() {
  return (
    <div className="col-span-3 leading-7 min-w-[320px]">
      <ScrollText>
        Serotonin Legal is a law firm advising startups on corporate,
        regulatory, equity compensation, tokenomics, and other relevant legal
        matters. We offer comprehensive legal guidance from top-tier advisors
        with a business focus, all at reasonable rates.
      </ScrollText>
    </div>
  );
}
