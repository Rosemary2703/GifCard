
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function party(){
    // Disparar desde el lado izquierdo
    confetti({
        particleCount: 300,
        startVelocity: 50,
        spread: 120,
        origin: { x: 0, y: Math.random() }
    });
    // Disparar desde el lado derecho
    confetti({
        particleCount: 300,
        startVelocity: 50,
        spread: 120,
        origin: { x: 1, y: Math.random() }
    });
    // Disparar desde arriba
    confetti({
        particleCount: 300,
        startVelocity: 50,
        spread: 120,
        origin: { x: Math.random(), y: 0 }
    });
}
document.getElementById("confeti").addEventListener("click",party);
