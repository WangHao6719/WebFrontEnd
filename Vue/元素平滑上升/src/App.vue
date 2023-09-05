<template>
  <div class="container">
    <div v-slide-in class="item">1</div>
    <div v-slide-in class="item">2</div>
    <div v-slide-in class="item">3</div>
    <div v-slide-in class="item">4</div>
    <div v-slide-in class="item">5</div>
    <div v-slide-in class="item">6</div>
    <div v-slide-in class="item">7</div>
    <div v-slide-in class="item">8</div>
    <div v-slide-in class="item">9</div>
    <div v-slide-in class="item">10</div>
  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {}

.item {
  width: 80%;
  height: 300px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 1px 1px 5px #000;
}

.item:nth-child(1) {
  background-color: #eac0ce;
}

.item:nth-child(2) {
  background-color: #c3a6cb;
}

.item:nth-child(3) {
  background-color: #732e7e;
}

.item:nth-child(4) {
  background-color: #a52664;
}

.item:nth-child(5) {
  background-color: #793d56;
}

.item:nth-child(6) {
  background-color: #c17886;
}

.item:nth-child(7) {
  background-color: #c5283d;
}

.item:nth-child(8) {
  background-color: #cf292f;
}

.item:nth-child(9) {
  background-color: #c4473d;
}

.item:nth-child(10) {
  background-color: #f89155;
}
</style>
