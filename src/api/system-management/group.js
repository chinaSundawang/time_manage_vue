import request from '@/utils/request'

const base_url = '/admin/group/'

export function queryPageGroups(data) {
  return request({
    url: base_url + 'query-page',
    method: 'post',
    data
  })
}

export function queryAllGroups(data) {
  return request({
    url: base_url + 'query-all',
    method: 'post',
    data
  })
}

export function queryGroupById(id) {
  return request({
    url: base_url + 'query-by-id',
    method: 'get',
    data: { id }
  })
}

export function addGroup(data) {
  return request({
    url: base_url + 'add',
    method: 'post',
    data
  })
}

export function editGroup(data) {
  return request({
    url: base_url + 'edit',
    method: 'post',
    data
  })
}

export function delGroup(id) {
  return request({
    url: base_url + 'del',
    method: 'post',
    data: { id }
  })
}

export function queryAllRoleGroupUsers(id) {
  return request({
    url: base_url + 'all-role-group-users',
    method: 'get',
    data: { id }
  })
}

export function queryAllUserGroupUsers(id) {
  return request({
    url: base_url + 'all-user-group-users',
    method: 'get',
    data: { id }
  })
}

export function queryAllRoleGroups(id) {
  return request({
    url: base_url + 'all-role-groups',
    method: 'get',
    data: { id }
  })
}

export function queryAllUserGroups(id) {
  return request({
    url: base_url + 'all-user-groups',
    method: 'get',
    data: { id }
  })
}

export function queryAllGroupRoles(id) {
  return request({
    url: base_url + 'all-roles',
    method: 'get',
    data: { id }
  })
}
