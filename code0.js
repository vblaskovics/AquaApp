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


};

gdjs.Main_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32sceneCode.GDBlueButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDBlueButtonObjects2.length = 0;

gdjs.Main_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Main_32sceneCode'] = gdjs.Main_32sceneCode;
