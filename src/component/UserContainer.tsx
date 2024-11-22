import { useState } from 'react'
import { Button } from 'react-bootstrap'
import useGetUsers from '../hook/useGetUsers'
import FilterBox from './FilterBox'
import InnerPage from './layout/InnerPage'
import UserList from './UserList'

const UserContainer = () => {
  const { users, setUsers, load } = useGetUsers()
  const [filter, setFilter] = useState<string>('')

  const handleFilterChange = (value: string): void => {
    setFilter(value)
  }

  const handleDeleteUsers = (id: number): void => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
  }

  const filteredUsers = users.filter(u => `${u.first_name} ${u.last_name}`
    .toLowerCase()
    .includes(filter.toLowerCase()))

  return <InnerPage>
    <FilterBox value={filter} onChange={handleFilterChange} />

    <Button onClick={() => load()}>Load users</Button>

    <UserList users={filteredUsers} onDelete={handleDeleteUsers} />
  </InnerPage>
}

export default UserContainer