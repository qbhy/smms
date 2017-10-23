# upload-img
[sm.ms](https://sm.ms) 图床上传插件

## 安装
```bash
npm install upload-img
```

## 使用
```javascript
// es6 
// import uploadImg from 'upload-img';
// require
const uploadImg = require('upload-img');
// file 应为 input[type=file] 拿到的 fileList 中的其中一个文件
uploadImg(file).then(data=>{
    // todo
});

// 在 jquery 中使用的例子
// html:  <input type="file" id="input">
const input = $('#input');

input.on('change', function (e) {
    if(e.target.files.length > 0){
        uploadImage(e.target.files[0]).then(data => {
            console.log(data);
        });
    }
});
```

## 返回数据说明
<table class="table table-bordered table-striped js-options-table">
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>示例值</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>code</td>
            <td>String</td>
            <td>success</td>
            <td>上传文件状态。正常情况为 <code>success</code>。出现错误时为 <code>error</code></td>
        </tr>
        <tr>
            <td>filename</td>
            <td>String</td>
            <td>smms.jpg</td>
            <td>上传文件时所用的文件名</td>
        </tr>
        <tr>
            <td>storename</td>
            <td>String</td>
            <td>561cc4e3631b1.png</td>
            <td>上传后的文件名</td>
        </tr>
        <tr>
            <td>size</td>
            <td>Int</td>
            <td>187851</td>
            <td>文件大小</td>
        </tr>
        <tr>
            <td>width</td>
            <td>Int</td>
            <td>1157</td>
            <td>图片的宽度</td>
        </tr>
        <tr>
            <td>height</td>
            <td>Int</td>
            <td>680</td>
            <td>图片的高度</td>
        </tr>
        <tr>
            <td>hash</td>
            <td>String</td>
            <td>nLbCw63NheaiJp1</td>
            <td>随机字符串，用于删除文件</td>
        </tr>
        <tr>
            <td>delete</td>
            <td>String</td>
            <td>https://sm.ms/api/delete/nLbCw63NheaiJp1</td>
            <td>删除上传的图片文件专有链接</td>
        </tr>
        <tr>
            <td>url</td>
            <td>String</td>
            <td>https://ooo.0o0.ooo/2015/10/13/561cfc3282a13.png</td>
            <td>图片服务器地址</td>
        </tr>
        <tr>
            <td>path</td>
            <td>String</td>
            <td>/2015/10/13/561cfc3282a13.png</td>
            <td>图片的相对地址</td>
        </tr>
        <tr>
            <td>msg</td>
            <td>String</td>
            <td>No files were uploaded.</td>
            <td>上传图片出错时将会出现</td>
        </tr>
    </tbody>
</table>

