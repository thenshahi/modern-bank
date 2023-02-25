import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
	<section className={`${styles.flexCenter} my-4`}>
		<div className={`${styles.flexCenter} flex-wrap w-full`}>
			{clients.map((client) => (
				<div
					key={client.id}
					className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
				>
					{/* TO DO: make it so hovering over these images highlights in white*/}
					<img
						src={client.logo}
						alt="clients"
						className="sm:w-[192px] w-[100px] object-contain"
					/>
				</div>
			))}
		</div>
	</section>
);

export default Clients;
