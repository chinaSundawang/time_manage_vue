import Mock from 'mockjs'
import { deepMerge, param2Obj } from '@/utils'
import { asyncMenuMap } from '@/router'
import * as MockDB from '../MockDB'

function createMenu(router, parentId, menus) {
  const menu = {}
  menu.id = router.name
  menu.parentId = parentId
  menu.deleted = 0
  menu.sortNum = router.meta.sortNum
  menu.name = router.meta.title
  menu.icon = router.meta.icon
  menu.remark = Mock.mock('@cparagraph(1, 3)')
  menu.createdBy = Mock.mock('@id')
  menu.createdDate = Mock.mock('@date(\'T\')')
  menu.modifiedBy = Mock.mock('@id')
  menu.modifiedDate = Mock.mock('@date(\'T\')')

  if (router.children && router.children.length > 0) {
    router.children.forEach(children => {
      createMenu(children, router.name, menus)
    })
  }
  menus.push(menu)
}

export default {
  queryAll: config => {
    console.log(config)
    return {
      code: 1,
      message: '操作成功',
      data: MockDB.menus
    }
  },
  queryById: config => {
    console.log(config)
    const params = param2Obj(config.url)
    const menu = MockDB.menus[MockDB.menus.findIndex(item => { return item.id === params.id })]
    return {
      code: 1,
      message: '操作成功',
      data: menu
    }
  },
  edit: config => {
    console.log(config)
    const params = JSON.parse(config.body)
    const menu = MockDB.menus[MockDB.menus.findIndex(item => { return item.id === params.id })]
    deepMerge(menu, params)
    return {
      code: 1,
      message: '操作成功',
      data: {}
    }
  },

  sync: config => {
    console.log(config)
    asyncMenuMap.forEach(router => createMenu(router, null, MockDB.menus))
    return {
      code: 1,
      message: '操作成功',
      data: {}
    }
  },
  queryAllMenuSecurities: config => {
    console.log(config)
    const params = param2Obj(config.url)
    const tempResult = MockDB.menuSecurities.filter(item => { return item.menuId === params.id })
    return {
      code: 1,
      message: '操作成功',
      data: MockDB.securities.filter(security => {
        return tempResult.findIndex(item => { return security.id === item.securityId }) !== -1
      })
    }
  },
  queryMenuRoles: config => {
    console.log(config)
    const params = param2Obj(config.url)
    if (MockDB.roleMenus.findIndex(item => { return item.menuId === params.id }) === -1) {
      // 生成几个role
      for (let i = 0; i < 5; i++) {
        const role = Mock.mock(MockDB.roleMockConfig)
        MockDB.roles.push(role)
        MockDB.roleMenus.push({
          menuId: params.id,
          roleId: role.id
        })
      }
    }
    const roleMenusResult = MockDB.roleMenus.filter(item => { return params.id === item.menuId })
    return {
      code: 1,
      message: '操作成功',
      data: MockDB.roles.filter(role => {
        return roleMenusResult.findIndex(menuRole => { return role.id === menuRole.roleId }) !== -1
      })
    }
  }
}
