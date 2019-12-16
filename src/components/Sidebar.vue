<template>
  <aside class="sidebar">
      <div class="logo">
          <img src="../assets/logo.png" alt="">
      </div>
      <h5>{{content.title}}</h5>
      <a :href="content.button.link" class="btn btn-icon">{{content.button.copy}}</a>
      <span>{{content.smallPrint}}</span>
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
    @Prop() private content!: Object;
}
</script>
