<template>
  <li class="item">
      <div class="card">
          <div class="img-wrapper">
              <img :src="require(`../../assets/img/${item.name}.jpg`)" alt="">
              <div class="mask">
                  <h1>{{ item.name }}</h1>
                  <h2>{{ item.startday }}</h2>
              </div>
          </div>
      </div>
  </li>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="less" scoped>
.item {
    padding: .1rem .15rem;
    box-sizing: border-box;
    .card {
        border: 1px solid #ddd;
        border-radius: .15rem;
        overflow: hidden;
        background-color: #fff;
        box-shadow: .01rem .03rem .05rem #999;
        .img-wrapper {
            position: relative;
            height: 2.15rem;
            .mask {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .4);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h1 {
                    color: #ed4040;
                    font-size: .5rem;
                    font-weight: bold;
                }
                h2 {
                    color: #fff;
                    margin-top: .15rem
                }
            }
        }
    }
}
</style>