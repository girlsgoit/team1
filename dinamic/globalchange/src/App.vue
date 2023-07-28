<template>
 <project/>
</template>

<script>
import project from "./components/project.vue";
  import {useLoadComments } from "./components/firebase/firebase";
export default{
  mounted(){
    const comments = useLoadComments()
    console.log(comments)
    return { comments}
  },
   components:{
    project
   }
} 
</script>

<style>

</style>
