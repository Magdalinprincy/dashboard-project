import { useState, useEffect } from 'react';
import style from './main.module.css';
import CloudAccounts from './CloudAccounts';
import CloudAccountRisk from './CloudAccountRisk';
import Addwidget from './Addwidget';
import RiskAssessmentChart from './RiskAssessmentChart';
import ImageSecurityChart from './ImageSecurityChart';

const Mainpage = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cloudAccountsChecked, setCloudAccountsChecked] = useState(true);
  const [cloudAccountAssessmentChecked, setCloudAccountAssessmentChecked] =
    useState(true);
  const [workloadProtectionChecked, setWorkloadProtectionChecked] =
    useState(true);
  const [vulnerabilityManagementChecked, setVulnerabilityManagementChecked] =
    useState(true);

  const [tempCloudAccountsChecked, setTempCloudAccountsChecked] =
    useState(cloudAccountsChecked);
  const [
    tempCloudAccountAssessmentChecked,
    setTempCloudAccountAssessmentChecked,
  ] = useState(cloudAccountAssessmentChecked);
  const [tempWorkloadProtectionChecked, setTempWorkloadProtectionChecked] =
    useState(workloadProtectionChecked);
  const [
    tempVulnerabilityManagementChecked,
    setTempVulnerabilityManagementChecked,
  ] = useState(vulnerabilityManagementChecked);

  useEffect(() => {
    if (isCardOpen) {
      setTempCloudAccountsChecked(cloudAccountsChecked);
      setTempCloudAccountAssessmentChecked(cloudAccountAssessmentChecked);
      setTempWorkloadProtectionChecked(workloadProtectionChecked);
      setTempVulnerabilityManagementChecked(vulnerabilityManagementChecked);
    }
  }, [isCardOpen]);

  const handleAddWidgetClick = () => {
    console.log('Add Widget Clicked');
    setIsCardOpen(true);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloudAccountsChange = () => {
    setTempCloudAccountsChecked(!tempCloudAccountsChecked);
  };

  const handleCloudAccountAssessmentChange = () => {
    setTempCloudAccountAssessmentChecked(!tempCloudAccountAssessmentChecked);
  };

  const handleWorkloadProtectionChange = () => {
    setTempWorkloadProtectionChecked(!tempWorkloadProtectionChecked);
  };

  const handleVulnerabilityManagementChange = () => {
    setTempVulnerabilityManagementChecked(!tempVulnerabilityManagementChecked);
  };

  const handleCancel = () => {
    setIsCardOpen(false);
  };

  const handleConfirm = () => {
    setCloudAccountsChecked(tempCloudAccountsChecked);
    setCloudAccountAssessmentChecked(tempCloudAccountAssessmentChecked);
    setWorkloadProtectionChecked(tempWorkloadProtectionChecked);
    setVulnerabilityManagementChecked(tempVulnerabilityManagementChecked);
    setIsCardOpen(false);
  };

  const handleClose = () => {
    setTempCloudAccountsChecked(cloudAccountsChecked);
    setTempCloudAccountAssessmentChecked(cloudAccountAssessmentChecked);
    setTempWorkloadProtectionChecked(workloadProtectionChecked);
    setTempVulnerabilityManagementChecked(vulnerabilityManagementChecked);
    setIsCardOpen(false);
  };

  return (
    <div id={style.main}>
      <article>
        <div className={style.dashboardnav}>
          <div className={style.text}>
            <b>CNAPP Dashboard</b>
          </div>
        </div>
        <div className={style.menu}>
          <div
            className={style.buttonContainer1}
            onClick={handleAddWidgetClick}
          >
            <button className={style.button1}>Add widget +</button>
          </div>

          <div className={style.refresh}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9381 13C19.979 12.6724 20 12.3387 20 12C20 7.58172 16.4183 4 12 4C9.49942 4 7.26681 5.14727 5.7998 6.94416M4.06189 11C4.02104 11.3276 4 11.6613 4 12C4 16.4183 7.58172 20 12 20C14.3894 20 16.5341 18.9525 18 17.2916M15 17H18V17.2916M5.7998 4V6.94416M5.7998 6.94416V6.99993L8.7998 7M18 20V17.2916"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={style.dots}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              className="bi bi-three-dots-vertical"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
        </div>
      </article>
      <section id={style.sec1}>
        <div className={style.dash}>
          <div className={style.dashname}>
            <b>CSPM Executive Dashboard</b>
          </div>
          <div className={style.widgetset}>
            <div className={style.widget}>
              {cloudAccountsChecked ? (
                <CloudAccounts />
              ) : (
                <Addwidget onClick={handleAddWidgetClick} />
              )}
            </div>
            <div className={style.widget}>
              {cloudAccountAssessmentChecked ? (
                <CloudAccountRisk />
              ) : (
                <Addwidget onClick={handleAddWidgetClick} />
              )}
            </div>
            <div className={style.widget} onClick={handleAddWidgetClick}>
              <Addwidget />
            </div>
          </div>
        </div>
      </section>
      <section id={style.sec2}>
        <div className={style.dash}>
          <div className={style.dashname}>
            <b>CWPP Executive Dashboard</b>
          </div>
          <div className={style.widgetset}>
            <div className={style.widget}>
              {workloadProtectionChecked ? (
                <RiskAssessmentChart />
              ) : (
                <Addwidget onClick={handleAddWidgetClick} />
              )}
            </div>
            <div className={style.widget}>
              {vulnerabilityManagementChecked ? (
                <ImageSecurityChart />
              ) : (
                <Addwidget onClick={handleAddWidgetClick} />
              )}
            </div>
            <div className={style.widget} onClick={handleAddWidgetClick}>
              <Addwidget />
            </div>
          </div>
        </div>
      </section>

      {/* Side Card */}
      {isCardOpen && (
        <div className={style.sideCard}>
          <div className={style.cardHeader}>
            <h3>Add Widget</h3>
            <p>Personalize your dashboard by adding the following widgets:</p>
            <div className={style.closeIcon} onClick={handleClose}>
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-x"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5 1.5a.75.75 0 0 1 1.06 0L8 6.44 13.44 1.5a.75.75 0 0 1 1.06 1.06L9.06 8l5.44 5.44a.75.75 0 0 1-1.06 1.06L8 9.06 2.56 14.5a.75.75 0 0 1-1.06-1.06L6.94 8 1.5 2.56A.75.75 0 0 1 1.5 1.5z" />
              </svg>
            </div>
          </div>
          <div className={style.categories}>
            <div
              className={`${style.category} ${
                selectedCategory === 'CSPM' ? style.active : ''
              }`}
              onClick={() => handleCategoryClick('CSPM')}
            >
              CSPM
            </div>
            <div
              className={`${style.category} ${
                selectedCategory === 'CWPP' ? style.active : ''
              }`}
              onClick={() => handleCategoryClick('CWPP')}
            >
              CWPP
            </div>
          </div>
          <div className={style.options}>
            {selectedCategory === 'CSPM' && (
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={tempCloudAccountsChecked}
                    onChange={handleCloudAccountsChange}
                  />{' '}
                  Cloud Accounts
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={tempCloudAccountAssessmentChecked}
                    onChange={handleCloudAccountAssessmentChange}
                  />{' '}
                  Cloud Account Assessment
                </label>
              </div>
            )}
            {selectedCategory === 'CWPP' && (
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={tempWorkloadProtectionChecked}
                    onChange={handleWorkloadProtectionChange}
                  />{' '}
                  Workload Protection
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={tempVulnerabilityManagementChecked}
                    onChange={handleVulnerabilityManagementChange}
                  />{' '}
                  Vulnerability Management
                </label>
              </div>
            )}
          </div>

          <div className={style.cardFooter}>
            <button className={style.cancelButton} onClick={handleCancel}>
              Cancel
            </button>
            <button className={style.confirmButton} onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainpage;
