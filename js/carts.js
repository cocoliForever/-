/**
 * Created by Administrator on 2017/5/24.
 */

$( function () {

	//全局的checkbox选中和未选中的样式
	var $allCheckbox = $( 'input[type="checkbox"]' ),     //全局的全部checkbox
		$wholeChexbox = $( '.whole_check' ),
		$cartBox = $( '.cartBox' ),                       //每个商铺盒子
		$shopCheckbox = $( '.shopChoice' ),               //每个商铺的checkbox
		$sonCheckBox = $( '.son_check' );                 //每个商铺下的商品的checkbox
	$allCheckbox.click( function () {
		if ( $( this ).is( ':checked' ) ) {
			$( this ).next( 'label' ).addClass( 'mark' );
		} else {
			$( this ).next( 'label' ).removeClass( 'mark' )
		}
	} );

	//===============================================全局全选与单个商品的关系================================
	$wholeChexbox.click( function () {
		var $checkboxs = $cartBox.find( 'input[type="checkbox"]' );
		if ( $( this ).is( ':checked' ) ) {
			$checkboxs.prop( "checked", true );
			$checkboxs.next( 'label' ).addClass( 'mark' );
		} else {
			$checkboxs.prop( "checked", false );
			$checkboxs.next( 'label' ).removeClass( 'mark' );
		}
		totalMoney();
	} );


	$sonCheckBox.each( function () {
		$( this ).click( function () {
			if ( $( this ).is( ':checked' ) ) {
				//判断：所有单个商品是否勾选
				var len = $sonCheckBox.length;
				var num = 0;
				$sonCheckBox.each( function () {
					if ( $( this ).is( ':checked' ) ) {
						num++;
					}
				} );
				if ( num == len ) {
					$wholeChexbox.prop( "checked", true );
					$wholeChexbox.next( 'label' ).addClass( 'mark' );
				}
			} else {
				//单个商品取消勾选，全局全选取消勾选
				$wholeChexbox.prop( "checked", false );
				$wholeChexbox.next( 'label' ).removeClass( 'mark' );
			}
		} )
	} )

	//=======================================每个店铺checkbox与全选checkbox的关系/每个店铺与其下商品样式的变化===================================================

	//店铺有一个未选中，全局全选按钮取消对勾，若店铺全选中，则全局全选按钮打对勾。
	$shopCheckbox.each( function () {
		$( this ).click( function () {
			if ( $( this ).is( ':checked' ) ) {
				//判断：店铺全选中，则全局全选按钮打对勾。
				var len = $shopCheckbox.length;
				var num = 0;
				$shopCheckbox.each( function () {
					if ( $( this ).is( ':checked' ) ) {
						num++;
					}
				} );
				if ( num == len ) {
					$wholeChexbox.prop( "checked", true );
					$wholeChexbox.next( 'label' ).addClass( 'mark' );
				}

				//店铺下的checkbox选中状态
				$( this ).parents( '.cartBox' ).find( '.son_check' ).prop( "checked", true );
				$( this ).parents( '.cartBox' ).find( '.son_check' ).next( 'label' ).addClass( 'mark' );
			} else {
				//否则，全局全选按钮取消对勾
				$wholeChexbox.prop( "checked", false );
				$wholeChexbox.next( 'label' ).removeClass( 'mark' );

				//店铺下的checkbox选中状态
				$( this ).parents( '.cartBox' ).find( '.son_check' ).prop( "checked", false );
				$( this ).parents( '.cartBox' ).find( '.son_check' ).next( 'label' ).removeClass( 'mark' );
			}
			totalMoney();
		} );
	} );


	//========================================每个店铺checkbox与其下商品的checkbox的关系======================================================

	//店铺$sonChecks有一个未选中，店铺全选按钮取消选中，若全都选中，则全选打对勾
	$cartBox.each( function () {
		var $this = $( this );
		var $sonChecks = $this.find( '.son_check' );
		$sonChecks.each( function () {
			$( this ).click( function () {
				if ( $( this ).is( ':checked' ) ) {
					//判断：如果所有的$sonChecks都选中则店铺全选打对勾！
					var len = $sonChecks.length;
					var num = 0;
					$sonChecks.each( function () {
						if ( $( this ).is( ':checked' ) ) {
							num++;
						}
					} );
					if ( num == len ) {
						$( this ).parents( '.cartBox' ).find( '.shopChoice' ).prop( "checked", true );
						$( this ).parents( '.cartBox' ).find( '.shopChoice' ).next( 'label' ).addClass( 'mark' );
					}

				} else {
					//否则，店铺全选取消
					$( this ).parents( '.cartBox' ).find( '.shopChoice' ).prop( "checked", false );
					$( this ).parents( '.cartBox' ).find( '.shopChoice' ).next( 'label' ).removeClass( 'mark' );
				}
				totalMoney();
			} );
		} );
	} );


	//=================================================商品数量==============================================
	var $plus = $( '.plus' ),
		$reduce = $( '.reduce' ),
		$all_sum = $( '.sum' );
	$plus.click( function () {
		var $inputVal = $( this ).prev( 'input' ),
			$count = parseInt( $inputVal.val() ) + 1,
			$obj = $( this ).parents( '.amount_box' ).find( '.reduce' ),
			$priceTotalObj = $( this ).parents( '.order_lists' ).find( '.sum_price' ),
			$price = $( this ).parents( '.order_lists' ).find( '.price' ).html(),  //单价
			$priceTotal = $count * parseInt( $price.substring( 1 ) );
		$inputVal.val( $count );
		$priceTotalObj.html( '￥' + $priceTotal );
		if ( $inputVal.val() > 1 && $obj.hasClass( 'reSty' ) ) {
			$obj.removeClass( 'reSty' );
		}
		totalMoney();
	} );

	$reduce.click( function () {
		var $inputVal = $( this ).next( 'input' ),
			$count = parseInt( $inputVal.val() ) - 1,
			$priceTotalObj = $( this ).parents( '.order_lists' ).find( '.sum_price' ),
			$price = $( this ).parents( '.order_lists' ).find( '.price' ).html(),  //单价
			$priceTotal = $count * parseInt( $price.substring( 1 ) );
		if ( $inputVal.val() > 1 ) {
			$inputVal.val( $count );
			$priceTotalObj.html( '￥' + $priceTotal );
		}
		if ( $inputVal.val() == 1 && !$( this ).hasClass( 'reSty' ) ) {
			$( this ).addClass( 'reSty' );
		}
		totalMoney();
	} );

	$all_sum.keyup( function () {
		var $count = 0,
			$priceTotalObj = $( this ).parents( '.order_lists' ).find( '.sum_price' ),
			$price = $( this ).parents( '.order_lists' ).find( '.price' ).html(),  //单价
			$priceTotal = 0;
		if ( $( this ).val() == '' ) {
			$( this ).val( '1' );
		}
		$( this ).val( $( this ).val().replace( /\D|^0/g, '' ) );
		$count = $( this ).val();
		$priceTotal = $count * parseInt( $price.substring( 1 ) );
		$( this ).attr( 'value', $count );
		$priceTotalObj.html( '￥' + $priceTotal );
		totalMoney();
	} )

	//======================================移除商品========================================
	// 飞入购物车

	var wl, hl, s;
	var $order_lists = null;
	var $order_content = '';
	$( function () {
		// 初始化 右边栏 红色背景的数字 begin ======
		var leng = $( '#toGo' ).children().length
		var leng1 = $( '#toOut' ).children().length
		$( '#collect' ).find( '.c_lit_tip' ).text( leng )
		$( '#trash' ).find( '.c_lit_tip' ).text( leng1 )
		// 初始化   ending===========
		var tiao = function ( dom, parmas, ele, num ) {
			$( dom ).on( 'click', function () {
				var $a = $( this ).parents( '.order_content .order_lists' );
				var $par = $a.parents( '.cartBox' ).find( '.shop_info .shop_name a' ).text()
				console.log( $par )
				height = $a.offset().top
				left = $a.offset().left
				width = $a.width() / 2
				fleft = $( parmas ).offset().left
				ftop = $( parmas ).offset().top
				wl = fleft - left - width
				hl = ftop - height
				$a.css( {
					transform: 'scaleX(0.1) scaleY(0.5)',
					transition: 'all .8s'
				} )
				// 下面三个var 是为了找到相应的属性 append进去 右边栏
				var $url = $a.find( '.list_con img' ).attr( 'src' )
				var $content = $a.find( '.list_con .list_text a' ).text()
				var $price = $a.find( '.list_price.price_dan p' ).text().substring( 1 )
				setTimeout( function () {
					$a.empty().appendTo( parmas ).addClass( 'fly' ).css( {
						'left': -wl, 'top': -hl, 'width': '50px', 'height': '50px', 'transform': '',
						'transition': '', 'background-image': 'url(' + $url + ')', 'backgroundColor': ''
					} ).animate( {
						// 这里是刚开始向上移动的动画
						left: -wl + 200,
						top: -hl - 100
					}, 500, function () {
						$( this ).animate( {
							// 经过500ms后 移动到对应的盒子中(经历200ms)
							left: -10,
							top: -10
						}, 200, function () {
							// 这里为了图片动画结束后 将其隐藏
							$( this ).fadeOut( 1000, function () {
								// $(this).remove()

							} )
							// 记录收藏或 移除的数量
							num += 1
							//找到写入右上角的商品的盒子
							count = $( this ).parent().find( '.c_lit_tip' )

							// 将 收藏 或者移除的商品数量添加至 右上角的盒子中
							// 找到右边栏的最大父盒子，为其绑定添加或删除事件
							// $par 找到的事
							var $li = '<li class="clearfix" data-shopTag="' + $par + '"><div class="t_prodimg"><a href="javascript:;" target="_blank"><img src="' + $url + '" width = "80" height = "80"></a></div><div class="t_prodinfo"><div class="tp_title clearfix"><a class="ti_name is-truncated" href="javascript:;" target = "_blank" style = "word-wrap: break-word;" >' + $content + '</a ></div><p class="tp_price">¥<b>' + $price + '</b></p><a class="tp_add_cart iconfont icon-gouwuche" href="javascript:;"></a></div></li>'

							$( ele ).append( $li )
							count.text( num )
							delBtn()
						} )

					} )
				}, 900 )
				// 这里判断当删除或者收藏时，最后一个时，将本快内容全部删除
				if ( $a.parent().children().length == 1 ) {
					$( this ).parents( '.cartBox' ).fadeOut( 2100 )
				}
			} )

		}
		// 调用上面的函数
		// 第三个参数是为了找到 右边栏的对应的ul 列表盒子
		// 第四个参数是为了 将 初始化的 列表长度和新添加的商品数量
		tiao( '.list_op .del', '#trash', '#toOut', leng1 )
		tiao( '.list_op .cang', '#collect', '#toGo', leng )


		// 反向添加到购物车列表

		// $( '.tp_add_cart' ).on( 'click', function () {
		// 	console.log( $( this ) )

		// } )
	} )





	function delBtn () {
		$order_lists = $( this ).parents( '.order_lists' );
		$order_content = $order_lists.parents( '.order_content' );
		// $('.model_bg').fadeIn(300);
		// $('.my_model').fadeIn(300);
		$order_lists.remove();
		// if ( $order_content.html().trim() == null || $order_content.html().trim().length == 0 ) {
		// 	$order_content.parents( '.cartBox' ).remove();
		// }
		// closeM();
		$sonCheckBox = $( '.son_check' );
		totalMoney();
	};

	//关闭模态框
	// $( '.closeModel' ).click( function () {
	//     closeM();
	// } );
	// $( '.dialog-close' ).click( function () {
	//     closeM();
	// } );
	// function closeM () {
	//     $( '.model_bg' ).fadeOut( 300 );
	//     $( '.my_model' ).fadeOut( 300 );
	// }
	//确定按钮，移除商品
	// $( '.dialog-sure' ).click( function () {

	// } )

	//======================================总计==========================================

	function totalMoney () {
		var total_money = 0;
		var total_count = 0;
		var calBtn = $( '.calBtn a' );
		$sonCheckBox.each( function () {
			if ( $( this ).is( ':checked' ) ) {
				var goods = parseInt( $( this ).parents( '.order_lists' ).find( '.sum_price' ).html().substring( 1 ) );
				var num = parseInt( $( this ).parents( '.order_lists' ).find( '.sum' ).val() );
				total_money += goods;
				total_count += num;
			}
		} );
		$( '.total_text' ).html( '￥' + total_money );
		$( '.piece_num' ).html( total_count );

		// console.log(total_money,total_count);

		if ( total_money != 0 && total_count != 0 ) {
			if ( !calBtn.hasClass( 'btn_sty' ) ) {
				calBtn.addClass( 'btn_sty' );
			}
		} else {
			if ( calBtn.hasClass( 'btn_sty' ) ) {
				calBtn.removeClass( 'btn_sty' );
			}
		}
	}


} );
