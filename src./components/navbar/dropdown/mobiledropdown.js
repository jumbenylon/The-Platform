import { Link } from 'react-router-dom';
import { colors } from '../../../styles/theme';
import styled from "styled-components";

const DropDownLink = styled.a`
	.title {
		color: ${colors.black};
	}

	&:hover {
		.title {
			color: #002ed2;
		}
	}
`;

export const MobileHeaderDropdown = ({
	button = "Title",
	items = [],
	width = "fit-content",
}) => {
	return (
		<div className="">
			<div
				initial={{ height: 0, opacity: 0 }}
				animate={{
					height: "fit-content",
					opacity: 1,
				}}
				exit={{ height: 0, opacity: 0 }}
				transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
				className="pr-5 -mt-4"
			>
				<div className="relative space-y-4 bg-white py-6">
					{items.map((item) => (
						<Link key={item.title} href={item.href} passHref>
							<DropDownLink
								href={item.href}
								target={item.external ? "_blank" : "_self"}
								rel="noreferrer"
								className="flex items-center bg-white py-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 "
							>
								<div className="ml-2.5">
									<h6
										fontSize="14px"
										fontWeight="700"
										fontFamily="montserrat-semi"
										color={colors.black}
										className="mb-0"
									>
										{item.title}
									</h6>
								</div>
							</DropDownLink>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
