<template>
  <div class="diary-entry" @click="favouriteEntry(entry.id)">
    <div class="patient-profile__user">
      @{{ username }}
    </div>
    <div class="diary-entry__food">
      {{ entry.food }}
    </div>
  </div>
</template>


<script>
export default {
  name: "DiaryEntry",
  props: {
    username: {
      type: String,
      required: true
    },
    entry: {
      type: Object,
      required: true
    }
  },
  methods: {
    favouriteEntry(id) {
      this.$emit('favourite', id)
    }
  }
};
</script>

<style>
.diary-entry {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: left;
}

.diary-entry:hover {
  transform: scale(1.1, 1.1);
}

.patient-profile__user {
  font-weight: bold;
}
</style>
