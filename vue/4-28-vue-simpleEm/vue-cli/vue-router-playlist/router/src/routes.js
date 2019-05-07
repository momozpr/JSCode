import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/about/contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

export const routes = [
    // 给路由起名字，然后到引用的地方绑定使用,设置默认路径
    // 视图重用
    {path:"/",name:'homeLink',components:{
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
    }},
    {path:"/menu",name:'menuLink',component:Menu},
    // 路由独享守卫
    {path:"/admin",name:'adminLink',component:Admin,beforeEnter:(to,from,next)=>{
        alert("还没登陆，请先登陆！");
        // next()允许跳转，next(false)阻止跳转
        next(false);
      }
    },
    // 设置默认路径redirect:"/history"多个路由显示器设置点击时显示的那一个
    {path:"/about",name:'aboutLink',redirect:"/history",component:About,children:[
      {path:"/contact",name:'contactLink',component:Contact},
      {path:"/history",name:'historyLink',component:History},
      {path:"/orderingGuide",name:'orderingGuideLink',component:OrderingGuide},
      {path:"/delivery",name:'deliveryLink',component:Delivery}
    ]},
    {path:"/login",name:'loginLink',component:Login},
    {path:"/register",name:'registerLink',component:Register},
    // 当路径都匹配不上的时候会走*路径，可以引导走回某个页面，重定向，可以当路径都不对的时候走向404
    {path:"*",redirect:"/"}
  ]
  