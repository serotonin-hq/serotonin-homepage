import { useEffect, useRef } from "react";
import { cn } from "~/utils/cn";

export default function SearchLight({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0;
    let y = 0;
    let lastX = 0;
    let lastY = 0;
    let aspect = 1;
    let animationFrame = 0;

    let lastTime = Date.now();
    function animate() {
      if (!ref.current) return;
      const delta = (Date.now() - lastTime) / 100;
      const deltaX = (x - lastX) * delta;
      const deltaY = (y - lastY) * delta;
      lastX = lastX + deltaX;
      lastY = lastY + deltaY;

      ref.current.style.backgroundPositionX = `${lastX}px`;
      ref.current.style.backgroundPositionY = `${lastY}px`;
      ref.current.style.backgroundSize = `100% ${aspect * 100}%`;
      ref.current.style.backgroundImage =
        "radial-gradient(white, transparent 30%)";
      animationFrame = requestAnimationFrame(animate);
      lastTime = Date.now();
    }

    animationFrame = requestAnimationFrame(animate);

    function move(e: MouseEvent) {
      if (!ref.current) return;
      const offsetX = ref.current.offsetLeft;
      const offsetY = ref.current.offsetTop;
      aspect = ref.current.clientWidth / ref.current.clientHeight;
      const halfH = (aspect * ref.current.clientHeight) / 2;
      const halfW = ref.current.clientWidth / 2;
      x = e.clientX - offsetX - halfW;
      y = e.clientY - offsetY - halfH;
    }
    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("bg-clip-text bg-white/30 bg-no-repeat", className)}
      {...props}
    />
  );
}
