<template>
    <div class="max-w-lg mx-auto text-center">
        <img src="/image/progress/notfound.png" class="w-[32rem] mx-auto" alt="Not Found">
        <h4 class="text-3xl font-semibold">{{ title }}</h4>
        <p class="text text-gray-600 mt-5">{{ description }}</p>
    </div>
</template>

<script lang="ts">
export default {
    props: ['title', 'description']
}
</script>