import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { User } from '../types/user'

interface UserCardProps {
  user: User
  onDelete: (id: number) => void
}

const UserCard: FC<UserCardProps> = ({ user, onDelete }) => {
  return <Card className="mb-3">
    <Card.Body className="d-flex align-items-center">
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="rounded-circle me-3"
      />
      <div className="flex-grow-1">
        <Card.Title>
          {user.first_name} {user.last_name}
        </Card.Title>
        <Card.Text>{user.email}</Card.Text>
      </div>
      <Button
        variant="danger"
        onClick={() => onDelete(user.id)}
      >Delete</Button>
    </Card.Body>
  </Card>
}

export default UserCard