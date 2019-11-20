var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var contentWidth=475;
var titleWidth=60;
var n=0
for(var i=0;i<=title.length;i++){
	title[i].idx=i;
	title[i].onclick=function(){
		n=this.idx;
		for(var i=0;i<ctbox.length;i++){
			if(i<=n){
			ctbox[i].style.top=titleWidth*i+'px';
		}else{
			ctbox[i].style.top=titleWidth*i+contentWidth+'px';
		}
		}
	}
}