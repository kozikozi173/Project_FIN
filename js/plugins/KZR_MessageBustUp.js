//=============================================================================
// KZR_MessageBustUp.js
// Version : 1.00
// -----------------------------------------------------------------------------
// [Homepage]: 縺九＊繧� - 繝帙�繝�繝壹�繧ｸ蜷阪↑繧薙※鬟ｾ繧翫〒縺吶ょ♂縺�ｺｺ縺ｫ縺ｯ縺昴ｌ縺後ｏ縺九ｉ繧薙�縺ｧ縺吶ｈ縲� -
//             http://nyannyannyan.bake-neko.net/
// -----------------------------------------------------------------------------
// [Version]
// 1.00 2016/11/12 蜈ｬ髢�
//=============================================================================

/*:
 * @plugindesc 鬘皮判蜒上�繝輔ぃ繧､繝ｫ蜷阪ｒ蛻､蛻･縺励※縲∬�蜍輔〒遶九■邨ｵ縺ｫ螟画鋤縺励∪縺吶�
 * @author 縺ｶ縺｡繧��
 *
 * @param Filename
 * @desc 遶九■邨ｵ陦ｨ遉ｺ縺吶ｋ繝輔ぃ繧､繝ｫ蜷阪〒縺吶�
 * 縺薙�譁�ｭ怜�繧貞性繧蝣ｴ蜷医∫ｫ九■邨ｵ縺ｧ陦ｨ遉ｺ縺励∪縺吶�
 * @default bustup
 *
 * @param Alignment
 * @desc 遶九■邨ｵ縺ｮ菴咲ｽｮ縺ｧ縺吶�0:蟾ｦ蟇�○ 1:蜿ｳ蟇�○
 * @default 0
 *
 * @param PositionY
 * @desc 遶九■邨ｵ縺ｮY蠎ｧ讓吶〒縺吶�0:繧ｦ繧｣繝ｳ繝峨え縺ｮ荳顔ｫｯ縺ｫ蜷医ｏ縺帙ｋ縲�
 *                    1:繧ｦ繧｣繝ｳ繝峨え縺ｮ荳狗ｫｯ縺ｫ蜷医ｏ縺帙ｋ縲�
 * @default 1
 *
 * @param RevisionWidth
 * @desc 遶九■邨ｵ繧定｡ｨ遉ｺ縺吶ｋ蝣ｴ蜷医〒縲√Γ繝�そ繝ｼ繧ｸ繧ｦ繧｣繝ｳ繝峨え縺ｮ蟷�ｒ邵ｮ繧√ｋ髟ｷ縺輔〒縺吶�
 * @default 200
 *
 * @help
 * JavaScript蛻晏ｿ��↑縺ｮ縺ｧ縲∝ｸ梧悍縺ｫ豺ｻ縺医↑縺�せ縺後≠繧九％縺ｨ繧偵＃莠�価縺上□縺輔＞(ﾂｴ繝ｻﾏ峨�`)
 *
 * 遶九■邨ｵ逕ｻ蜒上ｒ繝｡繝�そ繝ｼ繧ｸ繧ｦ繧｣繝ｳ繝峨え縺ｮ荳奇ｼ�Z蠎ｧ讓呻ｼ峨↓陦ｨ遉ｺ縺吶ｋ譁ｹ豕輔′蛻�°繧峨↑縺��縺ｧ縲�
 * PositionY 繧� 0 縺ｫ縺励※縲√え繧｣繝ｳ繝峨え縺ｮ荳奇ｼ�Y蠎ｧ讓呻ｼ峨↓陦ｨ遉ｺ縺吶ｋ縺九�
 * RevisionWidth 縺ｧ縲√Γ繝�そ繝ｼ繧ｸ繧ｦ繧｣繝ｳ繝峨え縺ｮ蟷�ｒ遏ｭ縺上＠縺ｦ縺昴�髫咎俣縺ｫ陦ｨ遉ｺ縺吶ｋ縺九�
 * 縺ｧ縲∝ｯｾ蠢懊＠縺ｦ縺上□縺輔＞縲�
 *
 * 縲千ｫ九■邨ｵ逕ｻ蜒上�菫晏ｭ倅ｽ咲ｽｮ縲�
 * 遶九■邨ｵ逕ｻ蜒上� faces 繝輔か繝ｫ繝蜀�↓繝輔か繝ｫ繝繧剃ｽ懊▲縺ｦ縺昴�荳ｭ縺ｫ蜈･繧後※縺上□縺輔＞縲�
 * 鬘斐げ繝ｩ縺ｮ繝輔ぃ繧､繝ｫ蜷阪′ bustup_actor1 縺ｪ繧峨√◎縺ｮ蜷榊燕縺ｮ繝輔か繝ｫ繝繧剃ｽ懊ｊ縲�
 * 蟇ｾ蠢懊☆繧狗ｫ九■邨ｵ逕ｻ蜒上�繝輔ぃ繧､繝ｫ蜷阪�縺昴�逕ｻ蜒上� index (0�樔ｻｻ諢上�謨ｰ蛟､)縺ｫ縺励※縺上□縺輔＞縲�
 */

(function() {
  var parameters = PluginManager.parameters('KZR_MessageBustUp');
  var MBU_filename = (parameters['Filename'] || "bustup");
  var MBU_alignment = Number(parameters['Alignment'] || 0);
  var MBU_positionY = Number(parameters['PositionY'] || 1);
  var MBU_revisionWidth = Number(parameters['RevisionWidth'] || 200);

//-----------------------------------------------------------------------------
// Window_Message
//

var _kzr_MBU_Window_Message_initialize = Window_Message.prototype.initialize;
Window_Message.prototype.initialize = function() {
    _kzr_MBU_Window_Message_initialize.call(this);
    this._bustup = SceneManager._scene._spriteset._bustup;
    this._bustup._messageWindow = this;
    this._bustupFlag = false;
};

var _kzr_MBU_Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
    _kzr_MBU_Window_Message_terminateMessage.call(this);
    if (this._bustup) {
        this._bustup.clear();
        this._bustupFlag = false;
    }
};

var _kzr_MBU_Window_Message_loadMessagFace = Window_Message.prototype.loadMessageFace;
Window_Message.prototype.loadMessageFace = function() {
    if ($gameMessage.faceName().indexOf(MBU_filename) != -1) {
        filename = $gameMessage.faceName() + "/" + $gameMessage.faceIndex();
        this._faceBitmap = ImageManager.loadFace(filename);
        this._bustupFlag = true;
    } else {
        _kzr_MBU_Window_Message_loadMessagFace.call(this);
        this._bustupFlag = false;
    }
    if (this._bustupFlag) {
        this.x = (MBU_alignment === 0) ? MBU_revisionWidth : 0;
        this.width = Graphics.boxWidth - MBU_revisionWidth;
    } else {
        this.x = 0;
        this.width = Graphics.boxWidth;
    }
};

var _kzr_MBU_Window_Message_drawMessagFace = Window_Message.prototype.drawMessageFace;
Window_Message.prototype.drawMessageFace = function() {
    if (this._bustupFlag) {
        this._bustup.set($gameMessage.faceName() + "/" + $gameMessage.faceIndex());
    } else {
        if (this._bustup) {
            this._bustup.clear();
        }
        _kzr_MBU_Window_Message_drawMessagFace.call(this);
    }
};

var _kzr_MBU_Window_Message_newLineX = Window_Message.prototype.newLineX;
Window_Message.prototype.newLineX = function() {
    return this._bustupFlag ? 0 : _kzr_MBU_Window_Message_newLineX.call(this);
};

//-----------------------------------------------------------------------------
// Sprite_BustUp
//

function Sprite_BustUp() {
    this.initialize.apply(this, arguments);
}

Sprite_BustUp.prototype = Object.create(Sprite_Base.prototype);
Sprite_BustUp.prototype.constructor = Sprite_BustUp;

Sprite_BustUp.prototype.initialize = function() {
    Sprite_Base.prototype.initialize.call(this);
    this._messageWindow = null;
    this.visible = false;
    this.anchor.x = 0;
    this.anchor.y = 1;
};

Sprite_BustUp.prototype.updatePosition = function() {
    switch (MBU_alignment) {
        case 0: this.x = 0; this.anchor.x = 0; break;
        case 1: this.x = Graphics.boxWidth; this.anchor.x = 1; break;
    }
    switch (MBU_positionY) {
        case 0: this.y = this._messageWindow.y; break;
        case 1: this.y = this._messageWindow.y + this._messageWindow.height; break;
    }
}

Sprite_BustUp.prototype.set = function(filename) {
    this.updatePosition();
    this.bitmap = ImageManager.loadFace(filename);
    this.visible = true;
};

Sprite_BustUp.prototype.clear = function () {
    this.bitmap = null;
    this.visible = false;
};

//-----------------------------------------------------------------------------
// Spriteset_Map
//

var _kzr_MBU_Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
    _kzr_MBU_Spriteset_Map_createLowerLayer.call(this);
    this._bustup = new Sprite_BustUp();
    this.addChild(this._bustup);
};

//-----------------------------------------------------------------------------
// Spriteset_Battle
//

var _kzr_Spriteset_Battle_createLowerLayer = Spriteset_Battle.prototype.createLowerLayer;
Spriteset_Battle.prototype.createLowerLayer = function() {
    _kzr_Spriteset_Battle_createLowerLayer.call(this);
    this._bustup = new Sprite_BustUp();
    this.addChild(this._bustup);
}

})();