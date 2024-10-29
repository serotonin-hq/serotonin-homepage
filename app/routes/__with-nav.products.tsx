import { Link, MetaFunction } from "@remix-run/react";
import BlankArrow from "~/components/blank-arrow";
import ScrollText from "~/components/scroll-text";
import SearchLight from "~/components/search-light";
import { baseMeta, canonical } from "~/utils/meta";

export const meta: MetaFunction = () => {
  return baseMeta(
    "Serotonin Web3 Products",
    "Serotonin’s web3 product studio builds and launches solutions targeting creators’, brands’, and companies’ greatest opportunities."
  );
};

export const links = canonical("/products");

export default function Products() {
  return (
    <SearchLight className="lg:col-span-9 md:col-span-6 md:grid-rows-2 sm:grid lg:grid-cols-9 grid-cols-6 gap-6 md:text-transparent">
      <div className="col-span-3 mb-6 md:mb-0 leading-7">
        <div className="pb-7 flex items-center gap-0.5">
          <Link
            target="__blank"
            className="uppercase peer hover:pl-4"
            to="https://www.spindl.xyz/"
          >
            <ScrollText hoverable>Spindl</ScrollText>
          </Link>
          <BlankArrow className="shrink-0 md:opacity-0 peer-hover:opacity-100 transition-opacity text-[#111] dark:text-[#EEE]" />
        </div>
        <Link
          target="__blank"
          className="underline md:text-[#EEE]/30"
          to="https://www.spindl.xyz/"
        >
          <ScrollText hoverable>Spindl</ScrollText>
        </Link>{" "}
        is the leading web3 marketing analytics platform, built by the team
        behind Facebook{"'"}s original ad product. Pioneers of {"'"}
        wallet-aware{"'"}
        marketing, Spindl uses blockchain to provide richer data, measurement,
        and attribution for campaigns in web3 than web2.
      </div>
      <div className="col-span-3 mb-6 md:mb-0 leading-7">
        <div className="pb-7 flex items-center gap-0.5">
          <Link
            target="__blank"
            className="uppercase peer hover:pl-4"
            to="https://getmojito.com/"
          >
            <ScrollText hoverable>Mojito</ScrollText>
          </Link>
          <BlankArrow className="shrink-0 md:opacity-0 peer-hover:opacity-100 transition-opacity text-[#111] dark:text-[#EEE]" />
        </div>
        <Link
          target="__blank"
          className="underline md:text-[#EEE]/30"
          to="https://getmojito.com/"
        >
          <ScrollText hoverable>Mojito</ScrollText>
        </Link>{" "}
        helps brands get the most out of web3 technology with customer
        retention, digital product sales, and personalized experiences. The web3
        commerce platform of choice for Sotheby{"'"}s, Mercedes, Pernod Ricard,
        and more Mojito lets teams easily manage and sell onchain products.
      </div>
      <div className="col-span-3 leading-7 min-w-[320px]">
        <div className="pb-7 flex items-center gap-0.5">
          <Link
            target="__blank"
            className="uppercase peer hover:pl-4"
            to="https://www.hellofranklin.co/"
          >
            <ScrollText hoverable>Franklin</ScrollText>
          </Link>
          <BlankArrow className="shrink-0 md:opacity-0 peer-hover:opacity-100 transition-opacity text-[#111] dark:text-[#EEE]" />
        </div>
        <Link
          target="__blank"
          className="underline md:text-[#EEE]/30"
          to="https://www.hellofranklin.co/"
        >
          <ScrollText hoverable>Franklin</ScrollText>
        </Link>{" "}
        is hybrid crypto and fiat payroll platform. It enables businesses to
        operate seamlessly using on and off chain technologies. By using
        stablecoins, Franklin powers faster, cheaper, and more flexible payments
        for the most important bill that any company has: payroll. The payroll
        platform now includes bill pay and invoicing tools.
      </div>
    </SearchLight>
  );
}
