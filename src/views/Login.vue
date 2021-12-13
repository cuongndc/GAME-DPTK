<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input v-bind:class="{'border-red-500': errCode == 'auth/invalid-email'}" v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Username">
        <p v-if="errCode == 'auth/invalid-email'" class="text-red-500 text-xs italic">{{ err }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mật khẩu
        </label>
        <input v-bind:class="{'border-red-500': errCode == 'auth/weak-password'}" v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        <p v-if="errCode == 'auth/weak-password'" class="text-red-500 text-xs italic">{{ err }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button @click.prevent="onLogin" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Đăng nhập
        </button>
        <router-link to="/register" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
          Đăng ký?
        </router-link>
      </div>
      <p v-if="errCode == 'auth/internal-error' || errCode == 'auth/missing-email' || errCode == 'auth/email-already-in-use' " class="text-red-500 text-xs italic">{{ err }}</p>

    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2022 Saga. All rights reserved.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const err = ref("")
const errCode = ref("")
const email = ref("")
const password = ref("")
const onLogin = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log("userCredential",userCredential)
        // Signed in
      })
      .catch((error) => {
        errCode.value = error.code;
        console.log("errorCode", error.code)
        err.value = error.message;
        console.log("error", error)
        // ..
      });
}
</script>