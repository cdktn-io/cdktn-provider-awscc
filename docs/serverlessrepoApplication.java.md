# `serverlessrepoApplication` Submodule <a name="`serverlessrepoApplication` Submodule" id="@cdktn/provider-awscc.serverlessrepoApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessrepoApplication <a name="ServerlessrepoApplication" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application awscc_serverlessrepo_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.serverlessrepo_application.ServerlessrepoApplication;

ServerlessrepoApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .author(java.lang.String)
    .description(java.lang.String)
    .name(java.lang.String)
//  .homePageUrl(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .licenseBody(java.lang.String)
//  .readmeBody(java.lang.String)
//  .semanticVersion(java.lang.String)
//  .sourceCodeUrl(java.lang.String)
//  .spdxLicenseId(java.lang.String)
//  .templateBody(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.author">author</a></code> | <code>java.lang.String</code> | The name of the author publishing the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.homePageUrl">homePageUrl</a></code> | <code>java.lang.String</code> | A URL with more information about the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Labels to improve discovery of apps in search results. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.licenseBody">licenseBody</a></code> | <code>java.lang.String</code> | A local text file that contains the license of the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.readmeBody">readmeBody</a></code> | <code>java.lang.String</code> | A text readme file in Markdown language that contains a more detailed description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | The semantic version of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.sourceCodeUrl">sourceCodeUrl</a></code> | <code>java.lang.String</code> | A link to a public repository for the source code of your application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.spdxLicenseId">spdxLicenseId</a></code> | <code>java.lang.String</code> | A valid identifier from https://spdx.org/licenses/. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.templateBody">templateBody</a></code> | <code>java.lang.String</code> | The local raw packaged AWS SAM template file of your application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.author"></a>

- *Type:* java.lang.String

The name of the author publishing the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#author ServerlessrepoApplication#author}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#description ServerlessrepoApplication#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#name ServerlessrepoApplication#name}

---

##### `homePageUrl`<sup>Optional</sup> <a name="homePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.homePageUrl"></a>

- *Type:* java.lang.String

A URL with more information about the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#home_page_url ServerlessrepoApplication#home_page_url}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.labels"></a>

- *Type:* java.util.List<java.lang.String>

Labels to improve discovery of apps in search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#labels ServerlessrepoApplication#labels}

---

##### `licenseBody`<sup>Optional</sup> <a name="licenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.licenseBody"></a>

- *Type:* java.lang.String

A local text file that contains the license of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#license_body ServerlessrepoApplication#license_body}

---

##### `readmeBody`<sup>Optional</sup> <a name="readmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.readmeBody"></a>

- *Type:* java.lang.String

A text readme file in Markdown language that contains a more detailed description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#readme_body ServerlessrepoApplication#readme_body}

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.semanticVersion"></a>

- *Type:* java.lang.String

The semantic version of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#semantic_version ServerlessrepoApplication#semantic_version}

---

##### `sourceCodeUrl`<sup>Optional</sup> <a name="sourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.sourceCodeUrl"></a>

- *Type:* java.lang.String

A link to a public repository for the source code of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#source_code_url ServerlessrepoApplication#source_code_url}

---

##### `spdxLicenseId`<sup>Optional</sup> <a name="spdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.spdxLicenseId"></a>

- *Type:* java.lang.String

A valid identifier from https://spdx.org/licenses/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#spdx_license_id ServerlessrepoApplication#spdx_license_id}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.templateBody"></a>

- *Type:* java.lang.String

The local raw packaged AWS SAM template file of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#template_body ServerlessrepoApplication#template_body}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl">resetHomePageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody">resetLicenseBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody">resetReadmeBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion">resetSemanticVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl">resetSourceCodeUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId">resetSpdxLicenseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHomePageUrl` <a name="resetHomePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl"></a>

```java
public void resetHomePageUrl()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLicenseBody` <a name="resetLicenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody"></a>

```java
public void resetLicenseBody()
```

##### `resetReadmeBody` <a name="resetReadmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody"></a>

```java
public void resetReadmeBody()
```

##### `resetSemanticVersion` <a name="resetSemanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion"></a>

```java
public void resetSemanticVersion()
```

##### `resetSourceCodeUrl` <a name="resetSourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl"></a>

```java
public void resetSourceCodeUrl()
```

##### `resetSpdxLicenseId` <a name="resetSpdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId"></a>

```java
public void resetSpdxLicenseId()
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody"></a>

```java
public void resetTemplateBody()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.serverlessrepo_application.ServerlessrepoApplication;

ServerlessrepoApplication.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.serverlessrepo_application.ServerlessrepoApplication;

ServerlessrepoApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.serverlessrepo_application.ServerlessrepoApplication;

ServerlessrepoApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.serverlessrepo_application.ServerlessrepoApplication;

ServerlessrepoApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServerlessrepoApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServerlessrepoApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServerlessrepoApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServerlessrepoApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor">isVerifiedAuthor</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput">authorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput">homePageUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput">licenseBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput">readmeBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput">semanticVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput">sourceCodeUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput">spdxLicenseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput">templateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author">author</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl">homePageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody">licenseBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody">readmeBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl">sourceCodeUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId">spdxLicenseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isVerifiedAuthor`<sup>Required</sup> <a name="isVerifiedAuthor" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor"></a>

```java
public IResolvable getIsVerifiedAuthor();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `authorInput`<sup>Optional</sup> <a name="authorInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput"></a>

```java
public java.lang.String getAuthorInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `homePageUrlInput`<sup>Optional</sup> <a name="homePageUrlInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput"></a>

```java
public java.lang.String getHomePageUrlInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `licenseBodyInput`<sup>Optional</sup> <a name="licenseBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput"></a>

```java
public java.lang.String getLicenseBodyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `readmeBodyInput`<sup>Optional</sup> <a name="readmeBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput"></a>

```java
public java.lang.String getReadmeBodyInput();
```

- *Type:* java.lang.String

---

##### `semanticVersionInput`<sup>Optional</sup> <a name="semanticVersionInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput"></a>

```java
public java.lang.String getSemanticVersionInput();
```

- *Type:* java.lang.String

---

##### `sourceCodeUrlInput`<sup>Optional</sup> <a name="sourceCodeUrlInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput"></a>

```java
public java.lang.String getSourceCodeUrlInput();
```

- *Type:* java.lang.String

---

##### `spdxLicenseIdInput`<sup>Optional</sup> <a name="spdxLicenseIdInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput"></a>

```java
public java.lang.String getSpdxLicenseIdInput();
```

- *Type:* java.lang.String

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput"></a>

```java
public java.lang.String getTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author"></a>

```java
public java.lang.String getAuthor();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `homePageUrl`<sup>Required</sup> <a name="homePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl"></a>

```java
public java.lang.String getHomePageUrl();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `licenseBody`<sup>Required</sup> <a name="licenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody"></a>

```java
public java.lang.String getLicenseBody();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `readmeBody`<sup>Required</sup> <a name="readmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody"></a>

```java
public java.lang.String getReadmeBody();
```

- *Type:* java.lang.String

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion"></a>

```java
public java.lang.String getSemanticVersion();
```

- *Type:* java.lang.String

---

##### `sourceCodeUrl`<sup>Required</sup> <a name="sourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl"></a>

```java
public java.lang.String getSourceCodeUrl();
```

- *Type:* java.lang.String

---

##### `spdxLicenseId`<sup>Required</sup> <a name="spdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId"></a>

```java
public java.lang.String getSpdxLicenseId();
```

- *Type:* java.lang.String

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessrepoApplicationConfig <a name="ServerlessrepoApplicationConfig" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.serverlessrepo_application.ServerlessrepoApplicationConfig;

ServerlessrepoApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .author(java.lang.String)
    .description(java.lang.String)
    .name(java.lang.String)
//  .homePageUrl(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .licenseBody(java.lang.String)
//  .readmeBody(java.lang.String)
//  .semanticVersion(java.lang.String)
//  .sourceCodeUrl(java.lang.String)
//  .spdxLicenseId(java.lang.String)
//  .templateBody(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author">author</a></code> | <code>java.lang.String</code> | The name of the author publishing the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl">homePageUrl</a></code> | <code>java.lang.String</code> | A URL with more information about the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Labels to improve discovery of apps in search results. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody">licenseBody</a></code> | <code>java.lang.String</code> | A local text file that contains the license of the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody">readmeBody</a></code> | <code>java.lang.String</code> | A text readme file in Markdown language that contains a more detailed description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | The semantic version of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl">sourceCodeUrl</a></code> | <code>java.lang.String</code> | A link to a public repository for the source code of your application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId">spdxLicenseId</a></code> | <code>java.lang.String</code> | A valid identifier from https://spdx.org/licenses/. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | The local raw packaged AWS SAM template file of your application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author"></a>

```java
public java.lang.String getAuthor();
```

- *Type:* java.lang.String

The name of the author publishing the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#author ServerlessrepoApplication#author}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#description ServerlessrepoApplication#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#name ServerlessrepoApplication#name}

---

##### `homePageUrl`<sup>Optional</sup> <a name="homePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl"></a>

```java
public java.lang.String getHomePageUrl();
```

- *Type:* java.lang.String

A URL with more information about the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#home_page_url ServerlessrepoApplication#home_page_url}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

Labels to improve discovery of apps in search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#labels ServerlessrepoApplication#labels}

---

##### `licenseBody`<sup>Optional</sup> <a name="licenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody"></a>

```java
public java.lang.String getLicenseBody();
```

- *Type:* java.lang.String

A local text file that contains the license of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#license_body ServerlessrepoApplication#license_body}

---

##### `readmeBody`<sup>Optional</sup> <a name="readmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody"></a>

```java
public java.lang.String getReadmeBody();
```

- *Type:* java.lang.String

A text readme file in Markdown language that contains a more detailed description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#readme_body ServerlessrepoApplication#readme_body}

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion"></a>

```java
public java.lang.String getSemanticVersion();
```

- *Type:* java.lang.String

The semantic version of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#semantic_version ServerlessrepoApplication#semantic_version}

---

##### `sourceCodeUrl`<sup>Optional</sup> <a name="sourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl"></a>

```java
public java.lang.String getSourceCodeUrl();
```

- *Type:* java.lang.String

A link to a public repository for the source code of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#source_code_url ServerlessrepoApplication#source_code_url}

---

##### `spdxLicenseId`<sup>Optional</sup> <a name="spdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId"></a>

```java
public java.lang.String getSpdxLicenseId();
```

- *Type:* java.lang.String

A valid identifier from https://spdx.org/licenses/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#spdx_license_id ServerlessrepoApplication#spdx_license_id}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

The local raw packaged AWS SAM template file of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#template_body ServerlessrepoApplication#template_body}

---



