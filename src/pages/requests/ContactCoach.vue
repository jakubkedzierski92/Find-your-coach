<template>
  <base-card>
    <form @submit.prevent="submitForm">
        <span><h2 class="title">Send me a message:</h2></span>
      <div>
        <label for="email">Your email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea rows="7" id="message" v-model.trim="message"></textarea>
      </div>
      <p v-if="!formIsValid" class="errors">Please check Your email and message</p>
      <div class="actions">
        <base-button>Send Message</base-button>
      </div>
    </form></base-card
  >
</template>

<script>
export default {
    data(){
        return{
            email: "",
            message: "",
            formIsValid: true
        }
    },
    methods: {
        submitForm(){
            this.isValid = true;
            if(this.email === '' || !this.email.includes('@') || this.message === ''){
                this.formIsValid = false
                return
            }
            this.$store.dispatch('requests/contactCoach', {
                email: this.email,
                message: this.message,
                coachId: this.$route.params.id
            })
            this.$router.replace('/coaches')
        },
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  margin-top: 12px;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #0095f2;
  background-color: #d4ecfc;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  margin-top: 16px;
  text-align: center;
}
.title {
    margin-top: 0;
}
</style>
