import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('portfolio-content', 'Integration | Component | portfolio content', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{portfolio-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#portfolio-content}}
      template block text
    {{/portfolio-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
