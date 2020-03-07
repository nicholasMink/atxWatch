import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Breadcrumbs.scss';

function Breadcrumbs(props) {
  const { url = '' } = props;
  const breadcrumbArr = url.split('/');
  const breadcrumbs = breadcrumbArr.map((bcrumb, i) => {
    if (i + 1 === breadcrumbArr.length) {
      return (
        <p key={bcrumb} className="breadcrumb breadcrumb-current">
          {bcrumb}
        </p>
      );
    }
    return (
      <Fragment key={bcrumb}>
        <a className="breadcrumb" href={`/${bcrumb}`} onClick={e => console.log(e)}>
          {bcrumb}
        </a>
        <span className="breadcrumb-spacer">/</span>
      </Fragment>
    );
  });
  breadcrumbs.unshift(
    <Fragment key="home">
      <a href="/" className="breadcrumb">
        Home
      </a>
      {Boolean(url.length) && <span className="breadcrumb-spacer">/</span>}
    </Fragment>
  );
  return <div className="breadcrumb-container">{breadcrumbs}</div>;
}

Breadcrumbs.propTypes = {
  url: PropTypes.string,
};

export default Breadcrumbs;
