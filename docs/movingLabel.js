export default class MovingLabel {
  constructor(label, settings = {}) {
    // Merge user's settings.
    this.settings = {
      classes: {
        focus: 'moving-label--focus',
        empty: 'moving-label--empty',
      },
      onMoveOut: () => {
        // Do nothing.
      },
      onMoveIn: () => {
        // Do nothing.
      },
      ...settings,
    };

    this.label = label;

    // Get input from the for attribute.
    const id = label.getAttribute('for');
    this.input = document.getElementById(id);

    // Otherwise, use the next element.
    if (!this.input) {
      this.input = label.nextElementSibling;
    }

    // Throw a warning message & exit if there is no input.
    if (!this.input) {
      console.warn('There is no matching input for this label element', label);
      return;
    }

    // Automaticaly move label out for the date inputs.
    if (this.input.type === 'date') {
      this.moveLabelOut();
      this.allwaysOut = true;
      return;
    }

    this.init();
  }

  init() {
    // If the input has focus at load, move the label out.
    if (this.input === document.activeElement) {
      this.moveLabelOut();
    }

    // If input has placeholder, move the label out (and do not apply event
    // listeners).
    if (this.input.hasAttribute('placeholder')) {
      this.moveLabelOut();
      return;
    }

    // Move label in on load if the field is empty.
    if (!this.input.value) {
      this.moveLabelIn();
    }

    // Focus on input.
    this.input.addEventListener('focus', this.moveLabelOut);
    this.input.addEventListener('blur', this.moveLabelIn);
    this.input.addEventListener('refresh', this.placeLabel);
  }

  /**
   * Move the label out.
   *
   * @return {void}
   */
  moveLabelOut = () => {
    this.label.classList.add(this.settings.classes.focus);
    this.label.classList.remove(this.settings.classes.empty);

    // Callback.
    this.settings.onMoveOut();
  };

  /**
   * Restore label position if field is empty.
   *
   * @return {void}
   */
  moveLabelIn = () => {
    if (!this.input.value) {
      this.label.classList.add(this.settings.classes.empty);
      this.label.classList.remove(this.settings.classes.focused);
    }

    // Callback.
    this.settings.onMoveIn();
  };

  /**
   * Restore label position if field is empty.
   *
   * @return {void}
   */
  placeLabel() {
    if (!this.input.value) {
      this.moveLabelIn();
    } else {
      this.moveLabelOut();
    }
  }

  /**
   * Remove all events & classes.
   *
   * @return {void}
   */
  destroy() {
    // Remove classes.
    this.label.classList.remove(this.settings.classes.focus);
    this.label.classList.remove(this.settings.classes.empty);

    // Remove events
    this.label.removeEventListener('focus', this.moveLabelOut);
    this.label.removeEventListener('blur', this.moveLabelIn);
  }
}
