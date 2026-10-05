import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Before an order starts"
      lede={`A web or mobile engagement exists only in a separate agreement both sides accept. This page explains how ${site.name} treats a client order.`}
      sections={[
        {
          heading: "Client orders",
          body: "Sending a message does not hire us. Scope, price, and timeline are written down before work starts.",
        },
        {
          heading: "Site content",
          body: `The text and design of this site belong to ${site.name}. Industry and technology descriptions are the kinds of work we take. They are not claims about named clients.`,
        },
      ]}
    />
  );
}
