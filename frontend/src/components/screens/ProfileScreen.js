import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {getUserDetails} from '../../actions/Useractions'
import Loader from '../Loader'
import Message from '../Message'
import FormContainer from '../FormContainer'

function ProfileScreen({history}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userRegister = useSelector(state => state.userRegister)
  const { error, loading, userInfo } = userRegister

  useEffect(() => {
      if (userInfo) {
          history.push(redirect)
      }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
      e.preventDefault()

      if (password != confirmPassword) {
          setMessage('Passwords do not match')
      } else {
          dispatch(register(name, email, password))
      }

  }
  return (
    <div></div>
  )
}

export default ProfileScreen