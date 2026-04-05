import { generateKeywords } from "@/lib/keywordEngine";

export default function KeywordsPage() {
  const keywords = generateKeywords();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔥 USA Finance Keywords</h1>

      <div className="grid md:grid-cols-2 gap-3">
        {keywords.map((k, i) => (
          <div key={i} className="p-3 bg-gray-100 rounded">
            {k}
          </div>
        ))}
      </div>
    </div>
  );
}
