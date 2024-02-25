import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

export default function RandomProject() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  async function generate() {
    setLoading(true);
    try {
      const response = await fetch("https://random-project-api.vercel.app/api/idea");
      const responseData= await response.json();
      setData(responseData.data)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container mx-auto text-center py-4 flex items-center justify-center flex-col text-gray-900 min-h-screen">
      {!data && (
        <div className="px-4">
          <h1 className="font-display text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl xl:text-6.5xl">
            Random Project Generator
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Click the button below to generate a random project idea!
          </p>
        </div>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <ProjectDetails data={data}/>
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={generate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Generate Project
            </button>
          </div>
        </>
      )}
    </section>
  );
}
