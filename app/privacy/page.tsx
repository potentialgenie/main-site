import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="How we use messages"
      lede="This site does not keep an account for you. A note you prepare here is sent through your own email, and that message is what we receive."
      sections={[
        {
          heading: "Messages",
          body: "The form opens a draft in your mail app. We receive it only if you send it. We use it to reply about a development order.",
        },
        {
          heading: "What we do not collect here",
          body: "This site does not run a customer database and does not ask you to create a login. Do not include passwords, payment card numbers, or account credentials in a note.",
        },
        {
          heading: "How long we keep email",
          body: "Messages are kept for as long as the conversation or the order reasonably requires. You can ask us to delete a message that is not part of an active agreement.",
        },
        {
          heading: "Questions",
          body: "Privacy questions can go to hello@potentialgenie.com.",
        },
      ]}
    />
  );
}
