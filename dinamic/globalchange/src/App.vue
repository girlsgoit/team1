<template>
 <project/>
</template>

<script>
import project from "./components/project.vue";
  import {useLoadComments,createComment } from "./components/firebase/firebase";
export default{
  mounted(){
    const comments = useLoadComments()
    const comment = createComment({
  Name: "GGIT",
  Text: "Imi pare rau de ursii polari"
})
    console.log(comments)
    console.log(comment)
    return { comments}
  },
   components:{
    project
   }
} 
</script>

<style>

</style>
