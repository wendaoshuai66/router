var router=new VueRouter({
    routes:[
        {path:"/",component:Main,
            children:[
                {path:"",components:{
                    right:Right,
                    left:Left,
                }}
            ]
        },
        {path:"/quick",component:Quick}
    ]
})
