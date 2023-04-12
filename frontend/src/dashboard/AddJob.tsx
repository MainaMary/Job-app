import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomLabel from '../components/CustomLabel'

const AddJob = () => {
  const handleSubmit = (e:any) =>{
    e.preventDefault()
  }
  return (
    <div>AddJob
      <form onSubmit={handleSubmit}>
        <div>
          <CustomLabel>Job Title</CustomLabel>
          <CustomInput type="text" value="job"/>
        </div>
        <div>
          <CustomLabel>Company</CustomLabel>
          <CustomInput type="text" value="company"/>
        </div>
      </form>
    </div>
  )
}

export default AddJob