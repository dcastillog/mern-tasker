import history from './history';

export default (target, ctx = {}) => {
  if (ctx.res) {
    console.log(ctx.res, 'redirect');
  } else {
    history.push(target);
  }
};
