const dashbtn = document.getElementById('mobile-dash');
const dashboard = document.getElementById('mobile-dashboard');

dashbtn.addEventListener('click', ()=>{
    dashboard.style += ";display: block !important";
    dashbtn.style.display="none";
})
console.log(dashboard)