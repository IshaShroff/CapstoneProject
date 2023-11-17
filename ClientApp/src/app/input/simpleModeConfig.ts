export const simpleModeConfig = {
    start: [
      { regex: /\[CODE GPT\]/, token: 'gpt-response-tag' },
      { regex: /\[USER\]/, token: 'user-tag' },
      { regex: /\[SYSTEM\]/, token: 'system-tag' },
    ],
    meta: {
      dontIndentStates: ['comment'],
      lineComment: '//',
    },
    overlay: [
      { token: 'gpt-response-tag', regex: /\[CODE GPT\]/ },
      // Add other overlay rules as needed
    ],
  };
  