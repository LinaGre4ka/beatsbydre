const listik = document.querySelector('.div23');
const itemsik = document.querySelectorAll('.div24');
const listItems = document.querySelectorAll('.div23 img');
       
function filter() {
    listik.addEventListener('click', event => {
        const targetIdik = event.target.dataset.id;
        const target = event.target;

        listItems.forEach(listItem => listItem.classList.remove('active'));
        target.classList.add('active');

        switch(targetIdik) {
            case 'tab1':
                getItemsik(targetIdik);
                break;
            case 'tab2':
                getItemsik(targetIdik);
                break;
            case 'tab3':
                getItemsik(targetIdik);
                break;
            case 'tab4':
                getItemsik(targetIdik);
                break;
        }
    })
}
filter()

function getItemsik(className) {
    itemsik.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}