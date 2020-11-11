<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="user-profile">
      <div class="user-profile__user-panel">
        <p>Welcome {{ user.username }} - {{ fullName }}</p>
        <p># of patients {{ patients }}</p>
        <button @click="addPatient">Add Patient</button>
      </div>

  </div>
</template>

<script>

export default {
  name: 'Patient',
  data() {
    return {
      patients: 0,
      user: {
        id: 0,
        username: '@mtan',
        firstName: 'Melvin',
        lastName: 'Tan',
        email: 'melvin@windwake.io',
        isAdmin: true
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
