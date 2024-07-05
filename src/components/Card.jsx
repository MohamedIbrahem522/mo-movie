import Image from 'next/image';
import Link from 'next/link';

export default function Card({ result }) {
  return (
    <div className='group cursor-pointer hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-2 transition-shadow duration-200 w-full max-w-xs'>
      <Link href={`/movie/${result.id}`}>
      <div className='relative w-full h-40 sm:h-48 md:h-56 lg:h-64'>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            layout='fill'
            objectFit='cover'
            className='rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
          />
        </div>
        <div className='p-2 bg-gray-400 text-gray-700 rounded-b-lg group-hover:text-white text-center'>
          <h2 className='text-base sm:text-lg font-bold truncate'>
            {result.title || result.name}
          </h2>
        </div>
      </Link>
    </div>
  );
}
