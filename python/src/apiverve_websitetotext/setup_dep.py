from setuptools import setup, find_packages

setup(
    name='apiverve_websitetotext',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Website to Text converts any webpage URL into plain text stripped of HTML tags. It returns the extracted body copy, page title, meta description, publication date, and detected language code.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/websitetotext?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
