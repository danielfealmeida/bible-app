<script setup>
import BibleColumn from "./components/bible-column.vue";
import ara from "./data/ARA.json"

let book = 0;
let chapter = 0;

</script>

<template>
  <div class="bg-dark">
    <div class="navx w-100 bg-dark border-bottom border-secondary mb-2 pb-1">
      <div class="mx-auto h-100 p-1 w-25 d-flex justify-content-center">
        <select class="s1 me-2 rounded-pill border-secondary ps-2 bg-dark text-white" name="books" id="books" v-model="book" v-on:change="$forceUpdate(); chapter=0;">
          <option v-for="(book, index) in ara" :key="index" :value="index">{{ book.name }}</option>
        </select>
        <select class="me-2 rounded-pill border-secondary ps-2 bg-dark text-white" name="chapters" id="chapters" v-model="chapter" v-on:change="$forceUpdate();">
          <option v-for="(chapter, index) in ara[book].chapters" :key="index" :value="index">{{ index+1 }}</option>
        </select>
      </div>
    </div>

    <div class="d-sm-inline-flex">
      <BibleColumn :book="book" :chapter="chapter" defaultVersion="nvi"/>
      <BibleColumn class="d-none d-md-block" :book="book" :chapter="chapter" defaultVersion="naa"/>
      <BibleColumn class="d-none d-md-block" :book="book" :chapter="chapter" defaultVersion="ara"/>
      <BibleColumn class="d-none d-md-block" :book="book" :chapter="chapter" defaultVersion="arc"/>
    </div>
    
  </div>
</template>

<style>

</style>
