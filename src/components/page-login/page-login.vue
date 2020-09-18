<template>
  <div class="page-login">
    <div class="page-login_wrapper">
      <div class="page-login_left">
        <form @submit.prevent="onSubmit" class="page-login_form">
          <p class="page-login_title">Masuk Ke Paper.id</p>
          <p class="page-login_subtitle">Masuk dengan akun yang terdaftar di Paper.id/Payper</p>
          <div class="page-login_input-wrapper">
            <div class="page-login_input">
              <label for="username">Username</label>
              <input type="text" placeholder="Masukkan Username" v-model="$v.username.$model" />
              <div class="foot hasError" v-if="$v.username.$dirty && $v.username.$error">
                <span>Field is Required</span>
              </div>
            </div>
            <div class="page-login_input">
              <label for="password">Kata Sandi</label>
              <input
                type="password"
                placeholder="Masukkan Kata Sandi Anda"
                v-model="$v.password.$model"
              />
              <div class="foot hasError" v-if="$v.password.$dirty && $v.password.$error">
                <span>Field is Required</span>
              </div>
            </div>
            <p class="page-login_forgot">Lupa kata Sandi ?</p>
            <action-button
              text="Masuk"
              :className="'page-login_submit'"
              :loading="loading"
              :buttonType="'submit'"
            />
          </div>
        </form>
      </div>
      <div class="page-login_right"></div>
    </div>
  </div>
</template>

<script src="./page-login.ts" lang="ts"></script>

<style src="./page-login.scss" lang="scss" scoped></style>
