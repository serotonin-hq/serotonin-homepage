import { Link } from "@remix-run/react";
import React from "react";
import ScrollText from "~/components/scroll-text";
import SearchLight from "~/components/search-light";
import { cn } from "~/utils/cn";
import { canonical } from "~/utils/meta";

export const links = canonical("/clients");

const clients = [
  [
    {
      name: "Aethir",
      website: "https://aethir.com",
    },
    {
      name: "ACROSS",
      website: "https://across.to",
    },
    {
      name: "Alchemy",
      website: "https://www.alchemy.com",
    },
    {
      name: "Aleo",
      website: "https://www.aleo.org",
    },
    {
      name: "AKASH",
      website: "https://akash.network",
    },
    {
      name: "AION",
      website: "https://aion.theoan.com/",
    },
    {
      name: "Aleph Zero",
      website: "https://alephzero.org",
    },
    {
      name: "Aman",
      website: "https://aman.com",
    },
    {
      name: "AMBIRE",
      website: "https://www.ambire.com",
    },
    {
      name: "Ampleforth",
      website: "https://www.ampleforth.org",
    },
    {
      name: "Aptos",
      website: "https://aptoslabs.com",
    },
    {
      name: "Arbitrum",
      website: "https://arbitrum.io",
    },
    {
      name: "ARCIUM",
      website: "https://arcium.ai",
    },
    {
      name: "Arweave",
      website: "https://www.arweave.org",
    },
    {
      name: "Audius",
      website: "https://audius.co",
    },
    {
      name: "Auradine",
      website: "https://auradine.com",
    },
    {
      name: "Bain Capital Crypto",
      website: "https://www.baincapitalcrypto.com",
    },
    {
      name: "Bancor",
      website: "https://bancor.network",
    },
    {
      name: "BITCOIN OS",
      website: "https://bitcoinos.org",
    },
    {
      name: "BitDAO",
      website: "https://www.bitdao.io",
    },
    {
      name: "BIO.XYZ",
      website: "https://bio.xyz",
    },
    {
      name: "Blockdaemon",
      website: "https://blockdaemon.com",
    },
    {
      name: "CALDERA",
      website: "https://caldera.xyz",
    },
    {
      name: "CMT Digital",
      website: "https://cmt.digital",
    },
    {
      name: "Candy",
      website: "https://candy.com",
    },
    {
      name: "Cartesi",
      website: "https://cartesi.io",
    },
    {
      name: "Casper Labs",
      website: "https://casperlabs.io",
    },
    {
      name: "Celo",
      website: "https://celo.org",
    },
  ],
  [
    {
      name: "Chainlink",
      website: "https://chain.link",
    },
    {
      name: "COINDESK",
      website: "https://www.coindesk.com",
    },
    {
      name: "Collab.Land",
      website: "https://collab.land",
    },
    {
      name: "Cosmos",
      website: "https://cosmos.network",
    },
    {
      name: "CyberConnect",
      website: "https://cyberconnect.me",
    },
    {
      name: "DARMA Capital",
      website: "https://www.darmacapital.com",
    },
    {
      name: "Dapper Labs",
      website: "https://www.dapperlabs.com",
    },
    {
      name: "Decentraland",
      website: "https://decentraland.org",
    },
    {
      name: "Doodles",
      website: "https://doodles.app",
    },
    {
      name: "dWallet",
      website: "https://dwallet.io",
    },
    {
      name: "ENDAOMENT",
      website: "https://endaoment.org",
    },
    {
      name: "Figment",
      website: "https://figment.io",
    },
    {
      name: "Filecoin",
      website: "https://filecoin.io",
    },
    {
      name: "Flipside",
      website: "https://flipsidecrypto.xyz",
    },
    {
      name: "FLUENCE",
      website: "https://fluence.network",
    },
    {
      name: "Freehold",
      website: "https://www.freehold.earth",
    },
    {
      name: "Fuel",
      website: "https://fuel.network",
    },
    {
      name: "Galxe",
      website: "https://galxe.com",
    },
    {
      name: "HNT Labs",
      website: "https://hntlabs.com",
    },
    {
      name: "Horizen",
      website: "https://www.horizen.io",
    },
    {
      name: "iex",
      website: "https://iex.io",
    },
    {
      name: "IMPOSSIBLE CLOUD",
      website: "https://impossible.cloud",
    },
    {
      name: "IPFS",
      website: "https://ipfs.tech",
    },
    {
      name: "Keep",
      website: "https://keep.network",
    },
  ],
  [
    {
      name: "Keyrock",
      website: "https://keyrock.eu",
    },
    {
      name: "L.F.C.",
      website: "https://www.liverpoolfc.com/",
    },
    {
      name: "Layer Zero",
      website: "https://layerzero.network",
    },
    {
      name: "Lido",
      website: "https://lido.fi",
    },
    {
      name: "Linera",
      website: "https://linera.io",
    },
    {
      name: "Lisk",
      website: "https://lisk.com",
    },
    {
      name: "Masa",
      website: "https://masa.finance",
    },
    {
      name: "Matterlabs",
      website: "https://matter-labs.io",
    },
    {
      name: "MAWARI",
      website: "https://mawari.io",
    },
    {
      name: "Memeland",
      website: "https://www.memeland.com",
    },
    {
      name: "Monerium",
      website: "https://monerium.com",
    },
    {
      name: "NAMADA",
      website: "https://namada.net",
    },
    {
      name: "Near Protocol",
      website: "https://near.org",
    },
    {
      name: "OASIS",
      website: "https://oasisprotocol.org",
    },
    {
      name: "OBOL",
      website: "https://obol.tech",
    },
    {
      name: "Offshift",
      website: "https://offshift.io",
    },
    {
      name: "Optimism",
      website: "https://www.optimism.io",
    },
    {
      name: "Orchid",
      website: "https://www.orchid.com",
    },
    {
      name: "Osmosis",
      website: "https://osmosis.zone",
    },
    {
      name: "Pace",
      website: "https://pace.trade",
    },
    {
      name: "PAYPAL",
      website: "https://www.paypal.com",
    },
    {
      name: "Polygon",
      website: "https://polygon.technology",
    },
    {
      name: "Protocol Labs",
      website: "https://protocol.ai",
    },
    {
      name: "Push",
      website: "https://push.org",
    },
    {
      name: "Plasma",
      website: "https://www.plasma.to/",
    },
    {
      name: "Quasar",
      website: "https://www.quasar.fi",
    },
    {
      name: "QUBIC",
      website: "https://qubic.org",
    },
    {
      name: "Ramp",
      website: "https://ramp.network",
    },
    {
      name: "Republic",
      website: "https://republic.com",
    },
    {
      name: "ResearchHub",
      website: "https://www.researchhub.com",
    },
    {
      name: "RIPPLE",
      website: "https://ripple.com",
    },
    {
      name: "Robinhood",
      website: "https://robinhood.com",
    },
    {
      name: "Roofstock",
      website: "https://www.roofstock.com",
    },
  ],
  [
    {
      name: "SAHARA",
      website: "https://www.sahara.com",
    },
    {
      name: "SCROLL",
      website: "https://scroll.io",
    },
    {
      name: "SKALE",
      website: "https://skale.space",
    },
    {
      name: "SYKY",
      website: "https://syky.com",
    },
    {
      name: "Shipyard Software",
      website: "https://shipyardsoftware.org",
    },
    {
      name: "Sothebys",
      website: "https://www.sothebys.com",
    },
    {
      name: "STARKWARE",
      website: "https://starkware.co",
    },
    {
      name: "Story Protocol",
      website: "https://www.storyprotocol.xyz",
    },
    {
      name: "SUMMERFI",
      website: "https://summer.fi",
    },
    {
      name: "SupraOracles",
      website: "https://supraoracles.com",
    },
    {
      name: "Thesis",
      website: "https://thesis.co",
    },
    {
      name: "THETA",
      website: "https://www.thetatoken.org",
    },
    {
      name: "TON FOUNDATION",
      website: "https://ton.org",
    },
    {
      name: "Tres Finance",
      website: "https://tres.finance",
    },
    {
      name: "TREASURE",
      website: "https://treasure.lol",
    },
    {
      name: "Unique",
      website: "https://unique.network",
    },
    {
      name: "Uphold",
      website: "https://uphold.com",
    },
    {
      name: "Urbit",
      website: "https://urbit.org",
    },
    {
      name: "USDT0",
      website: "https://usdt0.to/",
    },
    {
      name: "VanEck",
      website: "https://www.vaneck.com",
    },
    {
      name: "Vega",
      website: "https://vega.xyz",
    },
    {
      name: "Vogue",
      website: "https://www.vogue.com",
    },
    {
      name: "WEB3AUTH",
      website: "https://web3auth.io",
    },
    {
      name: "WildXYZ",
      website: "https://wild.xyz",
    },
    {
      name: "Wilder World",
      website: "https://www.wilderworld.com",
    },
    { name: "World of Women", website: "https://worldofwomen.art" },
    {
      name: "Wormhole",
      website: "https://wormhole.com/",
    },
  ],
];

export default function Clients() {
  return (
    <SearchLight className="2xl:col-span-6 md:col-span-9 md:grid flex flex-col grid-rows-[min-content,min-content] grid-cols-[repeat(6,auto)] justify-start gap-6">
      {clients.map((section, i) => (
        <div
          key={i}
          className="col-span-3 flex flex-wrap items-start justify-start leading-7 h-min"
        >
          {section.map((client, j) => (
            <React.Fragment key={client.name}>
              <Link
                to={client.website}
                target="__blank"
                className={cn(
                  "uppercase shrink-0 md:text-transparent",
                  j < section.length - 1 &&
                    "mr-2 after:leading-7 after:text-xs after:pl-2 after:content-['•']"
                )}
              >
                <ScrollText hoverable>{client.name}</ScrollText>
              </Link>
            </React.Fragment>
          ))}
        </div>
      ))}
    </SearchLight>
  );
}
