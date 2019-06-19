var building = [];
building[0] = "logo1.jpg";
building[1] = "logo4.jpg";
building[2] = "logo5.jpg";
building[3] = "logo6.jpg";
var num = 0;
     
function changepic(){
    if (num>=building.length-1)
        num=0;
        num=num+1;
        document.buildingpic.src=building[num];
}