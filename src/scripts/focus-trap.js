const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function getFocusable(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE)).filter(
    (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
  );
}

export function createFocusTrap(container) {
  let previous = null;

  function onKeydown(e) {
    if (e.key !== 'Tab') return;
    const nodes = getFocusable(container);
    if (!nodes.length) {
      e.preventDefault();
      return;
    }
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return {
    activate(focusTarget) {
      previous = document.activeElement;
      container.addEventListener('keydown', onKeydown);
      const target = focusTarget || getFocusable(container)[0];
      target?.focus();
    },
    deactivate() {
      container.removeEventListener('keydown', onKeydown);
      if (previous && typeof previous.focus === 'function') {
        previous.focus();
      }
      previous = null;
    },
  };
}
