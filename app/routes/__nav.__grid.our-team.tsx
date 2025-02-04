import { Link, MetaFunction } from "@remix-run/react";
import React from "react";
import ScrollText from "~/components/scroll-text";
import SearchLight from "~/components/search-light";
import { baseMeta, canonical } from "~/utils/meta";

export const meta: MetaFunction = () => {
  return baseMeta(
    "Serotonin Team",
    "Serotonin’s world class team is made up of marketing and web3 experts committed to the future of the internet."
  );
};

export const links = canonical("/our-team");

export default function Team() {
  return (
    <>
      <div className="md:hidden pl-8 fixed left-0 top-[384px] gap-2 right-0 grid grid-cols-2 grid-rows-1">
        <Link
          to="https://jobs.lever.co/serotonin"
          target="__blank"
          className="col-start-2"
        >
          <TeamMember name="We're Hiring!" title="Join us" hoverable />
        </Link>
      </div>
      <SearchLight className="flex flex-col col-span-6 md:col-span-9 gap-6 grid-rows-[min-content] pt-[104px] md:pt-0">
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Amanda Cassatt"
            title="Founder & CEO"
          />
          <Link
            to="https://jobs.lever.co/serotonin"
            target="__blank"
            className="hidden md:block col-start-7 col-span-3"
          >
            <TeamMember name="We're Hiring!" title="Join us" hoverable />
          </Link>
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="AJ Banon"
            title="General Partner"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Elise Ransom"
            title="Managing Partner"
          />
          <TeamMember
            className="col-span-3"
            name="Everett Muzzy"
            title="SVP of Brand & Editorial"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Kara Miley"
            title="Partner"
          />
          <TeamMember
            className="col-span-2"
            name="Petecoin"
            title="VP of Growth"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-start-3 col-span-4 md:mb-0 mb-12"
            name="Teddy Ellison"
            title="Legal Services Managing Partner"
          />
          <TeamMember
            className="col-span-3"
            name="Caitlin Larsen"
            title="Head of People"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-4"
            name="Dustin Goodwin"
            title="Head of Recruiting Services"
          />
          <TeamMember
            className="col-span-2"
            name="Michael Williams"
            title="Head of Product"
          />
          <TeamMember
            className="col-span-3"
            name="Kate Osumi"
            title="Head of Recruiting"
          />
          <TeamMember
            className="col-span-3 md:hidden block md:mb-0 mb-12"
            name="Katie Narain"
            title="Web3 Member Experience Lead"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="David Garber"
            title="Content Director"
          />
          <TeamMember
            className="col-span-2"
            name="Garret J. Shaw"
            title="PR Director"
          />
          <TeamMember
            className="col-span-3 md:block hidden"
            name="Katie Narain"
            title="Web3 Member Experience Lead"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-start-3 col-span-3"
            name="Jo Hunt"
            title="Senior PR Director"
          />
          <TeamMember
            className="col-start-7 col-span-3"
            name="Leslie Termuhlen"
            title="PR Director"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-4"
            name="Martyna Borys-Liszka"
            title="PR Director"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-start-5 col-span-4"
            name="Robin Lim Fang Min"
            title="Senior Marketing Director"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-start-3 col-span-4"
            name="Robyn Pineault"
            title="Senior Marketing Director"
          />
          <TeamMember
            className="col-span-3"
            name="Ryleigh Ebron"
            title="PR Director"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-start-5 col-span-2"
            name="Celento George"
            title="Founding Engineer"
          />
          <TeamMember
            className="col-span-3"
            name="Gregory Jordan"
            title="Senior Engineer"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2 md:block hidden"
            name="Miranda Aubin"
            title="Director of Finance"
          />
          <TeamMember
            className="col-start-5 col-span-2"
            name="José Cazares"
            title="Senior Brand Designer"
          />
          <TeamMember
            className="col-span-3 md:mb-0 mb-12"
            name="Ryan Lasswell"
            title="Founding Product Designer"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Ana Lezama"
            title="Senior PR Manager"
          />
          <TeamMember
            className="col-span-4"
            name="Anouk Morin"
            title="PR Associate"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-start-3 col-span-2"
            name="Chris Heron"
            title="Senior Growth Manager"
          />
          <TeamMember
            className="col-start-7 col-span-3"
            name="Langston Thomas"
            title="Content Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-4"
            name="Chris Kokiousis"
            title="Content Manager"
          />
          <TeamMember
            className="col-span-4"
            name="Patrick Kennedy"
            title="Senior PR Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-4"
            name="Eduardo Tio"
            title="Senior Content Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-start-3 col-span-3"
            name="Elmer Chen"
            title="Senior Content Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Esha Datanwala"
            title="Social Media Manager"
          />
          <TeamMember
            className="col-start-5 col-span-3"
            name="Ian Morgan"
            title="Growth Marketing Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-4"
            name="Gilles Callewaert"
            title="PR Manager"
          />
          <TeamMember
            className="col-start-7 col-span-3"
            name="Sergio Ramirez"
            title="Social Media Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Iliana Mavrou"
            title="PR Associate"
          />
          <TeamMember
            className="col-span-3"
            name="Will Haskins"
            title="APAC Sr. PR Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2 block md:hidden"
            name="Miranda Aubin"
            title="Director of Finance"
          />
          <TeamMember
            className="col-start-5 col-span-2"
            name="Matthew Braga"
            title="Social Media Manager"
          />
          <TeamMember
            className="col-span-3"
            name="Matthew Proffitt"
            title="Social Media Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Josh Adams"
            title="Senior PR Manager"
          />
          <TeamMember
            className="col-span-2"
            name="Kayla Gill"
            title="Senior PR Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-4"
            name="Kevin Kudukis"
            title="Events Manager"
          />
          <TeamMember
            className="col-span-3"
            name="Wahaj Khan"
            title="Senior PR Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Max Parasol"
            title="Senior PR Manager"
          />
          <TeamMember
            className="col-span-3"
            name="Lauren Bukoskey"
            title="Senior PR Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Bregt Vanneuvile"
            title="Marketing Coordinator"
          />
          <TeamMember
            className="col-start-5 col-span-3"
            name="Yuna Y."
            title="Marketing Manager (APAC)"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Abbie Wang"
            title="Marketing Associate"
          />
          <TeamMember
            className="col-start-5 col-span-3"
            name="Caroline York"
            title="APAC Marketing Director"
          />
        </div>

        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Shané Stoliarova"
            title="Sr. Recruiter"
          />
          <TeamMember
            className="col-span-4"
            name="Harshita Soni"
            title="Growth Marketing Manager"
          />
          <TeamMember
            className="col-span-3"
            name="Manish Chembeti"
            title="Rotational Associate"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-2"
            name="Zach Gubner"
            title="Rotational Associate"
          />
          <TeamMember
            className="col-start-5 col-span-3"
            name="Paula Grandis"
            title="Growth Marketing Manager"
          />
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-9 grid-cols-6 gap-6">
          <TeamMember
            className="col-span-3"
            name="Paige Horinek"
            title="Growth Analytics Manager"
          />
          <TeamMember
            className="col-start-5 col-span-3"
            name="Kay Pozniakas"
            title="Growth Marketing Manager"
          />
        </div>
      </SearchLight>
    </>
  );
}

interface TeamMemberProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "name" | "title"> {
  name: string;
  title: string;
  hoverable?: boolean;
}

export function TeamMember({
  name,
  title,
  hoverable,
  ...props
}: TeamMemberProps) {
  return (
    <div {...props}>
      <ScrollText hoverable={hoverable} className="block leading-7 uppercase">
        {name}
      </ScrollText>
      <ScrollText
        hoverable={hoverable}
        className="block leading-7 uppercase opacity-30"
      >
        {title}
      </ScrollText>
    </div>
  );
}
