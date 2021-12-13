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
import Nav from '@/components/Nav.vue';
import { onBeforeMount } from "vue";
import { useStore} from "vuex";
import { getAuth } from "firebase/auth";
import { useRoute, useRouter } from 'vue-router'

const firebase = useFirebase()
const usePlayer = usePlayerFirebase()
const store = useStore()
const auth = getAuth()

const route = useRoute()
const router = useRouter()

onBeforeMount( () => {
  auth.onAuthStateChanged(async (user) => {
    store.commit("SET_USER", user)
    const player = await getPlayerByEmail(user.email)
    store.commit("SET_PLAYER", player)
    if (!user) {
      await router.replace('/index')
    } else if (route.path == '/login' || route.path == '/register') {
      await router.replace('/')
    }
  })
})
//
const getPlayerByEmail = async (email) => {
  return await usePlayer.getPlayerByEmail(email);
}
//
// const newPlayer = async () => {
//   PLAYER.name = 'Cuong Nguyen'
//   return await firebase.addDocF(COLLECTIONS.PLAYERS, PLAYER);
// }
//
// const generateAccount = async () => {
//   const player = await newPlayer();
// }

</script>
<style>
  .main {
    border-radius: 12px;
    background-color: #fff;
    padding: 20px;
  }
</style>