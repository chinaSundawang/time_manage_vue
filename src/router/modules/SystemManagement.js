/** When your routing table is too long, you can split it into small modules**/

import defaultLayout from '@/views/layout/LeftAccordionSidebar/index'
import MenuGroup from '@/views/layout/MenuGroup/index'

// name值即为后端ID，请使用http://www.uuid.online/ 在前端生成，后端只允许做同步操作

const asyncRouter = {
  path: '/system',
  component: defaultLayout,
  hidden: false,
  alwaysShow: true,
  name: '90a127ce319d5d93b3b49c697cfa138f',
  meta: {
    sortNum: 1,
    roles: [],
    title: '系统管理',
    icon: 'setting'
  },
  children: [
    {
      path: 'dept',
      component: () => import('@/views/system-management/dept/main'),
      hidden: false,
      alwaysShow: true,
      name: '323c76618c6b56109bd490baf0d00902',
      meta: {
        sortNum: 1,
        roles: [],
        title: '部门管理',
        icon: 'dept'
      }
    },
    {
      path: 'user-group',
      component: MenuGroup,
      hidden: false,
      alwaysShow: true,
      name: 'f33d83225bef590d81f61a5afcbbca14',
      meta: {
        sortNum: 1,
        roles: [],
        title: '用户与分组',
        icon: 'user-setting'
      },
      children: [
        {
          path: 'group',
          component: () => import('@/views/system-management/group/main'),
          query: {
            category: 1
          },
          hidden: false,
          alwaysShow: true,
          name: '3de22ff390ab5d06bafcce547ff780bb',
          meta: {
            sortNum: 1,
            roles: [],
            title: '用户分组',
            icon: 'group'
          }
        },
        {
          path: 'user',
          component: () => import('@/views/system-management/user/main'),
          hidden: false,
          alwaysShow: true,
          name: '8bdc5038a6585fd2b5d3ef7b1e4bf4e1',
          meta: {
            sortNum: 1,
            roles: [],
            title: '用户管理',
            icon: 'user'
          }
        }
      ]
    },
    {
      path: 'menu-setting',
      component: MenuGroup,
      hidden: false,
      alwaysShow: true,
      name: '9fd0d16c3f454636a8b8f1444c1a3c93',
      meta: {
        sortNum: 1,
        roles: [],
        title: '菜单与资源',
        icon: 'menu-setting'
      },
      children: [
        {
          path: 'security',
          component: () => import('@/views/system-management/security/main'),
          hidden: false,
          alwaysShow: true,
          name: '7ff5ba3af6c2463296dd0eb5ecedb23c',
          meta: {
            sortNum: 1,
            roles: [],
            title: '资源管理',
            icon: 'security'
          }
        },
        {
          path: 'menu',
          component: () => import('@/views/system-management/menu/main'),
          hidden: false,
          alwaysShow: true,
          name: '3d2b85978d4c43edb9a7f7396b15d32f',
          meta: {
            sortNum: 1,
            roles: [],
            title: '菜单管理',
            icon: 'menu'
          }
        }
      ]
    },
    {
      path: 'role-group',
      component: MenuGroup,
      hidden: false,
      alwaysShow: true,
      name: 'd4a808c28d2c44159fb7cb47e6d524a5',
      meta: {
        sortNum: 1,
        roles: [],
        title: '角色与分组',
        icon: 'role-setting'
      },
      children: [
        {
          path: 'group',
          component: () => import('@/views/system-management/group/main'),
          query: {
            category: 2
          },
          hidden: false,
          alwaysShow: true,
          name: '81cb5f5db7d141f9bad227ab0c0bc5c9',
          meta: {
            sortNum: 1,
            roles: [],
            title: '角色分组',
            icon: 'group'
          }
        },
        {
          path: 'role',
          component: () => import('@/views/system-management/role/main'),
          hidden: false,
          alwaysShow: true,
          name: 'd2249f50a3235286b173663a6c45122d',
          meta: {
            sortNum: 1,
            roles: [],
            title: '角色管理',
            icon: 'user-role'
          }
        }
      ]
    },
    {
      path: 'dictionary-setting',
      component: MenuGroup,
      hidden: false,
      alwaysShow: true,
      name: 'da4c2695c36a50eab041735842b530e7',
      meta: {
        sortNum: 1,
        roles: [],
        title: '字典管理',
        icon: 'dictionary-setting'
      },
      children: [
        {
          path: 'dictionary-type',
          component: () => import('@/views/system-management/dictionary-type/main'),
          hidden: false,
          alwaysShow: true,
          name: 'd9fab44477ba5d2caf1aab1b95281713',
          meta: {
            sortNum: 1,
            roles: [],
            title: '字典分类',
            icon: 'dictionary-type'
          }
        },
        {
          path: 'dictionary-single',
          component: () => import('@/views/system-management/dictionary/singleMain'),
          hidden: false,
          alwaysShow: true,
          name: '22fc466264e65171a7631b2079a2b7f6',
          meta: {
            sortNum: 2,
            roles: [],
            title: '单级业务字典',
            icon: 'dictionary-single'
          }
        },
        {
          path: 'dictionary-multi',
          component: () => import('@/views/system-management/dictionary/multiMain'),
          hidden: false,
          alwaysShow: true,
          name: 'd9369152df124e1aae855f743d3eedc8',
          meta: {
            sortNum: 3,
            roles: [],
            title: '多级业务字典',
            icon: 'dictionary-multi'
          }
        }
      ]
    }
  ]
}

export default asyncRouter
