import {Component, Prop} from "nuxt-property-decorator";
import * as tsx from "vue-tsx-support";
import anchor from './anchor.module.scss';
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
    const classes = [this.isHome ? anchor.isHome : anchor.isOther];
    const { roomId, cover, user, isLive, title,carousel } = this.item;
    let matchTitle='';
    if (carousel){
      matchTitle=`${carousel.league_name} ${carousel.home_name} VS ${carousel.away_name}`

    }
    return (
      <router-link target="_blank" to={ '/' + roomId} data-title={matchTitle} class={[anchor.anchorItem, anchor.homeAnchor, ...classes]}>

        <div class={anchor.anchorCover}>
          <img src={cover} class={matchTitle} />
        </div>
        <div class={anchor.anchorInfo}>
          <div class={anchor.anchorAvatar}>
            <img src={user.avatar} alt={matchTitle} />
          </div>
          <div class={anchor.anchorInfoDesc}>
            <div class={[anchor.anchorInfoTitle, 'ellipsis']}>
              {title ||matchTitle|| '凯尔特人vs快船！双锋的较量！一号位的自救！'}
            </div>
            <div class={anchor.anchorInfoWarp}>
              <div class={anchor.anchorInfoName}>{user.nickname || '豪球用户' + user.id}</div>
              <div class={anchor.anchorInfoHot}>
                <i class={anchor.hotIcon}></i>
                1.6万
              </div>
            </div>
          </div>
        </div>
      </router-link>
    );
  }
};
