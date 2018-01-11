export function overwriteLocalStorage(setCallback, clearCallback) {
  let originalSetItem = window.localStorage.setItem;
  let originalClear = window.localStorage.clear;

  localStorage.setItem = function() {
    const event = new Event('storageChanged')
    document.dispatchEvent(event)

    originalSetItem.apply(this, arguments)
  }

  localStorage.clear = function() {
    const event = new Event('storageCleared')
    document.dispatchEvent(event)

    originalClear.apply(this, arguments)
  }

  document.addEventListener("storageChanged", setCallback, false)
  document.addEventListener("storageCleared", clearCallback, false)
}
