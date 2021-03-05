//=============================================================================
// TMPlugin - ���ߥ��`�����RPG
// �Щ`�����: 0.1.1a
// ��K������: 2017/03/17
// �䲼Ԫ    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2017 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

//=============================================================================
//�޸�/����:@��絲��ס/Takakaze
//fixed/translated:@��絲��ס/Takakaze
//�汾����ʱ�䣺2018/05/18
//verision update time��2018/05/18
//���°汾�ţ�0.1.2b.5.18.23.24.26
//UPDATE CODE��0.1.2b.5.18.23.24.26
//Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//THANKS TO THE PLUGIN MAKER @Tomoaky
//=============================================================================

//=============================================================================
//TIPS������������HPConsumeSkill��SAN_TileToner��FpsSyncOption�Ȳ��ʹ��
//�����Ϊ��Դ�����������ӭ�޸ģ���ʹ��ʱ��ע��������ԭ���߼������������ߣ�
//���޸Ĵ��벢�ϴ�������MIT license��Դ����
//----@��絲��ס
//=============================================================================

/*:
 * @plugindesc �����륷�ߥ��`�����RPG�ݤ��C�ܤ�׷�Ӥ��ޤ���
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param vnSrpgTurnCount
 * @desc �F�ڤΥ��`��������뤹�륲�`����������
 * ���ڂ�: 1
 * @default 1
 *
 * @param vnActorUnitNums
 * @desc �Фꥢ�����`��˥å�������뤹�륲�`����������
 * ���ڂ�: 2
 * @default 2
 *
 * @param vnEnemyUnitNums
 * @desc �Фꥨ�ͥߩ`��˥å�������뤹�륲�`����������
 * ���ڂ�: 3
 * @default 3
 *
 * @param srpgBasicWait
 * @desc �����`���M�Фλ����������ȕr�g���ե�`�ࣩ
 * ���ڂ�: 30
 * @default 30
 *
 * @param damagePopupInterval
 * @desc �B�A����`���ݥåץ��åפ��g�����ե�`�ࣩ
 * ���ڂ�: 30
 * @default 30
 *
 * @param checkSkillId
 * @desc �{�٤�/Ԓ��������η���
 * ���ڂ�: 0
 * @default 0
 *
 * @param simpleMoveInput
 * @desc �Ƅӿ��ܹ��줬��ʾ�Фʤ餽�Τޤ��ƄӤǤ���褦�ˤ���
 * ���ڂ�: 0 ( 0 = �o�� / 1 = �Є� )
 * @default 0
 *
 * @param moveCommand
 * @desc �Ƅӥ��ޥ����
 * ���ڂ�: �Ƅ�
 * @default �Ƅ�
 *
 * @param moveCancelCommand
 * @desc �Ƅӥ���󥻥륳�ޥ����
 * ���ڂ�: �Ƅ�ȡ������
 * @default �Ƅ�ȡ������
 *
 * @param actionCommand
 * @desc �Єӥ��ޥ����
 * ���ڂ�: �Є�
 * @default �Є�
 *
 * @param itemCommand
 * @desc �����ƥॳ�ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: �����ƥ�
 * @default �����ƥ�
 *
 * @param equipCommand
 * @desc װ�������ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: װ����
 * @default װ����
 *
 * @param waitingCommand
 * @desc ���C���ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: ���C
 * @default ���C
 *
 * @param statusCommand
 * @desc ���Ʃ`�������ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: ���Ʃ`����
 * @default ���Ʃ`����
 *
 * @param turnEndCommand
 * @desc ���`��K�˥��ޥ����
 * ���ڂ�: ���`��K��
 * @default ���`��K��
 *
 * @param unitListCommand
 * @desc ��˥åȥꥹ�ȥ��ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: ��˥åȥꥹ��
 * @default ��˥åȥꥹ��
 *
 * @param infoCommand
 * @desc �ޥå���󥳥ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: �ޥå����
 * @default �ޥå����
 *
 * @param optionsCommand
 * @desc ���ץ���󥳥ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: ���ץ����
 * @default ���ץ����
 *
 * @param saveCommand
 * @desc ���`�֥��ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: ���`��
 * @default ���`��
 *
 * @param loadCommand
 * @desc ��`�ɥ��ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: ��`��
 * @default ��`��
 *
 * @param gameEndCommand
 * @desc ���`��K�˥��ޥ������δ�����ǥ��ޥ��������
 * ���ڂ�: ���`��K��
 * @default ���`��K��
 *
 * @param yesCommand
 * @desc �϶����ޥ����
 * ���ڂ�: �Ϥ�
 * @default �Ϥ�
 *
 * @param noCommand
 * @desc �񶨥��ޥ����
 * ���ڂ�: ������
 * @default ������
 *
 * @param moveParam
 * @desc �Ƅ����ѥ��`������ǰ
 * ���ڂ�: �Ƅ���
 * @default �Ƅ���
 *
 * @param moveHelp
 * @desc �Ƅӈ����x�k�إ��
 * ���ڂ�: �ƄӤ��������Q�����Ƥ�������
 * @default �ƄӤ��������Q�����Ƥ�������
 *
 * @param waitingHelp
 * @desc ���C�����x�k�إ��
 * ���ڂ�: ���C�Ф��򤭤�Q�����Ƥ�������
 * @default ���C�Ф��򤭤�Q�����Ƥ�������
 *
 * @param turnEndHelp
 * @desc ���`��K�˴_�J�إ��
 * ���ڂ�: ζ���Υ��`���K�ˤ��Ƥ�����Ǥ�����
 * @default ζ���Υ��`���K�ˤ��Ƥ�����Ǥ�����
 *
 * @param actionRangeHelp
 * @desc �Єӌg�Ј����x�k�إ��
 * ���ڂ�: �ЄӤ�g�Ф��������Q�����Ƥ�������
 * @default �ЄӤ�g�Ф��������Q�����Ƥ�������
 *
 * @param actionEffectHelp
 * @desc �Є���K�_�J�إ��
 * ���ڂ�: �����ЄӤǤ�����Ǥ�����
 * @default �����ЄӤǤ�����Ǥ�����
 *
 * @param colorAreaMove
 * @desc �Ƅӿ��ܹ���Υ�����ȥʩ`�O��
 * ���ڂ�: 0 64 255 128
 * @default 0 64 255 128
 *
 * @param colorAreaWaiting
 * @desc ���C����Υ�����ȥʩ`�O��
 * ���ڂ�: 255 32 255 128
 * @default 255 32 255 128
 *
 * @param colorAreaRange
 * @desc ��̹���Υ�����ȥʩ`�O��
 * ���ڂ�: 255 32 32 128
 * @default 255 32 32 128
 *
 * @param colorAreaEffect
 * @desc ��������Υ�����ȥʩ`�O��
 * ���ڂ�: 255 255 32 128
 * @default 255 255 32 128
 *
 * @param srpgCommandX
 * @desc ���ޥ�ɥ�����ɥ��α�ʾλ�ã������ˣ�
 * ���ڂ�: 0
 * @default 0
 *
 * @param srpgCommandY
 * @desc ���ޥ�ɥ�����ɥ��α�ʾλ�ã������ˣ�
 * ���ڂ�: 0
 * @default 0
 *
 * @param srpgCommandLineHeight
 * @desc ���ޥ�ɥ�����ɥ��Σ��Фθߤ�
 * ���ڂ�: 36
 * @default 36
 *
 * @param srpgStatusBackground
 * @desc ���Ʃ`����������ɥ��α���������
 * ���ڂ�: 1�� 0 = ������ɥ� / 1 = �������� / 2 = ͸����
 * @default 1
 *
 * @param srpgStatusNameWidth
 * @desc ���Ʃ`����������ɥ��Υ�˥å����η�
 * ���ڂ�: 144
 * @default 144
 *
 * @param srpgStatusHpWidth
 * @desc ���Ʃ`����������ɥ��ΣȣХ��`���η����ͣФǤ����ã�
 * ���ڂ�: 186
 * @default 186
 *
 * @param srpgStatusFaceMirror
 * @desc ���Ʃ`����������ɥ������ե��å����ҷ�ܞ�O��
 * ���ڂ�: left�� left = ��Ȥ�ܞ / right = �҂Ȥ�ܞ��
 * @default left
 *
 * @param srpgUnitListWidth
 * @desc ��˥åȥꥹ�ȥ�����ɥ��η�
 * ���ڂ�: 240
 * @default 240
 *
 * @param srpgUnitListRows
 * @desc ��˥åȥꥹ�ȥ�����ɥ��α�ʾ����
 * ���ڂ�: 7
 * @default 7
 *
 * @param srpgInfoSize
 * @desc �ޥå���󥦥���ɥ��δ󤭤�
 * ���ڂ�: 480*480
 * @default 480*480
 *
 * @param srpgStatusArrowImage
 * @desc ���Ʃ`����������ɥ���ʸӡ����Υե�������
 * ���ڂ�: SrpgStatusArrow
 * @default SrpgStatusArrow
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param srpgCursorImage
 * @desc SRPG���`����Υե�������
 * ���ڂ�: !$SrpgCursor
 * @default !$SrpgCursor
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @noteParam faceName
 * @noteRequire 1
 * @noteDir img/faces/
 * @noteType file
 * @noteData enemies
 *
 * @help
 * TMPlugin - ���ߥ��`�����RPG ver0.1.1a
 * 
 * ʹ�÷���:
 * 
 *   ��ӛURL����դ��Ƥ���������
 *   http://hikimoki.sakura.ne.jp/plugin/plugin_srpg.html
 *   ���Υإ�פˤϥ��ڥ�����ץ饰���󥳥ޥ�ɤκ��g���h���Τߤ�
 *   ӛ�d���Ƥ��ޤ���
 * 
 *   ���Υץ饰����� RPG�ĥ��`��MV Version 1.3.5 �Ǆ����_�J�򤷤Ƥ��ޤ���
 * 
 *   ���Υץ饰�����MIT�饤���󥹤Τ�Ȥ��䲼���Ƥ��ޤ����������á�
 *   ���졢���䲼�ʤɡ����ɤˤ�ʹ�����������ޤ���
 *
 * 
 * ���ڥ��������٥�ȣ�:
 * 
 *   <srpgManager>
 *   ���Υ����ΤĤ������٥�Ȥ�SRPG�����٥�ȤȤ������ä��ޤ���
 *
 *   <srpgActor:0>
 *   ���Υ����ΤĤ������٥�Ȥ�ζ����˥åȤȤ������ä��ޤ���
 *   �����ϥѩ`�ƥ��ڤ΁K��혣� 0 �����^���Ǥ���
 *
 *   <srpgEnemy:3>
 *   ���Υ����ΤĤ������٥�Ȥ򔳥�˥åȤȤ������ä��ޤ���
 *   �����ϔ������Υǩ`���٩`���Ϥη��ŤǤ���
 *
 *   <neutral>
 *   ���Υ����ΤĤ������٥�ȤϲФ��˥å����Υ�����Ȥ�����⤷�ޤ���
 * 
 *   <traitor>
 *   ���Υ����ΤĤ������٥�Ȥ��Є��Ƽs��ζ���򹥓ġ������r���Ӥ���ޤ���
 *
 * 
 * ���ڥ������������`���I�����������ߡ�������顢���Ʃ`�ȣ�:
 * 
 *   <mov:4>
 *   �Ƅ������O�����ޤ����������`�Έ��ϤϬF�ڤ��I��װ��Ʒ�����Ʃ`�Ȥ΂���
 *   ���᤿��Ӌ�������ä���ޤ���
 * 
 *   <shipMove>
 *   ͨ�����M�벻���ܤ�ˮ���Ϥ��ƄӤ��뤳�Ȥ��Ǥ���褦�ˤʤ�ޤ���
 *
 *   <floatMove>
 *   ���Τ�oҕ�����ƄӤ��뤳�Ȥ��Ǥ���褦�ˤʤ�ޤ���
 * 
 *   <search:5>
 *   �������x���O�����ޤ���һ�������ˤ��딳����˥åȤȤξ��x��
 *   ���΂�����󤭤����ϡ��ƄӤ��ЄӤ⤷�ʤ��ʤ�ޤ���
 *   ������ʡ�ԡ��ޤ��� 0 ��ָ������Ȥ��ΙC�ܤϥ��դˤʤ�ޤ���
 * 
 * 
 * ���ڥ����������ƥࡢ�����룩:
 * 
 *   <range:diamond 2>
 *   ���������̾��x���O�����ޤ�����̥����פ���̾��x���ǥ��ک`�������Фä�
 *   ָ�����Ƥ�����������̥����פ���ӛ���Ф����x��Ǥ���������
 *     diamond = �Ҥ���
 *     rect    = �Ľ���
 *     line    = ֱ�����������ң�
 *     foward = ֱ����һ����
 *    X = б��
 *    T = T����
 *    straight = ֱ���������Ȥ�����
 *   �ޤ���<range:diamond 2 rect 0> �Τ褦�˾A���Ƥ⤦�ҤȤĥ����פȾ��x��
 *   ָ������ȡ���������Ĥ�Ѩ�򤢤��뤳�Ȥ��Ǥ��ޤ���
 *
 *   <effect:rect 3>
 *   ������΄���������O�����ޤ������쥿���פȴ󤭤����ǥ��ک`�������Фä�
 *   ָ�����Ƥ���������ָ�����낎����̾��x��ͬ���Ǥ���
 * 
 * 
 * ���ڥ�����������飩:
 * 
 *   <faceName:Monster>
 *   �����������ե��å��Ȥ������ä��뻭��ե����������O�����ޤ���
 * 
 *   <faceIndex:0>
 *   �����������ե��å��Υ���ǥå������O�����ޤ���
 *   ����ǥå����Ȥϻ���Τɤβ��֤�ʹ�ä��뤫��Q��뷬�ŤǤ���
 *   0 1 2 3
 *   4 5 6 7
 *
 *   <level:10>
 *   �������Υ�٥���O�����ޤ������΂��ϥ��Ʃ`������ʾ�Τ���Υ��ߩ`�Ǥ���
 *   �����ˤ�ä����������仯����褦�ʤ��ȤϤ���ޤ���
 *
 *   <class:3>
 *   ���������I���O�����ޤ������΂��ϥ��Ʃ`������ʾ�Τ���Υ��ߩ`�Ǥ���
 *   �����ˤ�ä����������仯����褦�ʤ��ȤϤ���ޤ���
 *
 *   <nickname:�ұ���>
 *   �������ζ��������O�����ޤ���
 *
 *   <profile:���g�����Ӥ��ʥ��`����Α�ʿ>
 *   �������Υץ�ե��`����O�����ޤ���
 *
 *   <equips:2 0 0 3 0>
 *   ��������װ��Ʒ���O�����ޤ������΂��ϥ��Ʃ`������ʾ�Τ���Υ��ߩ`�Ǥ���
 *   �����ˤ�ä����������仯����褦�ʤ��ȤϤ���ޤ���
 *   װ�䥹��åȤ��Ϥ���혤�װ��Ʒ�η��Ť��ǥ��ک`�������Фä�
 *   ָ�����Ƥ���������
 *
 *   <attackAnimation:6>
 *   ��������ͨ�����ĤΥ��˥�`����󷬺Ť��O�����ޤ���
 * 
 * 
 * �ץ饰���󥳥ޥ��:
 * 
 *   reserveSrpg
 *   SRPG�C�ܤ��Є���������s�򤷤ޤ������Υ��ޥ�ɤ�g�Ф������Ȥ˥��٥��
 *   ���ޥ�ɡ������Ƅӡ��ǥޥåפ��Ф������SRPG�C�ܤ��Є��ˤʤ�ޤ���
 *
 * 
 * ������ץȥ��ޥ��:
 * 
 *   this.isSrpgTurnStart()
 *   ���`���_ʼ�ե饰�����äƤ��뤫�ɤ����򷵤��ޤ���
 *
 *   this.isSrpgActorTurn()
 *   ζ�����`�󤫤ɤ����򷵤��ޤ���
 *
 *   this.srpgNextUnit()
 *   �Τ��ЄӤ��륤�٥�ȷ��Ť򷵤��ޤ���
 * 
 *   this.srpgLastUnit()
 *   ֱǰ���ЄӤ������٥�ȷ��Ť򷵤��ޤ���
 * 
 *   this.srpgBattler(0)
 *   ��˥åȥ��٥�ȤΥХȥ�`���֥������Ȥ򷵤��ޤ���
 *   �����ڤ�ȡ�ä�������˥åȥ��٥�ȤΥ��٥�ȷ��Ť�ָ�����Ƥ���������
 *   0 ��ָ���������ϤϤ��Υ��ޥ�ɤ�g�Ф��Ƥ��륤�٥�Ȥ�����Ȥʤ�ޤ���
 *   �Τ�ָ�����ʤ��ä����ϤϴΤ��ЄӤ��륤�٥�ȡ��ޤ���ֱǰ���ЄӤ���
 *   ���٥�Ȥ�����Ȥʤ�ޤ���
 * 
 *   this.srpgRemoveUnit(0)
 *   ��˥åȥ��٥�Ȥ��ƵĤ��ų����ޤ���
 *   ���L���ܤˤʤä����Ϥ�ͬ���Q���Ȥʤꡢ����ե����å������ԄӵĤ�
 *   ����ˤʤꡢ���٥�����ݤ�g�Ф���ޤ���
 *   �����ָ�������� this.srpgBattler ��ͬ���Ǥ���
 * 
 *   this.srpgAddUnit(10, 1)
 *   ���٥�ȷ��� 10 ���򔳥���� 1 ���Υ��ͥߩ`��˥åȤȤ����O�����ޤ���
*/

var Imported = Imported || {};
Imported.TMSrpg = true;

(function () {

    var parameters = PluginManager.parameters('TMSrpg');
    var vnSrpgTurnCount = +(parameters['vnSrpgTurnCount'] || 1);
    var vnActorUnitNums = +(parameters['vnActorUnitNums'] || 2);
    var vnEnemyUnitNums = +(parameters['vnEnemyUnitNums'] || 3);
    var srpgBasicWait = +(parameters['srpgBasicWait'] || 30);
    var damagePopupInterval = +(parameters['damagePopupInterval'] || 30);
    var checkSkillId = +(parameters['checkSkillId'] || 0);
    var simpleMoveInput = parameters['simpleMoveInput'] === '1';
    var moveCommand = parameters['moveCommand'];
    var moveCancelCommand = parameters['moveCancelCommand'];
    var actionCommand = parameters['actionCommand'];
    var itemCommand = parameters['itemCommand'];
    var equipCommand = parameters['equipCommand'];
    var waitingCommand = parameters['waitingCommand'];
    var statusCommand = parameters['statusCommand'];
    var turnEndCommand = parameters['turnEndCommand'];
    var unitListCommand = parameters['unitListCommand'];
    var infoCommand = parameters['infoCommand'];
    var optionsCommand = parameters['optionsCommand'];
    var saveCommand = parameters['saveCommand'];
    var loadCommand = parameters['loadCommand'];
    var gameEndCommand = parameters['gameEndCommand'];
    var yesCommand = parameters['yesCommand'];
    var noCommand = parameters['noCommand'];
    var moveParam = parameters['moveParam'];
    var moveHelp = parameters['moveHelp'];
    var waitingHelp = parameters['waitingHelp'];
    var turnEndHelp = parameters['turnEndHelp'];
    var actionRangeHelp = parameters['actionRangeHelp'];
    var actionEffectHelp = parameters['actionEffectHelp'];
    var colorAreaMove = parameters['colorAreaMove'].split(' ').map(Number);
    var colorAreaWaiting = parameters['colorAreaWaiting'].split(' ').map(Number);
    var colorAreaRange = parameters['colorAreaRange'].split(' ').map(Number);
    var colorAreaEffect = parameters['colorAreaEffect'].split(' ').map(Number);
    var srpgCommandX = +parameters['srpgCommandX'];
    var srpgCommandY = +parameters['srpgCommandY'];
    var srpgCommandLineHeight = +parameters['srpgCommandLineHeight'];
    var srpgStatusBackground = +parameters['srpgStatusBackground'];
    var srpgStatusNameWidth = +parameters['srpgStatusNameWidth'];
    var srpgStatusHpWidth = +parameters['srpgStatusHpWidth'];
    var srpgStatusFaceMirror = parameters['srpgStatusFaceMirror'];
    var srpgUnitListWidth = +parameters['srpgUnitListWidth'];
    var srpgUnitListRows = +parameters['srpgUnitListRows'];
    var srpgInfoSize = parameters['srpgInfoSize'].split('*').map(Number);
    var srpgStatusArrowImage = parameters['srpgStatusArrowImage'];
    var srpgCursorImage = parameters['srpgCursorImage'];

    //-----------------------------------------------------------------------------
    // Game_Temp
    //

    var _Game_Temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function () {
        _Game_Temp_initialize.call(this);
        this.clearSrpgCommand();
        this._srpgNextUnitId = 0;
        this._srpgLastUnitId = -1;
        this._srpgDeadUnitIds = [];
    };

    // ���ߩ`������ɥ��򷵤�
    Game_Temp.prototype.srpgDummyWindow = function () {
        if (this._srpgDummyWindow == null) this._srpgDummyWindow = new Window_Base(0, 0, 0, 0);
        return this._srpgDummyWindow;
    };

    // SRPG���ޥ�ɥ�����ɥ��Ώ�Ԫ��s
    Game_Temp.prototype.reserveSrpgCommand = function (index, event) {
        this._reserveSrpgCommandIndex = index;
        this._reserveSrpgCommandEvent = event;
    };

    // SRPG���ޥ�ɥ�����ɥ��Ώ�Ԫ��s�򥯥ꥢ
    Game_Temp.prototype.clearSrpgCommand = function () {
        this.reserveSrpgCommand(-1, null);
    };

    // SRPG���ޥ�ɥ�����ɥ��Ώ�Ԫ��s���Є����ɤ����򷵤�
    Game_Temp.prototype.isSrpgCommandReserved = function () {
        return this._reserveSrpgCommandIndex >= 0;
    };

    Game_Temp.prototype.reserveSrpgCommandIndex = function () {
        return this._reserveSrpgCommandIndex;
    };

    Game_Temp.prototype.reserveSrpgCommandEvent = function () {
        return this._reserveSrpgCommandEvent;
    };

    // SRPG�Υ��`���_ʼ�ե饰�򥻥å�
    Game_Temp.prototype.setSrpgTurnStart = function (srpgTurnStart) {
        this._srpgTurnStart = srpgTurnStart;
    };

    Game_Temp.prototype.isSrpgTurnStart = function () {
        return this._srpgTurnStart;
    };

    Game_Temp.prototype.setSrpgNextUnitId = function (eventId) {
        this._srpgNextUnitId = eventId;
    };

    Game_Temp.prototype.srpgNextUnitId = function () {
        return this._srpgNextUnitId;
    };

    Game_Temp.prototype.setSrpgLastUnitId = function (unitId) {
        this._srpgLastUnitId = unitId;
    };

    Game_Temp.prototype.srpgLastUnitId = function () {
        return this._srpgLastUnitId;
    };

    Game_Temp.prototype.setSrpgDeadUnitId = function (id) {
        this._srpgDeadUnitIds.push(id);
    };

    Game_Temp.prototype.srpgDeadUnitId = function () {
        return this._srpgDeadUnitIds.shift();
    };

    //-----------------------------------------------------------------------------
    // Game_Action
    //

    var _Game_Action_setSubject = Game_Action.prototype.setSubject;
    Game_Action.prototype.setSubject = function (subject) {
        _Game_Action_setSubject.call(this, subject);
        if (this._subjectActorId === 0 && this._subjectEnemyIndex < 0) {
            this._subjectActorId = -subject.srpgEventId();
        }
    };

    var _Game_Action_subject = Game_Action.prototype.subject;
    Game_Action.prototype.subject = function () {
        if (this._subjectActorId < 0) {
            // �ȥ�`�פ�ʹ�鷺���Є�����Ȥ���SRPG�Хȥ�`�򷵤�
            return $gameMap.event(-this._subjectActorId).srpgBattler();
        }
        return _Game_Action_subject.call(this);
    };

    // �Y����y�äΥ���`��Ӌ��
    Game_Action.prototype.makeTestDamageValue = function (target) {
        var item = this.item();
        var baseValue = this.evalDamageFormula(target);
        var value = baseValue * this.calcElementRate(target);
        if (this.isPhysical()) value *= target.pdr;
        if (this.isMagical()) value *= target.mdr;
        if (baseValue < 0) value *= target.rec;
        value = this.applyGuard(value, target);
        return Math.round(value);
    };

    // ���`���åȤˌ������Є��ʄ����򷵤�
    Game_Action.prototype.itemValidEffect = function (target) {
        var effects = this.item().effects;
        for (var i = 0; i < effects.length; i++) {
            var effect = effects[i];
            if (this.testItemEffect(target, effect)) return effect;
        }
        return null;
    };

    //-----------------------------------------------------------------------------
    // Game_BattlerBase
    //

    var _Game_BattlerBase_isOccasionOk = Game_BattlerBase.prototype.isOccasionOk;
    Game_BattlerBase.prototype.isOccasionOk = function (item) {
        if ($gameMap.isSrpg()) {
            return item.occasion === 0 || item.occasion === 1;
        }
        return _Game_BattlerBase_isOccasionOk.call(this, item);
    };

    // SRPG�ѥ��`���򷵤�
    Game_BattlerBase.prototype.srpgParam = function (tag) {
        var result = this.traitObjects().reduce(function (r, object) {
            return r + Number(object.meta[tag] || 0);
        }, 0);
        return Math.max(result, 0);
    };

    // SRPG�ե饰�򷵤�
    Game_BattlerBase.prototype.srpgFlag = function (tag) {
        return this.traitObjects().some(function (object) {
            return object.meta[tag];
        });
    };

    Game_BattlerBase.prototype.setSrpgEventId = function (id) {
        this._srpgEventId = id;
    };

    Game_BattlerBase.prototype.srpgEventId = function () {
        return this._srpgEventId || 0;
    };

    Game_BattlerBase.prototype.srpgEvent = function () {
        return $gameMap.event(this.srpgEventId());
    };

    //-----------------------------------------------------------------------------
    // Game_Battler
    //

    Game_Battler.prototype.srpgGainHp = function (value) {
        Game_Battler.prototype.gainHp.call(this, value);
        if (this.isDead()) $gameTemp.setSrpgDeadUnitId(this.srpgEventId());
    };

    //-----------------------------------------------------------------------------
    // Game_Actor
    //

    Game_Actor.prototype.srpgMakeActions = function () {
        Game_Battler.prototype.makeActions.call(this);
        if (this.isAutoBattle()) {
            var list = this.makeActionList();
            for (var i = 0; i < this.numActions(); i++) {
                this.setAction(i, list[Math.randomInt(list.length)]);
            }
        } else {
            this.makeConfusionActions();
        }
    };

    //-----------------------------------------------------------------------------
    // Game_Enemy
    //

    Object.defineProperty(Game_Enemy.prototype, 'level', {
        get: function () {
            return this.enemy().meta.level || 1;
        },
        configurable: true
    });

    Game_Enemy.prototype.faceName = function () {
        return this.enemy().meta.faceName || '';
    };

    Game_Enemy.prototype.faceIndex = function () {
        return +(this.enemy().meta.faceIndex || 0);
    };

    Game_Enemy.prototype.nickname = function () {
        return this.enemy().meta.nickname || '';
    };

    Game_Enemy.prototype.profile = function () {
        return this.enemy().meta.profile || '';
    };

    Game_Enemy.prototype.currentClass = function () {
        return $dataClasses[this.enemy().meta.class || 1];
    };

    Game_Enemy.prototype.equips = function () {
        var result = [];
        var equipIds = this.enemy().meta.equips;
        if (equipIds) {
            equipIds = equipIds.split(' ').map(Number);
            for (var i = 0; i < equipIds.length; i++) {
                result.push(i === 0 ? $dataWeapons[equipIds[i]] :
                    $dataArmors[equipIds[i]]);
            }
        }
        return result;
    };

    Game_Enemy.prototype.attackAnimationId1 = function () {
        return this.enemy().meta.attackAnimation || 1;
    };

    Game_Enemy.prototype.srpgMakeActions = function () {
        return this.makeActions();
    };

    //-----------------------------------------------------------------------------
    // Game_Map
    //

    // �����ʾ����`����ڻ�
    Game_Map.prototype.initColorArea = function () {
        if (!Imported.SAN_TileToner) return;
        this.clearTileTones();
    };

    // �����ʾ����`�򥻥å�
    Game_Map.prototype.setColorArea = function (colorParam) {
        if (!Imported.SAN_TileToner) return;
        this.clearTileTones();
        var r = colorParam[0], g = colorParam[1], b = colorParam[2];
        var alpha = colorParam[3];
        var keys = Object.keys(this._srpgArea);
        for (var i = 0, a; i < keys.length; i++) {
            a = keys[i].split(',').map(Number);
            this.setTileTone(a[0], a[1], r, g, b, alpha);
        }
    };

    // SRPG�C�ܤ��Є��ˤʤäƤ��뤫�ɤ����򷵤�
    Game_Map.prototype.isSrpg = function () {
        return this._srpgActive;
    };

    // SRPG�C�ܤ��Є��ˤ��ޤ�
    Game_Map.prototype.srpgActivate = function () {
        this._srpgActive = true;
        this._srpgActorTurn = false;
        this.changeSrpgTurnCount(0);
        this.setupTilePassableTable();        // ����ͨ���ж��Ʃ`�֥�Υ��åȥ��å�
        this.setupSrpgManagerEvent();         // SRPG�����٥�ȤΥ��åȥ��å�
        this.setupSrpgUnits();                // SRPG��˥åȤΥ��åȥ��å�
        this.onSrpgTurnStart();
    };

    // SRPG�C�ܤ�o���ˤ��ޤ�
    Game_Map.prototype.srpgDeactivate = function () {
        this._srpgActive = false;
        $gameTemp.clearSrpgCommand();
    };

    // SRPG���_ʼ����s���ޤ�
    Game_Map.prototype.reserveSrpgStart = function () {
        this._needsSrpgStart = true;
    };

    // ���`���_ʼ
    Game_Map.prototype.onSrpgTurnStart = function () {
        this._srpgActorTurn = !this._srpgActorTurn;
        if (this._srpgActorTurn) {
            this.changeSrpgTurnCount(this._srpgTurnCount + 1);  // ���`�����Υ������
        }
        this.srpgActiveTurnUnits(true).forEach(function (event) {
            event.onSrpgTurnStart();
        });
        $gameTemp.setSrpgTurnStart(true);     // ���`���_ʼ�ե饰�����Ƥ�
        this.startSrpgManagerEvent();         // SRPG�����٥�Ȥ����Ӥ���
    };

    // ���`�����Ή��
    Game_Map.prototype.changeSrpgTurnCount = function (n) {
        this._srpgTurnCount = n;
        $gameVariables.setValue(vnSrpgTurnCount, n);
    };

    // ζ�����`�󤫤ɤ����򷵤�
    Game_Map.prototype.isSrpgActorTurn = function () {
        return this._srpgActorTurn;
    };

    // �ޥåפΥ��åȥ��å�
    var _Game_Map_setup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function (mapId) {
        _Game_Map_setup.call(this, mapId);
        this.initColorArea();
        if (this._needsSrpgStart) {
            this.srpgActivate();                // SRPG�C�ܤ��Є���
            this._needsSrpgStart = false;
        } else if (this.isSrpg()) {
            this.srpgDeactivate();              // SRPG�C�ܤ�o����
        }
    };

    // ����ͨ���ж��Ʃ`�֥�򥻥åȥ��å�
    Game_Map.prototype.setupTilePassableTable = function () {
        this._normalTilePassableTable = [];
        this._floatTilePassableTable = [];
        this._shipTilePassableTable = [];
        this._terrainTagTable = [];
        for (var x = 0; x < this.width(); x++) {
            this._normalTilePassableTable[x] = [];
            this._floatTilePassableTable[x] = [];
            this._shipTilePassableTable[x] = [];
            for (var y = 0; y < this.height(); y++) {
                this._normalTilePassableTable[x][y] = [];
                this._floatTilePassableTable[x][y] = [];
                this._shipTilePassableTable[x][y] = [];
                for (var d = 2; d <= 8; d += 2) {
                    var x2 = this.roundXWithDirection(x, d);
                    var y2 = this.roundYWithDirection(y, d);
                    if (this.isValid(x2, y2)) {
                        var d2 = 10 - d;
                        var index = d / 2 - 1;
                        var pass2 = this.isPassable(x2, y2, d2);
                        if (this.isPassable(x, y, d) && pass2) {
                            this._normalTilePassableTable[x][y][index] = true;
                            this._shipTilePassableTable[x][y][index] = true;
                        } else if (this.isShipPassable(x2, y2) ||
                            (this.isShipPassable(x, y) && pass2)) {
                            this._shipTilePassableTable[x][y][index] = true;
                        }
                        this._floatTilePassableTable[x][y][index] = true;
                    }
                }
                if (this.terrainTag(x, y) === 1) {
                    this._terrainTagTable.push(new Point(x, y));
                }
            }
        }
    };

    // SRPG�����٥�ȤΥ��åȥ��å�
    Game_Map.prototype.setupSrpgManagerEvent = function () {
        var events = this.events();
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (event.event().meta.srpgManager) {
                this._srpgManagerEventId = event.eventId();
                event.setSelfSwitch('A', false);
                event.setSelfSwitch('B', false);
                event.refresh();
                break;
            }
        }
    };

    // SRPG�����٥�Ȥ򷵤�
    Game_Map.prototype.srpgManagerEvent = function () {
        return this.event(this._srpgManagerEventId);
    };

    // SRPG�����٥�Ȥ����Ӥ���
    Game_Map.prototype.startSrpgManagerEvent = function () {
        this.srpgManagerEvent().start();
    };

    // SRPG��˥åȤΥ��åȥ��å�
    Game_Map.prototype.setupSrpgUnits = function () {
        this._srpgEnemyIds = {};
        this.events().forEach(function (event) {
            event.setupSrpgBattler();
        });
        this.updateSrpgEnemyLetter();
        this.updateActorUnitNums();
        this.updateEnemyUnitNums();
        $gameTemp.setSrpgLastUnitId(-1);
    };

    Game_Map.prototype.updateSrpgEnemyLetter = function () {
        var events = this.srpgEnemyUnits();
        for (var i = 0; i < events.length; i++) {
            var id = events[i].srpgBattler().enemyId();
            if (this._srpgEnemyIds[id] >= 2) events[i].setPlural(true);
        }
    };

    Game_Map.prototype.setSrpgEnemyId = function (id) {
        if (this._srpgEnemyIds[id] == null) this._srpgEnemyIds[id] = 0;
        return this._srpgEnemyIds[id]++;
    };

    // �ФäƤ��륢�����`��˥åȤ��������
    Game_Map.prototype.updateActorUnitNums = function () {
        var events = this.srpgActorUnits(true).filter(function (event) {
            return !event.event().meta.neutral;
        });
        $gameVariables.setValue(vnActorUnitNums, events.length);
    };

    // �ФäƤ��륨�ͥߩ`��˥åȤ��������
    Game_Map.prototype.updateEnemyUnitNums = function () {
        var events = this.srpgEnemyUnits(true).filter(function (event) {
            return !event.event().meta.neutral;
        });
        $gameVariables.setValue(vnEnemyUnitNums, events.length);
    };

    // SRPG��˥åȤ򷵤�
    Game_Map.prototype.srpgUnits = function (alive) {
        return this.events().filter(function (event) {
            return event.isSrpgUnit(alive);
        });
    };

    // SRPG�������`��˥åȤ򷵤�
    Game_Map.prototype.srpgActorUnits = function (alive) {
        return this.events().filter(function (event) {
            return event.isSrpgActorUnit(alive);
        });
    };

    // SRPG���ͥߩ`��˥åȤ򷵤�
    Game_Map.prototype.srpgEnemyUnits = function (alive) {
        return this.events().filter(function (event) {
            return event.isSrpgEnemyUnit(alive);
        });
    };

    // ���`�󤬥����ƥ��֤ʄ������������˥åȤ򷵤�
    Game_Map.prototype.srpgActiveTurnUnits = function (alive) {
        return this._srpgActorTurn ? this.srpgActorUnits(alive) :
            this.srpgEnemyUnits(alive);
    };

    // ָ����˥åȤ��`���������������˥åȤ򷵤�
    Game_Map.prototype.srpgOpponentUnits = function (unit, alive) {
        return unit.isSrpgActorUnit() ? this.srpgEnemyUnits(alive) : this.srpgActorUnits(alive);
    };

    // ָ����˥åȤ�ͬ���������������˥åȤ򷵤�
    Game_Map.prototype.srpgFriendUnits = function (unit, alive) {
        return unit.isSrpgActorUnit() ? this.srpgActorUnits(alive) : this.srpgEnemyUnits(alive);
    };

    // ָ�����ˤ�SRPG��˥åȤ򷵤�
    Game_Map.prototype.srpgUnitXy = function (x, y, alive) {
        var events = this.srpgUnits(alive);
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (event.pos(x, y)) return event;
        }
        return null;
    };

    // �����ڤ�SRPG��˥åȤ򷵤�
    Game_Map.prototype.srpgUnitsArea = function (area, alive) {
        area = area || this._srpgArea;
        var result = [];
        var events = this.srpgUnits(alive);
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            var key = '' + event.x + ',' + event.y;
            if (area[key]) result.push(event);
        }
        return result;
    };

    // ָ�������ЄӤ��Є��ʥ�˥åȤ򷵤�
    Game_Map.prototype.srpgActionEffectiveUnits = function (unit, action) {
        if (!action.item()) return [];
        var confusionLevel = unit.srpgBattler().confusionLevel();
        var flag = ((confusionLevel === 2 && Math.randomInt(2) === 0) ||
            confusionLevel === 3) ^ unit.isTraitor();
        // �����󥹥��뤫�Ą�����ܞ�ʤ����ޤ���ζ�����󥹥��뤫�Ą�����ܞ����
        if (action.isForOpponent() ^ flag) {
            // ���ˤ���Ƥ��ʤ�������˥åȤ���
            var result = this.srpgOpponentUnits(unit, true).filter(function (event) {
                return event.srpgBattler().confusionLevel() < 3;
            });
            // �Y�Ф��ߤ�ζ����˥åȤ�׷��
            result = result.concat(this.srpgFriendUnits(unit, true).filter(function (event) {
                return event.isTraitor();
            }));
            return result;
        }
        // �����󥹥��뤫�Ą�����ܞ����
        if (flag) {
            // �Է����⤫�ġ�������ܞ���Ƥ��ʤ�ζ����˥åȤ򷵤�
            return this.srpgFriendUnits(unit, true).filter(function (event) {
                return event.eventId() !== unit.eventId() &&
                    (!event.isTraitor() ^ event.srpgBattler().confusionLevel() === 3);
            });
        }
        // ζ�����󥹥��뤫�Ą�����ܞ�ʤ�
        // �Y�Ф��������ζ����˥åȤ򷵤�
        return this.srpgFriendUnits(unit, true).filter(function (event) {
            return !event.isTraitor();
        });
    };

    // �Ƅ��Ф�SRPG��˥åȤ����뤫�ɤ����򷵤�
    Game_Map.prototype.isSrpgUnitMoving = function () {
        return this.srpgUnits().some(function (event) {
            return event.isMoveRouteForcing();
        });
    };

    // ���˥�`������ʾ�Ф�SRPG��˥åȤ����뤫�ɤ����򷵤�
    Game_Map.prototype.isSrpgUnitAnimationPlaying = function () {
        return this.srpgUnits().some(function (event) {
            return event.isAnimationPlaying();
        });
    };

    // ���٥�Ȥ�ָ�����ˤ���ξ��x�ǁK���椨��
    Game_Map.prototype.sortEventsDistance = function (events, x, y) {
        events.sort(function (a, b) {
            var d1 = Math.abs(x - a.x) + Math.abs(y - a.y);
            var d2 = Math.abs(x - b.x) + Math.abs(y - b.y);
            return d1 - d2;
        });
        return events;
    };

    // ���٥�Ȥ������ԤǁK���椨��
    Game_Map.prototype.sortEventsAgi = function (events) {
        events.sort(function (a, b) {
            return b.srpgBattler().agi - a.srpgBattler().agi;
        });
        return events;
    };

    // �Ƅӿ��ܹ�����ʾ����
    Game_Map.prototype.showMovableArea = function (unit) {
        this._srpgArea = {};
        this.setupPassableTable(unit);        // ͨ���ж��Ʃ`�֥�򥻥åȥ��å�
        this.checkMovableArea(unit);          // �Ƅӿ��ܹ���Υ�`�ȥ����å�
        this.deleteAreaOverlapEvent();        // ���Ǥ˥��٥�Ȥ��������ˤ����
        this.setColorArea(colorAreaMove);
    };

    // ͨ���ж��Ʃ`�֥�򥻥åȥ��å�
    Game_Map.prototype.setupPassableTable = function (unit) {
        if (unit.isFloat()) {
            this._passableTable = JSON.parse(JSON.stringify(this._floatTilePassableTable));
        } else if (unit.isShip()) {
            this._passableTable = JSON.parse(JSON.stringify(this._shipTilePassableTable));
        } else {
            this._passableTable = JSON.parse(JSON.stringify(this._normalTilePassableTable));
        }
        var events = this.srpgUnits(true);
        for (var i = 0, len = events.length; i < len; i++) {
            var event = events[i];
            if (event.isNormalPriority() && !unit.isFriend(event)) {
                for (var j = 0; j < 4; j++) {
                    this._passableTable[event.x][event.y][j] = undefined;
                }
            }
        }
    };

    // �Ƅӿ��ܹ���Υ�`�ȥ����å�
    Game_Map.prototype.checkMovableArea = function (unit) {
        var mov = unit.mov();
        if (mov === 0) return;
        mov = mov - 1;
        var a = [];
        a.push([unit.x, unit.y + 1, unit.x, unit.y, 0, '1', mov]);
        a.push([unit.x - 1, unit.y, unit.x, unit.y, 1, '2', mov]);
        a.push([unit.x + 1, unit.y, unit.x, unit.y, 2, '3', mov]);
        a.push([unit.x, unit.y - 1, unit.x, unit.y, 3, '4', mov]);
        while (a.length > 0) {
            var data = a.pop();
            var x = data[0];
            var y = data[1];
            var key = '' + x + ',' + y;
            if (this._passableTable[data[2]][data[3]][data[4]] &&
                (!this._srpgArea[key] || data[5].length <= this._srpgArea[key].length)) {
                this._srpgArea[key] = data[5];
                if (data[6] > 0) {
                    data[6] = data[6] - 1;
                    if (data[4] !== 3) a.push([x, y + 1, x, y, 0, data[5] + '1', data[6]]);
                    if (data[4] !== 2) a.push([x - 1, y, x, y, 1, data[5] + '2', data[6]]);
                    if (data[4] !== 1) a.push([x + 1, y, x, y, 2, data[5] + '3', data[6]]);
                    if (data[4] !== 0) a.push([x, y - 1, x, y, 3, data[5] + '4', data[6]]);
                }
            }
        }
    };

    // ���C������ʾ����
    Game_Map.prototype.showWaitingArea = function (unit) {
        this._srpgArea = this.createArea(unit.x, unit.y, ['diamond', 1, 'rect', 0]);
        this.setColorArea(colorAreaWaiting);
    };

    // ��̹�����ʾ����
    Game_Map.prototype.showRangeArea = function (x, y, skill) {
        this._srpgArea = this.createRangeArea(x, y, skill);
        this.setColorArea(colorAreaRange);
    };

    // ��̹�������ɤ���
    Game_Map.prototype.createRangeArea = function (x, y, skill) {
        var a = (skill.meta.range || 'diamond 1').split(' ');
        return this.createArea(x, y, a);
    };

    // ����������ʾ����
    Game_Map.prototype.showEffectArea = function (x, y, skill) {
        this._srpgArea = this.createEffectArea(x, y, skill);
        this.setColorArea(colorAreaEffect);
    };

    // ������������ɤ���
    Game_Map.prototype.createEffectArea = function (x, y, skill) {
        var a = (skill.meta.effect || 'diamond 0').split(' ');
        return this.createArea(x, y, a);
    };

    // ��������ɤ���
    Game_Map.prototype.createArea = function (x, y, param) {
        var area = {};
        if (param[0] === 'diamond') {
            this.setArea(area, this.isAreaValidDiamond, x, y, +param[1], true);
        } else if (param[0] === 'rect') {
            this.setArea(area, this.isAreaValidRect, x, y, +param[1], true);
        } else if (param[0] === 'line') {
            this.setArea(area, this.isAreaValidLine, x, y, +param[1], true);
        } else if (param[0] === 'straight') {
            this.setArea(area, this.isAreaValidPortrait, x, y, +param[1], true);
        } else if (param[0] === 'x') {
            this.setArea(area, this.isAreaValidX, x, y, +param[1], true);
        } else if (param[0] === 'T') {
            this.setArea(area, this.isAreaValidT, x, y, +param[1], true);
        } else if (param[0] === 'foward') {
            this.setArea(area, this.isAreaValidFoward, x, y, +param[1], true);
        }

        if (param[2] === 'diamond') {
            this.deleteArea(area, this.isAreaValidDiamond, x, y, +param[3], false);
        } else if (param[2] === 'rect') {
            this.deleteArea(area, this.isAreaValidRect, x, y, +param[3], false);
        } else if (param[2] === 'line') {
            this.deleteArea(area, this.isAreaValidLine, x, y, +param[3], false);
        } else if (param[2] === 'straight') {
            this.deleteArea(area, this.isAreaValidPortrait, x, y, +param[3], false);
        } else if (param[2] === 'x') {
            this.deleteArea(area, this.isAreaValidX, x, y, +param[3], false);
        } else if (param[2] === 'T') {
            this.deleteArea(area, this.isAreaValidT, x, y, +param[3], false);
        } else if (param[2] === 'foward') {
            this.deleteArea(area, this.isAreaValidFoward, x, y, +param[3], false);
        }
        return area;
    };

    Game_Map.prototype.setArea = function (area, checker, x, y, size) {
        for (var x2 = x - size; x2 <= x + size; x2++) {
            for (var y2 = y - size; y2 <= y + size; y2++) {
                if (checker(x, y, x2, y2, size)) area['' + x2 + ',' + y2] = true;
            }
        }
    };

    Game_Map.prototype.deleteArea = function (area, checker, x, y, size) {
        for (var x2 = x - size; x2 <= x + size; x2++) {
            for (var y2 = y - size; y2 <= y + size; y2++) {
                if (checker(x, y, x2, y2, size)) delete area['' + x2 + ',' + y2];
            }
        }
    };

    Game_Map.prototype.isAreaValidDiamond = function (x, y, x2, y2, size) {
        return Math.abs(x - x2) + Math.abs(y - y2) <= size;
    };

    Game_Map.prototype.isAreaValidRect = function (x, y, x2, y2, size) {
        return true;
    };

    Game_Map.prototype.isAreaValidLine = function (x, y, x2, y2, size) {
        return x === x2 || y === y2;
    };

    Game_Map.prototype.isAreaValidPortrait = function (x, y, x2, y2, size) {
        return (x === x2);
    };

    Game_Map.prototype.isAreaValidX = function (x, y, x2, y2, size) {
        return x != x2 && y != y2 && (Math.abs(x + y2) == Math.abs(x2 + y) || Math.abs(x + y) == Math.abs(x2 + y2));
    };

    Game_Map.prototype.isAreaValidFoward = function (x, y, x2, y2, size) {
        var character = $gamePlayer;
        //    var character = this._srpgStatusWindow.user();
        if (character.direction() == 8) {
            return (x === x2 && y >= y2);
        }
        else if (character.direction() == 2) {
            return (x === x2 && y <= y2);
        }
        else if (character.direction() == 4) {
            return (x >= x2 && y == y2);
        }
        else if (character.direction() == 6) {
            return (x <= x2 && y == y2);
        }
    };

    Game_Map.prototype.isAreaValidT = function (x, y, x2, y2, size) {
        var character = $gamePlayer;
        //    var character = this._srpgStatusWindow.user();
        if (character.direction() == 8) {
            return y === y2 || (x === x2 && y <= y2);
        }
        else if (character.direction() == 2) {
            return y === y2 || (x === x2 && y >= y2);
        }
        else if (character.direction() == 4) {
            return x === x2 || (y === y2 && x <= x2);
        }
        else if (character.direction() == 6) {
            return (x === x2) || (y === y2 && x >= x2);
        }
    };

    // ���줫�餹�Ǥ˥��٥�Ȥ��������ˤ����
    Game_Map.prototype.deleteAreaOverlapEvent = function () {
        var events = this.events();
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (event.isNormalPriority() && !event.isThrough()) {
                delete this._srpgArea['' + event.x + ',' + event.y];
            }
        };
    };

    // ���줬�դ��ɤ����򷵤�
    Game_Map.prototype.isSrpgAreaEmpty = function () {
        return Object.keys(this._srpgArea).length === 0;
    };

    // �����ʾ���L��
    Game_Map.prototype.hideSrpgArea = function () {
        this.initColorArea();
    };

    // ָ�����ˤι���΂��򷵤�
    Game_Map.prototype.srpgAreaXy = function (x, y) {
        return this._srpgArea['' + x + ',' + y];
    };

    // ָ�����ˤ�һ��������������ˤ򷵤�
    Game_Map.prototype.posInsideAreaNearXy = function (x, y) {
        var result = null;
        var minValue = 1000;
        for (var prop in this._srpgArea) {
            var pos = prop.split(',').map(Number);
            var d = Math.abs(x - pos[0]) + Math.abs(y - pos[1]);
            if (d < minValue) {
                minValue = d;
                result = new Point(pos[0], pos[1]);
            }
        }
        return result;
    };

    // ָ�����ˤ�����˺��ޤ�Ƥ��뤫�򷵤�
    Game_Map.prototype.isInsideArea = function (x, y) {
        return this.srpgAreaXy(x, y) !== undefined;
    };

    // ָ�����٥�Ȥ�һ�������ˤ��ꡢ��˥åȥ��٥�ȤΤ��ʤ����Υ��� 1 �������ˤ򷵤�
    Game_Map.prototype.srpgBlankPosition = function (event) {
        var result = null;
        var minValue = 1000;
        for (var i = 0; i < this._terrainTagTable.length; i++) {
            var x = this._terrainTagTable[i].x;
            var y = this._terrainTagTable[i].y;
            if (this.srpgUnitXy(x, y)) continue;
            var d = Math.abs(event.x - x) + Math.abs(event.y - y);
            if (d < minValue) {
                minValue = d;
                result = this._terrainTagTable[i];
            }
        }
        return result;
    };

    //-----------------------------------------------------------------------------
    // Game_CharacterBase
    //

    // ����饯���`��SRPG��˥åȤ��ɤ����򷵤�
    Game_CharacterBase.prototype.isSrpgUnit = function () {
        return false;
    };

    //-----------------------------------------------------------------------------
    // Game_Character
    //

    Game_Character.prototype.turnTowardXy = function (x, y) {
        var sx = this.deltaXFrom(x);
        var sy = this.deltaYFrom(y);
        if (Math.abs(sx) > Math.abs(sy)) {
            this.setDirection(sx > 0 ? 4 : 6);
        } else if (sy !== 0) {
            this.setDirection(sy > 0 ? 8 : 2);
        }
    };

    //-----------------------------------------------------------------------------
    // Game_Player
    //

    var _Game_Player_hasStepAnime = Game_Player.prototype.hasStepAnime;
    Game_Player.prototype.hasStepAnime = function () {
        return _Game_Player_hasStepAnime.call(this) || $gameMap.isSrpg();
    };

    var _Game_Player_refresh = Game_Player.prototype.refresh;
    Game_Player.prototype.refresh = function () {
        _Game_Player_refresh.call(this);
        if ($gameMap.isSrpg()) {  // SRPG�C�ܤ��Є��ʤ�i�Х���ե��å��򥫩`����ˤ���
            var characterName = srpgCursorImage;
            var characterIndex = 0;
            this.setImage(characterName, characterIndex);
        }
    };

    var _Game_Player_updateMove = Game_Player.prototype.updateMove;
    Game_Player.prototype.updateMove = function () {
        if ($gameMap.isSrpg()) {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this._srpgVx, this._x);
            } else if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this._srpgVx, this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this._srpgVy, this._y);
            } else if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this._srpgVy, this._y);
            }
        } else {
            _Game_Player_updateMove.call(this);
        }
    };

    var _Game_Player_canMove = Game_Player.prototype.canMove;
    Game_Player.prototype.canMove = function () {
        return $gameMap.isSrpg() ? false : _Game_Player_canMove.call(this);
    };

    // SRPG�C�ܣ�����飩�Ȥ��Ƥ��Ƅ��Ȥ򥻥åȤ��루���ˤ�ָ����
    Game_Player.prototype.setSrpgCameraXy = function (x, y) {
        this._x = x;
        this._y = y;
        this._srpgVx = Math.abs((this._x - this._realX) / 8);
        this._srpgVy = Math.abs((this._y - this._realY) / 8);
    };

    // SRPG�C�ܣ�����飩�Ȥ��Ƥ��Ƅ��Ȥ򥻥åȤ��루���٥�Ȥ�ָ����
    Game_Player.prototype.setSrpgCameraEvent = function (event) {
        this.setSrpgCameraXy(event.x, event.y);
    };

    //-----------------------------------------------------------------------------
    // Game_Followers
    //

    var _Game_Followers_isVisible = Game_Followers.prototype.isVisible;
    Game_Followers.prototype.isVisible = function () {
        return _Game_Followers_isVisible.call(this) && !$gameMap.isSrpg();
    };

    //-----------------------------------------------------------------------------
    // Game_Event
    //

    Game_Event.prototype.setSelfSwitch = function (switchCode, flag) {
        var key = [this._mapId, this._eventId, switchCode];
        $gameSelfSwitches.setValue(key, flag);
    };

    Game_Event.prototype.srpgAutoStart = function (switchCode) {
        this.setSelfSwitch(switchCode, true);
        this.refresh();
        this.start();
    };

    var _Game_Event_erase = Game_Event.prototype.erase;
    Game_Event.prototype.erase = function () {
        _Game_Event_erase.call(this);
        if (this.isSrpgActorUnit()) {
            $gameMap.updateActorUnitNums();
        } else {
            $gameMap.updateEnemyUnitNums();
        }
    };

    // SRPG�Хȥ�`�򥻥åȥ��å�
    Game_Event.prototype.setupSrpgBattler = function (enemyId) {
        this._srpgActorId = null;
        this._srpgEnemyId = null;
        this._srpgBattler = null;
        var srpgActorId = this.event().meta.srpgActor;
        if (srpgActorId) {
            var actor = $gameParty.allMembers()[+srpgActorId];
            if (actor) {
                this.initSrpgUnitSetting();
                this._srpgActorId = +srpgActorId;
                this.setImage(actor.characterName(), actor.characterIndex());
                actor.setSrpgEventId(this.eventId());
            } else {
                this.erase();
            }
        } else {
            var srpgEnemyId = this.event().meta.srpgEnemy || enemyId;
            if (srpgEnemyId) {
                this.initSrpgUnitSetting();
                this._srpgEnemyId = +srpgEnemyId;
                this._srpgBattler = new Game_Enemy(this._srpgEnemyId, 0, 0);
                this._letterIndex = $gameMap.setSrpgEnemyId(this._srpgEnemyId);
                this._srpgBattler.setSrpgEventId(this.eventId());
            }
        }
    };

    Game_Event.prototype.initSrpgUnitSetting = function () {
        this.setSelfSwitch('A', false);
        this.refresh();
        this.setPriorityType(1);
    };

    Game_Event.prototype.setPlural = function (plural) {
        var battler = this.srpgBattler();
        battler.setPlural(plural);
        battler.setLetter(plural ? $gameTroop.letterTable()[this._letterIndex] : '');
    };

    // ���٥�Ȥ�SRPG�Хȥ�`�򷵤�
    Game_Event.prototype.srpgBattler = function () {
        if (this.isSrpgActorUnit()) return $gameParty.allMembers()[this._srpgActorId];
        return this._srpgBattler;
    };

    // ���٥�Ȥ�SRPG��˥åȤ��ɤ����򷵤�
    Game_Event.prototype.isSrpgUnit = function (alive) {
        return this.isSrpgActorUnit(alive) || this.isSrpgEnemyUnit(alive);
    };

    // ���٥�Ȥ�SRPG�������`��˥åȤ��ɤ����򷵤�
    Game_Event.prototype.isSrpgActorUnit = function (alive) {
        if (this._srpgActorId == null) return false;
        return alive == null || this.srpgBattler().isAlive() === alive;
    };

    // ���٥�Ȥ�SRPG���ͥߩ`��˥åȤ��ɤ����򷵤�
    Game_Event.prototype.isSrpgEnemyUnit = function (alive) {
        if (this._srpgEnemyId == null) return false;
        return alive == null || this.srpgBattler().isAlive() === alive;
    };

    // ���٥�Ȥ������˥åȤ�ͬ�������������Ƥ��뤫�ɤ����򷵤�
    Game_Event.prototype.isFriend = function (unit) {
        return this.srpgBattler().isActor() === unit.srpgBattler().isActor();
    };

    // ���٥�Ȥ��Ԅ��ЄӤ��ɤ����򷵤�
    Game_Event.prototype.isSrpgAutoBattle = function () {
        var battler = this.srpgBattler();
        if (this.isSrpgActorUnit()) {
            return battler.isAutoBattle() || battler.isConfused();
        }
        return battler.enemy().actions.length > 0;
    };

    // ���٥�Ȥ������������ܤ��ɤ����򷵤�
    Game_Event.prototype.isSrpgInputtable = function () {
        return this.isSrpgActorUnit(true) && !this.isSrpgAutoBattle();
    };

    // ���٥�Ȥ�ˮ���Ƅӿ���״�B���ɤ����򷵤�
    Game_Event.prototype.isShip = function () {
        return this.srpgBattler().srpgFlag('shipMove');
    };

    // ���٥�Ȥ����[�Ƅ�״�B���ɤ����򷵤�
    Game_Event.prototype.isFloat = function () {
        return this.srpgBattler().srpgFlag('floatMove');
    };

    // ���٥�Ȥ��Ƅ����򷵤�
    Game_Event.prototype.mov = function () {
        return Math.max(this.srpgBattler().srpgParam('mov'), 0);
    };

    // ���٥�Ȥ��������x�򷵤�
    Game_Event.prototype.search = function () {
        return this.srpgBattler().srpgParam('search');
    };

    // ���٥�Ȥ��Y�Ф��ߤ��ɤ����򷵤�
    Game_Event.prototype.isTraitor = function () {
        return this.event().meta.traitor;
    };

    // ���٥�Ȥ��Ƅӿ��ܤ��ɤ����򷵤�
    Game_Event.prototype.canSrpgMove = function () {
        return !this._moved && this.mov() > 0;
    };

    // ���٥�Ȥ��ƄӤ�K�ˤ���
    Game_Event.prototype.endSrpgMove = function () {
        this._moved = true;
    };

    // ���٥�Ȥ��Єӿ��ܤ��ɤ����򷵤�
    Game_Event.prototype.canSrpgAct = function () {
        return !this._acted && this.srpgBattler().canMove();
    };

    // ���٥�Ȥ��ЄӤ�K�ˤ���
    Game_Event.prototype.endSrpgAction = function () {
        this._acted = true;
        this._moved = true;
        this.clearLastPosition();     // �Ƅ�ǰ���������򥯥ꥢ
    };

    // ���٥�ȤΥ��`���_ʼ�I��
    Game_Event.prototype.onSrpgTurnStart = function () {
        var battler = this.srpgBattler();
        battler.onTurnEnd();
        this.reserveDamagePopup(damagePopupInterval);
        this.srpgCheckDead();
        this._moved = false;
        this._acted = false;
    };

    // ���٥�Ȥδ��C�I��
    Game_Event.prototype.executeSrpgWaiting = function (x, y) {
        this.turnTowardXy(x, y);
        this._moved = true;     // �ƄӜg�ߥե饰�����Ƥ�
        this.endSrpgAction();   // �ЄӤ�K�ˤ���
    };

    // ���٥�Ȥ��������x�ڤ˔�����˥åȤ����뤫�ɤ����򷵤�
    Game_Event.prototype.checkSearch = function () {
        var search = this.search();
        if (search === 0 || this.srpgBattler().isConfused()) return true;
        var area = $gameMap.createArea(this.x, this.y, ['diamond', search, 'rect', 0]);
        var events = $gameMap.srpgUnitsArea(area, true);
        var flag = this.isSrpgActorUnit();
        return events.some(function (event) {
            return event.isSrpgActorUnit() !== flag || event.isTraitor();
        });
    };

    // �����Ф����Ƅӥ�`�Ȥ����ɤ����ƄӤ���
    Game_Event.prototype.moveRouteText = function (routeText) {
        var gc = Game_Character;
        var moveRoute = { list: [], repeat: false, skippable: false, wait: true };
        moveRoute.list.push({ code: gc.ROUTE_THROUGH_ON, parameters: [] });
        moveRoute.list.push({ code: gc.ROUTE_CHANGE_SPEED, parameters: [5] });
        while (routeText.length > 0) {
            moveRoute.list.push({ code: +routeText.slice(0, 1), parameters: [] });
            routeText = routeText.slice(1);
        }
        moveRoute.list.push({ code: gc.ROUTE_THROUGH_OFF, parameters: [] });
        moveRoute.list.push({ code: gc.ROUTE_CHANGE_SPEED, parameters: [3] });
        moveRoute.list.push({ code: gc.ROUTE_END, parameters: [] });
        this.forceMoveRoute(moveRoute);
        this._lastPosition = { x: this._x, y: this._y, direction: this.direction() };
        this._moved = true;     // �ƄӜg�ߥե饰�����Ƥ�
    };

    // �Ƅӥ���󥻥�
    Game_Event.prototype.backToLastPosition = function () {
        this.locate(this._lastPosition.x, this._lastPosition.y);
        this.setDirection(this._lastPosition.direction);
        this.clearLastPosition();     // �Ƅ�ǰ���������򥯥ꥢ
        this._moved = false;
    };

    // �Ƅ�ǰ���������򥯥ꥢ
    Game_Event.prototype.clearLastPosition = function () {
        this._lastPosition = null;
    };

    // �Ƅ�ǰ����������Є����ɤ����򷵤�
    Game_Event.prototype.isLastPositionValid = function () {
        return !!this._lastPosition;
    };

    // ָ�������ЄӤ��u��������ℿ���θߤ����ˤ򷵤�
    Game_Event.prototype.srpgEvaluateAction = function (action) {
        var skill = action.item();
        if (!skill) return null;
        var result = null, maxValue = 0, cache = {};
        var targets = $gameMap.srpgActionEffectiveUnits(this, action);
        var rangeArea = $gameMap.createRangeArea(this.x, this.y, skill);
        for (var prop in rangeArea) {
            var sum = 0;
            var pos = prop.split(',').map(Number);
            var effectArea = $gameMap.createEffectArea(pos[0], pos[1], skill);
            for (var i = 0; i < targets.length; i++) {
                var target = targets[i];
                var key = '' + target.x + ',' + target.y;
                if (effectArea[key]) {
                    if (!cache[key]) {
                        var battler = target.srpgBattler();
                        cache[key] = action.evaluateWithTarget(battler);
                        if (action.hasItemAnyValidEffects(battler)) cache[key] += 0.5;
                    }
                    sum += cache[key];
                }
            }
            if (sum > maxValue) {
                maxValue = sum;
                result = new Point(pos[0], pos[1]);
            }
        }
        return result;
    };

    // �ЄӤΥ��˥�`�������ʾ
    Game_Event.prototype.showSrpgActionAnimation = function () {
        var subject = this.srpgBattler();
        var targets = $gameMap.srpgUnitsArea(null, true);
        var action = subject.currentAction();
        var item = action.item();
        subject.useItem(item);      // �����Ȥ�֧�B��
        var animationId = item.animationId;
        if (animationId < 0) {
            animationId = subject.attackAnimationId1();
        }
        var animation = $dataAnimations[animationId];
        for (var i = 0; i < targets.length; i++) {
            targets[i].requestAnimation(animationId);
        }
    };

    // �ЄӤΌg��
    Game_Event.prototype.executeSrpgAction = function () {
        $gameTemp.setSrpgNextUnitId(-this.eventId());
        var subject = this.srpgBattler();
        this.srpgCheckDead();
        var action = subject.currentAction();
        var checkFlag = action.isSkill() && action.item().id === checkSkillId;
        var targets = $gameMap.srpgUnitsArea(null, true);
        for (var i = 0; i < targets.length; i++) {
            action.apply(targets[i].srpgBattler());
            targets[i].reserveDamagePopup(i * damagePopupInterval);
            this.reserveDamagePopup(i * damagePopupInterval);
            targets[i].srpgCheckDead();
            this.srpgCheckDead();
            if (checkFlag) targets[i].start();
        }
        this.endSrpgAction();
        subject.onAllActionsEnd();
        return targets.length * damagePopupInterval;
    };

    // ���L���ܥ����å�
    Game_Event.prototype.srpgCheckDead = function () {
        if (this.srpgBattler().isDead()) {
            $gameTemp.setSrpgDeadUnitId(this._eventId);
        }
    };

    // ����`���ݥåץ��åפ���s
    Game_Event.prototype.reserveDamagePopup = function (delay) {
        this._damagePopupDelay = delay;
        this._damagePopupResult = JSON.parse(JSON.stringify(this.srpgBattler().result()));
    };

    // ����`���ݥåץ��åפ���s����Ƥ��뤫�򷵤�
    Game_Event.prototype.isDamagePopupReserved = function () {
        return this._damagePopupDelay !== undefined;
    };

    // �ե�`�����
    var _Game_Event_update = Game_Event.prototype.update;
    Game_Event.prototype.update = function () {
        _Game_Event_update.call(this);
        this.updateDamagePopup();
    };

    // ����`���ݥåץ��åפθ���
    Game_Event.prototype.updateDamagePopup = function () {
        if (this.isDamagePopupReserved()) {
            this._damagePopupDelay--;
            if (this._damagePopupDelay <= 0) {
                this.pasteDamagePopupResult();
                var battler = this.srpgBattler();
                battler.startDamagePopup();
                var result = battler.result();
                if (result.missed) {
                    SoundManager.playMiss();
                } else if (result.evaded) {
                    SoundManager.playEvasion();
                } else if (result.hpAffected) {
                    if (result.hpDamage > 0) {
                        if (battler.isActor()) {
                            SoundManager.playActorDamage();
                        } else {
                            SoundManager.playEnemyDamage();
                        }
                    } else if (result.hpDamage < 0) {
                        SoundManager.playRecovery();
                    }
                }
                this._damagePopupDelay = undefined;
            }
        }
    };

    Game_Event.prototype.pasteDamagePopupResult = function () {
        var result = this.srpgBattler().result();
        result.missed = this._damagePopupResult.missed;
        result.evaded = this._damagePopupResult.evaded;
        result.hpAffected = this._damagePopupResult.hpAffected;
        result.hpDamage = this._damagePopupResult.hpDamage;
        result.mpDamage = this._damagePopupResult.mpDamage;
        result.critical = this._damagePopupResult.critical;
        this._damagePopupResult = null;
    };

    //-----------------------------------------------------------------------------
    // Game_Interpreter
    //

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'reserveSrpg') {
            $gameMap.reserveSrpgStart();
        } else if (command === 'srpgCursorMove') {
            var a = this.convertArgs(args);
            $gamePlayer.setSrpgCameraXy(+a[0], +a[1]);
        } else if (command === 'srpgCursorMoveToEvent') {
            var a = this.convertArgs(args);
            var event = $gameMap.event(+a[0]);
            if (event) $gamePlayer.setSrpgCameraEvent(event);
        }
    };

    Game_Interpreter.prototype.convertArgs = function (args) {
        var window = $gameTemp.srpgDummyWindow();
        return args.map(window.convertEscapeCharacters, window);
    };

    Game_Interpreter.prototype.isSrpgTurnStart = function () {
        return $gameTemp.isSrpgTurnStart();
    };

    Game_Interpreter.prototype.isSrpgActorTurn = function () {
        return $gameMap.isSrpgActorTurn();
    };

    Game_Interpreter.prototype.srpgNextUnit = function () {
        var id = $gameTemp.srpgNextUnitId();
        return id > 0 ? id : 0;
    };

    Game_Interpreter.prototype.srpgLastUnit = function () {
        var id = $gameTemp.srpgNextUnitId();
        return id < 0 ? 0 - id : 0;
    };

    Game_Interpreter.prototype.srpgBattler = function (eventId) {
        if (eventId == null) eventId = Math.abs($gameTemp.srpgNextUnitId());
        var event = this.character(eventId);
        return event && event.isSrpgUnit() ? event.srpgBattler() : null;
    };

    Game_Interpreter.prototype.srpgRemoveUnit = function (eventId) {
        var event = $gameMap.event(eventId);
        if (event && event.isSrpgUnit(true)) {
            var battler = event.srpgBattler();
            battler.addState(battler.deathStateId());
            $gameTemp.setSrpgDeadUnitId(eventId);
            return true;
        }
        return false;
    };

    Game_Interpreter.prototype.srpgAddUnit = function (eventId, enemyId) {
        var event = $gameMap.event(eventId);
        if (event && !event.isSrpgUnit()) {
            if ($gameMap.srpgUnitXy(event.x, event.y)) {
                var pos = $gameMap.srpgBlankPosition(event);
                if (pos == null) return false;
                event.locate(pos.x, pos.y);
            }
            event.setupSrpgBattler(enemyId);
            $gameMap.updateSrpgEnemyLetter();
            $gameMap.updateActorUnitNums();
            $gameMap.updateEnemyUnitNums();
        }
        return true;
    };

    Game_Interpreter.prototype.srpgActorEventId = function (actorId) {
        var actor = $gameActors.actor(actorId);
        var event = actor.srpgEvent();
        if (event && event.isSrpgUnit(true) && event.srpgBattler() === actor) {
            return actor.srpgEventId();
        }
        return 0;
    };

    //-----------------------------------------------------------------------------
    // Sprite_Character
    //

    // ���Љ����γ��ڻ�
    var _Sprite_Character_initMembers = Sprite_Character.prototype.initMembers;
    Sprite_Character.prototype.initMembers = function () {
        _Sprite_Character_initMembers.call(this);
        this._damages = [];
    };

    // �ե�`�����
    var _Sprite_Character_update = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function () {
        _Sprite_Character_update.call(this);
        this.updateDamagePopup();
    };

    // ����`���ݥåץ��åפθ���
    Sprite_Character.prototype.updateDamagePopup = function () {
        if (this._character.isSrpgUnit()) {
            this.setupDamagePopup();
        }
        if (this._damages.length > 0) {
            for (var i = 0; i < this._damages.length; i++) {
                var damage = this._damages[i];
                damage.update();
                damage.x = this.x;
                damage.y = this.y;
            }
            if (!this._damages[0].isPlaying()) {
                this.parent.removeChild(this._damages[0]);
                this._damages.shift();
            }
        }
    };

    // ����`���ݥåץ��åפΥ��å�
    Sprite_Character.prototype.setupDamagePopup = function () {
        var battler = this._character.srpgBattler();
        if (battler.isDamagePopupRequested()) {
            var sprite = new Sprite_Damage();
            sprite.x = this.x;
            sprite.y = this.y;
            sprite.z = this.z + 1;
            sprite.setup(battler);
            this._damages.push(sprite);
            this.parent.addChild(sprite);
            battler.clearDamagePopup();
        }
    };

    //-----------------------------------------------------------------------------
    // Window_Selectable
    //

    Window_Selectable.prototype.activeOpen = function () {
        this.open();
        this.activate();
    };

    //-----------------------------------------------------------------------------
    // Window_Status
    //

    Window_Status.prototype.drawParameters = function (x, y) {
        var lineHeight = this.lineHeight();
        for (var i = 0; i < 6; i++) {
            var paramId = i + 2;
            var y2 = y + lineHeight * i;
            this.changeTextColor(this.systemColor());
            this.drawText(TextManager.param(paramId), 6, y2, 120);
            this.resetTextColor();
            this.drawText(this._actor.param(paramId), 126, y2, 60, 'right');
        }
        this.drawText(this._actor.srpgParam('mov'), 350, y, 60, 'right');
        this.changeTextColor(this.systemColor());
        this.drawText(moveParam, 230, y, 120);
    };

    var _Window_Status_drawExpInfo = Window_Status.prototype.drawExpInfo;
    Window_Status.prototype.drawExpInfo = function (x, y) {
        if (this._actor.isActor()) _Window_Status_drawExpInfo.call(this, x, y);
    };

    //-----------------------------------------------------------------------------
    // Window_SrpgCommand
    //

    function Window_SrpgCommand() {
        this.initialize.apply(this, arguments);
    }

    Window_SrpgCommand.prototype = Object.create(Window_Command.prototype);
    Window_SrpgCommand.prototype.constructor = Window_SrpgCommand;

    Window_SrpgCommand.prototype.initialize = function () {
        this.clearCommandList();
        var width = this.windowWidth();
        var height = this.windowHeight();
        Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
        this.openness = 0;
        this.deactivate();
    };

    Window_SrpgCommand._lastCommandSymbol = null;

    Window_SrpgCommand.prototype.lineHeight = function () {
        return srpgCommandLineHeight;
    };

    Window_SrpgCommand.initCommandPosition = function () {
        this._lastCommandSymbol = null;
    };

    Window_SrpgCommand.prototype.windowWidth = function () {
        return 240;
    };

    Window_SrpgCommand.prototype.numVisibleRows = function () {
        return this.maxItems();
    };

    Window_SrpgCommand.prototype.makeCommandList = function () {
        this.setHandler('cancel', this._handlers['cancelOrigin']);
        if (this._srpgUnit.isSrpgInputtable()) {
            var canMove = this._srpgUnit.canSrpgMove();
            var canAct = this._srpgUnit.canSrpgAct();
            if (canMove) {
                this.addCommand(moveCommand, 'move', true);
            } else {
                var enabled = this._srpgUnit.isLastPositionValid();
                this.setHandler('cancel', this._handlers['moveCancel']);
                this.addCommand(moveCancelCommand, 'moveCancel', enabled);
            }
            this.addCommand(actionCommand, 'action', canAct);
            if (itemCommand) this.addCommand(itemCommand, 'item', canAct);
            if (equipCommand) this.addCommand(equipCommand, 'equip', canAct);
            if (waitingCommand) {
                var enabled = this._srpgUnit.isLastPositionValid() || canMove || canAct;
                this.addCommand(waitingCommand, 'waiting', enabled);
                if (enabled == false) {
                    this.setHandler('cancel', this._handlers['cancelOrigin']);
                }
            }
        }
        if (statusCommand) this.addCommand(statusCommand, 'status', true);
        this.move(srpgCommandX, srpgCommandY, this.windowWidth(), this.windowHeight());
    };

    Window_SrpgCommand.prototype.makeMenuCommandList = function () {
        this.setHandler('cancel', this._handlers['cancelOrigin']);
        this.addCommand(turnEndCommand, 'turnEnd', true);
        if (unitListCommand) this.addCommand(unitListCommand, 'unitList', true);
        if (infoCommand) this.addCommand(infoCommand, 'info', true);
        if (optionsCommand) this.addCommand(optionsCommand, 'options', true);
        //    if (saveCommand) this.addCommand(saveCommand, 'save', true);
        if (loadCommand) this.addCommand(loadCommand, 'load', true);
        if (gameEndCommand) this.addCommand(gameEndCommand, 'gameEnd', true);
        this.move(srpgCommandX, srpgCommandY, this.windowWidth(), this.windowHeight());
    };

    Window_SrpgCommand.prototype.makeYesNoCommandList = function () {
        this.setHandler('cancel', this._handlers['noCommand']);
        this.addCommand(yesCommand, 'yesCommand', true);
        this.addCommand(noCommand, 'noCommand', true);
        var width = this.windowWidth();
        this.move((Graphics.boxWidth - width) / 2, 0, width, this.windowHeight());
    };

    Window_SrpgCommand.prototype.processOk = function () {
        Window_SrpgCommand._lastCommandSymbol = this.currentSymbol();
        Window_Command.prototype.processOk.call(this);
    };

    Window_SrpgCommand.prototype.selectLast = function () {
        this.selectSymbol(Window_SrpgCommand._lastCommandSymbol);
    };

    Window_SrpgCommand.prototype.setSrpgUnit = function (srpgUnit) {
        this._srpgUnit = srpgUnit;
        this.refresh();
        this.activeOpen();
    };

    Window_SrpgCommand.prototype.refreshMenu = function () {
        this.clearCommandList();
        this.makeMenuCommandList();
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
        this.activeOpen();
    };

    Window_SrpgCommand.prototype.refreshYesNo = function (y) {
        this.clearCommandList();
        this.makeYesNoCommandList();
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
        this.select(0);
        this.activeOpen();
        this.y = y;
    };

    //-----------------------------------------------------------------------------
    // Window_SrpgStatus
    //

    function Window_SrpgStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_SrpgStatus.prototype = Object.create(Window_Base.prototype);
    Window_SrpgStatus.prototype.constructor = Window_SrpgStatus;

    Window_SrpgStatus.prototype.initialize = function () {
        var width = Graphics.boxWidth;
        var height = this.fittingHeight(4);
        var y = Graphics.boxHeight - height;
        Window_Base.prototype.initialize.call(this, 0, y, width, height);
        this.setBackgroundType(srpgStatusBackground);
        this.openness = 0;
        this.createFaceSprites();
        this.createArrowSprite();
    };

    Window_SrpgStatus.prototype.createFaceSprites = function () {
        var faceWidth = Window_Base._faceWidth;
        this._userFaceSprite = new Sprite();
        this._userFaceSprite.anchor.x = 0.5;
        this._userFaceSprite.x = this.standardPadding() + faceWidth / 2;
        this._userFaceSprite.y = this.standardPadding();
        if (srpgStatusFaceMirror === 'left') {
            this._userFaceSprite.scale.x = -1.0;
        }
        this.addChildAt(this._userFaceSprite, 2);
        this._targetFaceSprite = new Sprite();
        this._targetFaceSprite.anchor.x = 0.5;
        this._targetFaceSprite.x = this.width - faceWidth / 2 - this.standardPadding();
        this._targetFaceSprite.y = this.standardPadding();
        if (srpgStatusFaceMirror === 'right') {
            this._targetFaceSprite.scale.x = -1.0;
        }
        this.addChildAt(this._targetFaceSprite, 2);
    };

    Window_SrpgStatus.prototype.createArrowSprite = function () {
        this._arrowSprite = new Sprite();
        this._arrowSprite.anchor.x = 0.5;
        this._arrowSprite.anchor.y = 0.5;
        this._arrowSprite.x = this.width / 2;
        this._arrowSprite.y = this.height / 2 + this.lineHeight() / 2;
        this._arrowSprite.bitmap = ImageManager.loadSystem(srpgStatusArrowImage);
        this.addChild(this._arrowSprite);
    };

    Window_SrpgStatus.prototype.setSrpgUnit = function (user) {
        if (user) {
            this.open();
        } else {
            this.close();
        }
        if (this._user === user && this._target == null) return;
        this._user = user;
        this._target = null;
        this.refresh();
    };

    Window_SrpgStatus.prototype.setAction = function (actionObject, target) {
        this._actionObject = actionObject;
        this._target = target;
        var userBattler = this._user.srpgBattler();
        userBattler.clearActions();
        var action = new Game_Action(userBattler);
        action.setItemObject(this._actionObject);
        userBattler.setAction(0, action);
        this.refresh();
    };

    Window_SrpgStatus.prototype.user = function () {
        return this._user;
    };

    Window_SrpgStatus.prototype.target = function () {
        return this._target;
    };

    var _Window_SrpgStatus_update = Window_SrpgStatus.prototype.update;
    Window_SrpgStatus.prototype.update = function () {
        _Window_SrpgStatus_update.call(this);
        this._userFaceSprite.opacity = this.contentsOpacity;
        this._targetFaceSprite.opacity = this.contentsOpacity;
        this.updateArrowSprite();
    };

    // ʸӡ���ץ饤�Ȥθ���
    Window_SrpgStatus.prototype.updateArrowSprite = function () {
        if (this._arrowSprite.visible) {
            var n = Graphics.frameCount % 30;
            var shiftX = Math.sin(Math.PI * 2 * n / 60) * 36 - 18;
            this._arrowSprite.x = this.width / 2 + shiftX;
        }
    };

    Window_SrpgStatus.prototype.refresh = function () {
        this.contents.clear();
        if (!this._user) return;
        var userBattler = this._user.srpgBattler();
        var lineHeight = this.lineHeight();
        var x = this.textPadding();
        var w = this.textWidth(TextManager.levelA);
        this.setFaceSprite(userBattler, this._userFaceSprite);
        this.drawActorIcons(userBattler, 0, lineHeight * 3);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.levelA, x, lineHeight, w);
        this.resetTextColor();
        this.drawText(userBattler.name(), x, 0, srpgStatusNameWidth);
        this.drawText(userBattler.level, x + w, lineHeight, 36, 'right');
        this.drawActorGauges(userBattler, Window_Base._faceWidth, lineHeight * 2);
        if (this._target) {
            this.refreshTarget();
            this.refreshAction();
            this._targetFaceSprite.visible = true;
            this._arrowSprite.visible = true;
        } else {
            this.refreshStatus(userBattler);
            this._targetFaceSprite.visible = false;
            this._arrowSprite.visible = false;
        }
    };

    Window_SrpgStatus.prototype.refreshTarget = function () {
        var targetBattler = this._target.srpgBattler();
        var lineHeight = this.lineHeight();
        var faceWidth = Window_Base._faceWidth;
        var x = this.contents.width - faceWidth;
        var w = this.textWidth(TextManager.levelA);
        this.setFaceSprite(targetBattler, this._targetFaceSprite);
        this.drawActorIcons(targetBattler, x, lineHeight * 3);
        x = this.contents.width - this.textPadding();
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.levelA, x - 36 - w, lineHeight, w);
        this.resetTextColor();
        this.drawText(targetBattler.name(), x - srpgStatusNameWidth, 0,
            srpgStatusNameWidth, 'right');
        this.drawText(targetBattler.level, x - 36, lineHeight, 36, 'right');
        x = this.contents.width - faceWidth - srpgStatusHpWidth;
        this.drawActorGauges(targetBattler, x, lineHeight * 2);
    };

    Window_SrpgStatus.prototype.refreshAction = function () {
        var targetBattler = this._target.srpgBattler();
        var action = this._user.srpgBattler().currentAction();
        var faceWidth = Window_Base._faceWidth;
        var w = this.contents.width - faceWidth * 2;
        var lineHeight = this.lineHeight();
        this.drawText(action.item().name, faceWidth, 0, w, 'center');
        var damageText = this.makeDamageText(targetBattler, action);
        this.drawText(damageText, faceWidth, lineHeight * 1, w, 'center');
    };

    // �Y����y�ƥ����Ȥ�����
    Window_SrpgStatus.prototype.makeDamageText = function (targetBattler, action) {
        if (action.isSkill() && action.item().id === checkSkillId) return '????(100%)';
        var result = '';
        var hit = action.itemHit(targetBattler);
        var eva = action.itemEva(targetBattler);
        hit = Math.floor((hit * (1 - eva)) * 100);
        if (action.checkDamageType([0])) {
            var effect = action.itemValidEffect(targetBattler);
            result = this.makeEffectText(targetBattler, effect, hit);
        } else {
            var damage = -action.makeTestDamageValue(targetBattler);
            if (action.isHpEffect()) {
                result = TextManager.hpA;
            } else if (action.isMpEffect()) {
                result = TextManager.mpA;
            }
            result += (damage >= 0 ? '+' : '') + damage + '(' + hit + '%)';
        }
        return result;
    };

    // �Y����y�ƥ����Ȥ�����
    Window_SrpgStatus.prototype.makeEffectText = function (targetBattler, effect, hit) {
        if (!effect) return '��Ч��';
        switch (effect.code) {
            case Game_Action.EFFECT_RECOVER_HP:       // HP�؏�
                var n = targetBattler.mhp * effect.value1 + effect.value2;
                return TextManager.hpA + (n >= 0 ? '+' : '') + n;
            case Game_Action.EFFECT_RECOVER_MP:       // MP�؏�
                var n = targetBattler.mmp * effect.value1 + effect.value2;
                return TextManager.mpA + (n >= 0 ? '+' : '') + n;
            case Game_Action.EFFECT_GAIN_TP:          // TP����
                return TextManager.tpA + (effect.value1 >= 0 ? '+' : '') + effect.value1;
            case Game_Action.EFFECT_ADD_STATE:        // ���Ʃ`�ȸ���
                var stateId = effect.dataId;
                return $dataStates[stateId].name + '����' + '(' + hit + '%)';
            case Game_Action.EFFECT_REMOVE_STATE:     // ���Ʃ`�Ƚ��
                var stateId = effect.dataId;
                return $dataStates[stateId].name + '���' + '(' + hit + '%)';
            case Game_Action.EFFECT_ADD_BUFF:         // ����
                var buffId = effect.dataId;
                return TextManager.param(buffId) + '����' + effect.value1 + '�غ�' + '(' + hit + '%)';
            case Game_Action.EFFECT_ADD_DEBUFF:       // ����
                var buffId = effect.dataId;
                return TextManager.param(buffId) + '����' + effect.value1 + '�غ�' + '(' + hit + '%)';
            case Game_Action.EFFECT_REMOVE_BUFF:      // �������
                var buffId = effect.dataId;
                return TextManager.param(buffId) + '�������' + '(' + hit + '%)';
            case Game_Action.EFFECT_REMOVE_DEBUFF:    // ������
                var buffId = effect.dataId;
                return TextManager.param(buffId) + '������' + '(' + hit + '%)';
            case Game_Action.EFFECT_LEARN_SKILL:      // ����������
                var skill = $dataSkills[effect.dataId];
                return skill.name + 'ϰ��';
            default:
                return '��Ч��';
        }
    };

    Window_SrpgStatus.prototype.refreshStatus = function (userBattler) {
        var lineHeight = this.lineHeight();
        for (var i = 0; i < 6; i++) {
            var paramId = i + 2;
            var x = i % 2 * 224 + 360;
            var y = lineHeight * Math.floor(i / 2);
            this.changeTextColor(this.systemColor());
            this.drawText(TextManager.param(paramId), x, y, 120);
            this.resetTextColor();
            this.drawText(userBattler.param(paramId), x + 120, y, 60, 'right');
        }
        this.drawText(userBattler.srpgParam('mov'), 480, lineHeight * 3, 60, 'right');
        this.changeTextColor(this.systemColor());
        this.drawText(moveParam, 360, lineHeight * 3, 120);
    };

    Window_SrpgStatus.prototype.setFaceSprite = function (battler, sprite) {
        var faceName = battler.faceName();
        var faceIndex = battler.faceIndex();
        var faceWidth = Window_Base._faceWidth;
        var faceHeight = Window_Base._faceHeight;
        sprite.bitmap = ImageManager.loadFace(faceName);
        sprite.setFrame(faceIndex % 4 * faceWidth, Math.floor(faceIndex / 4) * faceHeight,
            faceWidth, faceHeight);
    };

    Window_SrpgStatus.prototype.drawActorGauges = function (actor, x, y) {
        this.drawActorHp(actor, x, y, srpgStatusHpWidth);
        y += this.lineHeight();
        if ($dataSystem.optDisplayTp) {
            var w = srpgStatusHpWidth / 2 - 4;
            this.drawActorMp(actor, x, y, w);
            this.drawActorTp(actor, x + w + 8, y, w);
        } else {
            this.drawActorMp(actor, x, y, srpgStatusHpWidth);
        }
    };

    //-----------------------------------------------------------------------------
    // Window_SrpgSkillList
    //

    function Window_SrpgSkillList() {
        this.initialize.apply(this, arguments);
    }

    Window_SrpgSkillList.prototype = Object.create(Window_Selectable.prototype);
    Window_SrpgSkillList.prototype.constructor = Window_SrpgSkillList;

    Window_SrpgSkillList.prototype.initialize = function (x, y, width, height) {
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this.openness = 0;
        this._data = [];
    };

    Window_SrpgSkillList.prototype.setActor = function (actor, category) {
        this._actor = actor;
        this._category = category || 'skill';
        this.refresh();
        this.resetScroll();
    };

    Window_SrpgSkillList.prototype.maxItems = function () {
        return this._data ? this._data.length : 1;
    };

    Window_SrpgSkillList.prototype.item = function () {
        return this._data && this.index() >= 0 ? this._data[this.index()] : null;
    };

    Window_SrpgSkillList.prototype.isCurrentItemEnabled = function () {
        return this.isEnabled(this._data[this.index()]);
    };

    Window_SrpgSkillList.prototype.includes = function (item) {
        return item;
    };

    Window_SrpgSkillList.prototype.isEnabled = function (item) {
        return this._actor && this._actor.canUse(item);
    };

    Window_SrpgSkillList.prototype.makeItemList = function () {
        if (this._actor) {
            if (this._category === 'skill') {
                this._data = this._actor.skills().filter(function (item) {
                    return this.includes(item);
                }, this);
                this._data.unshift($dataSkills[this._actor.attackSkillId()]);
                if (checkSkillId) this._data.push($dataSkills[checkSkillId]);
                this._data.push($dataSkills[this._actor.guardSkillId()]);
            } else {
                this._data = $gameParty.items().filter(function (item) {
                    return this._actor.canUse(item);
                }, this);
            }
        } else {
            this._data = [];
        }
    };

    Window_SrpgSkillList.prototype.selectLast = function () {
        var index = this._category === 'skill' ?
            this._data.indexOf(this._actor.lastBattleSkill()) :
            this._data.indexOf($gameParty.lastItem());
        this.select(index >= 0 ? index : 0);
    };

    Window_SrpgSkillList.prototype.drawItem = function (index) {
        var skill = this._data[index];
        if (skill) {
            var rect = this.itemRect(index);
            rect.width -= this.textPadding();
            if (this._category === 'skill') {
                var costWidth = this.costWidth();
                this.changePaintOpacity(this.isEnabled(skill));
                this.drawSkillCost(skill, rect.x, rect.y, rect.width);
            } else {
                var costWidth = this.numberWidth();
                this.changePaintOpacity(1);
                this.drawItemNumber(skill, rect.x, rect.y, rect.width);
            }
            this.drawItemName(skill, rect.x, rect.y, rect.width - costWidth);
            this.changePaintOpacity(1);
        }
    };

    Window_SrpgSkillList.prototype.costWidth = function () {
        return this.textWidth('000');
    };

    Window_SrpgSkillList.prototype.numberWidth = function () {
        return this.textWidth('000');
    };

    Window_SrpgSkillList.prototype.drawSkillCost = function (skill, x, y, width) {
        if (this._actor.skillTpCost(skill) > 0) {
            this.changeTextColor(this.tpCostColor());
            this.drawText(this._actor.skillTpCost(skill), x, y, width, 'right');
        } else if (this._actor.skillMpCost(skill) > 0) {
            this.changeTextColor(this.mpCostColor());
            this.drawText(this._actor.skillMpCost(skill), x, y, width, 'right');
        } else if (this._actor.skillHpCost(skill) > 0) {
            this.changeTextColor(this.textColor(17));
            this.drawText(this._actor.skillHpCost(skill), x, y, width, 'right');
        }
    };

    Window_SrpgSkillList.prototype.drawItemNumber = function (item, x, y, width) {
        this.drawText(':', x, y, width - this.textWidth('00'), 'right');
        this.drawText($gameParty.numItems(item), x, y, width, 'right');
    };

    Window_SrpgSkillList.prototype.updateHelp = function () {
        this.setHelpWindowItem(this.item());
    };

    Window_SrpgSkillList.prototype.refresh = function () {
        this.makeItemList();
        this.createContents();
        this.drawAllItems();
    };

    //-----------------------------------------------------------------------------
    // Window_SrpgUnitList
    //

    function Window_SrpgUnitList() {
        this.initialize.apply(this, arguments);
    }

    Window_SrpgUnitList.prototype = Object.create(Window_Selectable.prototype);
    Window_SrpgUnitList.prototype.constructor = Window_SrpgUnitList;

    Window_SrpgUnitList.prototype.initialize = function (x, y) {
        Window_Selectable.prototype.initialize.call(this, x, y, srpgUnitListWidth,
            this.fittingHeight(srpgUnitListRows));
        this.openness = 0;
        this._data = [];
    };

    Window_SrpgUnitList.prototype.lineHeight = function () {
        return srpgCommandLineHeight;
    };

    Window_SrpgUnitList.prototype.setStatusWindow = function (statusWindow) {
        this._statusWindow = statusWindow;
    };

    Window_SrpgUnitList.prototype.maxItems = function () {
        return this._data ? this._data.length : 1;
    };

    Window_SrpgUnitList.prototype.item = function () {
        var index = this.index();
        return this._data && index >= 0 ? this._data[index] : null;
    };

    Window_SrpgUnitList.prototype.makeItemList = function () {
        this._data = $gameMap.srpgActorUnits(true).concat($gameMap.srpgEnemyUnits(true));
    };

    Window_SrpgUnitList.prototype.selectLast = function () {
        var lastUnitId = $gameTemp.srpgLastUnitId();
        for (var i = 0; i < this._data.length; i++) {
            if (this._data[i].eventId() === lastUnitId) {
                this.select(i);
                return;
            }
        }
        this.select(0);
    };

    Window_SrpgUnitList.prototype.onTouch = function (triggered) {
        var lastIndex = this.index();
        Window_Selectable.prototype.onTouch.call(this, triggered);
        if (this.index() !== lastIndex) this.changeUnit();
    };

    Window_SrpgUnitList.prototype.changeUnit = function () {
        var unit = this.item();
        if (unit) {
            $gameTemp.setSrpgLastUnitId(unit.eventId());
            $gamePlayer.setSrpgCameraEvent(unit);   // ������Ƅ�
            $gameMap.showMovableArea(unit);         // �Ƅӿ��ܹ�����ʾ����
            this._statusWindow.setSrpgUnit(unit);
        } else {
            $gameMap.hideSrpgArea();                // �����ʾ���L��
            this._statusWindow.close();
        }
    };

    Window_SrpgUnitList.prototype.drawItem = function (index) {
        var item = this._data[index];
        if (!item) return;
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.drawText(item.srpgBattler().name(), rect.x, rect.y, rect.width);
    };

    Window_SrpgUnitList.prototype.refresh = function () {
        this.makeItemList();
        this.createContents();
        this.drawAllItems();
    };

    //-----------------------------------------------------------------------------
    // Window_SrpgInfo
    //

    function Window_SrpgInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_SrpgInfo.prototype = Object.create(Window_Selectable.prototype);
    Window_SrpgInfo.prototype.constructor = Window_SrpgInfo;

    Window_SrpgInfo.prototype.initialize = function () {
        var ww = srpgInfoSize[0];
        var wh = srpgInfoSize[1];
        var wx = (Graphics.width - ww) / 2;
        var wy = (Graphics.height - wh) / 2;
        Window_Selectable.prototype.initialize.call(this, wx, wy, ww, wh);
        this.refresh();
        this.activate();
    };

    Window_SrpgInfo.prototype.refresh = function () {
        this.contents.clear();
        var re = /<srpgInfo>([\s\S]+)<\/srpgInfo>/g;
        var match = re.exec($dataMap.note);
        if (match) this.drawTextEx(match[1], this.textPadding(), 0);
    };

    //-----------------------------------------------------------------------------
    // Scene_MenuBase
    //

    var _Scene_MenuBase_updateActor = Scene_MenuBase.prototype.updateActor;
    Scene_MenuBase.prototype.updateActor = function () {
        if ($gameMap.isSrpg() && $gameTemp.isSrpgCommandReserved()) {
            var event = $gameTemp.reserveSrpgCommandEvent();
            this._actor = event ? event.srpgBattler() : null;
        } else {
            _Scene_MenuBase_updateActor.call(this);
        }
    };

    //-----------------------------------------------------------------------------
    // Scene_Map
    //

    var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function () {
        _Scene_Map_createAllWindows.call(this);
        this.createHelpWindow();
        this.createSrpgStatusWindow();
        this.createSrpgCommandWindow();
        this.createSrpgSkillWindow();
        this.createSrpgUnitWindow();
    };

    Scene_Map.prototype.createHelpWindow = function () {
        this._helpWindow = new Window_Help();
        this._helpWindow.openness = 0;
        this.addWindow(this._helpWindow);
    };

    Scene_Map.prototype.createSrpgCommandWindow = function () {
        this._srpgCommandWindow = new Window_SrpgCommand();
        this._srpgCommandWindow.setHandler('move', this.srpgCommandMove.bind(this));
        this._srpgCommandWindow.setHandler('moveCancel', this.srpgCommandMoveCancel.bind(this));
        this._srpgCommandWindow.setHandler('action', this.srpgCommandAction.bind(this));
        this._srpgCommandWindow.setHandler('item', this.srpgCommandItem.bind(this));
        this._srpgCommandWindow.setHandler('equip', this.srpgCommandEquip.bind(this));
        this._srpgCommandWindow.setHandler('waiting', this.srpgCommandWaiting.bind(this));
        this._srpgCommandWindow.setHandler('status', this.srpgCommandStatus.bind(this));
        this._srpgCommandWindow.setHandler('turnEnd', this.srpgCommandTurnEnd.bind(this));
        this._srpgCommandWindow.setHandler('unitList', this.srpgCommandUnitList.bind(this));
        this._srpgCommandWindow.setHandler('info', this.srpgCommandInfo.bind(this));
        this._srpgCommandWindow.setHandler('options', this.srpgCommandOptions.bind(this));
        this._srpgCommandWindow.setHandler('save', this.srpgCommandSave.bind(this));
        this._srpgCommandWindow.setHandler('load', this.srpgCommandLoad.bind(this));
        this._srpgCommandWindow.setHandler('gameEnd', this.srpgCommandGameEnd.bind(this));
        this._srpgCommandWindow.setHandler('cancelOrigin', this.cancelSrpgCommand.bind(this));
        this.addWindow(this._srpgCommandWindow);
        this.autoOpen();
    };

    // SRPG���ޥ�ɥ�����ɥ��Ώ�Ԫ
    Scene_Map.prototype.autoOpen = function () {
        if ($gameTemp.isSrpgCommandReserved()) {
            var index = $gameTemp.reserveSrpgCommandIndex();
            var event = $gameTemp.reserveSrpgCommandEvent();
            this.openSrpgCommand(event, true);
            this._srpgCommandWindow.select(index);
            $gameTemp.clearSrpgCommand();
        }
    };

    Scene_Map.prototype.createSrpgStatusWindow = function () {
        this._srpgStatusWindow = new Window_SrpgStatus();
        this.addWindow(this._srpgStatusWindow);
    };

    Scene_Map.prototype.createSrpgSkillWindow = function () {
        var wy = this._helpWindow.height;
        var ww = Graphics.boxWidth / 2;
        var wh = Graphics.boxHeight - wy - this._srpgStatusWindow.height;
        this._srpgSkillWindow = new Window_SrpgSkillList(0, wy, ww, wh);
        this._srpgSkillWindow.setHandler('ok', this.okSrpgSkill.bind(this));
        this._srpgSkillWindow.setHandler('cancel', this.cancelSrpgSkill.bind(this));
        this._srpgSkillWindow.setHelpWindow(this._helpWindow);
        this.addWindow(this._srpgSkillWindow);
    };

    Scene_Map.prototype.createSrpgUnitWindow = function () {
        var wx = srpgCommandX;
        var wy = srpgCommandY;
        this._srpgUnitWindow = new Window_SrpgUnitList(wx, wy);
        this._srpgUnitWindow.setHandler('ok', this.okSrpgUnit.bind(this));
        this._srpgUnitWindow.setHandler('cancel', this.cancelSrpgUnit.bind(this));
        this._srpgUnitWindow.setStatusWindow(this._srpgStatusWindow);
        this.addWindow(this._srpgUnitWindow);
    };

    Scene_Map.prototype.setSrpgWait = function (waitType, waitCount) {
        this._srpgWaitType = waitType;
        this._srpgWaitCount = waitCount;
    };

    Scene_Map.prototype.clearSrpgWait = function () {
        this._srpgWaitType = null;
        this._srpgWaitCount = 0;
    };

    Scene_Map.prototype.isSrpgWait = function () {
        return this._srpgWaitType != null;
    };

    var _Scene_Map_updateMain = Scene_Map.prototype.updateMain;
    Scene_Map.prototype.updateMain = function () {
        _Scene_Map_updateMain.call(this);
        if (!$gameMap.isSrpg() || $gameMap.isEventRunning()) return;
        if (this.isSrpgWait()) {
            this.updateSrpgWait();
        } else {
            var deadUnitId = $gameTemp.srpgDeadUnitId();
            if (deadUnitId > 0) {
                this.updateSrpgDeadUnit(deadUnitId);
            } else if (!this.checkSrpgGameOver()) {
                if ($gameMap.isSrpgActorTurn()) {
                    if (this._areaSelecterActive) {
                        this.updateAreaSelecter();      // �����x�k�θ���
                    } else if (this._srpgTurnState) {
                        this.updateSrpgActorTurn();     // ζ�����`��θ���
                    } else if (!this._srpgCommandWindow.active && !this._srpgSkillWindow.active &&
                        !this._srpgUnitWindow.active) {
                        this.updateSrpgInput();         // SRPG�����θ���
                    }
                } else {
                    this.updateSrpgEnemyTurn();       // �����`��θ���
                }
            }
        }
    };

    // SRPG�������Ȥθ���
    Scene_Map.prototype.updateSrpgWait = function () {
        if (this._srpgWaitType === 'normal') {
            this._srpgWaitCount--;
            if (this._srpgWaitCount <= 0) this.clearSrpgWait();
        } else if (this._srpgWaitType === 'route') {
            if (!$gameMap.isSrpgUnitMoving()) this.clearSrpgWait();
        } else if (this._srpgWaitType === 'animation') {
            if (!$gameMap.isSrpgUnitAnimationPlaying()) this.clearSrpgWait();
        }
    };

    // ���L���ܥ�˥åȤ΄I��
    Scene_Map.prototype.updateSrpgDeadUnit = function (id) {
        var event = $gameMap.event(id);
        event.srpgAutoStart('A');
        if (event.isSrpgActorUnit()) {
            var battler = event.srpgBattler();
            event.setImage(battler.characterName(), battler.characterIndex());
        }
    };

    // ���`�४�`�Щ`�ж�
    Scene_Map.prototype.checkSrpgGameOver = function () {
        if ($gameVariables.value(vnEnemyUnitNums) === 0) {
            $gameMap.srpgManagerEvent().srpgAutoStart('A');
            return true;
        } else if ($gameVariables.value(vnActorUnitNums) === 0) {
            $gameMap.srpgManagerEvent().srpgAutoStart('B');
            return true;
        }
        return false;
    };

    // �����x�k�θ���
    Scene_Map.prototype.updateAreaSelecter = function () {
        if (TouchInput.isTriggered()) {
            var x = $gameMap.canvasToMapX(TouchInput.x);
            var y = $gameMap.canvasToMapY(TouchInput.y);
            if ($gameMap.isInsideArea(x, y)) this.callAreaOkHandler(x, y);
        } else if (TouchInput.isCancelled()) {
            this.callAreaCancelHandler();
        }
    };

    // ζ�����`��θ���
    Scene_Map.prototype.updateSrpgActorTurn = function () {
        var event = this._srpgStatusWindow.user();
        switch (this._srpgTurnState) {
            case 3:   // �ЄӽY���η�ӳ
                $gameTemp.setSrpgTurnStart(false);
                event.executeSrpgAction();
                this._srpgTurnState = 4;
                break;
            case 4:   // �Є��ᥤ�٥�Ȥ΄I��
                $gameMap.startSrpgManagerEvent();
                this._srpgTurnState = !event.canSrpgMove() ? 5 : 0;
                break;
            case 5:   // �Є���δ��C�x�k
                this.srpgAutoWaiting(true);
                break;
            case 12:  // �ƄӽY���η�ӳ
                this.srpgAutoWaiting(!event.canSrpgAct());
                break;
            case 32:  // ���`���_ʼ����
                $gameMap.onSrpgTurnStart();
                var events = $gameMap.srpgUnits(true).filter(function (event) {
                    return event.isSrpgAutoBattle();
                });
                this._actionEnemyUnits = $gameMap.sortEventsAgi(events);
                this._srpgTurnState = 31;
                break;
        }
    };

    Scene_Map.prototype.srpgAutoWaiting = function (flag) {
        this.openSrpgCommand(this._srpgStatusWindow.user(), !flag);
        if (flag) {
            this._srpgCommandWindow.deactivate();
            this.srpgCommandWaiting();
        }
        this._srpgTurnState = 0;
    };

    // SRPG�����θ���
    Scene_Map.prototype.updateSrpgInput = function () {
        if (TouchInput.isRepeated()) {
            var x = $gameMap.canvasToMapX(TouchInput.x);
            var y = $gameMap.canvasToMapY(TouchInput.y);
            var event = $gameMap.srpgUnitXy(x, y, true);
            if (event && TouchInput.isTriggered()) {
                this._srpgTurnState = 0;
                this.openSrpgCommand(event, true);  // ��˥åȥ��ޥ�ɤ��_��
                SoundManager.playOk();              // �Q�����������Q�餹
            }
            $gamePlayer.setSrpgCameraXy(x, y);    // ������Ƅ�
        } else if (TouchInput.isCancelled()) {
            this.openSrpgCommand(null);
            SoundManager.playOk();                // �Q�����������Q�餹
        }
    };

    var _Scene_Map_isMenuEnabled = Scene_Map.prototype.isMenuEnabled;
    Scene_Map.prototype.isMenuEnabled = function () {
        // SRPG�C�ܤ��Є��ˤʤäƤ����g��ͨ���Υ�˥�`���ֹ����
        return _Scene_Map_isMenuEnabled.call(this) && !$gameMap.isSrpg();
    };

    // SRPG���ޥ�ɥ�����ɥ����_��
    Scene_Map.prototype.openSrpgCommand = function (event, showArea) {
        this._srpgStatusWindow.setSrpgUnit(event);
        if (event) {
            this._srpgCommandWindow.setSrpgUnit(event);
            if (showArea) {
                $gameMap.showMovableArea(event);
                this.setSimpleMoveInput(event);
            }
        } else {
            this._srpgCommandWindow.refreshMenu();
        }
        this._srpgCommandWindow.select(0);
    };

    // ����ץ��Ƅ������Μʂ�
    Scene_Map.prototype.setSimpleMoveInput = function (event) {
        if (simpleMoveInput && event.isSrpgInputtable() && event.canSrpgMove()) {
            this.setAreaHandler(this.okAreaMove, this.cancelAreaMove);
        }
    };

    // SRPG�إ�ץ�����ɥ����_��
    Scene_Map.prototype.openSrpgHelp = function (text, lines) {
        this._helpWindow.setText(text);
        this._helpWindow.move(0, 0, Graphics.boxWidth, this._helpWindow.fittingHeight(lines));
        this._helpWindow.open();
    };

    // SRPG�����륦����ɥ����_��
    Scene_Map.prototype.openSrpgSkill = function (category) {
        this.areaSelecterDeactivate(true);
        var event = this._srpgStatusWindow.user();
        this.openSrpgHelp('', 2);
        this._srpgCommandWindow.close();
        this._srpgSkillWindow.setActor(event.srpgBattler(), category);
        this._srpgSkillWindow.selectLast();
        this._srpgSkillWindow.activeOpen();
    };

    // SRPG���ޥ�ɡ��Ƅӡ�
    Scene_Map.prototype.srpgCommandMove = function () {
        this.openSrpgHelp(moveHelp, 1);
        this._srpgCommandWindow.close();
        this.setAreaHandler(this.okAreaMove, this.cancelAreaMove);
    };

    // SRPG���ޥ�ɡ��Ƅӥ���󥻥롿
    Scene_Map.prototype.srpgCommandMoveCancel = function () {
        var event = this._srpgStatusWindow.user();
        event.backToLastPosition();               // �Ƅӥ���󥻥�g��
        $gamePlayer.setSrpgCameraEvent(event);    // ������Ƅ�
        SoundManager.playCancel();                // ����󥻥넿�������Q�餹
        this.cancelSrpgCommand();
    };

    // SRPG���ޥ�ɡ��Єӡ�
    Scene_Map.prototype.srpgCommandAction = function () {
        this.openSrpgSkill('skill');
    };

    // SRPG���ޥ�ɡ������ƥࡿ
    Scene_Map.prototype.srpgCommandItem = function () {
        this.openSrpgSkill('item');
    };

    // SRPG���ޥ�ɡ�װ������
    Scene_Map.prototype.srpgCommandEquip = function () {
        this.changeSceneCommand(Scene_Equip);
    };

    // SRPG���ޥ�ɡ����C��
    Scene_Map.prototype.srpgCommandWaiting = function () {
        var event = this._srpgStatusWindow.user();
        $gameMap.showWaitingArea(event);
        this.openSrpgHelp(waitingHelp, 1);
        this._srpgCommandWindow.close();
        this.setAreaHandler(this.okAreaWaiting, this.cancelAreaWaiting);
    };

    // SRPG���ޥ�ɡ����Ʃ`������
    Scene_Map.prototype.srpgCommandStatus = function () {
        this.changeSceneCommand(Scene_Status);
    };

    // SRPG���ޥ�ɡ����`��K�ˡ�
    Scene_Map.prototype.srpgCommandTurnEnd = function () {
        this.openSrpgHelp(turnEndHelp, 1);
        this._srpgCommandWindow.setHandler('yesCommand', this.srpgCommandTurnEndYes.bind(this));
        this._srpgCommandWindow.setHandler('noCommand', this.srpgCommandTurnEndNo.bind(this));
        this._srpgCommandWindow.refreshYesNo(this._helpWindow.height);
    };

    // SRPG���ޥ�ɡ���˥åȥꥹ�ȡ�
    Scene_Map.prototype.srpgCommandUnitList = function () {
        this._srpgCommandWindow.close();
        this._srpgUnitWindow.refresh();
        this._srpgUnitWindow.selectLast();
        this._srpgUnitWindow.changeUnit();
        this._srpgUnitWindow.activeOpen();
    };

    // SRPG���ޥ�ɡ��ޥå����
    Scene_Map.prototype.srpgCommandInfo = function () {
        this.changeSceneCommand(Scene_SrpgInfo);
    };

    // SRPG���ޥ�ɡ����ץ����
    Scene_Map.prototype.srpgCommandOptions = function () {
        this.changeSceneCommand(Scene_Options);
    };

    // SRPG���ޥ�ɡ����`�֡�
    Scene_Map.prototype.srpgCommandSave = function () {
        this.changeSceneCommand(Scene_Save);
    };

    // SRPG���ޥ�ɡ���`�ɡ�
    Scene_Map.prototype.srpgCommandLoad = function () {
        this.changeSceneCommand(Scene_Load);
    };

    // SRPG���ޥ�ɡ����`��K�ˡ�
    Scene_Map.prototype.srpgCommandGameEnd = function () {
        this.changeSceneCommand(Scene_GameEnd);
    };

    // SRPG���ޥ�ɡ��Єӣ��Ϥ���
    Scene_Map.prototype.srpgCommandActionYes = function () {
        var event = this._srpgStatusWindow.user();
        this.showSrpgActionAnimation(event);    // �Єӥ��˥�`�����α�ʾ
        this._helpWindow.close();
        this._srpgCommandWindow.close();
        this._srpgTurnState = 3;
    };

    // SRPG���ޥ�ɡ��Єӣ���������
    Scene_Map.prototype.srpgCommandActionNo = function () {
        var event = this._srpgStatusWindow.user();
        var skill = this._srpgSkillWindow.item();
        this.openSrpgHelp(actionRangeHelp, 1);
        this.setAreaHandler(this.okAreaAction, this.cancelAreaAction);
        $gameMap.showRangeArea(event.x, event.y, skill);
        event.setDirection(this._lastUnitDirection);    // �򤭤�Ԫ�ˑ���
        $gamePlayer.setSrpgCameraEvent(event);          // ������Ƅ�
        this._srpgCommandWindow.close();
        this._srpgStatusWindow.setSrpgUnit(event);
    };

    // SRPG���ޥ�ɡ����`��K�ˣ��Ϥ���
    Scene_Map.prototype.srpgCommandTurnEndYes = function () {
        this._helpWindow.close();
        this._srpgCommandWindow.close();
        $gameTemp.setSrpgNextUnitId(0);
        this._srpgTurnState = 32;
    };

    // SRPG���ޥ�ɡ����`��K�ˣ���������
    Scene_Map.prototype.srpgCommandTurnEndNo = function () {
        this._helpWindow.close();
        this._srpgCommandWindow.refreshMenu();
        this._srpgCommandWindow.selectSymbol('turnEnd');
    };

    // SRPG���ޥ�ɡ�����󥻥롿
    Scene_Map.prototype.cancelSrpgCommand = function () {
        this._srpgCommandWindow.close();
        this._srpgStatusWindow.close();
        this.areaSelecterDeactivate(true);
    };

    // ���ޥ�ɤˤ�륷�`���w��
    Scene_Map.prototype.changeSceneCommand = function (nextScene) {
        var index = this._srpgCommandWindow.index();
        var event = this._srpgStatusWindow.user();
        $gameTemp.reserveSrpgCommand(index, event);
        this._srpgCommandWindow.hide();
        this._srpgStatusWindow.hide();
        SceneManager.push(nextScene);
    };

    // SRPG�����륦����ɥ����Q����
    Scene_Map.prototype.okSrpgSkill = function () {
        var event = this._srpgStatusWindow.user();
        var skill = this._srpgSkillWindow.item();
        this.openSrpgHelp(actionRangeHelp, 1);
        this._srpgSkillWindow.close();
        this.setAreaHandler(this.okAreaAction, this.cancelAreaAction);
        $gameMap.showRangeArea(event.x, event.y, skill);
    };

    // SRPG�����륦����ɥ�������󥻥롿
    Scene_Map.prototype.cancelSrpgSkill = function () {
        var event = this._srpgStatusWindow.user();
        this._helpWindow.close();
        this._srpgSkillWindow.close();
        this._srpgCommandWindow.setSrpgUnit(event);
        $gameMap.showMovableArea(event);
        this.setSimpleMoveInput(event);
    };

    // SRPG��˥åȥ�����ɥ����Q����
    Scene_Map.prototype.okSrpgUnit = function () {
        var event = this._srpgUnitWindow.item();
        this.openSrpgCommand(event, false);    // ��˥åȥ��ޥ�ɤ��_��
        this.setSimpleMoveInput(event);
        this._srpgUnitWindow.close();
    };

    // SRPG��˥åȥ�����ɥ�������󥻥롿
    Scene_Map.prototype.cancelSrpgUnit = function () {
        $gameMap.hideSrpgArea();          // �����ʾ���L��
        this._srpgUnitWindow.close();
        this._srpgStatusWindow.setSrpgUnit(null);
        this._srpgCommandWindow.activeOpen();
    };

    // �����x�k���Є���
    Scene_Map.prototype.areaSelecterActivate = function () {
        this._areaSelecterActive = true;
    };

    // �����x�k�Οo����
    Scene_Map.prototype.areaSelecterDeactivate = function (hide) {
        this._areaSelecterActive = false;
        this._areaOkHandler = null;
        this._areaCancelHandler = null;
        if (hide) $gameMap.hideSrpgArea();
    };

    Scene_Map.prototype.setAreaHandler = function (okMethod, cancelMethod) {
        this._areaOkHandler = okMethod;
        this._areaCancelHandler = cancelMethod;
        this.areaSelecterActivate();
    };

    Scene_Map.prototype.callAreaOkHandler = function (x, y) {
        if (this._areaOkHandler) {
            this._areaOkHandler(x, y);
            SoundManager.playOk();        // �Q�����������Q�餹
        }
    };

    Scene_Map.prototype.callAreaCancelHandler = function () {
        if (this._areaCancelHandler) {
            this._areaCancelHandler();
            SoundManager.playCancel();    // ����󥻥넿�������Q�餹
        }
    };

    // �����x�k�ΛQ�����Ƅӡ�
    Scene_Map.prototype.okAreaMove = function (x, y) {
        var event = this._srpgStatusWindow.user();
        this.setSrpgMove(event, x, y);
        this._srpgCommandWindow.close();
        this._helpWindow.close();
        this.areaSelecterDeactivate(true);
        this._srpgTurnState = 12;
    };

    Scene_Map.prototype.setSrpgMove = function (event, x, y) {
        var routeText = $gameMap.srpgAreaXy(x, y);
        event.moveRouteText(routeText);         // �ƄӤ�g��
        $gamePlayer.setSrpgCameraXy(x, y);      // ������Ƅ�
        this.setSrpgWait('route');              // �Ƅ����ˤޤǥ�������
    };

    // �����x�k�Υ���󥻥롾�Ƅӡ�
    Scene_Map.prototype.cancelAreaMove = function () {
        this._srpgCommandWindow.activeOpen();
        this._helpWindow.close();
        if (!simpleMoveInput) this.areaSelecterDeactivate(false);
    };

    // �����x�k�ΛQ�������C��
    Scene_Map.prototype.okAreaWaiting = function (x, y) {
        this._srpgStatusWindow.user().executeSrpgWaiting(x, y);
        $gamePlayer.setSrpgCameraXy(x, y);      // ������Ƅ�
        this._helpWindow.close();
        this._srpgStatusWindow.close();
        this.areaSelecterDeactivate(true);
        if (this.isAllActorSrpgWaiting()) {
            this.srpgCommandTurnEnd();    // ���`��K�ˤ�����
        }
    };

    // �������`ȫ�T���ƄӤ��ЄӤ�K���Ƥ��뤫�򷵤�
    Scene_Map.prototype.isAllActorSrpgWaiting = function () {
        return !$gameMap.srpgActorUnits(true).some(function (event) {
            return !event.isSrpgAutoBattle() &&
                (event.canSrpgMove() || event.canSrpgAct());
        });
    };

    // �����x�k�Υ���󥻥롾���C��
    Scene_Map.prototype.cancelAreaWaiting = function () {
        var event = this._srpgStatusWindow.user();
        this._srpgCommandWindow.activeOpen();
        this._helpWindow.close();
        this.areaSelecterDeactivate(false);
        $gameMap.showMovableArea(event);
        this.setSimpleMoveInput(event);
    };

    // �����x�k�ΛQ�����Єӡ�
    Scene_Map.prototype.okAreaAction = function (x, y) {
        var event = this._srpgStatusWindow.user();
        var skill = this._srpgSkillWindow.item();
        $gameTemp.reserveSrpgCommand(this._srpgCommandWindow.index(), event);
        this.openSrpgHelp(actionEffectHelp, 1);
        this._srpgCommandWindow.setHandler('yesCommand', this.srpgCommandActionYes.bind(this));
        this._srpgCommandWindow.setHandler('noCommand', this.srpgCommandActionNo.bind(this));
        this._srpgCommandWindow.refreshYesNo(this._helpWindow.height);
        this.areaSelecterDeactivate(false);
        this._lastUnitDirection = event.direction();// �F�ڤ��򤭤�ӛ��
        this.setSrpgAction(event, skill, x, y);
    };

    Scene_Map.prototype.setSrpgAction = function (event, skill, x, y) {
        $gameMap.showEffectArea(x, y, skill);
        event.turnTowardXy(x, y);                   // �g���Ȥ����ˤ���
        $gamePlayer.setDirection(event.direction());
        this.setSrpgActionTwo(event, skill, x, y);
    };

    Scene_Map.prototype.setSrpgActionTwo = function (event, skill, x, y) {
        $gameMap.showEffectArea(x, y, skill);
        event.turnTowardXy(x, y);                   // �g���Ȥ����ˤ���
        $gamePlayer.setSrpgCameraXy(x, y);          // ������Ƅ�
        var events = $gameMap.sortEventsDistance($gameMap.srpgUnitsArea(null, true), x, y);
        this._srpgStatusWindow.setAction(skill, events[0]);
    };


    // �����x�k�Υ���󥻥롾�Єӡ�
    Scene_Map.prototype.cancelAreaAction = function () {
        this.openSrpgHelp('', 2);
        this._srpgSkillWindow.activeOpen();
        this.areaSelecterDeactivate(true);
    };

    // �Єӥ��˥�`�����α�ʾ
    Scene_Map.prototype.showSrpgActionAnimation = function (event) {
        $gameMap.hideSrpgArea();          // �����ʾ���L��
        this._srpgStatusWindow.close();
        event.showSrpgActionAnimation();  // �Єӥ��˥�`�����α�ʾ
        this.setSrpgWait('animation');    // ���˥�`��������ˤޤǥ�������
    };

    // �Τ��ЄӤ���SRPG���ͥߩ`��˥åȤ򥻥å�
    Scene_Map.prototype.setSrpgNextEnemyUnit = function () {
        if (this._actionEnemyUnits.length > 0) {
            var event = this._actionEnemyUnits.shift();
            var battler = event.srpgBattler();
            this._srpgTurnState = 31;
            if (event.isSrpgAutoBattle() && !battler.isDead()) {
                $gameTemp.setSrpgNextUnitId(event.eventId());
                $gamePlayer.setSrpgCameraEvent(event);      // ������Ƅ�
                this._srpgStatusWindow.setSrpgUnit(event);
                if (event.checkSearch()) {
                    battler.srpgMakeActions();                // �ЄӤ�����
                    if (battler.numActions() > 0) this._srpgTurnState = 1;
                }
            }
        } else {
            $gameTemp.setSrpgNextUnitId(0);
            this._srpgStatusWindow.setSrpgUnit(null);
            this._srpgTurnState = 32;                     // �����`��״�B�w��
        }
    };

    // �����`��θ���
    Scene_Map.prototype.updateSrpgEnemyTurn = function () {
        var event = this._srpgStatusWindow.user();
        switch (this._srpgTurnState) {
            case 1:   // �Ƅ�ǰ�Єӣ��ʂ䣩
                this._srpgTurnState = this.updateSrpgEnemyActionReady(event) ? 2 : 11;
                break;
            case 2:   // �Ƅ�ǰ�Єӣ����˥�`������ʾ��
                this.showSrpgActionAnimation(event);
                this._srpgTurnState = 3;
                break;
            case 3:   // �Ƅ�ǰ�Єӣ��ЄӽY���η�ӳ��
                this.setSrpgWait('normal', event.executeSrpgAction() + srpgBasicWait);
                this._srpgTurnState = 4;
                break;
            case 4:   // �Ƅ�ǰ�Єӣ��Є��ᥤ�٥�Ȥ΄I��
                $gameMap.startSrpgManagerEvent();
                this._srpgTurnState = 31;
                break;
            case 11:  // �Ƅӣ��ʂ䣩
                this._srpgTurnState = this.updateSrpgEnemyMoveReady(event) ? 12 : 21;
                break;
            case 12:  // �Ƅӣ��ƄӽY���η�ӳ��
                this.updateSrpgEnemyMove(event);
                this._srpgTurnState = 21;
                break;
            case 21:  // �Ƅ����Єӣ��ʂ䣩
                this._srpgTurnState = this.updateSrpgEnemyActionReady(event) ? 22 : 31;
                break;
            case 22:  // �Ƅ����Єӣ����˥�`������ʾ��
                this.showSrpgActionAnimation(event);
                this._srpgTurnState = 23;
                break;
            case 23:  // �Ƅ����Єӣ��ЄӽY���η�ӳ��
                this.setSrpgWait('normal', event.executeSrpgAction() + srpgBasicWait);
                this._srpgTurnState = 24;
                break;
            case 24:  // �Ƅ����Єӣ��Є��ᥤ�٥�Ȥ΄I��
                $gameMap.startSrpgManagerEvent();
                this._srpgTurnState = 31;
                break;
            case 31:  // �ΤΥ�˥åȤ�
                this.setSrpgNextEnemyUnit();
                $gameTemp.setSrpgTurnStart(false);
                $gameMap.startSrpgManagerEvent();
                break;
            case 32:  // ���`���_ʼ����
                $gameMap.onSrpgTurnStart();
                this._srpgTurnState = 0;
                break;
        }
    };

    // �����ЄӜʂ�I��
    Scene_Map.prototype.updateSrpgEnemyActionReady = function (event) {
        if (!event.canSrpgAct()) return false;    // �ЄӲ��ɤʤ�K��
        var action = event.srpgBattler().currentAction();
        var targetPos = event.srpgEvaluateAction(action);
        if (targetPos) {    // �Є��ʌg���Ȥ�Ҋ�Ĥ��ä�
            this.setSrpgAction(event, action.item(), targetPos.x, targetPos.y);
            this.setSrpgWait('normal', srpgBasicWait);
            return true;
        }
        return false;
    };

    // �����ƄӜʂ�I��
    Scene_Map.prototype.updateSrpgEnemyMoveReady = function (event) {
        var action = event.srpgBattler().currentAction();
        var targets = $gameMap.srpgActionEffectiveUnits(event, action);
        targets = $gameMap.sortEventsDistance(targets, event.x, event.y);
        if (!targets[0]) return false;  // ���󤬤��ʤ���нK��
        $gameMap.showMovableArea(event);
        if ($gameMap.isSrpgAreaEmpty()) return false; // �ƄӤǤ������ˤ��ʤ���нK��
        this._moveTarget = targets[0];
        this._srpgStatusWindow.setSrpgUnit(event);
        this.setSrpgWait('normal', srpgBasicWait);
        return true;
    };

    // �����ƄӄI��
    Scene_Map.prototype.updateSrpgEnemyMove = function (event) {
        var target = this._moveTarget;
        var targetPos = $gameMap.posInsideAreaNearXy(target.x, target.y);
        this.setSrpgMove(event, targetPos.x, targetPos.y);
        $gameMap.hideSrpgArea();        // �����ʾ���L��
    };

    //-----------------------------------------------------------------------------
    // Scene_SrpgInfo
    //

    function Scene_SrpgInfo() {
        this.initialize.apply(this, arguments);
    }

    Scene_SrpgInfo.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_SrpgInfo.prototype.constructor = Scene_SrpgInfo;

    Scene_SrpgInfo.prototype.initialize = function () {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_SrpgInfo.prototype.create = function () {
        Scene_MenuBase.prototype.create.call(this);
        this._statusWindow = new Window_SrpgInfo();
        this._statusWindow.setHandler('cancel', this.popScene.bind(this));
        this.addWindow(this._statusWindow);
    };

})();


// --------------------
// Process Data in item.note
// *for efficiency, note is processed at first.
// --------------------

var _Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function () {
    _Scene_Boot_start.call(this);
    DataManager.processHpCost();
};

DataManager.processHpCost = function () {
    for (var i = 1; i < $dataSkills.length; i++) {
        var skill = $dataSkills[i];
        var result = skill.meta.hp_cost;
        if (result) {
            skill.hpCost = Number(result);
        } else {
            skill.hpCost = 0;
        }
    }
};

// --------------------
// exec consume HP cost
// --------------------

Game_BattlerBase.prototype.skillHpCost = function (skill) {
    return skill.hpCost;
};

var _Game_BattlerBase_paySkillCost =
    Game_BattlerBase.prototype.paySkillCost;
Game_BattlerBase.prototype.paySkillCost = function (skill) {
    _Game_BattlerBase_paySkillCost.call(this, skill);
    if (this._hp > this.skillHpCost(skill)) {
        this._hp -= this.skillHpCost(skill);
    } else {
        this._hp = 0;
    }
};
