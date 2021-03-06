import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeFilter } from '../../actions/filters';
import { IFilterProps } from '../../interfaces/containers/IFilter';
import GroupButtons from '../../components/GroupButtons';

class Filter extends React.Component<IFilterProps> {
    // Метод клика, отсылает id во внешний обработчик
    handleFilterChange(filter: string) {
        this.props.onChangeFilter(filter);
    }

    constructor(props: IFilterProps) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    render(): JSX.Element {
        return (
            <div>
                <GroupButtons selectedKey = { this.props.filter }
                              items = {[
                                  { id: 'all', title: 'Все заказы' },
                                  { id: 'avia', title: 'Авиабилеты' },
                                  { id: 'hotel', title: 'Отели' },
                                  { id: 'railways', title: 'ЖД билеты' },
                                  { id: 'cars', title: 'Аренда авто' }
                              ]}
                              handleChange = { this.handleFilterChange }/>
            </div>
        );
    }
}

export default connect(
    state => ({
        filter: state.filters.filter,
    }),
    dispatch => ({
        onChangeFilter: bindActionCreators(changeFilter, dispatch),
    })
)(Filter);
