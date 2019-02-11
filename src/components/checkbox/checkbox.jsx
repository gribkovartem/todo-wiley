// import * as React from 'react';

// import { Input } from '../input';

// import styles from './checkbox.module.sass';

// const checkbox = BEM(styles);

// const CheckboxInput = styled.input``;
// const CheckboxCheck = checkbox.check('span');

// export const Checkbox = checkbox(
//     ({ className, label, value = false, onChange, ...restProps }) => {
//         return (
//             <label className={className}>
//                 <CheckboxInput
//                     type="checkbox"
//                     checked={Boolean(value)}
//                     value={value}
//                     onChange={({
//                         target: { checked: c },
//                     }) => onChange(c)}
//                     onKeyPress={({
//                         key,
//                         currentTarget: { checked: c },
//                     }) => {
//                         if (key === 'Enter') {
//                             onChange(!c);
//                         }
//                     }}
//                     {...restProps}
//                 />
//                 <CheckboxCheck />
//                 {label && <span>{label}</span>}
//             </label>
//         );
//     },
// );
