import {
  GoogleIcon,
  BackdropWrapper,
  ModalWrapper,
  TextInput,
} from 'components'
import useSignupModal from './useSignupModal'
import { FormProvider } from 'react-hook-form'

const SignupForm: React.FC = () => {
  const {
    showLoginFormHandler,
    translate,
    form,
    onSubmit,
    errors,
    isLoading,
    authWithGoogleHandler,
    googleError,
    modalCloseHandler,
  } = useSignupModal()

  return (
    <FormProvider {...form}>
      <BackdropWrapper>
        <ModalWrapper onClose={modalCloseHandler}>
          {isLoading && <h1 className='text-red text-2xl'>Loading...</h1>}
          <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
            {translate('common:create_an_account')}
          </h1>
          <p className='text-light-grey mb-6'>
            {translate('common:start_your_journey')}
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <TextInput
              label={translate('common:name')}
              type='text'
              placeholder={translate('common:name_placeholder')}
              name='name'
              error={errors?.name}
            />

            <TextInput
              label={translate('common:email')}
              type='email'
              placeholder={translate('common:email_placeholder')}
              name='email'
              error={errors?.email}
            />

            <TextInput
              label={translate('common:password')}
              type='password'
              placeholder={translate('common:password')}
              name='password'
            />

            <TextInput
              label={translate('common:confirm_password')}
              type='password'
              placeholder={translate('common:confirm_password')}
              name='confirm_password'
            />

            <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
              {translate('common:get_started')}
            </button>
            <button
              onClick={authWithGoogleHandler}
              className='border border-very-light-grey rounded  w-[22.5rem] mt-4 flex items-center justify-center gap-2 py-[0.438rem]'
              type='button'
            >
              <GoogleIcon />
              <span className='text-white'>
                {translate('common:signup_with_google')}
              </span>
            </button>
            {googleError && <p>{googleError}</p>}

            <p className='text-light-grey mt-8 text-center'>
              {translate('common:already_have_account')}
              <button
                type='button'
                onClick={showLoginFormHandler}
                className='text-theme-primary underline cursor-pointer ml-1'
              >
                {translate('common:login')}
              </button>
            </p>
          </form>
        </ModalWrapper>
      </BackdropWrapper>
    </FormProvider>
  )
}

export default SignupForm
