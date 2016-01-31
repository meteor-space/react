describe("Space.react.Component", function() {

  const render = function() {
    const value = this.injector.get('someValue');
    return `<div>${value}</div>`;
  };

  const MyES5Component = React.createClass({ render: render });
  class MyES6Component extends React.Component { render: render }

  const MyApp = Space.Application.extend('MyApp', {
    requiredModules: ['Space.messaging'],
    ReactComponents: [
      MyES5Component,
      MyES6Component
    ]
  });

  beforeEach(function() {
    this.app = new MyApp();
  });

  it.pending("makes injector available to ES5 component", function() {

  });

});
