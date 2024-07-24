const dummyRespone = {
    showTabs: true,
    showPopup: true,
    showGithubProfileFinder: true,
    showTicTacToe: true
}


function featureFlagServiceCall(){
    return new Promise((resolve, reject)=>{
        if(dummyRespone) setTimeout((resolve(dummyRespone), 1000))
        else(reject("some error occurred"))
    })
}

export default featureFlagServiceCall;