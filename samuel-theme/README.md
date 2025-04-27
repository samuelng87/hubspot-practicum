# HubSpot Theme Development Practicum

This repository contains a HubSpot theme developed during the HubSpot Theme Development Practicum. The theme demonstrates the use of HubL (HubSpot Markup Language) and various HubSpot design tools.

## What is HubL?

HubL is HubSpot's proprietary templating language that enables developers to:

- Create dynamic content using variables, filters, and functions
- Build modular, reusable templates 
- Access HubSpot's CRM data within templates
- Implement conditional logic in templates
- Create custom modules for content editors

HubL syntax is similar to Jinja2 and uses double curly braces `{{ }}` for variables and `{% %}` for statements.

## Getting Started

### Prerequisites

- [HubSpot CLI](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)
- Node.js and npm
- A HubSpot developer account

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/hubspot-practicum-theme.git
```

2. Install HubSpot CLI:
```bash
npm install -g @hubspot/cli
```

3. Authenticate with HubSpot:
```bash
hs auth
```

4. Upload the theme to your HubSpot account:
```bash
hs upload samuel-theme samuel-theme
```

## Theme Structure

samuel-theme/
├── css/
│   └── main.css          # Main stylesheet with theme variables
├── js/
│   └── main.js           # JavaScript file
├── modules/              # Custom modules
│   └── two-column.module/ 
│       ├── module.html   # Module template
│       ├── fields.json   # Module fields definition
│       ├── meta.json     # Module metadata
│       └── module.css    # Module-specific styles
├── templates/
│   ├── basic.html        # Basic page template
│   └── partials/         # Reusable template parts
│       ├── header.html   # Header partial
│       └── footer.html   # Footer partial
├── fields.json           # Theme fields definition
├── theme.json            # Theme metadata
└── README.md             # This documentation

## Key Features

### Theme Fields

The theme includes extensive customization options:

- **📊 Color Settings**
  - Brand color palette management
  - Background and text colors
  - Accent and highlight colors

- **📝 Typography Settings**
  - Font family selection with Google Fonts integration
  - Font size, weight, and line height controls
  - Heading and body text customization

- **📏 Layout Controls**
  - Spacing and padding adjustments
  - Container width settings
  - Responsive breakpoint management

### Drag and Drop Areas

The theme features HubSpot's powerful drag and drop system:

- `{% dnd_area %}` - Creates editor-friendly content regions
- `{% dnd_section %}` - Divides content into manageable sections
- `{% dnd_row %}` - Organizes horizontal content flows
- `{% dnd_column %}` - Builds responsive column layouts
- `{% dnd_module %}` - Inserts editable content modules

### Responsive Design

- Mobile-first approach
- Flexbox and CSS Grid layouts
- Responsive typography and spacing
- Optimized for all device sizes

## Development Process

1. **Planning & Architecture**
   - Defined site structure and user needs
   - Established theme requirements and customization options

2. **Core Structure Development**
   - Created basic theme framework
   - Implemented header and footer partials
   - Set up theme settings and global variables

3. **Template Development**
   - Built flexible page templates
   - Implemented drag and drop sections
   - Created reusable content modules

4. **Styling & Interactivity**
   - Developed responsive CSS framework
   - Implemented theme color and typography variables
   - Added JavaScript functionality

5. **Testing & Optimization**
   - Cross-browser testing
   - Mobile responsive testing
   - Performance optimization

## Common Issues and Solutions

### Theme Variable Usage

```css
/* Using theme variables in CSS */
.element {
  color: {{ theme.text_color.color }};
  background-color: {{ theme.background_color.color }};
  font-family: {{ theme.font.font }}, {{ theme.font.fallback }};
  padding: {{ theme.spacing.element }}px;
}
```

### Menu Styling

```css
/* Styling the HubSpot menu */
.hs-menu-wrapper ul li a {
  color: {{ theme.text_color.color }} !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: opacity 0.2s ease;
}

.hs-menu-wrapper ul li a:hover {
  opacity: 0.8;
}
```

### Custom Module Development Tips

1. **Define fields clearly**:
```json
{
  "name": "image",
  "label": "Image",
  "required": true,
  "type": "image"
}
```

2. **Use conditional rendering**:
```hubl
{% if module.show_section %}
  <div class="optional-section">
    {{ module.optional_content }}
  </div>
{% endif %}
```

3. **Add helpful labels and descriptions**:
```json
{
  "name": "button_text",
  "label": "Button Text",
  "help_text": "Text that will appear on the button",
  "type": "text"
}
```

## Resources

- [HubSpot Developers Documentation](https://developers.hubspot.com/docs/cms/hubl)
- [HubL Reference](https://developers.hubspot.com/docs/cms/hubl/reference)
- [HubSpot CMS Boilerplate](https://github.com/HubSpot/cms-theme-boilerplate)
- [HubSpot CLI Documentation](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)
- [HubSpot Developer Community](https://community.hubspot.com/t5/HubSpot-Developers/ct-p/developers)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Created By

Developed as part of the HubSpot Theme Development Practicum

---

⭐ **Found this useful?** Star this repository on GitHub!

Happy theming! 🎉# HubSpot Theme Development Practicum

This repository contains a HubSpot theme developed during the HubSpot Theme Development Practicum. The theme demonstrates the use of HubL (HubSpot Markup Language) and various HubSpot design tools.

## What is HubL?

HubL is HubSpot's proprietary templating language that enables developers to:

- Create dynamic content using variables, filters, and functions
- Build modular, reusable templates 
- Access HubSpot's CRM data within templates
- Implement conditional logic in templates
- Create custom modules for content editors

HubL syntax is similar to Jinja2 and uses double curly braces `{{ }}` for variables and `{% %}` for statements.

## Getting Started

### Prerequisites

- [HubSpot CLI](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)
- Node.js and npm
- A HubSpot developer account

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/hubspot-practicum-theme.git
```

2. Install HubSpot CLI:
```bash
npm install -g @hubspot/cli
```

3. Authenticate with HubSpot:
```bash
hs auth
```

4. Upload the theme to your HubSpot account:
```bash
hs upload samuel-theme samuel-theme
```

## Theme Structure