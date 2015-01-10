var MakeFall = function (domName, distanceTop, distanceMiddle, num) {
	var _this = this;
	_this.container = $(domName),
	_this.item = [];
	_this.rolNum = num,
	_this.marginTop = distanceTop,
	_this.marginMiddle = distanceMiddle,
	_this.currentId = 0,
	_this.itemWidth = (_this.container.width() - ( _this.rolNum - 1 ) * _this.marginMiddle ) / _this.rolNum,
	_this.bottomTop = new Array(_this.rolNum);
	_this.line = [];

	for (var i = 0; i < _this.bottomTop.length; i++) {
		_this.bottomTop[i] = 0;
	}

	_this.container.css('position','relative')

	this.checkSetWhere = function () {
		var _this = this;
		var where = 0;
		var min = _this.bottomTop[0];
		for (var i = 0; i < _this.bottomTop.length; i ++) {
			if (min > _this.bottomTop[i]) {
				where = i;
				min = _this.bottomTop[i];
			}
		}
		return where;
	}

	this.checkItem = function() {
		_this.item = _this.container.find('.fall-item');
	};

	this.resetItem = function () {
		var _this = this;
		_this.item.css({
			'width': _this.itemWidth + 'px',
			'marginTop': _this.marginTop

		});
	};

	this.setLine = function () {
		var _this = this;
		var left;
		for (var i = 0; i < _this.rolNum; i++) {
			_this.line[i] = document.createElement('div');
			left = i * (_this.itemWidth + _this.marginMiddle);
			if (i === 0) {
				left = 0;
			}
			$(_this.line[i]).css({
				'position':'absolute',
				'left': left,
				'width': _this.itemWidth,
			})

			$(_this.line[i]).appendTo(_this.container);
		}
	}
}

	MakeFall.prototype.setItem = function (start, end) {
		this.checkItem();
		this.resetItem();
		this.setLine();
		var _this = this;
		start = start || _this.currentId || 0;
		end = end || _this.item.length;
		for ( var i = start; i < end; i++ ) {
			var where = _this.checkSetWhere();

			_this.bottomTop[where] == 0 ?
				$(_this.item[i]).css('top', _this.bottomTop[where]) :
				$(_this.item[i]).css('top', _this.bottomTop[where] + _this.marginTop);


			$(_this.item[i]).appendTo($(_this.line[where]));


			_this.bottomTop[where] == 0 ?
				_this.bottomTop[where] += $(_this.item[i]).height() :
				_this.bottomTop[where] += $(_this.item[i]).height() + _this.marginTop;

				console.log(where,_this.bottomTop[where]);
		}

		this.currentId = end;
	}

