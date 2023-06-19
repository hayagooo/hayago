<template>
    <div class="overflow-x-hidden">
      <NavigationLayout/>
      <Loading />
      <div v-if="support3D" class="lg:py-32 min-h-screen relative">
        <div ref="render3D"></div>
        <div class="absolute lg:w-1/2 w-full lg:h-full bottom-0 lg:pt-0 pt-48 lg:pb-0 pb-20 right-0 lg:bg-gradient-to-l bg-gradient-to-t from-white to-white/0 px-12 flex items-center">
          <div class="lg:text-right text-center w-full">
            <p class="text-primary mb-4">UNVEILING THE WORLD OF HAYAGO.</p>
            <h3 class="text-5xl">Effortless Drone <br> Delivery Solutions.</h3>
            <div class="flex mt-6 gap-x-3 justify-center lg:justify-end">
              <button class="btn bg-white/0 p-0 border-0">
                <img src="/image/googleplay.png" alt="Download on Google Play" class="h-12">
              </button>
              <button class="btn bg-white/0 p-0 border-0">
                <img src="/image/appstore.png" alt="Download on AppStore" class="h-12">
              </button>
            </div>
            <div class="flex items-center w-full lg:justify-end justify-center">
              <a href="#service" class="animate-bounce mt-8">
                <Icon icon="mingcute:down-line" class="text-primary text-xl"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container lg:py-48 mx-auto min-h-screen grid grid-cols-1 items-center px-8 lg:px-12 justify-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center pb-16" data-aos="fade-right">
          <div class="w-full">
            <img src="/image/drone.png" ref="hayagoImageRef" alt="Hayago Drone Delivery" class="w-full lg:my-0 mt-48 mb-24 inline-block">
          </div>
          <div class="text-center lg:text-left" data-aos="fade-left">
            <p class="text-primary mb-8">UNVEILING THE WORLD OF HAYAGO.</p>
            <h3 class="text-5xl">Effortless Drone Delivery Solutions.</h3>
            <div class="flex mt-6 gap-x-3 justify-center lg:justify-start">
              <button class="btn bg-white/0 p-0 border-0">
                <img src="/image/googleplay.png" alt="Download on Google Play" class="h-12">
              </button>
              <button class="btn bg-white/0 p-0 border-0">
                <img src="/image/appstore.png" alt="Download on AppStore" class="h-12">
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <div id="service" class="overflow-x-hidden container mx-auto px-8 lg:px-12 min-h-screen px-24">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 items-center justify-center space-y-12 lg:space-y-0">
          <div @mouseover="selectFeature(1)" @mouseleave="featureSelected = 0" data-aos="fade-left" class="overflow-hidden cursor-pointer w-full lg:h-[600px] md:h-[500px] h-[500px] bg-green-100 inline-block rounded-2xl relative">
            <div class="absolute transition-all w-full h-16 bg-green-600 bottom-0 left-0"
            :class="{'h-full': featureSelected == 1}"></div>
            <div class="text-center absolute w-full bottom-0 left-0">
              <img src="/image/feature1.png" class="inline-block relative -bottom-16 w-5/12 h-auto transition-all" alt="Hayago Local Feature"
              :class="{'scale-110 bottom-2': featureSelected == 1}">
            </div>
            <div class="p-8 relative text-green-600 transition-all"
            :class="{'text-white': featureSelected == 1}">
              <h3 class="text-2xl font-semibold mb-4">We Provide Immediate Deliveries.</h3>
              <button class="btn bg-green-600/0 hover:bg-green-600/0 active:bg-green-600/0 rounded-2xl border-2 border-green-600 hover:border-green-600 active:border-green-600 text-green-600"
              :class="{'bg-white/0 hover:bg-white/0 active:bg-white/0 border-white hover:border-white active:border-white text-white': featureSelected == 1}">Discover the Spot</button>
            </div>
          </div>
          <div @mouseover="selectFeature(2)" @mouseleave="featureSelected = 0" data-aos="fade-top" class="overflow-hidden cursor-pointer w-full lg:h-[600px] md:h-[500px] h-[500px] bg-primary/20 inline-block rounded-2xl relative">
            <div class="absolute w-full transition-all h-16 bg-primary bottom-0 left-0"
            :class="{'h-full': featureSelected == 2}"></div>
            <div class="text-center absolute w-full bottom-0 left-0">
              <img src="/image/feature2.png" class="inline-block relative -bottom-16 lg:w-full w-10/12 h-auto transition-all" alt="Hayago Local Feature"
              :class="{'scale-110 bottom-2': featureSelected == 2}">
            </div>
            <div class="p-8 relative text-primary transition-all"
            :class="{'text-white': featureSelected == 2}">
              <h3 class="text-2xl font-semibold mb-4">The Mechanism of Service Operation.</h3>
              <button class="btn bg-primary/0 hover:bg-primary/0 active:bg-primary/0 rounded-2xl border-2 border-primary hover:border-primary active:border-primary-600 text-primary"
              :class="{'bg-white/0 hover:bg-white/0 active:bg-white/0 border-white hover:border-white active:border-white text-white': featureSelected == 2}">Uncover the Method</button>
            </div>
          </div>
          <div @mouseover="selectFeature(3)" @mouseleave="featureSelected = 0" data-aos="fade-right" class="overflow-hidden cursor-pointer w-full lg:h-[600px] md:h-[500px] h-[500px] bg-gray-100 inline-block rounded-2xl relative">
            <div class="absolute w-full h-16 transition-all bg-gray-600 bottom-0 left-0"
            :class="{'h-full': featureSelected == 3}"></div>
            <div class="text-center absolute w-full bottom-0 left-0">
              <img src="/image/feature3.png" class="inline-block relative -bottom-16 lg:w-8/12 w-6/12 h-auto transition-all" alt="Hayago Local Feature"
              :class="{'scale-110 bottom-2': featureSelected == 3}">
            </div>
            <div class="p-8 relative transition-all text-gray-600"
            :class="{'text-white': featureSelected == 3}">
              <h3 class="text-2xl font-semibold mb-4">The Case for Hayago Drone Delivery</h3>
              <button class="btn bg-gray-600/0 hover:bg-gray-600/0 active:bg-gray-600/0 rounded-2xl border-2 border-gray-600 hover:border-gray-600 active:border-gray-600 text-gray-600"
              :class="{'bg-white/0 hover:bg-white/0 active:bg-white/0 border-white hover:border-white active:border-white text-white': featureSelected == 3}">Uncover the Method</button>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-center my-24 text-center">
          <div class="lg:max-w-none max-w-lg" data-aos="fade-down">
            <p class="text-primary mb-4">THE GUIDING PURPOSE OF HAYAGO DEVELOPMENT.</p>
            <h6 class="text-xl font-semibold">Our purpose is to uplift the globe by ensuring suburban deliveries are speedily efficient, cost-effective, sustainable, and secure.</h6>
          </div>
        </div>
      </div>
      
      <div class="min-h-screen bg-primary grid grid-cols-1 items-center relative overflow-hidden z-10 py-12">
        <div class="container mx-auto">
          <div class="grid lg:grid-cols-2 grid-cols-1 lg:px-12 px-3 items-center justify-center">
            <div class="w-full relative">
              <div data-aos="fade-left" class="lg:pb-12 pb-0 w-full h-80 relative lg:-top-24">
                <img src="/image/drone1.png" class="w-full transition-all ease-in-out duration-600 absolute lg:top-0 top-auto lg:bottom-auto bottom-0" alt="Drone"
                :class="{'-translate-x-32 opacity-0': productSelected == 2}">
                <img src="/image/app.png" class="w-full transition-all ease-in-out duration-600 absolute lg:top-0 top-auto lg:bottom-auto bottom-0" alt="Drone"
                :class="{'translate-x-32 opacity-0': productSelected == 1}">
              </div>
            </div>
            <div class="lg:px-12 px-6">
              <div data-aos="fade-right">
                <h1 class="text-4xl text-white font-semibold mb-8">{{ productSelected == 1 ? 'Hayago Sky Deliver' : 'Hayago App Shop' }}</h1>
                <p class="text-white" v-if="productSelected == 1">Our quadcopter features four engines, amalgamated GPS and LiDAR for motion detection, and telemetry interaction with the base control station.</p>
                <p class="text-white" v-else>Experience a new level of online shopping with Hayago, offering drone delivery for a swift, efficient, and innovative retail experience.</p>
                <div class="mt-8">
                  <button class="rounded-2xl border-2 p-4 lg: h-auto h-20 btn bg-white/0 hover:bg-white/0 active:bg-white/0 border-white hover:border-white active:border-white text-white">Explore Additional Features</button>
                </div>
                <div class="mt-3">
                  <button class="rounded-2xl border-2 btn bg-white hover:bg-white active:bg-white border-white hover:border-white active:border-white text-primary" @click="selectProduct()">
                    <Icon v-if="productSelected == 2" icon="mingcute:left-line" class="text-xl"/>
                    {{ productSelected == 1 ? 'Application' : 'Copter' }} 
                    <Icon v-if="productSelected == 1" icon="mingcute:right-line" class="text-xl"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="w-full overflow-x-hidden grid grid-cols-1 items-center justify-items-center mx-auto relative z-10 py-16">
        <div id="instantly" ref="instantly" class="rounded-2xl h-[50vh] lg:h-[80vh] overflow-hidden relative transition-all ease-in-out duration-1000">
          <div class="absolute bg-black/40 w-full h-full top-0 left-0 rounded-t-3xl flex items-center justify-center justify-items-center">
            <div class="text-white text-center">
              <h1 class="text-4xl font-bold">We Deliver Instantly</h1>
            </div>
          </div>
          <img src="/image/instanly.png" class="w-full rounded-t-3xl object-cover object-left h-full" alt="Hayago Delivery Instanly">
        </div>
      </div>
  
      <div class="container mx-auto flex lg:px-12 px-8 items-center justify-center">
        <div class="max-w-lg text-center" data-aos="fade-up">
          <h1 class="text-2xl font-semibold">Our solutions are embraced by individuals throughout Indonesia.</h1>
        </div>
      </div>

      <div class="lg:min-h-screen lg:py-4 py-12 overflow-x-hidden relative z-10">
        <div class="absolute left-0 top-0 bg-gradient-to-b from-white to-gray-100 w-full h-full"></div>
        <div id="solution" ref="solution" class="grid lg:gap-x-12 gap-x-4 scale-100 py-12 grid-cols-4 items-center justify-center relative">
          <div>
            <div id="tegar" ref="tegar" class="rounded-3xl overflow-hidden relative lg:h-80 h-60 w-full scale-75 opacity-50 top-32 -left-32 hover:scale-[0.7] transition-all cursor-pointer ease-in-out duration-1000" @mouseleave="solutionSelected = 0" @mouseover="solutionSelected = 1">
              <div class="bg-black/40 transition-all ease-in-out duration-900 lg:flex hidden items-center lg:p-12 p-4 gap-x-6 w-full h-full absolute top-0 left-0" :class="{'lg:pt-32 pt-20': solutionSelected == 1, 'pt-12': solutionSelected != 1}">
                <h2 class="text-white font-semibold lg:text-3xl text-xl">Kelapa Sawit Tegar, Malang</h2>
                <h1 class="text-white lg:text-4xl text-xl"><Icon icon="mingcute:right-fill" /></h1>
              </div>
              <img src="/image/tegar.png" alt="Tegar" class="h-full w-full object-center object-cover">
            </div>
          </div>
          <div class="col-span-2 lg:space-y-12 space-y-4">
            <div id="fadil" ref="fadil" class="rounded-3xl overflow-hidden relative lg:h-80 h-60 w-full scale-75 opacity-50 top-32 hover:scale-[0.7] transition-all cursor-pointer ease-in-out duration-1000" @mouseleave="solutionSelected = 0" @mouseover="solutionSelected = 2">
              <div class="bg-black/40 transition-all ease-in-out duration-900 lg:flex hidden items-center p-12 gap-x-6 w-full h-full absolute top-0 left-0" :class="{'pl-24': solutionSelected == 2, 'pl-12': solutionSelected != 2}">
                <h2 class="text-white font-semibold text-3xl">Pabrik Tekstil Fadil, <br> Bojonegoro</h2>
                <h1 class="text-white text-4xl"><Icon icon="mingcute:right-fill" /></h1>
              </div>
              <img src="/image/fadil.png" alt="Fadil" class="h-full w-full object-center object-cover">
            </div>
            <div id="gus" ref="gus" class="rounded-3xl overflow-hidden relative lg:h-80 h-60 w-full scale-75 opacity-50 top-32 hover:scale-[0.7] transition-all cursor-pointer ease-in-out duration-1000" @mouseleave="solutionSelected = 0" @mouseover="solutionSelected = 3">
              <div class="bg-black/40 transition-all ease-in-out duration-900 lg:flex hidden items-center p-12 gap-x-6 w-full h-full absolute top-0 left-0" :class="{'pl-24': solutionSelected == 3, 'pl-12': solutionSelected != 3}">
                <h2 class="text-white font-semibold text-3xl">Pentol Mas Gus, <br> Gresik</h2>
                <h1 class="text-white text-4xl"><Icon icon="mingcute:right-fill" /></h1>
              </div>
              <img src="/image/gus.png" alt="Gus" class="h-full w-full object-center object-cover">
            </div>
          </div>
          <div>
            <div id="adell" ref="adell" class="rounded-3xl overflow-hidden relative lg:h-80 h-60 w-full scale-75 opacity-50 top-32 -right-32 hover:scale-[0.7] transition-all cursor-pointer ease-in-out duration-1000" @mouseleave="solutionSelected = 0" @mouseover="solutionSelected = 4">
              <div class="bg-black/40 transition-all ease-in-out duration-900 lg:flex hidden items-center p-12 gap-x-6 w-full h-full absolute top-0 left-0" :class="{'pt-32': solutionSelected == 4, 'pt-12': solutionSelected != 1}">
                <h2 class="text-white font-semibold text-3xl">Logistik KRAI Adell, PENS</h2>
                <h1 class="text-white text-4xl"><Icon icon="mingcute:right-fill" /></h1>
              </div>
              <img src="/image/adell.png" alt="Adell" class="h-full w-full object-center object-cover">
            </div>
          </div>
        </div>
      </div>gltf.scene.rotation.x = THREE.MathUtils.degToRad(45);
  
      <div class="min-h-screen overflow-hidden relative z-10 bg-gray-100">
        <div class="container mx-auto flex items-center justify-center">
          <div class="max-w-lg text-center px-8" data-aos="fade-up">
            <h1 class="text-4xl font-semibold mb-12">Understanding the Mechanism</h1>
          </div>
        </div>
        <div class="grid grid-cols-1 mt-12 lg:justify-center justify-start lg:justify-items-center justify-items-start h-full relative">
          <div ref="procedureScroll" class="w-2 h-full bg-gray-400 top-0 lg:left-1/2 left-4 absolute">
            <div class="w-2 h-8 bg-gradient-to-t from-gray-400/0 to-gray-100 top-0 left-0 absolute z-10"></div>
            <div ref="procedureBar" class="w-2 h-1/2 bg-primary transition-all ease-in-out duration-400 top-0 left-0 absolute"></div>
            <div class="w-2 h-8 bg-gradient-to-b from-gray-400/0 to-gray-100 bottom-0 left-0 absolute"></div>
          </div>
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-20 items-center lg:justify-center justify-start min-h-[30vh] lg:px-0 px-12">
            <div class="lg:text-right text-left pl-4 mb-8 relative max-w-md mt-24">
              <div ref="procedurePoint1" class="absolute lg:-right-[3.8rem] right-auto lg:left-auto -left-[2.7rem] pl-3 w-8 h-8 bg-gray-400 rounded-full border-8 border-gray-100"></div>
              <h4 class="text-2xl font-semibold">Download the Application</h4>
            </div>
            <div class="text-left px-4">
              <p>Available on iOS and Android</p>
              <div class="flex items-center mt-3 gap-x-4">
                <img src="/image/googleplay.png" alt="Hayago On PlayStore" class="lg:w-36 w-28">
                <img src="/image/appstore.png" alt="Hayago On AppStore" class="lg:w-36 w-28">
              </div>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-20 items-center lg:justify-center justify-start min-h-[35vh] lg:px-0 px-12 pt-28">
            <div class="lg:text-right text-left pl-4 mb-8 relative max-w-md">
              <div ref="procedurePoint2" class="absolute lg:-right-[3.8rem] right-auto lg:left-auto -left-[2.7rem] pl-3 w-8 h-8 bg-gray-400 rounded-full border-8 border-gray-100"></div>
              <h4 class="text-2xl font-semibold">Order</h4>
              <p>Choose what you want and checkout</p>
            </div>
            <div class="text-left px-4">
              <div class="flex items-center mt-3 gap-x-4">
                <img src="/image/order1.png" alt="Hayago Order App" class="lg:w-36 w-28 rounded-xl">
                <img src="/image/order2.png" alt="Hayago Shop App" class="lg:w-36 w-28 rounded-xl">
              </div>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-20 items-center lg:justify-center justify-start min-h-[35vh] lg:px-0 px-12 pt-28">
            <div class="lg:text-right text-left pl-4 mb-8 relative max-w-md">
              <div ref="procedurePoint3" class="absolute lg:-right-[3.8rem] right-auto lg:left-auto -left-[2.7rem] pl-3 w-8 h-8 bg-gray-400 rounded-full border-8 border-gray-100"></div>
              <h4 class="text-2xl font-semibold">Pack</h4>
              <p>The store will securely pack up your order and get it ready for flying</p>
            </div>
            <div class="text-left px-4">
              <img src="/image/pack.png" alt="Hayago Packaging" class="w-80 rounded-xl">
            </div>
          </div>
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-20 items-center lg:justify-center justify-start min-h-[35vh] lg:px-0 px-12 pt-28">
            <div class="lg:text-right text-left pl-4 mb-8 relative max-w-md">
              <div ref="procedurePoint4" class="absolute lg:-right-[3.8rem] right-auto lg:left-auto -left-[2.7rem] pl-3 w-8 h-8 bg-gray-400 rounded-full border-8 border-gray-100"></div>
              <h4 class="text-2xl font-semibold">Fly & Delivery</h4>
              <p>Hayago collects your order, takes flight, and delivers directly to you. Upon arrival, our drone safely deposits your package</p>
            </div>
            <div class="text-left px-4">
              <img src="/image/flydeliver.png" alt="Hayago Delivery" class="w-80 rounded-xl">
            </div>
          </div>
        </div>
      </div>
  
      <div class="w-full bg-gray-100 grid grid-cols-1 items-center justify-items-center mx-auto relative z-10 py-16">
        <div id="cases" ref="cases" class="rounded-2xl lg:min-h-[900vh] md:min-h-[600vh] min-h-[400vh] relative transition-all ease-in-out duration-1000">
          <div ref="casesContent" class="relative bg-[#101124] w-full top-0 left-0 rounded-3xl min-h-screen" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;">
            <div class="text-white text-center py-24">
              <h1 class="text-4xl font-bold">The Case for Hayago Drone Delivery</h1>
            </div>
            <div ref="casesDescription" class="block lg:min-h-[1200vh] md:min-h-[600vh] min-h-[400vh]">
              <div class="min-h-screen flex-col justify-items-center w-full flex sticky items-center overflow-hidden top-0">
                <!-- <div ref="caseHorizontalScroll" class="w-auto flex" style="will-change: transform; transform: translate3d(10.4616%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"> -->
                <div ref="casesHorizontalScroll" class="w-auto transition-all duration-600 ease-in-out flex items-center lg:pt-16 md:pt-16 pt-24 -translate-x-60">
                  <div class="w-[100vw] shrink-0 flex-col justify-items-center items-center flex lg:px-0 px-12">
                    <div class="mx-auto relative text-center">
                      <img src="/image/map1.png" class="lg:w-1/2 md:w-1/4 w-3/4 w-full inline-block" alt="map">
                    </div>
                    <div class="mx-auto relative text-white text-center">
                      <h2 class="text-4xl font-bold mb-3">Quieter</h2>
                      <p>When delivering, our drones ascend high in the sky resulting in less noise pollution than cars on the ground</p>
                    </div>
                  </div>
                  <div class="pt-0 w-[100vw] shrink-0 flex-col justify-items-center items-center flex lg:px-0 px-12">
                    <div class="mx-auto relative text-center">
                      <img src="/image/drone2.png" class="lg:w-1/2 md:w-3/4 w-full inline-block" alt="map">
                    </div>
                    <div class="mx-auto relative text-white text-center">
                      <h2 class="text-4xl font-bold mb-3">Faster</h2>
                      <p>When delivering, our drones ascend high in the sky resulting in less noise pollution than cars on the ground</p>
                    </div>
                  </div>
                  <div class="pt-0 w-[100vw] shrink-0 flex-col justify-items-center items-center flex lg:px-0 px-12">
                    <div class="mx-auto relative text-center">
                      <img src="/image/cargo.png" class="lg:w-1/2 md:w-3/4 w-full inline-block" alt="map">
                    </div>
                    <div class="mx-auto relative text-white text-center">
                      <h2 class="text-4xl font-bold mb-3">Enhanced Safety</h2>
                      <p>With no delivery drivers, we reduce vehicles on the road, thus minimizing accidents.</p>
                    </div>
                  </div>
                  <div class="pt-0 w-[100vw] shrink-0 flex-col justify-items-center items-center flex lg:px-0 px-12">
                    <div class="mx-auto relative text-center">
                      <img src="/image/tree.png" class="lg:w-1/2 md:w-3/4 w-full inline-block" alt="map">
                    </div>
                    <div class="mx-auto relative text-white text-center">
                      <h2 class="text-4xl font-bold mb-3">More Sustainable</h2>
                      <p>Our all-electric, zero-emission drones ensure your shopping experience is environmentally friendly.</p>
                    </div>
                  </div>
                  <div class="pt-0 w-[100vw] shrink-0 flex-col justify-items-center items-center flex lg:px-0 px-12">
                    <div class="mx-auto relative text-center">
                      <img src="/image/door.png" class="lg:w-1/2 md:w-3/4 w-full inline-block" alt="map">
                    </div>
                    <div class="mx-auto relative text-white text-center">
                      <h2 class="text-4xl font-bold mb-3">Designed with Privacy in Mind</h2>
                      <p>Our drones prioritize your privacy by not recording videos or storing sensitive customer data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full relative bg-gray-100 min-h-screen z-20">
        <div class="container mx-auto lg:px-12 p-8">
          <div class="flex lg:max-w-none max-w-lg mx-auto items-center justify-center">
            <div class="text-center pt-24">
              <h2 class="lg:text-6xl text-4xl text-gray-700 font-semibold mb-8">NOW DEVELOPMENT in <span class="text-primary">INDONESIA</span></h2>
              <p class="text-gray-500 text-2xl">expanding globally soon!</p>
              <div class="inline-block text-white bg-primary w-full p-6 mt-12 rounded-2xl">We have successfully conducted test flights for drone delivery in Indonesia.</div>
            </div>
          </div>
          <div class="relative w-full py-12">
            <iframe
              class="w-full mt-24 lg:h-[45rem] h-[15rem]"
              :src="videoUrl"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div id="faq" class="py-12 space-y-8">
            <div @click="faqSelected = faqSelected == 1 ? 0 : 1" class="border-b-2 border-gray-200 cursor-pointer">
              <div class="flex justify-between items-center py-4 text-gray-800">
                <div>
                  <h1 class="transition-all text-2xl font-semibold" :class="{'text-primary': faqSelected == 1}">Is it secure ?</h1>
                </div>
                <div>
                  <Icon icon="uil:plus" class="text-2xl transition-all" :class="{'rotate-45': faqSelected == 1}"/>
                </div>
              </div>
              <div class="py-6 space-y-4 text-justify text-gray-600 transition-all ease-in-out" :class="{'h-0 opacity-0': faqSelected != 1, 'h-auto opacity-100': faqSelected == 1}">
                <p>The drone delivery service is highly secure with multiple safety measures implemented within the Hayago drone to tackle any potential issues. If there's a total flight failure, which is exceptionally rare, the drone is equipped with a parachute that ensures a soft landing.</p>
                <p>Furthermore, Hayago has established extra safety precautions for this test. In case of any suspected issue, a licensed and well-trained pilot can intervene and take over the drone controls at any moment. Trained observers are positioned along the path and at the delivery point, maintaining continuous radio communication with the pilot and backup pilot.</p>
              </div>
            </div>
            <div @click="faqSelected = faqSelected == 2 ? 0 : 2" class="border-b-2 border-gray-200 cursor-pointer">
              <div class="flex justify-between items-center py-4 text-gray-800">
                <div>
                  <h1 class="transition-all text-2xl font-semibold" :class="{'text-primary': faqSelected == 2}">Does it create a lot of noise?</h1>
                </div>
                <div>
                  <Icon icon="uil:plus" class="text-2xl transition-all" :class="{'rotate-45': faqSelected == 2}"/>
                </div>
              </div>
              <div class="py-6 space-y-4 text-justify text-gray-600 transition-all ease-in-out" :class="{'h-0 opacity-0': faqSelected != 2, 'h-auto opacity-100': faqSelected == 2}">
                <p>The drone used by Hayago is significantly quieter than hobbyist drones that you might have encountered or used personally. It flies at an altitude of 60m, at which point it becomes inaudible. Based on feedback from previous trial customers, almost all respondents felt that the noise produced by the drone was minimally intrusive. In fact, if you are inside a building, you wouldn't be able to hear the drones at all.</p>
              </div>
            </div>
            <div @click="faqSelected = faqSelected == 3 ? 0 : 3" class="border-b-2 border-gray-200 cursor-pointer">
              <div class="flex justify-between items-center py-4 text-gray-800">
                <div>
                  <h1 class="transition-all text-2xl font-semibold" :class="{'text-primary': faqSelected == 3}">What is the duration for my delivery?</h1>
                </div>
                <div>
                  <Icon icon="uil:plus" class="text-2xl transition-all" :class="{'rotate-45': faqSelected == 3}"/>
                </div>
              </div>
              <div class="py-6 space-y-4 text-justify text-gray-600 transition-all ease-in-out" :class="{'h-0 opacity-0': faqSelected != 3, 'h-auto opacity-100': faqSelected == 3}">
                <p>The actual drone flight should not exceed 2 to 3 minutes. However, the waiting time could vary based on your specific order and the quantity of orders lined up before yours during peak hours. Using the provided link, you can track your order's progress and will be notified the instant the drone embarks with your order!</p>
              </div>
            </div>
            <div @click="faqSelected = faqSelected == 4 ? 0 : 4" class="border-b-2 border-gray-200 cursor-pointer">
              <div class="flex justify-between items-center py-4 text-gray-800">
                <div>
                  <h1 class="transition-all text-2xl font-semibold" :class="{'text-primary': faqSelected == 4}">What's the method of payment?</h1>
                </div>
                <div>
                  <Icon icon="uil:plus" class="text-2xl transition-all" :class="{'rotate-45': faqSelected == 4}"/>
                </div>
              </div>
              <div class="py-6 space-y-4 text-justify text-gray-600 transition-all ease-in-out" :class="{'h-0 opacity-0': faqSelected != 4, 'h-auto opacity-100': faqSelected == 4}">
                <p>We accept payments through your debit or credit card during the time of your order placement. Please note, cash transactions aren't facilitated, and it goes without saying, our drones don't anticipate gratuities!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLayout/> 
    </div>
  </template>
  
  
<script setup lang="ts">
  import { ref, Ref, onMounted, onUnmounted, computed, onUpdated, watch, onBeforeUnmount } from 'vue'
  import { Icon } from '@iconify/vue'
  import AOS from 'aos'
  import 'aos/dist/aos.css'
  import 'animate.css'
  import { useRouter } from 'vue-router'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

  useSeoMeta({
    title: 'Hayago - Revolutionizing Drone Delivery',
    ogTitle: 'Hayago - Revolutionizing Drone Delivery',
    description: 'Welcome to Hayago - your gateway to swift, efficient, and innovative drone delivery services. Explore our site to learn more about our revolutionary approach to logistics.',
    ogDescription: 'Welcome to Hayago - your gateway to swift, efficient, and innovative drone delivery services. Explore our site to learn more about our revolutionary approach to logistics.',
  })
  
  const videoId = 'cgCqJ29TgJM'
  const videoUrl = computed(() => `https://www.youtube.com/embed/${videoId}`)
  const router = useRouter()
  const instantly: Ref<HTMLElement|null> = ref(null)
  const scrollPos: Ref<number> = ref(0)
  const cases: Ref<HTMLElement|null> = ref(null)
  const casesContent: Ref<HTMLElement|null> = ref(null)
  const casesDescription: Ref<HTMLElement|null> = ref(null)
  const casesHorizontalScroll: Ref<HTMLElement|null> = ref(null)
  const casesTreshold: Ref<number> = ref(0)
  const procedureScroll: Ref<HTMLElement|null> = ref(null)
  const procedureBar: Ref<HTMLElement|null> = ref(null)
  const procedurePoint1: Ref<HTMLElement|null> = ref(null)
  const procedurePoint2: Ref<HTMLElement|null> = ref(null)
  const procedurePoint3: Ref<HTMLElement|null> = ref(null)
  const procedurePoint4: Ref<HTMLElement|null> = ref(null)
  const adell: Ref<HTMLElement|null> = ref(null)
  const fadil: Ref<HTMLElement|null> = ref(null)
  const solution: Ref<HTMLElement|null> = ref(null)
  const gus: Ref<HTMLElement|null> = ref(null)
  const tegar: Ref<HTMLElement|null> = ref(null)
  const featureSelected: Ref<number> = ref(0)
  const productSelected: Ref<number> = ref(1)
  const solutionSelected: Ref<number> = ref(0)
  const faqSelected: Ref<number> = ref(0)
  const support3D: Ref<boolean> = ref(true)
  const render3D: Ref<HTMLElement|null> = ref(null)
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let loader: GLTFLoader;
  let mesh: THREE.Mesh;
  let controls: OrbitControls;
  const isWebGLAvailable = () => {
    try {
        const canvas = document.createElement('canvas');
        return !!(
            window.WebGLRenderingContext && 
            (canvas.getContext('webgl') || 
            canvas.getContext('experimental-webgl'))
        );
    } catch (e) {
        return false;
    }
  }
  onMounted(() => {
    window.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", handleResize)
    AOS.init();
    if(!isWebGLAvailable()) support3D.value = false
    if(support3D.value) {
      scene = new THREE.Scene()
      scene.add(new THREE.HemisphereLight(0xffffff, 1.5));
      // camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000)
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      // renderer.setClearColor(0xffffff);
      renderer.setSize(window.innerWidth, window.innerHeight);
      controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.rotateSpeed = 0.09
      controls.dampingFactor = 0.1
      controls.enableZoom = true
      controls.autoRotate = true
      controls.autoRotateSpeed = .75
      loader = new GLTFLoader()
      if(render3D.value) render3D.value.appendChild(renderer.domElement)
      loader.load('/3d/drone.glb', (gltf: any) => {
        gltf.scene.rotation.x = THREE.MathUtils.degToRad(-75);
        scene.add(gltf.scene);
        gltf.scene.traverse((object: any) => {
          console.log('object color')
          if (!object.isMesh) return;
          console.log(object.material.color.r)
          if (object.isMesh && object.material && (object.material.color.r >= 0.50 && object.material.color.r < 0.65)) {
            object.material.color.set('blue');
          }
          object.geometry.computeBoundingBox();
          let middle = new THREE.Vector3();
          object.geometry.boundingBox.getCenter(middle);
          let largestDimension = Math.max(
            object.geometry.boundingBox.max.x,
            object.geometry.boundingBox.max.y,
            object.geometry.boundingBox.max.z
          );
          camera.position.z = largestDimension * 0.2;
        });
      });
      animate()
    }
  })

  const animate = () => {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  onBeforeUnmount(() => {
    controls.dispose()
    renderer.dispose()
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", checkScroll)
  })
  
  function onScrollContent(e: Event) {
    scrollPos.value = window.scrollX
  }
  
  function handleResize() {
    if(!window.WebGLRenderingContext) support3D.value = false
  }

  function checkScroll() {
    if(procedureScroll.value) {
      const rect = procedureScroll.value.getBoundingClientRect()
      if(procedureBar.value) procedureBar.value.style.height = `${-rect.top + 300}px`
    }
    if(procedurePoint1.value) {
      const procedurRect = procedurePoint1.value.getBoundingClientRect()
      if(procedurRect.top <= 300) {
        procedurePoint1.value.classList.remove('bg-gray-400')
        procedurePoint1.value.classList.add('bg-primary')
      } else {
        procedurePoint1.value.classList.add('bg-gray-400')
        procedurePoint1.value.classList.remove('bg-primary')
      }
    }
    if(procedurePoint2.value) {
      const procedurRect = procedurePoint2.value.getBoundingClientRect()
      if(procedurRect.top <= 300) {
        procedurePoint2.value.classList.remove('bg-gray-400')
        procedurePoint2.value.classList.add('bg-primary')
      } else {
        procedurePoint2.value.classList.add('bg-gray-400')
        procedurePoint2.value.classList.remove('bg-primary')
      }
    }
    if(procedurePoint3.value) {
      const procedurRect = procedurePoint3.value.getBoundingClientRect()
      if(procedurRect.top <= 300) {
        procedurePoint3.value.classList.remove('bg-gray-400')
        procedurePoint3.value.classList.add('bg-primary')
      } else {
        procedurePoint3.value.classList.add('bg-gray-400')
        procedurePoint3.value.classList.remove('bg-primary')
      }
    }
    if(procedurePoint4.value) {
      const procedurRect = procedurePoint4.value.getBoundingClientRect()
      if(procedurRect.top <= 300) { 
        procedurePoint4.value.classList.remove('bg-gray-400')
        procedurePoint4.value.classList.add('bg-primary')
      } else {
        procedurePoint4.value.classList.add('bg-gray-400')
        procedurePoint4.value.classList.remove('bg-primary')
      }
    }
  
    if(instantly.value) {
      const rect = instantly.value.getBoundingClientRect()
      if (rect.top <= 320 && rect.bottom >= 0) {
        instantly.value.classList?.add('w-full', 'rounded-t-2xl')
        instantly.value.classList?.remove('rounded-2xl', 'w-10/12')
      } else {
        instantly.value.classList?.add('w-10/12', 'rounded-2xl')
        instantly.value.classList?.remove('rounded-t-2xl', 'w-full')
      }
    }
  
    if(cases.value && casesContent.value) {
      const rect = cases.value.getBoundingClientRect()
      if (rect.top >= 0) {
        casesContent.value.classList?.add('rounded-3xl')
      } else {
        casesContent.value.classList?.remove('rounded-3xl')
      }
      if (rect.top <= 320) {
        cases.value.classList?.add('w-full')
        cases.value.classList?.remove('w-10/12')
        if (casesDescription.value) {
          const scrollY = casesDescription.value.getBoundingClientRect()
          console.log(window.innerWidth)
          if(window.innerWidth > 770) {
            casesTreshold.value = 3800
          } else {
            casesTreshold.value = 1000
          }
          if(casesHorizontalScroll.value) casesHorizontalScroll.value.style.transform = `translateX(${scrollY.top + casesTreshold.value}px)`
        }
      } else {
        cases.value.classList?.add('w-10/12')
        cases.value.classList?.remove('w-full')
      }
    }
  
    if(solution.value) {
      const rect = solution.value.getBoundingClientRect()
      if (rect.top <= 320) {
        if(adell.value) {
          adell.value.classList?.remove('scale-75', 'opacity-50', 'top-32', '-right-32', 'hover:scale-[0.7]')
          adell.value.classList?.add('hover:scale-95', 'right-0', 'top-0', 'opacity-100', 'hover:scale-95')
        }
        if(tegar.value) {
          tegar.value.classList?.remove('scale-75', 'opacity-50', 'top-32', '-left-32', 'hover:scale-[0.7]')
          tegar.value.classList?.add('hover:scale-95', 'left-0', 'top-0', 'opacity-100', 'hover:scale-95')
        }
        if(gus.value) {
          gus.value.classList?.remove('scale-75', 'opacity-50', 'top-32', 'hover:scale-[0.7]')
          gus.value.classList?.add('hover:scale-95', 'top-0', 'opacity-100', 'hover:scale-95')
        }
        if(fadil.value) {
          fadil.value.classList?.remove('scale-75', 'opacity-50', 'top-32', 'hover:scale-[0.7]')
          fadil.value.classList?.add('hover:scale-95', 'top-0', 'opacity-100', 'hover:scale-95')
        }
      } else {
        if(adell.value) {
          adell.value.classList?.add('scale-75', 'opacity-50', 'top-32', '-right-32', 'hover:scale-[0.7]')
          adell.value.classList?.remove('hover:scale-95', 'right-0', 'top-0', 'opacity-100', 'hover:scale-95')
        }
        if(tegar.value) {
          tegar.value.classList?.add('scale-75', 'opacity-50', 'top-32', '-left-32', 'hover:scale-[0.7]')
          tegar.value.classList?.remove('hover:scale-95', 'left-0', 'top-0', 'opacity-100', 'hover:scale-95')
        }
        if(gus.value) {
          gus.value.classList?.add('scale-75', 'opacity-50', 'top-32', 'hover:scale-[0.7]')
          gus.value.classList?.remove('hover:scale-95', 'top-0', 'opacity-100', 'hover:scale-95')
        }
        if(fadil.value) {
          fadil.value.classList?.add('scale-75', 'opacity-50', 'top-32', 'hover:scale-[0.7]')
          fadil.value.classList?.remove('hover:scale-95', 'top-0', 'opacity-100', 'hover:scale-95')
        }
      }
    }
  }
  
  function selectFeature(value: number): void {
    featureSelected.value = value
  }
  
  function selectProduct(): void {
    if (productSelected.value == 1) productSelected.value = 2
    else productSelected.value = 1
  }
  </script>
  

  <style>
  p {
    color: #aaaaaa
  }
</style>