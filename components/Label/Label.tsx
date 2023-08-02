import { LabelProps } from './Label.props';
import styles from './Label.module.css';
import cn from "classnames";

export const Label = ({ size = 's', children, color = 'ghost', href, className, ...props}: LabelProps): JSX.Element => {
    return (
        <div
            className={ cn(styles.label, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.grey]: color == 'grey',
                [styles.success]: color == 'success',
                [styles.primary]: color == 'primary',
            }) }
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};