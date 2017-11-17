var controller = function controller(view){
    
    console.log(location.origin);
    fetch(`${location.origin}/api/frases`)
        .then((res) => res.json())
        .then((res) => {
            if (res.msg == 'List sended') {
                console.log(res.msg);
                view.frases = res.frases;
                view.render();
            }
        });
    
    view.onFilter = (txt, num) => {
        fetch(`http://sgaviria.com:8080/http://www.purgomalum.com/service/json?text=${txt}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            view.frases[num] = res.result;
            view.render();
        });
    };
}

controller(view);