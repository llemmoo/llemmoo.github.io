import React, { Component } from 'react'
import *  as yup from 'yup'

const userSchema  = yup.object().shape({
    name: yup.string().required('Please enter a name'),
    email: yup.string().email().required('Please enter a valid email'),
    message: yup.string().required('Please enter a message')
})

export default userSchema