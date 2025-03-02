document.addEventListener('DOMContentLoaded', () => {  
    setInterval(() => {
        console.log('La página está funcionando en segundo plano');
    }, 10000); 

    localStorage.setItem('estado', 'activo');
    console.log('Estado guardado en localStorage');
});