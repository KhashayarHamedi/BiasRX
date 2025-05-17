import pandas as pd
from load_data import load_data
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from fairlearn.metrics import MetricFrame, selection_rate, demographic_parity_difference
from fairlearn.reductions import ExponentiatedGradient, DemographicParity
import matplotlib.pyplot as plt

# Load and prepare data
df = load_data()
X = df.drop(columns=["income"])
y = df["income"]

# One-hot encode categorical features
X = pd.get_dummies(X, drop_first=True)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)

# Evaluate performance
print("Accuracy:", accuracy_score(y_test, y_pred))

# Fairness analysis
sensitive_feature = df.loc[y_test.index, "sex"]  # compare fairness by sex
metric_frame = MetricFrame(
    metrics={"selection_rate": selection_rate},
    y_true=y_test,
    y_pred=y_pred,
    sensitive_features=sensitive_feature
)

print("\nSelection rates by group:")
print(metric_frame.by_group)

dp_diff = demographic_parity_difference(y_test, y_pred, sensitive_features=sensitive_feature)
print("\nDemographic parity difference:", dp_diff)
