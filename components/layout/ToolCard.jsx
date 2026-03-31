import Link from "next/link";

export default function ToolCard({ tool }) {
  return (
    <Link href={tool.link}>
      <div className="p-5 border rounded-xl hover:shadow-lg cursor-pointer">
        <h2 className="text-xl font-semibold">{tool.name}</h2>
      </div>
    </Link>
  );
}