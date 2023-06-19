<template>
  <div class="flex h-screen bg-gray-100">
    <Loading />
    <!-- Sidebar / Navbar -->
    <div class="bg-white h-full md:w-64 md:h-auto overflow-auto transition-all duration-400 md:block md:relative fixed z-20"
    :class="{'w-0': !showNavbar, 'w-3/4': showNavbar}">
      <div class="mt-10 mb-4">
        <div class="mx-6">
            <div class="flex items-center gap-x-3">
                <div class="md:hidden inline-block">
                    <button class="btn bg-gray-200" @click="showNavbar = !showNavbar"><Icon icon="line-md:menu-fold-left" class="text-2xl text-primary" /></button>
                </div>
                <img src="/image/logo_horizontal.png" class="w-3/4 mx-auto md:mb-8" alt="Logo Horizontal">
            </div>
            <a href="#" class="mt-4 py-2.5 px-4 rounded-xl transition duration-200 bg-primary text-white text-gray-600 flex items-center gap-x-3">
                <Icon icon="akar-icons:dashboard" class="text-xl"/>
                Dashboard
            </a>

            <div class="absolute w-full bottom-0 left-0 p-4">
                <button @click="onLogout()" class="mt-4 py-2.5 px-4 rounded-xl w-full transition duration-200 bg-red-600 hover:bg-red-700 text-white text-gray-600 flex items-center gap-x-3">
                    <Icon icon="solar:logout-3-bold" class="text-xl"/>
                    Logout
                </button>
            </div>
        </div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="p-8 flex justify-between items-center">
        <div class="flex items-center gap-x-3">
            <div class="md:hidden inline-block">
                <button class="btn bg-gray-200" @click="showNavbar = !showNavbar"><Icon icon="line-md:menu-fold-right" class="text-2xl text-primary" /></button>
            </div>
            <h2 class="text-xl font-bold text-gray-800">Dashboard</h2>
        </div>
      </header>
      
      <main class="px-8 pb-8 flex-1 overflow-x-hidden overflow-y-auto">
        <div class="bg-white p-5 rounded-xl">
            <h1 class="mt-2 text-xl mb-6 text-gray-700">
                Progress PKM
            </h1>
            <div class="mt-1 flex items-center gap-x-4">
                <input type="number" min="0" max="100" @change="onSliderInput" v-model="sliderValue" class="input w-20 border border-gray-200">
                <input
                    type="range"
                    id="slider"
                    name="slider"
                    min="0"
                    max="100"
                    step="1"
                    @input="onSliderInput"
                    v-model="sliderValue"
                    class="slider grow w-full h-2 rounded-full bg-primary focus:outline-none transition duration-150 ease-in-out"
                    style="background: linear-gradient(90deg, blue var(--slider-percentage), #d1d5db var(--slider-percentage));"
                />
            </div>
        </div>
        <div class="justify-center items-center  gap-3 flex my-6">
            <button class="btn border-0 transition-all" @click="menuSelected = 'image', getImage()"
                :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'image',
            'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'image'}">Image ({{  images.length  }})</button>

            <button class="btn border-0 transition-all" @click="menuSelected = 'documents', getDocument()"
                :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'documents',
            'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'documents'}">Document ({{ documents.length }})</button> 

            <button class="btn border-0 transition-all" @click="menuSelected = 'video', getVideos()"
                :class="{'bg-primary text-white hover:bg-primary active-primary': menuSelected == 'video',
            'bg-gray-200 text-primary hover:bg-gray-200 active-gray-200': menuSelected != 'video'}">Video ({{ videos.length }})</button>
        </div>
        <div>
            <div class="transition-all duration-400 ease-in-out" :class="{'h-full w-full inline-block': menuSelected == 'video', 'h-0 opacity-0 hidden': menuSelected != 'video'}">
                <LoadingContent v-if="isLoadingContent && videos.length <= 0"/>
                <div v-else>
                    <EmptyData v-if="videos.length <= 0" title="The video is currently unavailable" description="We invite you to check back later when it is ready for viewing"/>
                    <div v-else>
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            <label for="input_video" role="button" class="p-6 flex items-center justify-center bg-gray-100 hover:scale-95 border-dashed border-2 border-primary transition-all lg:rounded-[2rem] rounded-[1.5rem]">
                                <div class="space-y-3">
                                    <Icon icon="iconoir:add-media-video" class="mx-auto text-4xl text-primary"/>
                                    <p>Add Video</p>
                                </div>
                            </label>
                            <input @change="onUploadFile" type="file" class="hidden" id="input_video" accept=".mp4">
                            <div v-for="(item, index) in videos" :key="index" class="p-6 bg-white hover:shadow-xl transition-all lg:rounded-[2rem] rounded-[1.5rem] relative">
                                <video :src="item.url" controls class="w-full h-48 rounded-[1rem]"></video>
                                <div class="absolute right-0 top-0 dropdown dropdown-bottom pr-6 pt-6 dropdown-end">
                                    <label tabindex="0" class="btn bg-white border-0 m-1">
                                        <Icon icon="nimbus:ellipsis" class="text-2xl"/>
                                    </label>
                                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a @click="onDeleteFile(index)" class="bg-red-600 text-white hover:bg-red-600 active:bg-red-600">Delete</a></li>
                                    </ul>
                                </div>
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
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            <label for="input_document" role="button" class="p-6 flex items-center justify-center bg-gray-100 hover:scale-95 border-dashed border-2 border-primary transition-all lg:rounded-[2rem] rounded-[1.5rem]">
                                <div class="space-y-3">
                                    <Icon icon="streamline:interface-file-add-alternate-file-common-add" class="mx-auto text-4xl text-primary"/>
                                    <p>Add Document</p>
                                </div>
                            </label>
                            <input @change="onUploadFile" type="file" class="hidden" id="input_document" accept=".pdf">
                            <div v-for="(item, index) in documents" :key="index" @click="selectedDocument = index" class="p-6 bg-white hover:shadow-xl transition-all lg:rounded-[2rem] relative rounded-[1.5rem]">
                                <div class="absolute right-0 top-0 dropdown dropdown-bottom pr-6 pt-6 dropdown-end">
                                    <label tabindex="0" class="btn bg-white border-0 m-1">
                                        <Icon icon="nimbus:ellipsis" class="text-2xl"/>
                                    </label>
                                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a @click="onDeleteFile(index)" class="bg-red-600 text-white hover:bg-red-600 active:bg-red-600">Delete</a></li>
                                    </ul>
                                </div>
                                <label for="document_modal">
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
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            <label for="input_image" role="button" class="p-6 flex items-center justify-center bg-gray-100 hover:scale-95 border-dashed border-2 border-primary transition-all lg:rounded-[2rem] rounded-[1.5rem]">
                                <div class="space-y-3">
                                    <Icon icon="mdi:image-add-outline" class="mx-auto text-4xl text-primary"/>
                                    <p>Add Image</p>
                                </div>
                            </label>
                            <input @change="onUploadFile" type="file" class="hidden" id="input_image" accept="image/*">
                            <div v-for="(item, index) in images" :key="index" @click="selectedImage = index" class="p-6 bg-white hover:shadow-xl transition-all lg:rounded-[2rem] rounded-[1.5rem] relative">
                                <div class="absolute right-0 top-0 dropdown dropdown-bottom pr-6 pt-6 dropdown-end">
                                    <label tabindex="0" class="btn m-1">
                                        <Icon icon="nimbus:ellipsis" class="text-2xl"/>
                                    </label>
                                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a @click="onDeleteFile(index)" class="bg-red-600 text-white hover:bg-red-600 active:bg-red-600">Delete</a></li>
                                    </ul>
                                </div>
                                <label for="image_modal">
                                    <img :src="item.url" :alt="item.name" class="w-full h-48 object-center object-cover rounded-xl">
                                    <div class="flex pt-4 items-center justify-items-between w-full">
                                        <div class="w-full">
                                            <h1 class="font-semibold">{{ item.name }}</h1>
                                            <div class="flex p-4 bg-gray-100 text-gray-600 rounded-xl mt-5 text-sm items-center justify-between w-full">
                                                <div>{{ (item.size / 10240).toFixed(1) }} Kb</div>
                                                <div>{{ formatDate(item.timestamp) }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <input type="checkbox" id="image_modal" class="modal-toggle" />
                    <div class="modal fixed" style="z-index: 70">
                        <div class="modal-box w-11/12 max-w-2xl" v-if="images[selectedImage]">
                            <img :src="images[selectedImage].url" class="w-full rounded-xl">
                            <div class="modal-action">
                                <label for="image_modal" class="btn w-full">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="status_modal" v-model="onUploading" class="modal-toggle" />
            <div class="modal" style="z-index: 70">
                <div class="modal-box max-w-md">
                    <h4><Icon icon="line-md:uploading-loop" class="text-primary text-6xl mb-4 mx-auto"/></h4>
                    <div class="w-full h-4 bg-gray-100 rounded-xl relative">
                        <div class="h-full bg-primary rounded-xl transition-all duration-400" :style="{width: uploadingProgress+'%'}"></div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onBeforeUnmount, onMounted, Ref, ref } from 'vue'
import { onValue, ref as dbRef, set } from 'firebase/database';
import { listAll, getDownloadURL, ref as storageRef, getMetadata, uploadBytesResumable, deleteObject } from 'firebase/storage';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

let sliderValue = ref(0)
let menuSelected = ref('image')
const videos: Ref<Array<{url: string, name: string, type: string, size: number, timestamp: string}>> = ref([])
const documents: Ref<Array<{url: string, name: string, type: string, size: number, timestamp: string}>> = ref([])
const images: Ref<Array<{url: string, name: string, type: string, size: number, timestamp: string}>> = ref([])
const selectedDocument: Ref<number> = ref(0)
const selectedImage: Ref<number> = ref(0)
const isLoadingContent: Ref<boolean> = ref(true)
const onUploading: Ref<boolean> = ref(false)
const uploadingProgress: Ref<number> = ref(0)
const showNavbar: Ref<boolean> = ref(false)
const router = useRouter()

onMounted(() => {
    const progressPKM = dbRef(nuxtApp.$database, 'pkm/progress')
    onValue(progressPKM, (snapshot) => {
        sliderValue.value = snapshot.val()
    })
    getVideos()
    getDocument()
    getImage()
    const unsubscribe = onAuthStateChanged(nuxtApp.$auth, (user) => {
        if (!user) {
            router.push({ path: '/' });
        }
    });

    onBeforeUnmount(() => {
        unsubscribe();
    });
});

const onUploadFile = async (e: any) => {
    const file = e.target.files[0]
    if(!file) return
    let path: string = ''
    if (menuSelected.value === 'video') path = 'video'
    else if (menuSelected.value === 'documents') path = 'document'
    else if (menuSelected.value === 'image') path = 'image'
    const storageReference = storageRef(nuxtApp.$storage, `${path}/${file.name}`)
    const uploadTask = uploadBytesResumable(storageReference, file)
    uploadTask.on('state_changed', (snapshot) => {
        onUploading.value = true
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        uploadingProgress.value = progress
    }, (error) => {
        console.error('Upload failed:', error);
    },
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      console.log('File available at', downloadURL);
      onUploading.value = false
      getImage()
      getDocument()
      getVideos()
    })
}

const onDeleteFile = async (index: number) => {
    let path: string = ''
    let filePath: string = ''
    if (menuSelected.value === 'video') {
        path = 'video'
        filePath = videos.value[index].name
    }
    else if (menuSelected.value === 'documents') {
        path = 'document'
        filePath = documents.value[index].name
    }
    else if (menuSelected.value === 'image') {
        path = 'image'
        filePath = images.value[index].name
    }
    if(filePath !== '' && filePath !== undefined && filePath !== null) {
        const imageRef = storageRef(nuxtApp.$storage, `${path}/${filePath}`)
        deleteObject(imageRef).then(() => {
            console.log("File deleted successfully");
            getVideos()
            getDocument()
            getImage()
        }).catch((error) => {
            console.error("Error deleting file:", error);
        })
    }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const year = date.getUTCFullYear()

  return `${day}-${month}-${year}`
}

const nuxtApp = useNuxtApp()
const onSliderInput = (event: Event) => {
    const progressPKM = dbRef(nuxtApp.$database, 'pkm/progress')
    set(progressPKM, sliderValue.value).catch((error) => {
        console.error("Data could not be saved." + error);
    });
}

async function onLogout() {
    const auth = getAuth();
    try {
        await signOut(auth);
        router.push('/')
    } catch (error) {
        console.error('Sign out Error', error);
    }
}

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
}


function getImage() {
    isLoadingContent.value = true
    images.value = []
    const imageRef = storageRef(nuxtApp.$storage, 'image')
    listAll(imageRef).then(async (res) => {
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
}

useSeoMeta({
    title: 'Admin Dashboard - Hayago Drone Delivery',
    description: 'Admin Dashboard for Hayago Drone Delivery. Manage and oversee all operational aspects of drone delivery services.',
    ogTitle: 'Login - Hayago Drone Delivery',
    ogDescription: 'Login to your Hayago account to experience the ease and efficiency of drone delivery. Join us and revolutionize the way you receive your goods.',
    // ogImage: 'https://hayago.com/og-image-login.png',
    // twitterCard: 'summary_large_image',
})
</script>

<style>
.slider::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  background-color: #2563eb;
  border-radius: 50%;
  transition: background-color 0.15s ease-in-out;
}

.slider::-webkit-slider-thumb:hover {
  background-color: #1d4ed8;
}
</style>