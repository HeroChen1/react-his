import React, { useEffect, useState } from 'react'
import logo from '@/assets/imgs/LOGO.jpg'
import '@/LeftNav/LeftNav.scss'
import { menu } from '@/Menu/Menu'
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNavName } from '@/store/moudle/moudle';
import { https } from '@/api/Http/https';

export default function LeftNav() {
    //定义键
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label
        };
    }

    //存用户信息
    const [users, setUsers] = useState([])
    //存角色信息
    const [roles, setRoles] = useState([])
    //读取状态
    const { username } = useSelector(state => state.userReducer)
    //调用user列表
    useEffect(() => {
        https.get('/manage/user/list')
            .then((res) => {
                setUsers(res.data.data.users)
                setRoles(res.data.data.roles)
            })
    }, [])
    // console.log(users, roles);
    //判断是否有权限
    const isRoot = (menuItem) => {
        if (username === 'admin') return true
        const myUser = users.filter(o => username === o.username)
        if (myUser.length != 0) {
            const myRole = roles.filter(o => myUser[0].role_id == o._id)
            if (menuItem.children) {
                const list = menuItem.children.find(e => myRole[0].menus.indexOf(e.key) !== -1)
                if (list) return true
                return false
            } else if (myRole[0].menus.indexOf(menuItem.key) !== -1) {
                return true
            }
            return false
        }
        return false
    }
    //渲染列表
    const itemList = (items) => {
        return items.map(e => {
            if (isRoot(e)) {
                if (e.children) {
                    return getItem(e.label, e.key, e.icon, itemList(e.children))
                } else {
                    return getItem(<Link to={e.key} key={e.key} onClick={() => recordNav(e)}>{e.label}</Link>, e.key, e.icon)
                }
            }
        })
    }
    //调用dispatch钩子，配置action方法
    const dispatch = useDispatch()
    const recordNav = (e) => {
        dispatch(setNavName(e.label))
    }
    //获取当前页面的path
    const { pathname } = useLocation()
    //记忆二级导航
    const getPathName = (pathname) => {
        const item = menu.find(e => e.children && e.children.find(o => o.key === pathname))
        return item ? item.key : ''
    }
    return (
        <div className='leftNav'>
            <div className='header'>
                <img src={logo} alt='' />
                <span>医院管理</span>
            </div>
            <div className='nav'>
                <div>
                    <Menu
                        defaultSelectedKeys={[pathname === '/admin' ? '/admin/home' : pathname]}
                        defaultOpenKeys={[getPathName(pathname)]}
                        mode="inline"
                        theme="dark"
                        items={itemList(menu)}
                    />
                </div>
            </div>
        </div>
    )
}
