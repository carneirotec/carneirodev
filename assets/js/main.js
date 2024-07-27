
document.addEventListener('DOMContentLoaded', () => {

    // Obtém todas as referências de "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Verifica se há "navbar-burger" elements
    if ($navbarBurgers.length > 0) {

        // Adiciona o clique em cada um deles
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Pega o alvo do "data-target" do "navbar-burger"
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Ativa a classe "is-active" em ambos os "navbar-burger" e "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});