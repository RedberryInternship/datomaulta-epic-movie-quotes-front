import { PropsType } from './types'
import { useTextInput } from './useTextInput'
import { ErrorMessage } from '@hookform/error-message'
import {
  HidePasswordIcon,
  InputCorrectIcon,
  InputErrorIcon,
  ShowPasswordIcon,
} from 'components'

const TextInput: React.FC<PropsType> = (props) => {
  const {
    form,
    t,
    isInValid,
    isDirty,
    inputRef,
    passwordShowClickHandler,
    passwordFieldType,
    ref,
    rest,
    router,
  } = useTextInput(props.name)

  return (
    <div
      className={`mb-3 ${
        router.locale === 'en' ? 'font-helvetica-en' : 'font-helvetica-geo'
      }`}
    >
      <label className='text-white mb-2 block'>
        {props.label}
        <span className='text-red-danger inline-block ml-1'>*</span>
      </label>
      <div className='relative max-w-[22.5rem]'>
        <input
          {...rest}
          ref={(e) => {
            ref(e)
            inputRef.current = e
          }}
          type={props.type}
          placeholder={props.placeholder}
          className={`${
            isInValid ? 'border-error-red-border' : 'border-transparent'
          } ${
            !isInValid && isDirty && 'border-success-green'
          }  py-2 px-2 w-full block placeholder:text-light-grey placeholder rounded
          bg-very-light-grey outline-none border-2 focus:border-focus-blue pr-13 text-black`}
        />
        {isInValid && (
          <div
            className={`absolute top-1/2 ${
              props.type === 'password' ? 'right-8' : 'right-4'
            } -translate-y-1/2`}
          >
            <InputErrorIcon />
          </div>
        )}
        {!isInValid && isDirty && (
          <div
            className={`absolute top-1/2  ${
              props.type === 'password' ? 'right-9' : 'right-4'
            } -translate-y-1/2`}
          >
            <InputCorrectIcon />
          </div>
        )}
        {props.type === 'password' && (
          <button
            type='button'
            onClick={passwordShowClickHandler}
            className='absolute top-1/2 right-2 -translate-y-1/2'
          >
            {passwordFieldType === 'password' ? (
              <ShowPasswordIcon />
            ) : (
              <HidePasswordIcon />
            )}
          </button>
        )}
      </div>

      <div className={`text-error-red text-sm mt-1 h-1 `}>
        {!props.error && (
          <ErrorMessage
            errors={form.formState.errors}
            name={props.name}
            render={({ message }) => <p>{t(message)}</p>}
          />
        )}
        <p>{props.error}</p>
      </div>
    </div>
  )
}

export default TextInput
