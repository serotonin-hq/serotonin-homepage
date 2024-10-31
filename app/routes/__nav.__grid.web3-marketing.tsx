import { MetaFunction } from "@remix-run/react";
import ScrollText from "~/components/scroll-text";
import { baseMeta, canonical } from "~/utils/meta";

export const meta: MetaFunction = () => {
  return baseMeta(
    "Full Service Web3 Marketing Agency - Serotonin",
    "Work with the leading web3 marketing agency to refine your message, engage your audience, and bring your product to market."
  );
};

export const links = canonical("/web3-marketing");

export default function Marketing() {
  return (
    <div className="col-span-3 leading-7 min-w-[320px]">
      <ScrollText>
        Our superpower is helping transformative technologies reach their
        audiences. We offer comprehensive marketing services across all major
        channels to deliver measurable results globally.
      </ScrollText>
    </div>
  );
}
