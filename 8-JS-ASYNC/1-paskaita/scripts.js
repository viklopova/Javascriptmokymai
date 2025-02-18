setTimeout(() => {
    console.log('Ketvirtas');
}, 5000);

fetch('https://agrocrm.agrorodeo.lt/api/vend_table.php')   
.then(response => response.json())
.then(data => 
    console.log(data));
    