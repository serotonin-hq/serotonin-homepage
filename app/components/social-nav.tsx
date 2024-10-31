import { Link } from "@remix-run/react";
import ScrollText from "~/components/scroll-text";
import { cn } from "~/utils/cn";

function XIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.95249 7.45693L12.6756 3.22217H11.7935L8.55922 6.89839L5.97792 3.22217H3L6.90431 8.78176L3 13.2222H3.88214L7.2955 9.33905L10.0221 13.2222H13L8.95249 7.45693ZM4.20027 3.8729H5.55542L8.09623 7.42815L8.49075 7.98211L11.7931 12.6031H10.4379L4.20027 3.8729Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.58965 2.22217C2.71311 2.22217 2 2.93607 2 3.81358C2 4.69147 2.71311 5.40565 3.58965 5.40565C4.4655 5.40565 5.17803 4.69143 5.17803 3.81358C5.17806 2.93607 4.4655 2.22217 3.58965 2.22217Z"
        fill="currentColor"
      />
      <path
        d="M4.79349 6.07776H2.38447C2.27755 6.07776 2.19092 6.16462 2.19092 6.27173V14.0279C2.19092 14.1351 2.27755 14.2219 2.38447 14.2219H4.79349C4.9004 14.2219 4.98703 14.1351 4.98703 14.0279V6.27173C4.98703 6.16462 4.9004 6.07776 4.79349 6.07776Z"
        fill="currentColor"
      />
      <path
        d="M8.80402 6.77551C9.23784 6.30186 9.95308 5.88501 10.9206 5.88501C13.634 5.88501 13.9998 7.85071 13.9998 9.77359V14.028C13.9998 14.1352 13.9132 14.222 13.8063 14.222H11.4016C11.2947 14.222 11.2081 14.1352 11.2081 14.028V10.257C11.2081 9.20113 11.1302 8.3935 10.1507 8.3935C9.25119 8.3935 8.90071 8.89729 8.90071 10.1904V14.028C8.90071 14.1351 8.81408 14.2219 8.70717 14.2219H6.30341C6.1965 14.2219 6.10986 14.1351 6.10986 14.028V6.27176C6.10986 6.16464 6.1965 6.07778 6.30341 6.07778H8.61047C8.71739 6.07778 8.80402 6.16464 8.80402 6.27176V6.77551Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FarcasterIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.05917 2.5H11.7988V13.5H10.6627V8.46129H10.6516C10.526 7.06871 9.35502 5.97742 7.92899 5.97742C6.50297 5.97742 5.33197 7.06871 5.20641 8.46129H5.19527V13.5H4.05917V2.5Z"
        fill="currentColor"
      />
      <path
        d="M2 4.06129L2.46154 5.62258H2.85207V11.9387C2.65599 11.9387 2.49704 12.0976 2.49704 12.2935V12.7194H2.42604C2.22996 12.7194 2.07101 12.8782 2.07101 13.0742V13.5H6.04734V13.0742C6.04734 12.8782 5.88838 12.7194 5.69231 12.7194H5.6213V12.2935C5.6213 12.0976 5.46235 11.9387 5.26627 11.9387H4.84024V4.06129H2Z"
        fill="currentColor"
      />
      <path
        d="M10.7337 11.9387C10.5377 11.9387 10.3787 12.0976 10.3787 12.2935V12.7194H10.3077C10.1116 12.7194 9.95266 12.8782 9.95266 13.0742V13.5H13.929V13.0742C13.929 12.8782 13.77 12.7194 13.574 12.7194H13.503V12.2935C13.503 12.0976 13.344 11.9387 13.1479 11.9387V5.62258H13.5385L14 4.06129H11.1598V11.9387H10.7337Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SocialNav({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={cn("sidenav", className)}>
      <div className="flex items-center gap-1">
        <Link
          to="https://twitter.com/serotonin_hq"
          className="w-8 h-8 flex items-center justify-center border dark:border-[#2a2a2a] dark:bg-[#111] rounded-full group"
        >
          <XIcon className="block group-hover:hidden" />
          <span className="hidden group-hover:block">X</span>
        </Link>
        <Link
          to="https://www.linkedin.com/company/serotoninco"
          className="w-8 h-8 flex items-center justify-center border dark:border-[#2a2a2a] dark:bg-[#111] rounded-full group"
        >
          <LinkedInIcon className="block group-hover:hidden" />
          <span className="hidden group-hover:block">IN</span>
        </Link>
        <Link
          to="https://warpcast.com/serotonin-hq"
          className="w-8 h-8 flex items-center justify-center border dark:border-[#2a2a2a] dark:bg-[#111] rounded-full group"
        >
          <FarcasterIcon className="block group-hover:hidden" />
          <span className="hidden group-hover:block">FC</span>
        </Link>
      </div>
      <div className="flex items-center gap-1 leading-7 pt-2">
        <Link
          to="/platform-terms"
          className="uppercase text-[11px] opacity-30 hover:opacity-100 transition-opacity"
        >
          <ScrollText hoverable>Terms</ScrollText>
        </Link>
        <span className="text-[11px] opacity-30">•</span>
        <Link
          target="__blank"
          to="https://jobs.lever.co/serotonin"
          className="uppercase text-[11px] opacity-30 hover:opacity-100 transition-opacity"
        >
          <ScrollText hoverable>Careers</ScrollText>
        </Link>
      </div>
    </div>
  );
}
