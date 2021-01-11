import React, { Component } from 'react';

const styles = {
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }
}


class Portfolio extends Component {
  render() {

    const item = {
      sizing: {
        width: '500px',
        margin: '15px'
      },
      image: {
        width: '500px',
        height: '323px',
      }
    }

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return (
          <div key={projects.title} className='portfolio-item' style={item.sizing}>
            <div className='item-wrap'>
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} style={item.image} />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className='portfolio-item'>
              <p>
                <b>{projects.techTitle}</b>
                <br />
                {projects.techUsed}
              </p>

              <a
                href={projects.sourceurl}
                target='_blank'
                className='button sourceCodeButton'
              >
                <i className='fa fa-code'></i> Source Code
              </a>
              <a
                href={projects.url}
                target='_blank'
                className='button liveSitebutton'
              >
                <i className='fa fa-link'></i> Live Site
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='something'>
          <div>
            <h1>Check Out Some of Projects!</h1>

            <div id='portfolio-wrapper' 
              className='nick' style={styles.flex}
              >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
