const tools = [
  {
    name: "salary-calculator",
    url: "/tools/salary-calculator",
    keywords: ["salary", "take home pay", "after tax", "paycheck"],
  },
  {
    name: "loan-calculator",
    url: "/tools/loan-calculator",
    keywords: ["loan", "personal loan", "interest", "emi"],
  },
  {
    name: "mortgage-calculator",
    url: "/tools/mortgage-calculator",
    keywords: ["mortgage", "home loan", "house loan"],
  },
  {
    name: "credit-card",
    url: "/tools/credit-card",
    keywords: ["credit card", "apr", "debt"],
  },
  {
    name: "investment-calculator",
    url: "/tools/investment-calculator",
    keywords: ["investment", "roi", "stocks", "returns"],
  },
  {
    name: "retirement-calculator",
    url: "/tools/retirement-calculator",
    keywords: ["retirement", "pension", "401k"],
  },
];

// 🔥 detect related tools
export function getRelatedTools(content = "") {
  const text = content.toLowerCase();

  const matched = [];

  tools.forEach((tool) => {
    const found = tool.keywords.some((kw) => text.includes(kw.toLowerCase()));

    if (found) {
      matched.push({
        title: tool.name.replace("-", " "),
        url: tool.url,
      });
    }
  });

  return matched;
}
