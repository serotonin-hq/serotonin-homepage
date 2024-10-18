import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    window.location.href = new URL("/", window.location.href).toString();
  }, []);

  return <></>;
}
