export default function (label) {
  const settings = {
    input: label.nextElementSibling,
    focusedClass: 'moving-label--focus',
  };

  init();

  function init() {
    // Exit if there is no input.
    if (settings.input === null) {
      return;
    }

    // If the input has focus at load, move the label out.
    if (settings.input === document.activeElement) {
      moveFocusOut();
    }

    // If input has placeholder, move the label out (and do not apply event
    // listeners).
    if (settings.input.hasAttribute('placeholder')) {
      moveFocusOut();
      return;
    }

    // Move focus on load if the field isn't empty.
    if (settings.input !== null && settings.input.value) {
      moveFocusOut();
    }

    // Focus on input.
    settings.input.addEventListener('focus', moveFocusOut);
    settings.input.addEventListener('blur', moveFocusIn);
    settings.input.addEventListener('refresh', placeLabel);
  }

  /**
   * Move the label out.
   *
   * @return {void}
   */
  function moveFocusOut() {
    label.classList.add(settings.focusedClass);
  }

  /**
   * Restore label position if field is empty.
   *
   * @return {void}
   */
  function moveFocusIn() {
    if (!settings.input.value) {
      label.classList.remove(settings.focusedClass);
    }
  }

  /**
   * Restore label position if field is empty.
   *
   * @return {void}
   */
  function placeLabel() {
    if (!settings.input.value) {
      moveFocusIn();
    } else {
      moveFocusOut();
    }
  }

  /**
   * Remove all events & classes.
   *
   * @return {void}
   */
  function destroy() {
    // Remove classes.
    label.classList.remove(settings.focusedClass);

    // Remove events
    label.removeEventListener('focus', moveFocusOut);
    label.removeEventListener('blur', moveFocusIn);
  }
}
