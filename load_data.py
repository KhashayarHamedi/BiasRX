import pandas as pd
import numpy as np

def load_data():
    # منبع دیتاست Adult Income از UCI
    url = "https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data"

    # نام ستون‌ها
    columns = [
        "age", "workclass", "fnlwgt", "education", "education-num", "marital-status",
        "occupation", "relationship", "race", "sex", "capital-gain", "capital-loss",
        "hours-per-week", "native-country", "income"
    ]

    # بارگذاری دیتا
    df = pd.read_csv(
        url,
        header=None,
        names=columns,
        na_values=" ?",
        skipinitialspace=True
    )

    # حذف ردیف‌های ناقص
    df = df.dropna()

    # شبیه‌سازی non-binary برای حدود 5٪ از افراد
    nb_mask = np.random.rand(len(df)) < 0.05
    df.loc[nb_mask, "sex"] = "non-binary"

    # تبدیل مقدار هدف به 0 و 1
    df["income"] = df["income"].apply(lambda x: 1 if ">50K" in x else 0)

    return df

# فقط برای تست اجرای مستقیم
if __name__ == "__main__":
    df = load_data()
    print(df["sex"].value_counts())
    print(df.head())
