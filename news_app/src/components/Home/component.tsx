import * as React from 'react'; 

import NewsItem from "../news/NewsItem";
import { Article } from "../../entities/Article";

import './style.css';

export interface IAppProps {
    error: any;
    isLoaded: false;
    articles: [];
}  

export default class Home extends React.Component {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
          error: '',
          isLoaded: false,
          articles: []
        };
    }

    componentDidMount() {
      fetch("http://localhost:4000/articles")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              articles: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    

    public render() {
        const localState: any = this.state;

        if (localState.error) {
            return <div>Error: {localState.error!.message}</div>;
        } else if (!localState.isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
              <div className="NewsItemContainer">
                  {localState.articles.map( (item: Article) => (
                    <NewsItem item={item} key={item.id}></NewsItem>
                  ))}
              </div>
            );
        }
    }
}