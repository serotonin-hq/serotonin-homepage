import { useSetAtom } from "jotai";
import { useEffect } from "react";
import Particles from "~/components/particles";
import { darkModeAtom } from "~/root";

export default function Platform() {
  const setDarkAtom = useSetAtom(darkModeAtom);
  useEffect(() => {
    setDarkAtom(true);
  }, [setDarkAtom]);

  return (
    <div>
      <Particles className="static" height={556} width="window" />
    </div>
  );
}
