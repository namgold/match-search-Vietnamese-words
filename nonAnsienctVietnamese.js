function nonAccentVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    return str;
}

function removeAccentHatVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/â|ă/g, "a");
    str = str.replace(/à|ầ|ằ/g, "à");
    str = str.replace(/á|ấ|ắ/g, "á");
    str = str.replace(/ả|ẩ|ẳ/g, "ả");
    str = str.replace(/ã|ẫ|ẵ/g, "ã");
    str = str.replace(/ạ|ậ|ặ/g, "ạ");
    str = str.replace(/ê/g, "e");
    str = str.replace(/è|ề/g, "è");
    str = str.replace(/é|ế/g, "é");
    str = str.replace(/ẻ|ể/g, "ẻ");
    str = str.replace(/ẽ|ễ/g, "ẽ");
    str = str.replace(/ẹ|ệ/g, "ẹ");
    str = str.replace(/ô|ơ/g, "o");
    str = str.replace(/ò|ồ|ờ/g, "ò");
    str = str.replace(/ó|ố|ớ/g, "ó");
    str = str.replace(/ỏ|ổ|ở/g, "ỏ");
    str = str.replace(/õ|ỗ|ỗ/g, "õ");
    str = str.replace(/ọ|ộ|ợ/g, "ọ");
    str = str.replace(/ư/g, "u");
    str = str.replace(/ù|ừ/g, "ù");
    str = str.replace(/ú|ứ/g, "ú");
    str = str.replace(/ủ|ử/g, "ủ");
    str = str.replace(/ũ|ữ/g, "ũ");
    str = str.replace(/ụ|ự/g, "ụ");
    str = str.replace(/đ/g, "d");
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    return str;
}

function removeAccentMarksVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ả|ã|ạ/g, "a");
    str = str.replace(/ằ|ắ|ẳ|ẵ|ặ/g, "ă");
    str = str.replace(/ầ|ấ|ẩ|ẫ|ậ/g, "â");
    str = str.replace(/è|é|ẻ|ẽ|ẹ/g, "e");
    str = str.replace(/ề|ế|ể|ễ|ệ/g, "ê");
    str = str.replace(/ì|í|ỉ|ĩ|ị/g, "i");
    str = str.replace(/ò|ó|ỏ|õ|ọ/g, "o");
    str = str.replace(/ờ|ớ|ở|ỡ|ợ/g, "ơ");
    str = str.replace(/ồ|ố|ổ|ỗ|ộ/g, "ô");
    str = str.replace(/ù|ú|ủ|ũ|ụ/g, "u");
    str = str.replace(/ừ|ứ|ử|ữ|ự/g, "ư");
    str = str.replace(/ỳ|ý|ỷ|ỹ|ỵ/g, "y");
    str = str.replace(/\u0300|\u0301|\u0309|\u0303|\u0323/g, "");
    return str;
}

function compareSearch(item, searchValue) {
    item = item.toLowerCase();
    searchValue = searchValue.toLowerCase();
    if (item.includes(searchValue)) return true;
    if (!nonAccentVietnamese(item).includes(nonAccentVietnamese(searchValue))) return false;
    if (nonAccentVietnamese(item).includes(searchValue)) return true;
    if (removeAccentMarksVietnamese(item).includes(searchValue)) return true;
    if (removeAccentHatVietnamese(item).includes(searchValue)) return true;
    return false;
}

(function test() {
    var errCount = 0;
    testSuite().forEach(i => i[1].forEach(j => {
        if (compareSearch(i[0], j) != i[2])
        console.log(++errCount, "Fail testcase:", i[0], j, i[2], "Output:", compareSearch(i[0], j));
    }));
    console.log("Done");
})();

function testSuite() {
    return [
        ['a', ['a'], true],
        ['a', ['ă', 'â', 'á', 'ắ', 'ấ', 'ạ', 'ậ', 'ặ', 'ẵ', 'e', 'd', 'an'], false],

        ['an', ['a', 'an'], true],
        ['an', ['ă', 'â', 'á', 'ắ', 'ấ', 'ạ', 'ậ', 'ặ', 'ẵ', 'e', 'd'], false],

        ['ă', ['a', 'ă'], true],
        ['ă', ['á', 'â', 'ắ', 'ấ', 'ăn', 'cơm', 'hihi', 'nhìn làm gì ai cho mà nhìn'], false],

        ['á', ['a', 'á'], true],
        ['á', ['ă', 'ắ', 'â', 'ấ', 'ạ', 'ã', 'à', 'ả', 'ẳ', 'ẳng', 'ẵ', 'hẵng', 'đá'], false],

        ['ắ', ['a', 'ă', 'á', 'ắ'], true],
        ['ắ', ['â', 'đá', 'ấ', 'ạ', 'ã', 'à', 'ả', 'ẳ', 'ẳng', 'ẵ', 'hẵng', 'tất nhiên là cái này cũng false rồi', 'đắng'], false],

        ['d', ['d'], true],
        ['d', ['dd', 'đ', 'g', 'e', 'a', 'á', 'ă'], false],

        ['đ', ['d', 'đ'], true],
        ['đ', ['dd', 'g', 'e', 'a', 'á', 'ă'], false],

        ['hihi', ['ih', 'hi', 'hih', 'ihi'], true],

        ['e', ['e'], true],
        ['e', ['ee', 'ê', 'a', 'â', 'c'], false],

        ['ê', ['ê', 'e'], true],

        ['ee', ['ee', 'e'], true],
        ['Cấp quản lý đề tài', ['câ', 'c', 'ca', 'cấ', 'â', 'ấ', 'ấp', 'cấp'], true],
    ]
}

function testSuiteReverse() {
    a = {}
    testSuite().forEach(i => {
        i[1].forEach(j => {
            if (!a[j])
                a[j] = [[], []];
            a[j][i[2]?1:0].push(i[0]);
        })})
    b = []
    Object.keys(a).forEach(i =>
        a[i][1].length !== 0 ? b.push([i, a[i][1]]) : null);
        //a[i].forEach((j, index) => j.length !== 0 ? b.push([i, j, !!index]) : null));
    return b;
}
// testSuiteReverse().forEach(i => console.log(i[0],'\t=>',i[1]));