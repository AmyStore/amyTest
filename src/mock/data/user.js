/**
 * Created by jerry on 2017/4/13.
 */
import Mock from 'mockjs'
const LoginUsers = [
  {
    id: 1,
    username: 'amy',
    password: '123456',
    email: 'amy113@qq.com',
    name: '超级管理员'
  }
]

const Users = []
for (let i = 0; i < 100; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

export {LoginUsers, Users}