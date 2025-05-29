abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void  // Defining abstract method.
    
    getReelTime(): number {    // Defining a non-abstract class method : Can't be done by using interfaces.
        return 8;              // Can even override it if needed.
    }
}

/*
    const ak = new TakePhoto("front", "test"); => Error
    
    Abstract classes can't create objects
*/

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstPhotos: number,
    ){
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("sepia filer selected");
    }
}

const ak = new Instagram("front", "none", 10);
console.log(ak.getReelTime);