const APIserver = "http://localhost/weSapa_Server/amvc-files/amvc.api";

class AMVC {
    generateRequestData(command, data1, data2){
        let requestData = {
            "command":command,
            "data_1":data1,
            "data_2":data2
        };
        return JSON.stringify(requestData);
    }

    ajax(requestData, url, callback, method = "POST"){
        var xmlhttp;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                callback(xmlhttp.responseText);
            }
        }
        xmlhttp.open(method, url, true);
        xmlhttp.send(requestData);
        return;
    }

    //Interact with backend interactor (api)
    interact(APIendpoint, callback, interactorKey,  fd = new FormData()){
        let interactionData = (this.generateRequestData('_interaction', interactorKey, null));
        fd.append('_amvc_request_', interactionData);
        this.ajax(fd, APIendpoint, output=>{
            callback(output);
        });
    }
}


const handleVform = ()=>{
    const vForms = document.querySelectorAll('form');
    for(i=0;i<vForms.length;i++){
        if(vForms[i].getAttribute('async') == 'true'){
            vForms[i].onsubmit = (event)=>{
                event.preventDefault();
                let vFormInputs = event.currentTarget.querySelectorAll('*');
                let submitUrl   =  event.currentTarget.getAttribute("action");
                let vForm       =  new FormData();
                if(submitUrl == "amvc.api"){
                    submitUrl = APIserver;
                    let apiCommand = new AMVC().generateRequestData("_interaction", event.currentTarget.getAttribute("api-key"));
                    vForm.append("_amvc_request_", apiCommand);
                }

                if(event.currentTarget.method.toLowerCase() == 'get'){
                    submitUrl += "?";
                    for(ii=0;ii<vFormInputs.length;ii++){
                        if(vFormInputs[ii].name && vFormInputs[ii].value){
                            if(vFormInputs[ii].name.length > 0){
                                if(vFormInputs[ii].type == 'file'){
                                    vForm.append(vFormInputs[ii].name, vFormInputs[ii].files);
                                }else{
                                    submitUrl += vFormInputs[ii].name+"="+vFormInputs[ii].value+"&";
                                }
                            }
                        }
                    }
                    submitUrl = submitUrl.replace(/[&]$/g, '');
                }else{
                    for(ii=0;ii<vFormInputs.length;ii++){
                        if(vFormInputs[ii].name && vFormInputs[ii].value){
                            if(vFormInputs[ii].type == 'file'){
                                vForm.append(vFormInputs[ii].name, vFormInputs[ii].files);
                            }else{
                                vForm.append(vFormInputs[ii].name, vFormInputs[ii].value);
                            }
                        }
                    }
                }
                
                new AMVC().ajax(vForm, submitUrl, eval(event.currentTarget.getAttribute("callback")));
            };
        }
    }
}


