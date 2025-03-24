function join(){
	
	
	
	
	f.submit();
}



//////////약관동의
var checkall = document.getElementById("check_all");
var terms = document.querySelectorAll("input[name='age_terms'], input[name='service_terms'], input[name='privacy_terms'], input[name='marketing_terms']");



checkall.addEventListener("change", function() {
    terms.forEach(function(term) {
        term.checked = checkall.checked;
    });
});