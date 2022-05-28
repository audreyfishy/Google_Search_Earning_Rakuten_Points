const GooglePattern = /https:\/\/www\.google\.com\/search\?q=([^&]+)/;
const RakutePattern = /https:\/\/websearch\.rakuten\.co\.jp\/Web\?qt=([^&]+)/;;
let reGoogle = location.href.match(GooglePattern);
if(reGoogle){
    let keyWords = location.href.match(GooglePattern)[1];
    window.open("https://websearch.rakuten.co.jp/Web?qt=" + keyWords+ "&col=OW", 'popup', 'width=1, height=1');
}
let reRakuten = location.href.match(RakutePattern);
if(reRakuten){
    window.onload = () => {
        window.close();
    }   
}