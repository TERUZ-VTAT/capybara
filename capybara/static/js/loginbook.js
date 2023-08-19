/**
 * Devrama-Book Version 0.9.0
 * Developed by devrama.com
 * 
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

$(function(){
	var DrBook = function(element, options){
		this.ready = false;
		this.num_page_papers = 0;
		this.current_page_index = 0; //Cover page is not counted. The last page which is shown. Start from zero.
		this.$book = undefined;
		this.on_animation = false;
		this.is_open = false;
		this.page_content = [];
		
		
		this.options = {
			width: 400,
			height: 500,
			depth: 50,
			cover_thickness: 2, /*px*/
			speed_page_turn: 700, /*ms*/
			init_degree: -35
		};
		
		$.extend(this.options, options);
		
		this.$element = $(element);
	};
	
	DrBook.prototype = {
		
		
		_init: function(){
			
			var that = this;
			
			this._prepare(function(){
				that.ready = true;
			});
		},
		
		
		_prepare: function(callback){
			var that = this;
			
			this.$element.css({
				width: this.options.width,
				height: this.options.height
			});
			
			
			this.$element.children('ul.page').children('li').each(function(index){
				that.page_content.push($(this).clone());
			});
			
			var parts = '\
							<li class="top"></li>\
							<li class="bottom"></li>\
							<li class="left"></li>\
							<li class="right"></li>\
						';
			var spine = '<li class="front"></li>';
			var front = parts;
			var back = parts;
			
			if(this.$element.find('ul.spine li.front').length > 0) {
				spine = $('<div>').append(this.$element.find('ul.spine li.front').clone()).html();
			}
			
			
			if(this.$element.find('ul.front li.front').length > 0)
				front +=  $('<div>').append(this.$element.find('ul.front li.front').clone()).html();
			else 
				front += '<li class="front"></li>';
			
			if(this.$element.find('ul.front li.back').length > 0)
				front +=  $('<div>').append(this.$element.find('ul.front li.back').clone()).html();
			else
				front += '<li class="back"></li>';
			
			
			if(this.$element.find('ul.back li.front').length > 0)
				back +=  $('<div>').append(this.$element.find('ul.back li.front').clone()).html();
			else 
				back += '<li class="front"></li>';
			
			if(this.$element.find('ul.back li.back').length > 0)
				back +=  $('<div>').append(this.$element.find('ul.back li.back').clone()).html();
			else
				back += '<li class="back"></li>';
			
			
			var html = 
				'\
				<div class="book">\
					<ul class="spine">\
					'+spine+'\
					</ul><!-- .spine -->\
					<ul class="front">\
					'+front+'\
					</ul><!-- .front -->\
					<ul class="back">\
					'+back+'\
					</ul>\
				</div><!-- .book -->\
				\
				';
			
			this.$element.html(html);
			
			this.$book = this.$element.children('.book');
			this.$cover_front = this.$book.children('ul.front');
			this.$cover_back = this.$book.children('ul.back');
			
			this.$book.css({
				width: this.options.width,
				height: this.options.height
			});
			
			
			this._buildSpine();
			this._buildCover(true);
			this._buildCover(false);
			
			var arr_images = [];
			this.$element.find('img').each(function(){
				arr_images.push($(this).attr('src'));
			});
			
			
			this._addBlankPages();
			
			var css_transition = {
				'-webkit-transition': '-webkit-transform '+this.options.speed_page_turn+'ms ease ',
				'-moz-transition': '-moz-transform '+this.options.speed_page_turn+'ms ease ',
				'-o-transition': '-o-transform '+this.options.speed_page_turn+'ms ease ',
				'transition': 'transform '+this.options.speed_page_turn+'ms ease '
				
			};
			
			
			this.$cover_front.css(css_transition);
			this.$book.css($.extend(css_transition, {'transform': 'rotateY('+this.options.init_degree+'deg)'}));
			
			
			this.$cover_front.on('click', function(){
				if(that.on_animation === false && that.is_open === false){
					that._openBook();
				}
			});
			
			$(window).on('keydown', function(e){
				if(that.on_animation === true) return;
				
				switch(e.which){
					case 33: //page up
					case 37: //arrow left
					case 109: //substract
						if(that.is_open === true) that._previous();
						break;
					case 34: //page down
					case 39: //arrow right
					case 107: //add
						if(that.is_open === true) that._next();
						else that._openBook();
						break;
				}
			}); 
			
		},
		
		open: function(){
			if(this.on_animation === false && this.is_open === false)
				this._openBook();
			
		},
		
		close: function(){
			if(this.on_animation === false && this.is_open === true)
				this._closeBook();
			
		},
		
		previous: function(){
			if(this.on_animation === false && this.is_open === true)
				this._previous();
		},
		
		next: function(){
			if(this.on_animation === false){
				 if(this.is_open === true) this._next();
				 else this._openBook();
			}
		},
		
		_buildSpine: function(){
			this.$book.find('ul.spine li.front').css({
				'width': this.options.depth+'px'
			});
		},
		
		
		
		_buildCover: function(is_front){
			
			var that = this;
			var $cover = undefined;
			if(is_front)
				$cover = this.$cover_front;
			else
				$cover = this.$cover_back;
			
			var width = $cover.outerWidth();
			var height = $cover.outerHeight();
			
			var zAxis = 0;
			
			if(typeof is_front != 'undefined' && is_front == false){
				zAxis = -1*(this.options.depth + this.options.cover_thickness);
				$cover.css({
					'transform': 'translateZ('+zAxis+'px)'
				});
			}
				
			
			/*COVER BACK CSS*/
			$cover.children('.back').css({
				'transform': 'translateZ('+(-1*this.options.cover_thickness)+'px) rotateY(180deg) translateX(-100%)'
			});
			
			/*COVER TOP CSS*/
			$cover.children('.top').css({
				'height': this.options.cover_thickness+'px',
				'transform': 'translateZ('+(-1*this.options.cover_thickness)+'px) rotateX(90deg)'
			});
			/*COVER BOTTOM CSS*/
			$cover.children('.bottom').css({
				'height': this.options.cover_thickness+'px',
				'transform': 'translateY('+height+'px) rotateX(-90deg)'
			});
			
			/*COVER LEFT CSS*/
			$cover.children('.left').css({
				'height': '100%',
				'width': this.options.cover_thickness+'px',
				'transform': 'translateZ('+(-1*this.options.cover_thickness)+'px) rotateY(-90deg)'
			});
			/*COVER RIGHT CSS*/
			$cover.children('.right').css({
				'height': '100%',
				'width': this.options.cover_thickness+'px',
				'transform': 'translateX('+width+'px) rotateY(90deg)'
			});
			
			
			
		},
		
		_addBlankPages: function(callback){
			var num_pages = Math.floor(this.options.depth/5);
			
			var html = 
				'\
				<ul class="page">\
					<li class="front"></li>\
					<li class="back"></li>\
				</ul><!-- .page -->\
				';
			
			var $appended = undefined;
			//num_pages = 1;
			for(var i=0; i< num_pages; i++){
				$appended = $(html).appendTo(this.$book);
				
				$appended.attr('data-page-num', i);
				
				$appended.css({
					'transform': 'translateZ('+(-5*i - 1 - this.options.cover_thickness)+'px)'
				});
			}
			
			
			
		},
		
		_getEndEvent: function(prop){
			var vendors = 'webkit Moz Ms o Khtml'.split(' ');
			var len = vendors.length;
			 
			if (prop in document.body.style) return prop+'end';
			
			prop = prop.charAt(0).toUpperCase() + prop.slice(1);
			for(var i =0; i<vendors.length; i++){
				if(vendors[i]+prop in document.body.style) return vendors[i]+prop+'End';
			}
			
			return false;
		},
		
		
		_openBook: function(){
			this.on_animation = true;
			this.is_open = true;
			var that = this;
			var event_end = this._getEndEvent('transition');
			
			var html = 
				'\
				<ul class="page stack">\
					<li class="front shadow"></li>\
					<li class="back shadow"></li>\
				</ul><!-- .stack -->\
				';
			
			var css_transition = {
				'-webkit-transition': '-webkit-transform '+this.options.speed_page_turn+'ms ease ',
				'-moz-transition': '-moz-transform '+this.options.speed_page_turn+'ms ease ',
				'-o-transition': '-o-transform '+this.options.speed_page_turn+'ms ease ',
				'transition': 'transform '+this.options.speed_page_turn+'ms ease '
			};
		
			var $appended = undefined;
			for(var i=0; i< 3; i++){
				$appended = $(html).appendTo(this.$book);
				if(i==0) $appended.addClass('left ztop');
				else if(i==1) $appended.addClass('right zmiddle');
				else if(i==2) $appended.addClass('ready zbottom');
				
				$appended.css(css_transition);
				
			}
			
			
			if(that.page_content[0]){
				that.page_content[0].addClass('front shadow');
				that.$book.find('ul.stack.left li.front').replaceWith(that.page_content[0]);
				
				if(that.page_content[1]){
					that.page_content[1].addClass('back shadow');
					that.$book.find('ul.stack.left li.back').replaceWith(that.page_content[1]);
				}
				
				if(that.page_content[2]){
					that.page_content[2].addClass('front shadow');
					that.$book.find('ul.stack.right li.front').replaceWith(that.page_content[2]);
				}
				
				if(that.page_content[3]){
					that.page_content[3].addClass('back shadow');
					that.$book.find('ul.stack.right li.back').replaceWith(that.page_content[3]);
				}
			}
			
			this.current_page_index = 2;
			
			var book_transition = {
				'transform': 'rotateY(0deg)'
			};
			
			this.$book.css(book_transition);
			this.$book.one(event_end, function(){
				that.$cover_front.addClass('turn');
				that.$cover_front.one(event_end, function(){
					that.$cover_front.css('z-index', 99);
					
					that.$book.children('.stack.left').addClass('turn');
					that.$book.children('.stack.left').one(event_end, function(){
						var css = {
							'-webkit-transform-style': 'flat',
							'-moz-transform-style': 'flat',
							'-o-transform-style': 'flat',
							'transform-style': 'flat',
							'transform': ''
						};
						
						that.$book.css(css); // We do this to enable z-index for pages.
						
						var $right = that.$book.children('ul.stack.right');
						var $left = that.$book.children('ul.stack.left');
						var $ready = that.$book.children('ul.stack.ready');
						
						$left.off();
						$right.off();
						$ready.off();
						$left.on('click', function(){ that._previous(); });
						$right.on('click', function(){ that._next(); });
						
						that.on_animation = false;
					});
					
					
				});
				
			});
			
			
			
		
			
		},
		
		_closeBook: function(){
			this.on_animation = true;
			this.is_open = false;
			var that = this;
			var event_end = this._getEndEvent('transition');
			
			var css = {
				'-webkit-transform-style': 'preserve-3d',
				'-moz-transform-style': 'preserve-3d',
				'-o-transform-style': 'preserve-3d',
				'transform-style': 'preserve-3d'
			};
			
			this.$book.css(css); // We do this to enable z-index for pages.
			
			
			var book_transition = {
				'transform': 'rotateY('+this.options.init_degree+'deg)'
			};
				
			this.$book.css(book_transition);
			
			var $left = this.$element.find('ul.stack.left');
			$left.removeClass('turn');
			
			$left.one(event_end, function(){
				that.$cover_front.css('z-index', '');
				that.$cover_front.removeClass('turn');
				that.$cover_front.one(event_end, function(){
					that.$element.find('ul.stack').remove();
					that.on_animation = false;
					that.current_page_index = 0;
				});
			});
		},
		
		_next: function(){
			var that = this;
			var event_end = this._getEndEvent('transition');
			var next_index = this.current_page_index + 1;
			if(!this.page_content[next_index]) return;
			
			
			
			this.on_animation = true;
			
			var $right = that.$book.children('ul.stack.right');
			var $left = that.$book.children('ul.stack.left');
			var $ready = that.$book.children('ul.stack.ready');
			
			$left.off();
			$right.off();
			$ready.off();
			
			$right.addClass('ztop').removeClass('zmiddle');
			$left.addClass('zbottom').removeClass('ztop');
			$ready.addClass('zmiddle').removeClass('zbottom');
				
			
			if(that.page_content[next_index+1]){
				that.page_content[next_index+1].addClass('front shadow');
				$ready.children('li.front').replaceWith(that.page_content[next_index+1]);
				
				if(that.page_content[next_index+2]){
					that.page_content[next_index+2].addClass('back shadow');
					$ready.children('li.back').replaceWith(that.page_content[next_index+2]);
				}
			}
			else {
				$ready.children('li.front').replaceWith('<li class="front shadow"></li>');
				$ready.children('li.back').replaceWith('<li class="back shadow"></li>');
			}
			
			
			$left.addClass('leftpush1px');
			$right.addClass('turn');
			$right.one(event_end, function(){
				
				$left.remove();
				
				var html = 
					'\
					<ul class="page stack ready zbottom">\
						<li class="front shadow"></li>\
						<li class="back shadow"></li>\
					</ul><!-- .stack -->\
					';
				var $ready_new = $(html).appendTo(that.$book);
				
				var css_transition = {
					'-webkit-transition': '-webkit-transform '+that.options.speed_page_turn+'ms ease ',
					'-moz-transition': '-moz-transform '+that.options.speed_page_turn+'ms ease ',
					'-o-transition': '-o-transform '+that.options.speed_page_turn+'ms ease ',
					'transition': 'transform '+that.options.speed_page_turn+'ms ease '
				};
				
				$ready_new.css(css_transition);
				
				$right.addClass('left').removeClass('right');
				$ready.addClass('right').removeClass('ready');
				
				$right.on('click', function(){ that._previous(); });
				$ready.on('click', function(){ that._next(); });
				
				that.current_page_index += 2;
				that.on_animation = false;
			});
		},
		
		_previous: function(){
			var that = this;
			var event_end = this._getEndEvent('transition');
			var previous_index = this.current_page_index - 2;
			if(this.current_page_index <= 2) {
				this._closeBook();
				return;
			}
			
			
			
			this.on_animation = true;
			
			var $right = that.$book.children('ul.stack.right');
			var $left = that.$book.children('ul.stack.left');
			var $ready = that.$book.children('ul.stack.ready');
			
			$left.off();
			$right.off();
			$ready.off();
			
			that.page_content[previous_index-2].addClass('front shadow');
			$ready.children('li.front').replaceWith(that.page_content[previous_index-2]);
			
			that.page_content[previous_index-1].addClass('front shadow');
			$ready.children('li.back').replaceWith(that.page_content[previous_index-1]);
			
			var css_transition = {
				'-webkit-transition': '',
				'-moz-transition': '',
				'-o-transition': '',
				'transition': ''
			};
			
			$ready.css(css_transition);
			$ready.addClass('turn');
			
			
			$right.removeClass('zmiddle').addClass('rightpush1px zbottom');
			
			$left.removeClass('turn ztop').addClass('zmiddle');
			
			$left.one(event_end, function(){
				
				$right.remove();
				
				var html = 
					'\
					<ul class="page stack ready zbottom">\
						<li class="front shadow"></li>\
						<li class="back shadow"></li>\
					</ul><!-- .stack -->\
					';
				var $ready_new = $(html).appendTo(that.$book);
				
				var css_transition = {
					'-webkit-transition': '-webkit-transform '+that.options.speed_page_turn+'ms ease ',
					'-moz-transition': '-moz-transform '+that.options.speed_page_turn+'ms ease ',
					'-o-transition': '-o-transform '+that.options.speed_page_turn+'ms ease ',
					'transition': 'transform '+that.options.speed_page_turn+'ms ease '
				};
				
				$ready_new.css(css_transition);
				$ready.css(css_transition);
				
				$ready.addClass('left ztop').removeClass('ready zbottom');
				$left.addClass('right').removeClass('left');
				
				$ready.on('click', function(){ that._previous(); });
				$left.on('click', function(){ that._next(); });
				
				that.current_page_index -= 2;
				that.on_animation = false;
			});
		}
	};
	
	
	
	$.fn.DrBook = function (options) {
		var function_arguments = arguments;
		
		if (typeof options === 'string') {
			var $this = $(this);
			var data = $this.data('DrBook');
			if (!data) $this.data('DrBook', (data = new DrBook(this, options)));
			
			return data[options].apply(data, Array.prototype.slice.call(arguments, 1));
		}
		
		return this.each(function () {
			var $this = $(this);
			var data = $this.data('DrBook');
			
			if (!data) $this.data('DrBook', (data = new DrBook(this, options)));
			data._init();
		});
		
	};
	
	
	$.fn.DrBook.prototype.constructor = DrBook;
	
	
});
