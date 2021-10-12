//封装业务的请求

// 调用axios请求方式
import { axiosPost } from "../libs/http";

//获取当天的数据
const getDayData = date => {
    return new Promise((resolve, reject) => {
        //调用axiosPost发起请求
        axiosPost({
            url: '/api/calendar/day',
            data: {
                date: date
            },
            success: function(data) {
                resolve(data)
            },
            error: function(err) {
                reject(err)
            }
        })
    })
};

//获取近期假期的数据
const getMonthData = yearMonth => {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: '/api/calendar/month',
            data: {
                'year-month': yearMonth
            },
            success: function(data) {
                resolve(data)
            },
            error: function(err) {
                reject(err)
            }
        })
    })
};

//获取当年假期列表
const getYearData = year => {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: '/api/calendar/year',
            data: {
                year
            },
            success: function(data) {
                resolve(data)
            },
            error: function(err) {
                reject(err)
            }
        })
    })
};

export {
    getDayData,
    getMonthData,
    getYearData
}