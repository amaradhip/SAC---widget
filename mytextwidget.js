class MyTextWidget extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const div = document.createElement('div');
    div.innerText = 'Hello from MyTextWidget!';
    div.style.fontSize = '20px';
    div.style.color = 'blue';
    shadow.appendChild(div);
  }

  connectedCallback() {
    console.log("MyTextWidget connected");
  }
}

customElements.define('my-text-widget', MyTextWidget);
