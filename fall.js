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

	this.resizeItem = function () {
		var _this = this;
		_this.item.css('width', _this.itemWidth + 'px');
	}
}

	MakeFall.prototype.setItem = function (start, end) {
		this.checkItem();
		this.resizeItem();
		var _this = this;
		start = start || _this.currentId || 0;
		end = end || _this.item.length;
		for ( var i = start; i < end; i++ ) {
			var where = _this.checkSetWhere();
			$(_this.item[i]).css('position','absolute');
			_this.bottomTop[where] == 0 ?
				$(_this.item[i]).css('top',_this.bottomTop[where]) :
				$(_this.item[i]).css('top',_this.bottomTop[where] + _this.marginTop);
			where == 0 ? 
				$(_this.item[i]).css('left', 0) :
				$(_this.item[i]).css('left', where * (_this.itemWidth + _this.marginMiddle));
			
			_this.bottomTop[where] == 0 ?
				_this.bottomTop[where] += $(_this.item[i]).height() :
				_this.bottomTop[where] += $(_this.item[i]).height() + _this.marginTop;
		}
		this.currentId = end;
	}

