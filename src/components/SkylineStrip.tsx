import skyline from '../assets/skyline1.png';

export default function SkylineStrip() {
  return (
    <div
      className="w-full bg-repeat-x bg-bottom transition dark:brightness-75 dark:contrast-100"
      style={{
        backgroundImage: `url(${skyline})`,
        height: 'clamp(90px, 14vw, 160px)',        // ekran ölçüsünə görə avtomatik hündürlük
        backgroundSize: 'auto clamp(90px, 14vw, 160px)', // şəkil hündürlüyə uyğunlaşdırılır
        backgroundPosition: 'left bottom',        // soldan və aşağıdan başlasın
      }}
    ></div>
  );
}
