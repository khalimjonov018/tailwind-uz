import React from "react";
import { styles } from "./util/style";

const App = () => {
	return (
		<div className="bg-primayr w-full overflow-hidden">
			<div className={`${styles.paddingX}`}>
				<p className="text-primary bg-secondary px-10 py-10"> navbar</p>
			</div>
		</div>
		
	);
};

export default App;
