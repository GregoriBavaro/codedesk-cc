//Hooks
import { motion as m, AnimatePresence, useIsPresent } from "framer-motion";

// Here i am using a framer motion, a library for easy applying animations
// It handles mount and unmount of components to apply animations
// other similar and a great library is react spring but i mostly choose framer-motion
// because its syntax is much better

const List = (props) => {
  const isPresent = useIsPresent();

  //Styles to apply 
  const animations = {
    style: {
      position: isPresent ? "static" : "absolute",
    },
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: 0.4, delay: 0.1 },
  };

  return (
    <ul>
      <AnimatePresence>
        {props.list
          .filter((item) => {
            return props.search.toLocaleLowerCase().trim(" ") === ""
              ? item
              : item.name.toLocaleLowerCase().trim(" ").includes(props.search);
          })
          .map(({ id, name }) => {
            return (
              <m.li {...animations} key={id}>
                {name}
              </m.li>
            );
          })}
      </AnimatePresence>
    </ul>
  );
};

export default List;
