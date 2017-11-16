import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
Vue.use(Router)
  /*
  [
  {name:'index',path:"/",content:'首页'},
    {name:'schoolProfile',path:"/schoolProfile",content:'学院简介'},
    {name:'teachersIntroduce',path:"/teachersIntroduce",content:'师资介绍'},
    {name:'courseinTroduction',path:"/courseinTroduction",content:'课程介绍'},
    {name:'studentsDevelopment',path:"/studentsDevelopment",content:'学生发展'},
    {name:'InstituteOfDynamic',path:"/InstituteOfDynamic",content:'学院动态'},
    {name:'eleventhEnrollment',path:"/eleventhEnrollment",content:'十一届招生'},
  ]*/
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {name:'schoolProfile',
      path:"/schoolProfile",
      component: Index
    },
    {
      name:'teachersIntroduce',
      path:"/teachersIntroduce",
      component: Index
    },
    {
      name:'courseinTroduction',
      path:"/courseinTroduction",
      component: Index
    },
    {name:'studentsDevelopment',
      path:"/studentsDevelopment",
      component: Index
    },
    {name:'InstituteOfDynamic',
      path:"/InstituteOfDynamic",
      component: Index
    },
    {name:'eleventhEnrollment',
      path:"/eleventhEnrollment",
      component: Index
    }
  ]
})
