/*
 * @Description: Cookie操作封装
 * @Author: 
 * @LastEditors: 
 */
import Cookies from "js-cookie";

// 写入cookie
// Cookies.set('name', 'value' , { expires: 17 , path: ''  })  // expires单位天  若value是对象，则需要解析 JSON.parse( Cookie.get('userInfo') )
// 读取
// Cookies.get('name')
// 读取所有可见的cookie
// Cookies.get()
// 删除某项cookie值
// Cookies.remove('name')

// 7天所对应的秒数
const SEVEN_DAYS_SECOND = 7 * 24 * 60 * 60 

/**
 * @description:  获取cookies
 * @param {*} key 不传为获取全部
 * @param {*} isJson  是否获取解析后的对象
 * @return {*}
 */
export function getCookies (key, isJson) {
  if(!key){
    return Cookies.get()    // 虽然能获取但是有点小奇怪
  } else {
    // JSON.parse 不能解析undefined 和 空字符串
    return isJson ? (Cookies.get(key) && JSON.parse(Cookies.get(key))) : Cookies.get(key)
  } 
}

/**
 * @description: 设置Cookies
 * @param {*} key
 * @param {*} value
 * @param {*} expiresTime  过期秒数
 * @param {*} isObject  是否是对象，若是对象则序列化
 * @return {*}
 */ 
export function setCookies (key, value, expiresTime = SEVEN_DAYS_SECOND, isObject = false) {
  let seconds = expiresTime || 0
  let expires = new Date(new Date().getTime() + seconds * 1000)   // expires要么传天数，要么传一个date对象
  let newValue = isObject ? JSON.stringify(value) : value
  return Cookies.set(key, newValue, { expires: expires })  // 有个小细节，谷歌浏览器的cookie时间要+8小时才是北京时间，因为时区不一样
}

 /**
  * @description:   移除Cookies
  * @param {*} key
  * @return {*}
  */
export function removeCookies (key) {
  return Cookies.remove(key)
}