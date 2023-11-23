gdjs.Main_32sceneCode = {};
gdjs.Main_32sceneCode.GDBlueButtonObjects1= [];
gdjs.Main_32sceneCode.GDBlueButtonObjects2= [];
gdjs.Main_32sceneCode.GDBlueButtonObjects3= [];
gdjs.Main_32sceneCode.GDNewTextObjects1= [];
gdjs.Main_32sceneCode.GDNewTextObjects2= [];
gdjs.Main_32sceneCode.GDNewTextObjects3= [];
gdjs.Main_32sceneCode.GDNewText2Objects1= [];
gdjs.Main_32sceneCode.GDNewText2Objects2= [];
gdjs.Main_32sceneCode.GDNewText2Objects3= [];


gdjs.Main_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= 12);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "stoptimer");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "rooster-cry-173621.mp3", false, 100, 1);
}{gdjs.evtTools.debuggerTools.log("event1", "info", "");
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(100);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() <= 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "stoptimer");
}
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log("event2", "info", "");
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "stoptimer");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "stoptimer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "playtimer");
}}

}


};gdjs.Main_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "stoptimer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "stoptimer");
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
/* Reuse gdjs.Main_32sceneCode.GDBlueButtonObjects1 */
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "happyrock.mp3", 1, true, 100, 1);
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDBlueButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDBlueButtonObjects1[i].setVariableBoolean(gdjs.Main_32sceneCode.GDBlueButtonObjects1[i].getVariables().getFromIndex(0), true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playtimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "playtimer") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Main_32sceneCode.GDNewText2Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playtimer");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.random(100));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.random(100));
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDNewText2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()) + " ; " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}
{ //Subevents
gdjs.Main_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stoptimer") >= 15;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "stoptimer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "stoptimer");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "playtimer");
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Main_32sceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Main_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "playtimer")) + " ; " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "stoptimer")));
}
}}

}


};

gdjs.Main_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32sceneCode.GDBlueButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDBlueButtonObjects2.length = 0;
gdjs.Main_32sceneCode.GDBlueButtonObjects3.length = 0;
gdjs.Main_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Main_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Main_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Main_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Main_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Main_32sceneCode.GDNewText2Objects3.length = 0;

gdjs.Main_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Main_32sceneCode'] = gdjs.Main_32sceneCode;
