<script setup>
import BibleColumn from "./components/bible-column.vue";
import ara from "./data/ARA.json"

let book = 0;
let chapter = 0;

let checked;

</script>

<template>
  <div class="bg-dark">
    <div class="navx position-fixed top-0 start-0 w-100 bg-dark border-bottom border-secondary mb-2 pb-1 d-inline-flex">
      <div class="mx-auto h-100 p-1 w-25 d-flex justify-content-center">
        <select class="s1 me-2 rounded-pill border-secondary ps-2 bg-dark text-white" name="books" id="books" v-model="book" v-on:change="$forceUpdate(); chapter=0;">
          <option v-for="(book, index) in ara" :key="index" :value="index">{{ book.name }}</option>
        </select>
        <select class="me-2 rounded-pill border-secondary ps-2 bg-dark text-white" name="chapters" id="chapters" v-model="chapter" v-on:change="$forceUpdate();">
          <option v-for="(chapter, index) in ara[book].chapters" :key="index" :value="index">{{ index+1 }}</option>
        </select>
        <div class="ms-2 d-sm-inline-flex d-none d-sm-block my-auto">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="checked" v-on:change="$forceUpdate();">
          <label class="form-check-label text-white ms-1" for="flexCheckDefault"> 🔒 </label>
        </div>
      </div>
    </div>

    <div class="main-body d-sm-inline-flex mt-10">
      <BibleColumn :book="book" :chapter="chapter" defaultVersion="nvi" :style="checked ? { height: 'auto' } : { height: '93.5vh' }"/>
      <BibleColumn class="d-none d-md-block" :book="book" :chapter="chapter" defaultVersion="naa" :style="checked ? { height: 'auto' } : { height: '93.5vh' }"/>
      <BibleColumn class="d-none d-md-block" :book="book" :chapter="chapter" defaultVersion="ara" :style="checked ? { height: 'auto' } : { height: '93.5vh' }"/>
      <BibleColumn class="d-none d-md-block" :book="book" :chapter="chapter" defaultVersion="arc" :style="checked ? { height: 'auto' } : { height: '93.5vh' }"/>
    </div>
    
  </div>
</template>

<style>

.main-body {
  margin-top: 6.5vh;
}

</style>
