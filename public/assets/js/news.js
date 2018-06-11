$.getJSON("/news", function(news){
    for (var i =0; i< news.length; i++){
        var dropNum = 0;
        dropNum++;
        if (news[1].link !==null){
            $(`#articlesDiv`).append(`<li class='collection-item avatar'> <img src='https://picsum.photos/200/300/?random' alt= 
            ${news[i].title} class='circle'> <a href=
            ${news[i].link} ><h4 class='title'>
            ${news[i].title} </h4> </a> <p>
            ${news[i].story} </p> <a id='commentadd' data-id=
            ${news[i]._id} href='#modal1' class='waves-effect waves-light bt modal-trigger'>
            <i class='material-icons'>comment</i></a>
            <a class='dropdown-trigger btn' id='showCom' data-id= ${news[i]._id} data-target='dropdown1'>View Comments</a> <ul id-'dropdown1' class='dropdown-content'></ul></li>
            `); 
        }//IF statement 
    } //for loop
}); //getJSON

$(document).ready(function (){
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
}); //document.ready

$(document).ready("click", "#showCom", function(){

    var Id = $(this).attr("data-id");
    console.log(Id);
    $.ajax({
        method: "GET",
        url: "/article/" + Id
    }).then(function (data){
        console.log(data);
        for (var i = 0; i < data.length; i++){
            $("#dropdown").append(`<li class='comment'> ${data[i].comment} </li> `);
        }
    });

}); //showCom

$(document).ready("click", "#submitbtn", function(Id){
    $('#commentText').empty();

    var Id= $(this).attr("data-id");

    $("#mdoal1").on("click", "#submitbtn", function(Id){
        $.ajax({
            method: "POST",
            url: "/article" + Id,
            data: {
                comm: $("#commentArea").val(),
                artId: $("#commentadd").attr("data-id")
            }
        }).then(function(data){
            console.log(data);
        });
    
        $("#commentArea").val("");
        
    });

}); //submitbtn