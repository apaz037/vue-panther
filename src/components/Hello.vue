<template>
  <div class="hello">
    <h1> {{ message }} </h1>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: mapState({
    message: state => state.Hello.message,
  }),
};
</script>
