import Results from "@/components/Results";

// "use client";
const API_KEY = process.env.API_KEY;
export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTrending'? 
        'trending/all/week' : 'movie/top_rated'}?api_key=${API_KEY}&language=en-US&page=1`, 
        {next: {revalidate: 10000}});
  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }
        
  const data = await res.json();
  const results = data.results;
//   console.log(results);
  return (
      <div className="text-center">
			<Results results={results} />
      </div>
  );
}
