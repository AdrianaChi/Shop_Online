const currentLocation = location.href;
const menuItem = document.querySelector('a');
const menuLength = menuItem.length;

for(let i = 0;i< menuLenght;i++)
{
    if(menuLength[i].href === currentLocation)
    menuItem[i].className = 'active';
};


