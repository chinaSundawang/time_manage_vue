import Mock from 'mockjs'
import Utils from './utils'

export const deptMockConfig = {
  'id|1': Utils.id,
  'parentId|1': Utils.id, // 父级机构
  'deleted|1': Utils.deleted, // 是否删除
  sortNum: '@increment', // 机构序号
  'type|1': ['政府机构', '国有企业', '民营企业'], // 机构类型
  name: '@cword(5, 10)', // 机构名称
  remark: '@cparagraph(1, 3)', // 机构描述
  createdBy: '@increment', // 创建人
  createdDate: +Mock.Random.date('T'), // 创建时间
  modifiedBy: '@increment', // 最后修改人
  modifiedDate: +Mock.Random.date('T') // 最后修改时间
}

export const dictionaryMockConfig = {
  'id|1': Utils.id,
  'parentId': null, // 上级ID
  'deleted|1': Utils.deleted, // 是否删除
  'category|1': [1, 2, 3], // 类型： 1：业务字典类型, 2：单级业务字典, 3：多级业务字典
  'type|1': Utils.id, // 字典类型ID
  name: '@cword(5, 10)', // 名称
  'code|1': Utils.id, // 规则码
  'sortNum': '@increment', // 编号
  remark: '@cparagraph(1, 3)', // 备注
  createdBy: '@increment', // 创建人
  createdDate: +Mock.Random.date('T'), // 创建时间
  modifiedBy: '@increment', // 最后修改人
  modifiedDate: +Mock.Random.date('T') // 最后修改时间
}

export const groupMockConfig = {
  'id|1': Utils.id,
  'deleted|1': Utils.deleted, // 是否删除
  sortNum: '@increment', // 编号
  category: 1, // 分组类型，可面向用户1、角色2等
  name: '@cword(5, 10)', // 名称
  remark: '@cparagraph(1, 3)', // 备注
  createdBy: '@increment', // 创建人
  createdDate: +Mock.Random.date('T'), // 创建时间
  modifiedBy: '@increment', // 最后修改人
  modifiedDate: +Mock.Random.date('T') // 最后修改时间
}

export const securityMockConfig = {
  'id|1': Utils.id,
  'deleted|1': Utils.deleted, // 是否删除
  securityDef: '@url', // 定义，通常为url或url正则等
  name: '@cword(5, 10)', // 名称
  remark: '@cparagraph(1, 3)', // 备注
  createdBy: '@increment', // 创建人
  createdDate: +Mock.Random.date('T'), // 创建时间
  modifiedBy: '@increment', // 最后修改人
  modifiedDate: +Mock.Random.date('T') // 最后修改时间
}

export const menuMockConfig = {
  id: '',
  parentId: '', // 上级ID
  deleted: 0, // 是否删除
  sortNum: '', // 菜单序号
  name: '', // 名称
  icon: '', // 图标
  remark: '', // 备注
  createdBy: '', // 创建人
  createdDate: '', // 创建时间
  modifiedBy: '', // 最后修改人
  modifiedDate: '' // 最后修改时间
}

export const roleMockConfig = {
  'id|1': Utils.id,
  'deleted|1': Utils.deleted, // 是否删除
  sortNum: '@increment', // 序号
  name: '@cword(5, 10)', // 名称
  remark: '@cparagraph(1, 3)', // 描述
  createdBy: '@increment', // 创建人
  createdDate: +Mock.Random.date('T'), // 创建时间
  modifiedBy: '@increment', // 最后修改人
  modifiedDate: +Mock.Random.date('T') // 最后修改时间
}

export const userMockConfig = {
  'id|1': Utils.id, // 主键
  'deleted|1': Utils.deleted, // 是否删除
  'disabled|1': Utils.state, // 是否启用
  sortNum: '@increment', // 序号
  'loginName': /[a-z][A-Z][0-9]/, // 登录ID
  'password': '@id', // 密码
  'name': '@cname', // 姓名
  'nickName': '@cname', // 昵称
  'avatar': '', // 肖像地址
  'idNumber': /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, // 证件号码
  'gender|1': [0, 1], // 性别
  'birthday': '@date("yyyy-MM-dd")', // 出生日期
  'phone': /^1[34578]\d{9}$/, // 联系电话
  'email': '@email', // 联系邮箱
  'address': '@county(true)', // 住址
  'tag': '@cword(5, 10)', // 用户标签
  'remark': '@cparagraph(1, 3)', // 描述
  createdBy: '@increment', // 创建人
  createdDate: +Mock.Random.date('T'), // 创建时间
  modifiedBy: '@increment', // 最后修改人
  modifiedDate: +Mock.Random.date('T') // 最后修改时间
}
// 用户
export const users = []
// 部门，数组
export const depts = []
// 部门，Tree
export const deptsTree = []
// 单级、多级字典、字典类别
export const dictionaries = []
// 用户分组、角色分组
export const groups = []
// 菜单
export const menus = []
// 资源定义
export const securities = []
// 菜单与资源
export const menuSecurities = []
// 角色
export const roles = []
// 角色与菜单中间表
export const roleMenus = []
// 角色与角色组中间表
export const roleGroups = []
// 用户与角色中间表
export const userRoles = []
// 用户与角色组中间表
export const userRoleGroups = []
// 用户组与角色组中间表
export const userGroupRoleGroups = []
// 用户与用户组
export const userGroups = []
// 用户与部门中间表
export const deptUsers = []
// 部门与角色中间表
export const deptRoles = []

export const admin = {}

export const simple = {}

//  随机生成tree
function createDeptTree(dept) {
  dept.children = []
  if (Mock.mock('@boolean')) {
    const children = Mock.mock(deptMockConfig)
    depts.push(children)
    children.parentId = dept.id
    dept.children.push(children)
    createDeptTree(children)
  }
  return dept
}

//  主表mock数据
const length = Mock.mock('@integer(10, 20)')
for (let i = 0; i < length; i++) {
  //  用户
  const tempUser = Mock.mock(userMockConfig)
  users.push(tempUser)
  //  用户分组
  const tempUserGroup = Mock.mock(groupMockConfig)
  tempUserGroup.category = 1
  groups.push(tempUserGroup)
  //  角色分组
  const tempRoleGroup = Mock.mock(groupMockConfig)
  tempRoleGroup.category = 2
  groups.push(tempRoleGroup)
  //  角色
  const tempRole = Mock.mock(roleMockConfig)
  roles.push(tempRole)
  //  部门，数组
  const tempDept = Mock.mock(deptMockConfig)
  depts.push(tempDept)
  //  部门，tree结构
  deptsTree.push(tempDept)
  createDeptTree(tempDept)
  //  资源定义
  securities.push(Mock.mock(securityMockConfig))

  //  中间表数据关系
  //  用户与角色
  userRoles.push({ userId: tempUser.id, roleId: tempRole.id })
  //  用户与用户组
  userGroups.push({ userId: tempUser.id, groupId: tempUserGroup.id })
  //  用户与角色组
  userRoleGroups.push({ userId: tempUser.id, roleGroupId: tempRoleGroup.id })
  //  角色与角色组
  roleGroups.push({ roleId: tempRole.id, roleGroupId: tempRoleGroup.id })
  //  用户组与角色组中间表
  userGroupRoleGroups.push({ userGroupId: tempUserGroup.id, roleGroupId: tempRoleGroup.id })
  //  用户与部门中间表
  deptUsers.push({ userId: tempUser.id, deptId: tempDept.id })
  // 部门与角色
  deptRoles.push({ deptId: tempDept.id, roleId: tempRole.id })
}

//  字典类别
const dictionary = Mock.mock(dictionaryMockConfig)
dictionary.type = null
dictionary.category = 1
dictionary.parentId = 'root'
dictionary.deleted = 0
dictionaries.push(dictionary)
//  单级字典
for (let i = 0; i < 13; i++) {
  const item = Mock.mock(dictionaryMockConfig)
  item.category = 2
  item.parentId = 'root'
  item.type = dictionary.id
  dictionaries.push(item)
}
//  多级字典
for (let i = 0; i < 11; i++) {
  const item = Mock.mock(dictionaryMockConfig)
  item.category = 3
  item.parentId = 'root'
  item.type = dictionary.id
  dictionaries.push(item)
}

let temp = Mock.mock(userMockConfig)
temp.name = 'admin'
temp.loginName = 'admin'
temp.password = 'admin'
temp.avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
users.push(temp)
admin.token = 'admin'
admin.roles = ['admin']
admin.user = temp

temp = Mock.mock(userMockConfig)
temp.name = 'simple'
temp.loginName = 'simple'
temp.password = 'simple'
temp.avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
users.push(temp)
simple.token = 'simple'
simple.roles = ['simple']
simple.user = temp
