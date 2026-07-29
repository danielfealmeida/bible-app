import {defineStore} from 'pinia'
import {ref} from 'vue'

import NVI from "../data/NVI.json"
import NAA from "../data/NAA.json"
import ARA from "../data/ARA.json"
import ARC from "../data/ARC.json"

export const useBibleStore = defineStore('bibles', () =>{
    const ara = ref([]);
    const nvi = ref([]);
    const naa = ref([]);
    const arc = ref([]);

    function loadBibles() {
        ara.value = ARA;
        nvi.value = NVI;
        naa.value = NAA;
        arc.value = ARC;
    }

    return { ara, nvi, naa, arc, loadBibles}
})