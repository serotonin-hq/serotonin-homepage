export default function LinkArrow(props: React.HTMLAttributes<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.17574 11.8243C4.41005 12.0586 4.78995 12.0586 5.02426 11.8243L10.8 6.04853V10.6C10.8 10.9314 11.0686 11.2 11.4 11.2C11.7314 11.2 12 10.9314 12 10.6V4.6C12 4.26863 11.7314 4 11.4 4H5.4C5.06863 4 4.8 4.26863 4.8 4.6C4.8 4.93137 5.06863 5.2 5.4 5.2H9.95147L4.17574 10.9757C3.94142 11.2101 3.94142 11.5899 4.17574 11.8243Z"
        fill="currentColor"
      />
    </svg>
  );
}
