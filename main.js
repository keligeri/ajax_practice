function Controller (){
    // var counter = 0;
    // this.pageCounter = function(){
    //     counter++;
    //     return counter;
    // };

    this.getXhrObject = function(method, url){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        return xhr
    };
    this.addToHtml = function(objects){        // add tag with class, ID and text!!
        for (var i = 0; i < objects.length; i++){   // loop through the array
            var newRow = $('<tr>');
            var nameCell = $('<td>');
            var likeFoodsCell = $('<td>');
            var hateFoodsCell = $('<td>');

            var nameText = objects[i].name + " " + objects[i].species;
            var favFoodsText = "";
            var hateFoodsText = "";

            for (var ii = 0; ii < objects[i].foods.likes.length; ii++){
                favFoodsText += objects[i].foods.likes[ii] + ", ";
            }

            for (var e = 0; e < objects[i].foods.dislikes.length; e++){
                console.log(objects[i].foods.dislikes[e]);
                hateFoodsText += objects[i].foods.dislikes[0] + ", "
            }

            nameCell.attr('id', objects[i].name + '_id');    // elements
            nameCell.text(nameText);
            likeFoodsCell.text(favFoodsText);
            hateFoodsCell.text(hateFoodsCell);


            newRow.append(nameCell);     //append data to row
            newRow.append(likeFoodsCell);
            newRow.append(hateFoodsCell);
            $('#empty_body').append(newRow);
        }
    };
};


$(document).ready(function(){
    var controller = new Controller();  // global variable for functions
    var counter = 1;

    $('#update_button').hover(function(){
        $('#update_button').css({'background-color': "red"})
        //$('#update_button').blur();

    });


    $("#update_button").click(function() {
        var url = 'https://learnwebcode.github.io/json-example/animals-' + counter + '.json';
        var xhr = controller.getXhrObject('GET', url);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                controller.addToHtml(data);
                counter++;
            }
            else {
                $('#update_button').hide();
                alert('No more data')
            };
        };

        xhr.send(); // carefully, it has to be OUTSIDE the onload function!!!!!
    });
});




