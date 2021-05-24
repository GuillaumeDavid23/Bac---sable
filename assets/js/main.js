var select = 0;
var maxRate = 5;
var note = 4;

     
function initRate (notation, intMax) {
    console.log("BONJOUR")
    this.select++;
    var str = '<span id="note-' + this.select + '"class="rate" data-maxgrade="' + intMax + '">';
    for (var i=1; i<=intMax; i++) {
        if(notation > 0){
            str += '<i class="fa fa-star" data-clicked="false" data-id="grade-' + this.select + '" data-grade="' + i + '"></i>';
            notation--;
        }
        else{
            str += '<i class="fa fa-star-o" data-clicked="false" data-id="grade-' + this.select + '" data-grade="' + i + '"></i>';
        }
            
    }
    str += '</span>';
    return str;
}



$("li").each(function(){
    $(this).append(initRate(note, maxRate));
})





