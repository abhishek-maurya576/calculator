document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    
    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            
            switch (value) {
                case 'C':
                    display.innerText = '0';
                    break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
                    } catch {
                        display.innerText = 'Error';
                    }
                    break;
                default:
                    if (display.innerText === '0') {
                        display.innerText = value;
                    } else {
                        display.innerText += value;
                    }
                    break;
            }
        });
    });
});
