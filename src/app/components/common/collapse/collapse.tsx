import * as React from 'react';
import { CollapseStyled } from './collapse.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../theme/default';

interface ICollapseProps {
   label: string
}

interface ICollapseState {
   open: boolean;
}

class Collapse extends React.Component<ICollapseProps, ICollapseState> {

   public constructor(props: ICollapseProps) {
      super(props)
      this.state = {
         open: false
      }
   }

   public toggleCollapise = () => {
      this.setState(prevState => ({
         open: !prevState.open
      }))
   }

   public render(): JSX.Element {

      const { label, children } = this.props;
      const { open } = this.state;

      return (
         <ThemeProvider theme={theme}>
            <CollapseStyled open={open}>
                  <button onClick={this.toggleCollapise} id="collapsible">
                     <i id="right"></i>
                     {label}
                  </button>
                  {open ? <div id='conteudo'>{children}</div> : <div/>}
            </CollapseStyled>
         </ThemeProvider>
      );
      }
}

export { Collapse };