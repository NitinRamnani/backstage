/*! For license information please see 3ebdfa41.e8be8b61.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[481643],{100816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(824246),o=n(511151);const i={id:"well-known-annotations",title:"Well-known Annotations on Catalog Entities",sidebar_label:"Well-known Annotations",description:"Documentation that lists a number of well known Annotations, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed."},s=void 0,r={id:"features/software-catalog/well-known-annotations",title:"Well-known Annotations on Catalog Entities",description:"Documentation that lists a number of well known Annotations, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed.",source:"@site/../docs/features/software-catalog/well-known-annotations.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/well-known-annotations",permalink:"/docs/features/software-catalog/well-known-annotations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/well-known-annotations.md",tags:[],version:"current",frontMatter:{id:"well-known-annotations",title:"Well-known Annotations on Catalog Entities",sidebar_label:"Well-known Annotations",description:"Documentation that lists a number of well known Annotations, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed."},sidebar:"docs",previous:{title:"Entity References",permalink:"/docs/features/software-catalog/references"},next:{title:"Well-known Relations",permalink:"/docs/features/software-catalog/well-known-relations"}},c={},l=[{value:"Annotations",id:"annotations",level:2},{value:"backstage.io/managed-by-location",id:"backstageiomanaged-by-location",level:3},{value:"backstage.io/managed-by-origin-location",id:"backstageiomanaged-by-origin-location",level:3},{value:"backstage.io/orphan",id:"backstageioorphan",level:3},{value:"backstage.io/techdocs-ref",id:"backstageiotechdocs-ref",level:3},{value:"backstage.io/techdocs-entity",id:"backstageiotechdocs-entity",level:3},{value:"backstage.io/view-url, backstage.io/edit-url",id:"backstageioview-url-backstageioedit-url",level:3},{value:"backstage.io/source-location",id:"backstageiosource-location",level:3},{value:"backstage.io/source-template",id:"backstageiosource-template",level:3},{value:"jenkins.io/job-full-name",id:"jenkinsiojob-full-name",level:3},{value:"github.com/project-slug",id:"githubcomproject-slug",level:3},{value:"github.com/team-slug",id:"githubcomteam-slug",level:3},{value:"github.com/user-login",id:"githubcomuser-login",level:3},{value:"gocd.org/pipelines",id:"gocdorgpipelines",level:3},{value:"periskop.io/service-name",id:"periskopioservice-name",level:3},{value:"sentry.io/project-slug",id:"sentryioproject-slug",level:3},{value:"rollbar.com/project-slug",id:"rollbarcomproject-slug",level:3},{value:"circleci.com/project-slug",id:"circlecicomproject-slug",level:3},{value:"backstage.io/ldap-rdn, backstage.io/ldap-uuid, backstage.io/ldap-dn",id:"backstageioldap-rdn-backstageioldap-uuid-backstageioldap-dn",level:3},{value:"graph.microsoft.com/tenant-id, graph.microsoft.com/group-id, graph.microsoft.com/user-id",id:"graphmicrosoftcomtenant-id-graphmicrosoftcomgroup-id-graphmicrosoftcomuser-id",level:3},{value:"sonarqube.org/project-key",id:"sonarqubeorgproject-key",level:3},{value:"backstage.io/code-coverage",id:"backstageiocode-coverage",level:3},{value:"vault.io/secrets-path",id:"vaultiosecrets-path",level:3},{value:"Deprecated Annotations",id:"deprecated-annotations",level:2},{value:"backstage.io/github-actions-id",id:"backstageiogithub-actions-id",level:3},{value:"backstage.io/definition-at-location",id:"backstageiodefinition-at-location",level:3},{value:"jenkins.io/github-folder",id:"jenkinsiogithub-folder",level:3},{value:"Links",id:"links",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This section lists a number of well known\n",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#annotations-optional",children:"annotations"}),", that have defined\nsemantics. They can be attached to catalog entities and consumed by plugins as\nneeded."]}),"\n",(0,a.jsx)(t.h2,{id:"annotations",children:"Annotations"}),"\n",(0,a.jsx)(t.p,{children:"This is a (non-exhaustive) list of annotations that are known to be in active\nuse."}),"\n",(0,a.jsx)(t.h3,{id:"backstageiomanaged-by-location",children:"backstage.io/managed-by-location"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/managed-by-location: url:http://github.com/backstage/backstage/blob/master/catalog-info.yaml\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation is a so called location reference string, that\npoints to the source from which the entity was originally fetched. This\nannotation is added automatically by the catalog as it fetches the data from a\nregistered location, and is not meant to normally be written by humans. The\nannotation may point to any type of generic location that the catalog supports,\nso it cannot be relied on to always be specifically of type ",(0,a.jsx)(t.code,{children:"url"}),", nor that it\neven represents a single file. Note also that a single location can be the\nsource of many entities, so it represents a many-to-one relationship."]}),"\n",(0,a.jsxs)(t.p,{children:["The format of the value is ",(0,a.jsx)(t.code,{children:"<type>:<target>"}),". Note that the target may also\ncontain colons, so it is not advisable to naively split the value on ",(0,a.jsx)(t.code,{children:":"})," and\nexpecting a two-item array out of it. The format of the target part is\ntype-dependent and could conceivably even be an empty string, but the separator\ncolon is always present."]}),"\n",(0,a.jsx)(t.h3,{id:"backstageiomanaged-by-origin-location",children:"backstage.io/managed-by-origin-location"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/managed-by-origin-location: url:http://github.com/backstage/backstage/blob/master/catalog-info.yaml\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation is a location reference string (see above). It\npoints to the location, whose registration lead to the creation of the entity.\nIn most cases, the ",(0,a.jsx)(t.code,{children:"backstage.io/managed-by-location"})," and\n",(0,a.jsx)(t.code,{children:"backstage.io/managed-by-origin-location"})," will be equal. They will be different\nif the original location delegates to another location. A common case is, that a\nlocation is registered as ",(0,a.jsx)(t.code,{children:"bootstrap:bootstrap"})," which means that it is part of\nthe ",(0,a.jsx)(t.code,{children:"app-config.yaml"})," of a Backstage installation."]}),"\n",(0,a.jsx)(t.h3,{id:"backstageioorphan",children:"backstage.io/orphan"}),"\n",(0,a.jsxs)(t.p,{children:["This annotation is either absent, or present with the exact ",(0,a.jsx)(t.em,{children:"string"})," value\n",(0,a.jsx)(t.code,{children:'"true"'}),'. It should never be added manually. Instead, the catalog itself injects\nthe annotation as part of its processing loops, on entities that are found to\nhave no registered locations or config locations that keep them "active" /\n"alive".']}),"\n",(0,a.jsxs)(t.p,{children:["For example, suppose that the user first registers a location URL pointing to a\n",(0,a.jsx)(t.code,{children:"Location"})," kind entity, which in turn refers to two ",(0,a.jsx)(t.code,{children:"Component"})," kind entities in\ntwo other files nearby. The end result is that the catalog contains those three\nentities. Now suppose that the user edits the original ",(0,a.jsx)(t.code,{children:"Location"})," entity to only\nrefer to the first of the ",(0,a.jsx)(t.code,{children:"Component"})," kind entities. This will intentionally\n",(0,a.jsx)(t.em,{children:"not"})," lead to the other ",(0,a.jsx)(t.code,{children:"Component"})," entity to be removed from the catalog (for\nsafety reasons). Instead, it gains this orphan marker annotation, to make it\nclear that user action is required to completely remove it, if desired."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/orphan: 'true'\n"})}),"\n",(0,a.jsx)(t.h3,{id:"backstageiotechdocs-ref",children:"backstage.io/techdocs-ref"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/techdocs-ref: dir:.\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation informs ",(0,a.jsx)(t.em,{children:"where"})," TechDocs source content is stored\nso that it can be read and docs can be generated from it. Most commonly, it's\nwritten as a path, relative to the location of the ",(0,a.jsx)(t.code,{children:"catalog-info.yaml"})," itself,\nwhere the associated ",(0,a.jsx)(t.code,{children:"mkdocs.yml"})," file can be found."]}),"\n",(0,a.jsxs)(t.p,{children:["In unusual situations where the documentation for a catalog entity does not live\nalongside the entity's source code, the value of this annotation can point to an\nabsolute URL, matching the location reference string format outlined above, for\nexample: ",(0,a.jsx)(t.code,{children:"url:https://github.com/backstage/backstage/tree/master"})]}),"\n",(0,a.jsx)(t.h3,{id:"backstageiotechdocs-entity",children:"backstage.io/techdocs-entity"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/techdocs-entity: component:default/example\n"})}),"\n",(0,a.jsx)(t.p,{children:"The value of this annotation informs of an external entity that owns the TechDocs.\nThis allows you to reference TechDocs from a single source without either duplicating\nthe TechDocs in the TechDocs page or needing multiple builds of the same docs."}),"\n",(0,a.jsx)(t.p,{children:"This is for situations where you have complex systems where they share a single repo, and likely a single TechDoc location."}),"\n",(0,a.jsx)(t.h3,{id:"backstageioview-url-backstageioedit-url",children:"backstage.io/view-url, backstage.io/edit-url"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/view-url: https://some.website/catalog-info.yaml\n    backstage.io/edit-url: https://github.com/my-org/catalog/edit/master/my-service.jsonnet\n"})}),"\n",(0,a.jsxs)(t.p,{children:["These annotations allow customizing links from the catalog pages. The view URL\nshould point to the canonical metadata YAML that governs this entity. The edit\nURL should point to the source file for the metadata. In the example above,\n",(0,a.jsx)(t.code,{children:"my-org"})," generates its catalog data from Jsonnet files in a monorepo, so the\nview and edit links need changing."]}),"\n",(0,a.jsx)(t.h3,{id:"backstageiosource-location",children:"backstage.io/source-location"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/source-location: url:https://github.com/my-org/my-service/\n"})}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.code,{children:"Location"})," reference that points to the source code of the entity (typically a\n",(0,a.jsx)(t.code,{children:"Component"}),"). Useful when catalog files do not get ingested from the source code\nrepository itself. If the URL points to a folder, it is important that it is\nsuffixed with a ",(0,a.jsx)(t.code,{children:"'/'"})," in order for relative path resolution to work\nconsistently."]}),"\n",(0,a.jsx)(t.h3,{id:"backstageiosource-template",children:"backstage.io/source-template"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/source-template: template:default/create-react-app-template\n"})}),"\n",(0,a.jsx)(t.p,{children:'Represents the entity ref of the Scaffolder template that was originally used\nto create the given entity. Useful to power "create something similar"\nexperiences, as well as to track adherence to software standards across the\nCatalog.'}),"\n",(0,a.jsxs)(t.p,{children:["Note that this value is only automatically added to an entity when the\n",(0,a.jsx)(t.code,{children:"catalog:write"})," action is used to create the ",(0,a.jsx)(t.code,{children:"catalog-info.yaml"})," file. It is\notherwise the template author's responsibility to ensure that any entity\ndefinition included as part of the template contains this annotation."]}),"\n",(0,a.jsx)(t.h3,{id:"jenkinsiojob-full-name",children:"jenkins.io/job-full-name"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    jenkins.io/job-full-name: folder-name/job-name\n"})}),"\n",(0,a.jsx)(t.p,{children:"The value of this annotation is the path to a job on Jenkins, that builds this\nentity."}),"\n",(0,a.jsxs)(t.p,{children:["The value can be the format of just ",(0,a.jsx)(t.code,{children:"[folder-path]"})," or\n",(0,a.jsx)(t.code,{children:"[instanceName]:[folder-path]"}),", if multiple instances are configured in\n",(0,a.jsx)(t.code,{children:"app-config.yaml"})]}),"\n",(0,a.jsx)(t.p,{children:"Specifying this annotation may enable Jenkins related features in Backstage for\nthat entity."}),"\n",(0,a.jsx)(t.h3,{id:"githubcomproject-slug",children:"github.com/project-slug"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    github.com/project-slug: backstage/backstage\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation is the so-called slug that identifies a repository on\n",(0,a.jsx)(t.a,{href:"https://github.com",children:"GitHub"})," (either the public one, or a private GitHub\nEnterprise installation) that is related to this entity. It is on the format\n",(0,a.jsx)(t.code,{children:"<organization or owner>/<repository>"}),", and is the same as can be seen in the URL location\nbar of the browser when viewing that repository."]}),"\n",(0,a.jsx)(t.p,{children:"Specifying this annotation will enable GitHub related features in Backstage for\nthat entity."}),"\n",(0,a.jsx)(t.h3,{id:"githubcomteam-slug",children:"github.com/team-slug"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    github.com/team-slug: backstage/maintainers\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation is the so-called slug that identifies a team on\n",(0,a.jsx)(t.a,{href:"https://github.com",children:"GitHub"})," (either the public one, or a private GitHub\nEnterprise installation) that is related to this entity. It is on the format\n",(0,a.jsx)(t.code,{children:"<organization>/<team>"}),", and is the same as can be seen in the URL location bar\nof the browser when viewing that team."]}),"\n",(0,a.jsxs)(t.p,{children:["This annotation can be used on a ",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"Group entity"}),"\nto note that it originated from that team on GitHub."]}),"\n",(0,a.jsx)(t.h3,{id:"githubcomuser-login",children:"github.com/user-login"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    github.com/user-login: freben\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation is the so-called login that identifies a user on\n",(0,a.jsx)(t.a,{href:"https://github.com",children:"GitHub"})," (either the public one, or a private GitHub\nEnterprise installation) that is related to this entity. It is on the format\n",(0,a.jsx)(t.code,{children:"<username>"}),", and is the same as can be seen in the URL location bar of the\nbrowser when viewing that user."]}),"\n",(0,a.jsxs)(t.p,{children:["This annotation can be used on a ",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:"User entity"}),"\nto note that it originated from that user on GitHub."]}),"\n",(0,a.jsx)(t.h3,{id:"gocdorgpipelines",children:"gocd.org/pipelines"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    gocd.org/pipelines: backstage,backstage-pr,backstage-builder\n"})}),"\n",(0,a.jsx)(t.p,{children:"The value of this annotation is a comma-separated list of the GoCD pipeline\nnames to fetch CI/CD information for."}),"\n",(0,a.jsxs)(t.p,{children:["The pipeline name is usually defined in the ",(0,a.jsx)(t.code,{children:"gocd.yml"})," file for the pipeline\ndefinition."]}),"\n",(0,a.jsx)(t.p,{children:"Specifying this annotation will enable GoCD related features in Backstage for\nthat entity."}),"\n",(0,a.jsx)(t.h3,{id:"periskopioservice-name",children:"periskop.io/service-name"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    periskop.io/service-name: pump-station\n"})}),"\n",(0,a.jsx)(t.p,{children:"The value of this annotation is the periskop project name for the given entity."}),"\n",(0,a.jsxs)(t.p,{children:["Specifying this annotation will enable ",(0,a.jsx)(t.a,{href:"https://periskop.io/",children:"Periskop"})," related features in Backstage for\nthat entity if the periskop plugin is installed."]}),"\n",(0,a.jsx)(t.h3,{id:"sentryioproject-slug",children:"sentry.io/project-slug"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    sentry.io/project-slug: backstage/pump-station\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation is the so-called slug (or alternatively, the ID) of\na ",(0,a.jsx)(t.a,{href:"https://sentry.io",children:"Sentry"})," project within your organization. The value can\nbe the format of ",(0,a.jsx)(t.code,{children:"[organization]/[project-slug]"})," or just ",(0,a.jsx)(t.code,{children:"[project-slug]"}),". When\nthe organization slug is omitted the ",(0,a.jsx)(t.code,{children:"app-config.yaml"})," will be used as a\nfallback (",(0,a.jsx)(t.code,{children:"sentry.organization"}),")."]}),"\n",(0,a.jsx)(t.p,{children:"Specifying this annotation may enable Sentry related features in Backstage for\nthat entity."}),"\n",(0,a.jsx)(t.h3,{id:"rollbarcomproject-slug",children:"rollbar.com/project-slug"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    rollbar.com/project-slug: backstage/pump-station\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation is the so-called slug (or alternatively, the ID) of\na ",(0,a.jsx)(t.a,{href:"https://rollbar.com",children:"Rollbar"})," project within your organization. The value can\nbe the format of ",(0,a.jsx)(t.code,{children:"[organization]/[project-slug]"})," or just ",(0,a.jsx)(t.code,{children:"[project-slug]"}),". When\nthe organization slug is omitted the ",(0,a.jsx)(t.code,{children:"app-config.yaml"})," will be used as a\nfallback (",(0,a.jsx)(t.code,{children:"rollbar.organization"})," followed by ",(0,a.jsx)(t.code,{children:"organization.name"}),")."]}),"\n",(0,a.jsx)(t.p,{children:"Specifying this annotation may enable Rollbar related features in Backstage for\nthat entity."}),"\n",(0,a.jsx)(t.h3,{id:"circlecicomproject-slug",children:"circleci.com/project-slug"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    circleci.com/project-slug: github/spotify/pump-station\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation is the so-called slug (or alternatively, the ID) of\na ",(0,a.jsx)(t.a,{href:"https://circleci.com/",children:"CircleCI"})," project within your organization. The value\ncan be the format of ",(0,a.jsx)(t.code,{children:"[source-control-manager]/[organization]/[project-slug]"})," or\njust ",(0,a.jsx)(t.code,{children:"[organization]/[project-slug]"}),". When the ",(0,a.jsx)(t.code,{children:"[source-control-manager]"})," slug\nis omitted, ",(0,a.jsx)(t.code,{children:"bitbucket"})," will be used as a fallback."]}),"\n",(0,a.jsx)(t.p,{children:"Specifying this annotation will cause the CI/CD features in Backstage to display\ndata from CircleCI for that entity."}),"\n",(0,a.jsxs)(t.p,{children:["Providing both the ",(0,a.jsx)(t.code,{children:"github.com/project-slug"})," and ",(0,a.jsx)(t.code,{children:"circleci.com/project-slug"}),"\nannotations can cause problems as both may be used for CI/CD features."]}),"\n",(0,a.jsx)(t.h3,{id:"backstageioldap-rdn-backstageioldap-uuid-backstageioldap-dn",children:"backstage.io/ldap-rdn, backstage.io/ldap-uuid, backstage.io/ldap-dn"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/ldap-rdn: my-team\n    backstage.io/ldap-uuid: c57e8ba2-6cc4-1039-9ebc-d5f241a7ca21\n    backstage.io/ldap-dn: cn=my-team,ou=access,ou=groups,ou=spotify,dc=spotify,dc=net\n"})}),"\n",(0,a.jsx)(t.p,{children:"The value of these annotations are the corresponding attributes that were found\nwhen ingesting the entity from LDAP. Not all of them may be present, depending\non what attributes that the server presented at ingestion time."}),"\n",(0,a.jsx)(t.h3,{id:"graphmicrosoftcomtenant-id-graphmicrosoftcomgroup-id-graphmicrosoftcomuser-id",children:"graph.microsoft.com/tenant-id, graph.microsoft.com/group-id, graph.microsoft.com/user-id"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    graph.microsoft.com/tenant-id: 6902611b-ffc1-463f-8af3-4d5285dc057b\n    graph.microsoft.com/group-id: c57e8ba2-6cc4-1039-9ebc-d5f241a7ca21\n    graph.microsoft.com/user-id: 2de244b5-104b-4e8f-a3b8-dce3c31e54b6\n"})}),"\n",(0,a.jsx)(t.p,{children:"The value of these annotations are the corresponding attributes that were found\nwhen ingesting the entity from the Microsoft Graph API. Not all of them may be\npresent, depending on what attributes that the server presented at ingestion\ntime."}),"\n",(0,a.jsx)(t.h3,{id:"sonarqubeorgproject-key",children:"sonarqube.org/project-key"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    sonarqube.org/project-key: pump-station\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation is the project key of a\n",(0,a.jsx)(t.a,{href:"https://sonarqube.org",children:"SonarQube"})," or ",(0,a.jsx)(t.a,{href:"https://sonarcloud.io",children:"SonarCloud"}),"\nproject within your organization."]}),"\n",(0,a.jsx)(t.p,{children:"Specifying this annotation may enable SonarQube related features in Backstage\nfor that entity."}),"\n",(0,a.jsx)(t.h3,{id:"backstageiocode-coverage",children:"backstage.io/code-coverage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    backstage.io/code-coverage: scm-only\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation controls the code-coverage backstage plugin. If set\nto ",(0,a.jsx)(t.code,{children:"scm-only"}),", the plugin will only take into account files stored in source\ncontrol (e.g. ignoring generated code). If set to ",(0,a.jsx)(t.code,{children:"enabled"}),", all files covered\nby a coverage report will be taken into account."]}),"\n",(0,a.jsx)(t.h3,{id:"vaultiosecrets-path",children:"vault.io/secrets-path"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"# Example:\nmetadata:\n  annotations:\n    vault.io/secrets-path: test/backstage\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The value of this annotation contains the path to the secrets of the entity in\nVault. If not present when the Vault plugin is in use, a message will be shown\ninstead, letting the user know what is missing in the ",(0,a.jsx)(t.code,{children:"catalog-info.yaml"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"deprecated-annotations",children:"Deprecated Annotations"}),"\n",(0,a.jsx)(t.p,{children:"The following annotations are deprecated, and only listed here to aid in\nmigrating away from them."}),"\n",(0,a.jsx)(t.h3,{id:"backstageiogithub-actions-id",children:"backstage.io/github-actions-id"}),"\n",(0,a.jsxs)(t.p,{children:["This annotation was used for a while to enable the GitHub Actions feature. This\nis now instead using the ",(0,a.jsx)(t.a,{href:"#github-com-project-slug",children:"github.com/project-slug"}),"\nannotation, with the same value format."]}),"\n",(0,a.jsx)(t.h3,{id:"backstageiodefinition-at-location",children:"backstage.io/definition-at-location"}),"\n",(0,a.jsxs)(t.p,{children:["This annotation allowed to load the API definition from another location. Use\n",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#substitutions-in-the-descriptor-format",children:"substitution"}),"\ninstead."]}),"\n",(0,a.jsx)(t.h3,{id:"jenkinsiogithub-folder",children:"jenkins.io/github-folder"}),"\n",(0,a.jsxs)(t.p,{children:["Use the ",(0,a.jsx)(t.code,{children:"jenkins.io/job-full-name"})," instead."]}),"\n",(0,a.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#annotations-optional",children:"Descriptor Format: annotations"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},371426:(e,t,n)=>{var a=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,i={},l=null,d=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!c.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:r.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),r=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function y(){}function j(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var x=j.prototype=new y;x.constructor=j,g(x,b.prototype),x.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,a){var o,i={},s=null,r=null;if(null!=t)for(o in void 0!==t.ref&&(r=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,o)&&!_.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=a;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:r,props:i,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,i,s){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var c=!1;if(null===e)c=!0;else switch(r){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case a:c=!0}}if(c)return s=s(c=e),e=""===i?"."+C(c,0):i,k(s)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),R(s,t,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,i=""===i?".":i+":",k(e))for(var l=0;l<e.length;l++){var d=i+C(r=e[l],l);c+=R(r,t,o,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(r=e.next()).done;)c+=R(r=r.value,t,o,d=i+C(r,l++),s);else if("object"===r)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,t,n){if(null==e)return e;var a=[],o=0;return R(e,a,"","",(function(e){return t.call(n,e,o++)})),a}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},A={transition:null},$={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:A,ReactCurrentOwner:w};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=s,t.PureComponent=j,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.act=L,t.cloneElement=function(e,t,a){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),i=e.key,s=e.ref,r=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,r=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)v.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=a;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:r}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:r,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(667294);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);