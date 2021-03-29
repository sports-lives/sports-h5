
import {Component} from "nuxt-property-decorator";
import * as tsx from "vue-tsx-support";
 import down from './down.module.scss'
@Component
export  class Download extends tsx.Component<any>{
  render(){
    return (
            <div class={down.down}>
        <img src="https://m.dqiu.com/img/banner-lingqu@2x.279fac18.png" alt=""/>
       </div>
    )
  }
}
