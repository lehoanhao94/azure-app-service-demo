function myFunction() {
    console.log(location.search)
    var myParam = getSfno()
    document.getElementById("sfno").innerHTML = myParam ? myParam : ""
    document.getElementById("uuid").innerHTML = 'UUID: ' + window.KoreSDK.chatConfig.botOptions.userIdentity
    console.log(myParam)
    console.log('uuid:', window.KoreSDK.chatConfig.botOptions.userIdentity)
}

function uuidv4() {
    var kore_uuid = localStorage.getItem('kore_uuid');
    if (kore_uuid) {
        return kore_uuid;
    } else {
        kore_uuid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
        localStorage.setItem('kore_uuid', kore_uuid);
        return kore_uuid;
    }
}

function getSfno() {
    var sfno = location.search.split('sfno=')[1]
    if(sfno){
        var trimmed = decodeURIComponent(sfno).replace(/\s/g, '')
        console.log("decode:" + trimmed)
        return trimmed
    } else{
        return undefined
    }
}

function openChatBot() {
    var chatBox = document.querySelector(".kore-chat-window");
    chatBox.classList.remove("minimize");
}