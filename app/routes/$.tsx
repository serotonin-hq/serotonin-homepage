if (typeof window !== "undefined") {
  window.location.href = new URL("/", window.location.href).toString();
}

export default function Blank() {
  return <></>;
}
