import { useEffect, useRef } from "react";

interface UseClickOutsideProps {
  callback: () => void;
}

interface UseClickOutsideReturn {
  ref: React.RefObject<HTMLFormElement>;
}

const useClickOutside = (
  callback: UseClickOutsideProps["callback"]
): UseClickOutsideReturn => {
  const ref = useRef<null | HTMLFormElement>(null); // A reference to the target element

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return { ref };
};

export default useClickOutside;
