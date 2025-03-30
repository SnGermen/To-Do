<template> 
  <div class="task_list">
    <div v-for="(item, index) in tasks" :key="index" class="addedTask">
      <div class="checkbox" :class="{ checked: isChecked }" @click="toggleCheckbox"></div>
      <span class="task_text">{{ item }}</span>
      <div class="block_button">
        <button class="delete_button" @click="deleteTask(index)">
          🗑
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TaskDiv",
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    ...mapActions(["deleteTask"]),
    toggleCheckbox() {
      this.isChecked = !this.isChecked;
    },
  },
  computed: {
    ...mapGetters(["allTasks"]),
    tasks() {
      return this.allTasks;
    },
  },
};
</script>

<style>
.task_list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.addedTask {
  width: 100%;
  background: #222; /* Темный фон */
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 17px;
  display: flex;
  align-items: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 22px;
  transition: background 0.3s ease;
}

.addedTask:hover {
  background: #292929; /* Чуть светлее при наведении */
}

.task_text {
  flex: 1;
  word-break: break-word;
}

.checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid rgb(120, 140, 222);
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
}

.checkbox.checked::before {
  content: "";
  width: 16px;
  height: 16px;
  background-color: rgb(120, 140, 222);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Новый стиль кнопки */
.delete_button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: rgb(150, 150, 150);
  transition: color 0.3s ease, background 0.3s ease, transform 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.delete_button:hover {
  color: rgb(255, 100, 100);
  background: rgba(255, 100, 100, 0.15);
}

.delete_button:active {
  transform: scale(0.9);
}
</style>
