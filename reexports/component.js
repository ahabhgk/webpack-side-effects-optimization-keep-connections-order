// First
import { dependency, dependency2 } from "./dependency";
// Second
import * as styles from "./component.css";

export function component() {
	dependency();
	dependency2();
	styles !== undefined;
}

// change the order of dependency2 and dependency, see the output main.css
// export function component() {
// 	dependency2();
// 	dependency();
// 	styles !== undefined;
// }
