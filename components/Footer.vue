<template>
    <footer class="py-sm-5 p-3 bg-secondary">

       <main class="container">
            <main class=" row align-items-center flex-column-reverse flex-sm-row">
            
           <div class="col-sm">
                <div class="row">
                <div class="col-sm ">
                    <p class="fw-900 text-primary d-none d-sm-block">ABOUT</p>
                    <ul class="nav flex-sm-column justify-content-center">
                        <li class="nav-item " v-for="(item, index) in about" :key="index">
                            <a :href="item.link" class="nav-link ps-0 text-light">
                                {{item.text}}
                            </a>
                        </li>
                    </ul>
                </div>

                 <div class="col-sm ">
                    <p class="fw-900 text-primary d-none d-sm-block">HELP</p>
                    <ul class="nav flex-sm-column justify-content-center">
                        <li class="nav-item " v-for="(item, index) in help" :key="index">
                            <a :href="item.link" class="nav-link ps-0 text-light">
                                {{item.text}}
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
           </div>

            <div class="col-sm-8 d-flex">
               <div class="ms-auto  me-auto me-sm-0">
                    <div class="mx-auto " >
                        <a href="#" class="navbar-brand d-flex ">
                            <span class="me-2"><img src="~/static/icon2.png" width="30px" alt=""></span>
                            <h2 class="text-light fw-700 ">Liguidity Finance</h2>
                        </a>
                    </div>
                    <ul class="nav ">
                                    <li class="nav-item" v-for="(item, index) in soc_media" :key="index">
                                        <a :href="item.link" class="text-muted nav-link">
                                            <i :class="`fab fa-${item.icon} fa-lg `"></i>
                                        </a>
                                    </li>
                    </ul>
               </div>
            </div>

        </main>
       </main>
    
        <hr>
       <main class=" container px-0 d-flex justify-content-between ">
             
            <div class="d-flex align-items-center">



               <div class="me-2 me-sm-4 d-flex align-items-center">
                    <label class="switch mx-2">
                   <i class="fas fa-moon text-muted"></i>

                        <input type="checkbox" >
                        <span class="slider round"></span>
                     <i class="fas fa-sun text-warning"></i>

                    </label>
               </div>


                <div>
                    <span class="text-muted">
                        <i class="fas fa-globe "></i> 
                        <span class="fw-700">EN</span>
                    </span>
                </div>


                

            </div>


            <div class="d-flex align-items-center pe-sm-5 me-sm-5">
                <div class="me-2 me-sm-4">
                    <img src="~/assets/img/lfi.png" width="20px" alt="">
                    <span class="text-muted small te">$0.00001</span>
                </div>
                <div>
                    <button class="btn btn-primary">
                        <span>BY LFI</span>
                        <i class="fas fa-long-arrow-alt-right btn-sm"></i>
                    </button>
                </div>
            </div>



       </main>
    </footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            about: [
                {text: "Contact", link: "financeliquidity@gmail.com"},
                {text: "Brand", link: "#"},
                {text: "Blog", link: "https://medium.com/@financeliquidity"},
                {text: "Community", link: "https://t.me/liquidityfinanc"},
            ],
            help: [
                {text: "Support", link: "#"},
                {text: "Guides", link: "https://medium.com/@financeliquidity"},
                {text: "Partnership", link: "financeliquidity@gmail.com"},
            ],
            soc_media: [
                {link: "https://twitter.com/LIQUIDITFINANCE", icon: "twitter" },
                {link: "https://web.facebook.com/LiquidityFinance-214111300634295", icon: "facebook" },
                {link: "#", icon: "instagram" },
                {link: "https://t.me/liquidityfinanc", icon: "telegram" },
                {link: "#", icon: "github" }
            ]
        }
        }
    
})
</script>


<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding: 0px 3px;
  align-items: center;
  width: 60px;
  height: 34px;
}



/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch i {
    z-index: 3000;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.1);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #071229;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: rgb(243, 165, 8, 0.2);
}



input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
