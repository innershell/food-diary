<template>
    
    <!-- The login panel. -->
    <div class="login-panel">
    
      <div class="login-panel__logo"><img width="75" alt="Vue logo" src="../assets/logo.svg"></div>
      <div class="login-panel__instructions"><p>Please enter your email address.</p></div>
      <div>
        <form @submit.prevent="authenticate">
          <div class="login-panel__email-field"><input id="login_email" v-model="newTwootContent"/></div>
          <div class="login-panel__continue-button"><button>Continue</button></div>
        </form>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Login',
  // components: { },
  data() {
    return {
      users: [
        { username: 'mtan', firstName: 'Melvin', lastName: 'Tan', email: 'melvin@windwake.io', role: 'PHYSICIAN'},
        { username: 'jdoe', firstName: 'John', lastName: 'Doe', email: 'j.doe@email.com', role: 'PATIENT'}
      ]
    }
  },

  // Watches a data point or computed value by passing in the old and new values as parameters.
  watch: { },
  computed: { },
  methods: {
    authenticate() {
      console.log("In authenticate");
      // Iterate though the local users and see if email exists.

      // If email exists, load the email sent link.
    }
  },
  mounted() { }
}
</script>

<style>

.login-panel {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content: center;
  height: 25vh;
  border: 1px solid #bebebe;
  border-radius: 10px;
  box-shadow: 3px 3px 25px -5px #bebebe;
  padding: 25px;
}

.login-panel__logo {
  text-align: center;
}

.login-panel__instructions {
  text-align: center;
  font-weight: bold;
}

.login-panel__email-field {
  text-align: center;
}

.login-panel__continue-button {
  text-align: center;
}

</style>
