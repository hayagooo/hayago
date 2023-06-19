<template>
    <div class="min-h-screen bg-gray-100 min-h-screen relative flex items-center">
        <Loading />
        <div class="w-1/2 lg:inline-block hidden absolute right-0 h-full bg-gray-200"></div>
        <img src="/image/drone1.png" class="absolute lg:inline-block hidden right-0 bottom-0 w-1/2" alt="drone">
        <div class="container mx-auto lg:px-12 px-8 pt-24 relative">
            <NuxtLink to="/"><img src="/image/logo_horizontal.png" class="absolute mx-12 top-0 left-0 w-48" alt="drone"></NuxtLink>
            <div class="max-w-md md:mx-0 mx-auto">
                <h1 class="text-3xl mb-4 font-bold text-primary">Welcome Back</h1>
                <p>Login page for Hayago Drone Delivery administrators. Only authorized personnel can access this page.</p>
                <div v-if="error !== ''" class="w-full mt-4 p-6 rounded bg-red-600 text-white">
                    {{ error }}
                </div>
                <form @submit.prevent="onSubmit()" class="my-6 space-y-2">
                    <div class="form-control">
                        <label for="email">Email</label>
                        <input v-model="email" type="email" required placeholder="eg. example@domain.com" class="input input-bordered w-full max-w-md bg-gray-100" />
                    </div>
                    <div class="form-control">
                        <label for="password" class="inline-block">Password</label>
                        <input v-model="password" :type="showPassword ? 'text':'password'" required class="input input-bordered w-full max-w-md bg-gray-100" />
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">Show Password</span> 
                            <input type="checkbox" v-model="showPassword" class="checkbox" />
                        </label>
                    </div>
                    <button type="submit" class="btn bg-primary hover:bg-primary active:bg-primary w-full text-white">Login Now</button>
                </form>
            </div>
        </div>
    </div>
</template> 

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from "vue-router";

const router = useRouter()
const nuxtApp = useNuxtApp()
const showPassword = ref(false)
const email = ref('')
const password = ref('')
const error = ref('');

onMounted(() => {
    const unsubscribe = onAuthStateChanged(nuxtApp.$auth, (user) => {
        if (user) {
            router.push({ path: '/admin' });
        }
    });

    onBeforeUnmount(() => {
        unsubscribe();
    });
});

async function onSubmit() {
    try {
        await signInWithEmailAndPassword(nuxtApp.$auth, email.value, password.value);
        router.push('/admin')
    } catch (e) {
        error.value = e.code;
    }
}

useSeoMeta({
    title: 'Admin Login - Hayago Drone Delivery',      
    description: 'Login page for Hayago Drone Delivery administrators. Only authorized personnel can access this page.',
    ogTitle: 'Login - Hayago Drone Delivery',
    ogDescription: 'Login to your Hayago account to experience the ease and efficiency of drone delivery. Join us and revolutionize the way you receive your goods.',
    // ogImage: 'https://hayago.com/og-image-login.png',
    // twitterCard: 'summary_large_image',
})
</script>