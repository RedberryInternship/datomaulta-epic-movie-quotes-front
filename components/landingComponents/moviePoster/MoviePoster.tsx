import { Line, MiniLine } from 'components';
import { PropsType } from './types';

const MoviePoster: React.FC<PropsType> = (props) => {
  return (
    <div
      className={`bg-${props.background} text-white h-screen relative bg-fixed bg-center bg-cover`}
    >
      <div className={`flex gap-4 absolute top-[${props.position}%] left-[9%]`}>
        <div className='pt-8 sm:hidden'>
          <Line />
        </div>
        <div className='pt-3 hidden sm:block'>
          <MiniLine />
        </div>
        <p className='font-montserrat font-bold text-[3.125rem] sm:text-xl '>
          {props.children}
          <span className='block text-3xl sm:text-base mt-2'>
            {props.movie}, {props.year}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MoviePoster;