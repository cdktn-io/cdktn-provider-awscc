# `appconfigConfigurationProfile` Submodule <a name="`appconfigConfigurationProfile` Submodule" id="@cdktn/provider-awscc.appconfigConfigurationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigConfigurationProfile <a name="AppconfigConfigurationProfile" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile awscc_appconfig_configuration_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfile;

AppconfigConfigurationProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .locationUri(java.lang.String)
    .name(java.lang.String)
//  .deletionProtectionCheck(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyIdentifier(java.lang.String)
//  .retrievalRoleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<AppconfigConfigurationProfileTags>)
//  .type(java.lang.String)
//  .validators(IResolvable|java.util.List<AppconfigConfigurationProfileValidators>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.locationUri">locationUri</a></code> | <code>java.lang.String</code> | A URI to locate the configuration. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name for the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.deletionProtectionCheck">deletionProtectionCheck</a></code> | <code>java.lang.String</code> | On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.retrievalRoleArn">retrievalRoleArn</a></code> | <code>java.lang.String</code> | The ARN of an IAM role with permission to access the configuration at the specified LocationUri. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>></code> | Metadata to assign to the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of configurations contained in the profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.validators">validators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>></code> | A list of methods for validating the configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.locationUri"></a>

- *Type:* java.lang.String

A URI to locate the configuration.

You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name for the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}

---

##### `deletionProtectionCheck`<sup>Optional</sup> <a name="deletionProtectionCheck" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.deletionProtectionCheck"></a>

- *Type:* java.lang.String

On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.

See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#deletion_protection_check AppconfigConfigurationProfile#deletion_protection_check}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* java.lang.String

The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#kms_key_identifier AppconfigConfigurationProfile#kms_key_identifier}

---

##### `retrievalRoleArn`<sup>Optional</sup> <a name="retrievalRoleArn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.retrievalRoleArn"></a>

- *Type:* java.lang.String

The ARN of an IAM role with permission to access the configuration at the specified LocationUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>>

Metadata to assign to the configuration profile.

Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of configurations contained in the profile.

When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}

---

##### `validators`<sup>Optional</sup> <a name="validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.validators"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>>

A list of methods for validating the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#validators AppconfigConfigurationProfile#validators}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidators">putValidators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDeletionProtectionCheck">resetDeletionProtectionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn">resetRetrievalRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidators">resetValidators</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppconfigConfigurationProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>>

---

##### `putValidators` <a name="putValidators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidators"></a>

```java
public void putValidators(IResolvable|java.util.List<AppconfigConfigurationProfileValidators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidators.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>>

---

##### `resetDeletionProtectionCheck` <a name="resetDeletionProtectionCheck" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDeletionProtectionCheck"></a>

```java
public void resetDeletionProtectionCheck()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetKmsKeyIdentifier"></a>

```java
public void resetKmsKeyIdentifier()
```

##### `resetRetrievalRoleArn` <a name="resetRetrievalRoleArn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn"></a>

```java
public void resetRetrievalRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetType"></a>

```java
public void resetType()
```

##### `resetValidators` <a name="resetValidators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidators"></a>

```java
public void resetValidators()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigConfigurationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfile;

AppconfigConfigurationProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfile;

AppconfigConfigurationProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfile;

AppconfigConfigurationProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfile;

AppconfigConfigurationProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppconfigConfigurationProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppconfigConfigurationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppconfigConfigurationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppconfigConfigurationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigConfigurationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList">AppconfigConfigurationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validators">validators</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList">AppconfigConfigurationProfileValidatorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheckInput">deletionProtectionCheckInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput">locationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput">retrievalRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorsInput">validatorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheck">deletionProtectionCheck</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn">retrievalRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId"></a>

```java
public java.lang.String getConfigurationProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags"></a>

```java
public AppconfigConfigurationProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList">AppconfigConfigurationProfileTagsList</a>

---

##### `validators`<sup>Required</sup> <a name="validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validators"></a>

```java
public AppconfigConfigurationProfileValidatorsList getValidators();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList">AppconfigConfigurationProfileValidatorsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionCheckInput`<sup>Optional</sup> <a name="deletionProtectionCheckInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheckInput"></a>

```java
public java.lang.String getDeletionProtectionCheckInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifierInput"></a>

```java
public java.lang.String getKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput"></a>

```java
public java.lang.String getLocationUriInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retrievalRoleArnInput`<sup>Optional</sup> <a name="retrievalRoleArnInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput"></a>

```java
public java.lang.String getRetrievalRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppconfigConfigurationProfileTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `validatorsInput`<sup>Optional</sup> <a name="validatorsInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorsInput"></a>

```java
public IResolvable|java.util.List<AppconfigConfigurationProfileValidators> getValidatorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `deletionProtectionCheck`<sup>Required</sup> <a name="deletionProtectionCheck" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheck"></a>

```java
public java.lang.String getDeletionProtectionCheck();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retrievalRoleArn`<sup>Required</sup> <a name="retrievalRoleArn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn"></a>

```java
public java.lang.String getRetrievalRoleArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigConfigurationProfileConfig <a name="AppconfigConfigurationProfileConfig" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfileConfig;

AppconfigConfigurationProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .locationUri(java.lang.String)
    .name(java.lang.String)
//  .deletionProtectionCheck(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyIdentifier(java.lang.String)
//  .retrievalRoleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<AppconfigConfigurationProfileTags>)
//  .type(java.lang.String)
//  .validators(IResolvable|java.util.List<AppconfigConfigurationProfileValidators>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | A URI to locate the configuration. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name for the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.deletionProtectionCheck">deletionProtectionCheck</a></code> | <code>java.lang.String</code> | On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn">retrievalRoleArn</a></code> | <code>java.lang.String</code> | The ARN of an IAM role with permission to access the configuration at the specified LocationUri. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>></code> | Metadata to assign to the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of configurations contained in the profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validators">validators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>></code> | A list of methods for validating the configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

A URI to locate the configuration.

You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}

---

##### `deletionProtectionCheck`<sup>Optional</sup> <a name="deletionProtectionCheck" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.deletionProtectionCheck"></a>

```java
public java.lang.String getDeletionProtectionCheck();
```

- *Type:* java.lang.String

On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.

See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#deletion_protection_check AppconfigConfigurationProfile#deletion_protection_check}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#kms_key_identifier AppconfigConfigurationProfile#kms_key_identifier}

---

##### `retrievalRoleArn`<sup>Optional</sup> <a name="retrievalRoleArn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn"></a>

```java
public java.lang.String getRetrievalRoleArn();
```

- *Type:* java.lang.String

The ARN of an IAM role with permission to access the configuration at the specified LocationUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppconfigConfigurationProfileTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>>

Metadata to assign to the configuration profile.

Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of configurations contained in the profile.

When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}

---

##### `validators`<sup>Optional</sup> <a name="validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validators"></a>

```java
public IResolvable|java.util.List<AppconfigConfigurationProfileValidators> getValidators();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>>

A list of methods for validating the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#validators AppconfigConfigurationProfile#validators}

---

### AppconfigConfigurationProfileTags <a name="AppconfigConfigurationProfileTags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfileTags;

AppconfigConfigurationProfileTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | The key-value string map. The tag key can be up to 128 characters and must not start with aws:. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value can be up to 256 characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key-value string map. The tag key can be up to 128 characters and must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#key AppconfigConfigurationProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value can be up to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#value AppconfigConfigurationProfile#value}

---

### AppconfigConfigurationProfileValidators <a name="AppconfigConfigurationProfileValidators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfileValidators;

AppconfigConfigurationProfileValidators.builder()
//  .content(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.content">content</a></code> | <code>java.lang.String</code> | Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.type">type</a></code> | <code>java.lang.String</code> | AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#content AppconfigConfigurationProfile#content}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigConfigurationProfileTagsList <a name="AppconfigConfigurationProfileTagsList" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfileTagsList;

new AppconfigConfigurationProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.get"></a>

```java
public AppconfigConfigurationProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppconfigConfigurationProfileTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>>

---


### AppconfigConfigurationProfileTagsOutputReference <a name="AppconfigConfigurationProfileTagsOutputReference" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfileTagsOutputReference;

new AppconfigConfigurationProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigConfigurationProfileTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>

---


### AppconfigConfigurationProfileValidatorsList <a name="AppconfigConfigurationProfileValidatorsList" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfileValidatorsList;

new AppconfigConfigurationProfileValidatorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.get"></a>

```java
public AppconfigConfigurationProfileValidatorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppconfigConfigurationProfileValidators> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>>

---


### AppconfigConfigurationProfileValidatorsOutputReference <a name="AppconfigConfigurationProfileValidatorsOutputReference" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_configuration_profile.AppconfigConfigurationProfileValidatorsOutputReference;

new AppconfigConfigurationProfileValidatorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigConfigurationProfileValidators getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>

---



