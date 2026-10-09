import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'eric-mascote': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        mode?: 'walk' | 'hi' | 'work';
        size?: string;
        speed?: string;
        text?: string;
        mobile?: 'hide' | 'show';
        'hide-below'?: string;
      };
    }
  }
}
