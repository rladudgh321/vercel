import { produce } from "immer"

const initialState = {
 whatTypeImages:[{src:''}],
 ifLendTypeImages:[{src:''}],
 recommendImages:[{src:'/img/3/1.png'},{src:'/img/3/2.png'},{src:'/img/3/3.png'},{src:'/img/3/4.png'}],
 quickSaleImages:[{src:'/img/3/1.png'},{src:'/img/3/2.png'},{src:'/img/3/3.png'},{src:'/img/3/4.png'}],
 recentlyImages:[{src:'/img/3/1.png'},{src:'/img/3/2.png'},{src:'/img/3/3.png'},{src:'/img/3/4.png'}],
 institueImages:[{src:'/img/4/1.png'},{src:'/img/4/2.png'},{src:'/img/4/3.png'},{src:'/img/4/4.png'},{src:'/img/4/5.png'},{src:'/img/4/6.png'},{src:'/img/4/7.png'},{src:'/img/4/8.png'},{src:'/img/4/9.jpg'},{src:'/img/4/10.png'},{src:'/img/4/11.png'},{src:'/img/4/12.png'}],
    notePost:[{
        id:1,
        title:'부동산 서비스 오픈안내',
        user:'관리자',
        createdAt:'2023-01-02',
    }, {
        id:2,
        title:'국내 파트너사 모집 안내',
        user:'관리자',
        createdAt:'2023-01-03',
    }, {
        id:3,
        title:'스타벅스 기프티콘 이벤트',
        user:'관리자',
        createdAt:'2023-01-04',
    }],
}

const postReducer = (state = initialState, action) => produce(state, (draft => {

}));

export default postReducer;