<template>
  <div id="app" class="block">
    <nav class="navigations">
      <router-link to="/" exact-active-class="active">📝 Tasks</router-link>
      <router-link to="/day" exact-active-class="active">📅 Day</router-link>
      <router-link to="/important" exact-active-class="active">⭐ Important</router-link>
    </nav>

    <main class="main_content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch("loadTasksFromDB");
  }
}
</script>

<style scoped>
.block {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  background-color: #121212;
}

.navigations {
  background-color: #1e1e1e;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-right: 1px solid #2a2a2a;
}

.navigations a {
  text-decoration: none;
  color: #bbb;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 8px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navigations a:hover {
  background-color: #2a2a2a;
  color: white;
}

.navigations a.active {
  background-color: #3949ab;
  color: white;
}

.main_content {
  overflow-y: auto;
  color: white;
}

@media (max-width: 600px) {
  .block {
    grid-template-columns: 1fr;
  }
  .navigations {
    display: none;
  }
}
</style>