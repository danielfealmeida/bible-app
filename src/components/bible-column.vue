<script setup>

import nvi from "../data/NVI.json"
import naa from "../data/NAA.json"
import ara from "../data/ARA.json"
import arc from "../data/ARC.json"

const props = defineProps(["book", "chapter", "defaultVersion"]);

let version = props.defaultVersion;

</script>

<template>
  <div class="ch text-light w-sm-25 mr-auto px-3 bg-dark overflow-hide border-end border-secondary">
    <div class="mx-auto my-2 w-25 d-flex justify-content-center px-2">
        <select class="me-2 rounded-pill ps-2 bg-dark text-white border-1 border-secondary" name="version" id="version" v-model="version" v-on:change="$forceUpdate();">
            <option key="ara" value="ara">ARA</option>
            <option key="arc" value="arc">ARC</option>
            <option key="nvi" value="nvi">NVI</option>
            <option key="naa" value="naa">NAA</option>
        </select>
    </div>

    <div class="mb-2" v-if="version=='nvi'" v-for="(verse, index) in nvi[props.book].chapters[props.chapter]" :key="index">
        <b class="text-primary fw-normal">{{ index+1 }}.</b>
        {{ verse }}
    </div>
    <div class="mb-2" v-if="version=='ara'" v-for="(verse, index) in ara[props.book].chapters[props.chapter]" :key="index">
        <b class="text-primary fw-normal">{{ index+1 }}.</b>
        {{ verse }}
    </div>
    <div class="mb-2" v-if="version=='naa'" v-for="(verse, index) in naa[props.book].chapters[props.chapter]" :key="index">
        <b class="text-primary fw-normal">{{ index+1 }}.</b>
        {{ verse }}
    </div>
    <div class="mb-2" v-if="version=='arc'" v-for="(verse, index) in arc[props.book].chapters[props.chapter]" :key="index">
        <b class="text-primary fw-normal">{{ index+1 }}.</b>
        {{ verse }}
    </div>
  </div>
</template>

<style>
    .ch {
        min-width: 25%;
        overflow-x: hidden !important;
        scrollbar-color: var(--scroll-dark) var(--bg-dark) ;
        scrollbar-width: thin;
    }
</style>
