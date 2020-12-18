import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    state:{
        //保存状态
        counter:5,
        students:[
            {id:110,name:'why',age:18},
            {id:111,name:'kobe',age:24},
            {id:112,name:'lisi',age:30},
            {id:113,name:'zhangsan',age:10},
        ],
        info:{
            name:'kobe',
            age:40,
            height:198
        }
    },    
    mutations:{
        //更改store的state的唯一途径就是提交mutation
        // Vuex要求我们Mutation中的方法必须是同步方法.
        // 方法
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        // // mutation的载荷:传入额外的参数
        // incrementCount(state,count){
        //     state.counter += count   //实现counter的值每次增加count
        // },

        // 2.特殊提交封装(提交时使用了type属性)
        incrementCount(state,payload){
            state.counter += payload.count   
        },

        // mutation的载荷:传入对象
        incrementStudent(state,stu){
            state.students.push(stu)
        },

        // info对象的内容是否是响应式
        updateInfo(state){
            state.info.name = 'coderwhy'
            // state.info['address'] = '洛杉矶'  不能通过该方法实现state中对象属性的添加，，做不到响应式

            // Vue.set(state.info,'address','洛杉矶') //添加新属性
            // Vue.delete(state.info,'age',)    //删除属性
        }

    },
    actions:{
        // 异步
        // action处理函数接收一个与store实例具有相同方法和属性的context对象
        // context上下文
        aUpdateInfo(context){
            setTimeout(() =>{
                context.commit('updateInfo')
            },1000)
        }
    },
    getters:{
        // 可以认为是store的计算属性
        // 定义一个方法用于计算counter的平方
        powerCounter(state){
            return state.counter * state.counter
        },
        // 定义一个方法用于取出年龄大于20的学生
        more20stu(state){
            // s => s.age>20 返回一个布尔值，filter函数依据返回的布尔值进行筛选
            return state.students.filter(s => s.age>20)   
        },
         // 定义一个方法用于返回年龄大于20的学生的...个数
        more20stuLength(state,getters){
            // s => s.age>20 返回一个布尔值，filter函数依据返回的布尔值进行筛选
            return getters.more20stu.length   
        },
        // 定义一个方法使其可以根据用户传入的年龄进行筛选
        moreAgeStu(state){
            // return function(age){
            //     return state.students.filter(s => s.age > age) 
            // }

            // 箭头函数
            return age => {
                return state.students.filter(s => s.age > age) 
            }
        }
    },
    modules:{}
})

// 3.导出store对象
export default store