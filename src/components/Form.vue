<template>
  <div class="form">
    <button v-if="!toggle" class="btn" @click="toggleForm">{{content.button.copy}}</button>
    <form v-if="toggle" id="form" action="" method="post">
      <div class="input">
        <label for="firstName">
          First Name <sup>*</sup>
        </label>
        <input type="text" id="firstName" v-model="firstName">
      </div>

      <div class="input">
        <label for="lastName">
          Last Name <sup>*</sup>
        </label>
        <input type="text" id="lastName" v-model="lastName">
      </div>

      <div class="input">
        <label for="email">
          Email <sup>*</sup>
        </label>
        <input type="email" id="email" v-model="email">
      </div>

      <div class="input photo">
        <label for="photo">
          Photo <sup>*</sup>
        </label>
        <input type="file" id="photo" @change="processFile($event)">
        <span>Note: Image formats only e.g, jpg, pnh, gif, tif</span>
      </div>

      <button class="btn btn-icon">Hey {{firstName}}<span v-if="firstName.length">,</span> Save your Profile</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  toggle: boolean = false;

  firstName: string = '';

  lastName: string = '';

  email: string = '';

  photo: string = '';

  processFile(e: any): void {
  }

  toggleForm(): void {
    this.toggle = !this.toggle;
  }

  @Prop() private content!: Object;
}
</script>
