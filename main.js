function Controller (){
    this.getXhrObject = function(method, url){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        return xhr
    };
    this.addToHtml = function(text){        // add tag with class, ID and text!!
        var newDiv = $('<div>').attr('class', 'love_jquery');
        newDiv.attr('id', text + '_id');
        newDiv.text("content");
        $('#empty_div').append(newDiv);

    }
};


$(document).ready(function(){
    var controller = new Controller();  // global variable for functions


    $("#update_button").click(function(){
        var xhr = controller.getXhrObject('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
        xhr.onload = function(){
            if (xhr.status >= 200 && xhr.status < 400){
                var data = JSON.parse(xhr.responseText);
                for (var i = 0; i < data.length; i++){
                    console.log(data[i].name);
                    controller.addToHtml(data[i].name)}
            }
            else {
                alert("Wrong url added")
            }
        };

        xhr.send(); // carefully, it has to be OUTSIDE the onload function!!!!!
    });

});



