$(document).ready(function(){
  $("#ajax_btn").click(function(){
$.ajax({
    method: "POST",
    url: "./ajax_data",
    data:{
      Name: $(" input[name='Name']").val(),
      student_id: $(" input[name='student_id']").val()
    },
    success:function(data){
    $("#ajax_content").text(data);
    }
  });
  });

$("#search_btn").click(function(){
  $.ajax({
  method: "POST",
  url: "./search_result",
  data:{
    search_req:$("input[name='search']").val()
  },
  success:function(data){
  $("#ajax_content").text(data);
  }      
  });
  
});

});

