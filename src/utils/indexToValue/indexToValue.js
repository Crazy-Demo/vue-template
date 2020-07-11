/*
 * @Author: your name
 * @Date: 2020-07-09 10:36:00
 * @LastEditTime: 2020-07-10 14:09:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pro03/src/utils/indexToValue/indexToValue.js
 */
'use strict'

/**
 * @description: index转换成value字符串
 * @param String indexStr:传入的字符串 ‘0，1，2，3...’
 * @param Array arr:需要转换的value数组['文字1','文字2']
 * @param String Delimiter:分隔符 ‘/’
 * @return: String 返回拼接好的字符串 文字1/文字2
 */
const indexToValue = (indexStr, arr, Delimiter) => {
  let str = ''
  indexStr.split(',').forEach(element => {
    str += `${arr[element]}${Delimiter}`
  })
  str = str.slice(0, -1)
  return str
}

/**
 * @description: 查找对于的数组的index
 * @param Array arr:需要查找的数组
 * @param Array object:目标数组
 * @param String key:关键词，ObjectArr元素中的通过哪个属性
 * @return: returnArr返回转换后的index数组
 */
const findIndexs = (arr, objectArr, key) => {
  if (!isType(objectArr[0], 'Object')) {
    throw new Error('传入的数组必须是元素必须是对象')
  }
  if (!(Reflect.has(objectArr[0], key))) {
    throw new Error(`数组元素中不存在${key}`)
  }
  const returnArr = []
  arr.forEach(item => {
    const index = objectArr.findIndex(el => el[key] === item)
    returnArr.push(index)
  })
  return returnArr
}

/**
 * @description: 通过index查找对于的value值
 * @param String str:传入的index拼接字符串
 * @param Array object:目标数组
 * @param key key:关键词，ObjectArr元素中的通过哪个属性
 * @return: 对于的value数组
 */
const findValues = (str, objectArr, key) => {
  if (!isType(objectArr[0], 'Object')) {
    throw new Error('传入的数组必须是元素必须是对象')
  }
  if (!(Reflect.has(objectArr[0], key))) {
    throw new Error(`数组元素中不存在${key}`)
  }
  const returnArr = []
  str.split(',').forEach(item => {
    const value = objectArr.find((el, index) => {
      if (index === parseInt(item)) return el
    })
    returnArr.push(value[key])
  })
  return returnArr
}

/**
 * @description: 数组去重复
 * @param Array array:需要的去重的数组
 * @return: pre 去重后数组
 */
const removeDuplicates = array => {
  return array.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
      return pre.concat(cur)
    } else {
      return pre
    }
  }, [])
}

/**
 * @description: 判断是否是指定对象类型
 * @param any value:传入的值
 * @param any targetTpye:类型
 * @return: true/false
 */
function isType (value, targetTpye) {
  return Object.prototype.toString.call(value) === `[object ${targetTpye}]`
}

export {
  indexToValue,
  findValues,
  findIndexs,
  removeDuplicates,
  isType
}
