/* --- NEON PONG 2077 CSS STYLESHEET --- */
/* Version: 1.0.0 */
/* Author: Senior Front-End Developer */

:root {
    --neon-blue: #00f3ff;
    --neon-pink: #ff00ff;
    --neon-green: #00ff00;
    --neon-red: #ff0000;
    --neon-yellow: #ffff00;
    --dark-bg: #0a0a0a;
    --panel-bg: rgba(20, 20, 20, 0.9);
    --font-main: 'Roboto', sans-serif;
    --font-retro: 'Press Start 2P', cursive;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none; /* Prevent text selection during play */
}

html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: var(--font-main);
    background-color: var(--dark-bg);
    color: #fff;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* --- UTILITY CLASSES --- */
.hidden { display: none !important; }
.text-shadow-glow { text-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue); }
.pointer-events-auto { pointer-events: auto; }
.pointer-events-none { pointer-events: none; }

/* --- PRELOADER --- */
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-bg);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.8s ease-out;
}

#preloader.fade-out {
    opacity: 0;
    pointer-events: none;
}

.animated-banner {
    font-family: var(--font-retro);
    font-size: 4rem;
    color: var(--neon-blue);
    margin-bottom: 2rem;
    animation: glitch 1s infinite;
    text-align: center;
    line-height: 1.5;
}

#loading-bar {
    width: 400px;
    height: 10px;
    background: #333;
    border: 2px solid var(--neon-blue);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
}

#loading-progress {
    width: 0%;
    height: 100%;
    background: var(--neon-green);
    transition: width 0.2s ease;
    box-shadow: 0 0 10px var(--neon-green);
}

/* --- GAME CONTAINER --- */
#game-container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 50px rgba(0, 243, 255, 0.1);
}

#canvas-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid #333;
}

/* --- CANVAS LAYER --- */
#game-canvas {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);
}

/* --- UI LAYER --- */
#ui-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Let clicks pass through to canvas */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* HUD Top */
.hud-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    pointer-events: auto;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
}

.scoreboard {
    display: flex;
    gap: 40px;
    align-items: center;
    font-family: var(--font-retro);
    font-size: 1.5rem;
    color: #fff;
    text-shadow: 0 0 10px var(--neon-pink);
}

.score-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.score-label { font-size: 0.8rem; color: var(--neon-blue); }
.score-value { font-size: 2.5rem; color: var(--neon-green); }

.timer-container {
    font-family: var(--font-retro);
    font-size: 2rem;
    color: var(--neon-yellow);
    text-shadow: 0 0 10px var(--neon-yellow);
}

.controls-hud {
    display: flex;
    gap: 15px;
}

.control-btn {
    background: rgba(0,0,0,0.6);
    border: 1px solid var(--neon-blue);
    border-radius: 5px;
    width: 40px;
    height: 40px;
    color: var(--neon-blue);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.control-btn:hover {
    background: var(--neon-blue);
    color: #000;
    box-shadow: 0 0 15px var(--neon-blue);
}

/* Center Screen / Menus */
#center-screen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 40px;
    background: var(--panel-bg);
    border: 2px solid var(--neon-pink);
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.2);
    pointer-events: auto;
    z-index: 100;
    transition: opacity 0.3s;
}

#screen-title {
    font-family: var(--font-retro);
    font-size: 3rem;
    color: var(--neon-blue);
    margin-bottom: 10px;
    line-height: 1.5;
}

.subtitle { font-style: italic; color: #ccc; margin-bottom: 30px; }

.menu-section { margin-bottom: 30px; text-align: left; }
.menu-section h3 { color: var(--neon-yellow); margin-bottom: 15px; font-family: var(--font-main); }
.menu-section ul { list-style-type: none; }
.menu-section li { margin-bottom: 10px; font-size: 0.9rem; }
.menu-section li strong { color: var(--neon-green); }
kbd { 
    background: #333; 
    padding: 2px 6px; 
    border-radius: 4px; 
    border: 1px solid #555; 
    font-family: monospace; 
}

.game-btn {
    padding: 15px 40px;
    font-size: 1.2rem;
    font-family: var(--font-retro);
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    margin: 5px;
}

.primary-btn { 
    background: var(--neon-pink); 
    color: #fff; 
    box-shadow: 0 0 15px var(--neon-pink);
}
.primary-btn:hover { background: #ff4dff; transform: scale(1.05); }

.secondary-btn { 
    background: transparent; 
    border: 2px solid var(--neon-blue); 
    color: var(--neon-blue);
}
.secondary-btn:hover { background: rgba(0, 243, 255, 0.1); }

.danger-btn { 
    background: var(--neon-red); 
    color: #fff; 
    box-shadow: 0 0 15px var(--neon-red);
}
.danger-btn:hover { background: #ff4d4d; }

/* Game Over Screen */
#game-over-screen h2 { font-family: var(--font-retro); font-size: 3rem; margin-bottom: 20px; }

/* HUD Bottom */
.hud-bottom {
    padding: 10px 20px;
    pointer-events: auto;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

.stats-panel { display: flex; gap: 40px; }
.stat-box { display: flex; flex-direction: column; align-items: center; gap: 5px; }
.stat-label { font-size: 0.7rem; color: #888; font-family: var(--font-main); }
.stat-value { font-family: var(--font-retro); color: var(--neon-green); }

/* --- MODALS --- */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    backdrop-filter: blur(5px);
}

.modal-content {
    background: #1a1a1a;
    padding: 30px;
    border: 1px solid var(--neon-green);
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.1);
}

.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px; }
.modal-header h3 { color: var(--neon-green); font-family: var(--font-main); }
.close-btn { background: none; border: none; font-size: 2rem; color: #fff; cursor: pointer; line-height: 1; }

.modal-body { display: flex; flex-direction: column; gap: 20px; }
.setting-row { display: flex; justify-content: space-between; align-items: center; }
.setting-row label { font-size: 1rem; color: #ddd; }
input[type=range] { cursor: pointer; }

/* --- PAUSE OVERLAY --- */
#pause-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 150;
    backdrop-filter: blur(3px);
}
#pause-overlay h2 { font-family: var(--font-retro); font-size: 4rem; color: var(--neon-yellow); margin-bottom: 20px; }
#pause-overlay p { font-size: 1.5rem; margin-bottom: 30px; color: #fff; }

/* --- FOOTER --- */
.game-footer { text-align: center; padding: 20px; background: #000; color: #555; font-size: 0.8rem; }

/* --- ANIMATIONS --- */
@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .hud-top { flex-direction: column; gap: 10px; text-align: center; }
    .scoreboard { gap: 15px; font-size: 1rem; }
    #center-screen { width: 90%; padding: 20px; }
    #screen-title { font-size: 2rem; }
}
