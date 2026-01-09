
import { userService } from './user.service.js'


export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

export const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(user)
  } catch (err) {
    next(err)
  }
}



export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // validate tối thiểu (bắt buộc)
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      })
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters'
      })
    }

    const user = await userService.createUser({ email, password })

    return res.status(201).json(user)
  } catch (err) {
    console.error(err)

    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}