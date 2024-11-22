import { useState } from 'react'
import { User } from '../types/user'

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([])

  const load = () => {
    fetch('https://reqres.in/api/users')
      .then(r => r.json())
      .then(body => setUsers(body.data))
      .catch(err => console.log(err))
  }

  return { users, setUsers, load }
}

export default useGetUsers