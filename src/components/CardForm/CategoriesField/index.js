import React, { memo, useEffect, useMemo } from "react";
import { ReactComponent as ChevronDownIcon } from "assets/icons/chevron-down.svg";
import MessageError from "../MessageError";
import { useDispatch, useSelector } from "react-redux";
import { GetCardsCategories } from "state/cards/selectors";
import { requestGetCardsCategories } from "state/cards/actions";

const CategoriesField = ({ name, placeholder, defaultValue, error, validationRef }) => {
	const dispatch = useDispatch();
	const { data: categories } = useSelector((state) => GetCardsCategories(state));

	useEffect(() => {
		if (!categories) dispatch(requestGetCardsCategories());
	}, [categories, dispatch]);

	const categoriesItems = useMemo(
		() =>
			categories?.map((category) => (
				<option key={category.id} value={category.id} selected={defaultValue?.id}>
					{category.name}
				</option>
			)),
		[categories, defaultValue],
	);

	return (
		<section className="input select">
			<select name={name} ref={validationRef}>
				<option value="">{placeholder}</option>
				{categories && categoriesItems}
			</select>
			<ChevronDownIcon className="select__icon" />
			{error === "required" && <MessageError message="Seleccione una Categoria" />}
		</section>
	);
};

export default memo(CategoriesField);
