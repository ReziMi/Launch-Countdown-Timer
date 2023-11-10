const today = new Date();  // მიმდინარე დრო
const targetDate = new Date('2023-12-31T23:59:00');  // მიმდინარე დროს ვამატებთ 14 დღეს და ვიღებთ target date-ს

const countDownDate = targetDate.getTime();  // target date მილიწამებში

countDown();

let x = setInterval(() => {
    countDown();
}, 1000);

function countDown(){
    const currentTime = new Date().getTime();  // მიმდინარე დრო მილიწამებში

    let distance = countDownDate - currentTime;  // სხვაობა მიზნობრივ და მიმდინარე დროებს შორის

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance <= 0) {
        // როცა გავა 14 დღე, ჩერდება დათვლა
        clearInterval(x);
    }   
}
