// Typescript adapted carousel from https://blog.alexdevero.com/create-simple-carousel-react-js/

import * as React from 'react';
import './Carousel.css';

export interface ArrowProps {
  onClick: (e: any) => void;
}
// Component for left arrow
class CarouselLeftArrow extends React.Component<ArrowProps, {}>  {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

  // Component for right arrow
class CarouselRightArrow extends React.Component<ArrowProps, {}>  {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

export interface CarouselIndicatorProps {
  index: number;
  activeIndex: number;
  onClick: (e: any) => void;
}
// Component for carousel indicator
class CarouselIndicator extends React.Component<CarouselIndicatorProps, State>  {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index === this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

export interface CarouselSlideProps {
    index: number;
    activeIndex: number;
    slide: JSX.Element;
}
// Component for slide
class CarouselSlide extends React.Component<CarouselSlideProps, {}>  {
  render() {
    return (
      <li 
        className={ this.props.index === this.props.activeIndex
          ? "carousel__slide carousel__slide--active"
          : "carousel__slide"}
      >
      {this.props.slide}
      </li>);
  }
}

export interface Props {
  cards: Array<JSX.Element>;
}
export interface State {
  activeIndex: number;
}
class Carousel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    render() {
        return (
          <div className="carousel-container">
            <div className="carousel">
            <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} />
    
            <ul className="carousel__slides">
              {this.props.cards.map((card, index) =>
                <CarouselSlide
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  slide={card}
                />
              )}
            </ul>
    
            <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
    
            <ul className="carousel__indicators">
              {this.props.cards.map((card, index) =>
                <CarouselIndicator
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  onClick={e => this.goToSlide(index)}
                />
              )}
            </ul>
          </div>
          </div>
        );
      }
  
    goToSlide(index: number) {
      this.setState({ activeIndex: index });
    }
  
    goToPrevSlide(e: Event) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { cards } = this.props;
      let cardsLength = cards.length;
  
      if (index < 1) {
        index = cardsLength;
      }
  
      --index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    goToNextSlide(e: Event) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { cards } = this.props;
      let cardsLength = cards.length - 1;
  
      if (index === cardsLength) {
        index = -1;
      }
  
      ++index;
  
      this.setState({
        activeIndex: index
      });
    }
}
export default Carousel;