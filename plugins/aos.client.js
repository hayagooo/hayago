import AOS from 'aos';
import 'aos/dist/aos.css';

export default () => {
    window.AOS = new AOS.init({ disable: 'phone' });
};