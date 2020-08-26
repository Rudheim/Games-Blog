import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ArticleContext } from '../../context/ArticlesContext';
import { motion } from 'framer-motion';
import CategoriyNavigation from './CategoryNavigation';

const cardVariants={
  hidden: { y: -500},
  visible: { y: 0, transition: { delay: .5, type: 'spring', damping: 15 } } }

const Categories = () => {

  let location = useLocation().pathname;
  const {data} = useContext(ArticleContext)

  return (
    !!data.length && location !== '/signin' && location !== '/createarticle' && location !== '/signup' && (
      <motion.div variants={cardVariants} initial='hidden' animate='visible' className="col l3 hide-on-med-and-down">
        <div className="categories">
        <h6 className="white-text center">Категории</h6>
          <CategoriyNavigation />
        </div>
      </motion.div>
    )
  );
}
 
export default Categories;