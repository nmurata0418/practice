<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show" >切り替え</button>
    <br><br>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <br>
    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-if="!show" key="hello">こんにちは</p>
    </transition>
    <transition
    enter-to-class=""
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__shakeX"
    leave-to-class=""
    >
      <p v-if="show">hello</p>
    </transition>
    <transition :name="myAnimation" appear>
      <div v-if="show">
      <p>bye</p>
      </div>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/conponentA.vue";
import ComponentB from "./components/conponentB.vue";

export default {
  components: {
    ComponentA,
    ComponentB
  },

  data() {
    return {
      show: true,
      myAnimation: "slide",
      myComponent: "ComponentA"
    };
  },
  methods: {
    beforeEnter (el) {
      el.style.transform = 'scale(0)'},
    enter (el, done) {
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = 'scale(${scale})';
        scale += 0.1
        if ( scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    // afterEnter (el) {
    // },
    // enterCancelled (el) {},
    // beforeLeave (el) {},
    leave (el, done) {
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = 'scale(${scale})';
        scale -= 0.1
        if ( scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 20);},
    // afterLeave (el) {},
    // leaveCancelled (el) {}, *v-showを取る時だけ
  }
};
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: aqua;
  border-radius: 100px;
}


.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
  }
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  }
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-in 1s reverse;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>