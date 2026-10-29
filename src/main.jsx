import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from 'lenis';
import './styles/main.css';
import App from './App.jsx';

// The site script reads these as globals (same as the CDN version).
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.MotionPathPlugin = MotionPathPlugin;
window.Lenis = Lenis;

createRoot(document.getElementById('root')).render(<App />);
