import { Link, NavLink } from "@remix-run/react";
import { useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import Check from "~/components/check";
import CheckMini from "~/components/check-mini";
import LinkArrow from "~/components/link-arrow";
import Logo from "~/components/logo";
import Particles from "~/components/particles";
import { FarcasterIcon, LinkedInIcon, XIcon } from "~/components/social-nav";
import { darkModeAtom } from "~/root";
import { cn } from "~/utils/cn";
import { baseMeta, canonical } from "~/utils/meta";

export const meta = baseMeta(
  "Serotonin - Platform",
  "Serotonin is a go-to-market platform for web3, AI, and biotech. You build the future, we do the strategy, recruiting, and legal work."
);

export const links = canonical("/platform");

const logos = [
  {
    url: "/images/logos/9dcc.png",
    alt: "9dcc Logo",
  },
  {
    url: "/images/logos/a16z.png",
    alt: "Andreessen Horowitz (a16z) Logo",
  },
  {
    url: "/images/logos/Aave.png",
    alt: "Aave DeFi Protocol Logo",
  },
  {
    url: "/images/logos/Animoca.png",
    alt: "Animoca Logo",
  },
  {
    url: "/images/logos/Arbitrum.png",
    alt: "Arbitrum Logo",
  },
  {
    url: "/images/logos/AWS.png",
    alt: "Amazon Web Services Logo",
  },
  {
    url: "/images/logos/Bain&Co.png",
    alt: "Bain & Company Logo",
  },
  {
    url: "/images/logos/BoysClub.png",
    alt: "Boys Club Logo",
  },
  {
    url: "/images/logos/Coinbase.png",
    alt: "Coinbase Logo",
  },
  {
    url: "/images/logos/CoinFund.png",
    alt: "CoinFund Logo",
  },
  {
    url: "/images/logos/Decentraland.png",
    alt: "Decentraland Logo",
  },
  {
    url: "/images/logos/Decrypt.png",
    alt: "Decrypt Logo",
  },
  {
    url: "/images/logos/ENS.png",
    alt: "Ethereum Name Service Logo",
  },
  {
    url: "/images/logos/Fabric.png",
    alt: "Fabric Protocol Logo",
  },
  {
    url: "/images/logos/Figment.png",
    alt: "Figment Logo",
  },
  {
    url: "/images/logos/Fireblocks.png",
    alt: "Fireblocks Logo",
  },
  {
    url: "/images/logos/Keyrock.png",
    alt: "Keyrock Logo",
  },
  {
    url: "/images/logos/Ledger.png",
    alt: "Ledger Logo",
  },
  {
    url: "/images/logos/Metamask.png",
    alt: "MetaMask Logo",
  },
  {
    url: "/images/logos/MoonPay.png",
    alt: "MoonPay Logo",
  },
  {
    url: "/images/logos/Polygon.png",
    alt: "Polygon Logo",
  },
];

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
    isFree: "Limited",
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

const faces = [
  {
    name: "Jarrod Barnes",
    title: "Head of Ecosystem @ NEAR",
    avatar: `/images/faces/avatar.01.png`,
  },
  {
    name: "Min Teo",
    title: "Managing Partner & Co-Founder @ Ethereal Ventures",
    avatar: `/images/faces/avatar.02.png`,
  },
  {
    name: "Deana Burke",
    title: "Co-Founder @ Boys Club",
    avatar: `/images/faces/avatar.03.png`,
  },
  {
    name: "Sergio Silva",
    title: "Co-Founder @ Popset",
    avatar: `/images/faces/avatar.04.png`,
  },
  {
    name: "Ev Medvedev",
    title: "Sr. Director, Web3 & Gaming Strategy @ adidas",
    avatar: `/images/faces/avatar.05.png`,
  },
  {
    name: "Antonio Garcia Martinez",
    title: "Founder & CEO @ Spindl",
    avatar: `/images/faces/avatar.06.png`,
  },
  {
    name: "Kinjal Shah",
    title: "General Partner @ Blockchain Capital",
    avatar: `/images/faces/avatar.07.png`,
  },
];

const memberCardIdFirst = Array.from({ length: 9 }).map(
  (_, i) => `/images/members/card.member${("0" + (i + 1)).slice(-2)}.png`
);

const memberCardIdSecond = Array.from({ length: 9 }).map((_, i) => {
  return `/images/members/card.member${("0" + (i + 10)).slice(-2)}.png`;
});

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

function checkMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export default function Platform() {
  const setDarkAtom = useSetAtom(darkModeAtom);
  const [isMobile, setIsMobile] = useState(checkMobile());
  useEffect(() => {
    setDarkAtom(true);
  }, [setDarkAtom]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(checkMobile());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Particles
        className="absolute top-0 inset-x-0 shadow-inner [mask-image:linear-gradient(to_top,transparent_60%,black)] mix-blend-lighten"
        height={isMobile ? 256 : 556}
        width="window"
      />
      <main id="platform" className="max-w-[1158px] mx-auto gt-america">
        <nav className="flex items-center justify-between p-6 mb-9">
          <NavLink to="/" aria-label="Home">
            <Logo className="animate-[spin_16s_linear_infinite] [animation-direction:reverse] w-14 h-14" />
          </NavLink>
          <Link className="btn" to="https://platform.serotonin.co/login">
            Connect
          </Link>
        </nav>
        <section className="relative">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,var(--bg-color),transparent,var(--bg-color))] opacity-[0.24] pointer-events-none max-w-[1014px] mx-auto" />
          <header className="px-6 flex flex-col justify-center items-center gap-4 mb-12 md:mb-[72px]">
            <h1 className="font-normal text-[32px] leading-[40px] tracking-[-0.08em] uppercase text-center text-[#F1F1F1] gt-america-mono md:text-[72px] md:leading-[72px] lg:text-[96px] lg:leading-[96px] lg:tracking-[-0.1em]">
              The best events <br /> calendar in web3
            </h1>
            <p className="font-normal text-sm tracking-[-0.02em] text-center text-[#E0E0E0] mb-2 max-w-[345px] md:max-w-none md:text-[18px] md:leading-7">
              One calendar for every conference, hackathon, summit and side
              event in web3.
              <br className="hidden md:inline" /> Link your social accounts to
              see where your network will be.
            </p>
            <Link
              className="btn secondary"
              to="https://platform.serotonin.co/login"
            >
              Create Account
            </Link>
          </header>
          <Carousel className="mb-24 sm:[mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            {logos.map(({ url, alt }) => (
              <img key={url} src={url} alt={alt} className="h-7" />
            ))}
          </Carousel>
        </section>
        <Hero className="mb-24" />
        <section>
          <h2 className="font-bold text-[32px] leading-[40px] tracking-[-0.04em] text-center mb-[72px] md:text-[60px] md:leading-[68px] md:tracking-[-0.04em] px-6">
            Be in the right place
            <br /> at the right time.
          </h2>
          <div className="pt-12 border-t border-[#222] px-6 md:px-0 md:border-none relative h-[720px] overflow-y-clip md:overflow-y-visible md:h-[548px] md:mb-[120px]">
            <h4 className="uppercase font-medium text-sm tracking-[-0.02em] mb-[14px]">
              Event Calendar
            </h4>
            <h3 className="inline text-xl tracking-[-0.02em] md:block md:text-2xl md:leading-[32px] md:font-bold">
              See everything happening
              <span className="hidden md:inline">.</span>{" "}
            </h3>
            <p className="inline text-xl tracking-[-0.02em] text-[#808080] md:text-2xl md:leading-[32px] md:max-w-[447px] md:block">
              All things web3 in one place, from flagship conferences to local
              side events.
            </p>
            <img
              src="/images/cards/list.events.png"
              alt="platform post"
              className="animate-float [animation-duration:5s] hidden md:block md:absolute rotate-[-4deg] w-[393px] h-[480px] top-[27px] left-[732px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222]"
            />
            <img
              src="/images/cards/members.png"
              alt="platform post"
              className="animate-float block md:hidden absolute rotate-[-4deg] w-[314px] h-[316px] md:top-[199px] md:right-[505px] top-[270px] left-[24px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md"
            />
            <img
              src="/images/cards/satellite.png"
              alt="platform post"
              className="animate-float absolute rotate-[-4deg] w-[330px] h-[360px] md:top-[187px] md:left-[454px] top-[361px] left-[263px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222]"
            />
          </div>
          <div className="border-t border-[#222] px-6 md:px-0 md:border-none relative overflow-y-clip md:overflow-y-visible h-[720px] md:h-[516px] md:mb-[120px] flex justify-end">
            <div className="pt-12 md:pt-0">
              <h4 className="uppercase font-medium text-sm tracking-[-0.02em] mb-[14px]">
                Social Overlay
              </h4>
              <h3 className="inline text-xl tracking-[-0.02em] md:block md:text-2xl md:leading-[32px] md:font-bold">
                See where your network will be.{" "}
              </h3>
              <p className="inline text-xl tracking-[-0.02em] text-[#808080] md:text-2xl md:leading-[32px] md:max-w-[447px] md:block">
                Link your socials to highlight the people you know. Get alerts
                when they RSVP for new events.
              </p>
            </div>
            <img
              src="/images/cards/sheet.member-1.png"
              alt="platform post"
              className="animate-float [animation-duration:5s] absolute rotate-[-4deg] w-[393px] h-[467px] md:top-[27px] md:right-[728px] top-[257px] left-[35px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222]"
            />
            <img
              src="/images/cards/members.png"
              alt="platform post"
              className="animate-float hidden md:block absolute rotate-[-4deg] w-[314px] h-[316px] top-[199px] right-[505px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md"
            />
          </div>
          <div className="pt-12 md:pt-0 border-y border-[#222] px-6 md:px-0 md:border-none relative h-[720px] md:h-[620px] mb-[120px] overflow-y-clip md:overflow-y-visible">
            <h4 className="uppercase font-medium text-sm tracking-[-0.02em] mb-[14px]">
              Connection Tracing
            </h4>
            <h3 className="inline text-xl tracking-[-0.02em] md:block md:text-2xl md:leading-[32px] md:font-bold">
              Maintain your network<span className="hidden md:inline">.</span>{" "}
            </h3>
            <p className="inline text-xl tracking-[-0.02em] text-[#808080] md:text-2xl md:leading-[32px] md:max-w-[447px] md:block">
              Detailed profiles and a live timeline of how you and other members
              have overlapped.
            </p>
            <img
              src="/images/cards/sheet.event.png"
              alt="platform post"
              className="animate-float [animation-duration:5s] absolute rotate-[-4deg] w-[393px] h-[308px] md:top-[232px] md:left-[391px] left-[-49px] top-[402px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222]"
            />
            <img
              src="/images/cards/sheet.member.png"
              alt="platform post"
              className="animate-float absolute rotate-[-4deg] w-[385px] h-[548px] md:top-[26px] md:left-[730px] top-[227px] left-[114px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222]"
            />
          </div>
        </section>
        <section className="max-w-[968px] mx-auto px-6 sm:mb-[160px]">
          <div className="flex flex-col justify-center items-center mb-[72px]">
            <h2 className="font-bold text-[32px] leading-[40px] tracking-[-0.04em] text-center mb-[32px] md:text-[60px] md:leading-[68px] md:tracking-[-0.04em]">
              Build the network
              <br /> you wish you had.
            </h2>
            <Link className="btn secondary" to="#compare-plans">
              Compare plans
            </Link>
          </div>
          <div className="grid grid-rows-[auto,auto] gap-4 pb-6 mb-24 md:grid-cols-[1fr,1fr] md:grid-rows-1 md:mb-8">
            <div className="bg-[#111] border border-[#222] rounded-xl p-4">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/free.png"
                  alt="free user avatar"
                  className="w-11 h-11"
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
              <ul className="space-y-2 text-lg mb-8 md:hidden">
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
                  <span className="text-xs ml-1 font-medium">/ month</span>
                </p>
                <button className="small">Get started</button>
              </div>
            </div>
            <div className="bg-[#111] border border-[#222] rounded-xl p-4 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/member.png"
                  alt="free user avatar"
                  className="w-[45px] h-[45px]"
                />
                <h3 className="font-bold text-[40px] leading-[44px] tracking-[-0.04em]">
                  Member
                </h3>
              </div>
              <h4 className="font-bold text-xl leading-6 tracking-[-0.04em] mb-4">
                For Serious Professionals.
              </h4>
              <p className="text-sm font-normal text-[#808080] mb-8 md:flex-grow">
                You attend conferences to meet people, grow relationships, and
                close business. ROI matters and you find ways to increase yours.
              </p>
              <ul className="space-y-2 text-lg mb-8 flex-grow md:hidden">
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
                  <span className="text-xs ml-1 font-medium">/ month</span>
                </p>
                <button className="small bg-lime-400 hover:bg-lime-500 focus-visible:bg-lime-500">
                  <LinkArrow className="mr-2" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <table
            id="compare-plans"
            className="text-xs font-medium hidden md:block px-4 mb-24"
          >
            <thead>
              <tr className="uppercase">
                <th className="font-medium p-4 text-left text-[#808080]">
                  Feature
                </th>
                <th className="font-medium p-4">Free</th>
                <th className="font-medium p-4">Member</th>
              </tr>
            </thead>
            <tbody>
              {features.map(({ feature, isFree, isMember }, i) => (
                <tr key={i} className="group">
                  <td className="group-hover:bg-[#111] w-1/3 p-4">{feature}</td>
                  <td className="group-hover:bg-[#111] w-1/3 p-4 text-center text-">
                    {typeof isFree === "string"
                      ? isFree
                      : isFree && <Check className="inline" />}
                  </td>
                  <td className="group-hover:bg-[#111] w-1/3 p-4 text-lime-400 text-center">
                    {isMember && <Check className="inline" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="mb-[160px]">
          <div className="flex flex-col items-center justify-center px-6">
            <h2 className="font-medium text-[32px] leading-[40px] tracking-[-0.02em] text-center mb-2 md:text-[60px] md:leading-[68px] md:tracking-[-0.04em]">
              Join web3’s fast lane.
            </h2>
            <p className="font-normal text-sm tracking-[-0.02em] text-center mb-6 text-[#808080] md:text-[18px] md:leading-7">
              Build relationships with the decision makers
              <br className="md:hidden" /> driving web3 forward.
            </p>
            <button className="secondary">Create account</button>
          </div>
          <div className="relative">
            <div className="rotate-[-4deg] h-[486px] flex flex-col justify-center [mask-image:linear-gradient(to_right,transparent,black,transparent)] gap-4">
              <Carousel className="[&_.carousel-row]:gap-4">
                {memberCardIdFirst.map((url) => (
                  <img
                    key={url}
                    src={url}
                    width={252}
                    height={158}
                    alt="platform member"
                  />
                ))}
              </Carousel>
              <Carousel className="[&_.carousel-row]:gap-4 [&_.carousel-row]:translate-x-[-126px] [&_.carousel-row]:[animation-direction:reverse]">
                {memberCardIdSecond.map((url) => (
                  <img
                    key={url}
                    src={url}
                    width={252}
                    height={158}
                    alt="platform member"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        <footer className="flex items-end justify-between px-6 pb-12">
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
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = scene.current?.querySelectorAll<HTMLElement>(".hero-item");

    let nextX = 0;
    let nextY = 0;
    let x = 0;
    let y = 0;

    let animationFrame: number;
    function animate() {
      const dx = nextX - x;
      const dy = nextY - y;

      x = x + dx * 0.05;
      y = y + dy * 0.05;

      const wp = x / window.innerWidth - 0.5;
      const hp = -1 * (y / window.innerHeight - 0.5);

      img?.forEach((i, index) => {
        i.style.transform = `rotateY(${wp * 4}deg) rotateX(${
          hp * 8
        }deg) translateZ(${-index * 2}px)`;
      });

      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    function handleMouse(e: MouseEvent) {
      nextX = e.clientX;
      nextY = e.clientY;
    }

    window.addEventListener("mousemove", handleMouse);
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div
      ref={scene}
      className={cn(
        "relative h-[940px] sm:h-[888px] [perspective:300px] rotate-[-4deg]",
        className
      )}
      {...rest}
    >
      <div className="block sm:hidden absolute inset-0 -inset-x-24 z-50 [background-image:linear-gradient(to_bottom,transparent_90%,var(--bg-color))]" />
      <img
        src="/images/cards/events.png"
        alt="platform"
        className="hero-item absolute min-w-[1048px] w-[1048px] h-[720px] sm:top-[83px] sm:left-[-2px] top-[62px] left-[-599px] shadow-xl"
      />
      <img
        src="/images/cards/post.png"
        alt="platform post"
        className="hero-item absolute w-[424px] h-[428px] sm:top-[435px] sm:left-[315px] top-[454px] left-[-282px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222] shadow-xl"
      />
      <img
        src="/images/cards/thread.png"
        alt="platform thread"
        className="hero-item absolute w-[304px] h-[164px] sm:top-[354px] sm:left-[605px] top-[328px] left-[4px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222] shadow-xl"
      />
      <img
        src="/images/cards/card.profile.png"
        alt="platform profile"
        className="hero-item absolute w-[268px] h-[184px] sm:top-[623px] sm:left-[636px] top-[653px] left-[52px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222] shadow-xl"
      />
      <img
        src="/images/cards/sheet.member-2.png"
        alt="Amanda Cassatt"
        className="hero-item absolute w-[360px] h-[436px] sm:top-[374px] sm:left-[885px] left-[298px] top-[398px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222] shadow-xl"
      />
      <img
        src="/images/cards/chat.png"
        alt="platform chat"
        className="hero-item absolute w-[202px] h-[68px] sm:top-[817px] sm:left-[714px] top-[864px] left-[117px] shadow-xl"
      />
      <FaceCarousel />
    </div>
  );
}

const FaceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCircles = faces.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalCircles);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalCircles]);

  return (
    <div className="hero-item absolute w-[400px] h-[268px] sm:top-[516px] sm:left-[-52px] top-0 left-[19px] bg-[#111111] rounded-xl bg-opacity-80 backdrop-blur-md border border-[#222] flex gap-6 flex-col">
      <div className="px-4 py-3 border-b border-b-[#222]">
        <h4 className="text-base font-bold">Join Serotonin</h4>
        <p className="text-[13px] leading-5 tracking-[-0.03em] font-medium text-[#808080]">
          Curated community for the leaders in web3
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative">
          <div className="flex items-center overflow-x-clip">
            <div
              className="flex justify-start gap-4 transition-transform duration-300 ease-in-out overflow-visible"
              style={{
                transform: `translateX(${-activeIndex * 112}px)`, // 112px = circle width (96px) + gap (16px)
                marginLeft: `calc(${-100 * (1 / 5)}% + 8px)`, // center 1 / 5 since we show 5 circles plus 8px of gap
              }}
            >
              <div className="flex gap-4 shrink-0">
                {faces.slice(-2).map(({ avatar }) => (
                  <img
                    src={avatar}
                    alt="avatar"
                    key={avatar}
                    width={96}
                    height={96}
                    className="block w-24 h-24 rounded-full shrink-0 transition-all duration-300"
                  />
                ))}
              </div>
              {faces.map(({ avatar }, i) => (
                <img
                  src={avatar}
                  alt="avatar"
                  key={avatar}
                  width={96}
                  height={96}
                  className={`block w-24 h-24 rounded-full shrink-0 transition-all duration-300
                    ${activeIndex === i ? "ring-4 ring-purple-500" : "ring-0"}`}
                />
              ))}
              {faces.slice(0, 3).map(({ avatar }) => (
                <img
                  src={avatar}
                  alt="avatar"
                  key={avatar}
                  width={96}
                  height={96}
                  className="block w-24 h-24 rounded-full shrink-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="p-4" key={activeIndex}>
          <p className="font-bold text-[13px] leading-5">
            {faces[activeIndex].name}
          </p>
          <p className="text-xs leading-5 tracking-[-0.03em] font-medium text-[#808080]">
            {faces[activeIndex].title}
          </p>
        </div>
      </div>
    </div>
  );
};

function Carousel({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn(
        "flex items-center overflow-hidden [&_.carousel-row]:gap-12",
        className
      )}
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
      <div className="carousel-row flex items-center [animation:carousel_120s_infinite_linear] pr-12">
        {children}
      </div>
    </div>
  );
}
