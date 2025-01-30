

var listItem = document.querySelector('#infi-list');

var nextItem = 1;
var loadMore = function(){
    for(var i = 1; i <= 20; i++){
        var item = document.createElement('li');
        item.innerText = 'Item ' + nextItem;
        listItem.appendChild(item);
        nextItem++;
    }
}

listItem.addEventListener('scroll', function(){
    if(listItem.scrollTop + listItem.clientHeight >= listItem.scrollHeight){
        loadMore();
    }
});


loadMore();

