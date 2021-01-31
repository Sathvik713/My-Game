class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
        this.rank = null

    }
    getCount(){
        database.ref("playerCount").on("value",function(data) {
        playerCount=data.val()    

        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
            
        })
    }
    update(name){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>
        {allPlayers=data.val();})

    } 
    getcarsAtEnd(){
        database.ref('carsAtEnd').on("value",function(data){
            this.rank=data.val()

        })
    }
    static updatecarsAtEnd(rank){
        database.ref('/').update({
            carsAtEnd:rank
        })
        

    }
}
