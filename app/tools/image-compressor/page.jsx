"use client";

import { useState, useRef } from "react";
import imageCompression from "browser-image-compression";
import AdSpace from "@/components/AdSpace";

export default function ImageCompressor() {
  const [originalFile, setOriginalFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quality, setQuality] = useState(0.7);

  const inputRef = useRef();

  // Upload handler
  const handleUpload = async (file) => {
    if (!file) return;

    setOriginalFile(file);
    setPreview(URL.createObjectURL(file));
    setLoading(true);

    try {
      const options = {
        maxSizeMB: quality,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };

      const compressed = await imageCompression(file, options);
      setCompressedFile(compressed);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  // Input change
  const handleChange = (e) => {
    handleUpload(e.target.files[0]);
  };

  // Drag drop
  const handleDrop = (e) => {
    e.preventDefault();
    handleUpload(e.dataTransfer.files[0]);
  };

  // Download
  const handleDownload = () => {
    const url = URL.createObjectURL(compressedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = "compressed-image.jpg";
    a.click();
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Image Compressor
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Compress images without losing quality
        </p>

        {/* AD TOP */}
        <AdSpace/>

        {/* UPLOAD BOX */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current.click()}
          className="mt-8 bg-white border-2 border-dashed border-gray-300 p-8 rounded-2xl text-center cursor-pointer hover:border-blue-500 transition"
        >
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleChange}
            className="hidden"
          />
          <p className="text-gray-600">
            Click or Drag & Drop Image Here
          </p>
        </div>

        {/* PREVIEW */}
        {preview && (
          <div className="mt-6 flex flex-col items-center">
            <img
              src={preview}
              alt="preview"
              className="max-h-64 rounded-lg shadow"
            />
          </div>
        )}

        {/* SLIDER */}
        {originalFile && (
          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Compression Level: {quality}
            </label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full"
            />
          </div>
        )}

        {/* RESULT */}
        {originalFile && (
          <div className="mt-6 bg-white p-5 rounded-xl shadow text-center">
            <p>Original: {(originalFile.size / 1024).toFixed(2)} KB</p>

            {compressedFile && (
              <p className="mt-2 text-green-600 font-semibold">
                Compressed: {(compressedFile.size / 1024).toFixed(2)} KB
              </p>
            )}

            {loading && <p className="mt-2">Compressing... ⏳</p>}
          </div>
        )}

        {/* DOWNLOAD */}
        {compressedFile && (
          <div className="mt-6 text-center">
            <button
              onClick={handleDownload}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Download Image
            </button>
          </div>
        )}

        {/* AD BOTTOM */}
        <AdSpace/>

      </div>
    </div>
  );
}