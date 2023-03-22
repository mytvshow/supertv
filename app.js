const data = [
    {
        type: "影音平台",
        name: "Youtube",
        url: "https://www.youtube.com",
        img: "https://www.youtube.com/img/desktop/yt_1200.png",
    },
    {
        type: "影音平台",
        name: "Netflex",
        url: "https://www.netflix.com/tw/",
        img: "https://www.citypng.com/public/uploads/preview/-11594687246vzsjesy7bd.png",
    },
    {
        type: "電視直播",
        name: "四季線上",
        url: "https://www.4gtv.tv/channel/4gtv-4gtv003?set=4&ch=1",
        img: "https://m.4gtv.tv/image/4gTV.png",
    },
    {
        type: "電視直播",
        name: "TV線上看電視",
        url: "https://tv.wfuapp.com/2019/12/pts-live.html",
        img: "image/web/001.png",
    },
    {
        type: "電影戲劇",
        name: "小鴨看片",
        url: "https://777tv.app/vod/show/area/%E8%87%BA%E7%81%A3/id/1.html",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpq8czMUFJcsOu4zqff4jhyF0qHejmiZqPLQ&usqp=CAU.JPG",
    },
    {
        type: "電影戲劇",
        name: "DramasQ",
        url: "https://dramasq.cc/",
        img: "image/web/002.png",
    },
    {
        type: "其他",
        name: "google",
        url: "https://google.com/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU",
        },

];

const app = Vue.createApp({
    data(){
        return{
            filters: ['All', '影音平台', '電視直播', '電影戲劇', '其他'],
            selectedFilter: 'All',
            items: data,
        }
    },
    computed: {
        filteredItems() {
            if (this.selectedFilter === 'All') {
            return this.items.map((item) => item);
            }
            return this.items
            .filter((item) => item.type === this.selectedFilter)
            .map((item) => item);
        },
        },
        methods: {
        selectFilter(filter) {
            this.selectedFilter = filter;
        },
    },
});

app.mount("#app")