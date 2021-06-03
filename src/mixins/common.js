// import FileSaver from "file-saver";
// import XLSX from "xlsx";


export const commonMixin = {
    methods: {
        parseTime(time, cFormat) {
            if (arguments.length === 0) {
                return null
            }
            const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
            let date
            if (typeof time === 'object') {
                date = time
            } else {
                if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
                    time = parseInt(time)
                }
                if ((typeof time === 'number') && (time.toString().length === 10)) {
                    time = time * 1000
                }
                date = new Date(time)
            }
            const formatObj = {
                y: date.getFullYear(),
                m: date.getMonth() + 1,
                d: date.getDate(),
                h: date.getHours(),
                i: date.getMinutes(),
                s: date.getSeconds(),
                a: date.getDay()
            }
            const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
                const value = formatObj[key]
                // Note: getDay() returns 0 on Sunday
                if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
                return value.toString().padStart(2, '0')
            })
            return time_str
        },
        getUserCode() {
            // let uc = ''
            // if (parent.parent.getUser) {
            //     uc = parent.parent.getUser().code
            //     return uc
            // }
            function getQueryString(key) {
                var url = window.location.search;
                var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
                var result = url.substr(1).match(reg);
                return result ? decodeURIComponent(result[2]) : "";
            }
            var userCode = "";

            if (window.location.search) {
                userCode = getQueryString("usercode");
            } else {
                userCode = this.$route.query.usercode;
            }
            return userCode
        },
        getQueryString(key) {
            var url = window.location.search;
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
            var result = url.substr(1).match(reg);
            return result ? decodeURIComponent(result[2]) : "";
        },
        hback() {
            this.$router.back();
        },
        gotoPage(path, params, query) {
            if (this.$route.path != path) {
                this.$router.push({ path, params, query })
            }
        },
        exportExcel(id, name) {
            // var tableDom = document.querySelector(id).cloneNode(true);
            // // tableDom.querySelector('.el-table__fixed').remove()
            // //  .table要导出的是哪一个表格
            // var wb = XLSX.utils.table_to_book(tableDom, { raw: true });
            // /* get binary string as output */
            // var wbout = XLSX.write(wb, {
            //     bookType: "xlsx",
            //     bookSST: true,
            //     type: "array"
            // });
            // try {
            //     FileSaver.saveAs(
            //         new Blob([wbout], { type: "application/octet-stream" }),
            //         name + ".xlsx"
            //     );
            // } catch (e) {
            //     this.$alert(e.toString(), '导出失败')
            // }
            // return wbout;
        },
    }

}