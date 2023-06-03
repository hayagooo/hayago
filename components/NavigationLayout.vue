<template>
    <div>
        <div ref="navbar" class="fixed top-0 left-0 w-full transition-all text-center z-40" :class="{'p-4': scrollY >= 240, 'p-0': scrollY < 240}">
            <div class="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] transition-all ease-in-out duration-400 inline-block py-4 px-6"
            :class="{'bg-[#10123C]': openMenu, 'bg-white': !openMenu, 'w-10/12 rounded-3xl': scrollY >= 240, 'w-full': scrollY < 240}">
                <div class="grid grid-cols-3 items-center">
                    <div class="text-left">
                        <button @click="openMenu = !openMenu" class="btn rounded-xl border-0"
                        :class="{'bg-[#10123C] hover:bg-[#10123C] active:bg-[#10123C]': openMenu, 'bg-gray-100 hover:bg-gray-200 active:bg-gray-200': !openMenu}">
                            <Icon v-if="!openMenu" icon="line-md:close-to-menu-alt-transition" class="text-xl text-gray-800"/>
                            <Icon v-else icon="line-md:menu-to-close-alt-transition" class="text-xl text-white"/>
                        </button>
                    </div>
                    <div>
                        <img v-if="!openMenu" src="/image/logo_horizontal.png" alt="Hayago Logo" class="w-36 inline-block">
                        <img v-else src="/image/logo_horizontal_white.png" alt="Hayago Logo" class="w-36 inline-block">
                    </div>
                    <div class="text-right">
                        <button class="btn bg-green-100 hover:bg-green-200 active:bg-green-200 text-green-600 rounded-xl border-0">DEMO</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed top-0 transition-all w-full grid grid-cols-1 items-center min-h-screen bg-[#101124]" 
        :class="{'w-0 -left-full z-0': !openMenu, 'left-0 z-30': openMenu}">
            <div class="grid grid-cols-2 px-12 items-center">
                <div class="text-white space-y-4 px-8">
                    <div class="text-4xl transition-all cursor-pointer font-bold hover:text-primary hover:pl-4">SERVICES</div>
                    <div class="text-4xl transition-all cursor-pointer font-bold hover:text-primary hover:pl-4">TARGET</div>
                    <div class="text-4xl transition-all cursor-pointer font-bold hover:text-primary hover:pl-4">TEAMS</div>
                    <div class="text-4xl transition-all cursor-pointer font-bold hover:text-primary hover:pl-4">PROGRESS</div>
                </div>
                <div class="text-right justify-self-end">
                    <div class="w-full p-5 border border-white/10 rounded-xl">
                        <span class="text-white/70">Have a question? </span>
                        <h4 class="text-white font-bold text-xl">Check out our FAQ</h4>
                    </div>
                </div>
            </div>
            <div class="fixed bottom-0 left-0 w-full border-t border-white/10 p-8">
                <div class="flex justify-between items-center">
                    <span class="text-white/60 text-sm">© 2022 Hayago Drone Delivery. All rights reserved.</span>
                    <div class="flex items-center">
                        <Icon icon="mdi:instagram" class="text-white text-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, Ref, onMounted, onBeforeMount } from 'vue'

const openMenu: Ref<boolean> = ref(false)
const scrollY: Ref<number> = ref(0)
const lastScrollPosition: Ref<number> = ref(0)
const navbar: Ref<HTMLElement|null> = ref(null)

function updateScroll() {
    scrollY.value = window.scrollY
    if(navbar.value) {
        if (scrollY.value > lastScrollPosition.value) {
            navbar.value.classList?.add('-top-20', 'scale-[0.65]')
            navbar.value.classList?.remove('top-0')
        } else {
            navbar.value.classList?.add('top-0')
            navbar.value.classList?.remove('-top-20', 'scale-[0.65]')
        }
    }
    lastScrollPosition.value = scrollY.value <= 0 ? 0 : scrollY.value
}

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
})
onBeforeMount(() => {
    window.removeEventListener('scroll', updateScroll)
})
</script>