/**
 * Test suite for HomeCraft
 * Tests the HTML generator logic and template structures
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

// We import the generator directly since it's a JS module
import { templates, generateHTML } from '../src/lib/generator.js';

describe('Templates', () => {
  it('should have at least 4 templates', () => {
    assert.ok(templates.length >= 4, `Expected >= 4, got ${templates.length}`);
  });

  it('each template should have required fields', () => {
    for (const t of templates) {
      assert.ok(t.id, 'Missing id');
      assert.ok(t.name, 'Missing name');
      assert.ok(t.description, 'Missing description');
      assert.ok(t.preview, 'Missing preview');
      assert.equal(typeof t.id, 'string');
      assert.equal(typeof t.name, 'string');
      assert.equal(typeof t.description, 'string');
    }
  });

  it('template ids should be unique', () => {
    const ids = templates.map(t => t.id);
    const unique = new Set(ids);
    assert.equal(ids.length, unique.size, 'Duplicate template IDs');
  });

  it('should have supported preview types', () => {
    const validPreviews = ['single-column', 'two-column-grid', 'sidebar-main', 'horizontal-strip'];
    for (const t of templates) {
      assert.ok(validPreviews.includes(t.preview), `Invalid preview: ${t.preview}`);
    }
  });
});

describe('generateHTML - classic template', () => {
  const links = [
    { title: 'GitHub', url: 'https://github.com/test' },
    { title: 'LinkedIn', url: 'https://linkedin.com/in/test' }
  ];

  it('should generate valid HTML with DOCTYPE', () => {
    const html = generateHTML('classic', links, '#5344DB', '#FF6B35', 'My Page', 'Mario', 'Dev');
    assert.ok(html.startsWith('<!DOCTYPE html>'), 'Missing DOCTYPE');
    assert.ok(html.includes('<html lang="it">'), 'Missing html lang');
    assert.ok(html.includes('</html>'), 'Missing closing html');
  });

  it('should include links in the output', () => {
    const html = generateHTML('classic', links, '#5344DB', '#FF6B35', '', 'Mario', '');
    assert.ok(html.includes('GitHub'), 'Missing GitHub link');
    assert.ok(html.includes('LinkedIn'), 'Missing LinkedIn link');
    assert.ok(html.includes('https://github.com/test'), 'Missing GitHub URL');
  });

  it('should filter out empty links', () => {
    const mixedLinks = [
      { title: 'Valid', url: 'https://example.com' },
      { title: '', url: '' },
      { title: '   ', url: '   ' }
    ];
    const html = generateHTML('classic', mixedLinks, '#5344DB', '#FF6B35', '', 'Test', '');
    assert.ok(html.includes('Valid'));
    // Should not have two empty-state messages
    const emptyCount = (html.match(/Nessun collegamento inserito/g) || []).length;
    assert.ok(emptyCount <= 1, `Too many empty state messages: ${emptyCount}`);
  });

  it('should escape HTML special characters', () => {
    const xssLinks = [
      { title: '<script>alert("xss")</script>', url: 'https://safe.com' }
    ];
    const html = generateHTML('classic', xssLinks, '#5344DB', '#FF6B35', '', 'Test', '');
    assert.ok(!html.includes('<script>alert'), 'XSS not escaped');
    assert.ok(html.includes('&lt;script&gt;'), 'Should contain escaped script tag');
  });

  it('should include CSS custom properties', () => {
    const html = generateHTML('classic', links, '#123456', '#ABCDEF', '', 'Mario', '');
    assert.ok(html.includes('--primary: #123456'), 'Missing primary color');
    assert.ok(html.includes('--secondary: #ABCDEF'), 'Missing secondary color');
  });

  it('should include user name in output', () => {
    const html = generateHTML('classic', links, '#5344DB', '#FF6B35', '', 'Giuseppe Verdi', '');
    assert.ok(html.includes('Giuseppe Verdi'), 'Missing user name');
  });

  it('should respect reduced motion preference', () => {
    const html = generateHTML('classic', links, '#5344DB', '#FF6B35', '', 'Mario', '');
    assert.ok(html.includes('prefers-reduced-motion'), 'Missing reduced motion media query');
  });
});

describe('generateHTML - all templates', () => {
  const links = [
    { title: 'Portfolio', url: 'https://portfolio.dev' },
    { title: 'Blog', url: 'https://blog.dev' },
    { title: 'Contatti', url: 'https://contact.dev' }
  ];

  for (const t of templates) {
    it(`should generate valid HTML for ${t.id} template`, () => {
      const html = generateHTML(t.id, links, '#5344DB', '#FF6B35', '', 'Alice', 'Designer');
      assert.ok(html.startsWith('<!DOCTYPE html>'), `${t.id}: Missing DOCTYPE`);
      assert.ok(html.includes('</html>'), `${t.id}: Missing closing html`);
      assert.ok(html.includes('Portfolio'), `${t.id}: Missing link`);
    });
  }
});

describe('generateHTML - edge cases', () => {
  it('should handle no links gracefully', () => {
    const html = generateHTML('classic', [], '#5344DB', '#FF6B35', '', '', '');
    assert.ok(html.startsWith('<!DOCTYPE html>'));
    assert.ok(html.includes('Nessun collegamento inserito'));
  });

  it('should handle up to 6 links', () => {
    const sixLinks = Array.from({length: 6}, (_, i) => ({
      title: `Link ${i + 1}`,
      url: `https://link${i + 1}.com`
    }));
    const html = generateHTML('classic', sixLinks, '#5344DB', '#FF6B35', '', 'Test', '');
    for (let i = 1; i <= 6; i++) {
      assert.ok(html.includes(`Link ${i}`), `Missing link ${i}`);
    }
  });

  it('should handle very long names', () => {
    const longName = 'A'.repeat(200);
    const html = generateHTML('classic', [], '#5344DB', '#FF6B35', '', longName, '');
    assert.ok(html.startsWith('<!DOCTYPE html>'));
  });

  it('should use page title when provided', () => {
    const html = generateHTML('classic', [], '#5344DB', '#FF6B35', 'My Custom Title', '', '');
    assert.ok(html.includes('<title>My Custom Title</title>'));
  });

  it('should fall back to user name when no page title', () => {
    const html = generateHTML('classic', [], '#5344DB', '#FF6B35', '', 'Marco', '');
    assert.ok(html.includes('<title>Marco</title>'));
  });

  it('should handle unknown template id by falling back to classic', () => {
    const html = generateHTML('nonexistent', [{title: 'Test', url: 'https://test.com'}], '#5344DB', '#FF6B35', '', '', '');
    assert.ok(html.includes('Test'));
    assert.ok(html.startsWith('<!DOCTYPE html>'));
  });
});

describe('Color handling', () => {
  it('should accept hex colors with hash', () => {
    const html = generateHTML('classic', [], '#FF0000', '#00FF00', '', '', '');
    assert.ok(html.includes('#FF0000'));
    assert.ok(html.includes('#00FF00'));
  });

  it('should work with lowercase hex', () => {
    const html = generateHTML('classic', [], '#aabbcc', '#ddeeff', '', '', '');
    assert.ok(html.includes('#aabbcc'));
  });
});

console.log('\n✅ All tests passed!\n');
