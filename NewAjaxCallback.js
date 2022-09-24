//UC2:Ability to view Employee Data from JSON Server having ID, Name and Salary using AJAX
//Run the JS code Using Node Compiler 
//Run npm install xmlhttprequest
let XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;

function showTime()
{
    const date=new Date();
    return date.getHours()+" Hrs: "+date.getMinutes()+"Mins : "+date.getSeconds()+"Secs: ";
}

function makeAJAXCall(methodType,url,callback,async=true,data=null)
{
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        //console.log(methodType+" State Changes called at : "+showTime()+". Ready State: "+xhr.readyState+)
        if(xhr.readyState===4)
        {
            if(xhr.status===200 || xhr.status===201)
            {
                callback(xhr.responseText);
            }
            else if(xhr.status>=400)
            {
              console.log("Handle 400 Client Error or 500 Server Error");
            }
        }
    }
    xhr.open(methodType,url,async);
    xhr.send();
    console.log(methodType+" request sent to the server at: "+showTime());
}


const getURL="http://localhost:3000/employees";

function getUserDetails(data)
{
    console.log("Get User Data at : "+showTime()+ " data : "+data);
}

makeAJAXCall("Get",getURL,getUserDetails,true);

console.log("Made GET AJAX Call to Server at"+showTime());