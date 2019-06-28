class BookRoom {
    constructor (nightNumber, bedNumber=1, petNumber=0, handicapAccessible=false) {
        this.nightNumber = nightNumber;
        this.bedNumber = bedNumber;
        this.petNumber = petNumber;
        this.handicapAccessible = handicapAccessible;
    }
    getPetFee(){
        if (this.petNumber > 2) {
            throw new Error ("Sorry. Only 2 pets or less.")
        } else {
            return (this.petNumber * 20);
        }
    }
    getRoomFee(){
        if (this.bedNumber > 3 || this.bedNumber < 1) {
            throw new Error ("Sorry. You can only select 1, 2, or 3 beds.")
        } else if (this.bedNumber == 3) {
            return (this.nightNumber * 90);
        } else if (this.bedNumber == 2) {
            return (this.nightNumber * 75);
        } else {
            return (this.nightNumber * 50);
        }
    }
    getFloor(){
        if(this.petNumber > 0 || this.handicapAccessible === true){
            return 1;
        } else {
            //Return either 1st floor or 2nd floor
            let percentage = Math.floor(Math.random() * 100) + 1;
            if (percentage > 10) {
                return 2;
            } else {
                return 1;
            }
        }
    }
    getTotal(){
        return this.getRoomFee() + this.getPetFee();
    }
    getDetails(){
        return{
            floor: this.getFloor(),
            total: this.getTotal()
        }
    }
}

module.exports = BookRoom;