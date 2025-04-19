<template>
  <div class="block">
    <div class="header">
      <h1>Important</h1>
    </div>

    <div class="content">
      <!-- Проверяем, есть ли выполненные задачи -->
      <div class="checkedTasks" v-if="tasks.length > 0">
        <div
          v-for="(item, i) in checkedTasks"
          :key="i"
          class="addedTask"
          @click="toggleRealTask(item)"
        >
          <div class="checkbox checked"></div>
          <span class="task_text">{{ item.text }}</span>
        </div>
      </div>
      <!-- Если выполненные задачи пусты, выводим сообщение -->
      <div v-else>
        <p>No important tasks yet</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Day",
  components: {},
  computed: {
    ...mapGetters(["checkedTasks"]),
    tasks() {
      return this.checkedTasks; // Получаем только выполненные задачи
    },
  },
  methods: {
    ...mapActions(["toggleCheckbox"]),
    toggleRealTask(task) {
      // Находим индекс задачи в массиве всех задач
      const index = this.$store.state.tasks.findIndex(t => t === task);
      if (index !== -1) {
        this.toggleCheckbox(index); // Вызываем экшен для смены состояния задачи
      }
    }
  }
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header, .content {
  background-color: rgb(28, 29, 29);
  padding: 20px;
}

.header {
  text-align: center;
  height: 100px;
  display: flex;
  flex-direction: column;
}
.addedTask{
  margin-bottom: 5px;
}

.content {
  flex-grow: 1;
  overflow-y: auto; /* Включаем скролл */
  padding-right: 10px; /* Отступ справа, чтобы скролл не слипался с задачами */
}

/* Стилизация скроллбара */
.content::-webkit-scrollbar {
  width: 6px;
}

.content::-webkit-scrollbar-thumb {
  background: rgba(120, 140, 222, 0.7);
  border-radius: 6px;
}

.content::-webkit-scrollbar-thumb:hover {
  background: rgba(120, 140, 222, 1);
}

.content_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.content_block img {
  width: 80px;
  margin-bottom: 20px;
}

.text {
  text-align: center;
  max-width: 230px;
  font-size: 16px;
  color: rgb(120, 140, 222);
}

.text h2, h1 {
  color: rgb(120, 140, 222);
  font-size: 30px;
}

.text p, .date {
  color: #b0b0b0;
  font-size: 14px;
  line-height: 1.5;
}

h1, .date {
  text-align: start;
  color: rgb(120, 140, 222);
}

.date {
  font-size: 15px;
}
</style>
