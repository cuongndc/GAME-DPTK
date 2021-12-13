<template>
  <Modal
      v-model="isShowF"
  >
    <div class="modal">
      <p>
        [{{ props.monster.name }}]
      </p>
      <p>
        Cấp: {{ props.monster.level }}
      </p>
      <p>
        Giới tính: {{ props.monster.gender }}
      </p>
      <p>
        Thông tin: {{ props.monster.name }}
      </p>
      <p>
        Cảnh giới: {{ levelInfo.name }}
      </p>
      <p>
        Rơi xuống: <a v-for="(item, key) in props.monster.bonuses.items" :key="key">
        {{ item.name }}
      </a>
      </p>
      <div style="position:absolute; bottom: 10px">
        <a @click="onAttack">Công kích</a>
        <a @click="onClose">Quay lại</a>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getLevelByID } from '@/types/levels'

const h3 = 'mt-6 mb-2 text-xl font-bold'
const button = 'mt-2 rounded-full py-1 px-4 bg-white transition border-blue-500 border-2 text-blue-500 text-sm hover:border-blue-700 hover:text-blue-700 focus:bg-blue-700 focus:text-white focus:outline-none'
const emit = defineEmits(['onClose'])

console.log("emit", emit)
const props = defineProps({
  monster: Object,
})

const isShowF = ref(true)
const levelInfo = computed(() => {
  return getLevelByID(props.monster.level_id)
})
const onClose = () => {
  isShowF.value = false
  emit('onClose', false)
}
const onAttack = () => {
  console.log("attack")
}
</script>