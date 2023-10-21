<script setup lang="ts">
import { ref } from 'vue'

const pading = ref('30,5,50,10')

function handleOk() {
  pading.value = '44,555,66,77'
}

function handleOk2(val){
  console.log(val,"9999")
}

function handleMove(val){
  console.log(val,"5555")
}

function handleEnd(val){
  console.log(val,"7766666")
}

</script>

<template>
  <DraggableFloat :padding="pading" @handleOk="handleOk2" @handleMove="handleMove" @handleEnd="handleEnd">555</DraggableFloat>
  <div>2</div>
  <div>4</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div>5</div>
  <div @click="handleOk">ok</div>
</template>

<style scoped></style>
