import './styles/style.css'
import './styles/reset.css'
import { loadData } from './todayStatsLoader'
import { loadForecast } from './forcastLoader';
loadData();
loadForecast();