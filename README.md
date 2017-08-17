一个程序员一路走来的成长经历
===
<br>
这是仓库记录了我的读数笔记和学习经历。

### 方法库

```js
var utils = {
    listToArray: function(likeArray){
    // 类数组转换为数组
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeArray);
        } catch (e) {
            for (var i = 0; i < likeArray.length; i++) {
                ary[ary.length] = likeArray[i];     
            }
        }
        return ary;
    },
    jsonParse = function (str) {
    // JSON格式的字符串转为为JSON格式的对象
        return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")")
    }
}
```
