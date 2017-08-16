document.write('<script type="text/javascript" src="data.json"></script>');

console.log(data);

var input = document.querySelector('input');
var suggest = document.getElementById('suggestions');
var avatar = document.getElementsByClassName('avatar');
var avatarArr = [];

function autocomplete(val) {
    var matches = [];

    for (i = 0; i < data.length; i++) {
        var name = data[i]['username'];
        if (name.startsWith(val)) {
            matches.push(name);
            avatarArr.push(data[i]['avatar_url']);
        }
    }
    return matches;
}

input.onkeyup = function(e) {
    inputVal = this.value; 
    
    if (inputVal.length > 0) {
        var showMatches = [];
        suggest.innerHTML = '';
        showMatches = autocomplete(inputVal);
    
        for (i = 0; i < showMatches.length; i++) {
            suggest.innerHTML += '<li>' + showMatches[i] + 
                '</li><img class="avatar" src="' + avatarArr[i] + '" />';
        }
        
    } else {
        showMatches = [];
        suggest.innerHTML = '';
    }
    
    if (e.keyCode == 13) {
        input.value = showMatches[0];
        var firstNode = suggest.firstChild;
        firstNode.className += 'firstNode';
        $('input, .firstNode').animate({backgroundColor: '#F2DADC'});
        $('input, .firstNode').animate({backgroundColor: '#FFFFFF'});
        setTimeout(function() {
            $(suggest).fadeOut(200);
            suggest.innerHTML = '';
        }, 800);
        setTimeout(function() { 
            $(suggest).fadeIn(200);
        }, 850);
    }
    
}

