let currentIndex = 0;
async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const user = users[currentIndex];
        currentIndex = (currentIndex + 1) % users.length;

        document.getElementById('name').innerText = `${user.name}`;
        document.getElementById('email').innerHTML = `<b>Email:</b> ${user.email}`;
        document.getElementById('phone').innerHTML = `<b>Phone:</b> ${user.phone}`;
        document.getElementById('website').innerHTML = `<b>Website:</b> ${user.website}`;

    }
    catch(error){
        console.error("ERROR!", error);
    }
}