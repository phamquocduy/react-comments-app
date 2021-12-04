import React from "react";

import * as Styled from "./LayoutFooter.styles";

const LayoutFooter = () => {
  return (
    <Styled.Footer>
      <Styled.FooterWrapper>
        <Styled.FooterLinksWrapper>
          <Styled.FooterLink href="https://github.com/phamquocduy">
            <Styled.FooterLinkIcon />
          </Styled.FooterLink>
        </Styled.FooterLinksWrapper>

        <Styled.FooterLabelWrapper>
          <Styled.CopyrightLabel>&copy; 2021 Phạm Quốc Duy</Styled.CopyrightLabel>
        </Styled.FooterLabelWrapper>
      </Styled.FooterWrapper>
    </Styled.Footer>
  );
};

export default LayoutFooter;
