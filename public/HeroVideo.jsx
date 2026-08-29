export default function HeroVideo() {
  return (
    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
      <source src="https://res.cloudinary.com/ln7kck12/video/upload/bg-video.mp4" type="video/mp4" />
      <source src="https://res.cloudinary.com/ln7kck12/video/upload/bg-video.webm" type="video/webm" />
    </video>
  );
}
