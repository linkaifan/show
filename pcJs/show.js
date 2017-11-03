window.onload = function () {
	!function(){
		let showVue = new Vue({
			el:'#main',
			data:{
				Title:'图片直击阿里巴巴18周年年会现场 看马云炫酷表演',
				BtnClass:['全部','陆成','沈伯韩'],
				Active:true,
				imgSrc:['http://img.vphotos.cn/899CA0806F4E9A59F475079485289B67/postp/logothumb/vbox6042_DSC_4054_203533_small_v1.JPG',
				'http://img.vphotos.cn/899CA0806F4E9A59F475079485289B67/postp/logothumb/vbox6042_DSC_4053_203439_small.JPG',
				'http://img.vphotos.cn/899CA0806F4E9A59F475079485289B67/postp/logothumb/vbox6042_DSC_4023_202511_small.JPG',
				'http://img.vphotos.cn/899CA0806F4E9A59F475079485289B67/postp/logothumb/vbox6042_DSC_4015_202342_small.JPG',
				'http://img.vphotos.cn/899CA0806F4E9A59F475079485289B67/postp/logothumb/vbox6042_DSC_4054_203533_small_v1.JPG',
				'http://img.vphotos.cn/899CA0806F4E9A59F475079485289B67/postp/logothumb/vbox6042_DSC_4053_203439_small.JPG',
				'http://img.vphotos.cn/899CA0806F4E9A59F475079485289B67/postp/logothumb/vbox6042_DSC_4023_202511_small.JPG',
				'http://img.vphotos.cn/899CA0806F4E9A59F475079485289B67/postp/logothumb/vbox6042_DSC_4015_202342_small.JPG',
				],
				isWrap:false

			},
			methods:{
				showImg:function(){
					this.isWrap=true;
				},
				closeWrap:function(){
					this.isWrap=false;
				}
			}
		});

		!function waterfall(){
			let oBox = document.getElementsByClassName('showBox')[0];
			let oImgs = oBox.getElementsByTagName('img');
			let oImgsNum = oImgs.length;
			//计算整个页面显示的列数（页面宽度/box的宽度）
			let oImgW = oImgs[0].offsetWidth;
			let cols = Math.floor((oBox.offsetWidth)/oImgW);

			let hArr = [];//存放前x列的数组高度
			for (let i = 0; i < oImgsNum; i++) {
				if(i < cols){
			 		hArr.push(oImgs[i].offsetHeight);
			 		oImgs[i].style.left = oImgW * i + 'px';
			 	}
			 	else{
			 		let minH = Math.min(...hArr);
			 		let index = hArr.findIndex((n) =>  n == minH);
			 		oImgs[i].style.top = minH + 'px';
			 		oImgs[i].style.left = oImgW * index + 'px';
			 		hArr[index] += oImgs[i].offsetHeight; 
			 	}
			} 
		}();
	}();
};