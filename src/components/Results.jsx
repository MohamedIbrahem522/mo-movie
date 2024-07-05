import Card from './Card';

export default function Results({ results }) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
      <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center'>
        {results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
