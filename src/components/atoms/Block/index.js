import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Block = styled.div`
  font-family: ${font('grayscale')};
  background-color: ${ifProp('opaque', palette(0, true), 'transparent')};
  color: ${palette({ primary: 2 }, 1)};

  background: linear-gradient(270deg, #138862, #06110f, #54803d, #171d14, #204c68, #020b11);
background-size: 1200% 1200%;

-webkit-animation: blockAnimation 26s ease infinite;
-moz-animation: blockAnimation 26s ease infinite;
animation: blockAnimation 26s ease infinite;

@-webkit-keyframes blockAnimation {
   0%{background-position:0% 50%}
   50%{background-position:100% 50%}
   100%{background-position:0% 50%}
}
@-moz-keyframes blockAnimation {
   0%{background-position:0% 50%}
   50%{background-position:100% 50%}
   100%{background-position:0% 50%}
}
@keyframes blockAnimation {
   0%{background-position:0% 50%}
   50%{background-position:100% 50%}
   100%{background-position:0% 50%}
}
`

Block.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

Block.defaultProps = {
  palette: 'success',
}

export default Block
