let randomNames=["Musa","Ibrahim","Abubakar","Sani","Abdullahi","Mohammed","Sunday","Umar","Emmanuel","Adamu","Usman","Blessing","Aliyu","Aisha","Muhammed","John","Muhammad","Fatima","Mary","Esther","Yusuf","Ali","Samuel","Aminu","Grace","Joseph","Hassan","Amina","Haruna","Salisu","Peter","Bello","Garba","Zainab","Maryam","Joy","Victoria","Kabiru","Elizabeth","Isa","Hadiza","Idris","Mercy","Isah","Yahaya","Hauwa","David","Daniel","Ngozi","Yakubu","Ahmed","Patience","Moses","Taiwo","James","Kehinde","Rabiu","Victor","Mustapha","Friday","Shehu","Nura","Bala","Comfort","Lawal","Godwin","Emeka","Monday","Paul","Ahmad","Ifeanyi","Michael","Nasiru","Anthony","Christiana","Aishatu","Saidu","Abba","Dauda","Solomon","Umaru","Florence","Chinedu","Halima","Felicia","Sulaiman","Rose","Helen","Ruth","Charity","Bashir","Rabi","Chinyere","Micheal","Abiodun","Francis","Janet","Glory","Christopher","Ikechukwu","Sarah","Kingsley","Stephen","Alhaji","Jamilu","Deborah","Mariam","Chioma","Ijeoma","Faith","Samson","Suleiman","Auwal","Alice","Lawan","Baba","Muhammadu","Ismail","Hauwau","Stella","Murtala","Isaac","Ifeoma","Gabriel","Joshua","Dahiru","Sale","Hamza","Funmilayo","Maria","Nuhu","Gloria","Augustine","Uche","Patrick","Christian","Auwalu","Toyin","Hajara","Chika","Idowu","Uchenna","Felix","Oluchi","Temitope","Peace","Henry","Roseline","Habiba","Innocent","Yau","Ado","Juliet","Obinna","Gift","Abdul","Eunice","Shuaibu","Charles","Justina","Aminat","Bose","Hamisu","Audu","Samaila","Kabir","Veronica","Jamila","Sule","Ayuba","Rebecca","Simon","Rita","Johnson","Adam"],randomEmails=["gmail.com","hotmail.com","webmail.ru","remail.net"],randomChars=["$","&","9","20","##","&&"],success=[];const generateRandomName=()=>randomNames[Math.floor(Math.random()*(randomNames.length-1))],generaterandomEmail=()=>randomEmails[Math.floor(Math.random()*(randomEmails.length-1))],generaterandomChars=()=>{let a="",e=Math.floor(5*Math.random());for(let i=0;i<e;i++)a+=randomChars[Math.floor(Math.random()*(randomChars.length-1))];return a},generateFakeCred=()=>{let a=generateRandomName(),e=generateRandomName(),i=Math.floor(70*Math.random())+e+a+Math.floor(70*Math.random())+Math.floor(70*Math.random()),n={firstname:a,lastname:e,username:i,email:i+e+"@"+generaterandomEmail(),password:generaterandomChars()+i+Math.floor(200*Math.random())};return success.push(n),n};

const fakeReq = ()=>{
    let fakeUser = generateFakeCred();
    document.getElementById("form-field-first_name").value = fakeUser.firstname;
    document.getElementById("form-field-last_name").value = fakeUser.lastname;
    document.getElementById("form-field-email").value = fakeUser.email;
    document.getElementById("form-field-user_name").value = fakeUser.username;
    document.getElementById("form-field-password").value = fakeUser.password;
    document.getElementById("form-field-confirm_pass").value = fakeUser.password;
}

fakeReq();


