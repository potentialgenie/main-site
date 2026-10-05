import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Before an order starts"
      lede="A web or mobile engagement exists only in a separate agreement both sides accept. These pages describe how Potential Genie considers a client order."
      sections={[
        {
          heading: "Client orders",
          body: "Sending a note does not hire the developers. Scope, price, and timeline are written down before work starts.",
        },
        {
          heading: "Site content",
          body: "The text and design of this site belong to Potential Genie. Industry and technology descriptions are the kinds of work the team takes. They are not claims about named clients.",
        },
      ]}
    />
  );
}
