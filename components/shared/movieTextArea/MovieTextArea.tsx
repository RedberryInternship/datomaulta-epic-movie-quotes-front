import { PropsType } from './types'
import useMovieTextArea from './useMovieTextArea'

const MovieTextArea: React.FC<PropsType> = (props) => {
  const { form } = useMovieTextArea()
  return (
    <>
      <textarea
        {...form.register(props.name)}
        className='bg-transparent placeholder:text-white border border-light-grey rounded-[0.3rem] w-full text-xl px-4 py-2'
        placeholder={props.placeholder}
      ></textarea>
      <span className='text-light-grey text-xl absolute top-1/2 right-4 -translate-y-1/2'>
        {props.locale}
      </span>
    </>
  )
}

export default MovieTextArea
