//工具箱

// 获取tab栏图标的日期
function getIconDate(field) {
    const date = new Date();
    switch(field) {
        case 'day':
            return date.getDate().toString().padStart(2, '0');
        case 'month':
            return (date.getMonth() + 1).toString().padStart(2, '0');
        case 'year':
            return date.getFullYear().toString().substr(2)
    }
}

//获取当前的日期
function getNowDate(field) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    switch(field) {
        case 'day':
            return `${year}-${month}-${day}`;
        case 'month':
            return `${year}-${month}`;
        case 'year':
            return `${year}`
    }
}

//格式化日期为中文格式
function formatChsDate(date, field) {
    const arr = date.split('-');
    switch(field) {
        case 'day':
            return `${arr[0]}年${arr[1]}月${arr[2]}日`;
        case 'month':
            return `${arr[0]}年${arr[1]}月`;
        case 'year':
            return `${arr[0]}年`
    }
}

//格式化用户输入的日期
function formatUserDate(date, field) {
    switch(date.length) {
        case 8:
            let year = date.substr(0, 4);
            let month = Number(date.substr(4, 2));
            let day = Number(date.substr(6, 2));
            return `${year}-${month}-${day}`;
        case 6:
            year = date.substr(0, 4);
            month = Number(date.substr(4, 2));
            return `${year}-${month}`;
        case 4:
            return date
    } 
}

export {
    getIconDate,
    getNowDate,
    formatChsDate,
    formatUserDate
}