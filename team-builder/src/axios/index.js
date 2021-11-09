import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialTeamList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'sagun',
    email: 'sagun@gmail.com',
    role: 'Web development',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data:initialTeamList})
  },
  post(url, { name, email, role }) {
    const newTeamMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}