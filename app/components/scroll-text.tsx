import { useCallback, useEffect, useRef } from "react";

const MAX_STEPS = 5;

interface ScrollText extends React.HTMLProps<HTMLSpanElement> {
  hoverable?: boolean;
}

export default function ScrollText({
  hoverable,
  className,
  ...props
}: ScrollText) {
  const ref = useRef<HTMLSpanElement>(null);
  const textContent = useRef<string>("");

  const animate = useCallback(() => {
    if (!ref.current) return;
    if (!textContent.current)
      textContent.current = ref.current.textContent ?? "";

    let step = 0;
    const int = setInterval(() => {
      if (!ref.current) return clearInterval(int);
      if (step >= MAX_STEPS) {
        ref.current.textContent = textContent.current;
        return clearInterval(int);
      }

      ref.current.textContent = shuffle(textContent.current);
      step++;
    }, 60);

    return () => clearInterval(int);
  }, []);
  useEffect(() => animate(), [animate]);

  return (
    <span
      ref={ref}
      onMouseEnter={hoverable ? animate : undefined}
      {...props}
      className={className}
    />
  );
}

function shuffle(t: string) {
  const a = t.split(""),
    n = a.length;

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    if (/[^a-zA-Z0-9]+/.test(a[i] + a[j])) continue;
    a[i] = a[j];
    a[j] = tmp;
  }

  return a.join("");
}
