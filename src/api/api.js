import req from "./httpclient";
import $ from "jquery";
let baseURL = "http://sso1169sjdptest.haier.net/cn_test_inter/"

/**
 * demo query
 */
export function zisk_platform_list_demo(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "lqzzfx_platform_list",
            fresh: 1
        },
        params: obj
    });
}

/**
 * demo change
 */
export function rpt_design_report_basic_update_demo(obj) {
    return $.ajax({
        url: baseURL + '/common/executeChange',
        type: 'post',
        headers: {
            dataType: 'rpt_design_report_basic_update',
            fresh: 1,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(obj),
    })
}

function getQueryString(key) {
    var url = window.location.search;
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = url.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : "";
}

$.ajaxSetup({
    headers: {
        'X-Access-Token': getQueryString('token')
    }
});

/**
 * demo query
 */
export function rendhyjfk_rpt_pt(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "rendhyjfk_rpt_pt",
            fresh: 1
        },
        params: obj
    });
}


/**
 * demo query
 */
export function rendhyjfk_rpt_lianq(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "rendhyjfk_rpt_lianq",
            fresh: 1
        },
        params: obj
    });
}


/**
 * page2 请求数据 接口
 */
export function rendhyjfk_yinb_flag_mb_script(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "rendhyjfk_yinb_flag_mb_script",
            fresh: 1
        },
        params: obj
    });
}


/**
 * page4 请求数据 接口
 */
export function rendhyjfk_rpt_kaaosi_script(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "rendhyjfk_rpt_kaaosi_script",
            fresh: 1
        },
        params: obj
    });
}


/**
 * page5 请求数据 接口
 */
export function rendhyjfk_lq_copy_yangb_riq(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "rendhyjfk_lq_copy_yangb_riq",
            fresh: 1
        },
        params: obj
    });
}


/**
 * page6 请求数据 接口
 */
export function rendhyjfk_lq_copy_yangb_pt(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "rendhyjfk_lq_copy_yangb_pt",
            fresh: 1
        },
        params: obj
    });
}

/**
 * page7 请求数据 接口
 */
export function lqzzfx_market_valid_category_v2(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "lqzzfx_market_valid_category_v3",
            fresh: 1
        },
        params: obj
    });
}

/**
 * page8 请求数据 接口
 */
export function lqzzfx_market_valid_lianq_riq_script_v2(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "lqzzfx_market_valid_lianq_riq_script_v2",
            fresh: 1
        },
        params: obj
    });
}


/**
 * page10 请求数据 接口
 */
export function rendhyjfk_lq_copy_yangb_pt_v2(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "rendhyjfk_lq_copy_yangb_pt_v2",
            fresh: 1
        },
        params: obj
    });
}



/**
 * page11 请求数据 接口
 */
export function staff_grab_lianq_info_dblq_zf_person(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'staff_grab_lianq_info_dblq_zf_person',
            fresh: 1
        },
        params: obj
    });
}

/**
 * page11 请求平台
 */
export function lqzzfx_platform_list(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'lqzzfx_platform_list',
            fresh: 1
        },
        params: obj
    });
}

/**
 * page11 请求链群
 */
export function staff_grab_lianq_info_lianq_05(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'lqzzfx_lianq_list',
            fresh: 1
        },
        params: obj
    });
}


/**
 * page14 查询接口
 */
export function lqzzfx_ppt_cdddgx_lqzpx(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'lqzzfx_ppt_cdddgx_lqzpx',
            fresh: 1
        },
        params: obj
    });
}
/**
 * page15 查询接口
 */
export function lqzzfx_ppt_cdddgx_lqflpx(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'lqzzfx_ppt_cdddgx_lqflpx',
            fresh: 1
        },
        params: obj
    });
}

/**
 * page18 查询接口
 */
export function jings_ylmb_fenlqd_riq_v2(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'jings_ylmb_fenlqd_riq_v2',
            fresh: 1
        },
        params: obj
    });
}



/**
 * page20 查询接口
 */
export function shicjzl_lq_fenl(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'shicjzl_lq_fenl',
            fresh: 1
        },
        params: obj
    });
}

/**
 * page21 查询接口
 */
export function shicjzl_lq_riq(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'shicjzl_lq_riq',
            fresh: 1
        },
        params: obj
    });
}


/**
 * page22 查询区域地图 投诉数量
 */
export function cdy_yhtypj_map_gm(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_map_gm',
            fresh: 1
        },
        params: obj
    });
}

/**
 * page22 查询底部表格
 */
export function cdy_yhtypj_detail_ts(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_detail_ts',
            fresh: 1
        },
        params: obj
    });
}

/**
 * page22 查询底部表格
 */
export function cdy_yhtypj_detail_pi(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_detail_pi',
            fresh: 1
        },
        params: obj
    });
}

/**
 * page22 查询创单节点
 */
export function cdy_yhtypj_node(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_node',
            fresh: 1
        },
        params: obj
    });
}


/**
 * page22 查询顶部数量
 */
export function cdy_yhtypj_sqm_no_num(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_sqm_no_num',
            fresh: 1
        },
        params: obj
    });
}


/**
 * page22 查询答复率
 */
export function cdy_yhtypj_response_rate(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_response_rate',
            fresh: 1
        },
        params: obj
    });
}


/**
 * page22 闭环率
 */
export function cdy_yhtypj_closed_loop_rate(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_closed_loop_rate',
            fresh: 1
        },
        params: obj
    });
}


/**
 * page24 查询条件 - 创单节点列表
 */
export function cdy_yhtypj_search_list_node(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_search_list_node',
            fresh: 1
        },
        params: obj
    });
}

/**
 * page24 查询条件 - 体验节点列表
 */
export function cdy_yhtypj_search_list_quyu(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_search_list_quyu',
            fresh: 1
        },
        params: obj
    });
}


/**
 * page24 查询条件 - 工单类型列表
 */
export function cdy_yhtypj_search_list_gd_type(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_search_list_gd_type',
            fresh: 1
        },
        params: obj
    });
}


/**
 * page24 查询条件 - 工单问题大类列表
 */
export function cdy_yhtypj_search_list_ques_type(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_search_list_ques_type',
            fresh: 1
        },
        params: obj
    });
}


/**
 * page24 查询条件 - 工单状态列表
 */
export function cdy_yhtypj_search_list_gd_status(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'cdy_yhtypj_search_list_gd_status',
            fresh: 1
        },
        params: obj
    });
}



/**
 * page26 查询接口
 */
export function shicjzl_wl_xw_riq(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: 'shicjzl_wl_xw_riq',
            fresh: 1
        },
        params: obj
    });
}


/**
 *  page27 查询
 */
export function wl_paiding_cjst_riq(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "wl_paiding_cjst_riq",
            fresh: 1
        },
        params: obj
    });
}


/**
 *  page28 查询 日清表格
 */
export function hangyz_dp_pingj(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "hangyz_dp_pingj",
            fresh: 1
        },
        params: obj
    });
}


/**
 *  page31 查询 日清表格
 */
export function wl_sub_cj_riq(obj) {
    return req({
        url: "common/executeQuery",
        method: "post",
        headers: {
            dataType: "wl_sub_cj_riq",
            fresh: 1
        },
        params: obj
    });
}