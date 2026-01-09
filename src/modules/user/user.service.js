// src/modules/user/user.service.js
import { userRepo } from './user.repo.js'

export const userService = {
  getUsers() {
    return userRepo.findAll()
  },

  getUserById(id) {
    return userRepo.findById(id)
  },

  createUser(payload) {
    return userRepo.create(payload)
  }
}
