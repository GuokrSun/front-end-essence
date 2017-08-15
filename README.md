一个程序员一路走来的成长经历
===
<br>
这是仓库记录了我的读数笔记和学习经历。

### 方法库

```js
var utils = {
    listToArray: function(likeArray){
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeArray);
        } catch (e) {
            for (var i = 0; i < likeArray.length; i++) {
                ary[ary.length] = likeArray[i];     
            }
        }
        return ary;
    }
}
```
