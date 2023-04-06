import axios from 'axios'
import React, { useState } from 'react'
import { Badge, Button, Image, Modal } from 'react-bootstrap'
import { AiFillEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLoader } from '../../store/user'
import { roleToString } from '../../utils/canActivate'
import Details from './details'
import EditUserModal from './editUserModal'

const images = [
  'boy',
  'boy1',
  'girl',
  'girl1',
  'hacker',
  'man',
  'woman',
  'woman1',
  'woman2',
  'soccer-player',
  'bear'
]

export default function ProfileSnippet({ isProfile, size = '100' }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [show, setShow] = useState(false)
  const [editUserShow, setEditUserShow] = useState(false)
  const [pickedImg, setPickedImage] = useState(user.avatar)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleEditUserClose = () => setEditUserShow(false)
  const handleEditUserShow = () => setEditUserShow(true)

  const updater = () => {
    dispatch(getUserLoader())
  }

  return (
    <div>
      <EditUserModal
        user={user}
        updater={updater}
        show={editUserShow}
        handleClose={handleEditUserClose}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pick Your desired avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {images.map((v, i) => (
              <Image
                key={i}
                thumbnail={true}
                src={'/assets/image/avatar/' + v + '.png'}
                roundedCircle
                className={'mb-2 mr-2 ' + (pickedImg === v && 'bg-primary p-2')}
                style={{ width: '64px', height: '64px', cursor: 'pointer' }}
                onClick={() => {
                  setPickedImage(v)
                }}
              />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              setTimeout(handleClose, 500)
              axios
                .post(
                  process.env.REACT_APP_SITE_URL + '/users/avatar/' + pickedImg
                )
                .then((response) => {
                  dispatch(getUserLoader())
                })
                .catch((error) => {
                  console.log(error)
                })
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className={
          'd-flex flex-column align-items-center text-center mb-3' +
          (isProfile ? '' : ' bottom-border')
        }
      >
        <div>
          <img
            src={
              user.avatar && user.avatar.includes('.')
                ? user.avatar
                : '/assets/image/avatar/' +
                  (user.avatar ? user.avatar : 'boy') +
                  '.png'
            }
            alt='Avatar'
            className='rounded-circle'
            width={size}
            height={size}
          />
          {isProfile && (
            <AiFillEdit
              size='1.7rem'
              style={{ cursor: 'pointer' }}
              onClick={handleShow}
            />
          )}
        </div>
        <div className={isProfile ? 'mt-3' : 'mt-3 text-white'}>
          <h4>{user.userName}</h4>
          <p className='mb-1'>{roleToString(user.role)}</p>
          <p className='font-size-sm'>{user.address}</p>
          <p className={isProfile ? 'lead' : 'text-white lead'}>
            {user.id && (
              <>
                <span>{`User ID No. `}</span>{' '}
                <Badge variant='warning' className='p-1'>
                  {user.id}
                </Badge>
              </>
            )}
          </p>
        </div>
      </div>

      {isProfile && (
        <>
          <AiFillEdit
            size='1.7rem'
            style={{ cursor: 'pointer' }}
            onClick={handleEditUserShow}
            className='mb-2 ml-3'
          />
          <Details
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            userFrom={user.userFrom}
            mobile={user.mobile}
            address={user.address}
            institution={user.institution}
            faculty={user.faculty}
          />
        </>
      )}
    </div>
  )
}
