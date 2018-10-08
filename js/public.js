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
            }
            while(str.charAt(rw)==space){
                rw--;
            }
            return str.substring(lw,rw+1);
        }

        for(var i=0;i<space.length;i++){     // i<=space.length-1
            _thisstr = innerTrim(_thisstr,space.charAt(i));
        }

        return _thisstr;
}

// 兼容ie7,8的indexOf和lastIndexOf方法
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

//获取元素的最终样式的兼容方案
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
        window[handler] = null;  //解绑事件后，全局变量重置为空
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
// 执行动画函数
function animation(ele,attr,end,time){
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
        } 
        
    }
    var timer = setInterval(move,1000/60);
    return timer;
}

// 如果兼容到ie7
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