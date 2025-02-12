const menuButton = document.querySelector('.menu-button');
const navbar = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.toggle('show');
  });

  nav.show {
    display: grid;
    animation: slide-down 0.3s ease-in-out;
  };
  
  @keyframes slide-down {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }