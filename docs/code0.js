gdjs.Main_32sceneCode = {};
gdjs.Main_32sceneCode.GDBlueButtonObjects1= [];
gdjs.Main_32sceneCode.GDBlueButtonObjects2= [];


gdjs.Main_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.Main_32sceneCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32sceneCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32sceneCode.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32sceneCode.GDBlueButtonObjects1[k] = gdjs.Main_32sceneCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32sceneCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "rooster-cry-173621.mp3", false, 100, 1);
}}

}


};

gdjs.Main_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32sceneCode.GDBlueButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDBlueButtonObjects2.length = 0;

gdjs.Main_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Main_32sceneCode'] = gdjs.Main_32sceneCode;
