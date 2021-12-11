<template>
  <div>
    <p>
      Bản đồ hiện tại: {{ mapCurrent.name }} <span v-if="mapCurrent.isSafe">[Vùng an toàn]</span>
    </p>
    <div>Ngươi tìm thấy:
    <router-link to="" v-for="(monster, key) in listMonstersInMap" :key="key">
      {{ monster.name }}
    </router-link>
    </div>
  </div>
</template>

<script setup>
import { maps } from '../types/maps'
import { monster } from "../types/monster"
import router from "../router"
// import MonsterInfo from 'monster/MonsterInfo.vue'
//
const mapID = router.currentRoute.value.params.id
const mapCurrent = maps.find(map => {
  return map.id == mapID
});

const listMonstersInMap = monster.filter(mon => {
  return mon.map_id == mapID
})
</script>