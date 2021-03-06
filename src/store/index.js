import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postsList: [
      {
        id:1,
          author: {
                  iconurl: "https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
                  icontype: "jpg",
                  name: "John"
              },
          datetime: "sep 18, 2020 15:16",
          photo: {
                  url: "https://images.ctfassets.net/cnu0m8re1exe/7oqarKkCjfpv3CMjXa4qX0/81d29b70f5821301a9641d82f28475f1/shutterstock_281493026.jpg",
                  type: "jpg"
              },
          text: "I think it's going to rain",
          Button: {
                  "url": "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  "type": "png",
                  "likes": 0
              }
      },
      {
        id:2,
          author: {
                  "iconurl": "https://i.pinimg.com/750x/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg",
                  "icontype": "jpg",
                  "name": "Mary-Beth"
              },
          datetime: "oct 18, 2020 17:16",
          photo: {
                  "url": "https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/cat-behaviour.jpg",
                  "type": "jpg"
              },
          text: "Cute!",
          Button: {
                  "url": "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  "type": "png",
                  "likes": 0
              }
      },
      {
        id:3,
          author: {
                  iconurl: "https://topused.ee/import/import/manee01/16919852_1.jpg",
                  icontype: "jpg",
                  name: "Molly"
              },
          datetime: "jan 18, 2020 19:16",
          photo: {
                  "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
                  "type": "jpg"
              },
          text: "Pretty!",
          Button: {
                  "url": "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  "type": "png",
                  "likes": 0
              }
      },
      {
        id:4,
          author: {
                  iconurl: "https://toppng.com/uploads/preview/forest-lake-man-tourist-trees-nature-11570002919swssxk2nqu.jpg",
                  icontype: "jpg",
                  name: "Jack"
              },
          datetime: "nov 20, 2020 15:16",
          photo: {
                  url: "https://images.ctfassets.net/cnu0m8re1exe/7oqarKkCjfpv3CMjXa4qX0/81d29b70f5821301a9641d82f28475f1/shutterstock_281493026.jpg",
                  type: "jpg"
              },
          text: "I don't think it's going to rain",
          Button: {
                  url: "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  type: "png",
                  likes: 0
              }
      },
      {
        id:5,
          author: {
                  iconurl: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
                  icontype: "jpg",
                  name: "Micah"
              },
          datetime: "dec 18, 2020 20:11",
          photo: {
                  "url": "https://images.indianexpress.com/2021/06/big-tree-pixabay.jpg",
                  "type": "jpg"
              },
          text: "What a big tree",
          Button: {
                  url: "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  type: "png",
                  likes: 0
              }
      },
      {
        id:6,
          author: {
                  iconurl: "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg",
                  icontype: "jpg",
                  name: "Bill"
              },
          datetime: "sep 18, 2020 11:16",
          photo: {
                  url: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1075599562_hpy86b.jpg",
                  type: "jpg"
              },
          text: "Can somebody help me with my code?",
          Button: {
                  url: "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  type: "png",
                  likes: 0
              }
      },
      {
        id:7,
          author: {
                  iconurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg/1200px-Poster-sized_portrait_of_Barack_Obama.jpg",
                  icontype: "jpg",
                  name: "Arthur"
              },
          datetime: "sep 11, 2020 15:16",
          photo: {
                  url: "https://cd-m.emmedeklubi.ee/cache/92/d9/92d93875341e6d79473ce5164ffa7b9f.jpg",
                  type: "jpg"
              },
          text: "Yum!",
          Button: {
                  url: "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  type: "png",
                  likes: 0
              }
      },
      {
        id:8,
          author: {
                  iconurl: "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_2x3.jpg",
                  icontype: "jpg",
                  name: "Sadie"
              },
          datetime: "sep 25, 2020 11:11",
          photo: {
                  url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/interior-christmas-magic-glowing-tree-fireplace-royalty-free-image-1628537941.jpg",
                  type: "jpg"
              },
          text: "Can't wait for christmas!",
          Button: {
                  url: "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  type: "png",
                  likes: 0
              }
      },
      {
        id:8,
          author: {
                  iconurl: "https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg",
                  icontype: "jpg",
                  name: "Abigail"
              },
          datetime: "sep 13, 2020 13:18",
          photo: {
                  url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
                  type: "jpg"
              },
          text: "My favourite",
          Button: {
                  url: "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  type: "png",
                  likes: 0
              }
      },
      {
        id:9,
          author: {
                  iconurl: "https://images.iphonephotographyschool.com/24755/portrait-photography.jpg",
                  icontype: "jpg",
                  name: "Tilly"
              },
          datetime: "may 18, 2020 15:16",
          photo: {
                  url: "https://www.tartu.ee/sites/default/files/field/image/TarmoHaud2017_TartuHommik_0.jpg",
                  type: "jpg"
              },
          text: "Tartu",
          Button: {
                  url: "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  type: "png",
                  likes: 0
              }
      },
      {
        id:10,
          author: {
                  iconurl: "https://learn.zoner.com/wp-content/uploads/2015/06/028mm.jpg",
                  icontype: "jpg",
                  name: "Susan"
              },
          datetime: "jul 18, 2020 11:45",
          photo: {
                  url: "https://i.natgeofe.com/n/cfa19a0d-eff0-4628-8fdd-2ad8d66845dd/mountain-range-appenzell-switzerland_16x9.jpg",
                  type: "jpg"
              },
          text: "What a trip",
          Button: {
                  url: "http://cdn.onlinewebfonts.com/svg/img_95084.png",
                  type: "png",
                  likes: 0
              }
      }
  ]
  },
  getters: {
  },
  mutations: {IncreaseLikes(state, post){
    post.Button.likes += 1
  },
    ResetLikes: state => {
        state.postsList.forEach(post => {
        post.Button.likes = 0;
    })
    },},
  actions: {},
  modules: {},
});