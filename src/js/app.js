// selects ---------

let question = document.getElementById("question")
let answerbox = document.querySelectorAll("#answer>div")
let spans = document.querySelectorAll("#answer>div>.orgspan")
let next = document.getElementById("next")
let back = document.getElementById("back")
let clickbox = document.getElementById("clickbox")

let flag = 0

// selects ---- 






// ===========دکمه دارم و لایت  ====================== 

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    
    document.documentElement.classList.toggle("dark");

    
});

// ===========دکمه دارم و لایت  ====================== 


// ---------------------------------------------






// start niloufar ============












// end niloufar ==============







// --------------------------------------------------------------------







// start shaliz =======================














// end shaliz ========================






// ----------------------------------------------------------------------------







// start pooria ===============




// reset --------------------------------
answerbox.forEach((val) => {

    val.classList.remove("pointer-events-none")

})

back.setAttribute("disabled", "disabled")
back.style.background = "gray"

next.setAttribute("disabled", "disabled")
next.style.background = "gray"

// reset -------------------------------




// باکس سوالات ---------------------------------

answerbox.forEach((val) => {

    val.addEventListener("click", (e) => {

        next.removeAttribute("disabled")
        next.style.background = "#161b26"
        back.style.background = "gray"
        back.setAttribute("disabled", "disabled")


        // -------------------------------

        // shaliz 🔴 question box

        // ----------------------------

    })
})

// باکس سوالات ---------------------------------------





// دکمه جلو -----------------------------
next.addEventListener("click", () => {

    if (flag < 5) {
        flag++
    }
    back.removeAttribute("disabled")
    back.style.background = "#161b26"
    console.log(flag);

    next.setAttribute("disabled", "disabled")
    next.style.background = "gray"



    // ----------------------
    if (next.innerHTML == "Finish") {

        alert("niloufar popup")
        answerbox.forEach((val) => {
            val.classList.add("pointer-events-none")
        })

        //   🔴 niloufar popup -----------------
        

    }

    // ----------------------



    if (flag == 1) {
        question.innerHTML = "خروجی typeof 10 چیست؟"

        spans[0].innerHTML = "int"
        spans[1].innerHTML = "number"
        spans[2].innerHTML = "float"
        spans[3].innerHTML = "integer"


    } else if (flag == 2) {

        question.innerHTML = "کدام عملگر برای مقایسه مقدار و نوع استفاده می‌شود؟"

        spans[0].innerHTML = "="
        spans[1].innerHTML = "=="
        spans[2].innerHTML = "==="
        spans[3].innerHTML = "!="

    } else if (flag == 3) {

        question.innerHTML = 'نتیجه 2 + "3" چیست؟'

        spans[0].innerHTML = "5"
        spans[1].innerHTML = "23"
        spans[2].innerHTML = "6"
        spans[3].innerHTML = "Error"

    } else if (flag == 4) {
        question.innerHTML = 'کدام دستور اجرای تابع را متوقف و مقداری برمی‌گرداند؟'

        spans[0].innerHTML = "stop"
        spans[1].innerHTML = "break"
        spans[2].innerHTML = "return"
        spans[3].innerHTML = "exit"
    } else if (flag == 5) {

        question.innerHTML = 'مقدار اولیه متغیر تعریف‌ شده بدون مقدار چیست؟'

        spans[0].innerHTML = "null"
        spans[1].innerHTML = "false"
        spans[2].innerHTML = "undefined"
        spans[3].innerHTML = "0"

        next.innerHTML = "Finish"


    }


})


// دکمه جلو -----------------------------






// دکمه قبلی ----------------------------
back.addEventListener("click", () => {



    back.removeAttribute("disabled")
    back.style.background = "#161b26"
    next.style.fontSize = "14px"
    next.innerHTML = "< Next "
    flag--
    console.log(flag);


    if (flag == 0) {
        back.setAttribute("disabled", "disabled")
        back.style.background = "gray"
        question.innerHTML = "کدام‌یک از گزینه‌های زیر یک تابع پیکانی (Arrow Function) صحیح در جاوااسکریپت است؟"
        spans[0].innerHTML = "const add = (a, b) => a + b;"
        spans[1].innerHTML = "function => add(a, b) { return a + b; }"
        spans[2].innerHTML = "const add = function(a, b) => { return a + b; }"
        spans[3].innerHTML = "arrow add(a, b) { return a + b; }"
    }

    if (flag == 1) {
        question.innerHTML = "خروجی typeof 10 چیست؟"

        spans[0].innerHTML = "int"
        spans[1].innerHTML = "number"
        spans[2].innerHTML = "float"
        spans[3].innerHTML = "integer"


    } else if (flag == 2) {

        question.innerHTML = "کدام عملگر برای مقایسه مقدار و نوع استفاده می‌شود؟"

        spans[0].innerHTML = "="
        spans[1].innerHTML = "=="
        spans[2].innerHTML = "==="
        spans[3].innerHTML = "!="

    } else if (flag == 3) {

        question.innerHTML = 'نتیجه 2 + "3" چیست؟'

        spans[0].innerHTML = "5"
        spans[1].innerHTML = "23"
        spans[2].innerHTML = "6"
        spans[3].innerHTML = "Error"

    } else if (flag == 4) {
        question.innerHTML = 'کدام دستور اجرای تابع را متوقف و مقداری برمی‌گرداند؟'

        spans[0].innerHTML = "stop"
        spans[1].innerHTML = "break"
        spans[2].innerHTML = "return"
        spans[3].innerHTML = "exit"
    } else if (flag == 5) {

        question.innerHTML = 'مقدار اولیه متغیر تعریف‌ شده بدون مقدار چیست؟'

        spans[0].innerHTML = "null"
        spans[1].innerHTML = "false"
        spans[2].innerHTML = "undefined"
        spans[3].innerHTML = "0"



    }



})


// دکمه قبلی ----------------------------


// end pooria ================


// -----------------------------------------------------------------------------