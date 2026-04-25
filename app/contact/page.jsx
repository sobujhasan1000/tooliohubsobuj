import ContactClient from "../server-file/ContactClient";

// ✅ SEO META (SERVER SIDE)
export const metadata = {
  title: "Contact ToolioFinance | Get Help & Support",
  description:
    "Contact ToolioFinance for support, questions, or feedback about our financial calculators and blog guides.",
  alternates: {
    canonical: "https://www.tooliofinance.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
