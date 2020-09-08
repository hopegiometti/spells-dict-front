import React from 'react'

// class Search extends React.Component {

//   render() {
//     return ( <div>
//         <div className="ui search">
//           <div className="ui icon input">
//             <input className="prompt" onChange={this.props.onChange} />
//             <i className="search icon" />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Search

export const Search = (props) => {
    return( <div>
        <input onChange={props.onChange}/>
    </div>)
}

export default Search