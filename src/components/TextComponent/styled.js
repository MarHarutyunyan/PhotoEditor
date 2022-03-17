import styled from "styled-components";

export const Textarea = styled.textarea`
  border-color: transparent;
  :focus {
    outline-color: #8f8e92;
    outline-width: 1px;
  }
  background-color: ${(props) => props.layer.meta.highlightColor};
  color: ${(props) => props.layer.meta.color};
  font-size: ${(props) => props.layer.meta.fontSize}px;
  font-family: ${(props) => props.layer.meta.fontFamily};
  letter-spacing: ${(props) => props.layer.meta.letterSpacing}px;
  line-height: ${(props) => props.layer.meta.lineHeight};
`;
