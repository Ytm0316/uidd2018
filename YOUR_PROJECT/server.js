const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:true});
const port = 10110;
const fs = require('fs');

app.listen(port);
app.use(express.static(__dirname + '/public'));
app.post('/get_data',urlencodedParser,function(req,res){
  res.send('<h1>hello,'+req.body.fname+' '+req.body.lname+'</h1>' );
});

app.post("/ajax_data",urlencodedParser,function(req,res){
//start to save data to name.json

  if(req.body.Name==""||req.body.student_id==""){
    res.send('invalid information');
  }
  else{
       fs.readFile('name.json',{},function(err,data){
      var studentid_name_set;//i want to set this outside from readFile scope,but i failed
    if(err){ throw err;}
    studentid_name_set = JSON.parse(data);
   // res.send(data);   //check if the data we read is correct here data.toString is []
   if(!studentid_name_set.hasOwnProperty(req.body.student_id)){//..
   // var data_to_save = '{"'+req.body.student_id+'":"'+req.body.Name+'"}';
   // var obj = JSON.parse(data_to_save);
   // studentid_name_set.push(obj);
    studentid_name_set[req.body.student_id]=req.body.Name;//add new data set
    fs.writeFile("name.json",JSON.stringify(studentid_name_set),function(err){ if(err) throw err;});
    res.send('Hello,'+req.body.Name+' '+req.body.student_id+',your data is saved successfully!'); 
    }
   else{
   res.send('this student id is used!');
   }
   
    });
   
  }
  });

app.post("/search_result",urlencodedParser,function(req,res){
//get name.json,use req.body.search_req to get the keyword
//then use the keyword to find the attribute in name.json

  if(req.body.search_req==""){
    res.send('invalid search target');
  }
  else{
    fs.readFile('name.json',{},function(err,data) {
    if(err) throw err;
    studentid_name_set = JSON.parse(data);
     if(!studentid_name_set.hasOwnProperty(req.body.search_req)){
     res.send('the student id you search for doesnt exist!');
     }
     else{
     res.send('Hello,id:'+req.body.search_req+' is '+studentid_name_set[req.body.search_req]);
     }
    });
   // res.send('Hello,'+req.body.Name+' '+req.body.student_id+',we found you'); 
  }

//res.send('hi');//You are XXX
});

