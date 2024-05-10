"use client";

import Image from "next/image";

export default function Results({ results }) {
  return (
    <div className="text-red-700">
      {results.map((result) => (
        <div key={result.id} className="flex flex-col items-center my-4">
          <h2 className="text-xl font-semibold">{result.title}</h2>
          <p className="text-sm text-center">{result.overview}</p>
        </div>
      ))}
    </div>
  );
}
