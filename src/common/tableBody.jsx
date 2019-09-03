import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path)
    }

    createKey = (item, column) => {
        return item._id + (column.path || column.key)
    }

    render() {
        const { data, columns } = this.props;
        return (
            <tbody>
                {data.map(item => (
                    <tr key={item._id}>
                        {columns.map(column => (
                            <td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>))}
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default TableBody;

// < tbody >
//     {
//         movies.map((movie, current) => {
//             return (
//                 <tr key={movie._id}>
//                     <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
//                     <td>{movie.genre.name}</td>
//                     <td>{movie.numberInStock}</td>
//                     <td>{movie.dailyRentalRate}</td>
//                     <td></td>
//                     <td></td>
//                 </tr>
//             )
//         })
//     }
// </tbody>