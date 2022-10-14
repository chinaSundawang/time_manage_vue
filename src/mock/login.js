import Mock from 'mockjs'
import * as MockDB from './MockDB'

let captcha = null

export default {
  captcha: config => {
    console.log(config)
    captcha = Mock.mock({ 'number|1000-9999': 1000 }).number
    return {
      code: 1,
      data: Mock.Random.dataImage('448x47', captcha)
    }
  },
  loginByLoginName: config => {
    console.log(config)
    const params = JSON.parse(config.body)
    let token = null
    if ('' + captcha !== '' + params.captcha) {
      return {
        code: 1,
        data: {
          result: 2,
          message: '验证码错误'
        }
      }
    }
    if ((params.loginName === MockDB.simple.user.loginName && params.password !== MockDB.simple.user.password) || (params.loginName === MockDB.admin.user.loginName && params.password !== MockDB.admin.user.password)) {
      return {
        code: 1,
        data: {
          result: 3,
          message: '用户名或密码错误'
        }
      }
    }
    if (params.loginName === 'admin') {
      token = MockDB.admin.token
    } else {
      token = MockDB.simple.token
    }
    return {
      code: 1,
      data: {
        result: 1,
        message: '登录成功',
        token: token
      }
    }
  },
  getUserInfo: config => {
    console.log(config)
    return {
      code: 1,
      data: MockDB.admin
    }
  },
  getRouterRoles: () => {
    const routerRoles = new Map()
    routerRoles.set('90a127ce319d5d93b3b49c697cfa138f', ['simple'])
    // routerRoles.set('323c76618c6b56109bd490baf0d00902', ['simple'])
    routerRoles.set('f33d83225bef590d81f61a5afcbbca14', ['simple', 'others'])
    routerRoles.set('3de22ff390ab5d06bafcce547ff780bb', ['simple', 'others'])
    // routerRoles.set('8bdc5038a6585fd2b5d3ef7b1e4bf4e1', ['simple'])
    return {
      code: 1,
      data: routerRoles
    }
  },
  logout: () => {
    return {
      code: 1
    }
  }
}
