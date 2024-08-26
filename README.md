# slidev-addon-jsfiddle

JsFiddle component for [sli.dev](https://sli.dev/)

![example](https://raw.githubusercontent.com/barais/slidev-addon-jsfiddle/main/example-export/001.png)

```md
---
layout: default
addons:
    - slidev-addon-jsfiddle
---

<div class="grid w-full">

<Jsfiddle id="barais/0arqgyw2" width="100%" height="350" /

</div>
```

## Installation

```bash
npm i slidev-addon-jsfiddle
```

### Usage

-   Define this addon in `frontmatter`

```yaml
addons:
    - slidev-addon-jsfiddle
```

-   or in `package.json`

```json
 "slidev": {
    "addons": [
      "slidev-addon-jsfiddle"
    ]
  },
```

## Components

### QRCode

```vue
<Jsfiddle id="barais/0arqgyw2" width="100%" height="350" /
```


