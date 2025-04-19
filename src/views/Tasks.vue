<template>
  <div class="block">
    <div class="header">
      <h1>Tasks</h1>
    </div>
    
    <div class="content">
      <!-- Скрываем блок, если есть задачи -->
      <div v-if="tasks.length === 0" class="content_block">
        <div class="text">
          <h2>0</h2>
          <p>No tasks yet – create one!</p>
        </div>
      </div>

      <!-- TaskDiv всегда рендерится -->
      <TaskDiv />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/Footer.vue";
import TaskDiv from "@/components/TaskDiv.vue";
import { mapGetters } from "vuex";

export default {
  name: "Day",
  components: {
    FooterComponent,
    TaskDiv
  },
  computed: {
    ...mapGetters(["allTasks"]),
    tasks() {
      return this.allTasks; // ✅ Делаем tasks доступным в шаблоне
    },

  }
};
</script>

<style scoped>
/* Стили остаются */
</style>

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

.content {
  flex-grow: 1;
  max-height: calc(100vh - 160px); /* Ограничиваем высоту контента */
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
