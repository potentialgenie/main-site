import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return (
    <LegalPage
      title="No tracking cookies"
      lede="Potential Genie does not use advertising cookies or a third-party analytics tag on these pages."
      sections={[
        {
          heading: "What may still be stored",
          body: "Your browser may keep ordinary technical data required to load the site. We do not use that data to build a profile of you.",
        },
        {
          heading: "If that changes",
          body: "If a later version of the site adds optional analytics, this page will say what it is and how to refuse it before it runs.",
        },
      ]}
    />
  );
}
