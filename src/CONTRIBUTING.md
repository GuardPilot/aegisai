# Contributing to AegisAI Website

Thank you for your interest in contributing to the AegisAI website! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+
- Git

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/aegisai-website.git
   cd aegisai-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## 📋 Development Guidelines

### Code Style

We use ESLint and Prettier for code formatting. Please ensure your code follows these standards:

```bash
# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Type checking
npm run type-check
```

### Component Guidelines

1. **Use TypeScript** for all new components
2. **Follow naming conventions**:
   - Components: PascalCase (`MyComponent.tsx`)
   - Files: kebab-case for utilities
   - Functions: camelCase

3. **Component Structure**:
   ```typescript
   import { useLanguage } from './LanguageContext';
   
   interface ComponentProps {
     // Define props with TypeScript
   }
   
   export function ComponentName({ prop }: ComponentProps) {
     const { t } = useLanguage();
     
     return (
       <div className="tailwind-classes">
         {/* Component JSX */}
       </div>
     );
   }
   ```

### Styling Guidelines

1. **Use Tailwind CSS** for styling
2. **Follow the design system** defined in `styles/globals.css`
3. **Avoid custom CSS** unless absolutely necessary
4. **Use design tokens** from the CSS variables
5. **Maintain responsive design**

### Internationalization

1. **All text must be translatable**
2. **Add translations to `LanguageContext.tsx`**
3. **Use the `t()` function** for all user-facing text
4. **Test both Russian and English versions**

Example:
```typescript
// Add to translations object in LanguageContext.tsx
'new.feature.title': {
  ru: 'Новая функция',
  en: 'New Feature'
}

// Use in component
const { t } = useLanguage();
return <h2>{t('new.feature.title')}</h2>;
```

## 🔧 Types of Contributions

### 🐛 Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information
- Screenshots if applicable

### ✨ Feature Requests

For new features:
- Describe the feature and its benefits
- Provide mockups or examples if possible
- Consider internationalization requirements
- Ensure it fits the project's vision

### 🎨 Design Improvements

- Follow the existing design system
- Maintain accessibility standards
- Test on multiple screen sizes
- Consider dark theme compatibility

### 📚 Documentation

- Keep documentation up to date
- Use clear, concise language
- Include code examples
- Test all instructions

## 📝 Pull Request Process

### Before Submitting

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the development guidelines
   - Add/update tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run build    # Ensure it builds
   npm run lint     # Check for linting errors
   npm run type-check # Verify TypeScript
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

### Commit Message Format

We follow conventional commits:
- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` code style changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

### Submitting the PR

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Use a clear, descriptive title
   - Fill out the PR template
   - Link any related issues
   - Add screenshots for UI changes

3. **PR Review Process**
   - Code will be reviewed by maintainers
   - Address any requested changes
   - Ensure CI checks pass
   - Wait for approval and merge

## 🧪 Testing

### Manual Testing

1. **Cross-browser testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

2. **Responsive testing**
   - Mobile (320px+)
   - Tablet (768px+)
   - Desktop (1024px+)

3. **Functionality testing**
   - All navigation links work
   - Contact form submits
   - Language switcher functions
   - Images load properly

### Accessibility Testing

- Use screen readers
- Check keyboard navigation
- Verify color contrast
- Test with assistive technologies

## 🎯 Areas for Contribution

### High Priority
- Performance optimizations
- Accessibility improvements
- Mobile responsiveness
- Browser compatibility

### Medium Priority
- New features
- Design enhancements
- Animation improvements
- SEO optimizations

### Documentation
- Code documentation
- API documentation
- User guides
- Development tutorials

## 🤝 Community Guidelines

### Be Respectful
- Use inclusive language
- Be constructive in feedback
- Help others learn and grow
- Respect different perspectives

### Communication
- Use GitHub issues for bug reports
- Use discussions for questions
- Be clear and concise
- Provide context and examples

## 📋 Issue Templates

### Bug Report Template
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g. Chrome 91]
- Device: [e.g. iPhone 12]
- OS: [e.g. iOS 14.6]
```

### Feature Request Template
```markdown
**Feature Description**
Clear description of the feature.

**Motivation**
Why is this feature needed?

**Proposed Solution**
How should this feature work?

**Alternative Solutions**
Any alternative approaches considered?

**Additional Context**
Any other context or screenshots.
```

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and community discussion
- **Email**: 2025pilot.guard@gmail.com for urgent matters

## 🙏 Recognition

Contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Recognized in project documentation

Thank you for contributing to AegisAI! 🚁✨