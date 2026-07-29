// selects ---------

let question = document.getElementById("question")
let answerbox = document.querySelectorAll("#answer>div")
let spans = document.querySelectorAll("#answer>div>.orgspan")
let next = document.getElementById("next")
let back = document.getElementById("back")
let clickbox = document.getElementById("clickbox")
const questionBox= document.getElementById('questionBox')

let flag = 0
let score = 0 
let ans0,ans1,ans2,ans3,ans4,ans5


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

         if (flag == 0) {
            back.style.background = "gray"
            back.setAttribute("disabled", "disabled")
        }


        // -------------------------------

      







        // ----------------------------

    })
})

// باکس سوالات ---------------------------------------





// دکمه جلو -----------------------------
next.addEventListener("click", () => {
clearAnswerStyles()
    if (flag < 5) {
        flag++
        
    }
    back.removeAttribute("disabled")
    back.style.background = "#161b26"
    console.log(flag);

    next.setAttribute("disabled", "disabled")
    next.style.background = "gray"
    let finish = false
    if(next.innerHTML == 'Finish'){
         finish = true
    }

    questions()
    
    
        
    // ----------------------
    if (finish) {
        questionBox.setAttribute('inert','inert')
        setTimeout(() => {
            alert("niloufar popup")
        answerbox.forEach((val) => {
            val.classList.add("pointer-events-none")
        })
        }, 1000);

        //   🔴 niloufar popup -----------------
        

    }

    // ----------------------



    

})


// دکمه جلو -----------------------------






// دکمه قبلی ----------------------------
back.addEventListener("click", () => {
    savingPreviousAnswers()


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

    questions()


})

// دکمه قبلی ----------------------------



///تابع سوالات به غیر از سوال اول
function questions(){{
    clearAnswerStyles()
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
    savingPreviousAnswers()
}}
// end pooria ================
///تابع سوالات به غیر از سوال اول

//shaliz
  // shaliz 🔴 question box
checkAnswer()
function checkAnswer(){
    answerbox.forEach((val,i,arr)=>{
        val.addEventListener('click',()=>{
            console.log(i)
            if(flag == 0){
                ans0 = i
             if(i == 0){
                correctAnswer(val)
             }else{
                val.classList.add('wrong')
                arr[0].classList.add('correct')
             }
            
            }else if(flag == 1){
                ans1 = i
                 if(i == 1){
                correctAnswer(val)
             }else{
                val.classList.add('wrong')
                arr[1].classList.add('correct')
             }

            }else if(flag == 2){
                ans2 = i
                 if(i == 2){
                correctAnswer(val)
             }else{
                val.classList.add('wrong')
                arr[2].classList.add('correct')
             }
            }else if(flag == 3){
                ans3 = i
                 if(i == 1){
                correctAnswer(val)
             }else{
                val.classList.add('wrong')
                arr[1].classList.add('correct')
             }
            }else if(flag == 4){
                ans4 = i
                 if(i == 2){
                correctAnswer(val)
             }else{
                val.classList.add('wrong')
                arr[2].classList.add('correct')
             }
            }else {
                ans5 = i
                 if(i == 0){
                correctAnswer(val)
             }else{
                val.classList.add('wrong')
                arr[0].classList.add('correct')
             }
            }
        })
    })
}


function correctAnswer(item){
    item.classList.add('correct')
                score ++
}

function clearAnswerStyles(){
    answerbox.forEach((val)=> val.classList.remove('correct','wrong'))
}

function savingPreviousAnswers(){
    clearAnswerStyles()
    if(flag >1) back.removeAttribute('disabled')

    if(flag == 0 && ans0 !=null){
    next.removeAttribute('disabled')
        if(ans0 == 0){
            answerbox[0].classList.add('correct')
        }else{
            answerbox[ans0].classList.add('wrong')
            answerbox[0].classList.add('correct')
        }
    }else if(flag == 1 && ans1 !=null){
    next.removeAttribute('disabled')
        if(ans1 == 1){
            answerbox[1].classList.add('correct')
        }else{
            answerbox[ans1].classList.add('wrong')
            answerbox[1].classList.add('correct')
        }
    }else if(flag == 2 && ans2 !=null){
    next.removeAttribute('disabled')

        if(ans2 == 2){
            answerbox[2].classList.add('correct')
        }else{
            answerbox[ans2].classList.add('wrong')
            answerbox[2].classList.add('correct')
        }
    }else if(flag == 3 && ans3 !=null){
    next.removeAttribute('disabled')

         if(ans3 == 1){
            answerbox[1].classList.add('correct')
        }else{
            answerbox[ans3].classList.add('wrong')
            answerbox[1].classList.add('correct')
        }
    }else if(flag == 4 && ans4 !=null){
    next.removeAttribute('disabled')

         if(ans4 == 2){
            answerbox[2].classList.add('correct')
        }else{
            answerbox[ans4].classList.add('wrong')
            answerbox[2].classList.add('correct')
        }
    }else if(flag == 5 && ans5 !=null){
    next.removeAttribute('disabled')

         if(ans5 == 0){
            answerbox[0].classList.add('correct')
        }else{
            answerbox[ans5].classList.add('wrong')
            answerbox[0].classList.add('correct')
        }
    }
}
//shaliz//



// -----------------------------------------------------------------------------




