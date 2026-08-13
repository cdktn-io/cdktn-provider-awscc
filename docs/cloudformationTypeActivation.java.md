# `cloudformationTypeActivation` Submodule <a name="`cloudformationTypeActivation` Submodule" id="@cdktn/provider-awscc.cloudformationTypeActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationTypeActivation <a name="CloudformationTypeActivation" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation awscc_cloudformation_type_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_type_activation.CloudformationTypeActivation;

CloudformationTypeActivation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .autoUpdate(java.lang.Boolean|IResolvable)
//  .executionRoleArn(java.lang.String)
//  .loggingConfig(CloudformationTypeActivationLoggingConfig)
//  .majorVersion(java.lang.String)
//  .publicTypeArn(java.lang.String)
//  .publisherId(java.lang.String)
//  .type(java.lang.String)
//  .typeName(java.lang.String)
//  .typeNameAlias(java.lang.String)
//  .versionBump(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.autoUpdate">autoUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | Specifies logging configuration information for a type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.majorVersion">majorVersion</a></code> | <code>java.lang.String</code> | The Major Version of the type you want to enable. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.publicTypeArn">publicTypeArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Number (ARN) assigned to the public extension upon publication. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.publisherId">publisherId</a></code> | <code>java.lang.String</code> | The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.typeName">typeName</a></code> | <code>java.lang.String</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.typeNameAlias">typeNameAlias</a></code> | <code>java.lang.String</code> | An alias to assign to the public extension in this account and region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.versionBump">versionBump</a></code> | <code>java.lang.String</code> | Manually updates a previously-enabled type to a new major or minor version, if available. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoUpdate`<sup>Optional</sup> <a name="autoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.autoUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher.

Major versions released by the publisher must be manually updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#auto_update CloudformationTypeActivation#auto_update}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#execution_role_arn CloudformationTypeActivation#execution_role_arn}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#logging_config CloudformationTypeActivation#logging_config}

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.majorVersion"></a>

- *Type:* java.lang.String

The Major Version of the type you want to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#major_version CloudformationTypeActivation#major_version}

---

##### `publicTypeArn`<sup>Optional</sup> <a name="publicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.publicTypeArn"></a>

- *Type:* java.lang.String

The Amazon Resource Number (ARN) assigned to the public extension upon publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#public_type_arn CloudformationTypeActivation#public_type_arn}

---

##### `publisherId`<sup>Optional</sup> <a name="publisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.publisherId"></a>

- *Type:* java.lang.String

The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#publisher_id CloudformationTypeActivation#publisher_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#type CloudformationTypeActivation#type}

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.typeName"></a>

- *Type:* java.lang.String

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#type_name CloudformationTypeActivation#type_name}

---

##### `typeNameAlias`<sup>Optional</sup> <a name="typeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.typeNameAlias"></a>

- *Type:* java.lang.String

An alias to assign to the public extension in this account and region.

If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#type_name_alias CloudformationTypeActivation#type_name_alias}

---

##### `versionBump`<sup>Optional</sup> <a name="versionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.versionBump"></a>

- *Type:* java.lang.String

Manually updates a previously-enabled type to a new major or minor version, if available.

You can also use this parameter to update the value of AutoUpdateEnabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#version_bump CloudformationTypeActivation#version_bump}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate">resetAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion">resetMajorVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn">resetPublicTypeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId">resetPublisherId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias">resetTypeNameAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump">resetVersionBump</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig"></a>

```java
public void putLoggingConfig(CloudformationTypeActivationLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---

##### `resetAutoUpdate` <a name="resetAutoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate"></a>

```java
public void resetAutoUpdate()
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn"></a>

```java
public void resetExecutionRoleArn()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetMajorVersion` <a name="resetMajorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion"></a>

```java
public void resetMajorVersion()
```

##### `resetPublicTypeArn` <a name="resetPublicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn"></a>

```java
public void resetPublicTypeArn()
```

##### `resetPublisherId` <a name="resetPublisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId"></a>

```java
public void resetPublisherId()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType"></a>

```java
public void resetType()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypeNameAlias` <a name="resetTypeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias"></a>

```java
public void resetTypeNameAlias()
```

##### `resetVersionBump` <a name="resetVersionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump"></a>

```java
public void resetVersionBump()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudformation_type_activation.CloudformationTypeActivation;

CloudformationTypeActivation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudformation_type_activation.CloudformationTypeActivation;

CloudformationTypeActivation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudformation_type_activation.CloudformationTypeActivation;

CloudformationTypeActivation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudformation_type_activation.CloudformationTypeActivation;

CloudformationTypeActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudformationTypeActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudformationTypeActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudformationTypeActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationTypeActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput">autoUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput">loggingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput">majorVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput">publicTypeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput">publisherIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput">typeNameAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput">versionBumpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate">autoUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion">majorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn">publicTypeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId">publisherId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias">typeNameAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump">versionBump</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig"></a>

```java
public CloudformationTypeActivationLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a>

---

##### `autoUpdateInput`<sup>Optional</sup> <a name="autoUpdateInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput"></a>

```java
public IResolvable|CloudformationTypeActivationLoggingConfig getLoggingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---

##### `majorVersionInput`<sup>Optional</sup> <a name="majorVersionInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput"></a>

```java
public java.lang.String getMajorVersionInput();
```

- *Type:* java.lang.String

---

##### `publicTypeArnInput`<sup>Optional</sup> <a name="publicTypeArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput"></a>

```java
public java.lang.String getPublicTypeArnInput();
```

- *Type:* java.lang.String

---

##### `publisherIdInput`<sup>Optional</sup> <a name="publisherIdInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput"></a>

```java
public java.lang.String getPublisherIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `typeNameAliasInput`<sup>Optional</sup> <a name="typeNameAliasInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput"></a>

```java
public java.lang.String getTypeNameAliasInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `versionBumpInput`<sup>Optional</sup> <a name="versionBumpInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput"></a>

```java
public java.lang.String getVersionBumpInput();
```

- *Type:* java.lang.String

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion"></a>

```java
public java.lang.String getMajorVersion();
```

- *Type:* java.lang.String

---

##### `publicTypeArn`<sup>Required</sup> <a name="publicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn"></a>

```java
public java.lang.String getPublicTypeArn();
```

- *Type:* java.lang.String

---

##### `publisherId`<sup>Required</sup> <a name="publisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId"></a>

```java
public java.lang.String getPublisherId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typeNameAlias`<sup>Required</sup> <a name="typeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias"></a>

```java
public java.lang.String getTypeNameAlias();
```

- *Type:* java.lang.String

---

##### `versionBump`<sup>Required</sup> <a name="versionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump"></a>

```java
public java.lang.String getVersionBump();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationTypeActivationConfig <a name="CloudformationTypeActivationConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_type_activation.CloudformationTypeActivationConfig;

CloudformationTypeActivationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .autoUpdate(java.lang.Boolean|IResolvable)
//  .executionRoleArn(java.lang.String)
//  .loggingConfig(CloudformationTypeActivationLoggingConfig)
//  .majorVersion(java.lang.String)
//  .publicTypeArn(java.lang.String)
//  .publisherId(java.lang.String)
//  .type(java.lang.String)
//  .typeName(java.lang.String)
//  .typeNameAlias(java.lang.String)
//  .versionBump(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate">autoUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | Specifies logging configuration information for a type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion">majorVersion</a></code> | <code>java.lang.String</code> | The Major Version of the type you want to enable. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn">publicTypeArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Number (ARN) assigned to the public extension upon publication. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId">publisherId</a></code> | <code>java.lang.String</code> | The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type">type</a></code> | <code>java.lang.String</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName">typeName</a></code> | <code>java.lang.String</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias">typeNameAlias</a></code> | <code>java.lang.String</code> | An alias to assign to the public extension in this account and region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump">versionBump</a></code> | <code>java.lang.String</code> | Manually updates a previously-enabled type to a new major or minor version, if available. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoUpdate`<sup>Optional</sup> <a name="autoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher.

Major versions released by the publisher must be manually updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#auto_update CloudformationTypeActivation#auto_update}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#execution_role_arn CloudformationTypeActivation#execution_role_arn}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig"></a>

```java
public CloudformationTypeActivationLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#logging_config CloudformationTypeActivation#logging_config}

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion"></a>

```java
public java.lang.String getMajorVersion();
```

- *Type:* java.lang.String

The Major Version of the type you want to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#major_version CloudformationTypeActivation#major_version}

---

##### `publicTypeArn`<sup>Optional</sup> <a name="publicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn"></a>

```java
public java.lang.String getPublicTypeArn();
```

- *Type:* java.lang.String

The Amazon Resource Number (ARN) assigned to the public extension upon publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#public_type_arn CloudformationTypeActivation#public_type_arn}

---

##### `publisherId`<sup>Optional</sup> <a name="publisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId"></a>

```java
public java.lang.String getPublisherId();
```

- *Type:* java.lang.String

The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#publisher_id CloudformationTypeActivation#publisher_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#type CloudformationTypeActivation#type}

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#type_name CloudformationTypeActivation#type_name}

---

##### `typeNameAlias`<sup>Optional</sup> <a name="typeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias"></a>

```java
public java.lang.String getTypeNameAlias();
```

- *Type:* java.lang.String

An alias to assign to the public extension in this account and region.

If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#type_name_alias CloudformationTypeActivation#type_name_alias}

---

##### `versionBump`<sup>Optional</sup> <a name="versionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump"></a>

```java
public java.lang.String getVersionBump();
```

- *Type:* java.lang.String

Manually updates a previously-enabled type to a new major or minor version, if available.

You can also use this parameter to update the value of AutoUpdateEnabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#version_bump CloudformationTypeActivation#version_bump}

---

### CloudformationTypeActivationLoggingConfig <a name="CloudformationTypeActivationLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_type_activation.CloudformationTypeActivationLoggingConfig;

CloudformationTypeActivationLoggingConfig.builder()
//  .logGroupName(java.lang.String)
//  .logRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn">logRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs. |

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#log_group_name CloudformationTypeActivation#log_group_name}

---

##### `logRoleArn`<sup>Optional</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn"></a>

```java
public java.lang.String getLogRoleArn();
```

- *Type:* java.lang.String

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_type_activation#log_role_arn CloudformationTypeActivation#log_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationTypeActivationLoggingConfigOutputReference <a name="CloudformationTypeActivationLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_type_activation.CloudformationTypeActivationLoggingConfigOutputReference;

new CloudformationTypeActivationLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn">resetLogRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName"></a>

```java
public void resetLogGroupName()
```

##### `resetLogRoleArn` <a name="resetLogRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn"></a>

```java
public void resetLogRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput">logRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn">logRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `logRoleArnInput`<sup>Optional</sup> <a name="logRoleArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput"></a>

```java
public java.lang.String getLogRoleArnInput();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `logRoleArn`<sup>Required</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn"></a>

```java
public java.lang.String getLogRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationTypeActivationLoggingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---



