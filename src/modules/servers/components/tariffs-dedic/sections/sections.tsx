import React from "react";
import { makeStyles } from "@mui/styles";
import { Icon } from "shared/ui/core/components";
import styles from "modules/servers/components/tariffs-dedic/sections/sections-list.module.scss";
import { height } from "@mui/system";
import cx from "classnames";

interface SectionsItem {
  id_container: string | undefined;
  id_box: string;
  id_list: string;
  data: {
    id: number;
    ram: string;
    price: string;
    active?: boolean;
  }[];
}

export const useStyles = makeStyles(() => ({
  mui: {
    height: 200,
    "& .MuiPaper-root": {
      width: 20,
      height: 400,
      backgroundColor: "red"
    }
  }
}));

export const Sections = (props: SectionsItem) => {
  const name_box = props.id_container + props.id_box;
  const name_ul = props.id_container + props.id_list;
  const id_contain = props.id_container;

  function activateSpan(id_container: string | undefined) {
    if (id_container != undefined) {
      const span = document.getElementById(id_container);
      if (span !== null) {
        span.style.display = "flex";
      }
    }
  }

  function activateLink(link: string | undefined) {
    if (link != undefined) {
      const spanLink = document.getElementById(link);
      const select = document.getElementById(name_ul);
      const input = document.getElementById(name_box);

      if (spanLink !== null && select !== null && input !== null) {
        const ram = spanLink.querySelectorAll(".ram");
        const off = select.querySelectorAll<HTMLElement>(".active");
        const active = spanLink.querySelectorAll<HTMLElement>(".active");
        const input_ram = input.querySelectorAll<HTMLElement>(".ram");
        for (let i = 0; i < off.length; i++) {
          console.log(off[i]);
          if (off[i].style.visibility === "visible") {
            off[i].style.visibility = "hidden";
          }
        }

        input_ram[0].textContent = ram[0].textContent;
        select.style.display = "none";
        active[0].style.visibility = "visible";
      }
    }
  }
  if (id_contain !== undefined) {
    return (
      <div className={styles.wrapper_select}>
        <div id={name_box} onClick={() => activateSpan(name_ul)} className={styles.wrapper_select__container}>
          <span className={(styles.option_ram, styles.options, "ram")}>{props.data[0].ram}</span>
          <span className={styles.options_down}>
            <Icon name="down" className={styles.li_icon} />
          </span>
        </div>
        <ul id={name_ul} className={styles.select_list}>
          {props.data.map(option => (
            // eslint-disable-next-line react/jsx-key
            <li
              id={id_contain + option.id + props.id_list}
              onClick={() => activateLink(id_contain + option.id + props.id_list)}
              className={styles.select_list__item}
            >
              <div className={styles.wrapper_option}>
                <span className={cx(styles.option_ram, styles.options, "ram")}>{option.ram}</span>
                <span className={styles.options_price}>{option.price}</span>
                <span className={cx("active", styles.options_active)}>
                  <Icon name="select-check" className={styles.li_icon} />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <h1>Вы неправильно передаёте данныее</h1>;
  }
};

export default Sections;
