/*!
 Copyright (c) 2017 96qbhy.
 Licensed under the MIT License (MIT)
 */
/* global define */

(function () {
    'use strict';

    var axios = window.axios || require('axios');

    function uploadImg(file) {
        var data = new FormData();
        data.append('smfile', file);
        data.append('ssl', true);
        return axios.post('https://sm.ms/api/upload', data).then(data => data.data);
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = uploadImg;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'uploadImg', consistent with npm package name
        define('uploadImg', [], function () {
            return uploadImg;
        });
    } else {
        window.uploadImg = uploadImg;
    }
}());
