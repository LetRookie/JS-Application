async function lockedProfile() {
    let main = document.getElementById('main');
    main.replaceChildren();

    let result = await getProfiles();
    result.forEach(i => {
        let profile = document.createElement('div');
        profile.setAttribute('class', 'profile');
        profile.innerHTML = `
        <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="${i.username}" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="${i.username}" value="unlock"><br>
				<hr>
                <label>Username</label>
				<input type="text" name="${i.username}" value="${i.username}" disabled readonly />
                <div class="${i.username}">
                <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="${i.email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user1Age" value="${i.age}" disabled readonly />
            </div>
				<button>Show more</button>
        `;
        main.appendChild(profile);
        
    })

}

async function getProfiles(){
    
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const res = await fetch(url);
    const data = await res.json();
    let profiles = Object.values(data);

    return profiles;
}
