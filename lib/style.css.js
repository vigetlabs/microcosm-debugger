export default (`
  .debugger-wrapper {
    min-height: 150px;
  }

  .debugger {
    background: #112;
    border-top: 1px solid #001;
    bottom: 0;
    left: 0;
    min-height: 150px;
    position: fixed;
    width: 100%;
    z-index: 1000000;
  }

  .debugger *,
  .debugger *:before,
  .debugger *:after {
    box-sizing: border-box;
  }

  .debugger svg {
    display: block;
    margin: 0;
    width: 100%;
  }

  .debugger .debugger-node {
    cursor: pointer;
  }

  .debugger .debugger-node-label {
    opacity: 0;
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }

  .debugger .debugger-node-marker,
  .debugger .debugger-node-label {
    transition: 0.2s r cubic-bezier(0.54,-0.12, 0.32, 1.28), 0.2s fill, 0.3s opacity;
  }

  .debugger .debugger-node:hover .debugger-node-label {
    opacity: 1;
  }

  .debugger .debugger-node:hover .debugger-node-marker {
    r: 5;
  }

  .debugger .debugger-node:active .debugger-node-marker {
    r: 4;
  }
`);
