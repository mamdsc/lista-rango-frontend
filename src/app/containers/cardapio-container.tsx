import * as React from 'react';
import { ApiRestaurantes } from '../../services/api-restaurantes';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<{ id: string }> {
}

interface ICardapioContainerState {

}

class CardapioContainer extends React.Component<IProps, ICardapioContainerState> {


   public constructor (props: IProps) {
      super(props);
   }

   async componentDidMount() {
      this.obtemRestaurantes();
   }

   public obtemRestaurantes = async () => {
      const response = await ApiRestaurantes.get(`/restaurants/${this.props.match.params.id}/menu`);

      console.log('mariana', response);
   }

   public render(): JSX.Element {

      return (
         <div></div>
      );
   }
}

export { CardapioContainer };

