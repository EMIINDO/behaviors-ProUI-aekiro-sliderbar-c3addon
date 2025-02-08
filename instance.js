"use strict";

{
    // callMap path/SDK/instance.js

    const SDK = globalThis.SDK;
    const BEHAVIOR_CLASS = SDK.Behaviors.aekiro_sliderbar;

    BEHAVIOR_CLASS.Instance = class aekiro_sliderbarInstance extends SDK.IBehaviorInstanceBase {
        constructor(sdkBehType, behInst) {
            super(sdkBehType, behInst);
        }
        Release() {
        }
        OnCreate() {
        }
        OnPropertyChanged(id, value) {
        }
        LoadC2Property(name, valueString) {
            return false;       // not handled
        }
    };
}
