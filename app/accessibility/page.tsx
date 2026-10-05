import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Using this site"
      lede="Pages use semantic headings, visible focus, and text that does not depend on a background image. If something blocks you, tell us and we will fix it."
      sections={[
        {
          heading: "What to expect",
          body: "Navigation, forms, and questions can be used from the keyboard. The mobile menu is a button with an accessible name. Form fields have visible labels.",
        },
        {
          heading: "Report a barrier",
          body: "Email hello@potentialgenie.com with the page address and what you were trying to do. We treat that as something to fix.",
        },
      ]}
    />
  );
}
