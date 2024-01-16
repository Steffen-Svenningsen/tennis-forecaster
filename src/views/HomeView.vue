<script setup lang="ts"></script>

<template>
  <div class="home">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>Er det tennisvejr i dag?</h1>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

.home
  .container
    display: flex
    align-items: center
    justify-content: space-evenly
    border-bottom: 1px solid #d9d9d9
    padding-bottom: 16px
</style>
