<template>
    <div>
        <navigation-layout/>
        <Loading />
        <div class="relative z-10">
            <div class="pt-64 pb-20 w-full mx-auto container lg:px-12 px-8">
                <div class="grid items-center lg:grid-cols-2 gap-x-6 grid-cols-1">
                    <div class="text-left">
                        <h1 data-aos="fade-left" class="lg:text-6xl text-4xl">Advancing Drone Delivery</h1>
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
            <div v-if="progress > 0" class="w-full h-12 bg-gray-200 relative">
                <div ref="progressBar" class="bg-primary rounded-r-2xl h-full bg-primary transition-all duration-300 ease-in-out flex items-center justify-center"
                :style="{width: progress+'%'}">
                    <h2 class="text-white">{{ progress }}%</h2>
                </div>
            </div>
            <div class="relative">
                <div class="w-full h-full absolute bottom-0 left-0 bg-gradient-to-b from-white to-gray-100"></div>
                <div class="container relative lg:px-12 px-8 mx-auto pt-24 pb-48 w-full text-left space-y-12">
                    <div class="flex flex-wrap w-full lg:space-y-0 space-y-4 justify-center gap-x-4 items-center">
                        <button class="btn border-0 transition-all" @click="menuSelected = 'image', getImage()"
                            :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'image',
                        'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'image'}">Image ({{  images.length  }})</button>
                        
                        <button class="btn border-0 transition-all" @click="menuSelected = 'documents', getDocument()"
                            :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'documents',
                        'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'documents'}">Document ({{  documents.length  }})</button>

                        <button class="btn border-0 transition-all" @click="menuSelected = 'video', getVideos()"
                            :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'video',
                        'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'video'}">Video ({{  videos.length  }})</button>


                        <button class="btn border-0 transition-all lg:mt-0 mt-4" @click="menuSelected = 'code'"
                            :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'code',
                        'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'code'}">Code ({{ codes.length }})</button>
                    </div>
                    <div class="transition-all duration-400 ease-in-out" :class="{'h-full w-full inline-block': menuSelected == 'code', 'h-0 opacity-0 hidden': menuSelected != 'code'}">
                        <LoadingContent v-if="isLoadingContent && codes.length <= 0"/>
                        <div v-else>
                            <EmptyData v-if="codes.length <= 0" title="The video is currently unavailable" description="We invite you to check back later when it is ready for viewing"/>
                            <div v-else>
                                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                                    <div v-for="(item, index) in codes" :key="index" class="bg-white hover:shadow-xl transition-all lg:rounded-[2rem] rounded-[1.5rem]">
                                        <a class="p-6 inline-block" :href="item.url" target="_blank">
                                            <img :src="`/image/${item.image}`" controls class="w-full h-48 object-cover object-center rounded-[1rem]">
                                            <div class="flex pt-4 items-center justify-items-between w-full">
                                                <div class="w-full">
                                                    <h1 class="font-semibold">{{ item.name }}</h1>
                                                    <div class="flex items-center justify-between">
                                                        <div>{{ getDomainName(item.url) }}</div>
                                                        <img :src="getDomainIcon(item.url)" class="w-4 h-4" :alt="item.url">
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="transition-all duration-400 ease-in-out" :class="{'h-full w-full inline-block': menuSelected == 'video', 'h-0 opacity-0 hidden': menuSelected != 'video'}">
                        <LoadingContent v-if="isLoadingContent && videos.length <= 0"/>
                        <div v-else>
                            <EmptyData v-if="videos.length <= 0" title="The video is currently unavailable" description="We invite you to check back later when it is ready for viewing"/>
                            <div v-else>
                                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                                    <div v-for="(item, index) in videos" :key="index" class="p-6 bg-white hover:shadow-xl transition-all lg:rounded-[2rem] rounded-[1.5rem]">
                                        <video :src="item.url" controls class="w-full h-48 rounded-[1rem]"></video>
                                        <div class="flex pt-4 items-center justify-items-between w-full">
                                            <div class="w-full">
                                                <h1 class="font-semibold">{{ item.name }}</h1>
                                                <div class="flex p-4 bg-gray-100 text-gray-600 rounded-xl mt-5 text-sm items-center justify-between w-full">
                                                    <div>{{ (item.size / 1024000).toFixed(1) }} Mb</div>
                                                    <!-- <div>{{ item.type }}</div> -->
                                                    <div>{{ formatDate(item.timestamp) }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="transition-all duration-400 ease-in-out" :class="{'h-full w-full inline-block': menuSelected == 'documents', 'h-0 opacity-0 hidden': menuSelected != 'documents'}">
                        <LoadingContent v-if="isLoadingContent && documents.length <= 0"/>
                        <div v-else>
                            <EmptyData v-if="documents.length <= 0" title="The document is not yet available" description="You may check back later when it is ready"/>
                            <div v-else>
                                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                                    <label for="document_modal" v-for="(item, index) in documents" :key="index" @click="selectedDocument = index" class="p-6 bg-white hover:shadow-xl transition-all lg:rounded-[2rem] rounded-[1.5rem]">
                                        <div class="flex gap-x-3">
                                            <Icon class="text-6xl text-primary" icon="bi:file-pdf-fill" />
                                            <h1 class="font-semibold">{{ item.name }}</h1>
                                        </div>
                                        <div class="w-full mt-4">
                                            <div class="flex p-4 bg-gray-100 text-gray-600 rounded-xl mt-5 text-sm items-center justify-between w-full">
                                                <div>{{ (item.size / 1024000).toFixed(1) }} Mb</div>
                                                <div>{{ formatDate(item.timestamp) }}</div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <input type="checkbox" id="document_modal" class="modal-toggle" />
                            <div class="modal fixed" style="z-index: 70">
                                <div class="modal-box w-11/12 max-w-5xl" v-if="documents[selectedDocument]">
                                    <object v-if="documents[selectedDocument].type === 'application/pdf'" :data="documents[selectedDocument].url" type="application/pdf" width="100%" height="600px">
                                        <p><a :href="documents[selectedDocument].url">Download PDF</a></p>
                                    </object>
                                    <div class="modal-action">
                                        <label for="document_modal" class="btn w-full">Close</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="transition-all duration-400 ease-in-out" :class="{'h-full w-full inline-block': menuSelected == 'image', 'h-0 opacity-0 hidden': menuSelected != 'image'}">
                        <LoadingContent v-if="isLoadingContent && images.length <= 0"/>
                        <div v-else>
                            <EmptyData v-if="images.length <= 0" title="Image not available at the moment" description="Please check back later when it becomes accessible"/>
                            <div v-else>
                                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                                    <label for="image_modal" v-for="(item, index) in images" :key="index" @click="selectedImage = index" class="p-6 bg-white hover:shadow-xl transition-all lg:rounded-[2rem] rounded-[1.5rem]">
                                        <img :src="item.url" :alt="item.name" class="w-full h-48 object-center object-cover rounded-xl">
                                        <div class="flex pt-4 items-center justify-items-between w-full">
                                            <div class="w-full">
                                                <h1 class="font-semibold">{{ item.name }}</h1>
                                                <div class="flex p-4 bg-gray-100 text-gray-600 rounded-xl mt-5 text-sm items-center justify-between w-full">
                                                    <div>{{ (item.size / 10240).toFixed(1) }} Kb</div>
                                                    <!-- <div>{{ item.type }}</div> -->
                                                    <div>{{ formatDate(item.timestamp) }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <input type="checkbox" id="image_modal" class="modal-toggle" />
                            <div class="modal fixed" style="z-index: 70">
                                <div class="modal-box w-11/12 max-w-lg" v-if="images[selectedImage]">
                                    <img :src="images[selectedImage].url" class="w-full rounded-xl">
                                    <div class="modal-action">
                                        <label for="image_modal" class="btn w-full">Close</label>
                                    </div>
                                </div>
                            </div>
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
import { Icon } from '@iconify/vue'
import { onValue, ref as dbRef } from 'firebase/database'
import { listAll, getDownloadURL, ref as storageRef, getMetadata } from 'firebase/storage';

const isLoadingContent: Ref<boolean> = ref(true)
const menuSelected: Ref<string> = ref('image')
const videos: Ref<Array<{url: string, name: string, type: string, size: number, timestamp: string}>> = ref([])
const documents: Ref<Array<{url: string, name: string, type: string, size: number, timestamp: string}>> = ref([])
const images: Ref<Array<{url: string, name: string, type: string, size: number, timestamp: string}>> = ref([])
const codes: Ref<Array<{url: string, name: string, image: string}>> = ref([
    {
        url: 'https://github.com/khulqu15/hayagoweb',
        name: 'Hayago Official Website',
        image: 'web.png'
    },
    {
        url: 'https://github.com/khulqu15/hayago.app',
        name: 'Hayago Drone Application',
        image: 'app1.png'
    },
    {
        url: 'https://github.com/khulqu15/smc_drone',
        name: 'Hayago Smart Navigation System',
        image: 'smcdrone.png'
    },
])
const progress: Ref<number> = ref(0);
const nuxtApp = useNuxtApp()
const progressBar: Ref<HTMLElement|null> = ref(null)
const selectedDocument: Ref<number> = ref(0)
const selectedImage: Ref<number> = ref(0)
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0') // months are 0-based in JavaScript
  const year = date.getUTCFullYear()

  return `${day}-${month}-${year}`
}
onMounted(async() => {
    const teamsRef = dbRef(nuxtApp.$database, 'pkm/progress')
    onValue(teamsRef, (snapshot) => {
        progress.value = snapshot.val()
        console.log(progress.value)
    })
    isLoadingContent.value = true
    await getVideos()
    await getDocument()
    await getImage()
    AOS.init()
    isLoadingContent.value = false
})

function getVideos() {
    isLoadingContent.value = true
    videos.value = []
    const videosRef = storageRef(nuxtApp.$storage, 'video')
    listAll(videosRef).then(async (res) => {
        for (const itemRef of res.items) {
            const url = await getDownloadURL(itemRef)
            const metadata = await getMetadata(itemRef)
            videos.value.push({
                url: url,
                name: metadata.name,
                type: metadata.contentType as string,
                size: metadata.size,
                timestamp: metadata.timeCreated,
            })
        }
    videos.value.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }).catch((error) => {
        console.error(error)
    })
    // isLoadingContent.value = false
}

function getDocument() {
    isLoadingContent.value = true
    documents.value = []
    const videosRef = storageRef(nuxtApp.$storage, 'document')
    listAll(videosRef).then(async (res) => {
        for (const itemRef of res.items) {
            const url = await getDownloadURL(itemRef)
            const metadata = await getMetadata(itemRef)
            documents.value.push({
                url: url,
                name: metadata.name,
                type: metadata.contentType as string,
                size: metadata.size,
                timestamp: metadata.timeCreated,
            })
        }
    documents.value.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }).catch((error) => {
        console.error(error)
    })
    // isLoadingContent.value = false
}


function getImage() {
    isLoadingContent.value = true
    images.value = []
    const videosRef = storageRef(nuxtApp.$storage, 'image')
    listAll(videosRef).then(async (res) => {
        for (const itemRef of res.items) {
            const url = await getDownloadURL(itemRef)
            const metadata = await getMetadata(itemRef)
            images.value.push({
                url: url,
                name: metadata.name,
                type: metadata.contentType as string,
                size: metadata.size,
                timestamp: metadata.timeCreated,
            })
        }
    images.value.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }).catch((error) => {
        console.error(error)
    })
    // isLoadingContent.value = false
}

function getDomainName(link: string) {
    const url = new URL(link)
    return url.host
}

function getDomainIcon(link: string) {
    const url = new URL(link)
    const hostname = url.hostname
    return `https://${hostname}/favicon.ico`
}

useSeoMeta({
    title: 'Hayago Progress - Advancing Drone Delivery',
    description: 'Track our journey and the milestones we reach as we revolutionize the delivery industry with autonomous drone technology. Stay updated with Hayago Progress.',
    ogTitle: 'Hayago Progress - Advancing Drone Delivery',
    ogDescription: 'Track our journey and the milestones we reach as we revolutionize the delivery industry with autonomous drone technology. Stay updated with Hayago Progress.',
    // ogImage: 'https://hayago.com/og-image-progress.png',
    // twitterCard: 'summary_large_image',
})
</script>