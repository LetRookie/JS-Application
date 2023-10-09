async function loadCommits() {

   const username =  document.getElementById('username').value;
   const repo = document.getElementById('repo').value;
   const list = document.getElementById('commits');

   const res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
   try{

       if(!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`)
       }
       const data = await res.json();
       list.innerHTML = '';

       for (const { commit } of data) {
        list.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`
        
       }
   }catch (err){
    list.innerHTML = `Error: ${err.message}`;
   }
}