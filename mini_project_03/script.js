let counters = document.querySelectorAll(".last_child");
let time = 300;

counters.forEach((counter) => {
    let updateCount = () => {
        let target = +counter.getAttribute("data_target");
        let count = counter.innerText;

        let increment = target / time;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1000);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

let health = document.querySelector(".head");

setTimeout(() => {
    health.innerText = "You are feet!";
}, 4000);