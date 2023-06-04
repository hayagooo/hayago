<template>
    <div>
        <navigation-layout/>
        <div class="relative z-10">
            <div class="pt-64 pb-20 w-full mx-auto container lg:px-12 px-8">
                <div class="grid items-center lg:grid-cols-2 gap-x-6 grid-cols-1">
                    <div class="text-left">
                        <h1 data-aos="fade-left" class="text-6xl">Advancing Drone Delivery</h1>
                        <p data-aos="fade-right" class="text-2xl mt-8 text-gray-600">HAYAGO PKM KC 2023 PROGRESS</p>
                    </div>
                    <div ref="teamsImage" class="lg:mt-16 mt-24 relative transition-all ease-in-out duration-200">
                        <img data-aos="fade-left" src="/image/progress/progress.png" alt="Hayago Team" class="w-full inline-block">
                    </div>
                </div>
            </div>
            <div class="container lg:px-12 px-8 mx-auto py-24 w-full text-center">
                <p class="text-3xl text-gray-600" data-aos="fade-up">
                    <span class="font-semibold text-primary">Progress is the heart of innovation</span>  at Hayago, we're transforming tomorrow's delivery, today.
                </p>
            </div>
            <div class="w-full h-12 bg-gray-300 relative">
                <div class="bg-primary w-[20%] rounded-r-2xl h-full bg-primary flex items-center justify-center">
                    <h2 class="text-white">20%</h2>
                </div>
            </div>
            <div class="relative">
                <div class="w-full h-full absolute bottom-0 left-0 bg-gradient-to-b from-white to-gray-100"></div>
                <div class="container relative lg:px-12 px-8 mx-auto pt-24 pb-48 w-full text-left space-y-12">
                    <div class="flex justify-center gap-x-4 items-center">
                        <button class="btn border-0 transition-all" @click="menuSelected = 'code'"
                            :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'code',
                        'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'code'}">Code</button>

                        <button class="btn border-0 transition-all" @click="menuSelected = 'video'"
                            :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'video',
                        'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'video'}">Video</button>

                        <button class="btn border-0 transition-all" @click="menuSelected = 'documents'"
                            :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'documents',
                        'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'documents'}">Documents</button>

                        <button class="btn border-0 transition-all" @click="menuSelected = 'image'"
                            :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'image',
                        'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'image'}">Image</button>
                    </div>
                    <div class="transition-all duration-400 ease-in-out" :class="{'h-full w-full inline-block': menuSelected == 'code', 'h-0 opacity-0 hidden': menuSelected != 'code'}">
                        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:space-y-3 space-y-3 gap-4">
                            <div class="animate-pulse bg-gray-300 h-96 w-11/12 mx-auto rounded-2xl mt-3"></div>
                            <div class="animate-pulse bg-gray-300 h-96 w-11/12 mx-auto rounded-2xl"></div>
                            <div class="animate-pulse bg-gray-300 h-96 w-11/12 mx-auto rounded-2xl"></div>
                            <div class="animate-pulse bg-gray-300 h-96 w-11/12 mx-auto rounded-2xl"></div>
                        </div>
                    </div>
                    <div class="transition-all duration-400 ease-in-out" :class="{'h-full w-full inline-block': menuSelected == 'video', 'h-0 opacity-0 hidden': menuSelected != 'video'}">
                        <div class="max-w-lg mx-auto text-center">
                            <img src="/image/progress/notfound.png" class="w-[32rem] mx-auto" alt="Not Found">
                            <h4 class="text-3xl font-semibold">The video is currently unavailable</h4>
                            <p class="text text-gray-600 mt-5">We invite you to check back later when it is ready for viewing</p>
                        </div>
                    </div>
                    <div class="transition-all duration-400 ease-in-out" :class="{'h-full w-full inline-block': menuSelected == 'documents', 'h-0 opacity-0 hidden': menuSelected != 'documents'}">
                        <div class="max-w-lg mx-auto text-center">
                            <img src="/image/progress/notfound.png" class="w-[32rem] mx-auto" alt="Not Found">
                            <h4 class="text-3xl font-semibold">The document is not yet available</h4>
                            <p class="text text-gray-600 mt-5">You may check back later when it is ready</p>
                        </div>
                    </div>
                    <div class="transition-all duration-400 ease-in-out" :class="{'h-full w-full inline-block': menuSelected == 'image', 'h-0 opacity-0 hidden': menuSelected != 'image'}">
                        <div class="max-w-lg mx-auto text-center">
                            <img src="/image/progress/notfound.png" class="w-[32rem] mx-auto" alt="Not Found">
                            <h4 class="text-3xl font-semibold">Image not available at the moment</h4>
                            <p class="text text-gray-600 mt-5">Please check back later when it becomes accessible</p>
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

const menuSelected: Ref<string> = ref('code')

onMounted(() => {
    AOS.init()
})

useSeoMeta({
    title: 'Hayago Progress - Advancing Drone Delivery',
    description: 'Track our journey and the milestones we reach as we revolutionize the delivery industry with autonomous drone technology. Stay updated with Hayago Progress.',
    ogTitle: 'Hayago Progress - Advancing Drone Delivery',
    ogDescription: 'Track our journey and the milestones we reach as we revolutionize the delivery industry with autonomous drone technology. Stay updated with Hayago Progress.',
    // ogImage: 'https://hayago.com/og-image-progress.png',
    // twitterCard: 'summary_large_image',
})
</script>