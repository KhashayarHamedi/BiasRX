import streamlit as st
from load_data import load_data
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from fairlearn.metrics import MetricFrame, selection_rate, demographic_parity_difference
import matplotlib.pyplot as plt
import pandas as pd

# Page config
st.set_page_config(page_title="BiasRX • AI Fairness Auditor", layout="centered")
st.title("🚦 BiasRX — Machine Learning Fairness Dashboard")
st.markdown(
    "Evaluate demographic fairness of your AI models across gender and other sensitive attributes. "
    "Built for ethical AI compliance, transparency, and responsible machine learning."
)

# Load data
df = load_data()
X = df.drop(columns=["income"])
y = df["income"]
X = pd.get_dummies(X, drop_first=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# Sensitive attribute for audit
sensitive_attr = df.loc[y_test.index, "sex"]

# Fairness analysis
accuracy = accuracy_score(y_test, y_pred)
selection = MetricFrame(metrics={"Selection Rate": selection_rate}, y_true=y_test, y_pred=y_pred, sensitive_features=sensitive_attr)
dp_diff = demographic_parity_difference(y_test, y_pred, sensitive_features=sensitive_attr)

# Display results
st.subheader("📊 Model Performance")
st.success(f"Overall Accuracy: {accuracy:.2%}")

st.subheader("👥 Fairness by Gender Category")
st.dataframe(selection.by_group)

st.metric("🔍 Demographic Parity Difference", f"{dp_diff:.2%}")

# Chart
st.subheader("📉 Visual Disparity Analysis")
fig, ax = plt.subplots()
selection.by_group.plot(kind="bar", ax=ax, color=["#FF6F61", "#6A5ACD", "#20B2AA"])
ax.set_ylabel("Selection Rate")
ax.set_title("Selection Rate per Gender Group")
st.pyplot(fig)

# Footer
st.markdown("---")
st.caption("BiasRX • Built with Streamlit, Fairlearn, and scikit-learn for AI model transparency and ethics.")
