function setup() {
  Alpine.store('model', {
    currentPage: 'home',
    currentLanguage: 'english',
    dialNumber: 'erica.talking@ivr.vc',

    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) this.dialNumber = params.get('number');
    },

    get page() { return this.currentPage; },
    set page(nextPage) { this.currentPage = nextPage; },

    languages: ['english', 'norwegian'],
    get language() { return this.currentLanguage; },
    set language(lang) { this.currentLanguage = lang; },

    get services() {
      // Nur Advice Service
      return [
        { url: this.dialNumber, name: 'Advice' }
      ];
    },
  });
}

document.addEventListener('alpine:init', setup);
