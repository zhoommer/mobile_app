interface Colors {
  background: string;
  surface: string;
  text_primary: string;
  text_secondary: string;
  input_bg: string;
  button_primary: string;
  button_secondary: string;
  button_text: string;
  success: string;
  error: string;
  icon: string;
  border: string;
}

export interface ThemeType {
  dark: boolean;
  colors: Colors;
}
