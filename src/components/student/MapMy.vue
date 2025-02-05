<template>
  <div id="mapmy">
    <div id="container"></div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";
export default {
  name: "mapmy",
  setup() {
    const { proxy } = getCurrentInstance();
    const map = shallowRef(null);
    console.log(AMapLoader)
    function  initMap(){
        AMapLoader.load({
            key:"3011664e82dfdad74a181ac6953c12f8",             // 申请好的Web端开发者Key，首次调用 load 时必填
            version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins:['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Geolocation',
        'AMapUI.loadUI', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.PolyEditor', 'AMap.CircleEditor'],
       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap)=>{
            proxy.map = new AMap.Map("container",{  //设置地图容器id
                viewMode:"3D",    //是否为3D地图模式
                zoom:18,           //初始化地图级别
                center:[120.725073,31.483589], //初始化地图中心点位置
            });
        }).catch(e=>{
            console.log(e);
        })
    }
    onMounted(()=>{
        initMap()
    })
    return {
      map,
      initMap
    };
  },

};
</script>

<style lang="scss" scoped>
#mapmy {
  width: 60vw;
  height: 35vw;
  // background-color: rgb(236, 199, 214);
}
#container{
    width:100%;
    height:100%;
}
</style>
