import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput, Clipboard } from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import Container from './Container';
import { connect } from 'react-redux';

export default class GridTile extends React.Component {
  renderElement(element, key) {
    let content = null;
    if (React.isValidElement(element)) {
      content = element;
    } else {
      content = (
        <Text>
          {element}
        </Text>
      );
    }
    return (
      <Col key={key} style={{...styles.col, ...this.props.styles.col}}>
        <View key={key} style={[styles.element, this.props.styles.element]}>
          {content}
        </View>
      </Col>
    );
    // return (
    //   <View key={key} style={[styles.elementContainer, this.props.styles.elementContainer]}>
    //     <View key={key} style={[styles.element, this.props.styles.element]}>
    //       {content}
    //     </View>
    //   </View>
    // );
  }
  renderRow(row, key) {
    return (
      <Row key={key} style={{...styles.row, ...this.props.styles.row}}>
        {row.map((element, i) => this.renderElement(element, i))}
      </Row>
    );
    // return (
    //   <View key={key} style={[styles.row, this.props.styles.row]}>
    //     {row.map((element, i) => this.renderElement(element, i))}
    //   </View>
    // );
  }
  render() {
    const {
      elements,
    } = this.props;
    return (
      <View style={{...styles.grid, ...this.props.styles.grid}}>
        <Grid>
          {elements.map((row, i) => this.renderRow(row, i))}
        </Grid>
      </View>
    );
    // return (
    //   <View style={{...styles.grid, ...this.props.styles.grid}}>
    //     <Container>
    //       {elements.map((row, i) => this.renderRow(row, i))}
    //     </Container>
    //   </View>
    // );
    // return this.renderMatrix(elements);
  }
}

const styles = StyleSheet.create({
  element: {
    padding: 0,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  col: {
    padding: 0,
    alignItems: 'stretch',
    justifyContent: 'center',
    height: '100%',
  },
  row: {
    padding: 0,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
  grid: {
    padding: 0,
    alignItems: 'stretch',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});


GridTile.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.any
    )
  ),
  styles: PropTypes.object
};


GridTile.defaultProps = {
  styles: StyleSheet.create({
    element: {},
    col: {},
    row: {},
    grid: {},
  })
};