<template>
  <div class="wrapper">
     <main>
       <Container class="d-flex align-items-center justify-content-center full-height">
         <GameField />
       </Container>
     </main>

     <aside>
       <Words />
     </aside>
  </div>
</template>

<script>

import GameField from './components/GameField';
import Words from './components/Words';
import Container from './components/Container';
export default {
  name: 'App',
  components: {
    Container,
    Words,
    GameField
  }
};
</script>

<style lang="scss" src="./assets/styles/_core.scss"></style>
<style lang="scss" scoped>
  .wrapper {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    main {
      width: 80%;
    }

    aside {
      width: 20%;
    }
  }
</style>
