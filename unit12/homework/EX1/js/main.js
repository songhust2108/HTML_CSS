$(function(){
	account();
	
})
var check;


function account(){
	$('#frm-acc').show();
	$('#frm-pro').hide();
	$('#frm-warn').hide();
	$('#frm-fin').hide();

	$('#username').on('blur',function(){
		//lấy giá trị ra
		var username=$('#username').val();
		if(username.length<6){
			//đổ lỗi sang phần label
			$('#err-username').html('Nhập trường này đủ 6 kí tự');
			check=true;
		}else{
			$('#err-username').html('');
			check=false;
		}
	});

	$('#pwd').on('blur',function(){
		//lấy giá trị ra
		var pwd=$('#pwd').val();
		if(pwd.length<6){
			//đổ lỗi sang phần label
			$('#err-pwd').html('Nhập trường này đủ 6 kí tự');
			check=true;
		}else{
			$('#err-pwd').html('');
			check=false;
		}
	});

	$('#cf-pwd ').on('blur',function(){
		//lấy giá trị ra
		var cf_pwd=$('#cf-pwd').val();
		var pwd=$('#pwd').val();
		if(cf_pwd==pwd){
			//đổ lỗi sang phần label
			$('#err-cf-pwd').html('');
			check=true;
		}else{
			$('#err-cf-pwd').html('Mật khẩu không khớp');
			check=false;
		}
	});

	$('#next ').on('click',function(){
		var username=$('#username').val();
		var pwd=$('#pwd').val();
		var cf_pwd=$('#cf-pwd').val();
		if (username!=""&& pwd!=""&&cf_pwd!=""&&check==true) {
			$("#frm-fin").hide();
			$("#frm-acc").hide();
			$("#frm-warn").hide();
			$("#frm-pro").show('slide',{duration:'right'},700);


			$("#tab-pro").css("cssText","background-color:#2184be !important;color:white !important");
			$("#tab-acc").css('backgroundColor','#eee');
			$("#tab-war").css('backgroundColor','#eee');
			$("#tab-fin").css('backgroundColor','#eee');
			$('#prev').css("cssText","background-color:#2184be !important;color:white !important ");
			
		}
		profile();
	});

	
}


var check1;
function profile(){

	

	$('#prev').on('click',function(){
		$("#frm-acc").show('slide',{duration:'right'},700);
		$("#frm-pro").hide();
		$("#frm-fin").hide();
		$("#frm-warn").hide();

		$("#tab-acc").css("cssText","background-color:#2184be !important;color:white !important");
		$("#tab-pro").css('backgroundColor','#eee');
		$("#tab-war").css('backgroundColor','#eee');
		$("#tab-fin").css('backgroundColor','#eee');
		account();
	});



	$('#firstname').on('blur',function(){

		var f_name=$('#firstname').val();
		if(f_name.length<=0){
			$('#err-firstname').html('This is required');
			check1=false;
		}else{
			$('#err-firstname').html('');
			check1=true;
		}
	});




	$('#lastname ').on('blur',function(){
		var l_name=$('#lastname').val();
		if(l_name.length<=0){
			$('#err-lastname').html('This is required');
			check1=false;
		}else{
			$('#err-lastname').html('');
			check1=true;
		}
	});

	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	$('#email ').on('keyup',function(){
		var email=$('#email').val();
		if(validateEmail(email)){
			$('#err-email').html('');
			check1=true;
		}else{
			$('#err-email').html('Email không hợp lệ !');
			check1=false;
		}
	});


	$('#next').on('click',function(){
		var f_name=$('#firstname').val();
		var l_name=$('#lastname').val();
		var email=$('#email').val();
		var age=$('#age').val();
		if(f_name!=""&&l_name!=""&&email!=""&&age!=""&&check1==true&&age<18){
			$("#frm-fin").hide();
			$("#frm-acc").hide();
			$("#frm-pro").hide();
			$("#frm-warn").show('slide',{duration:'right'},700);


			$("#tab-war").css("cssText","background-color:#2184be !important;color:white !important");
			$("#tab-acc").css('backgroundColor','#eee');
			$("#tab-pro").css('backgroundColor','#eee');
			$("#tab-fin").css('backgroundColor','#eee');
			$('#prev').css("cssText","background-color:#2184be !important;color:white !important ");
			warning();
		}else if(f_name!=""&&l_name!=""&&email!=""&&age!=""&&check1==true&&age>=18){
			$("#frm-fin").show('slide',{duration:'right'},700);
			$("#frm-acc").hide();
			$("#frm-pro").hide();
			$("#frm-warn").hide();


			$("#tab-fin").css("cssText","background-color:#2184be !important;color:white !important");
			$("#tab-acc").css('backgroundColor','#eee');
			$("#tab-pro").css('backgroundColor','#eee');
			$("#tab-war").css('backgroundColor','#eee');
			$('#prev').css("cssText","background-color:#2184be !important;color:white !important ");
		}
		
	});

}


function warning(){
	
	$('#prev').on('click',function(){
		$("#frm-pro").show('slide',{duration:'right'},700);
		$("#frm-acc").hide();
		$("#frm-fin").hide();
		$("#frm-warn").hide();
		$("#tab-pro").css("cssText","background-color:#2184be !important;color:white !important");
		$("#tab-acc").css('backgroundColor','#eee');
		$("#tab-war").css('backgroundColor','#eee');
		$("#tab-fin").css('backgroundColor','#eee');
		profile();
	});

	$('#next').on('click',function(){
		
		$("#frm-pro").show('slide',{duration:'right'},700);
		$("#frm-acc").hide();
		$("#frm-fin").hide();
		$("#frm-warn").hide();
		$("#tab-pro").css("cssText","background-color:#2184be !important;color:red !important");
		$("#tab-acc").css('backgroundColor','#eee');
		$("#tab-war").css('backgroundColor','#eee');
		$("#tab-fin").css('backgroundColor','#eee');
	});
}


// function finish(){
// 	$('#frm-acc').hide();
// 	$('#frm-pro').hide();
// 	$('#frm-warn').hide();
// 	$('#frm-fin').show();

// 	$('#finishend').on('click',function(){
// 		var input=$('#check').val();
// 		if(input.checked==true){
// 			alert('Submit successful');
// 		}else{
// 			$(this).css({'disable':'true'});
// 		}
// 	})
// }


