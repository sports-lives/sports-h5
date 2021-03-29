import {Component} from "nuxt-property-decorator";
import * as tsx from 'vue-tsx-support'
import home from '../home.scss'
import {AnchorItem} from "~/components/anchorItem";
@Component
export default class InfoPage extends tsx.Component<any>{
  private hot=[];
  private recommend=[];
  private nav=[]
  async asyncData({ $axios }) {
    const data = await $axios.$get('https://api.firefoxbet.com/api/anchor/home');
    return {...data.data}
  }
  render (){


    const items=this.hot.map((item:any, i)=>(<AnchorItem item={item} key={i}></AnchorItem>));

    return (<div class='home'>
      <div class='match'>
        {items}
      </div>
    </div>)
  }
}
