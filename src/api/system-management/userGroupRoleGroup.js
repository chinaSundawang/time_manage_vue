import request from '@/utils/request'

const base_url = '/admin/user-group-role-group/'

export function add(data) {
  return request({
    url: base_url + 'add',
    method: 'post',
    data
  })
}

export function delByEntityMapping(data) {
  return request({
    url: base_url + 'del-by-entity-mapping',
    method: 'post',
    data
  })
}
