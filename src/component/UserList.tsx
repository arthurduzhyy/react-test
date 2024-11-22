import { FC } from 'react'
import { ListGroup } from 'react-bootstrap'
import { User } from '../types/user'
import UserCard from './UserCard'

interface UserListProps {
  users: User[]
  onDelete: (id: number) => void
}

const UserList: FC<UserListProps> = ({ users, onDelete }) => {
  return <ListGroup className="mt-3">
    {users.map(u => <UserCard key={u.id} user={u} onDelete={onDelete} />)}
  </ListGroup>
}

export default UserList