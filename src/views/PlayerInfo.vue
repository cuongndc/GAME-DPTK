<template>
  <div>
    == TRẠNG THÁI == 
    ---

    <p>
      Tên nhân vật: {{ playerInfo.name }}
    </p>
    <p>
      Cảnh giới:Luyện khí 2 Tầng
    </p>
    <p>
      Đẳng cấp: {{ playerInfo.level }} 
    </p>
    <p>
      Tu vị:1139/1626
    </p>
    <p>
      Linh thạch:2328
    </p>
    <p>
      Cực phẩm linh thạch:0
    </p>
    <p>
      Khí huyết: {{proper.hp}}/{{proper.hp}}
    </p>
    <p>
      Công Kích: {{ proper.attack }}
    </p>
    <p>
      Phòng Ngự: {{ proper.defense }}
    </p>
    <p>
      Bạo kích: {{ proper.aggression }}%
    </p>
    <p>
      Hút máu: {{ proper.lifesteal }}%
    </p>
    =========
    Vũ khí:<a href="?cmd=Yc2x1pkhPpWNoYWthbnpiJnpibm93aWQ9NzYyNDkmdWlkPTUwMiZzaWQ9ZjAzOWU1NTU2MmE3NzI5NjE4OGYyOTYzY2E5N2ZhZTEO0O0O">Sơ cấp thị huyết kiếm+7</a><a href="?cmd=Yc2x1pkhPpXh4emImemJ3ej0xJnNpZD1mMDM5ZTU1NTYyYTc3Mjk2MTg4ZjI5NjNjYTk3ZmFlMQO0O0OO0O0O">Dỡ xuống</a>
    Đồ trang sức:
    Quần áo:<a href="?cmd=Yc2x1pkhPpWNoYWthbnpiJnpibm93aWQ9NzYyMjcmdWlkPTUwMiZzaWQ9ZjAzOWU1NTU2MmE3NzI5NjE4OGYyOTYzY2E5N2ZhZTEO0O0O">Bách luyện khinh nhị giáp+8</a><a href="?cmd=Yc2x1pkhPpXh4emImemJ3ej0zJnNpZD1mMDM5ZTU1NTYyYTc3Mjk2MTg4ZjI5NjNjYTk3ZmFlMQO0O0OO0O0O">Dỡ xuống</a>
    Đai lưng:
    Đồ trang sức:
    Giày:
    <a href="?cmd=Yc2x1pkhPclearpWdldGJhZ3piJnNpZD1mMDM5ZTU1NTYyYTc3Mjk2MTg4ZjI5NjNjYTk3ZmFlMQO0O0OO0O0O">Trang bị</a>
<!--    <button>-->
<!--      Show-->
<!--    </button>-->
<!--    <button onclick="javascript :history.back(-1);">Trở về</button> <a href="?cmd=Yc2x1pkhPpWdvbWlkJm5ld21pZD0yMzImc2lkPWYwMzllNTU1NjJhNzcyOTYxODhmMjk2M2NhOTdmYWUx">Trở về trò chơi</a>-->
    <div>
      <router-link to="/">
        🔙 Quay lại trò chơi
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, ref, computed } from "vue";
import {usePlayerFirebase} from "../firebase";

const usePlayer = usePlayerFirebase()
const store = useStore();
let playerInfo = ref({})
let proper = ref({})

const getPlayerByID = async () => {
  return await usePlayer.getPlayerByID("0e8ca58a-ff4d-4d82-ae98-e82730f081f7");
}

onMounted(async () => {
  playerInfo.value = await getPlayerByID()
  proper.value = Object.assign({}, playerInfo.value.proper);
  console.log("rawObject,", proper)

})

</script>