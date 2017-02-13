<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {urlParse} from 'assets/js/util'
import header from 'components/header'
import axios from 'axios'

const ERR_OK = 0

export default {
  name: 'app',
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created () {
    axios.get('/api/seller?id=' + this.seller.id).then((response) => {
      let retcode = response.data.errno
      if (retcode === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data.data)
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="css">
  @import "./assets/css/mixin.css";
  /*已知bug 在base.css中设置的@media没有生效*/
  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    .border-1px {
      &::after {
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
    }
  }
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @mixin border-1px rgba(7, 17, 27, 0.1);
    .tab-item {
      flex: 1;
      text-align: center;
      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
</style>
