/* =========================
   🔥 GENERATE CLEAN SLUG
========================= */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/* =========================
   🔥 AUTO CLUSTER DETECTION
========================= */
export function detectCluster(title, content) {
  const text = (title + " " + content).toLowerCase();

  if (text.includes("salary") || text.includes("tax")) return "salary";

  if (text.includes("loan") || text.includes("emi")) return "loan";

  if (text.includes("mortgage")) return "mortgage";

  if (text.includes("credit") || text.includes("debt")) return "credit-card";

  if (text.includes("investment")) return "investment";

  if (text.includes("retirement")) return "retirement";

  return "general";
}
