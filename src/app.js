var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        var layout = new ccui.Layout();
        layout.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
        layout.sizeType = ccui.Widget.SIZE_PERCENT;
        layout.setSizePercent(cc.p(0.5, 0.5));
        layout.setPositionType(ccui.Widget.POSITION_PERCENT);
        layout.setPositionPercent(cc.p(0.25, 0.25));
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setBackGroundColor(cc.color.GRAY);

        var text = new ccui.Text();
        text.attr({
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            string: "Label TTF",
            font: "Arial"
        });

        var button = new ccui.Button();
        button.loadTextures(res.CloseNormal_png, res.CloseSelected_png);

        layout.addChild(text);
        layout.addChild(button);

        this.addChild(layout);

        layout.setScale(0.3);

        return true;
    },
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

