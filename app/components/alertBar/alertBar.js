import styles from "./alertBar.module.css"

const AlertBar = () => {
  return (
    <div className={styles.alertBar}>
      <marquee behavior="scroll" direction="left">
        <font>
          Products sold in Neff&apos;s Store are virtual digital purchase items,
          which are non-refundable and non-exchangeable.
        </font>
        <font>
          Customers should check the menu availability before making a purchase.
        </font>
        <font>
          After purchase, the card code and tutorial link will be automatically
          sent. If unable to find the card code, customers should review the
          tutorial or contact customer service.
        </font>
      </marquee>
    </div>
  );
};

export default AlertBar;
