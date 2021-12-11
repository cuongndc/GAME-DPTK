<template>
  <Nav />
    <div class="row">
        <div class="main">
          <router-view />
      </div>
    </div>
</template>

<script setup>
import { useFirebase, usePlayerFirebase } from "./firebase"
import { COLLECTIONS } from "./constants/collections";
import Nav from '@/components/Nav.vue';
import { PLAYER } from './types/player'
import {onMounted} from "vue";
import { useStore} from "vuex";

const firebase = useFirebase()
const usePlayer = usePlayerFirebase()
const store = useStore()

onMounted(async () => {
  const player = await getPlayerByID()
  store.commit("SET_PLAYER", player);
})

const getPlayerByID = async () => {
  return await usePlayer.getPlayerByID("0e8ca58a-ff4d-4d82-ae98-e82730f081f7");
}

const newPlayer = async () => {
  PLAYER.name = 'Cuong Nguyen'
  return await firebase.addDocF(COLLECTIONS.PLAYERS, PLAYER);
}

const generateAccount = async () => {
  const player = await newPlayer();
}

</script>
<style>
  .main {
    border-radius: 12px;
    background-color: #fff;
    padding: 20px;
  }
</style>