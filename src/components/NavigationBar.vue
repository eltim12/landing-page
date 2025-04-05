<template>
  <div class="navbar-wrapper d-flex flex-column justify-center align-center pt-6">
    <div class="navbar-content d-flex flex-row justify-space-between align-center">
      <div class="logo-wrapper d-flex align-center">
        <img src="@/assets/logo.png" alt="" :width="isMobile ? '30px' : '40px'" height="100%" />
      </div>
      <div v-if="!isMobile" class="option-wrapper d-flex flex-row justify-space-between align-center">
        <div class="option" @click="goTo('about')">About</div>
        <div class="option" @click="goTo('service')">Services</div>
        <div class="option" @click="goTo('client')">Clients</div>
      </div>
      <div v-else class="d-flex">
        <v-icon class="icon" size="35" color="white" @click="openMenu">mdi-menu</v-icon>
      </div>
    </div>

    <v-bottom-sheet class="botton-nav" v-model="sheet" inset fullscreen>
      <v-sheet class="nav-menu d-flex flex-column align-center">
        <div class="menu-bar py-5">
          <v-btn text icon width="35" height="35" @click="sheet = !sheet">
            <v-icon class="icon" size="35" color="white">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-divider></v-divider>
        <div class="menu-item mb-3" @click="goTo('about')">
          ABOUT
        </div>

        <div class="menu-item mb-3" @click="goTo('service')">
          SERVICES
        </div>

        <div class="menu-item mb-3" @click="goTo('client')">
          CLIENTS
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      windowWidth: window.innerWidth,
      sheet: false
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 600;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth; // Update on resize
    },
    openMenu() {
      this.sheet = true;
    },
    goTo(section) {
      if(this.isMobile) {
        this.sheet = false
      }
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  },
};
</script>


<style lang="scss">
.navbar-wrapper {
  top: 0px;
  left: 0px;
  width: 100%;
  position: fixed;
  z-index: 1000;

  .navbar-content {
    width: 80%;
    position: relative;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.43);
    backdrop-filter: blur(6px);
    padding: 10px 40px;
    border-radius: 40px;

    .logo-wrapper {
      flex: 1;
    }

    .option-wrapper {
      flex: 1;
      max-width: 400px;

      .option {
        font-size: 17px;
        cursor: pointer;
        
      }

      .start-button {
        .v-btn__content {
          text-transform: capitalize !important;
          font-size: 17px;
        }
      }
    }
  }

  .v-sheet {
    font-size: 320px;
    font-weight: 700;
    line-height: 50px;
  }
}
</style>
