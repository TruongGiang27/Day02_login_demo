let kbb = ["Kéo","Búa","Bao"];

let result = Math.floor(Math.random() * kbb.lenght);

function check(result){
    switch(result){
        case 0:
            if(kbb == 0){
                alert("Bạn Hòa");
            }
            else if(kbb == 1){
                alert("Ban thắng /máy ra kéo");
            }
            else if(kbb == 2){
                alert("Bạn thua /máy ra bao");
            }
        case 1:
            if(kbb == 0){
                alert("Bạn thắng /máy ra kéo");
            }
            else if(kbb == 1){
                alert("Ban hòa /máy ra búa");
            }
            else if(kbb == 2){
                alert("Bạn thua /máy ra bao");
            }
        case 2:
            if(kbb == 0){
                alert("Bạn thua /máy ra kéo");
            }
            else if(kbb == 1){
                alert("Ban thắng /máy ra búa");
            }
            else if(kbb == 2){
                alert("Bạn hòa /máy ra bao");
            }   
    }
    
}