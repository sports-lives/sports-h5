

import {Component} from "nuxt-property-decorator";
import * as tsx from 'vue-tsx-support'
import  './home.scss'
import {Download} from "~/components/download";
import {AnchorItem} from "~/components/anchorItem";
@Component
export default class InfoPage extends tsx.Component<any>{
  private hot=[];
  private recommend=[];
  private nav=[]
  async asyncData({ $axios }) {
    const data = await $axios.$get('https://api.firefoxbet.com/api/anchor/home');
    const nav= await $axios.$get('https://api.firefoxbet.com/api/channel/list')
    return {...data.data,nav:nav.data}
  }
  render (){
    const header=(
      <div class='header'>
        <li class='header-item'>
         热门
        </li>
        {
          this.nav.map((item:any,i)=>( <li class='header-item'>
            {item.channelName}
          </li>))
        }
      </div>
    )

     const items=this.hot.map((item:any, i)=>(<AnchorItem item={item} key={i}></AnchorItem>));
     const banner=this.recommend.map((item:any,index)=>(
       <van-swipe-item>
         <img src={item.cover} alt=""/>
       </van-swipe-item>
     ))

    return (<div class='home'>
      <Download></Download>
      {header}
       <div class='banner'>
         <van-swipe  autoplay="3000" indicator-color="white">
           {banner}

         </van-swipe>
       </div>
      <div class='match'>
        {items}
      </div>
    </div>)
  }
}
