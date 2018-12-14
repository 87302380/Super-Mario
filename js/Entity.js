
class Trait {
    constructor(name){
        this.NAME = name;
    }

    update(){

    }
}

class Entity{
    constructor(){
        this.pos = new Vec2(0, 0);
        this.vel = new Vec2(0, 0);

        this.traits = [];
    }
    addtrait(trait){
        this.traits.push(trait);
        this[trait.NAME] =trait;
    }

    update(deltaTime){

        this.traits.forEach(trait =>{
            trait.update(this, deltaTime);
        });
    }

}
