import { Component, createElement } from 'react';
import emmiter from '../core/emmiter';
import { debounce } from 'lodash';
import { Events } from '../core/events';

class FeatureCreator extends Component<any>{
  initial: any;
  unsubscribeForceUpdate: any;
  state = { component: null };

  static displayName = 'FeatureCreator';


  constructor(props) {
    super(props);
    const { widget, updater, key } = props;
    this.initial = updater(widget, this.callback);
    this.state = { component: this.initial };
    this.unsubscribeForceUpdate = emmiter.listen((type, key, nextConfig) => {      
      if (type !== Events.updateConfig || key !== widget.key) return;
      widget.config = nextConfig;
      this.initial = updater(widget, this.callback);
      this.setState({ component: this.initial });
    });
  }

  callback = (_component, props, children) => {
    let component;
    if (!_component) component = null;
    if (_component === 'initial') component = this.initial;
    if (typeof _component === 'function') component = createElement(_component, props, children);
    this.setState({ component });
  }

  shouldComponentUpdate(_, next) {
    return next.component !== this.state.component;
  }

  componentWillUnmount() {
    this.unsubscribeForceUpdate();
  }

  render() {
    return this.state.component;
  }
}

export const createFeature = (widget) =>
  createElement(FeatureCreator, {
    widget,
    updater: require(`./${widget.type}`).default
  });