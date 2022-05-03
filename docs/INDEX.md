
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

Name                    | Type   | Description                                                 | Default or options
------------------------|--------|-------------------------------------------------------------|-------------------
prefix                  | String | Generated classes prefix                                    | 'tgp-'
panel                   | String | the panel can be the next element or defined by its id      | 'id' (need data-tgp-panel-id attribute) / 'next' / 'function' / selector (default: 'next')
panelLabel              | String | Label for accessibility                                     | 'Panel'
event                   | String | Type of event wich trigger action                           | 'click' / 'mouseover'  (default: 'click')
mode                    | String | Apparition mode                                             | 'slide' / 'toggle' / 'custom' (default: 'slide')
customShow & customHide | Method | If 'mode' setting = 'custom', this functions will be called | function($panel, $trigger) {}
wrapper                 | Object | Wrapper of connected panels                                 | false
connect                 | Bool   | If true, only one panel can be shown (need wrapper setting) | false
selfClose               | Bool   | Allow the trigger to close its panel                        | true
removetitle             | Bool   | Disable titles on triggers                                  | true
disableFirstLevel       | Bool   | Disable clicks on the first levels (don't follow the links) | true
autoFocus               | Bool   | Focus is moved to panel at opening                          | true
returnFocus             | Bool   | Return focus to the trigger after closing                   | true
autoHide                | Bool   | Close panel after mouse leaving with delay                  | false
delay                   | Bool   | Delay for auto-hiding                                       | 300
onShow()                | Method | Do stuff after showing                                      | function($panel, $trigger) {}
onShowEnd() & onHideEnd | Method | Do stuff after sliding FX                                   | function($panel, $trigger) {}
onHide()                | Method | Do stuff after hiding                                       | function($panel, $trigger) {}
findPanel()             | Method | If 'panel' setting = "function", this function will be called, must return a valid element (the content panel) | function() {}


### 5. Events

Name                 | Description
---------------------|----------------------------------------
no-autofocus.tgp     | Remove autofocus after initialisation
show.tgp             | Show panel
hide.tgp             | Hide panel
destroy.tgp          | Remove all events and generated HTML.

