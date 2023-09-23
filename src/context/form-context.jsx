import { createContext } from 'react'
import { useForm } from '../hooks'

const FormContext = createContext()

const FormProvider = ({ children, initialState }) => {
	const formValue = useForm(initialState)

	return (
		<FormContext.Provider value={formValue}>{children}</FormContext.Provider>
	)
}

export { FormContext, FormProvider }
