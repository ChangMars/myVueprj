<template>
  <div class="container">
    <h1 style="text-align:center;color:rgb(6, 236, 6);">
      Welcome to Javatpoint
    </h1>
    <h3>
      Making a horizontal scrollable in Bootstrap row
    </h3>
    <div class="container horizontal-scrollable">
      <div class="row text-center">
        <div class="col">Element 1</div>
        <div class="col">Element 2</div>
        <div class="col">Element 3</div>
        <div class="col">Element 4</div>
        <div class="col">Element 5</div>
        <div class="col">Element 6</div>
        <div class="col">Element 7</div>
        <div class="col">Element 8</div>
        <div class="col">Element 9</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>

<style>
/* main css of the code*/

.horizontal-scrollable > .row {
  overflow-x: auto;
}

.horizontal-scrollable > .row > .col {
  display: inline-block;
}
/* Designs */

.col {
  color: rgb(255, 255, 255);
  font-size: 26px;
  padding-bottom: 18px;
  padding-top: 16px;
}

.col:nth-child(2n + 1) {
  background: rgb(6, 177, 6);
}

.col-xs-4:nth-child(2n + 2) {
  background: black;
}
</style>
