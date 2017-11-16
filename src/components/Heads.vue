<template>
  <div>
    <header>
      <div class="header-top">
        <div class="quick">
          快捷登录
        </div>
        <div class="clear">

        </div>
      </div>
      <div class="header-content">
          <div class="logo">
            <img src="../../static/img/1510303096(1).jpg" alt="">
          </div >
          <div class="header-list">
            <router-link  class="one" :to="item.name"  v-for="item in list">
              {{item.content}}
            </router-link>
          </div>

      </div>
    </header>


  </div>

</template>
<script>
  export default {
    name:"heads",
    data:function () {
      return{
        list:[
          {name:'/',path:"/",content:'首页'},
          {name:'schoolProfile',path:"/schoolProfile",content:'学院简介'},
          {name:'teachersIntroduce',path:"/teachersIntroduce",content:'师资介绍'},
          {name:'courseinTroduction',path:"/courseinTroduction",content:'课程介绍'},
          {name:'studentsDevelopment',path:"/studentsDevelopment",content:'学生发展'},
          {name:'InstituteOfDynamic',path:"/InstituteOfDynamic",content:'学院动态'},
          {name:'eleventhEnrollment',path:"/eleventhEnrollment",content:'十一届招生'},
        ]
      }
    }
  }
</script>
<style>


  .quick{
    float: right;
    height: 44px;
    line-height: 44px;
    padding-right: 30px;
    font-size: 20px;
  }
  .clear{
    clear: both;
  }
  .header-top{
    background: #eee;
  }
  .header-content {
    background: white;
    height: 100px;
    display: flex;
    justify-content: space-between;
  }
  .one{
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 150px;
    box-sizing: border-box;
    text-align: center;
    font-size: 20px;
  }
  .one:hover{
    border-bottom: 2px solid red;
    color: red;
  }
</style>
