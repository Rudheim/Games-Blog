import React, { useContext } from 'react';
import LatestArticle from '../news/LatestArticle'
import Newsfeed from '../news/Newsfeed';
import { ArticleContext } from '../../context/ArticlesContext';
import Carousel from '../news/Carousel';
import Pagination from './Pagination';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';


const cardVariants={
  hidden: { rotateY: 90 },
  visible: { rotateY: 0 , originZ: 0, transition:{ duration: .5}},
  exit: { rotateY: 90, originZ: 0, transition:{ duration: .5}}
}

const HomePage = () => {

  const {data, hotNews} = useContext(ArticleContext);

  return (
    data.length ? (
      <AnimateSharedLayout>
      <div className="col s12 l9">
        <motion.div layout variants={cardVariants} initial="hidden" animate='visible' className="carousel carousel-slider center">
          {hotNews.map(article => { 
            return <Carousel props={article} key={article.id}/> })
          }
        </motion.div>
      <AnimatePresence exitBeforeEnter>
        {data.map(article => {
         return article === data[0] ? 
            <motion.div layout variants={cardVariants} initial="hidden" animate='visible'  exit="exit" key={article.id} className="card main-article" id="main-article">
              <LatestArticle props={article} key={article.id} />
            </motion.div>
           : 
            <motion.div layout variants={cardVariants} initial="hidden" animate='visible'  exit="exit" key={article.id} className="card horizontal">
              <Newsfeed props={article} key={article.id} />
            </motion.div> 
        })}
        <Pagination layout />
        </AnimatePresence>
      </div>
      </AnimateSharedLayout>
    ) : (
      <div className="center error">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
 
export default HomePage;