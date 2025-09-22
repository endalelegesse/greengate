(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        599: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 6774))
        },
        6774: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s(7437),
                l = s(7367),
                i = s(1771),
                r = s(6648),
                c = s(7138),
                n = s(287),
                d = s(2265);

            function o() {
                let {
                    t: e,
                    language: t
                } = (0, n.Z)(), [s, o] = (0, d.useState)([]), [x, m] = (0, d.useState)([]), [h, g] = (0, d.useState)(null);
                (0, d.useEffect)(() => {
                    (async () => {
                        let e = await fetch("/data/services.".concat(t, ".json"));
                        o(await e.json());
                        let s = await fetch("/data/news.".concat(t, ".json"));
                        m(await s.json());
                        let a = await fetch("/data/company-info.".concat(t, ".json"));
                        g(await a.json())
                    })()
                }, [t]), x.slice(0, 3);
                let [u, b] = (0, d.useState)(0), j = h ? [{
                    id: "welcome",
                    image: "/images/banners/home_page_banner.png",
                    title: e("home.welcome"),
                    subtitle: h.description,
                    isClickable: !1,
                    link: void 0
                }, ...x.slice(0, 3).map((e, t) => ({
                    id: e.id,
                    image: e.images[0],
                    title: e.title,
                    subtitle: e.summary,
                    isClickable: !0,
                    link: "/news/".concat(e.id)
                }))] : [];
                (0, d.useEffect)(() => {
                    let e = setInterval(() => {
                        b(e => (e + 1) % j.length)
                    }, 5e3);
                    return () => clearInterval(e)
                }, [j.length]);
                let p = e => {
                    b(e)
                };
                return (0, a.jsxs)("div", {
                    className: "min-h-screen flex flex-col",
                    children: [(0, a.jsx)(l.Z, {}), (0, a.jsxs)("main", {
                        className: "flex-grow",
                        children: [(0, a.jsxs)("section", {
                            className: "relative bg-primary text-white h-96 flex items-center",
                            children: [j.map((e, t) => (0, a.jsxs)("div", {
                                className: "absolute inset-0 transition-opacity duration-1000 ".concat(t === u ? "opacity-100" : "opacity-0"),
                                children: [(0, a.jsxs)("div", {
                                    className: "absolute inset-0 z-0",
                                    children: [(0, a.jsx)(r.default, {
                                        src: e.image,
                                        alt: e.title,
                                        fill: !0,
                                        objectFit: "cover",
                                        quality: 100
                                    }), (0, a.jsx)("div", {
                                        className: "absolute inset-0 bg-black bg-opacity-50"
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "container mx-auto px-4 text-center relative z-10 flex flex-col justify-center h-full",
                                    children: e.isClickable && e.link ? (0, a.jsxs)(c.default, {
                                        href: e.link,
                                        className: "cursor-pointer",
                                        children: [(0, a.jsx)("h1", {
                                            className: "text-4xl md:text-6xl font-bold mb-6 text-white hover:text-gray-200 transition-colors",
                                            children: e.title
                                        }), (0, a.jsx)("p", {
                                            className: "text-xl mb-8 max-w-2xl mx-auto",
                                            children: e.subtitle
                                        })]
                                    }) : (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)("h1", {
                                            className: "text-4xl md:text-6xl font-bold mb-6 text-white",
                                            children: e.title
                                        }), (0, a.jsx)("p", {
                                            className: "text-xl mb-8 max-w-2xl mx-auto",
                                            children: e.subtitle
                                        })]
                                    })
                                })]
                            }, e.id)), (0, a.jsx)("div", {
                                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20",
                                children: (0, a.jsx)("div", {
                                    className: "flex space-x-2",
                                    children: j.map((e, t) => (0, a.jsx)("button", {
                                        onClick: () => p(t),
                                        className: "w-3 h-3 rounded-full transition-colors ".concat(t === u ? "bg-white" : "bg-white bg-opacity-50"),
                                        "aria-label": "Go to slide ".concat(t + 1)
                                    }, t))
                                })
                            })]
                        }), (0, a.jsx)("section", {
                            className: "py-16",
                            children: (0, a.jsxs)("div", {
                                className: "container mx-auto px-4",
                                children: [(0, a.jsx)("h2", {
                                    className: "text-3xl font-bold text-center mb-12 text-primary dark:text-white",
                                    children: e("home.ourServices")
                                }), s.length > 0 && (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                        children: s.slice(0, 3).map(e => (0, a.jsxs)("div", {
                                            className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-gray-800 dark:text-gray-200",
                                            children: [(0, a.jsx)("div", {
                                                className: "mb-4",
                                                children: (0, a.jsx)(r.default, {
                                                    src: e.image,
                                                    alt: "Image for ".concat(e.title),
                                                    width: 300,
                                                    height: 150,
                                                    className: "rounded-lg w-full h-32 object-cover"
                                                })
                                            }), (0, a.jsx)("h3", {
                                                className: "text-xl font-bold mb-3 text-primary dark:text-white",
                                                children: e.title
                                            }), (0, a.jsx)("p", {
                                                className: "text-sm",
                                                children: e.description.length > 100 ? e.description.substring(0, 100) + "..." : e.description
                                            })]
                                        }, e.id))
                                    }), (0, a.jsx)("div", {
                                        className: "text-center mt-8",
                                        children: (0, a.jsx)(c.default, {
                                            href: "/services",
                                            className: "bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition duration-300",
                                            children: e("home.moreServices")
                                        })
                                    })]
                                })]
                            })
                        }), h && (0, a.jsx)("section", {
                            className: "py-16 bg-gray-100 dark:bg-gray-900",
                            children: (0, a.jsxs)("div", {
                                className: "container mx-auto px-4",
                                children: [(0, a.jsx)("h2", {
                                    className: "text-3xl font-bold text-center mb-12 text-primary dark:text-white",
                                    children: e("home.getToKnowUs")
                                }), (0, a.jsxs)("div", {
                                    className: "max-w-4xl mx-auto space-y-8",
                                    children: [(0, a.jsxs)("div", {
                                        className: "bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg",
                                        children: [(0, a.jsx)("h3", {
                                            className: "text-2xl font-bold mb-4 text-primary dark:text-white",
                                            children: e("home.ourVision")
                                        }), (0, a.jsx)("p", {
                                            className: "text-gray-700 dark:text-gray-300",
                                            children: h.vision
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg",
                                        children: [(0, a.jsx)("h3", {
                                            className: "text-2xl font-bold mb-4 text-primary dark:text-white",
                                            children: e("home.ourMission")
                                        }), (0, a.jsx)("div", {
                                            className: "grid grid-cols-1 gap-4",
                                            children: h.mission.slice(0, 3).map((e, t) => (0, a.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [(0, a.jsx)("div", {
                                                    className: "w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
                                                }), (0, a.jsx)("p", {
                                                    className: "text-gray-700 dark:text-gray-300 text-sm",
                                                    children: e
                                                })]
                                            }, t))
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg",
                                        children: [(0, a.jsx)("h3", {
                                            className: "text-2xl font-bold mb-4 text-primary dark:text-white",
                                            children: e("home.ourGoals")
                                        }), (0, a.jsx)("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: h.goals.slice(0, 6).map((e, t) => (0, a.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [(0, a.jsx)("div", {
                                                    className: "w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
                                                }), (0, a.jsx)("p", {
                                                    className: "text-gray-700 dark:text-gray-300 text-sm",
                                                    children: e
                                                })]
                                            }, t))
                                        })]
                                    })]
                                })]
                            })
                        })]
                    }), (0, a.jsx)(i.Z, {})]
                })
            }
        }
    },
    function(e) {
        e.O(0, [648, 138, 798, 971, 23, 744], function() {
            return e(e.s = 599)
        }), _N_E = e.O()
    }
]);