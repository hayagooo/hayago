<template>
    <div>
        <navigation-layout/>
        <div class="relative z-10">
            <div class="pt-64 pb-20 w-full mx-auto container lg:px-12 px-8 text-center">
                <h1 data-aos="fade-left" class="text-6xl">Pioneers in Drone Delivery</h1>
                <p data-aos="fade-right" class="text-2xl mt-8 text-gray-600">Introducing the Hayago Team</p>
                <div ref="teamsImage" class="lg:mt-16 mt-24 scale-75 top-100 opacity-20 relative transition-all ease-in-out duration-200">
                    <img src="/image/teams.png" alt="Hayago Team" class="lg:w-3/4 w-full inline-block rounded-[3rem]">
                </div>
            </div>
            <div data-aos="fade-up" class="py-12 text-center container lg:px-12 px-8 mx-auto w-full">
                <div class="inline-block lg:px-12 px-8">
                    <div class="lg:flex inline-block gap-x-6 lg:text-left text-center items-center justify-center justify-items-center">
                        <div>
                            <img src="/image/team/dosen.png" alt="Dosen Pembiming" class="w-32 inline-block lg:mb-0 mb-6">
                        </div>
                        <div>
                            <h1 class="lg:text-3xl text-2xl font-bold">NI'AM TAMAMI, S.ST., M.T.</h1>
                            <p class="lg:text-xl mt-3 text-gray-600">Hayago team's academic advisor.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full bg-gray-100 grid grid-cols-1 items-center justify-items-center mx-auto relative z-10 py-16">
                <div class="w-full h-full absolute bottom-0 left-0 bg-gradient-to-b from-white to-gray-100"></div>
                <div ref="teams" class="rounded-2xl lg:min-h-[900vh] md:min-h-[600vh] min-h-[450vh] relative transition-all ease-in-out duration-1000">
                    <div class="text-white font-semibold text-4xl text-center p-12">
                        <h1>Meet Hayagos Team Now</h1>
                    </div>

                    <div ref="teamsContent" class="lg:min-h-[900vh] md:min-h-[600vh] min-h-[450vh] block bg-primary rounded-3xl">
                        <div
                            class="dot bg-white absolute"
                            :class="dot.class"
                            v-for="dot in dots" :key="dot.id"
                            :style="{
                                top: `${dot.top}%`,
                                left: `${dot.left}%`,
                            }"
                        ></div>
                        <div class="min-h-screen flex-col justify-items-center w-full flex sticky items-center overflow-hidden top-0">
                            <div ref="teamsScroll" class="w-auto transition-all duration-600 ease-in-out flex items-center">
                                <div class="w-[100vw] shrink-0 h-[100vh] relative justify-items-center flex lg:px-0 px-12 items-end">
                                    <div class="absolute lg:top-24 md:top-36 top-20 left-0 w-full text-center">
                                        <h1 class="lg:text-[14rem] md:text-[6rem] text-[4rem] font-black text-white">LEADER</h1>
                                    </div>
                                    <div class="absolute lg:bottom-1/4 md:block hidden bottom-5 lg:z-10 z-20 text-right lg:left-[60%] left-auto lg:right-auto md:right-10 right-0">
                                        <div class="name w-96 bg-black/70 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6 lg:max-w-md max-w-xs">
                                            <h1 class="lg:text-4xl text-xl font-bold text-white">PROGRAMMER</h1>
                                            <div class="w-full mt-4 bg-white h-1"></div>
                                            <p class="lg:text-md text-sm mt-4 text-white">Collaboration and creativity will be key to overcoming the unique challenges of drone delivery.</p>
                                        </div>
                                    </div>
                                    <img src="/image/team/ninno.png" class="w-[24rem] mx-auto relative" alt="Leader">
                                    <div class="absolute lg:bottom-1/4 md:bottom-1/4 bottom-10 lg:left-1/4 left-12">
                                        <div class="name lg:w-96 max-w-xs md:bg-primary/30 bg-primary/60 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6">
                                            <h1 class="lg:text-6xl md:text-xl text-4xl font-bold text-white">NINNO</h1>
                                            <p class="lg:text-md text-sm mt-4 text-white">MOHAMMAD KHUSNUL KHULUQ</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-[100vw] shrink-0 h-[100vh] relative justify-items-center flex lg:px-0 px-12 items-end">
                                    <div class="absolute lg:top-24 md:top-36 top-20 left-0 w-full text-center">
                                        <h1 class="lg:text-[14rem] md:text-[5rem] text-[4rem] font-black text-white">ADMIN</h1>
                                    </div>

                                    <div class="absolute lg:bottom-1/4 md:block hidden bottom-5 lg:z-10 z-20 text-right lg:left-[60%] left-auto lg:right-auto right-10">
                                        <div class="name w-96 bg-black/70 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6 lg:max-w-md max-w-xs">
                                            <h1 class="lg:text-4xl text-xl font-bold text-white">ADMINISTRATOR</h1>
                                            <div class="w-full mt-4 bg-white h-1"></div>
                                            <p class="lg:text-md text-sm mt-4 text-white">To lead with strategic operational excellence, enabling the successful realization of our innovative drone delivery project.</p>
                                        </div>
                                    </div>
                                    <img src="/image/team/adell.png" class="w-[24rem] mx-auto relative" alt="Leader">
                                    <div class="absolute lg:bottom-1/4 md:bottom-[27%] bottom-10 left-1/4">
                                        <div class="name lg:w-96 max-w-xs md:bg-primary/30 bg-primary/60 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6">
                                            <h1 class="lg:text-6xl md:text-xl text-4xl font-bold text-white">ADELL</h1>
                                            <p class="lg:text-md text-sm mt-4 text-white">ADELLIA PRATAHTYA</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-[100vw] shrink-0 h-[100vh] relative justify-items-center flex lg:px-0 px-12 items-end">
                                    <div class="absolute lg:top-24 md:top-36 top-20 left-0 w-full text-center">
                                        <h1 class="lg:text-[14rem] md:text-[5rem] text-[4rem] font-black text-white">ENGINEER</h1>
                                    </div>

                                    <div class="absolute lg:bottom-1/4 md:block hidden bottom-5 lg:z-10 z-20 text-right lg:left-[60%] left-auto lg:right-auto right-10">
                                        <div class="name w-96 bg-black/70 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6 lg:max-w-md max-w-xs">
                                            <h1 class="lg:text-4xl text-xl font-bold text-white">ELECTRIC</h1>
                                            <div class="w-full mt-4 bg-white h-1"></div>
                                            <p class="lg:text-md text-sm mt-4 text-white">To pioneer innovative electric solutions that power the future of drone delivery, optimizing efficiency and reliability in every flight.</p>
                                        </div>
                                    </div>
                                    <img src="/image/team/tegar.png" class="w-[25rem] mx-auto relative" alt="Leader">
                                    <div class="absolute lg:bottom-1/4 md:bottom-[27%] bottom-10 left-1/4">
                                        <div class="name lg:w-96 max-w-xs md:bg-primary/30 bg-primary/60 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6">
                                            <h1 class="lg:text-6xl md:text-xl text-4xl font-bold text-white">TEGAR</h1>
                                            <p class="lg:text-md text-sm mt-4 text-white">RAMADHAN TEGAR IMANSYAH</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-[100vw] shrink-0 h-[100vh] relative justify-items-center flex lg:px-0 px-12 items-end">
                                    <div class="absolute lg:top-24 md:top-36 top-20 left-0 w-full text-center">
                                        <h1 class="lg:text-[14rem] md:text-[5rem] text-[4rem] font-black text-white">ENGINEER</h1>
                                    </div>

                                    <div class="absolute lg:bottom-1/4 md:block hidden bottom-5 lg:z-10 z-20 text-right lg:left-[60%] left-auto lg:right-auto right-10">
                                        <div class="name w-96 bg-black/70 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6 lg:max-w-md max-w-xs">
                                            <h1 class="lg:text-4xl text-xl font-bold text-white">MECHANIC</h1>
                                            <div class="w-full mt-4 bg-white h-1"></div>
                                            <p class="lg:text-md text-sm mt-4 text-white">To engineer and innovate with precision and reliability, ensuring the highest standard of performance and safety in our drone delivery solutions.</p>
                                        </div>
                                    </div>
                                    <img src="/image/team/fadil.png" class="w-[24rem] mx-auto relative" alt="Leader">
                                    <div class="absolute lg:bottom-1/4 md:bottom-[27%] bottom-10 left-1/4">
                                        <div class="name lg:w-96 max-w-xs md:bg-primary/30 bg-primary/60 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6">
                                            <h1 class="lg:text-6xl md:text-xl text-4xl font-bold text-white">FADIL</h1>
                                            <p class="lg:text-md text-sm mt-4 text-white">FADHILLAH ILHAM MAULANA</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-[100vw] shrink-0 h-[100vh] relative justify-items-center flex lg:px-0 px-12 items-end">
                                    <div class="absolute lg:top-24 md:top-36 top-20 left-0 w-full text-center">
                                        <h1 class="lg:text-[14rem] md:text-[5rem] text-[4rem] font-black text-white">CONTROL</h1>
                                    </div>

                                    <div class="absolute lg:bottom-1/4 md:block hidden bottom-5 lg:z-10 z-20 text-right lg:left-[60%] left-auto lg:right-auto right-10">
                                        <div class="name w-96 bg-black/70 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6 lg:max-w-md max-w-xs">
                                            <h1 class="lg:text-4xl text-xl font-bold text-white">RESEARCHER</h1>
                                            <div class="w-full mt-4 bg-white h-1"></div>
                                            <p class="lg:text-md text-sm mt-4 text-white">To pioneer advancements in smart navigation technology, driving the success and safety of our drone delivery project.</p>
                                        </div>
                                    </div>
                                    <img src="/image/team/gus.png" class="w-[26rem] mx-auto relative" alt="Leader">
                                    <div class="absolute lg:bottom-1/4 md:bottom-[27%] bottom-10 left-1/4">
                                        <div class="name lg:w-96 max-w-xs md:bg-primary/30 bg-primary/60 rounded-2xl backdrop-blur lg:p-8 md:p-8 p-6">
                                            <h1 class="lg:text-6xl md:text-xl text-4xl font-bold text-white">GUS</h1>
                                            <p class="lg:text-md text-sm mt-4 text-white">MUHAMMAD NUR GUSNAIDI</p>
                                        </div>
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

interface Dot {
  id: number;
  top: number;
  left: number;
  class: string;
}
const dots = ref<Dot[]>([])
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
const teams: Ref<HTMLElement|null> = ref(null)
const teamsContent: Ref<HTMLElement|null> = ref(null)
const teamsScroll: Ref<HTMLElement|null> = ref(null)
const teamsImage: Ref<HTMLElement|null> = ref(null)
const teamsTreshold: Ref<number> = ref(0)

useSeoMeta({
  title: "Meet the Team - Hayago",
  ogTitle: "Meet the Team - Hayago",
  description: "Get to know the innovative minds behind Hayago's revolutionary drone delivery services. Our team is dedicated to reshaping the landscape of logistics.",
  ogDescription: "Get to know the innovative minds behind Hayago's revolutionary drone delivery services. Our team is dedicated to reshaping the landscape of logistics.",
})

onMounted(() => {
    AOS.init();
    window.addEventListener('scroll', updateScroll)
    for (let i = 0; i < 120; i++) {
        const width = random(2, 4)
        const height = random(2, 4)
        dots.value.push({
            id: i,
            top: random(0, 90),
            left: random(0, 90),
            class: `w-${width} h-${height}`,
        })
    }
})
onBeforeMount(() => {
    window.removeEventListener('scroll', updateScroll)
})

function updateScroll() {
    if (teamsImage.value) {
        const rect = teamsImage.value.getBoundingClientRect()
        console.log(rect)
        if (rect.top >= 320) {
            teamsImage.value.classList.add('scale-75', 'opacity-20', 'top-100')
        } else {
            teamsImage.value.classList.remove('scale-75', 'opacity-20', 'top-0')
        }
    }
    if(teams.value) {
        const rect = teams.value.getBoundingClientRect()
        if (rect.top >= 0) teams.value.classList?.add('rounded-[3rem]')
        else teams.value.classList?.remove('rounded-[3rem]')
        
        if (rect.top <= 320) {
            teams.value.classList?.add('w-full')
            teams.value.classList?.remove('w-10/12')
            if (teamsContent.value) {
                if(window.innerWidth > 770) {
                    teamsTreshold.value = 3800
                } else {
                    teamsTreshold.value = 1400
                }
                const scrollY = teamsContent.value.getBoundingClientRect()
                if(teamsScroll.value) teamsScroll.value.style.transform = `translateX(${scrollY.top + teamsTreshold.value}px)`
            }
        } else {
            teams.value.classList?.remove('w-full')
            teams.value.classList?.add('w-10/12')
        }
    }
}

//  if(cases.value && casesContent.value) {
//       const rect = cases.value.getBoundingClientRect()
//       if (rect.top >= 0) {
//         casesContent.value.classList?.add('rounded-3xl')
//       } else {
//         casesContent.value.classList?.remove('rounded-3xl')
//       }
//       if (rect.top <= 320) {
//         cases.value.classList?.add('w-full')
//         cases.value.classList?.remove('w-10/12')
//         if (casesDescription.value) {
//           const scrollY = casesDescription.value.getBoundingClientRect()
//           console.log(window.innerWidth)
//           if(window.innerWidth > 770) {
//             casesTreshold.value = 3800
//           } else {
//             casesTreshold.value = 1000
//           }
//           if(casesHorizontalScroll.value) casesHorizontalScroll.value.style.transform = `translateX(${scrollY.top + casesTreshold.value}px)`
//         }
//       } else {
//         cases.value.classList?.add('w-10/12')
//         cases.value.classList?.remove('w-full')
//       }
//     }
</script>

<style scope>
@keyframes animate {
  0% {
    opacity: 0.5;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.5;
    transform: scale(0.5);
  }
}

.dot {
  animation: animate 2s linear infinite;
}

.dot:nth-child(odd) {
  animation-duration: 3s;
}
</style>