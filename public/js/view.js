var view = {

    num: 0,
    frases: [],

    createFrase: function createFrase(txt, ident) {
        var div = document.createElement('div');
        
        var that = this;

        if (txt.includes('*')) {
            div.innerHTML = `<div class="frase"><p>${txt}</p></div>`;
        } else {
            div.innerHTML = `
        <div class="frase"><p>${txt}</p><div class="filter"><p>FILTER</p></div></div>`;

            div.querySelector('.filter').addEventListener('click', () => {
                that.onFilter(txt, ident);
            });
        }

        return div;
    },

    createInit: function createInit() {
        var div = document.createElement('div');

        div.innerHTML = `
        <header>
            <h4>Crear frase</h4>
        </header>
        <div id="allFrases">
        </div>
        `;

        var that = this;

        div.querySelector('header').addEventListener('click', () => {
            div.querySelector('#allFrases').appendChild(that.createFrase(that.frases[that.num], that.num));
            that.num++;
        });

        for (var i = 0; i < that.num; i++) {
            div.querySelector('#allFrases').appendChild(that.createFrase(that.frases[i], i));
        }

        return div;
    },

    render: function render() {
        var main = document.querySelector('#main');
        var init = this.createInit();

        main.innerHTML = '';
        main.appendChild(init);
    }
}
