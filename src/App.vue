<template>
  <div id="app" v-if="content">
    <GlobalSymbols></GlobalSymbols>
    <main class="main">
      <div class="container">
        <Sidebar :content="content.sidebar"/>
        <section>
          <div class="inner">
            <!-- <img src="../assets/coming-soon.png" alt="Hot Places App Coming Soon"> -->
            <div v-html="content.landing.copy" class="content"></div>
            <Form :content="content.form"/>
          </div>
        </section>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <social-sharing url="https://www.ascensor.co.uk/"
                        title="Hot Places | Ascensor"
                        description="Vue JS Technical test for Ascensor"
                        hashtags=""
                        twitter-user="webbist"
                        inline-template>
          <div class="social">
            <network network="facebook">
              <svg viewBox="0 0 30 30">
                <use xlink:href="#symbol-facebook"></use>
              </svg>
            </network>
            <network network="twitter">
              <svg viewBox="0 0 30 30">
                <use xlink:href="#symbol-twitter"></use>
              </svg>
            </network>
          </div>
        </social-sharing>
        <p>&copy; 2019 all rights reserved</p>
        <a href="https://www.ascensor.co.uk/" target="_blank">An <strong>Ascensor</strong> website</a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

import GlobalSymbols from './components/GlobalSymbols.vue';
import Form from './components/Form.vue';
import Sidebar from './components/Sidebar.vue';

@Component({
  components: {
    GlobalSymbols,
    Form,
    Sidebar,
  },
})
export default class App extends Vue {
  content = null;

  mounted() {
    this.fetchData();
  }

  fetchData() {
    axios.get(`${window.location.href}/data/content.json`).then((response) => {
      this.content = response.data;
    });
  }
}
</script>

<style lang="scss">

</style>
