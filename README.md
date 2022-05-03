
![Tag](https://img.shields.io/github/v/tag/cyril-lamotte/jquery.toggle-panel)
![Licence](https://img.shields.io/github/license/cyril-lamotte/jquery.toggle-panel)
![Top language](https://img.shields.io/github/languages/top/cyril-lamotte/jquery.toggle-panel)

# MovingLabel

Display label inside a text field and move to the top on focus.

## Usage

### 1. HTML

```html
<div class="moving-label-wrap">
  <label for="field" class="moving-label">My text field</label>
  <input type="text" name="field" id="field">
</div>

```


### 2. SCSS

```scss
.moving-label-wrap {
  position: relative;
}

.moving-label {
  position: absolute;
  margin: 0;
  cursor: text;
  line-height: 1.2;
  transition: all 400ms, top 200ms;
  color: #003;
  font-weight: normal;
  pointer-events: none;
  transform-origin: 0 50%;
  top: 0;
  left: 10px;
  transform: scale(0.8) translateY(0);
}

// Position at the top of the field.
.moving-label--focus {
  top: 0;
  transform: scale(0.8) translateY(0);
}

// Position at the middle of the field.
.moving-label--empty {
  top: 50%;
  transform: translateY(-50%);
}

```


### 3. JavaScript

```js
import MovingLabel from '../modules/movingLabel';

// Moving labels.
const labelList = document.querySelectorAll('.moving-label');
labelList.forEach((label) => {
  const movingLabel = new MovingLabel(label);
});

```

### 4. Options

```js
{
  classes: {
    focus: 'moving-label--focus',
    empty: 'moving-label--empty',
  },
  onMoveOut: () => {},
  onMoveIn: () => {},
}

```
