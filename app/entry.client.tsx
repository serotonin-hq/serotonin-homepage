import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode, useEffect, useState } from "react";
import { hydrateRoot } from "react-dom/client";
import posthog from "posthog-js";

function PosthogInit() {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (isInit) return;
    posthog.init("phc_o43XRFUUemIdkEi108oBaSoOVnYcdV1LgL4In9NrXTV", {
      api_host: "https://us.i.posthog.com",
      person_profiles: "identified_only",
    });
    setIsInit(true);
  }, [isInit]);

  return null;
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
      <PosthogInit />
    </StrictMode>
  );
});
