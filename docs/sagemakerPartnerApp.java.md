# `sagemakerPartnerApp` Submodule <a name="`sagemakerPartnerApp` Submodule" id="@cdktn/provider-awscc.sagemakerPartnerApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerPartnerApp <a name="SagemakerPartnerApp" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app awscc_sagemaker_partner_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerApp;

SagemakerPartnerApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authType(java.lang.String)
    .executionRoleArn(java.lang.String)
    .name(java.lang.String)
    .tier(java.lang.String)
    .type(java.lang.String)
//  .applicationConfig(SagemakerPartnerAppApplicationConfig)
//  .appVersion(java.lang.String)
//  .clientToken(java.lang.String)
//  .enableAutoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .enableIamSessionBasedIdentity(java.lang.Boolean|IResolvable)
//  .kmsKeyId(java.lang.String)
//  .maintenanceConfig(SagemakerPartnerAppMaintenanceConfig)
//  .tags(IResolvable|java.util.List<SagemakerPartnerAppTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | The Auth type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The execution role for the user. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | The tier of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.appVersion">appVersion</a></code> | <code>java.lang.String</code> | The version of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.clientToken">clientToken</a></code> | <code>java.lang.String</code> | The client token for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.enableAutoMinorVersionUpgrade">enableAutoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables automatic minor version upgrades for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.enableIamSessionBasedIdentity">enableIamSessionBasedIdentity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables IAM Session based Identity for PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>></code> | A list of tags to apply to the PartnerApp. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

The Auth type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#auth_type SagemakerPartnerApp#auth_type}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

The execution role for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#execution_role_arn SagemakerPartnerApp#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#name SagemakerPartnerApp#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

The tier of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#tier SagemakerPartnerApp#tier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#type SagemakerPartnerApp#type}

---

##### `applicationConfig`<sup>Optional</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.applicationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#application_config SagemakerPartnerApp#application_config}

---

##### `appVersion`<sup>Optional</sup> <a name="appVersion" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.appVersion"></a>

- *Type:* java.lang.String

The version of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#app_version SagemakerPartnerApp#app_version}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.clientToken"></a>

- *Type:* java.lang.String

The client token for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#client_token SagemakerPartnerApp#client_token}

---

##### `enableAutoMinorVersionUpgrade`<sup>Optional</sup> <a name="enableAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.enableAutoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables automatic minor version upgrades for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#enable_auto_minor_version_upgrade SagemakerPartnerApp#enable_auto_minor_version_upgrade}

---

##### `enableIamSessionBasedIdentity`<sup>Optional</sup> <a name="enableIamSessionBasedIdentity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.enableIamSessionBasedIdentity"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables IAM Session based Identity for PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#enable_iam_session_based_identity SagemakerPartnerApp#enable_iam_session_based_identity}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#kms_key_id SagemakerPartnerApp#kms_key_id}

---

##### `maintenanceConfig`<sup>Optional</sup> <a name="maintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.maintenanceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#maintenance_config SagemakerPartnerApp#maintenance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>>

A list of tags to apply to the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#tags SagemakerPartnerApp#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig">putApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putMaintenanceConfig">putMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetApplicationConfig">resetApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetAppVersion">resetAppVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableAutoMinorVersionUpgrade">resetEnableAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableIamSessionBasedIdentity">resetEnableIamSessionBasedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetMaintenanceConfig">resetMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationConfig` <a name="putApplicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig"></a>

```java
public void putApplicationConfig(SagemakerPartnerAppApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

---

##### `putMaintenanceConfig` <a name="putMaintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putMaintenanceConfig"></a>

```java
public void putMaintenanceConfig(SagemakerPartnerAppMaintenanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putMaintenanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerPartnerAppTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>>

---

##### `resetApplicationConfig` <a name="resetApplicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetApplicationConfig"></a>

```java
public void resetApplicationConfig()
```

##### `resetAppVersion` <a name="resetAppVersion" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetAppVersion"></a>

```java
public void resetAppVersion()
```

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetClientToken"></a>

```java
public void resetClientToken()
```

##### `resetEnableAutoMinorVersionUpgrade` <a name="resetEnableAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableAutoMinorVersionUpgrade"></a>

```java
public void resetEnableAutoMinorVersionUpgrade()
```

##### `resetEnableIamSessionBasedIdentity` <a name="resetEnableIamSessionBasedIdentity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableIamSessionBasedIdentity"></a>

```java
public void resetEnableIamSessionBasedIdentity()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMaintenanceConfig` <a name="resetMaintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetMaintenanceConfig"></a>

```java
public void resetMaintenanceConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerPartnerApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerApp;

SagemakerPartnerApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerApp;

SagemakerPartnerApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerApp;

SagemakerPartnerApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerApp;

SagemakerPartnerApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerPartnerApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerPartnerApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerPartnerApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerPartnerApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerPartnerApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference">SagemakerPartnerAppApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.currentVersionEolDate">currentVersionEolDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference">SagemakerPartnerAppMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList">SagemakerPartnerAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfigInput">applicationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersionInput">appVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientTokenInput">clientTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgradeInput">enableAutoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentityInput">enableIamSessionBasedIdentityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfigInput">maintenanceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersion">appVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgrade">enableAutoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentity">enableIamSessionBasedIdentity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationConfig`<sup>Required</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfig"></a>

```java
public SagemakerPartnerAppApplicationConfigOutputReference getApplicationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference">SagemakerPartnerAppApplicationConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `currentVersionEolDate`<sup>Required</sup> <a name="currentVersionEolDate" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.currentVersionEolDate"></a>

```java
public java.lang.String getCurrentVersionEolDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceConfig`<sup>Required</sup> <a name="maintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfig"></a>

```java
public SagemakerPartnerAppMaintenanceConfigOutputReference getMaintenanceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference">SagemakerPartnerAppMaintenanceConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tags"></a>

```java
public SagemakerPartnerAppTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList">SagemakerPartnerAppTagsList</a>

---

##### `applicationConfigInput`<sup>Optional</sup> <a name="applicationConfigInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfigInput"></a>

```java
public IResolvable|SagemakerPartnerAppApplicationConfig getApplicationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

---

##### `appVersionInput`<sup>Optional</sup> <a name="appVersionInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersionInput"></a>

```java
public java.lang.String getAppVersionInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientTokenInput"></a>

```java
public java.lang.String getClientTokenInput();
```

- *Type:* java.lang.String

---

##### `enableAutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="enableAutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableIamSessionBasedIdentityInput`<sup>Optional</sup> <a name="enableIamSessionBasedIdentityInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentityInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableIamSessionBasedIdentityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceConfigInput`<sup>Optional</sup> <a name="maintenanceConfigInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfigInput"></a>

```java
public IResolvable|SagemakerPartnerAppMaintenanceConfig getMaintenanceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerPartnerAppTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersion"></a>

```java
public java.lang.String getAppVersion();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `enableAutoMinorVersionUpgrade`<sup>Required</sup> <a name="enableAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableIamSessionBasedIdentity`<sup>Required</sup> <a name="enableIamSessionBasedIdentity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentity"></a>

```java
public java.lang.Boolean|IResolvable getEnableIamSessionBasedIdentity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerPartnerAppApplicationConfig <a name="SagemakerPartnerAppApplicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerAppApplicationConfig;

SagemakerPartnerAppApplicationConfig.builder()
//  .adminUsers(java.util.List<java.lang.String>)
//  .arguments(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.adminUsers">adminUsers</a></code> | <code>java.util.List<java.lang.String></code> | A list of users with administrator privileges for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.arguments">arguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of arguments to pass to the PartnerApp. |

---

##### `adminUsers`<sup>Optional</sup> <a name="adminUsers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.adminUsers"></a>

```java
public java.util.List<java.lang.String> getAdminUsers();
```

- *Type:* java.util.List<java.lang.String>

A list of users with administrator privileges for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#admin_users SagemakerPartnerApp#admin_users}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.arguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of arguments to pass to the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#arguments SagemakerPartnerApp#arguments}

---

### SagemakerPartnerAppConfig <a name="SagemakerPartnerAppConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerAppConfig;

SagemakerPartnerAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authType(java.lang.String)
    .executionRoleArn(java.lang.String)
    .name(java.lang.String)
    .tier(java.lang.String)
    .type(java.lang.String)
//  .applicationConfig(SagemakerPartnerAppApplicationConfig)
//  .appVersion(java.lang.String)
//  .clientToken(java.lang.String)
//  .enableAutoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .enableIamSessionBasedIdentity(java.lang.Boolean|IResolvable)
//  .kmsKeyId(java.lang.String)
//  .maintenanceConfig(SagemakerPartnerAppMaintenanceConfig)
//  .tags(IResolvable|java.util.List<SagemakerPartnerAppTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | The Auth type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The execution role for the user. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | The tier of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.appVersion">appVersion</a></code> | <code>java.lang.String</code> | The version of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | The client token for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableAutoMinorVersionUpgrade">enableAutoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables automatic minor version upgrades for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableIamSessionBasedIdentity">enableIamSessionBasedIdentity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables IAM Session based Identity for PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>></code> | A list of tags to apply to the PartnerApp. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

The Auth type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#auth_type SagemakerPartnerApp#auth_type}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

The execution role for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#execution_role_arn SagemakerPartnerApp#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#name SagemakerPartnerApp#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The tier of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#tier SagemakerPartnerApp#tier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#type SagemakerPartnerApp#type}

---

##### `applicationConfig`<sup>Optional</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.applicationConfig"></a>

```java
public SagemakerPartnerAppApplicationConfig getApplicationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#application_config SagemakerPartnerApp#application_config}

---

##### `appVersion`<sup>Optional</sup> <a name="appVersion" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.appVersion"></a>

```java
public java.lang.String getAppVersion();
```

- *Type:* java.lang.String

The version of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#app_version SagemakerPartnerApp#app_version}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

The client token for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#client_token SagemakerPartnerApp#client_token}

---

##### `enableAutoMinorVersionUpgrade`<sup>Optional</sup> <a name="enableAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableAutoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables automatic minor version upgrades for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#enable_auto_minor_version_upgrade SagemakerPartnerApp#enable_auto_minor_version_upgrade}

---

##### `enableIamSessionBasedIdentity`<sup>Optional</sup> <a name="enableIamSessionBasedIdentity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableIamSessionBasedIdentity"></a>

```java
public java.lang.Boolean|IResolvable getEnableIamSessionBasedIdentity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables IAM Session based Identity for PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#enable_iam_session_based_identity SagemakerPartnerApp#enable_iam_session_based_identity}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#kms_key_id SagemakerPartnerApp#kms_key_id}

---

##### `maintenanceConfig`<sup>Optional</sup> <a name="maintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.maintenanceConfig"></a>

```java
public SagemakerPartnerAppMaintenanceConfig getMaintenanceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#maintenance_config SagemakerPartnerApp#maintenance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerPartnerAppTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>>

A list of tags to apply to the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#tags SagemakerPartnerApp#tags}

---

### SagemakerPartnerAppMaintenanceConfig <a name="SagemakerPartnerAppMaintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerAppMaintenanceConfig;

SagemakerPartnerAppMaintenanceConfig.builder()
//  .maintenanceWindowStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>java.lang.String</code> | The maintenance window start day and time for the PartnerApp. |

---

##### `maintenanceWindowStart`<sup>Optional</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig.property.maintenanceWindowStart"></a>

```java
public java.lang.String getMaintenanceWindowStart();
```

- *Type:* java.lang.String

The maintenance window start day and time for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#maintenance_window_start SagemakerPartnerApp#maintenance_window_start}

---

### SagemakerPartnerAppTags <a name="SagemakerPartnerAppTags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerAppTags;

SagemakerPartnerAppTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#key SagemakerPartnerApp#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#value SagemakerPartnerApp#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#key SagemakerPartnerApp#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_partner_app#value SagemakerPartnerApp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerPartnerAppApplicationConfigOutputReference <a name="SagemakerPartnerAppApplicationConfigOutputReference" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerAppApplicationConfigOutputReference;

new SagemakerPartnerAppApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetAdminUsers">resetAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetArguments">resetArguments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminUsers` <a name="resetAdminUsers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetAdminUsers"></a>

```java
public void resetAdminUsers()
```

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetArguments"></a>

```java
public void resetArguments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsers">adminUsers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.arguments">arguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsersInput"></a>

```java
public java.util.List<java.lang.String> getAdminUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.argumentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getArgumentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsers"></a>

```java
public java.util.List<java.lang.String> getAdminUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.arguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerPartnerAppApplicationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

---


### SagemakerPartnerAppMaintenanceConfigOutputReference <a name="SagemakerPartnerAppMaintenanceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerAppMaintenanceConfigOutputReference;

new SagemakerPartnerAppMaintenanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resetMaintenanceWindowStart">resetMaintenanceWindowStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaintenanceWindowStart` <a name="resetMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resetMaintenanceWindowStart"></a>

```java
public void resetMaintenanceWindowStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStartInput">maintenanceWindowStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowStartInput`<sup>Optional</sup> <a name="maintenanceWindowStartInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStartInput"></a>

```java
public java.lang.String getMaintenanceWindowStartInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStart"></a>

```java
public java.lang.String getMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerPartnerAppMaintenanceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

---


### SagemakerPartnerAppTagsList <a name="SagemakerPartnerAppTagsList" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerAppTagsList;

new SagemakerPartnerAppTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.get"></a>

```java
public SagemakerPartnerAppTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerPartnerAppTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>>

---


### SagemakerPartnerAppTagsOutputReference <a name="SagemakerPartnerAppTagsOutputReference" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_partner_app.SagemakerPartnerAppTagsOutputReference;

new SagemakerPartnerAppTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerPartnerAppTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>

---



