// custom header element
class MyFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <footer>
        <div class="footer_box spacing">
            <p>© 2021 - 2023 tantemeeuw</p>
            <p class="smallp">
                Powerd By <a href="https://rutger505.github.io/" target="blank">Rutger</a>
            </p>
        </div>
    </footer> 
    `;
  }
}
customElements.define("custom-footer", MyFooter);
