function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;
        obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
    });

    obj.opts.on('click',function(){
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
    });
},
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
            }
        }

        $(function() {
            var dd = new DropDown( $('#dd1') );
                $(document).click(function() {
                $('.wrapper-dropdown-3').removeClass('active');
            });
        });

function DropDown2(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown2 > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown2.prototype = {
    initEvents : function() {
        var obj = this;
        obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
    });

    obj.opts.on('click',function(){
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
    });
},
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
            }
        }

        $(function() {
            var dd = new DropDown2( $('#dd2') );
                $(document).click(function() {
                $('.wrapper-dropdown-2').removeClass('active');
            });
        });


function DropDown1(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown1 > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown1.prototype = {
    initEvents : function() {
        var obj = this;
        obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
    });

    obj.opts.on('click',function(){
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
    });
},
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
            }
        }

        $(function() {
            var dd = new DropDown1( $('#dd3') );
                $(document).click(function() {
                $('.wrapper-dropdown-1').removeClass('active');
            });
        });

function DropDown0(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown0 > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown0.prototype = {
    initEvents : function() {
        var obj = this;
        obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
    });

    obj.opts.on('click',function(){
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
    });
},
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
            }
        }

        $(function() {
            var dd = new DropDown0( $('#dd4') );
                $(document).click(function() {
                $('.wrapper-dropdown-0').removeClass('active');
            });
        });


$('popup-trigger').click(function(){
    
});