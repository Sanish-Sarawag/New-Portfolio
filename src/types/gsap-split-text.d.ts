declare module 'gsap/SplitText' {
  export default class SplitText {
    constructor(element: string | Element | Element[] | string[], options?: {
      type?: string;
      charsClass?: string;
      linesClass?: string;
      wordsClass?: string;
      tag?: string;
    });
    
    chars: Element[];
    lines: Element[];
    words: Element[];
    revert(): void;
  }
}
