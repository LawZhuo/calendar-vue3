export default {
    // 根据路由名称变更标题
    setHeaderTitle(state, routerName) {
        switch(routerName) {
            case 'day':
                state.headerTitle = '当天信息';
                break;
            case 'month':
                state.headerTitle = '近期信息';
                break;
            case 'year':
                state.headerTitle = '当年信息';
                break;
            default:
                state.headerTitle = '当天信息';
        }
    },
    //根据路由名称变更搜索框提示内容规则
    setPlaceholder(state, routerName) {
        const date = new Date();
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        switch(routerName) {
            case 'day':
                state.placeholder = `格式: ${year}${month}${day} (${year}年${month}月${day}日)`;
                break;
            case 'month':
                state.placeholder = `格式: ${year}${month} (${year}年${month}月)`;
                break;
            case 'year':
                state.placeholder = `格式: ${year} (${year}年)`;
                break;
            default:
                state.placeholder = `格式: ${year}${month}${day} (${year}年${month}月${day}日)`;
        }
    },
    //根据路由名称变更搜索框规定的长度规则
    setMaxLength(state, routerName) {
        switch(routerName) {
            case 'day':
                state.maxLength = 8;
                break;
            case 'month':
                state.maxLength = 6;
                break;
            case 'year':
                state.maxLength = 4;
                break;
            default:
                state.maxLength = 8
        }
    },
    // 根据路由名称变更搜索框对应的路由界面
    setField(state, routerName) {
        state.field = routerName;
    },
    //修改错误码
    setErrorCode(state, errorCode) {
        state.errorCode = errorCode
    },
    setData(state, payload) {
        const { field, data } = payload;

        switch(field) {
            case 'day':
                state.dayData = data;
                break;
            case 'month': 
                state.monthData = data;
                break;
            case 'year':
                state.yearData = data;
                break;
        }
    }
}