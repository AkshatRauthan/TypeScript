"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8; // Can even override it if needed.
    }
}
/*
    const ak = new TakePhoto("front", "test"); => Error
    
    Abstract classes can't create objects
*/
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burstPhotos) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstPhotos = burstPhotos;
    }
    getSepia() {
        console.log("sepia filer selected");
    }
}
const ak = new Instagram("front", "none", 10);
console.log(ak.getReelTime);
