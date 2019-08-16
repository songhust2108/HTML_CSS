
		// function clickme(){
		// 	// alert('ahihi');
		// 	if(confirm('Do you want to google?')){
		// 		//hàm confirm chỉ trả về true or false
		// 		//dòng do you... sẽ được đưa lên hộp cảnh báo
		// 		window.location.href="https://zent.edu.vn/";
		// 		//chuyển đến gg
		// 		window.open('https://google.com.vn',,'_blank');
		// 	}else{
		// 		 alert('ahihi');
		// 	}
		// }
		// function clickme(){
		// 	//nó sẽ cộng sai do chưa ép kiểu, nó chỉ nối chuỗi
		// 	//khai báo biến luôn bắt đầu băng var
		// 	var a= prompt('Input a:');
		// 	var b= prompt('Input b:');
		// 	alert(parseInt(a)+parseInt(b));
		// }
		var i=1;
		function clickme(){
			// document.getElementsByClassName('text')[0].style.color="red";//chú ý s
			// document.getElementById('text').style.color="red";
			// var a=document.getElementsByClassName('text');

			// for (var i = 0; i< a.length; i++) {
			// 	a[i].style.color="red";
			// }
			var a=document.getElementById('input');

			var b=document.getElementById('content');// chuyển nội dung từ thẻ input vào HTML.
			// document.getElementById('input').value=null;
			
			b.innerHTML='<p id="p'+i+'">'+a.value+'<button onclick="del('+i+')">Xoa</button></p>'+b.innerHTML;
			a.value='';
			i++;
			
		}
		//có thể dùng tên thẻ để gọi
		function del(i){
			document.getElementById('p'+i).remove();
		}
