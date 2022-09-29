import { createSlice } from '@reduxjs/toolkit'

//定义初始状态
const initialState = {
    username: '',
    navName: '首页',
    roleId: '',
    menus: [],
    statu: '',
    _id: '',
    productData: {},
    parentName: '',
    sonName: ''
}
const slice = createSlice({
    //type前缀
    name: 'name',
    initialState,
    //配置reducers
    reducers: {
        setUser(state, action) {
            state.username = action.payload
        },
        setNavName(state, action) {
            state.navName = action.payload
        },
        setRoleId(state, action) {
            state.roleId = action.payload

        },
        setMenus(state, action) {
            state.menus = action.payload
            console.log(state.action);
        },
        //控制商品添加或更新
        setStatu(state, action) {
            state.statu = action.payload
        },
        //存商品_id
        setId(state, action) {
            state._id = action.payload
        },
        //存每项商品数据
        setProductData(state, action) {
            state.productData = action.payload
        },
        //存父级名字
        setParentName(state, action) {
            state.parentName = action.payload
        },
        //存子级名字
        setSonName(state, action) {
            state.sonName = action.payload
        }
    }
})

//导出action的方法
export const { setUser, setNavName, setRoleId, setMenus, setStatu, setId, setProductData, setParentName, setSonName } = slice.actions

//导出reducer
export const userReducer = slice.reducer
