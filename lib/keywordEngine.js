export function generateKeywords() {
  const base = [
    "salary",
    "investment",
    "retirement",
    "tax",
    "credit card",
    "loan",
    "mortgage",
    "passive income",
  ];

  const modifiers = [
    "calculator",
    "tips",
    "guide",
    "how to",
    "best way",
    "strategy",
  ];

  const location = ["usa", "in usa", "for americans"];

  let keywords = [];

  base.forEach((b) => {
    modifiers.forEach((m) => {
      location.forEach((l) => {
        keywords.push(`${m} ${b} ${l}`);
      });
    });
  });

  return keywords;
}
