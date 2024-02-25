const ProjectDetails= ({ data }) => {
  if(!data) return null; // Return null if data is null or undefined
  
  return (
    <div className="max-w-3xl mx-auto p-4  text-lg ">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="mb-2">
        Difficulty: <span className="font-semibold">{data.difficulty}</span>
      </p>
      <p className="mb-2">Rating: {data.rating}</p>
      <p className="mb-4">{data.brief}</p>
      <h2 className="text-xl font-semibold ">Details</h2>
      <ul className="list-disc text-left p-4  ">
        {data.details.map((detail, index) => (
          <li key={index} className="mb-1">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;