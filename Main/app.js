function showLink() {
    document.getElementById('home_link').style.display = 'block';
    document.getElementById('navbar').style.justifyContent = 'space-between';
    document.getElementById('navbar').style.boxShadow = '5px -5px 25px black';
}

function hideLink(event) {
    event.preventDefault();

    document.getElementById('home_link').style.display = 'none';
    document.getElementById('navbar').style.justifyContent = 'flex-end';
    document.getElementById('navbar').style.boxShadow = 'none';

    // navigate after DOM updates
    window.location.href = '/';
}


