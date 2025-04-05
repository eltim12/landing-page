<template>
  <div class="home-page" id="home-page">
    <section class="banner-section">
      <GradientBackgroundLeft />
      <GradientBackgroundRight />
      <div class="banner-content d-flex flex-column align-center justify-center" ref="scrollContainer">
        <div class="text my-10">
          <div class="heading text-mono" data-aos="fade-left" data-aos-delay="300">
            Crafting Digital Experiences <br />
            Beyond Imaginations
          </div>
          <div class="subheading mt-5" data-aos="fade-right" data-aos-delay="800">
            We blend creativity, technology,
            <br v-if="isMobile">
            and strategy to drive your brand's success.
          </div>
        </div>
        <CustomButton :text="'Start a project'" data-aos="fade-up" data-aos-delay="1000"/>
      </div>

      <div class="field-section d-flex flex-column" id="about">
        <div class="description-wrapper d-flex flex-row justify-space-between">
          <v-row>
            <v-col cols="12">
              <div class="description" data-aos="fade-left" data-aos-delay="300">
                Aliquam commodo bibendum nisi et porttitor. Mauris dignissim, nulla eu pellentesque laoreet, erat justo dignissim velit, in sodales libero nulla nec nulla. Sed ullamcorper, eros blandit porttitor consequat, quam est tristique libero.
                <br><br>
              </div>
              <div class="description-small" data-aos="fade-left" data-aos-delay="800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet vehicula arcu, a tincidunt velit. Nullam finibus sit amet nibh non tempus. Cras odio urna, blandit id sollicitudin eget, vestibulum ac augue. Integer viverra hendrerit tortor, vel congue diam feugiat in. Pellentesque nisl ex, interdum vitae turpis eu, tincidunt laoreet dui. Aliquam erat volutpat. Nam porttitor, elit at volutpat elementum, sapien dui lacinia mi, in faucibus ex sapien a odio. Maecenas dapibus euismod hendrerit. Mauris gravida arcu sapien, eget euismod est faucibus sollicitudin. Donec fermentum, est eu pharetra semper, arcu lacus egestas nisl, at volutpat lacus arcu in ipsum. Aliquam ac mi urna. Integer hendrerit aliquam mi, ac iaculis lectus ullamcorper at. Proin eu risus risus. Nam sit amet lectus eget ligula malesuada ornare eu non sapien. Praesent aliquet sed nibh vitae malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="approach-section d-flex flex-column justify-center align-center">
        <GradientBackgroundRight />
        <!-- <GradientBackgroundLeft /> -->
        <div class="approach-content">
          <v-row>
            <v-col cols="12">
              <div class="heading text-mono mb-3" data-aos="fade-left" data-aos-delay="300">Approach</div>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" data-aos="fade-left" data-aos-delay="600">
                  <div class="subheading my-3">Consulting</div>
                  <div class="text">
                    To better understand your goals, design preferences, and
                    target audience, we'll be asking you a series of questions.
                    This initial step is crucial in establishing a strong
                    foundation for our collaboration.
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" data-aos="fade-left" data-aos-delay="700">
                  <div class="subheading my-3">Colaborative Review</div>
                  <div class="text">
                    During the design phase, we invite our clients to review and
                    provide feedback. This collaborative approach ensures
                    optimal structure and functionality from the outset.
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" data-aos="fade-left" data-aos-delay="800">
                  <div class="subheading my-3">Iterate</div>
                  <div class="text">
                    Polishing and attention to details are important when it
                    comes to the final product. We're iterating until you're
                    happy with the results.
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" data-aos="fade-left" data-aos-delay="900">
                  <div class="subheading my-3">Make it pop</div>
                  <div class="text">
                    We establish a structure focused on functionality and
                    accessibility, incorporating interactions and animations
                    that ensure complete immersion.
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <!-- <v-cols cols="3" class="d-flex align-center">
              <CustomButton :text="'Let\'s work together'" :large="true"/>
            </v-cols> -->
          </v-row>
        </div>
      </div>

      <div class="field-section-2 d-flex flex-column" id="service">
        <div class="description-wrapper flex-row justify-space-between" :class="isMobile ? '' : 'd-flex'">
          <v-row>
            <v-col :cols="isMobile ? 12 : 9">
              <div class="description" data-aos="fade-left" data-aos-delay="300">
                In video production
                <div class="description-small mb-5">
                  Phasellus dui augue, aliquam et arcu et, pharetra faucibus ex. Vivamus ut lectus rhoncus, commodo magna sit amet, dapibus dui. Fusce eget quam sed libero dictum mollis. Quisque eleifend dapibus orci et semper. Pellentesque imperdiet mi velit, sit amet pellentesque est pulvinar a. Maecenas placerat tempor nisi non malesuada. Duis quis mauris eget lectus vestibulum dignissim. Aliquam sagittis congue ex.
                </div>

                In marketing
                <div class="description-small">
                  Phasellus dui augue, aliquam et arcu et, pharetra faucibus ex. Vivamus ut lectus rhoncus, commodo magna sit amet, dapibus dui. Fusce eget quam sed libero dictum mollis. Quisque eleifend dapibus orci et semper. Pellentesque imperdiet mi velit, sit amet pellentesque est pulvinar a. Maecenas placerat tempor nisi non malesuada. Duis quis mauris eget lectus vestibulum dignissim.
                </div>

              </div>
              <div class="fields-content mt-16 pb-10" data-aos="fade-left" data-aos-delay="600">
                <v-tabs v-model="tab" align-tabs="start" color="black" class="fields-tab">
                  <v-tab :value="'web'" class="capitalize-tab">Web Development</v-tab>
                  <v-tab :value="'marketing'" class="capitalize-tab">Marketing</v-tab>
                  <v-tab :value="'production'" class="capitalize-tab">Production</v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">

                  <v-tabs-window-item :value="'production'">
                    <v-row class="mt-16">
                      <v-col cols="12" class="mb-7"> <b>Video Production</b> </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 01 </small>
                        Video Shooting
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 02 </small>
                        Video Editing
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 03 </small>
                        Animation & Graphics
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 04 </small>
                        Filmmaking
                      </v-col>
                    </v-row>

                    <v-row class="mt-16">
                      <v-col cols="12" class="mb-7"><b> Photography </b></v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 01 </small>
                        Corporate Photography
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 02 </small>
                        Event Photography
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 03 </small>
                        Product Photography
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 04 </small>
                        Portrait Photography
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 05 </small>
                        Food Photography
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 06 </small>
                        Commercial Photography
                      </v-col>
                    </v-row>
                  </v-tabs-window-item>

                  <v-tabs-window-item :value="'marketing'">
                    <v-row class="mt-16">
                      <v-col cols="12" class="mb-7"><b> Marketing </b></v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 01 </small>
                        Brand Strategy and Management
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 02 </small>
                        Social Media Marketing
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 03 </small>
                        SEO & SEM
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 04 </small>
                        Content Creation
                      </v-col>
                    </v-row>
                  </v-tabs-window-item>

                  <v-tabs-window-item :value="'web'">
                    <v-row class="mt-16">
                      <v-col cols="12" class="mb-7"><b> Website Development </b></v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 01 </small>
                        Website Design
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 02 </small>
                        E-commerce Solutions
                      </v-col>
                      <v-col :cols="isMobile ? 12 : 6">
                        <small class="mr-7"> 03 </small>
                        Web Maintenance
                      </v-col>
                    </v-row>
                  </v-tabs-window-item>
                </v-tabs-window>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="title-section d-flex flex-column justify-center align-center" id="client">
        <GradientBackgroundRight />
        <GradientBackgroundLeft />
        <div class="text mb-6">
          <div class="heading" data-aos="fade-left" data-aos-delay="300">Our Masterpiece</div>
        </div>
        <CustomButton :text="'Check it out'" data-aos="fade-left" data-aos-delay="600"/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      windowWidth: window.innerWidth,
      tab: null
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 600;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
}
</script>
<style scoped lang="scss">
@import '@/styles/mixins.scss';

.home-page {
  transition: transform 0.6s ease;
  background: #0b0b0c;

  .capitalize-tab {
    text-transform: capitalize;
  }

  .banner-section {
    .banner-content {
      position: relative;
      width: 100%;
      height: 100vh;

      .text {
        text-align: center;

        .heading {
          font-size: 70px;
          font-weight: 700;
          line-height: 70px;
          text-transform: uppercase;

          @include respond-to(xs) {
            font-size: 20px;
            line-height: 40px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(md) {
            font-size: 20px;
            line-height: 40px;
          }

          @include respond-to(xl) {
            font-size: 70px;
          }
        }

        .subheading {
          font-size: 18px;
          font-weight: 400;

          @include respond-to(xs) {
            font-size: 14px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(md) {
            font-size: 14px;
          }

          @include respond-to(xl) {
            font-size: 18px;
          }
        }
      }
    }

    .field-section {
      position: relative;
      z-index: 100;
      border-radius: 80px;
      padding: 150px 250px;
      background: #fff;
      color: #121212;

      @include respond-to(xs) {
        padding: 40px 15px;
        border-radius: 20px;
      }

      @include respond-to(md) {
        padding: 40px 15px;
        border-radius: 20px;
      }

      @include respond-to(xl) {
        padding: 150px 250px;
      }

      .description-wrapper {
        width: 100%;

        .description {
          font-size: 30px;
          font-weight: 400;

          @include respond-to(xs) {
            font-size: 18px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(md) {
            font-size: 18px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(xl) {
            font-size: 30px;
          }
        }

        .description-small {
          font-size: 18px;

          @include respond-to(xs) {
            font-size: 14px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(md) {
            font-size: 14px;
          }

          @include respond-to(xl) {
            font-size: 18px;
          }
        }
      }
    }

    .field-section-2 {
      position: relative;
      z-index: 100;
      border-radius: 80px;
      padding: 150px 250px;
      background: #fff;
      color: #121212;

      @include respond-to(xs) {
        padding: 40px 15px;
        border-radius: 20px;
      }

      @include respond-to(md) {
        padding: 40px 15px;
        border-radius: 20px;
      }

      @include respond-to(xl) {
        padding: 150px 250px;
      }

      .description-wrapper {
        width: 100%;

        .description {
          font-size: 30px;
          font-weight: 400;

          @include respond-to(xs) {
            font-size: 18px;
          }

          @include respond-to(md) {
            font-size: 18px;
          }

          @include respond-to(xl) {
            font-size: 30px;
          }
        }

        .description-small {
          font-size: 18px;

          @include respond-to(xs) {
            font-size: 14px;
          }

          @include respond-to(md) {
            font-size: 14px;
          }

          @include respond-to(xl) {
            font-size: 18px;
          }
        }
      }
    }

    .title-section {
      position: relative;
      width: 100%;
      height: 50vh;
      z-index: 100;

      @include respond-to(xs) {
        height: 30vh;

      }

      @include respond-to(md) {
        height: 30vh;

      }

      @include respond-to(xl) {
        height: 50vh;

      }

      .text {
        text-align: center;
        z-index: 100;

        .heading {
          font-size: 60px;
          font-weight: 400;

          @include respond-to(xs) {
            font-size: 20px;
          }

          @include respond-to(md) {
            font-size: 20px;
          }

          @include respond-to(xl) {
            font-size: 60px;
          }
        }
      }
    }

    .approach-section {
      position: relative;
      width: 100%;
      height: 65vh;

      @include respond-to(xs) {
        height: 100vh;
        padding: 30px 0;
      }

      @include respond-to(md) {
        height: 100vh;
        padding: 30px 0;
      }

      @include respond-to(xl) {
        height: 65vh;
      }

      .approach-content {
        z-index: 100;
        padding: 0 200px;

        @include respond-to(xs) {
          padding: 0 10px;
        }

        @include respond-to(md) {
          padding: 0 10px;
        }

        @include respond-to(xl) {
          padding: 0 200px;
        }

        .heading {
          text-align: left;
          font-size: 60px;
          font-weight: 400;

          @include respond-to(xs) {
            font-size: 20px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(md) {
            font-size: 20px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(xl) {
            font-size: 60px;
          }
        }

        .subheading {
          font-size: 18px;
          font-weight: 600;

          @include respond-to(xs) {
            font-size: 16px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(md) {
            font-size: 16px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(xl) {
            font-size: 18px;
          }
        }

        .text {
          font-size: 16px;
          font-weight: 400;

          @include respond-to(xs) {
            font-size: 14px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @include respond-to(md) {
            font-size: 14px;
          }

          @include respond-to(xl) {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>