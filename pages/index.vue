<template>
  <main class="bg-dark"> 

         <Navbar />
       
     
      <main class="">


          <div class="container py-sm-5 " >
              <Totop />
             <div >
                <div class="row py-sm-5 pt-3 flex-sm-row">
                   
                 <div class="col-sm py-sm-5">
                   <div class="py-sm-5 p-3 py-4 text-sm-start text-center">
                     <div>
                        <p class="text-light display-4 fw-900" >LIQUIDITY FINANCE</p>
                        <p class="text-light lead"  >
                          Liquidity Finance is a products-focused (Defi, Gamefi, Metaverse and NFT) project that is centered on developing secure and innovative blockchain products. 
                        </p>
                     </div>
                        <div class="mb-5">
                            <button class="btn btn-primary btn-lg shadow px-4 py-3" @click="downloadWhitepaper()">
                            <small class="fw-700 " >DOWNLOAD WHITEBOARD</small>
                            </button>
                        </div>
                        
                        <div class="d-flex justify-content-sm-start justify-content-center">
                            <p  class=" soc br-curve d-flex justify-content-center align-items-center">
                              <i class="fab fa-twitter fa-lg text-primary  " style="font-size: 24px"></i>
                            </p>

                             <p  class=" soc br-curve d-flex mx-3 justify-content-center align-items-center">
                              <i class="fab fa-telegram fa-lg text-info   " style="font-size: 24px"></i>
                            </p>

                             <p  class=" soc br-curve d-flex justify-content-center align-items-center">
                              <i class="fab fa-facebook fa-lg text-primary  " style="font-size: 24px"></i>
                            </p>
                        </div>
                   </div>
                 </div>
                  <div class="col-sm py-2 text-center">
                    <img src="~/assets/img/background/group9141.png" style="position: relative; top: -50px" class="image" alt="">
                 </div>
               
              </div>
             </div>
          </div>

     </main>




     <!-- SECOND AREA -->

     <main class="bg-secondary p-sm-5 text-center" id="TOKENOMICS">
           <div class="p-sm-5 p-3 py-5" >
             <div class="mb-5">
                  <h1 class="text-light display-3 fw-900" >Token Distribution</h1>
                  <h4 class="text-muted fw-900">Total Token Supply: 20 Billion LFI</h4>
             </div>
              <img src="~/assets/img/background/liq.png" class="img-fluid" alt="">
           </div>
     </main>





    <!-- THIRD AREA -->

     <main class="container p-4 py-5">
         <div class="p-sm-5">
             <h1 class="text-light display-3 fw-900 mb-3" >Governance</h1>
              <h4 class=" fw-700 text-warning">Governed by the community</h4>

              <p class="text-light text-justify lead"  >
                Our governance is ruled by a President and 4 Governors whose leadership depends on the Civilians 
                (our token holders with a few minimum amount of tokens stored in either wallet or staked.)
                 and execution that depends on a Multisig (a decentralized solely signatory right given only to Governors and 
                President to vote and create a proposal on any development found or needed for the project success).
              </p>

               <button class="btn btn-outline-warning btn-lg shadow px-3 py-3" >
                          <small class="fw-700 " >READ MORE</small>
                </button>


         </div>
     </main>

    <main id="FEATURES">
       <HomeTab />
    </main>


    <!-- AREA ROADMAP -->
     <main class="" id="ROADMAP">
      <h1 class="p-4 text-center fw-800 text-light display-4 bg-linear">LIQUIDITY FINANCE PRODUCT ROADMAP</h1>
      <div class="container">
           <div class="row">
          <div class="col-sm p-sm-5 p-3" v-for="item in roadmap" :key="item.name">
              <div class="card bg-secondary h-100 p-4 br-curve" style="border-radius: 10px">
                  <div class="card-body   text-light">
                     <div>
                        <h1 class="fw-900 text-warning">{{item.text}}</h1>
                        <p class="lead fw-900">{{item.subtext}}</p>
                     </div>

                     <div>
                        <p v-for="i in item.checked" :key="i.text">
                          <i class="fas fa-check-circle  fa-lg" :class="i.status ? 'text-success ': 'text-muted'"></i>
                            <span class="ms-2 ">{{i.label}}</span>
                        </p>
                     </div>

                  </div>
              </div>
          </div>
      </div>
      </div>

    </main>



    <!-- AREA 8 -->

    <main class="">
      <h1 class="p-4 text-center fw-800 text-light display-4 bg-linear">LIQUIDITY FINANCE REVENUE STREAM</h1>
      <div class="container text-center p-sm-5 py-4">
         <img src="~/assets/img/background/Group946.png" class="img-fluid" alt="">
      </div>

    </main>



    <br><br>
    <!-- TEAM AREA -->
    <main class="container">
     <main>
        <div class="row">
          <div class="col-sm px-3 text-sm-start text-center">
             <h2 class="text-light display-3 fw-700 ">Team Members</h2>
              <p class="text-light  lead">
                Liquidity Finance is developed and backed by a team of both technologists and full time cryptocurrency experts with 
                entrepreneurial and business development background, also proficient in trading and professional risk and portfolio management.
              </p>
          </div>
          <div class="col-sm"></div>
      </div>

      <div class="row">
          <div class="col-sm p-sm-5 p-3" v-for="item in members" :key="item.name">
              <div class="card bg-secondary p-4 br-curve" style="border-radius: 10px">
                  <img :src="item.image" alt="" class="card-img-top  mx-auto" style="width: 150px">
                  <div class="card-body text-center  text-light">
                     <div>
                        <h3 class="fw-900">{{item.name}}</h3>
                      <p class="lead fw-500">{{item.title}}</p>
                      <p class="small">{{item.portfolio}}</p>
                     </div>

                      <div>
                          <ul class="nav justify-content-center">
                            <li class="nav-item" v-if="item.twitter">
                               <a :href="item.twitter"  class="nav-link text-warning"> <i class="fab fa-twitter fa-lg"></i></a>
                            </li>
                             <li class="nav-item" v-if="item.instagram">
                               <a :href="item.instagram"  class="nav-link text-warning"> <i class="fab fa-instagram fa-lg"></i></a>
                            </li>
                             <li class="nav-item" v-if="item.linkedin">
                               <a :href="item.linkedin"  class="nav-link text-warning"> <i class="fab fa-linkedin-in fa-lg"></i></a>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     </main>
    </main>





  <br><br>

  <Footer />

  </main>  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      bgImage: {
         backgroundImage: `url(${require('~/assets/img/background/group9141.png')})`,
         backgroundRepeat: "no-repeat",
         backgroundSize: "60%",
         backgroundPositionX: `100%`,
      },
      compare_data: [
        {text: "Order placing", lfi: true, pancake: false, uniswap: false, sushi: false},
        {text: "Swap & transfer", lfi: true, pancake: false, uniswap: false, sushi: false},
        {text: "Token site and social handles", lfi: true, pancake: false, uniswap: false, sushi: false},
        {text: "Governance protection", lfi: true, pancake: false, uniswap: false, sushi: false},
        {text: "Liquidity pool timelock", lfi: true, pancake: true, uniswap: true, sushi: true},
        {text: "Token mint function", lfi: true, pancake: true, uniswap: true, sushi: true},
        {text: "Tokens balance", lfi: true, pancake: true, uniswap: true, sushi: true},
        {text: "Analytics Tools", lfi: true, pancake: true, uniswap: true, sushi: true},
        {text: "Farming Governance protection", lfi: true, pancake: false, uniswap: false, sushi: false},
        {text: "Clean User-friendly UI", lfi: true, pancake: true, uniswap: true, sushi: false},
        {text: "Market cap", lfi: true, pancake: true, uniswap: true, sushi: true},

      ],
      members: [
        {name: "Abubakar Tanko", title: "Founder/CEO", portfolio: "Cryptocurrency Expert", image: require("~/assets/img/team/abu.png"), instagram: "#", twitter: "#", linkedin: false},
        {name: "Ukpe, Jacob Emmanuel", title: "Co-founder", portfolio: "Digital Product Designer", image: require("~/assets/img/team/jacob.png"), instagram: "https://www.instagram.com/jacnettech", twitter: "https://twitter.com/JacobUkpe", linkedin: "https://www.linkedin.com/in/jacob-ukpe-6595b2136"},
        {name: "Umar, Muhammad Zakari", title: "Technical Lead", portfolio: "Blockchain developer.",image: require("~/assets/img/team/umar.png"), instagram: "https://www.instagram.com/mhstr_unique", twitter: "https://www.twitter.com/mhstr_unique", linkedin: "https://www.linkedin.com/in/umar-muhammad-zakari/"}
      ],
      roadmap: [
        {
          text: "Q4 2021", 
          subtext: "Project Announcement", 
          checked: [
            {label: "WEBSITE LAUNCH", status: true}, 
            {label: "MINI AIRDROP", status: true}, 
            {label: "GIVEAWAY CAMPAIGN", status: true}, 
          ]
        },
        {
          text: "Q1 2022", 
          subtext: "Marketing & Publicity", 
          checked: [
            {label: "PRIVATE SALE ROUND ANNOUNCEMENT", status: false}, 
            {label: "PRIVATE SALE", status: false}, 
            {label: "PUBLIC SALE ANNOUNCEMENT", status: false}, 
            {label: "PUBLIC SALE", status: false}, 
          ]
        },
         {
          text: "Q2 2022", 
          subtext: " Products Development", 
          checked: [
            {label: "ISO DAPP", status: false}, 
            {label: "LFI DAPP", status: false}, 
            {label: "LFISWAP & PANCAKE SWAP LISTING", status: false}, 
            {label: "STAKING DASHBOARD", status: false}, 
            {label: "FARMING", status: false}, 
            {label: "LIQUIDITY LOCKING", status: false}, 
            {label: "NEW ROADMAP FOR MORE PRODUCTS", status: false}, 
          ]
        }
      ]
    }
  },
  methods: {
    downloadWhitepaper(){
      window.open("https://drive.google.com/file/d/1VXBKY2N-gQmNfNIUWmYn03tjJLhN6vF4/view?usp=drivesdk", "_blank");
    }
  }
})
</script>

<style >
  /* .bgImage {
     background-image: url('~/assets/img/background/group9141.png');
         background-repeat: "no-repeat";
         background-size: "60%";
         background-position-x: 100%;
  } */
  .image {
    width: 120% ;
  }

  @media (max-width: 600px) {
       .image {
    width: 80%;
  }
  }
</style>


