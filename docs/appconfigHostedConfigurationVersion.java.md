# `appconfigHostedConfigurationVersion` Submodule <a name="`appconfigHostedConfigurationVersion` Submodule" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigHostedConfigurationVersion <a name="AppconfigHostedConfigurationVersion" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version awscc_appconfig_hosted_configuration_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_hosted_configuration_version.AppconfigHostedConfigurationVersion;

AppconfigHostedConfigurationVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .configurationProfileId(java.lang.String)
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .description(java.lang.String)
//  .latestVersionNumber(java.lang.Number)
//  .versionLabel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | The configuration profile ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | The content of the configuration or the configuration data. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | A standard MIME type describing the format of the configuration content. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the hosted configuration version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.latestVersionNumber">latestVersionNumber</a></code> | <code>java.lang.Number</code> | An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.versionLabel">versionLabel</a></code> | <code>java.lang.String</code> | A user-defined label for an AWS AppConfig hosted configuration version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.configurationProfileId"></a>

- *Type:* java.lang.String

The configuration profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.content"></a>

- *Type:* java.lang.String

The content of the configuration or the configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

A standard MIME type describing the format of the configuration content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}

---

##### `latestVersionNumber`<sup>Optional</sup> <a name="latestVersionNumber" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.latestVersionNumber"></a>

- *Type:* java.lang.Number

An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version.

To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#latest_version_number AppconfigHostedConfigurationVersion#latest_version_number}

---

##### `versionLabel`<sup>Optional</sup> <a name="versionLabel" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.versionLabel"></a>

- *Type:* java.lang.String

A user-defined label for an AWS AppConfig hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#version_label AppconfigHostedConfigurationVersion#version_label}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetLatestVersionNumber">resetLatestVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetVersionLabel">resetVersionLabel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLatestVersionNumber` <a name="resetLatestVersionNumber" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetLatestVersionNumber"></a>

```java
public void resetLatestVersionNumber()
```

##### `resetVersionLabel` <a name="resetVersionLabel" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetVersionLabel"></a>

```java
public void resetVersionLabel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigHostedConfigurationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appconfig_hosted_configuration_version.AppconfigHostedConfigurationVersion;

AppconfigHostedConfigurationVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appconfig_hosted_configuration_version.AppconfigHostedConfigurationVersion;

AppconfigHostedConfigurationVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appconfig_hosted_configuration_version.AppconfigHostedConfigurationVersion;

AppconfigHostedConfigurationVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appconfig_hosted_configuration_version.AppconfigHostedConfigurationVersion;

AppconfigHostedConfigurationVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppconfigHostedConfigurationVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppconfigHostedConfigurationVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppconfigHostedConfigurationVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppconfigHostedConfigurationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigHostedConfigurationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber">versionNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput">configurationProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumberInput">latestVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabelInput">versionLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumber">latestVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabel">versionLabel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber"></a>

```java
public java.lang.String getVersionNumber();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `configurationProfileIdInput`<sup>Optional</sup> <a name="configurationProfileIdInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput"></a>

```java
public java.lang.String getConfigurationProfileIdInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `latestVersionNumberInput`<sup>Optional</sup> <a name="latestVersionNumberInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumberInput"></a>

```java
public java.lang.Number getLatestVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `versionLabelInput`<sup>Optional</sup> <a name="versionLabelInput" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabelInput"></a>

```java
public java.lang.String getVersionLabelInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId"></a>

```java
public java.lang.String getConfigurationProfileId();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `latestVersionNumber`<sup>Required</sup> <a name="latestVersionNumber" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumber"></a>

```java
public java.lang.Number getLatestVersionNumber();
```

- *Type:* java.lang.Number

---

##### `versionLabel`<sup>Required</sup> <a name="versionLabel" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabel"></a>

```java
public java.lang.String getVersionLabel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigHostedConfigurationVersionConfig <a name="AppconfigHostedConfigurationVersionConfig" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_hosted_configuration_version.AppconfigHostedConfigurationVersionConfig;

AppconfigHostedConfigurationVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .configurationProfileId(java.lang.String)
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .description(java.lang.String)
//  .latestVersionNumber(java.lang.Number)
//  .versionLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | The configuration profile ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content">content</a></code> | <code>java.lang.String</code> | The content of the configuration or the configuration data. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | A standard MIME type describing the format of the configuration content. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the hosted configuration version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.latestVersionNumber">latestVersionNumber</a></code> | <code>java.lang.Number</code> | An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.versionLabel">versionLabel</a></code> | <code>java.lang.String</code> | A user-defined label for an AWS AppConfig hosted configuration version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId"></a>

```java
public java.lang.String getConfigurationProfileId();
```

- *Type:* java.lang.String

The configuration profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The content of the configuration or the configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

A standard MIME type describing the format of the configuration content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}

---

##### `latestVersionNumber`<sup>Optional</sup> <a name="latestVersionNumber" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.latestVersionNumber"></a>

```java
public java.lang.Number getLatestVersionNumber();
```

- *Type:* java.lang.Number

An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version.

To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#latest_version_number AppconfigHostedConfigurationVersion#latest_version_number}

---

##### `versionLabel`<sup>Optional</sup> <a name="versionLabel" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.versionLabel"></a>

```java
public java.lang.String getVersionLabel();
```

- *Type:* java.lang.String

A user-defined label for an AWS AppConfig hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#version_label AppconfigHostedConfigurationVersion#version_label}

---



