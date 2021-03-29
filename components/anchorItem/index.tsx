import {Component, Prop} from "nuxt-property-decorator";
import * as tsx from "vue-tsx-support";
import  './anchor.scss';
@Component
export  class AnchorItem extends tsx.Component<any>{
  @Prop(Object)
  private item: any;
  @Prop({
    type:Boolean,
    default:false,
  })
  public isHome: any;
  render(props) {
    const classes = [this.isHome ? 'isHome' :'isOther'];
    const { roomId, cover, user, isLive, title,carousel } = this.item;
    let matchTitle='';
    if (carousel){
      matchTitle=`${carousel.league_name} ${carousel.home_name} VS ${carousel.away_name}`

    }
    return (
      <router-link target="_blank" to={ '/' + roomId} data-title={matchTitle} class={['anchor-item', 'home-anchor', ...classes]}>

        <div class='anchor-cover'>
          <img src={cover} alt={matchTitle} />
        </div>
        <div class='anchor-info'>
          <div class='anchor-avatar'>
            <img src={user.avatar} alt={matchTitle} />
          </div>
          <div class='anchor-info-desc'>
            <div class={['anchor-info-title', 'ellipsis']}>
              {title ||matchTitle|| '凯尔特人vs快船！双锋的较量！一号位的自救！'}
            </div>
            <div class='anchor-info-warp'>
              <div class='anchor-info-name'>{user.nickname || '豪球用户' + user.id}</div>
              <div class='anchor-info-hot'>
                <i class='hotIcon'></i>
                1.6万
              </div>
            </div>
          </div>
        </div>
      </router-link>
    );
  }
};
