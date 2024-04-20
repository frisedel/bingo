module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["react-hooks", "@typescript-eslint", "import", "simple-import-sort"],
    ignorePatterns: ["/**/*.cjs"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    rules: {
        "no-console": "off",
        "react/jsx-uses-react": "off",
        "no-case-declarations": "off",
        "no-unused-vars": "warn",

        // imports sort order
        "simple-import-sort/imports": [
            "error",
            {
                groups: [
                    // Packages `react` related packages come first.
                    ["^react", "^@?\\w"],
                    // Internal packages.
                    ["^(@|components)(/.*|$)"],
                    // Side effect imports.
                    ["^\\u0000"],
                    // Parent imports. Put `..` last.
                    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                    // Style imports.
                    ["^.+\\.?(css, scss)$"],
                ],
            },
        ],
    },
    overrides: [
        {
            files: ["*.test.*", "*.stories.*"],
            rules: {
                "no-console": "off",
                "@typescript-eslint/ban-ts-comment": "off",
            },
        },
        {
            files: ["jest.*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/no-empty-function": "off",
            },
        },
    ],
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
};
