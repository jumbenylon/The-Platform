import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.css';
// import { play, arrowRightLongIcon, leftWhiteArrow } from '../../images';

const VARIANT = {
   primary: styles.btnPrimary,
   secondary: styles.btnSecondary,
   white: styles.btnWhite,
  transparent: 'bg-transparent',
   dark: styles.btnDark
}

const OUTLINE = {
   black: styles.blackOutline,
   white: styles.whiteOutline,
   grey: 'border border-[#E0E0E0]'
}

// const ArrowColor = {
//    black: arrowRightLongIcon,
//    white: leftWhiteArrow
// }

const Button = ({
   type = 'button',
   variant = 'primary',
   arrowColor = 'black',
   size,
   children = null,
   icon,
   className = '',
   outline='',
   onClick,
   ...restProps
}) => {
   const classes = classNames(
      styles.btnContainer,
      size && styles.btnFull,
      VARIANT[variant],
      // ArrowColor[arrowColor],
      outline && OUTLINE[outline],
      className,
   );
   return (
      <button {...restProps} type={type} className={classes} onClick={onClick}>
         <span className={icon && (icon === 'video' ? styles.video : '')}>
            {children}
            {/* {icon && <img src={icon === 'video' ? play : ArrowColor[arrowColor]} alt="icon" />} */}
         </span>
      </button>
   );
};

export default Button;

Button.propTypes = {
   variant: PropTypes.string,
   outline: PropTypes.string,
   onClick: PropTypes.func,
   icon: PropTypes.string,
   size: PropTypes.string
}