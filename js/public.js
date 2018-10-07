/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-26 10:43:44
 * @version $Id$
 */


//兼容ie7,8的trim方法
String.prototype.trim=function(){
    // this   要去除空格的字符串
    var _thisstr =this;
    var space=' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
        // 去除一种类型的空格
        function innerTrim(str,space){
            var lw=0,rw=str.length-1;
            while(str.charAt(lw)==space){
                lw++;
            };
            while(str.charAt(rw)==space){
                rw--;
            };
            return str.substring(lw,rw+1);
        };
        for(var i=0;i<space.length;i++){     // i<=space.length-1
            _thisstr = innerTrim(_thisstr,space.charAt(i));
        };
        return _thisstr;
}
   


//  将两个对象赋值给一个新的对象  重复的属性执行第二个对象里面的属性   
function extend(obj1,obj2){
    var obj3={};
    for(var key in obj1){   
        obj3[key]=obj1[key];
    };
    for(var key in obj2){
        obj3[key]=obj2[key];
    };
    return obj3;
};



//   将两个对象赋值给一个新的对象   重复的属性执行第一个对象里面的属性
function extend1(o1,o2){           
    var obj3={};
    for(var key in o1){
        obj3[key]=o1[key];
    };
    for(var key in o2){
    if(key in obj3){
        continue;
    };
    obj3[key]=o2[key];
    };
    return obj3;
};



//   数组（arr）中兼容到ie78的indexOf() 和 lastIndexOf() 的方法

Array.prototype.indexOf=function(ele){
    for(var i=0;i<this.length;i++){
        if(this[i]==ele){
            return i;
        }
    }
    return -1;
}
Array.prototype.lastIndexOf = function(ele){
    for(var i=this.length-1;i>=0;i--){
        if(this[i]==ele){
            return i;
        }
    }
    return -1;
}


//   //获取元素的最终样式的兼容方案

function getStyle(ele,attr){
    if(ele.currentStyle){    
       return ele.currentStyle[attr];
    }else{
       return window.getComputedStyle(ele,null)[attr];
    }
}


// =============================================================================
// 方便查找元素节点
//获取第一个元素节点    
function getFirstChild(para){
    var i=0,result=null;
    while(para.children[i].nodeType!=1 && i<para.children.length){
            i++;
    }
    if(i<para.children.length){
        return para.children[i];
    }
    return result;
}

//获取最后一个元素节点
function  getLastChild(para){
    var i=para.children.length-1,result = null;
    while(para.children[i].nodeType!=1 &&i>=0){
            i--;
    }
    if(i==-1){
            return result;
    }else{
        return para.children[i];
    }
    
}
//获取父元素中所有的子元素节点
//相当于children
//子元素中有注释节点话用下面方法，没有用children
function  getChildElements(ele){   
    var childArr=ele.children,childArrTem=new Array();  //  临时数组，用来存储符合条件的节点  
  
    for(var i=0,len=childArr.length;i<len;i++){        
         if(childArr[i].nodeType==1){            
                childArrTem.push(childArr[i]);  // push() 方法将节点添加到数组尾部        
         }    
    }    

    return childArrTem;
}  

//查找下一个元素兄弟节点
function nextElement(ele){
    var next = ele.nextSibling;
    while(next && next.nodeType!=1){
        next= next.nextSibling;
    }
    return next;
}
//查找上一个元素兄弟节点
function previousElement(ele){
    var pre = ele.previousSibling;
    while(pre && pre.nodeType != 1){
        pre = pre.previousSibling;
    }
    return pre;
}
//找离当前元素最近的具有某个类名的父元素
function getClosestParent(ele,clsName){
    var par = ele.parentNode;
    while(par && par.className.indexOf(clsName)==-1){
        par = par.parentNode;
    }
    return par;
}


//注册事件的兼容方案，兼容到ie78,并且解决this不一致的情况
// function addEvent(dom,type,handler){
//     if(dom.addEventListener){
//         dom.addEventListener(type,handler);
//     }else{
//         dom.attachEvent("on"+type,function(){
//             handler.call(dom);
//         });
//     }
// }

//添加和移除事件的兼容方案，兼容到ie7,8
function addEvent(dom,type,handler){
    if(dom.addEventListener){
        dom.addEventListener(type,handler);
    }else{
        // 通过window对象提升变量的作用域
        window[handler] = function(){
            handler.call(dom);
        };
        dom.attachEvent("on"+type,window[handler]);
    }
}
//移除事件
function removeEvent(obj,type,handler){
    if(obj.removeEventListener){
        obj.removeEventListener(type,handler);
    }else{
        
        obj.detachEvent("on"+type,window[handler]);
    }
}
//封装阻止事件冒泡
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}

//阻止浏览器的默认行为
function preventDefault(e){
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue=false;
    }
}

//    动画 高度（height）  透明度（opacity)
function animation(ele,attr,end,time,cb){
            var style = getStyle(ele,attr);       //"8.33px"
            var start = parseFloat(style);        //当前元素当前属性的当前状态值
            var step = (end-start)/(time/(1000/60));           //每次变化的量
            var dw = style.replace(start,"");      //得到单位
            function move(){
                //每次变化
                start+= step;
                ele.style[attr] = start+dw;

                // 当step大于0的时候，说明一直进行++操作
                // 当step小于0的时候，说明一直进行--操作
                
                if(step>0?start>=end:start<=end){
                    ele.style[attr] = end+dw;     //纠正超界的情况
                    clearInterval(timer);
                    if(cb){
                        cb();
                    }
                } 
                
                // if(step>0){
                //     if(start>=end){
                //         ele.style[attr] = end+dw; 
                //         clearInterval(timer);
                //     }
                // }else{
                //     if(start<=end){
                //         ele.style[attr] = end+dw; 
                //         clearInterval(timer);
                //     }
                // }
            }
            var timer = setInterval(move,1000/60);
            return timer;
        }

// 如果兼容到ie7    获取dom元素相对于浏览器窗口左上角的偏移量
function getBoundingClientRect(dom){
    var o = dom.getBoundingClientRect();
    o.left -= document.documentElement.clientLeft;
    o.top -= document.documentElement.clientTop;
    o.right -= document.documentElement.clientLeft;
    o.bottom-=document.documentElement.clientTop;
    return o;
}


//获取dom元素相对于文档左上角的偏移量
function getOffsetPosition(dom){
    var left=0,t=0;
    while(dom.offsetParent){
        t += dom.offsetTop;
        left += dom.offsetLeft;
        dom = dom.offsetParent;
    }
    var o = {left:left,top:t};
    return o;
}


//获取窗口的宽度和高度
function getWindowRect(){
    var o ={};
    o.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    o.height= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return o;
}


//获取页面相关参数
function getParam(para){
    var str = window.location.search;
    str = str.substring(1);
    var arr = str.split("&");
    for(var i=0;i<arr.length;i++){
        if(arr[i].split("=")[0] ==para){
           return arr[i].split("=")[1];
        }
    }
}

function getParam(para){
    var str = window.location.search;
    str = str.substring(1);
    var reg = new RegExp(para+"=([^&]*)");
    // 方式一
    // return reg.exec(str)[1];
    // 方式二
    reg.test(str);
    return RegExp.$1
}



//   获得浏览器的版本信息
function getExplore(){
    var verson={};
    var type=navigator.userAgent.toLowerCase();
    var arr;
    (arr=type.match(/msie[\s]+[\d\.]+/))?verson.ie=arr[0]:
    (arr=type.match(/chrome\/[\d\.]+/))?verson.chrome=arr[0]:
    (arr=type.match(/firefox\/[\d\.]+/))?verson.firefox=arr[0]:
    (arr=type.match(/rv:[\d\.]+/))?verson.ie=arr[0]:0;
    console.log(verson.ie);
    if(verson.ie) return ("IE:"+verson.ie);  
    if(verson.chrome) return ("chrome:"+verson.chrome);  
    if(verson.firefox) return ("firefox:"+verson.firefox);
    return "Unkonwn";
}

(function (window) {
  function serialize (params) {
    // 要把对象转换为字符串 key=value&key=value
    var arr = []
    for(var key in params) {
      arr.push(key + '=' + params[key])
    }
    return arr.join('&')
  }  

  // window
  var ajax = {
    get: function (url, callback) {
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
          callback && callback(xhr.responseText)
        }
      }
      xhr.open('GET', url, true)
      xhr.send()
    },
    post: function (url, params, callback) {
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
          callback && callback(xhr.responseText)
        }
      }
      xhr.open('POST', url, true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      var data = typeof params === 'string' ? params : serialize(params)
      xhr.send(data)
    },
    getJSON: function (url, callback) {
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
          callback && callback(JSON.parse(xhr.responseText))
        }
      }
      xhr.open('GET', url, true)
      xhr.send()
    },
    ajax: function (opt) {
      // 1 先设置相关参数的默认值
      var 
        url = opt.url || '',
        type = opt.type || 'GET',
        data = opt.data || '',
        dataType = opt.dataType || 'TEXT',
        success = opt.success || null,
        error = opt.error || null

      // 判断data传递的是对象还是字符串
      if (typeof data !== 'string') {
        data = serialize(data)
      }

      // 2 把GET和POST请求相同的内容写出来
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // 表示成功 判断dataType的值，给success函数传入对应类型的值
          dataType = dataType.toUpperCase()
          if (dataType === 'TEXT') {
            success && success(xhr.responseText)
          } else if (dataType === 'JSON') {
            success && success(JSON.parse(xhr.responseText))
          } else if (dataType === "XML") {
            success && success(xhr.responseXML)
          }
        } else if (xhr.readyState === 4 && xhr.status === 404) {
          error && error(xhr.statusText)
        }
      }

      // 3 根据使用者传递的type值判断是使用GET还是使用POST
      if (type.toUpperCase() === "GET") {
        // 处理url 如果用户传递了data就拼接，没有传递则还是url
        url = data ? url + "?" + data : url
        // 按GET请求发送
        xhr.open('GET', url, true)
        xhr.send()
      } else if (type.toUpperCase() === "POST") {
        // 按POST请求发送
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(data)
      }
    }
  }

  window._ = ajax  // 把ajax对象暴露到全局中
}(window))
