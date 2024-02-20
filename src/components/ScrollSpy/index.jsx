import { useRef, useEffect } from "react";

export default () => {
  const ref = useRef([]);

  useEffect(() => {
    console.log(ref);
    const refs = ref.current;
    const observer = new IntersectionObserver(setIsVisible, { threshold: 0.2 });

    function setIsVisible(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }

    if (refs.length > 0) {
      refs.forEach((item) => {
        observer.observe(item);
      });
    }
  }, []);

  const addIndividualRef = (node) => ref.current.push(node);

  return (
    <div className="scroll-spy">
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesqueLorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin,
        libero ut tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nullam sollicitudin, libero ut
        tincidunt luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesqueLorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin,
        libero ut tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nullam sollicitudin, libero ut
        tincidunt luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesqueLorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin,
        libero ut tincidunt luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesqueLorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin,
        libero ut tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nullam sollicitudin, libero ut
        tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam sollicitudin, libero ut tincidunt
        luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesqueLorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin,
        libero ut tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nullam sollicitudin, libero ut
        tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam sollicitudin, libero ut tincidunt
        luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesqueLorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin,
        libero ut tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nullam sollicitudin, libero ut
        tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam sollicitudin, libero ut tincidunt
        luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesqueLorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin,
        libero ut tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nullam sollicitudin, libero ut
        tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam sollicitudin, libero ut tincidunt
        luctus, augue lectus pellentesque
      </p>
      <p ref={addIndividualRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin, libero ut tincidunt luctus, augue lectus pellentesqueLorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin,
        libero ut tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nullam sollicitudin, libero ut
        tincidunt luctus, augue lectus pellentesqueLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam sollicitudin, libero ut tincidunt
        luctus, augue lectus pellentesque
      </p>
    </div>
  );
};
