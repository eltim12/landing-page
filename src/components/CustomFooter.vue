<template>
  <div class="footer-section">
    <div class="footer-content d-flex flex-column justify-center align-center">
      <div class="heading mb-6" data-aos="fade-right" data-aos-delay="300">
        Ready to embark on your <br />
        digital journey?
      </div>
      <CustomButton :text="'Start a project'" :isDark="true" data-aos="fade-left" data-aos-delay="600"/>
    </div>
    <hr class="mt-16 mb-5" />
    <div class="social-wrapper">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <div class="button-wrapper">
            <v-btn class="ml-3" height="40" variant="text" width="40px">
              <img src="@/assets/footer/instagram.webp" alt="" width="100%" />
            </v-btn>

            <v-btn class="ml-3" height="40" variant="text" width="40px">
              <img src="@/assets/footer/email.webp" alt="" width="100%" />
            </v-btn>
            <v-btn class="ml-3" height="40" variant="text" width="40px">
              <img src="@/assets/footer/whatsapp.webp" alt="" width="100%" />
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <hr class="mt-5 mb-16" />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.footer-section {
  background: #fff;
  padding: 50px 10px;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  z-index: 1001;
  position: relative;

  @include respond-to(xs) {
    padding: 40px 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  @include respond-to(md) {
    padding: 40px 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  @include respond-to(xl) {
    padding: 50px 10px;
  }

  hr {
    opacity: 15%;
  }

  .heading {
    font-size: 60px;
    line-height: 70px;
    font-weight: 400;
    color: #0b0b0c;
    text-align: center;

    @include respond-to(xs) {
      font-size: 20px;
      line-height: 35px;
    }

    @include respond-to(md) {
      font-size: 20px;
      line-height: 35px;
    }

    @include respond-to(xl) {
      font-size: 60px;
    }
  }

  .social-wrapper {
    .text {
      font-size: 16px;
      color: #0b0b0c;
      opacity: 60%;
      text-align: right;

      @include respond-to(xs) {
        font-size: 14px;
      }

      @include respond-to(md) {
        font-size: 14px;
      }

      @include respond-to(xl) {
        font-size: 16px;
      }
    }

    .v-btn {
      border-radius: 50%;
      border-color: #ffffffc0;
      min-width: unset !important;
      padding: 0 8px !important;
      color: #0b0b0c;
      background: #0b0b0c;

      .v-btn--size-default {
        min-width: unset !important;
        padding: 0 8px !important;
      }
    }
  }
}
</style>
