class Controllers {
    signup = {
        data : {
            f_name : null,
            l_name : null,
            email : null,
            gender : null,
            dob : null,
            password : null,
        },
        currentStage : 1,
        stages: 3,
        activateStage: (stageNumber = this.signup.currentStage)=>{
            if(stageNumber <= this.signup.stages){

                for(i=1;i<this.signup.stages;i++) {
                    document.getElementById("signup_stage-"+i).style.width = "0%";
                }
                
                document.getElementById("signup_stage-"+stageNumber).style.width = "100%";
                this.signup.currentStage = stageNumber;
            }
        },
        nextStage: ()=>{
            let newStage = this.signup.currentStage + 1;
            if(newStage <= this.signup.stages){
                this.signup.activateStage(newStage);
            }
        },
        previousStage: ()=>{
            let newStage = this.signup.currentStage - 1;
            if(newStage >= 1){
                this.signup.activateStage(newStage);
            }
        },
    }
}

module.exports = {Controllers};