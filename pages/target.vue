<template>
    <div>
        <navigation-layout/>
        <div class="relative z-10">
            <div class="pt-64 pb-20 w-full mx-auto container lg:px-12 px-8">
                <div class="grid items-center lg:grid-cols-2 gap-x-6 grid-cols-1">
                    <div class="text-left">
                        <h1 data-aos="fade-left" class="text-6xl">Championing Innovation</h1>
                        <p data-aos="fade-right" class="text-2xl mt-8 text-gray-600">Our Goal for PKM KC 2023, Indonesia</p>
                    </div>
                    <div ref="teamsImage" class="lg:mt-16 mt-24 relative transition-all ease-in-out duration-200">
                        <img data-aos="fade-left" src="/image/target/pkm.png" alt="Hayago Team" class="w-full inline-block rounded-[3rem]">
                    </div>
                </div>
            </div>
            <div class="container lg:px-12 px-8 mx-auto py-24 w-full text-center">
                <p class="text-xl text-gray-600" data-aos="fade-up">
                    <span class="font-semibold text-primary">PKM-KC 2023</span>: A Platform for Students to Transform Constructive Ideas into Reality. Based on creativity and logic, even if it's yet to provide perfect functionality or immediate benefits to others, it's a step in the right direction towards innovation and progress.
                </p>
            </div>
            <div class="w-full grid grid-cols-1 items-center justify-items-center mx-auto relative z-10 py-16">
                <div id="vission" ref="vission" class="rounded-2xl w-10/12 h-[70vh] lg:h-[60vh] overflow-hidden relative transition-all ease-in-out duration-1000">
                <div class="absolute bg-black/50 w-full h-full top-0 left-0 rounded-t-3xl flex items-center justify-center justify-items-center">
                    <div class="text-white text-center grid lg:grid-cols-3 grid-cols-1 items-center">
                        <div class="text-left lg:px-12 px-8">
                            <h1 class="text-5xl grow font-bold">We possess an inspiring vision</h1>
                        </div>
                        <div class="px-8 col-span-2 lg:px-12 px-8 lg:mt-0 mt-6">
                            <p>To engineer autonomous copters that provide innovative, swift, and eco-friendly logistics solutions. We harness advanced intelligent control systems and predictive control estimation to optimize system efficiency and reliability</p>
                        </div>
                    </div>
                </div>
                <img src="/image/instanly1.png" class="w-full rounded-t-3xl object-cover object-center h-full" alt="Hayago Delivery Instanly">
                </div>
            </div>
            <div class="py-12 pb-20 w-full mx-auto container lg:px-12 px-8">
                <div class="grid items-center lg:grid-cols-2 gap-x-6 grid-cols-1">
                    <div ref="teamsImage" class="lg:mt-16 mt-24 relative transition-all ease-in-out duration-200">
                        <img data-aos="fade-right" src="/image/target/bimbingan.png" alt="Hayago Team" class="w-full inline-block rounded-[3rem]">
                    </div>
                    <div class="text-right lg:mt-0 mt-12">
                        <h1 data-aos="fade-left" class="text-6xl">We harbor a multitude of missions.</h1>
                        <p data-aos="fade-right" class="text-2xl mt-8 text-gray-600">all geared towards the success of PKM-KC 2023.</p>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="w-full h-full absolute bottom-0 left-0 bg-gradient-to-b from-white to-gray-100"></div>
                <div class="container relative lg:px-12 px-8 mx-auto pt-24 pb-48 w-full text-left space-y-12">
                    <div data-aos="fade-left" class="mission flex gap-x-8">
                        <div>
                            <h3 class="text-primary text-4xl font-bold">1</h3>
                        </div>
                        <div>
                            <p class="text-xl text-gray-600">
                                To develop an autonomous drone delivery system by integrating Sliding Mode Control technology to enhance drone stability and control, alongside the Kalman Filter to ensure accurate navigation and tracking.
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-left" class="mission flex gap-x-8">
                        <div>
                            <h3 class="text-primary text-4xl font-bold">2</h3>
                        </div>
                        <div>
                            <p class="text-xl text-gray-600">
                                To prioritize safety, reliability, and efficiency in every drone delivery operation, safeguarding the confidentiality and security of delivered packages.
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-left" class="mission flex gap-x-8">
                        <div>
                            <h3 class="text-primary text-4xl font-bold">3</h3>
                        </div>
                        <div>
                            <p class="text-xl text-gray-600">
                                To provide reliable and prompt delivery services that meet customer needs by offering accessible, affordable, and flexible drone delivery solutions."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-layout/>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, onBeforeMount } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
const vission: Ref<HTMLElement|null> = ref(null)

onMounted(() => {
    AOS.init()
})

onMounted(() => {
    AOS.init();
    window.addEventListener('scroll', updateScroll)
})
onBeforeMount(() => {
    window.removeEventListener('scroll', updateScroll)
})

function updateScroll() {
    if(vission.value) {
        const rect = vission.value.getBoundingClientRect()
        if (rect.top <= 320 && rect.bottom >= 0) {
            vission.value.classList?.add('w-full', 'rounded-t-2xl')
            vission.value.classList?.remove('rounded-2xl', 'w-10/12')
        } else {
            vission.value.classList?.add('w-10/12', 'rounded-2xl')
            vission.value.classList?.remove('rounded-t-2xl', 'w-full')
        }
    }
}

useSeoMeta({
  title: 'Our Targets - Hayago',
  ogTitle: 'Our Targets - Hayago',
  description: 'Explore our ambitious goals and targets at Hayago. We aim to revolutionize the drone delivery sector with our innovative technology and service approach.',
  ogDescription: 'Explore our ambitious goals and targets at Hayago. We aim to revolutionize the drone delivery sector with our innovative technology and service approach.',
})
</script>