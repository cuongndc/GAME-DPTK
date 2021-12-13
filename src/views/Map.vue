<template>
  <div>
    <p>
      Bản đồ hiện tại: {{ mapCurrent.name }} <span v-if="mapCurrent.isSafe">[Vùng an toàn]</span>
    </p>
    <div>Ngươi tìm thấy:
    <router-link to="" v-for="(monster, key) in listMonstersInMap" :key="key" @click="handleMonster(monster)">
      {{ monster.name }}
    </router-link>
    </div>
  </div>

  <Modal
      v-model="isShow">
    <div class="modal">
      <p>
        [{{ selectMonster.name }}]
      </p>
      <p>
        Cấp: {{ selectMonster.level }}
      </p>
      <p>
        Giới tính: {{ selectMonster.gender }}
      </p>
      <p>
        Thông tin: {{ selectMonster.name }}
      </p>
      <p>
        Cảnh giới: {{ levelInfo.name }}
      </p>
      <p>
        Rơi xuống: <a v-for="(item, key) in selectMonster.bonuses.items" :key="key">
        {{ item.name }}
      </a>
      </p>
      <div style="position:absolute; bottom: 10px">
        <a @click="onAttack">Công kích</a>
        <a @click="onClose">Quay lại</a>
      </div>
    </div>
  </Modal>

<!--  <MonsterInfo v-if="isShow" :monster="selectMonster" @onClose="onClose" />-->
</template>

<script setup>
import { maps } from '../types/maps'
import { monster } from "../types/monster"
import MonsterInfo from './monster/MonsterInfo.vue'
import { getLevelByID } from '@/types/levels'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from "vue-router";

const isShow = ref(false)
const selectMonster = ref({})
const route = useRoute()
const router = useRouter()

const handleMonster = (monster) => {
  selectMonster.value = monster
  isShow.value = true
}

const mapID = route.params.id
const mapCurrent = maps.find(map => {
  return map.id == mapID
});
const listMonstersInMap = monster.filter(mon => {
  return mon.map_id == mapID
})

const h3 = 'mt-6 mb-2 text-xl font-bold'
const button = 'mt-2 rounded-full py-1 px-4 bg-white transition border-blue-500 border-2 text-blue-500 text-sm hover:border-blue-700 hover:text-blue-700 focus:bg-blue-700 focus:text-white focus:outline-none'
const levelInfo = computed(() => {
  return getLevelByID(selectMonster.value.level_id)
})
const onClose = () => {
  isShow.value = false
}
const onAttack = () => {
  console.log("selectMonster", selectMonster.value.id)
  router.push({
    path: `/attack_monitor/${selectMonster.value.id}`,
  })
}

</script>