declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = 'RECAPTCHA_SITE_KEY_PLACEHOLDER';

export const executeRecaptcha = async (action: string): Promise<string> => {
  if (RECAPTCHA_SITE_KEY === 'RECAPTCHA_SITE_KEY_PLACEHOLDER') {
    return 'no-recaptcha-configured';
  }

  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error('reCAPTCHA не загружена'));
      return;
    }

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  });
};