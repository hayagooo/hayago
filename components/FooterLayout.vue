<template>
    <div class="min-h-[80vh] bg-gray-100 relative">
        <div class="container mx-auto p-12">
            <div class="p-8 flex bg-white rounded-3xl items-center justify-items-center justify-between">
                <img src="/image/logo_horizontal.png" class="w-48" alt="Hayago Logo">
                <button class="btn bg-green-100 hover:bg-green-200 active:bg-green-200 text-green-600 rounded-xl border-0">DEMO</button>
            </div>
            <div class="grid grid-cols-4 py-4">
                <div class="py-8">
                    <div class="header">
                        <h3 class="text-primary font-semibold text-xl">Explore</h3>
                        <ul class="space-y-5 mt-4 text-gray-500">
                            <li>Where we fly</li>
                            <li>What we deliver</li>
                            <li>How it works</li>
                            <li>Why drone deliver</li>
                        </ul>
                    </div>
                </div>
                <div class="py-8">
                    <div class="header">
                        <h3 class="text-primary font-semibold text-xl">Team</h3>
                        <ul class="space-y-5 mt-4 text-gray-500">
                            <li>Contact</li>
                            <li>Division</li>
                            <li>Media</li>
                        </ul>
                    </div>
                </div>
                <div class="py-8">
                    <div class="header">
                        <h3 class="text-primary font-semibold text-xl">Resources</h3>
                        <ul class="space-y-5 mt-4 text-gray-500">
                            <li>FAQs</li>
                            <li>Privacy</li>
                            <li>Cookie Policy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-8 space-y-4">
                <span class="text-black/60 text-sm">© 2022 Hayago Drone Delivery. All rights reserved.</span>
                <div class="flex items-center">
                    <Icon icon="mdi:instagram" class="text-black/60 text-2xl"/>
                </div>
            </div>
            <img src="/image/drone_footer.png" alt="Drone Footer" class="w-1/2 absolute bottom-0 right-0">
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

</script>