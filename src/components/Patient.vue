<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="user-profile">
      
      <!-- The side panel for this user. -->
      <div class="user-profile__user-panel">
        <p>Welcome {{ fullName }} ({{ user.username }})</p>
        <p>Admin? <span v-if="user.isAdmin">Yes</span><span v-else>False</span></p>
        <p># patients: {{ patients }}</p>
        <button @click="addPatient">Add Patient</button>
      </div>

      <!-- The food diary entries of this user. -->
      <div class="user-profile__entry-wrapper">
        <DiaryEntry v-for="entry in user.entries" 
          :key="entry.id" 
          :username="user.username" 
          :entry="entry" 
          @favourite="toggleFavourite"/>
      </div>

  </div>
</template>

<script>
import DiaryEntry from "./DiaryEntry";


export default {
  name: 'Patient',
  components: { DiaryEntry },
  data() {
    return {
      patients: 0,
      user: {
        id: 0,
        username: 'mtan',
        firstName: 'Melvin',
        lastName: 'Tan',
        email: 'melvin@windwake.io',
        isAdmin: true,
        entries: [ 
          { id: 1, day: 1, meal: 1, calories: 1, food: "bagel", time:"7:00am" },
          { id: 2, day: 1, meal: 1, calories: 2, food: "coffee w/cream", time:"7:30am" },
          { id: 3, day: 1, meal: 2, calories: 2, food: "Ham Sandwich", time:"1:30pm"  }
        ]
      }
    }
  },
  watch: {
    patients(newPatientCount, oldPatientCount) {
      if (oldPatientCount < newPatientCount) {
        console.log(`${this.user.username} has gained a follower!`)
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  methods: {
    addPatient() {
      this.patients++
    },
    toggleFavourite(id) {
      console.log(`Favourited food entry ${id}`)
    }
  },
  mounted() {
    this.addPatient();

    // Make an API call here and populate the user data.
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;
}

.user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}
</style>
