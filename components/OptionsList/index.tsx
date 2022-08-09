import { StyledProps } from "_";
import { Option, Container4 } from "./styles";
import { useMemo, useState } from "react";
import { RadioButton, Tag } from "#";

type Props = StyledProps<{
  multiSelect?: boolean;
  hasTags?: boolean;
  color?: string;
  items: Array<{ text: string; value: number }>;
  getData?: (data: Array<number>) => void;
}>;

function OptionsListComponent({
  multiSelect = false,
  hasTags = false,
  items,
  color,
  getData,
}: Props): React.ReactElement {
  const [activeSortItem, setActiveSortItem] = useState(1);
  const [selectedItems, setSelectedItems] = useState<Array<number>>();
  const [deletedFilterItems, setDeletedFilterItems] = useState<Array<number>>();

  useMemo(() => {
    if (multiSelect) return;

    setSelectedItems([activeSortItem]);
  }, [activeSortItem]);

  useMemo(() => {
    if (selectedItems && getData) getData(selectedItems);
  }, [selectedItems]);

  useMemo(() => {
    if (!deletedFilterItems) return;

    if (selectedItems)
      setSelectedItems([
        ...selectedItems?.filter((e) => !deletedFilterItems.includes(e)),
      ]);
  }, [deletedFilterItems]);

  return (
    <>
      {hasTags ? (
        <Container4>
          {selectedItems?.map((item, index) => (
            <Tag
              key={index}
              onDelete={(value) => {
                setDeletedFilterItems(
                  deletedFilterItems ? [...deletedFilterItems, value] : [value]
                );
              }}
              item={items.find((e) => e.value === item)}
            />
          ))}
        </Container4>
      ) : null}

      {items.map((item, index) => {
        let isClicked = false;

        return (
          <Option
            key={index}
            onClick={() => {
              if (multiSelect) {
                isClicked = !isClicked;

                if (isClicked === true) {
                  if (selectedItems?.includes(item.value)) return;

                  setDeletedFilterItems(
                    deletedFilterItems
                      ? [...deletedFilterItems?.filter((e) => e !== item.value)]
                      : undefined
                  );
                  setSelectedItems(
                    selectedItems
                      ? [...selectedItems, item.value]
                      : [item.value]
                  );
                } else {
                  setSelectedItems(
                    selectedItems
                      ? [...selectedItems?.filter((e) => e !== item.value)]
                      : undefined
                  );
                }
              } else setActiveSortItem(item.value);
            }}
          >
            <RadioButton
              color={color}
              isActive={
                multiSelect
                  ? selectedItems?.includes(item.value)
                  : activeSortItem === item.value
              }
            />
            {item.text}
          </Option>
        );
      })}
    </>
  );
}

export default OptionsListComponent;
