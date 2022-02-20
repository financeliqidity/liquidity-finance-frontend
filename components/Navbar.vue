<template>
    <nav class="navbar p-sm-4 p-2 sticky-top bg-dark">
      <main class="container">
           <div class=" ">
            <a href="#" class="navbar-brand d-flex">
            <span class="me-2"><img src="~/static/icon2.png" width="30px" alt=""></span>
            <h3 class="text-light fw-700 d-none d-sm-inline">Liguidity Finance</h3>
        </a>
       </div>

       <div class="ms-auto me-3 d-none d-sm-block">
           <ul class="nav">
               <li class="nav-item" v-for="item in nav_list" :key="item.title">
                   <a :href="item.url" class="nav-link text-light fw-700" style="font-size: 17px">{{item.title}}</a>
               </li>
           </ul>
       </div>


       <div>
           <button class="btn btn-primary btn-lg shadow px-3">
               <small class="fw-700 " >LAUNCH APP</small>
           </button>
       </div>
      </main>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            nav_list: [
                {title: "Features", url: "#FEATURES", able: true},
                {title: "Tokenomics", url: "#TOKENOMICS", able: true},
                {title: "Roadmap", url: "#ROADMAP", able: true},
                // {title: "Loan", url: "#", able: true},
            ]
        }
    }
})
</script>


