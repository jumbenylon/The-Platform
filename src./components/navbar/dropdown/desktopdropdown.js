import { Popover, Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
import { Fragment, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../styles/theme";

const DropDownLink = styled.a`
	.title {
		color: ${colors.dark};
	}

	&:hover {
		.title {
      background: ${colors.lightAsh};
      padding: 8px
		}
	}
`;

const DropDownSelect = styled.select`
    
        background-color: transparent;
        border: none;
        margin: 0;
        width: 100%;
        font-family: inherit;
        font-size: 14;
        cursor: inherit;
        line-height: inherit;
        outline: none;
        text-align: center;
        ${'' /* overflow: hidden;     */}
`

export const DesktopHeaderDropdown = ({
	button = "Title",
	items = [],
  width = "fit-content",
  handleLanguageSelect,
  selected
}) => {
	const [shouldShow, setShouldShow] = useState(false);

	return (
		<div className="">
			<Popover
				className="relative"
				onMouseEnter={() => setShouldShow(true)}
				onMouseLeave={() => setShouldShow(false)}
			>
				{({ open }) => (
					<>
						<Popover.Button className="outline-none">{button}</Popover.Button>
						<Transition
							show={shouldShow}
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel
								className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
								style={{
									width: width,
								}}
								static
							>
								<div className="overflow-hidden w-full rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
									<div className="relative space-y-2 bg-white py-4 px-3 pl-4 pr-6 w-full">
										{items.map((item) => (
											<Link key={item.title} href={item?.href} passHref>
												<DropDownLink
													href={item?.href}
													target={item.external ? "_blank" : "_self"}
													rel="noreferrer"
													className="flex items-center -mr-3  bg-white p-2 transition duration-150 ease-in-out  "
												>
													<div className="ml-4">
														<h6
															className="mb-0 title"
														>
															{item.title}
														</h6>
													</div>
												</DropDownLink>
											</Link>
                    ))}
                    {/* {handleLanguageSelect && 
                      <DropDownSelect
                          className="flex items-center -mr-3  bg-white p-2 transition duration-150 ease-in-out "
                          value={selected}
                        onChange={(e) => handleLanguageSelect(e)}
                        multiple
                      >
                        {items.map((item) => (
                          <option value={item.title}>
                          <div className="ml-4">
														<h6
															className="mb-0 title"
														>
															{item.title}
														</h6>
													</div>
                          </option>
                        ))}
                        </DropDownSelect>
                    } */}
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	);
};
