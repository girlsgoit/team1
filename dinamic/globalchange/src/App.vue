<template>
 
</template>

<script>
  import {useLoadComments } from "./components/firebase/firebase";
export default{
  mounted(){
    const comments = useLoadComments()
    console.log(comments)
    return { comments}
  }

}
</script>

<style>

</style>
