import React from 'react';
import { collect, take, skip } from './iterableUtils';
import MatchListPage from './MatchListPage';
import Pager from './Pager';

/**
 * Creates a new pageable match list
 *
 * Props:
 *
 * - matches: A list of matches to render.
 * - perPage: The maximum number of matches to render per page. Defaults to showing all matches.
 * - onMatchClicked: A callback that is invoked once a match list entry is clicked.
 * - initialPage: The page to render initially. Defaults to the first page. This is not zero-indexed.
 */
export default class MatchList extends React.Component {
  static defaultProps = {
    initialPage: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      page: props.initialPage
    };
    this.handleNextPage = this.onNextPageButtonClicked.bind(this);
  }

  render() {
    const { matches, perPage = matches.length, onMatchClicked } = this.props;
    const { page } = this.state;
    const numberOfPages = Math.ceil(matches.length / perPage);
    const elementsToSkip = (page - 1) * perPage;
    const matchesToRender = collect(take(skip(matches, elementsToSkip), perPage));


    return <div>
      <MatchListPage matches={matchesToRender} />
      <Pager pages={numberOfPages}
        currentPage={page}
        onNext={this.handleNextPage} />
    </div>;
  }

  onNextPageButtonClicked() {
    this.setState({
      page: this.state.page + 1
    });
  }
}
