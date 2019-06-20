import * as React from 'react';
import { CollapseStyled } from './collapse.styled';

interface ICollapseProps {
   label: string,
   // children: React.ReactNode
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
         <CollapseStyled open={open}>
               <button onClick={this.toggleCollapise} className="collapsible">
                  <i className="right"></i>
                  {label}
               </button>
               {open ? <div>{children}</div> : <div/>}
         </CollapseStyled>
      );
      }
}

export { Collapse };