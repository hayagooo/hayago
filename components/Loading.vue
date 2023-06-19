<template>
    <div v-if="isLoading" class="w-full h-full fixed top-0 z-[60] left-0 flex items-center justify-center bg-white ">
        <div class="text-center space-y-4">
            <img src="/image/logo_horizontal.png" alt="Logo Hayago" class="w-48 inline-block">
        </div>
        <div class="fixed bottom-12 p-4 flex-justify-center w-full">
            <div class="spinner border-t-primary mx-auto"></div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const isLoading = ref(true);
onMounted(() => {
    isLoading.value = false
});

</script>

<style scoped>
.spinner {
  border: 0.5rem solid #f3f3f3; /* Light grey */
  border-top: 0.5rem solid #366EFF; /* Blue */
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>