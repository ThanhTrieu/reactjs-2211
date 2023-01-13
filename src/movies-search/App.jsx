import React from "react";
import { Row, Col } from "antd";
import SearchMovies from "./components/Search";
import ListMovies from "./components/ListMovies";
import { searchMovieByName } from "./services/api";

export default class Moives extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            movies: [],
            show: false
        }
    }

    onSearchMoview = async (name) => {
        if(name.trim().length > 0){
            // nguoi dung thuc su nhap tu khoa
            this.setState({...this.state, loading: true, show: false });
            // goi api de xu ly
            const dataMovies = await searchMovieByName(name);
            //console.log(dataMovies);
            if(dataMovies.hasOwnProperty('results')){
                // co data
                this.setState({movies : []}, () => this.setState({
                    ...this.state,
                    show: true,
                    movies: dataMovies.results
                }))
            }
            this.setState({...this.state, loading: false});
        }
    }

    render() {
        return (
            <Row>
                <Col span={20} offset={2}>
                    <SearchMovies
                        loading={this.state.loading}
                        search={this.onSearchMoview}
                    />
                    <ListMovies
                        show={this.state.show}
                        movies={this.state.movies}
                    />
                </Col>
            </Row>
        )
    }
}