const list = document.querySelector('.div10 ul');
const items = document.querySelectorAll('.div12');
const listItemsik = document.querySelectorAll('.div10 ul li');
       
function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        const targetik = event.target;

        listItemsik.forEach(listItemss => listItemss.classList.remove('active-class'));
        targetik.classList.add('active-class');

        switch(targetId) {
            case 'all':
                getItems('div12');
                break;
            case 'red':
                getItems(targetId);
                break;
            case 'blue':
                getItems(targetId);
                break;
            case 'green':
                getItems(targetId);
                break;
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = 'flex';
            item.style.margin_right = '0px';
        } else {
            item.style.display = 'none';
        }
    })
}