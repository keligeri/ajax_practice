var pets = [
    {
        "name": "Miau",
        "species": "cat",
        "favFood": "milk"
    },
    {
        "name": "Bausek",
        "species": "dog",
        "favFood": "meat"
    }
];

$(document).ready(function(){
    $("#update_page").click(function(){
        console.log(pets[0].favFood);
    });
});
