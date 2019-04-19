new Vue({
    el:'#app',
    data:{
        newList:[
            {
                title:'幸福',
                img:'./images/1.jpg',
                content:'可是，打呼噜怎么办？'
            },
            {
                title:'木屋',
                img:'./images/2.jpg',
                content:'想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.'
            },
            {
                title:'CBD',
                img:'./images/3.jpg',
                content:'烤炉模式的城，到黄昏，如同打翻的调色盘一般'
            }
        ]
    },

    created:function(){
        console.log('1111111')
        this.getImg()
    },
    methods:{
        getImg:function(){
            axios.post('https://static.whtiyu.cn/wechat/news/list',{
                pn:0,
                ps:10
            }).then((res)=>{
                console.log('res:',res.data)
            })
        },

        onclick:function(e){
            console.log('e:',e)
        },
        goDetail:function(val){
            return 'newDeatial?title='+val
        }
    }
})

//https://static.whtiyu.cn/wechat/news/list