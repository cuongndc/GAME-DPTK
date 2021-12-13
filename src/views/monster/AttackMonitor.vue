<template>
  <div>
    <p>
      [{{ playerState.info.name }}] 🆚 [{{ mon.name }}]
    </p>
    <p>
      {{ mon.name }} [lv: {{ mon.level }}]
    </p>
    <div>
      Khí huyết:(<div class="hpys" style="display: inline">{{ monHp }}</div>/<div class="hpys" style="display: inline">{{ monHp }}</div>)
    </div>
    <div>
      Công kích:({{ monAttack }})
    </div>
      Phòng ngự:({{ monDefense }})
    <p>
      ===================
    </p>
    <p>
      {{ playerState.info.name }} [lv:{{ playerState.info.level }}]
    </p>
    <div>
      Khí huyết:(<div class="hpys" style="display: inline">{{ playerHp }}</div>/<div class="hpys" style="display: inline">{{ playerHp }}</div>)
    </div>
    <div>
      Công kích:({{ playerAttack }})
    </div>
    <div>
      Phòng ngự:({{ playerDefense }})
    </div>
    <div class="mt-1">
      <a class="mr-1" @click.prevent="onAttack">
        Công kích
      </a>
      <a>
        Trở về
      </a>
    </div>

<!--      <ul>-->
<!--        <li><a href="?cmd=Yc2x1pkhPpWdvbWlkJm5ld21pZD0yMjgmc2lkPWYwMzllNTU1NjJhNzcyOTYxODhmMjk2M2NhOTdmYWUx">Chạy trốn</a></li><br>-->
<!--        <li><a href="?cmd=Yc2x1pkhPpXB2ZWdqJmdpZD0yMzM2MzgzJnNpZD1mMDM5ZTU1NTYyYTc3Mjk2MTg4ZjI5NjNjYTk3ZmFlMSZub3dtaWQ9MjI4">Công kích</a></li>-->
<!--      </ul>-->
<!--      <a href="?cmd=Yc2x1pkhPpXB2ZWdqJmNhbnNodT11c2VqbiZqbmlkPTAmc2lkPWYwMzllNTU1NjJhNzcyOTYxODhmMjk2M2NhOTdmYWUxJmdpZD0yMzM2MzgzJm5vd21pZD0yMjgO0O0O">Phù lục 1</a> <a href="?cmd=Yc2x1pkhPpXB2ZWdqJmNhbnNodT11c2VqbiZqbmlkPTAmc2lkPWYwMzllNTU1NjJhNzcyOTYxODhmMjk2M2NhOTdmYWUxJmdpZD0yMzM2MzgzJm5vd21pZD0yMjgO0O0O">Phù lục 2</a> <a href="?cmd=Yc2x1pkhPpXB2ZWdqJmNhbnNodT11c2VqbiZqbmlkPTAmc2lkPWYwMzllNTU1NjJhNzcyOTYxODhmMjk2M2NhOTdmYWUxJmdpZD0yMzM2MzgzJm5vd21pZD0yMjgO0O0O">Phù lục 3</a><br>-->
<!--      <a href="?cmd=Yc2x1pkhPpXB2ZSZjYW5zaHU9dXNleXAmeXBpZD0wJnNpZD1mMDM5ZTU1NTYyYTc3Mjk2MTg4ZjI5NjNjYTk3ZmFlMSZnaWQ9MjMzNjM4MyZub3dtaWQ9MjI4">Dược phẩm 1</a> <a href="?cmd=Yc2x1pkhPpXB2ZSZjYW5zaHU9dXNleXAmeXBpZD0wJnNpZD1mMDM5ZTU1NTYyYTc3Mjk2MTg4ZjI5NjNjYTk3ZmFlMSZnaWQ9MjMzNjM4MyZub3dtaWQ9MjI4">Dược phẩm 2</a> <a href="?cmd=Yc2x1pkhPpXB2ZSZjYW5zaHU9dXNleXAmeXBpZD0wJnNpZD1mMDM5ZTU1NTYyYTc3Mjk2MTg4ZjI5NjNjYTk3ZmFlMSZnaWQ9MjMzNjM4MyZub3dtaWQ9MjI4">Dược phẩm 3</a><br>-->
  </div>
</template>

<script setup>
import { monster } from "@/types/monster";
import { useRoute } from "vue-router";
import { COLLECTIONS } from "@/constants/collections";
import { useFirebase } from '@/firebase'
import { useStore } from "vuex";
import { computed } from "vue";

const route = useRoute()
const store = useStore()
const playerState = store.state.player
const monId = route.params.monster_id
const firebase = useFirebase()
const mon = computed(() => {
  return monster.find(m => { return m.id == monId })
})

const monAttack = computed(() => {
  return mon.value.proper.attack
})
const monDefense = computed(() => {
  return mon.value.proper.defense
})
const monHp = computed(() => {
  return mon.value.proper.hp
})

const playerAttack = computed(() => {
  return playerState.proper.attack
})
const playerDefense = computed(() => {
  return playerState.proper.defense
})
const playerHp = computed(() => {
  return playerState.proper.hp
})

const onAttack = async () => {
  const addMonActivity = await firebase.addDocF(COLLECTIONS.ACTIVITY, {

  })
  console.log("addMonActivity", addMonActivity)
  console.log('mon', mon)
}
</script>