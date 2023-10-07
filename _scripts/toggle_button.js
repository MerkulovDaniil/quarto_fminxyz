document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('toggleSpoilers').addEventListener('click', function() {
        var collapseElements = document.querySelectorAll('.callout-collapse');
        var isAnyVisible = Array.prototype.some.call(collapseElements, function(el) {
            return el.classList.contains('show') && el.querySelector('[data-collapse="true"]');
        });

        collapseElements.forEach(function(el) {
            if(el.querySelector('[data-collapse="true"]')) {
                if (isAnyVisible) {
                    el.classList.remove('show');
                } else {
                    el.classList.add('show');
                }
            }
        });

        this.textContent = isAnyVisible ? '🔽' : '🔼';
    });
});