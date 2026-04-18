// "use client";

// import { useState } from "react";

// export default function AddBlog() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = async () => {
//   const res = await fetch("/api/blogs/create", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title, content }),
//   });

//   if (res.ok) {
//     alert("Blog Created ✅");
//     setTitle("");
//     setContent("");
//   } else {
//     const err = await res.json();
//     console.log(err);
//     alert("Error ❌");
//   }
// };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center p-6">
//       <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow">

//         <h1 className="text-2xl font-bold mb-4">
//           ✍️ Create Blog
//         </h1>

//         {/* TITLE */}
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Blog Title"
//           className="w-full border p-3 rounded mb-4"
//         />

//         {/* CONTENT */}
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Write your blog content..."
//           className="w-full border p-3 rounded h-64 mb-4"
//         />

//         {/* BUTTON */}
//         <button
//           onClick={handleSubmit}
//           className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
//         >
//           Publish
//         </button>

//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/blogs/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      alert("Blog Created ✅");
      setTitle("");
      setContent("");
    } else {
      alert("Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex justify-center p-6 bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Create Blog</h1>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border p-3 mb-4 rounded"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-3 h-64 rounded"
          placeholder={`Write markdown...

## Example:
Use our tools:

👉 [Loan Calculator](/tools/loan-calculator)
👉 [Salary Calculator](/tools/salary-calculator)
`}
        />

        <button
          onClick={handleSubmit}
          className="mt-4 bg-black text-white px-6 py-2 rounded"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
