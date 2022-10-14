import request from '@/utils/request'

const base_url = '/admin/dept/'

export function queryAllDepts(data) {
  return request({
    url: base_url + 'query-all',
    method: 'post',
    data
  })
}

export function queryAllTreeDepts(id) {
  return request({
    url: base_url + 'query-all-tree',
    method: 'get',
    data: { id }
  })
}

export function queryDeptById(id) {
  return request({
    url: base_url + 'query-by-id',
    method: 'get',
    data: { id }
  })
}

export function addDept(data) {
  return request({
    url: base_url + 'add',
    method: 'post',
    data
  })
}

export function editDept(data) {
  return request({
    url: base_url + 'edit',
    method: 'post',
    data
  })
}

export function delDept(id) {
  return request({
    url: base_url + 'del',
    method: 'post',
    data: { id }
  })
}

export function queryAllDeptUsers(id) {
  return request({
    url: base_url + 'all-users',
    method: 'get',
    data: { id }
  })
}

export function queryAllDeptRoles(id) {
  return request({
    url: base_url + 'all-roles',
    method: 'get',
    data: { id }
  })
}
