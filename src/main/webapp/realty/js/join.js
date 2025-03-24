//////////이메일 유효성 검사
function email_reg(){
	var memail = document.getElementsByName('memail')[0].value;
	var mail_reg = /^[0-9a-z_-]+@[0-9a-zㄱ-힇\.]+\.[0-9a-zㄱ-힇\.]{2,}$/i;
	var email_message = document.getElementById('email_message');
	
	email_message.textContent = "";

	if(!mail_reg.test(memail)){
		email_message.textContent = "올바른 이메일 주소를 입력해주세요.";
		return false;
	} else {
		return true;
	}
}


//////////이메일 중복체크
function email_check(){
	var memail = document.getElementsByName('memail')[0].value;
	console.log(memail)
	http = new XMLHttpRequest();
	http.onreadystatechange = function(){
			if(http.readyState == 4 && http.status == 200){
						console.log(this.response);

			if(this.response == "ok"){
				alert("사용 가능한 이메일입니다");
				return true;
			}else{
				alert("이미 사용 중인 이메일입니다.");
				return false;
			}
		} else{
			console.log(this.response);

		}
	}
	http.open("POST","./email_check.do",true);
	http.setRequestHeader("content-type","application/x-www-form-urlencoded")
	http.send("memail=" + memail);	
	}
	
	
//////////비밀번호 체크
function pwck(){
	var mpass = document.getElementsByName("mpass")[0].value;
	var mpasscheck = document.getElementById("mpass_check").value;
	var mpass_message = document.getElementById("mpass_message");
	
	mpass_message.textContent = "";
	
	if(!mpass){
		mpass_message.textContent = "비밀번호를 입력해주세요";
		return false;
	} else if(mpass !== mpasscheck) {
		mpass_message.textContent = "동일한 비밀번호를 입력해주세요";
		return true;
	}
}


//////////이름 유효성검사
function nmck(){
	var mname = document.getElementsByName('mname')[0].value;
	var name_reg = /^[ㄱ-힇a-zA-Z]+$/;
	var name_message = document.getElementById('name_message');
	
	name_message.textContent = "";

	if(!name_reg.test(mname)){
		name_message.textContent = "올바른 이름을 입력해주세요.";
		return false;
	} else if(mname==null){
		name_message.textContent = "";
	} else {
		return true;
	}
}

//////////전화번호 유효성검사
function telck(){
	var mtel = document.getElementsByName('mtel')[0].value;
	var tel_reg = /^01\d{8,9}$/; 
	var tel_message = document.getElementById('tel_message');
	
	tel_message.textContent = "";

	if(!tel_reg.test(mtel)){
		tel_message.textContent = "유효한 전화번호를 입력해주세요.";
		return false;
	} else {
		return true;
	}
}


//////////약관 전체체크
var checkall = document.getElementById("check_all");
var terms = document.querySelectorAll("input[name='age_terms'], input[name='service_terms'], input[name='privacy_terms'], input[name='marketing_terms']");
checkall.addEventListener("change", function() {
    terms.forEach(function(term) {
        term.checked = checkall.checked;
    });
});


//////////회원가입
function join(){
	var ec = email_check();
	var pc = pwck();
	var nc = nmck();
	var tc = telck()
	
	function termck(){
	var at = document.getElementsByName('age_terms')[0];
    var st = document.getElementsByName('service_terms')[0];
    var pt = document.getElementsByName('privacy_terms')[0];

    if (!at.checked || !st.checked || !pt.checked) {
        alert("모든 필수 약관에 동의해 주세요.");
        return false; 
    } else {
	return true; 
	}

	var termck = termck()
		
	}

	if(ec && pc && nc && tc && termck ){
	f.submit();
	}

	
	

}