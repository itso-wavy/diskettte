import { createContext } from 'react'
import { useForm } from '../hooks'

const FormContext = createContext()

const FormProvider = ({ children, initialState }) => {
	const formValue = useForm(initialState)
	// context + hook으로 새로운 context를 생성

	return (
		<FormContext.Provider value={formValue}>{children}</FormContext.Provider>
	)
}

export { FormContext, FormProvider }
