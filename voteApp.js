//app voting presiden, app sederhana untuk single vote dan menunjukkan hasil sementara voting.
var user = function (nama, umur) {
  this.nama = nama;
  this.umur = umur;
}
var candidate1 = {
  id:'1',
  name: 'trumdumdum',
  job: 'businessman',
  poll:Math.floor(Math.random()*1000)
  
}
var candidate2={
  id: '2',
  name: 'hilario',
  job: 'senate',
  poll:Math.floor(Math.random()*1000)
}
var candidate=[candidate1,candidate2];
function vote(x){
  if(x==1){
    candidate1.poll += 1;
  }
  else if(x==2){
    candidate2.poll +=1;
  }
}
function hasilVote(){
  for(var i=0; i<candidate.length;i++){
  console.log("hasil Voting sementara dari kandidat "+ candidate[i].name+" dengan no urut "+ candidate[i].id+" adalah "+ candidate[i].poll +" suara");
  }
}
var userNew= new user();
userNew.nama= prompt("masukkan nama");
userNew.umur=prompt("masukkan umur");
if(Number(userNew.umur)<17){
    console.log("maaf anda belum mencukupi umur untuk memilih! (umur minimal untuk memilih: 17 tahun)");
}
else{
    hasilVote();
    var voting= prompt("masukkan id presiden pilihanmu: "+'\n'+"id: "+candidate[0].id+ ", name: "+candidate[0].name+"\n"+"id: "+candidate[1].id+ ", name: "+candidate[1].name);

    vote(voting);

    console.log("setelah anda memilih kandidat no "+voting+", suara yang diperoleh oleh kandidat pilihan anda menjadi: "+candidate[voting-1].poll);
    console.log("terimakasih " +userNew.nama+"("+userNew.umur+")"+" telah melakukan pemilihan, setelah voting yang anda lakukan hasil sementara menunjukkan bahwa hasil sementara menjadi: ");
    hasilVote();
    if(candidate[0].poll>candidate[1].poll){
        console.log("sementara kandidat "+ candidate[0].name+" memimpin")
    }
    else if(candidate[1].poll>candidate[0].poll){
        console.log("sementara kandidat "+ candidate[1].name+" memimpin")
    }
    else if(candidate[0].poll===candidate[1].poll){
        console.log("sementara kandidat seri");
    }
}


  