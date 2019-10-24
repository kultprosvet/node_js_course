<template>
  <div id="app">
    <div>{{response}}</div>
    <div>{{rate}}</div>
    <button @click="loadUsers">Load users</button>
    <button @click="subscribe">Subscribe</button>
    <button v-if="subscribtion" @click="unsubscribe">Unsubscribe</button>
    <div>{{profile}}</div>
    <button @click="loadProfile">Load profile</button>
  </div>
</template>

<script>
  import {GQLClient} from './gqlClient'
  import gql from 'graphql-tag';
  export default {
  name: 'app',
  components: {

  },
  data:()=>({
    response:'',
    rate:'',
    profile:'',
    client:new GQLClient("localhost:4000","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo1NTM3NjF9LCJpYXQiOjE1NzE5MzExNDksImV4cCI6MTU3Mjc5NTE0OX0.YPXvctsW-H6Hma7Vl_lh-NhfqA0yaak6FwKJyh4beWk"),
    subscribtion:null
  }),

  methods:{
    loadUsers(){
      //this.response="XXX"
      this.client.request(
              gql`
              query($take:Int){
                getUserList(take:$take){
                  id
                  firsName
                  lastName
                }
              }`,{take:2})
              .then((data)=>{
                console.log('data',data)
                this.response=JSON.stringify(data)
            })

    },
    subscribe(){
      this.subscribtion=this.client.subscribe(
              gql`
              subscription($code:String){
                exchangeRate(code:$code){
                  code
                  rate
                }
              }
              `,{code:"EUR"},{
                next: data =>{
                  this.rate=JSON.stringify(data)
                  console.log(`received data: ${JSON.stringify(data)}`)
                },
                error: error => console.log(`received error ${error}`),
                complete: () => console.log(`complete`),
              })
    },
    loadProfile(){
      this.client.request(
              gql`
              query{
                me{
                  id
                  firsName
                  lastName
                }
              }`)
              .then((data)=>{
                console.log('data',data)
                this.profile=JSON.stringify(data)
              })
    },
    unsubscribe(){
      this.subscribtion.unsubscribe()
      this.subscribtion=null
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
