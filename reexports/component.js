import { dependency, dependency2 } from "./dependency";

export function component() {
	dependency();
	dependency2();
}

// change the order of dependency2 and dependency, see the output main.css
// export function component() {
// 	dependency2();
// 	dependency();
// }
