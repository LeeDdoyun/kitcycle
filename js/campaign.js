var cam_arr = [
    {img:"campaign/cam1.png",title:"록시땅 Rethink Beauty 캠페인"},
    {img:"campaign/cam2.png",title:"컬리와 함께하는 새로운 도전"},
    {img:"campaign/cam3.png",title:"evian과 함께하는 ‘(re)new’ 캠페인"},
    {img:"campaign/cam4.png",title:"HAY ‘Love For Planet’ 캠페인"},
    {img:"campaign/cam5.png",title:"이케아 ‘EatEco’ 프로젝트"},
    {img:"campaign/cam6.png",title:"신세계 SI 공병 수거 캠페인"},
    {img:"campaign/cam7.png",title:"아페쎄(A.P.C),세계 환경의 날 기념 리사이클링 백"},
    {img:"campaign/cam8.png",title:"한국P&G 공병 반납 캠페인"},
    {img:"campaign/cam9.png",title:"소미노, 킷사이클과 함께하는 지속 가능한 미래"},
];

var item = ``;
item += `<section id="section_02">`;
console.log(item);

for(i = 0; i < 9; i++){
    item += `
    <div class="box">
        <img src="./img/${cam_arr[i].img}" alt="">
        <p class="cont">${cam_arr[i].title}</p>
    </div>
    `;
    console.log(item);
}
item += `</section>`;
document.write(item);