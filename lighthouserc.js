module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'offscreen-images': 'off',
        'uses-webp-images': 'off',
        'unused-javascript': 'off',
        'csp-xss': 'off',
        'bf-cache': 'off',
        'total-byte-weight': ['error', { maxNumericValue: 1000000 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
