function getCurrentDate() {
    return new Date();
}

function getYear(date) {
    return date.getFullYear();
}

function getMonth(date) {
    const mes = new Date(Date.parse(date)).getMonth() + 1;
    return mes;
}

function getDayOfMonth(date) {
    const dia = new Date(Date.parse(date)).getDate();
    return dia;
}

function changeYear(date, year) {
    //Algoritmo de cambio sin tener en cuenta años BISIESTOS;
    //const annoFechaIni = new Date(Date.parse(date)).getFullYear();
    //const difMilis = (year - annoFechaIni) *365*24*60*60*1000;
    //return new Date(Date.parse(date) + difMilis).toLocaleString();
    return new Date(date).setFullYear(year);
}

function addDays(date, days) {
    const dias = days*24*60*60*1000;
    const diasAnnadidos = new Date(Date.parse(date)+dias).toLocaleString();
    return diasAnnadidos;   
}

function getDayOfWeek(date) {
    return date.getDay();
}

function formatDate(date) { 
    return new Date(Date.parse(date)).toLocaleDateString();
}

function isBefore(date1, date2) {
    const milisFecha1 = Date.parse(date1);
    const milisFecha2 = Date.parse(date2);
    if (milisFecha1 < milisFecha2){
        return true;
    }
    return false;
}

function isAfter(date1, date2) {
    const milisFecha1 = Date.parse(date1);
    const milisFecha2 = Date.parse(date2);
    if (milisFecha1 > milisFecha2){
        return true;
    }
    return false;
}

module.exports = {
    getCurrentDate,
    getYear,
    getMonth,
    getDayOfMonth,
    changeYear,
    addDays,
    getDayOfWeek,
    formatDate,
    isBefore,
    isAfter
};
3