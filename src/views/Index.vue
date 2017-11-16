<template>
  <div>
    <heads></heads>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>



   <div class="footer">
     <div>
       联系我们
     </div>
     <div>
       地址：北京朝阳区北苑路86号院（嘉铭桐城）E区213号楼一至三层
     </div>
     <div>
       总机：400-608-193
     </div>
   </div>
   <foots></foots>
  </div>

</template>
<script>
  import Heads from "../components/Heads.vue";
  import Foots from "../components/foots.vue";

  export default {
    components: {
      Foots,
      Heads},
    name:"index",
   data:function () {
      return{

      }
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 50px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .footer{
    height: 130px;
    padding: 40px 0  40px 65px ;
    background: #999;
    box-sizing: border-box;
  }
</style>
