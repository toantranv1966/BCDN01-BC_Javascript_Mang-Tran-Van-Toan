// BÀI TẬP MÃNG - JAVASCRIPT

var numArray = [];

// Thêm phần tử vào mãng

function addEle(){
    var num = parseInt(document.querySelector("#inputNumber").value);
    numArray.push(num);
    document.getElementById("mangsonguyen").style.display = "block";
    document.getElementById("mangsonguyen").innerHTML = "Mãng số nguyên : " + numArray + " ";
}

document.getElementById("btn-submit").onclick = addEle;

// Bài 1 : Tính tổng các số dương trong mãng

function sum(){
    var total = 0;
        for(var i = 0; i < numArray.length; i++){
            if(numArray[i] > 0){
                total+= numArray[i];
            }
        }
        document.getElementById("noti-tongSoDuong").innerHTML = "Tổng số dương : " + total;
}

document.getElementById("btn-sum").onclick = sum;

// Bài 2 : Đếm tổng các số dương trong mãng

function demSoDuong(){
    var soDuong = 0;
    for (var i =0; i < numArray.length;i++){
        if(numArray[i] > 0){
            soDuong++;
        }
    }
    document.getElementById("noti-demSoDuong").innerHTML = "Đếm số dương : " + soDuong;
}

document.getElementById("btn-Count").onclick = demSoDuong;

// Bài 3 : Tìm số nhỏ nhất trong mãng

function timMin(){
    var index = 0;
    var min = numArray[index];
    for (var i = 0 ; i < numArray.length ; i++)
    {
        if (numArray[i] < min)
        {
            index = i;
            min = numArray[i];
        }
    }
    document.getElementById("noti-timSoNN").innerHTML = "Số nhỏ nhất trong mãng : " + min;
}

document.getElementById("btn-min").onclick = timMin;

// Bài 4 : Tìm số dương nhỏ nhất

function timSoduongMin(){
    var newNumArray = [];
    for(var i =0; i < numArray.length; i++){
        if(numArray[i] > 0){
            newNumArray.push(numArray[i]);
        }
    }
    console.log(newNumArray);

    var index = 0;
    var min = newNumArray[index];
    for (var i = 0 ; i < newNumArray.length ; i++)
        {
            if (newNumArray[i] < min)
            {
                index = i;
                min = numArray[i];
            }
        }
    document.getElementById("noti-timSoDuongNN").innerHTML = "Số dương nhỏ nhất trong mãng : " + min;
}

document.getElementById("timSoduongMin").onclick = timSoduongMin;

// Bài 5 : Tìm số chẵn cuối cùng trong mãng

function timSochanCC(){
    soChanCC = -1;
    for(var i =0; i < numArray.length; i++){
        if(numArray[i] % 2 == 0 ){
            if(numArray.lastIndexOf(numArray[i],i)){
                soChanCC = numArray[i] ;
            }else{
                soChanCC;
            }
        }
    }
    document.getElementById("noti-timSoChanCC").innerHTML = "Số chẵn cuối cùng trong mãng : " + soChanCC;
}

document.getElementById("btn-soChanCC").onclick = timSochanCC;

// Bài 6: Đỗi chỗ 2 giá trị trong mãng theo vi trí

var NumArray2 = [];
 function addEle2(){
     var num = parseInt(document.getElementById("inputNumber2").value) ;
     NumArray2.push(num);
     document.getElementById("mangSoNguyen2").style.display = "block";
     document.getElementById("mangSoNguyen2").innerHTML = "Mãng số nguyên chưa đổi chổ: " + NumArray2 + " ";
 }
 document.getElementById("btn-soNguyen2").onclick = addEle2;

function doiCho2So(){
    var viTri1 = parseInt(document.getElementById("inputIndex1").value);
    var viTri2 = parseInt(document.getElementById("inputIndex2").value);

    for(var i = 0; i < NumArray2.length; i++){
        if(i == viTri1){
            for(var j = 0; j < NumArray2.length; j++){
                if(j == viTri2){
                    var temp = NumArray2[i];
                    NumArray2[i] = NumArray2[j];
                    NumArray2[j] = temp;
                }
            }
        }
    }
    var mangDaDoi = NumArray2;
    document.getElementById("mangDaDoi").style.display = "block";
     document.getElementById("mangDaDoi").innerHTML = "Mãng số nguyên đã đổi chổ: " + mangDaDoi + " ";
}

document.getElementById("btn-doiCho").onclick = doiCho2So;

// Bài 7 : Sắp xếp mãng theo thứ tự tăng dần

function sapXeptang(){
    for (var i = 0; i < numArray.length; i++){
        for (var j = 0; j < numArray.length - 1 ; j++){
            if(numArray[j] > numArray[j+1]){
                var temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = temp;
            }
        }
    }
    document.getElementById("noti-sapXep").innerHTML = "Mãng sắp xếp tăng : " + numArray;
}

document.getElementById("btn-sapXepMang").onclick = sapXeptang;

/**
 * Bài 8: Tìm số nguyên tố đầu tiên trong mãng
 * B1 : Tạo hàm kiểm tra số nguyên tố
 * B2 : Tìm số nguyên tố trong mãng
 */

function kiemTraSNT(n){
    if(n < 2){
        return false;
    }
        count = 0;
            for (var i = 2; i <= Math.sqrt(n); i++){
                if(n % i == 0){
                    count++;
                }
            }
            if(count == 0){
                return true;
            }else{
                return false;
            }
}

function timSoNTDT(){
    var soNT = -1
    for(var i = 0; i < numArray.length; i++)
    if(kiemTraSNT(numArray[i])){
        soNT = numArray[i];
        break;
    }else{
        soNT;
    }
    document.getElementById("noti-soNT").innerHTML = "Số nguyên tố đầu tiên: " + soNT;
}

document.getElementById("btn-soNT").onclick = timSoNTDT;

/**
 * Bài 9: Đếm số nguyên trong mãng số thực
 * B1 : Nhập mãng số thực
 * B2 : Đếm số nguyên trong mãng
 */

 var realNumArray = [];
 function addRealNumber(){
     var realNum = parseFloat(document.getElementById("inputRealNumber").value) ;
     realNumArray.push(realNum);
     document.getElementById("mangSoThuc").style.display = "block";
     document.getElementById("mangSoThuc").innerHTML = "Mãng số thực: " + realNumArray + " ";
 }
 document.getElementById("btn-soThuc").onclick = addRealNumber;

 function timSoNguyen(){
     var count = 0;
     for(var i =0; i < realNumArray.length; i++){
         if(Number.isInteger(realNumArray[i])){
            count++;
         }
     }
     document.getElementById("demSoNguyen").style.display = "block";
     document.getElementById("demSoNguyen").innerHTML = "Số lượng số nguyên: " + count;
 }

 document.getElementById("btn-timSoNguyen").onclick = timSoNguyen;

// Bài 10 : So sánh số lương số dương, số âm : số nào nhiều hơn

function soSanhSoAmDuong(){
    var soDuong = 0;
    var soAm = 0;
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            soDuong ++;
        }else{
            soAm ++;
        }
    }
    if(soDuong > soAm){
    document.getElementById("noti-soSanh").innerHTML = "Số lương số dương lớn hơn:: " + soDuong;
    }else{
        document.getElementById("noti-soSanh").innerHTML = "Số lương số âm lớn hơn: " + soAm;
    }
}
document.getElementById("btn-soSanh").onclick = soSanhSoAmDuong;
