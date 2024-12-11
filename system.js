function grade() {
    var score = document.getElementById("score").value;
    if (score >= 80) {
        document.getElementById("showgrade").innerHTML = "คุณได้เกรด 4";
    }
    else if (score >= 75) {
        document.getElementById("showgrade").innerHTML = "คุณได้เกรด 3.5";
    }
    else if (score >= 70) {
        document.getElementById("showgrade").innerHTML = "คุณได้เกรด 3";
    }
    else if (score >= 65) {
        document.getElementById("showgrade").innerHTML = "คุณได้เกรด 2.5";
    }
    else if (score >= 60) {
        document.getElementById("showgrade").innerHTML = "คุณได้เกรด 2";
    }
    else if (score >= 55) {
        document.getElementById("showgrade").innerHTML = "คุณได้เกรด 1.5";
    }
    else if (score >= 50) {
        document.getElementById("showgrade").innerHTML = "คุณได้เกรด 1";
    }
    else {
        document.getElementById("showgrade").innerHTML = "คุณไม่ผ่านเกณฑ์";
    }
    document.getElementById("showscore").innerHTML = "คะแนนของคุณ " + score;
}

function BMI() {
    
    var Height = document.getElementById("Height").value;
    var weight = document.getElementById("wei").value;
    var BMI = weight / ((Height / 100) * (Height / 100))
    if (BMI < 18.50) {
        document.getElementById("showtest").innerHTML = "น้ำหนักน้อย / ผอม"
    } else if (BMI >= 18.50 && BMI < 22.90) {
        document.getElementById("showtest").innerHTML = "ปกติ (สุขภาพดี)"
    } else if (BMI >= 23 && BMI < 24.90) {
        document.getElementById("showtest").innerHTML = "ท้วม / โรคอ้วนระดับ 1"
    } else if (BMI >= 25 && BMI < 29.90) {
        document.getElementById("showtest").innerHTML = "อ้วน / โรคอ้วนระดับ 2"
    } else {
        document.getElementById("showtest").innerHTML = "อ้วนมาก / โรคอ้วนระดับ 3"
    }
    document.getElementById("showBMI").innerHTML = "ค่าดัชนีมวลกายของคุณ " + BMI;
}

function cal() {
    var weight = document.getElementById("weight").value;
    if (document.getElementById('female').checked) {
        document.getElementById("showsex").innerHTML = "หญิง "
        document.getElementById("showweight").innerHTML = "แคลอรี่ที่ต้องการใช้ต่อวันเท่ากับ " + weight * 27 + " กิโลแคลอรี่"
    } else if (document.getElementById('male').checked) {
        document.getElementById("showsex").innerHTML = "ชาย "
        document.getElementById("showweight").innerHTML = "แคลอรี่ที่ต้องการใช้ต่อวันเท่ากับ " + weight * 31 + " กิโลแคลอรี่"
    }
}

function tax() {
    var salary = document.getElementById("salary").value;
     var tax = 0;
    
     if(salary >=200001 && salary <= 500000){
         tax = salary*.05;
     }
     if(salary >=500001 && salary <= 1000000){
         tax = salary*.1;
     }
     if(salary >=1000001 && salary <= 5000000){
         tax = salary*.15;
     }
     if(salary >=5000001 ){
         tax = salary*.25;
     }
     document.getElementById("showsalary1").innerHTML ='รายได้สุทธิของคุณ ' + salary + "บาท";
     document.getElementById("showtax").innerHTML ="ภาษีที่ต้องชำระ = "+tax/12 + "บาท";
}

function salary() {
    var money = document.getElementById("money").value;
    var cost = document.getElementById("cost").value;
    var Deduction = document.getElementById("Deduction").value;
    var salary = money - cost - Deduction;
    document.getElementById("showsalary").innerHTML ='รายได้สุทธิของคุณ ' + salary + "บาท";
}