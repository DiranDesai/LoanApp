import React, { createContext, useState, useContext } from 'react'

const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalInfo: {fullName: {firstName: 'Diran', lastName: 'Sai'}},
    loanInfo: {},
    employmentInfo: {},
    documents: [],
  })

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data,
      }
    }))
  }

//   const addDocument = (doc) => {
//     setFormData(prev => ({
//       ...prev,
//       documents: [...prev.documents, doc],
//     }));
//   };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
