import { Link } from "@remix-run/react";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import Check from "~/components/check";
import CheckMini from "~/components/check-mini";
import LinkArrow from "~/components/link-arrow";
import Logo from "~/components/logo";
import Particles from "~/components/particles";
import { FarcasterIcon, LinkedInIcon, XIcon } from "~/components/social-nav";
import { darkModeAtom } from "~/root";
import { cn } from "~/utils/cn";

const logos = Array.from({ length: 10 }).map((_, i) => ({
  url: "ITEM " + i,
}));

const features = [
  {
    feature:
      "Attend member-only virtual sessions with leading voices in crypto, tech, & beyond",
    isFree: false,
    isMember: true,
  },
  {
    feature:
      "Get priority access to select in-person events from Serotonin and our partners",
    isFree: false,
    isMember: true,
  },
  {
    feature: "Filter everything by your network",
    isFree: false,
    isMember: true,
  },
  {
    feature:
      "Track how you've overlapped with other members with a shared timeline",
    isFree: false,
    isMember: true,
  },
  {
    feature: "Explore guest lists for every main and side event",
    isFree: false,
    isMember: true,
  },
  {
    feature:
      "See how many people are going to each event and how many of them you know",
    isFree: true,
    isMember: true,
  },
  {
    feature: "Live activity feed of new RSVPs as they happen",
    isFree: true,
    isMember: true,
  },
  {
    feature:
      "Email digest of new attendees and new side events for conferences you're attending",
    isFree: true,
    isMember: true,
  },
  {
    feature: "Overlay your Telegram social graph",
    isFree: true,
    isMember: true,
  },
  {
    feature: "Add your Calendar social graph",
    isFree: true,
    isMember: true,
  },
  {
    feature: "Add your Farcaster social graph",
    isFree: true,
    isMember: true,
  },
  {
    feature: "Bookmark the events you're considering",
    isFree: true,
    isMember: true,
  },
];

const freeFeatures = [
  "See who's going and how your connected",
  "RSVP or bookmark events you're considering",
  "Limited guest list for every main and side event",
  "Live activity feed of new RSVPs as they happen",
  "Email digest of new attendees and side events",
  "Overlay your Telegram social graph",
  "Add your Calendar social graph",
  "Add your Farcaster social graph",
];

const memberFeatures = [
  "All free features, plus",
  "Entire guest lists for every main and side event",
  "Filter everything by your network and your events",
  "Timeline of how you overlap with other members",
  "Priority access to select in-person events",
  "Member-only virtual sessions with leading voices",
];

export default function Platform() {
  const setDarkAtom = useSetAtom(darkModeAtom);
  useEffect(() => {
    setDarkAtom(true);
  }, [setDarkAtom]);

  return (
    <>
      <Particles
        className="absolute top-0 inset-x-0 shadow-inner [mask-image:linear-gradient(to_top,transparent,black)]"
        height={556}
        width="window"
      />
      <main className="max-w-[1158px] mx-auto">
        <nav className="flex items-center justify-between p-6 mb-9">
          <Logo className="animate-[spin_16s_linear_infinite] [animation-direction:reverse] w-14 h-14" />
          <button>Connect</button>
        </nav>
        <header className="px-6 flex flex-col justify-center items-center gap-4 mb-12">
          <h1 className="font-normal text-[32px] leading-[40px] tracking-[-0.08em] uppercase text-center">
            The best events <br /> calendar in web3
          </h1>
          <p className="font-normal text-sm tracking-[-0.02em] text-center">
            One calendar for every conference, hackathon, summit and side event
            in web3. Link your social accounts to see where your network will
            be.
          </p>
          <button className="secondary">Create Account</button>
        </header>
        <Carousel className="mb-24">
          {logos.map(({ url }) => (
            <div key={url} className="odd:bg-red-300 bg-blue-400">
              {url}
            </div>
          ))}
        </Carousel>
        <Hero className="mb-24" />
        <section className="px-6">
          <h2 className="font-bold text-[32px] leading-[40px] tracking-[-0.04em] text-center mb-[72px]">
            Be in the right place at the right time.
          </h2>
          <div className="pt-12">
            <h4 className="uppercase font-medium text-sm tracking-[-0.02em] mb-6">
              Event Calendar
            </h4>
            <h3 className="inline text-xl tracking-[-0.02em]">
              See everything happening.
            </h3>
            <p className="inline text-xl tracking-[-0.02em] text-[#808080]">
              All things web3 in one place, from flagship conferences to local
              side events.
            </p>
            <div>IMAGE</div>
          </div>
          <div>
            <h4 className="uppercase font-medium text-sm tracking-[-0.02em] mb-6">
              Social Overlay
            </h4>
            <h3 className="inline text-xl tracking-[-0.02em]">
              See where your network will be.
            </h3>
            <p className="inline text-xl tracking-[-0.02em] text-[#808080]">
              Link your socials to highlight the people you know. Get alerts
              when they RSVP for new events.
            </p>
            <div>IMAGE</div>
          </div>
          <div>
            <h4 className="uppercase font-medium text-sm tracking-[-0.02em] mb-6">
              Connection Tracing
            </h4>
            <h3 className="inline text-xl tracking-[-0.02em]">
              Maintain your network.
            </h3>
            <p className="inline text-xl tracking-[-0.02em] text-[#808080]">
              Detailed profiles and a live timeline of how you and other members
              have overlapped.
            </p>
            <div>IMAGE</div>
          </div>
        </section>
        <section className="max-w-[920px] mx-auto px-6">
          <div className="flex flex-col justify-center items-center mb-[72px]">
            <h2 className="font-bold text-[32px] leading-[40px] tracking-[-0.04em] text-center mb-[32px]">
              Build the network you wish you had.
            </h2>
            <button className="secondary">Compare plans</button>
          </div>
          <div className="grid grid-rows-[auto,auto] gap-4 pb-6 mb-24">
            <div className="bg-[#111] border border-[#222] rounded-xl p-4">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/free.png"
                  alt="free user avatar"
                  className="w-10 h-10"
                />
                <h3 className="font-bold text-[40px] leading-[44px] tracking-[-0.04em]">
                  Free
                </h3>
              </div>
              <h4 className="font-bold text-xl leading-6 tracking-[-0.04em] mb-4">
                For casual web3 conference goers.
              </h4>
              <p className="text-sm font-normal text-[#808080] mb-8">
                You attend conferences to meet friends and join some sessions.
                It’s nice to know details but you’re mostly there for the vibes.
              </p>
              <ul className="space-y-2 text-lg mb-8">
                {freeFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckMini className="text-lime-400 w-4 h-4" />
                    <span className="text-[13px] leading-[20px] tracking-[-0.01em] font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <p className="text-[40px] leading-[44px] font-bold">
                  $0
                  <span className="text-[13px] ml-2 font-medium">/ month</span>
                </p>
                <button className="small font-bold">Get started</button>
              </div>
            </div>
            <div className="bg-[#111] border border-[#222] rounded-xl p-4">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/member.png"
                  alt="free user avatar"
                  className="w-10 h-10"
                />
                <h3 className="font-bold text-[40px] leading-[44px] tracking-[-0.04em]">
                  Member
                </h3>
              </div>
              <h4 className="font-bold text-xl leading-6 tracking-[-0.04em] mb-4">
                For Serious Professionals.
              </h4>
              <p className="text-sm font-normal text-[#808080] mb-8">
                You attend conferences to meet people, grow relationships, and
                close business. ROI matters and you find ways to increase yours.
              </p>
              <ul className="space-y-2 text-lg mb-8">
                {memberFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckMini className="text-lime-400 w-4 h-4" />
                    <span className="text-[13px] leading-[20px] tracking-[-0.01em] font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <p className="text-[40px] leading-[44px] font-bold">
                  $30
                  <span className="text-[13px] ml-2 font-medium">/ month</span>
                </p>
                <button className="small font-bold bg-lime-400">
                  <LinkArrow className="mr-2" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <table className="text-xs font-semibold hidden">
            <thead>
              <tr className="font-semibold uppercase">
                <th className="p-4 text-left text-[#808080]">Feature</th>
                <th className="p-4">Free</th>
                <th className="p-4">Member</th>
              </tr>
            </thead>
            <tbody>
              {features.map(({ feature, isFree, isMember }, i) => (
                <tr key={i}>
                  <td className="w-1/3 p-4">{feature}</td>
                  <td className="w-1/3 p-4 text-center">
                    {isFree && <Check className="inline" />}
                  </td>
                  <td className="w-1/3 p-4 text-lime-400 text-center">
                    {isMember && <Check className="inline" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section>
          <div className="flex flex-col items-center justify-center px-6">
            <h2 className="font-medium text-[32px] leading-[40px] tracking-[-0.02em] text-center mb-2">
              Join web3’s fast lane.
            </h2>
            <p className="font-normal text-sm tracking-[-0.02em] text-center mb-6">
              Build relationships with the decision makers driving web3 forward.
            </p>
            <button className="secondary">Create account</button>
          </div>
          <div className="rotate-[-4deg] h-[486px] flex flex-col justify-center">
            <Carousel>
              {logos.map(({ url }) => (
                <div key={url} className="odd:bg-red-300 bg-blue-400">
                  {url}
                </div>
              ))}
            </Carousel>
            <Carousel>
              {logos.map(({ url }) => (
                <div key={url} className="odd:bg-red-300 bg-blue-400">
                  {url}
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        <footer className="flex items-end justify-between px-6 pb-6">
          <div>
            <p className="font-semibold text-sm tracking-[-0.03em]">
              Serotonin © 2024
            </p>
            <Link
              to="/platform-terms"
              className="text-[#808080] font-normal text-[13px] leading-5 tracking-[-0.03em]"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link target="__blank" to="https://warpcast.com/serotonin-hq">
              <FarcasterIcon className="w-6 h-6" />
            </Link>
            <Link target="__blank" to="https://twitter.com/serotonin_hq">
              <XIcon className="w-6 h-6" />
            </Link>
            <Link
              target="__blank"
              to="https://www.linkedin.com/company/serotoninco"
            >
              <LinkedInIcon className="w-6 h-6" />
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}

function Hero({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      console.log(e);
    }

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className={cn("relative h-[888px]", className)} {...rest}>
      <div className="absolute rotate-[-4deg] w-[1048px] h-[720px] top-[83px] left-[-2px] bg-red-400"></div>
      <div className="absolute rotate-[-4deg] w-[424px] h-[428px] top-[435px] left-[315px] bg-purple-400"></div>
      <div className="absolute rotate-[-4deg] w-[304px] h-[164px] top-[354px] left-[605px] bg-orange-400"></div>
      <div className="absolute rotate-[-4deg] w-[268px] h-[184px] top-[623px] left-[636px] bg-yellow-400"></div>
      <div className="absolute rotate-[-4deg] w-[360px] h-[436px] top-[374px] left-[885px] bg-blue-400"></div>
      <div className="absolute rotate-[-4deg] w-[400px] h-[268px] top-[516px] left-[-52px] bg-blue-400"></div>
    </div>
  );
}

function Carousel({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn("flex items-center overflow-hidden", className)}
    >
      <CarouselRow>{children}</CarouselRow>
      <CarouselRow>{children}</CarouselRow>
      <CarouselRow>{children}</CarouselRow>
    </div>
  );
}

function CarouselRow({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex-shrink-0" {...rest}>
      <div className="flex items-center gap-12 [animation:carousel_4s_infinite_linear] pr-12">
        {children}
      </div>
    </div>
  );
}
