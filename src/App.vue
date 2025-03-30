<template>
  <div id="app" class="block">
    <nav class="navigations">
      <router-link  to="/">Day</router-link>
      <router-link  to="/important">Important</router-link>
      <router-link  to="/planned">Planned</router-link>
      <router-link  to="/tasks">Tasks</router-link>
    </nav>

    <main class="main_content">
      <router-view />
    </main>

    <div class='proposition'>
      <p>proposition</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
.block {
  display: grid;
  grid-template-columns: 200px 1fr 300px; /* Левый, центральный и правый блок */
  height: 100vh; /* Высота на весь экран */
  
}


/* Левая колонка (например, меню) */
.navigations {
background-color: rgb(35,34,34);  
padding: 20px;
  display: flex;
  flex-direction: column;
  text-decoration: none;

}
.navigations a{

  text-decoration: none;
    color: white;

}

/* Центральный контент */
.main-content {
  overflow-y: auto;
  padding: 20px;
}

/* Правая колонка (например, дополнительная информация) */
.proposition {
  background-color: rgb(38,39,38);
  padding: 20px;
}

</style>
