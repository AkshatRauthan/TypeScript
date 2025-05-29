"use strict";
// Any class implementing TakePhotos must Must define these variables and functions.
// Here we are using interfaces so that each class can have diffrent logic for these implemented functions.
// Something which using classes by inheritence can't provide.
;
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    takePhoto() {
        console.log("Photo Clicked");
    }
    createStory() {
        console.log("Story Created");
    }
}
;
