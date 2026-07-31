<script setup>

const model = defineModel();

</script>

<template>
    <div :style="model ? { display: 'block' } : { display: 'none' }" class="position-fixed top-0 start-0 w-100 h-100">
        <div class="bg-dark opacity-75 position-fixed top-0 start-0 w-100 h-100" @click="model = false"></div>
        <div class="position-fixed top-50 start-50 translate-middle p-5 bg-dark rounded-4 border border-secondary d-flex flex-column justify-content-center">
            <h3 class="text-danger mx-auto mb-4">Aviso Legal</h3>
            <p class="text-light justify">Projeto gratuito para fins de estudo e uso pessoal, sem fins lucrativos. Os textos bíblicos exibidos nessa página pertencem aos seus respectivos detentores de direitos autorais. <br/><br/> Para remoção de conteúdo, entre em contato via <a href="mailto:danielfealmeida@gmail.com">danielfealmeida@gmail.com</a>.</p>
            <span role="button" class="position-absolute top-0 end-0 text-danger fs-3 border-none pointer pe-2" v-on:click="model = false">×</span>
        </div>
    </div>
</template>

<style>

.justify {
    text-align: justify;
}

</style>