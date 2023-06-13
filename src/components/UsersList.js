import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserAction, getUsers } from '../redux/actions/UsersActions'

const UsersList = () => {
    const dispatch=useDispatch()

    useEffect(() => {
  dispatch(getUsers())
    }, [])
    
    const users=useSelector(state=>state.users)
    console.log(users)
  return (
    <div id='users' >
   {users && users.map((user)=> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000" />
      <Card.Body>
        <Card.Title> {user.name} </Card.Title>
        <Card.Text>
         {user.email}
        </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(deleteUserAction(user.id))} >delete</Button>
      </Card.Body>
    </Card>)}
    </div>
  )
}

export default UsersList