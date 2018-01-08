var Main=Vue.component("mains",{
    template:`
    <div class="tem">
        <div class="body">
            <div class="left">
              <router-view name="left"></router-view>
            </div>
            <div class="right">
              <router-view name="right"></router-view>
           </div>
        </div>
   </div>
    `,
})
var Left=Vue.component("left",{
    template:`
        <div>
            <ul> 
                 <div v-for="item in datas">
                 <li> 
                  <router-link :to="'#'+item.id"> 
                    {{item.title}}
                    </router-link>
                 </li>
                 <ul> 
                    <li v-for="item1 in item.child">
                    <router-link :to="'#'+item1.id"> 
                    {{item1.title}}
                    </router-link>
                    </li>
                 </ul>
                </div>
             </ul>
       </div>
    `,
    data(){
        return{
            menu:[
                /*{"id":"1","title":"介绍","pid":"0"},
                {"id":"2","title":"Vue.js 是什么","pid":"1"},
                {"id":"3","title":"起步","pid":"1"},
                {"id":"4","title":"声明式渲染","pid":"1"},
                {"id":"5","title":"Vue 实例","pid":"0"},
                {"id":"6","title":"创建一个 Vue 的实例","pid":"5"},
                {"id":"7","title":"数据与方法","pid":"5"},
                {"id":"8","title":"实例生命周期钩子","pid":"5"},
                {"id":"9","title":"生命周期图示","pid":"5"},
                {"id":"10","title":"模板语法","pid":"0"},
                {"id":"11","title":"插值","pid":"10"},
                {"id":"12","title":"文本","pid":"10"},
                {"id":"13","title":"原始 HTML","pid":"10"}*/
            ]
        }
    },
    computed:{
        datas(){
            var arr=[];
            for(var i in this.menu){
                if(this.menu[i].pid==0){
                    var obj=this.menu[i];
                    arr.push(obj)
                }else {
                    for(var j in arr){
                        if(this.menu[i].pid==arr[j].id){
                            if(arr[j].child){
                                arr[j].child.push(this.menu[i]);
                            }else {
                                arr[j].child=[];
                                arr[j].child.push(this.menu[i]);
                            }
                        }
                    }
                }
            }
            return arr;
        }

    },
    mounted(){

        fetch('./menus.html',{
            core:false
        }).then(function (e) {
            return e.json();
        }).then((e)=>{
            this.menu=e;
        })

/*
       var  xml=new XMLHttpRequest()
       xml.onload=function () {
           console.log(xml.response)
       }
       xml.open("get",'./menus.html');
       xml.send();
 */
   }
})
var Right=Vue.component("right",{
   template:`
       <div>
         <div v-html="datas" class="markdown-body"></div>
      </div>
   `,
    data(){
       return{
           datas:"",
       }
    },
    mounted(){
        fetch("./hm-ro.txt").then(function (e) {
            return e.text();
        }).then(e=>{
            this.datas=e;
        })
    },
    watch:{
        $route(){
            var num=('.a'+this.$route.hash.slice(1));
            var pos=document.querySelector(num).offsetTop-40;
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ Number: document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ Number: pos }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop = this.Number.toFixed(0)
                })
                .start()
            animate();

        }
    }
})
var Quick=Vue.component('quick',{
    template:`
    <div style="padding-top: 60px;border:2px solid red">
    qucik qucik qucik qucik qucik qucik qucik qucik qucik 
     qucik qucik qucik qucik qucik qucik qucik qucik qucik 
      qucik qucik qucik qucik qucik qucik qucik qucik qucik 
       qucik qucik qucik qucik qucik qucik qucik qucik qucik 
       qucik qucik qucik qucik qucik qucik qucik qucik qucik 
       qucik qucik qucik qucik qucik qucik qucik qucik qucik 
    </div> 
    `,
})