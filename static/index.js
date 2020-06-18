let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
// let item = document.getElementById("img7");
let item = document.getElementById("introsection");


        btn.onmouseenter = function(){
            item.scroll({left: 10000});
            btn2.classList.replace('not-visible', 'is-visible');
            console.log("entered");
        }


        btn2.onmouseenter = function(){
            item.scroll({left: -10000})
        }

        btn2.onmouseleave = function(){
            btn2.classList.replace('is-visible', 'not-visible')
        }













// let callback = (entries, options)=>{
// entries.forEach(entry => {
//         btn.onmouseenter = function(){
//             item.scroll({left: 10000});
//             btn2.classList.add('is-visible');
//         }
    
// });
// }


// let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.2,
// }


//     let observer = new IntersectionObserver(callback, options);
//     observer.observe(item)




