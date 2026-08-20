# `cognitoUserPoolRegionalConfigurationAttachment` Submodule <a name="`cognitoUserPoolRegionalConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolRegionalConfigurationAttachment <a name="CognitoUserPoolRegionalConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachment;

CognitoUserPoolRegionalConfigurationAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .emailConfiguration(CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration)
//  .lambdaConfig(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig)
//  .smsConfiguration(CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration)
//  .status(java.lang.String)
//  .userPoolTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.smsConfiguration">smsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The status of the replica. Set to ACTIVE or INACTIVE. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.userPoolTags">userPoolTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}.

---

##### `emailConfiguration`<sup>Optional</sup> <a name="emailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.emailConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}.

---

##### `smsConfiguration`<sup>Optional</sup> <a name="smsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.smsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The status of the replica. Set to ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#status CognitoUserPoolRegionalConfigurationAttachment#status}

---

##### `userPoolTags`<sup>Optional</sup> <a name="userPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.userPoolTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration">putEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration">putSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration">resetEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration">resetSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags">resetUserPoolTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmailConfiguration` <a name="putEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration"></a>

```java
public void putEmailConfiguration(CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig"></a>

```java
public void putLambdaConfig(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---

##### `putSmsConfiguration` <a name="putSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration"></a>

```java
public void putSmsConfiguration(CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---

##### `resetEmailConfiguration` <a name="resetEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration"></a>

```java
public void resetEmailConfiguration()
```

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig"></a>

```java
public void resetLambdaConfig()
```

##### `resetSmsConfiguration` <a name="resetSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration"></a>

```java
public void resetSmsConfiguration()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUserPoolTags` <a name="resetUserPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags"></a>

```java
public void resetUserPoolTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachment;

CognitoUserPoolRegionalConfigurationAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachment;

CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachment;

CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachment;

CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoUserPoolRegionalConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoUserPoolRegionalConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolRegionalConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration">smsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput">emailConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput">smsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput">userPoolTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags">userPoolTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `emailConfiguration`<sup>Required</sup> <a name="emailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference getEmailConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference getLambdaConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a>

---

##### `smsConfiguration`<sup>Required</sup> <a name="smsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference getSmsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a>

---

##### `emailConfigurationInput`<sup>Optional</sup> <a name="emailConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration getEmailConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig getLambdaConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---

##### `smsConfigurationInput`<sup>Optional</sup> <a name="smsConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration getSmsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `userPoolTagsInput`<sup>Optional</sup> <a name="userPoolTagsInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserPoolTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `userPoolTags`<sup>Required</sup> <a name="userPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserPoolTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolRegionalConfigurationAttachmentConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentConfig;

CognitoUserPoolRegionalConfigurationAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .emailConfiguration(CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration)
//  .lambdaConfig(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig)
//  .smsConfiguration(CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration)
//  .status(java.lang.String)
//  .userPoolTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration">smsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status">status</a></code> | <code>java.lang.String</code> | The status of the replica. Set to ACTIVE or INACTIVE. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags">userPoolTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}.

---

##### `emailConfiguration`<sup>Optional</sup> <a name="emailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration getEmailConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig getLambdaConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}.

---

##### `smsConfiguration`<sup>Optional</sup> <a name="smsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration getSmsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the replica. Set to ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#status CognitoUserPoolRegionalConfigurationAttachment#status}

---

##### `userPoolTags`<sup>Optional</sup> <a name="userPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserPoolTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}.

---

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration;

CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.builder()
//  .configurationSet(java.lang.String)
//  .emailSendingAccount(java.lang.String)
//  .from(java.lang.String)
//  .replyToEmailAddress(java.lang.String)
//  .sourceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet">configurationSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount">emailSendingAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress">replyToEmailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}. |

---

##### `configurationSet`<sup>Optional</sup> <a name="configurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet"></a>

```java
public java.lang.String getConfigurationSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}.

---

##### `emailSendingAccount`<sup>Optional</sup> <a name="emailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount"></a>

```java
public java.lang.String getEmailSendingAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}.

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}.

---

##### `replyToEmailAddress`<sup>Optional</sup> <a name="replyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress"></a>

```java
public java.lang.String getReplyToEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}.

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig;

CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.builder()
//  .createAuthChallenge(java.lang.String)
//  .customEmailSender(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender)
//  .customMessage(java.lang.String)
//  .customSmsSender(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender)
//  .defineAuthChallenge(java.lang.String)
//  .inboundFederation(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation)
//  .kmsKeyId(java.lang.String)
//  .postAuthentication(java.lang.String)
//  .postConfirmation(java.lang.String)
//  .preAuthentication(java.lang.String)
//  .preSignUp(java.lang.String)
//  .preTokenGeneration(java.lang.String)
//  .preTokenGenerationConfig(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig)
//  .userMigration(java.lang.String)
//  .verifyAuthChallengeResponse(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge">createAuthChallenge</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender">customEmailSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage">customMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender">customSmsSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge">defineAuthChallenge</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation">inboundFederation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication">postAuthentication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation">postConfirmation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication">preAuthentication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp">preSignUp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration">preTokenGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig">preTokenGenerationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration">userMigration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse">verifyAuthChallengeResponse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}. |

---

##### `createAuthChallenge`<sup>Optional</sup> <a name="createAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge"></a>

```java
public java.lang.String getCreateAuthChallenge();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}.

---

##### `customEmailSender`<sup>Optional</sup> <a name="customEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender getCustomEmailSender();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}.

---

##### `customMessage`<sup>Optional</sup> <a name="customMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage"></a>

```java
public java.lang.String getCustomMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}.

---

##### `customSmsSender`<sup>Optional</sup> <a name="customSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender getCustomSmsSender();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}.

---

##### `defineAuthChallenge`<sup>Optional</sup> <a name="defineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge"></a>

```java
public java.lang.String getDefineAuthChallenge();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}.

---

##### `inboundFederation`<sup>Optional</sup> <a name="inboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation getInboundFederation();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}.

---

##### `postAuthentication`<sup>Optional</sup> <a name="postAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication"></a>

```java
public java.lang.String getPostAuthentication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}.

---

##### `postConfirmation`<sup>Optional</sup> <a name="postConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation"></a>

```java
public java.lang.String getPostConfirmation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}.

---

##### `preAuthentication`<sup>Optional</sup> <a name="preAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication"></a>

```java
public java.lang.String getPreAuthentication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}.

---

##### `preSignUp`<sup>Optional</sup> <a name="preSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp"></a>

```java
public java.lang.String getPreSignUp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}.

---

##### `preTokenGeneration`<sup>Optional</sup> <a name="preTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration"></a>

```java
public java.lang.String getPreTokenGeneration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}.

---

##### `preTokenGenerationConfig`<sup>Optional</sup> <a name="preTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig getPreTokenGenerationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}.

---

##### `userMigration`<sup>Optional</sup> <a name="userMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration"></a>

```java
public java.lang.String getUserMigration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}.

---

##### `verifyAuthChallengeResponse`<sup>Optional</sup> <a name="verifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse"></a>

```java
public java.lang.String getVerifyAuthChallengeResponse();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender;

CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.builder()
//  .lambdaArn(java.lang.String)
//  .lambdaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender;

CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.builder()
//  .lambdaArn(java.lang.String)
//  .lambdaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation;

CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.builder()
//  .lambdaArn(java.lang.String)
//  .lambdaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig;

CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.builder()
//  .lambdaArn(java.lang.String)
//  .lambdaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration;

CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.builder()
//  .eumsSms(CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms)
//  .externalId(java.lang.String)
//  .snsCallerArn(java.lang.String)
//  .snsRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms">eumsSms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn">snsCallerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion">snsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}. |

---

##### `eumsSms`<sup>Optional</sup> <a name="eumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms getEumsSms();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `snsCallerArn`<sup>Optional</sup> <a name="snsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn"></a>

```java
public java.lang.String getSnsCallerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}.

---

##### `snsRegion`<sup>Optional</sup> <a name="snsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion"></a>

```java
public java.lang.String getSnsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms;

CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.builder()
//  .callerArn(java.lang.String)
//  .configurationSetName(java.lang.String)
//  .externalId(java.lang.String)
//  .inEntityId(java.lang.String)
//  .inTemplateId(java.lang.String)
//  .originationIdentity(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn">callerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId">inEntityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId">inTemplateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity">originationIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}. |

---

##### `callerArn`<sup>Optional</sup> <a name="callerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn"></a>

```java
public java.lang.String getCallerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}.

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `inEntityId`<sup>Optional</sup> <a name="inEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId"></a>

```java
public java.lang.String getInEntityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}.

---

##### `inTemplateId`<sup>Optional</sup> <a name="inTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId"></a>

```java
public java.lang.String getInTemplateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}.

---

##### `originationIdentity`<sup>Optional</sup> <a name="originationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity"></a>

```java
public java.lang.String getOriginationIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference;

new CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet">resetConfigurationSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount">resetEmailSendingAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress">resetReplyToEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn">resetSourceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationSet` <a name="resetConfigurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet"></a>

```java
public void resetConfigurationSet()
```

##### `resetEmailSendingAccount` <a name="resetEmailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```java
public void resetEmailSendingAccount()
```

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetReplyToEmailAddress` <a name="resetReplyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```java
public void resetReplyToEmailAddress()
```

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn"></a>

```java
public void resetSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput">configurationSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput">emailSendingAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput">replyToEmailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput">sourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet">configurationSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount">emailSendingAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress">replyToEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationSetInput`<sup>Optional</sup> <a name="configurationSetInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput"></a>

```java
public java.lang.String getConfigurationSetInput();
```

- *Type:* java.lang.String

---

##### `emailSendingAccountInput`<sup>Optional</sup> <a name="emailSendingAccountInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```java
public java.lang.String getEmailSendingAccountInput();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `replyToEmailAddressInput`<sup>Optional</sup> <a name="replyToEmailAddressInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```java
public java.lang.String getReplyToEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput"></a>

```java
public java.lang.String getSourceArnInput();
```

- *Type:* java.lang.String

---

##### `configurationSet`<sup>Required</sup> <a name="configurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet"></a>

```java
public java.lang.String getConfigurationSet();
```

- *Type:* java.lang.String

---

##### `emailSendingAccount`<sup>Required</sup> <a name="emailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```java
public java.lang.String getEmailSendingAccount();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `replyToEmailAddress`<sup>Required</sup> <a name="replyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```java
public java.lang.String getReplyToEmailAddress();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion">resetLambdaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn"></a>

```java
public void resetLambdaArn()
```

##### `resetLambdaVersion` <a name="resetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion"></a>

```java
public void resetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```java
public java.lang.String getLambdaVersionInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion">resetLambdaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn"></a>

```java
public void resetLambdaArn()
```

##### `resetLambdaVersion` <a name="resetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion"></a>

```java
public void resetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```java
public java.lang.String getLambdaVersionInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion">resetLambdaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn"></a>

```java
public void resetLambdaArn()
```

##### `resetLambdaVersion` <a name="resetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion"></a>

```java
public void resetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput"></a>

```java
public java.lang.String getLambdaVersionInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender">putCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender">putCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation">putInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig">putPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge">resetCreateAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender">resetCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage">resetCustomMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender">resetCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge">resetDefineAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation">resetInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication">resetPostAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation">resetPostConfirmation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication">resetPreAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp">resetPreSignUp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration">resetPreTokenGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig">resetPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration">resetUserMigration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse">resetVerifyAuthChallengeResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomEmailSender` <a name="putCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender"></a>

```java
public void putCustomEmailSender(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---

##### `putCustomSmsSender` <a name="putCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender"></a>

```java
public void putCustomSmsSender(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---

##### `putInboundFederation` <a name="putInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation"></a>

```java
public void putInboundFederation(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---

##### `putPreTokenGenerationConfig` <a name="putPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig"></a>

```java
public void putPreTokenGenerationConfig(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---

##### `resetCreateAuthChallenge` <a name="resetCreateAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```java
public void resetCreateAuthChallenge()
```

##### `resetCustomEmailSender` <a name="resetCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender"></a>

```java
public void resetCustomEmailSender()
```

##### `resetCustomMessage` <a name="resetCustomMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage"></a>

```java
public void resetCustomMessage()
```

##### `resetCustomSmsSender` <a name="resetCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender"></a>

```java
public void resetCustomSmsSender()
```

##### `resetDefineAuthChallenge` <a name="resetDefineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```java
public void resetDefineAuthChallenge()
```

##### `resetInboundFederation` <a name="resetInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation"></a>

```java
public void resetInboundFederation()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPostAuthentication` <a name="resetPostAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication"></a>

```java
public void resetPostAuthentication()
```

##### `resetPostConfirmation` <a name="resetPostConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation"></a>

```java
public void resetPostConfirmation()
```

##### `resetPreAuthentication` <a name="resetPreAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication"></a>

```java
public void resetPreAuthentication()
```

##### `resetPreSignUp` <a name="resetPreSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp"></a>

```java
public void resetPreSignUp()
```

##### `resetPreTokenGeneration` <a name="resetPreTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```java
public void resetPreTokenGeneration()
```

##### `resetPreTokenGenerationConfig` <a name="resetPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig"></a>

```java
public void resetPreTokenGenerationConfig()
```

##### `resetUserMigration` <a name="resetUserMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration"></a>

```java
public void resetUserMigration()
```

##### `resetVerifyAuthChallengeResponse` <a name="resetVerifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```java
public void resetVerifyAuthChallengeResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender">customEmailSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender">customSmsSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation">inboundFederation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig">preTokenGenerationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput">createAuthChallengeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput">customEmailSenderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput">customMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput">customSmsSenderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput">defineAuthChallengeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput">inboundFederationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput">postAuthenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput">postConfirmationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput">preAuthenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput">preSignUpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput">preTokenGenerationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput">preTokenGenerationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput">userMigrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">verifyAuthChallengeResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge">createAuthChallenge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage">customMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge">defineAuthChallenge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication">postAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation">postConfirmation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication">preAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp">preSignUp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration">preTokenGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration">userMigration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse">verifyAuthChallengeResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customEmailSender`<sup>Required</sup> <a name="customEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference getCustomEmailSender();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `customSmsSender`<sup>Required</sup> <a name="customSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference getCustomSmsSender();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `inboundFederation`<sup>Required</sup> <a name="inboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference getInboundFederation();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a>

---

##### `preTokenGenerationConfig`<sup>Required</sup> <a name="preTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference getPreTokenGenerationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a>

---

##### `createAuthChallengeInput`<sup>Optional</sup> <a name="createAuthChallengeInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```java
public java.lang.String getCreateAuthChallengeInput();
```

- *Type:* java.lang.String

---

##### `customEmailSenderInput`<sup>Optional</sup> <a name="customEmailSenderInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender getCustomEmailSenderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---

##### `customMessageInput`<sup>Optional</sup> <a name="customMessageInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput"></a>

```java
public java.lang.String getCustomMessageInput();
```

- *Type:* java.lang.String

---

##### `customSmsSenderInput`<sup>Optional</sup> <a name="customSmsSenderInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender getCustomSmsSenderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---

##### `defineAuthChallengeInput`<sup>Optional</sup> <a name="defineAuthChallengeInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```java
public java.lang.String getDefineAuthChallengeInput();
```

- *Type:* java.lang.String

---

##### `inboundFederationInput`<sup>Optional</sup> <a name="inboundFederationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation getInboundFederationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `postAuthenticationInput`<sup>Optional</sup> <a name="postAuthenticationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```java
public java.lang.String getPostAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `postConfirmationInput`<sup>Optional</sup> <a name="postConfirmationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput"></a>

```java
public java.lang.String getPostConfirmationInput();
```

- *Type:* java.lang.String

---

##### `preAuthenticationInput`<sup>Optional</sup> <a name="preAuthenticationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```java
public java.lang.String getPreAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `preSignUpInput`<sup>Optional</sup> <a name="preSignUpInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput"></a>

```java
public java.lang.String getPreSignUpInput();
```

- *Type:* java.lang.String

---

##### `preTokenGenerationConfigInput`<sup>Optional</sup> <a name="preTokenGenerationConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig getPreTokenGenerationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---

##### `preTokenGenerationInput`<sup>Optional</sup> <a name="preTokenGenerationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```java
public java.lang.String getPreTokenGenerationInput();
```

- *Type:* java.lang.String

---

##### `userMigrationInput`<sup>Optional</sup> <a name="userMigrationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput"></a>

```java
public java.lang.String getUserMigrationInput();
```

- *Type:* java.lang.String

---

##### `verifyAuthChallengeResponseInput`<sup>Optional</sup> <a name="verifyAuthChallengeResponseInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```java
public java.lang.String getVerifyAuthChallengeResponseInput();
```

- *Type:* java.lang.String

---

##### `createAuthChallenge`<sup>Required</sup> <a name="createAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge"></a>

```java
public java.lang.String getCreateAuthChallenge();
```

- *Type:* java.lang.String

---

##### `customMessage`<sup>Required</sup> <a name="customMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage"></a>

```java
public java.lang.String getCustomMessage();
```

- *Type:* java.lang.String

---

##### `defineAuthChallenge`<sup>Required</sup> <a name="defineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```java
public java.lang.String getDefineAuthChallenge();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `postAuthentication`<sup>Required</sup> <a name="postAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication"></a>

```java
public java.lang.String getPostAuthentication();
```

- *Type:* java.lang.String

---

##### `postConfirmation`<sup>Required</sup> <a name="postConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation"></a>

```java
public java.lang.String getPostConfirmation();
```

- *Type:* java.lang.String

---

##### `preAuthentication`<sup>Required</sup> <a name="preAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication"></a>

```java
public java.lang.String getPreAuthentication();
```

- *Type:* java.lang.String

---

##### `preSignUp`<sup>Required</sup> <a name="preSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp"></a>

```java
public java.lang.String getPreSignUp();
```

- *Type:* java.lang.String

---

##### `preTokenGeneration`<sup>Required</sup> <a name="preTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration"></a>

```java
public java.lang.String getPreTokenGeneration();
```

- *Type:* java.lang.String

---

##### `userMigration`<sup>Required</sup> <a name="userMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration"></a>

```java
public java.lang.String getUserMigration();
```

- *Type:* java.lang.String

---

##### `verifyAuthChallengeResponse`<sup>Required</sup> <a name="verifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```java
public java.lang.String getVerifyAuthChallengeResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion">resetLambdaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn"></a>

```java
public void resetLambdaArn()
```

##### `resetLambdaVersion` <a name="resetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion"></a>

```java
public void resetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput"></a>

```java
public java.lang.String getLambdaVersionInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference;

new CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn">resetCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName">resetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId">resetInEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId">resetInTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity">resetOriginationIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCallerArn` <a name="resetCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn"></a>

```java
public void resetCallerArn()
```

##### `resetConfigurationSetName` <a name="resetConfigurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName"></a>

```java
public void resetConfigurationSetName()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetInEntityId` <a name="resetInEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId"></a>

```java
public void resetInEntityId()
```

##### `resetInTemplateId` <a name="resetInTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId"></a>

```java
public void resetInTemplateId()
```

##### `resetOriginationIdentity` <a name="resetOriginationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity"></a>

```java
public void resetOriginationIdentity()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput">callerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput">inEntityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput">inTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput">originationIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn">callerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId">inEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId">inTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity">originationIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `callerArnInput`<sup>Optional</sup> <a name="callerArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput"></a>

```java
public java.lang.String getCallerArnInput();
```

- *Type:* java.lang.String

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput"></a>

```java
public java.lang.String getConfigurationSetNameInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `inEntityIdInput`<sup>Optional</sup> <a name="inEntityIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput"></a>

```java
public java.lang.String getInEntityIdInput();
```

- *Type:* java.lang.String

---

##### `inTemplateIdInput`<sup>Optional</sup> <a name="inTemplateIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput"></a>

```java
public java.lang.String getInTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `originationIdentityInput`<sup>Optional</sup> <a name="originationIdentityInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput"></a>

```java
public java.lang.String getOriginationIdentityInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `callerArn`<sup>Required</sup> <a name="callerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn"></a>

```java
public java.lang.String getCallerArn();
```

- *Type:* java.lang.String

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `inEntityId`<sup>Required</sup> <a name="inEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId"></a>

```java
public java.lang.String getInEntityId();
```

- *Type:* java.lang.String

---

##### `inTemplateId`<sup>Required</sup> <a name="inTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId"></a>

```java
public java.lang.String getInTemplateId();
```

- *Type:* java.lang.String

---

##### `originationIdentity`<sup>Required</sup> <a name="originationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity"></a>

```java
public java.lang.String getOriginationIdentity();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_regional_configuration_attachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference;

new CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms">putEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms">resetEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn">resetSnsCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion">resetSnsRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEumsSms` <a name="putEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms"></a>

```java
public void putEumsSms(CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---

##### `resetEumsSms` <a name="resetEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms"></a>

```java
public void resetEumsSms()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetSnsCallerArn` <a name="resetSnsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn"></a>

```java
public void resetSnsCallerArn()
```

##### `resetSnsRegion` <a name="resetSnsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion"></a>

```java
public void resetSnsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms">eumsSms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput">eumsSmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput">snsCallerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput">snsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn">snsCallerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion">snsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eumsSms`<sup>Required</sup> <a name="eumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms"></a>

```java
public CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference getEumsSms();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a>

---

##### `eumsSmsInput`<sup>Optional</sup> <a name="eumsSmsInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms getEumsSmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `snsCallerArnInput`<sup>Optional</sup> <a name="snsCallerArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```java
public java.lang.String getSnsCallerArnInput();
```

- *Type:* java.lang.String

---

##### `snsRegionInput`<sup>Optional</sup> <a name="snsRegionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput"></a>

```java
public java.lang.String getSnsRegionInput();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `snsCallerArn`<sup>Required</sup> <a name="snsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn"></a>

```java
public java.lang.String getSnsCallerArn();
```

- *Type:* java.lang.String

---

##### `snsRegion`<sup>Required</sup> <a name="snsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion"></a>

```java
public java.lang.String getSnsRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---



