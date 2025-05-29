// Any class implementing TakePhotos must Must define these variables and functions.
// Here we are using interfaces so that each class can have diffrent logic for these implemented functions.
// Something which using classes by inheritence can't provide.

interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number,
    takePhoto(): void
};

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){}

    takePhoto(): void {
        console.log("Photo Clicked");
    }
    createStory(): void {
        console.log("Story Created");
    }
};