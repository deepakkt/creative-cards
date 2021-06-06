<template>
<div class="container">
<div class="row">
  <div class="col-sm-12">
    <nav-header v-on:pageWasChanged="currentPage = $event"></nav-header>

    <div class="text-center italic" id="instructions">
      <div class="row">
        <div class="col-sm-6">
          <p>
            <em>
              &larr; Make changes in the edit card area below:
            </em>
          </p>
        </div>
        <div class="col-sm-6">
          <p>
            <em>
              And they will show on the card! &rarr;
            </em>
          </p>
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in" @enter="enter" appear>
      <keep-alive>
        <component v-bind:is="currentPage"></component>
      </keep-alive>
    </transition>

    <nav-footer>
      <p class="text-center">&copy;Creative Cards</p>
      <nav>
        <ul class="nav justify-content-center">
          <li class="nav-item">
              <a class="nav-link">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link">About Us</a>
          </li>
          <li class="nav-item">
              <a class="nav-link">Contact Us</a>
          </li>
        </ul>
      </nav>
    </nav-footer>
  </div>
</div>
</div>
</template>

<script>
  import FirebaseConfig from "./firebaseConfig.js";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import CardFront from "./components/card/CardFront.vue";
  import CardBack from "./components/card/CardBack.vue";
  import CardInsideLeft from "./components/card/CardInsideLeft.vue";
  import CardInsideRight from "./components/card/CardInsideRight.vue";

  export default {
    components: {
      navHeader: Header,
      navFooter: Footer,
      cardFront: CardFront,
      cardBack: CardBack,
      cardInsideLeft: CardInsideLeft,
      cardInsideRight: CardInsideRight
    },
    data: function() {
      return {
        currentPage: 'cardFront'
      }
    },
    methods: {
      enter: function(el) {
        document.getElementById("instructions").style.display = "none";
      }
    }
  }
</script>

<style>
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #333;
  }

  a {
    cursor: pointer;
  }

    .fade-enter {
      opacity: 0;
    }

    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active {
      transition: opacity .5s;
    }

    .fade-leave-active {
        transition: opacity .5s;
    }

    .scale-enter-active {
        animation: scale-in 0.5s;
    }

    .scale-leave-active {
        animation: scale-out 0.5s;
    }

    @keyframes scale-in {
        0% {transform: scale(0); }
        100% {transform: scale(1); }
    }

    @keyframes scale-out {
        0% {transform: scale(1); }
        100% {transform: scale(0); }
    }
</style>
