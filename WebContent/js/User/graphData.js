$ = (id) => document.getElementById(id);

calcData = (fecha, id) => {
    let date = parseInt(fecha);
    return new Promise((res, rej) => {
        switch (id) {
            case 1:
                res(getMonth(date, btc));
                break;
            case 2:
                // statements_2
                res(getMonth(date, ltc));
                break;
            case 3:
                // statements_3)
                res(getMonth(date,btc));
                break;
        }
    }).catch((error) => {
        console.log(error)
        rej(error);
    });
};

const mixed = async (date) => {
    await getMonth(date, ltc);
    await getMonth(date, btc);
}

getMonth = (data, pack) => {
    month1 = '';
    // "May 5, 2018 15:37:25"
    let date = new Date();
    let real = date.getMonth() + 2;

    switch (data) {
        case 1:
            month1 = 'Jan';
            pack(getMonths(month1, real))
            return month1;
            break;

        case 2:
            month1 = 'Feb'
            pack(getMonths(month1, real))
            return month1;
            break;

        case 3:
            month1 = 'Mar';
            pack(getMonths(month1, real))
            return month1;
            break;

        case 4:
            month1 = 'Apr';
            pack(getMonths(month1, real))
            return month1;
            break;

        case 5:
            month1 = 'May';
            pack(getMonths(month1, real))
            return month1;
            break;

        case 6:
            month1 = 'June';
            pack(getMonths(month1, real))
            return month1;
            break;

        case 7:
            month1 = 'July';
            pack(getMonths(month1, real))
            return month1;
            break;

        case 8:
            month1 = 'Ag';
            pack(getMonths(month1, real))
            return month1;
            break;

        case 9:
            month1 = 'Sept';
            pack(getMonths(month1, real))
            return month1;
            break;

        case 10:
            month1 = 'Oct';
            pack(getMonths(month1, real))
            return month1;
            break;

        case 11:
            month1 = 'Nov'
            pack(getMonths(month1, real))
            return month1;
            break;

        case 12:
            month1 = 'Dec'
            pack(getMonths(month1, real))
            return month1;
            break;
    }
}

getMonths = (data, date) => {
    months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    /*	console.log(data)
    	console.log(date)*/
    var m = '';
    switch (data) {
        case 'Jan':
            m = months.slice(0, date);
            return m;
            break;

        case 'Feb':
            m = months.slice(1, date);
            return m;

        case 'Mar':
            m = months.slice(2, date);
            return m;

        case 'Apr':
            m = months.slice(3, date);
            return m;
            break;

        case 'May':
            m = months.slice(4, date);
            return m;
            break;

        case 'June':
            m = months.slice(5, date);
            return m;
            break;

        case 'July':
            m = months.slice(6, date);
            return m;
            break;

        case 'Ag':
            m = months.slice(7, date);
            return m;
            break;

        case 'Sept':
            m = months.slice(8, date);
            return m;
            break;

        case 'Oct':
            m = months.slice(9, date);
            return m;
            break;

        case 'Nov':
            m = months.slice(10, date);
            return m;
            break;

        case 'Dec':
            m = months.slice(11, date);
            return m;
            break;
    }
}