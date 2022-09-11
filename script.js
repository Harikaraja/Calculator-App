var str="";
var buttonss = document.querySelectorAll('button');
Array.from(buttonss).forEach((button)=>{

    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == "C"){

            str = "";
            document.querySelector('input').value = str ;
        }
        else if(e.target.innerHTML == "="){
            let t = eval(str);
            document.querySelector('input').value = t ;
            str = t ;
        }
        // else if(e.target.innerHTML=="Del"){

        //     console.log(str);
        //     // str.slice(0,-1);
        //     // str.substring(0,str.length-1);
        //     let r = str;
        //     r.replace(/.$/, '');
        //     console.log(r);
        //     document.querySelector('input').value = r;
        //     console.log("quit");
        // }
        else if(e.target.innerHTML == "00"){
            str = str + "00";
            document.querySelector('input').value = str;
        }
        else{

            str = str + e.target.innerHTML;
            document.querySelector('input').value = str ;
        }
    });
});

//M+,M- code