# `secretsmanagerRotationSchedule` Submodule <a name="`secretsmanagerRotationSchedule` Submodule" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerRotationSchedule <a name="SecretsmanagerRotationSchedule" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule awscc_secretsmanager_rotation_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationSchedule;

SecretsmanagerRotationSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretId(java.lang.String)
//  .externalSecretRotationMetadata(IResolvable|java.util.List<SecretsmanagerRotationScheduleExternalSecretRotationMetadata>)
//  .externalSecretRotationRoleArn(java.lang.String)
//  .hostedRotationLambda(SecretsmanagerRotationScheduleHostedRotationLambda)
//  .rotateImmediatelyOnUpdate(java.lang.Boolean|IResolvable)
//  .rotationLambdaArn(java.lang.String)
//  .rotationRules(SecretsmanagerRotationScheduleRotationRules)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | The ARN or name of the secret to rotate. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.externalSecretRotationMetadata">externalSecretRotationMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>></code> | The list of metadata needed to successfully rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.externalSecretRotationRoleArn">externalSecretRotationRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.hostedRotationLambda">hostedRotationLambda</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.rotateImmediatelyOnUpdate">rotateImmediatelyOnUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.rotationLambdaArn">rotationLambdaArn</a></code> | <code>java.lang.String</code> | The ARN of an existing Lambda rotation function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.rotationRules">rotationRules</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | A structure that defines the rotation configuration for this secret. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

The ARN or name of the secret to rotate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#secret_id SecretsmanagerRotationSchedule#secret_id}

---

##### `externalSecretRotationMetadata`<sup>Optional</sup> <a name="externalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.externalSecretRotationMetadata"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>>

The list of metadata needed to successfully rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_metadata SecretsmanagerRotationSchedule#external_secret_rotation_metadata}

---

##### `externalSecretRotationRoleArn`<sup>Optional</sup> <a name="externalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.externalSecretRotationRoleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_role_arn SecretsmanagerRotationSchedule#external_secret_rotation_role_arn}

---

##### `hostedRotationLambda`<sup>Optional</sup> <a name="hostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.hostedRotationLambda"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates.

To use a rotation function that already exists, specify RotationLambdaARN instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#hosted_rotation_lambda SecretsmanagerRotationSchedule#hosted_rotation_lambda}

---

##### `rotateImmediatelyOnUpdate`<sup>Optional</sup> <a name="rotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.rotateImmediatelyOnUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotate_immediately_on_update SecretsmanagerRotationSchedule#rotate_immediately_on_update}

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="rotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.rotationLambdaArn"></a>

- *Type:* java.lang.String

The ARN of an existing Lambda rotation function.

To specify a rotation function that is also defined in this template, use the Ref function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_arn SecretsmanagerRotationSchedule#rotation_lambda_arn}

---

##### `rotationRules`<sup>Optional</sup> <a name="rotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.rotationRules"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

A structure that defines the rotation configuration for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_rules SecretsmanagerRotationSchedule#rotation_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata">putExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda">putHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules">putRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationMetadata">resetExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationRoleArn">resetExternalSecretRotationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetHostedRotationLambda">resetHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotateImmediatelyOnUpdate">resetRotateImmediatelyOnUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationLambdaArn">resetRotationLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationRules">resetRotationRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalSecretRotationMetadata` <a name="putExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata"></a>

```java
public void putExternalSecretRotationMetadata(IResolvable|java.util.List<SecretsmanagerRotationScheduleExternalSecretRotationMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>>

---

##### `putHostedRotationLambda` <a name="putHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda"></a>

```java
public void putHostedRotationLambda(SecretsmanagerRotationScheduleHostedRotationLambda value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---

##### `putRotationRules` <a name="putRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules"></a>

```java
public void putRotationRules(SecretsmanagerRotationScheduleRotationRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---

##### `resetExternalSecretRotationMetadata` <a name="resetExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationMetadata"></a>

```java
public void resetExternalSecretRotationMetadata()
```

##### `resetExternalSecretRotationRoleArn` <a name="resetExternalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationRoleArn"></a>

```java
public void resetExternalSecretRotationRoleArn()
```

##### `resetHostedRotationLambda` <a name="resetHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetHostedRotationLambda"></a>

```java
public void resetHostedRotationLambda()
```

##### `resetRotateImmediatelyOnUpdate` <a name="resetRotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotateImmediatelyOnUpdate"></a>

```java
public void resetRotateImmediatelyOnUpdate()
```

##### `resetRotationLambdaArn` <a name="resetRotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationLambdaArn"></a>

```java
public void resetRotationLambdaArn()
```

##### `resetRotationRules` <a name="resetRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationRules"></a>

```java
public void resetRotationRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationSchedule;

SecretsmanagerRotationSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationSchedule;

SecretsmanagerRotationSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationSchedule;

SecretsmanagerRotationSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationSchedule;

SecretsmanagerRotationSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretsmanagerRotationSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretsmanagerRotationSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretsmanagerRotationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerRotationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadata">externalSecretRotationMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList">SecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambda">hostedRotationLambda</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference">SecretsmanagerRotationScheduleRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationScheduleId">rotationScheduleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadataInput">externalSecretRotationMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArnInput">externalSecretRotationRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambdaInput">hostedRotationLambdaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdateInput">rotateImmediatelyOnUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArnInput">rotationLambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRulesInput">rotationRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn">externalSecretRotationRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate">rotateImmediatelyOnUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `externalSecretRotationMetadata`<sup>Required</sup> <a name="externalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadata"></a>

```java
public SecretsmanagerRotationScheduleExternalSecretRotationMetadataList getExternalSecretRotationMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList">SecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a>

---

##### `hostedRotationLambda`<sup>Required</sup> <a name="hostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambda"></a>

```java
public SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference getHostedRotationLambda();
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRules"></a>

```java
public SecretsmanagerRotationScheduleRotationRulesOutputReference getRotationRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference">SecretsmanagerRotationScheduleRotationRulesOutputReference</a>

---

##### `rotationScheduleId`<sup>Required</sup> <a name="rotationScheduleId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationScheduleId"></a>

```java
public java.lang.String getRotationScheduleId();
```

- *Type:* java.lang.String

---

##### `externalSecretRotationMetadataInput`<sup>Optional</sup> <a name="externalSecretRotationMetadataInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadataInput"></a>

```java
public IResolvable|java.util.List<SecretsmanagerRotationScheduleExternalSecretRotationMetadata> getExternalSecretRotationMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>>

---

##### `externalSecretRotationRoleArnInput`<sup>Optional</sup> <a name="externalSecretRotationRoleArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArnInput"></a>

```java
public java.lang.String getExternalSecretRotationRoleArnInput();
```

- *Type:* java.lang.String

---

##### `hostedRotationLambdaInput`<sup>Optional</sup> <a name="hostedRotationLambdaInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambdaInput"></a>

```java
public IResolvable|SecretsmanagerRotationScheduleHostedRotationLambda getHostedRotationLambdaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---

##### `rotateImmediatelyOnUpdateInput`<sup>Optional</sup> <a name="rotateImmediatelyOnUpdateInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getRotateImmediatelyOnUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rotationLambdaArnInput`<sup>Optional</sup> <a name="rotationLambdaArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArnInput"></a>

```java
public java.lang.String getRotationLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `rotationRulesInput`<sup>Optional</sup> <a name="rotationRulesInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRulesInput"></a>

```java
public IResolvable|SecretsmanagerRotationScheduleRotationRules getRotationRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `externalSecretRotationRoleArn`<sup>Required</sup> <a name="externalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn"></a>

```java
public java.lang.String getExternalSecretRotationRoleArn();
```

- *Type:* java.lang.String

---

##### `rotateImmediatelyOnUpdate`<sup>Required</sup> <a name="rotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate"></a>

```java
public java.lang.Boolean|IResolvable getRotateImmediatelyOnUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rotationLambdaArn`<sup>Required</sup> <a name="rotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArn"></a>

```java
public java.lang.String getRotationLambdaArn();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerRotationScheduleConfig <a name="SecretsmanagerRotationScheduleConfig" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationScheduleConfig;

SecretsmanagerRotationScheduleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretId(java.lang.String)
//  .externalSecretRotationMetadata(IResolvable|java.util.List<SecretsmanagerRotationScheduleExternalSecretRotationMetadata>)
//  .externalSecretRotationRoleArn(java.lang.String)
//  .hostedRotationLambda(SecretsmanagerRotationScheduleHostedRotationLambda)
//  .rotateImmediatelyOnUpdate(java.lang.Boolean|IResolvable)
//  .rotationLambdaArn(java.lang.String)
//  .rotationRules(SecretsmanagerRotationScheduleRotationRules)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The ARN or name of the secret to rotate. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationMetadata">externalSecretRotationMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>></code> | The list of metadata needed to successfully rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationRoleArn">externalSecretRotationRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.hostedRotationLambda">hostedRotationLambda</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotateImmediatelyOnUpdate">rotateImmediatelyOnUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>java.lang.String</code> | The ARN of an existing Lambda rotation function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | A structure that defines the rotation configuration for this secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The ARN or name of the secret to rotate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#secret_id SecretsmanagerRotationSchedule#secret_id}

---

##### `externalSecretRotationMetadata`<sup>Optional</sup> <a name="externalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationMetadata"></a>

```java
public IResolvable|java.util.List<SecretsmanagerRotationScheduleExternalSecretRotationMetadata> getExternalSecretRotationMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>>

The list of metadata needed to successfully rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_metadata SecretsmanagerRotationSchedule#external_secret_rotation_metadata}

---

##### `externalSecretRotationRoleArn`<sup>Optional</sup> <a name="externalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationRoleArn"></a>

```java
public java.lang.String getExternalSecretRotationRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_role_arn SecretsmanagerRotationSchedule#external_secret_rotation_role_arn}

---

##### `hostedRotationLambda`<sup>Optional</sup> <a name="hostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.hostedRotationLambda"></a>

```java
public SecretsmanagerRotationScheduleHostedRotationLambda getHostedRotationLambda();
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates.

To use a rotation function that already exists, specify RotationLambdaARN instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#hosted_rotation_lambda SecretsmanagerRotationSchedule#hosted_rotation_lambda}

---

##### `rotateImmediatelyOnUpdate`<sup>Optional</sup> <a name="rotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotateImmediatelyOnUpdate"></a>

```java
public java.lang.Boolean|IResolvable getRotateImmediatelyOnUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotate_immediately_on_update SecretsmanagerRotationSchedule#rotate_immediately_on_update}

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="rotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationLambdaArn"></a>

```java
public java.lang.String getRotationLambdaArn();
```

- *Type:* java.lang.String

The ARN of an existing Lambda rotation function.

To specify a rotation function that is also defined in this template, use the Ref function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_arn SecretsmanagerRotationSchedule#rotation_lambda_arn}

---

##### `rotationRules`<sup>Optional</sup> <a name="rotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationRules"></a>

```java
public SecretsmanagerRotationScheduleRotationRules getRotationRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

A structure that defines the rotation configuration for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_rules SecretsmanagerRotationSchedule#rotation_rules}

---

### SecretsmanagerRotationScheduleExternalSecretRotationMetadata <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata;

SecretsmanagerRotationScheduleExternalSecretRotationMetadata.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the metadata item. You can specify a value that's 1 to 256 characters in length. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.value">value</a></code> | <code>java.lang.String</code> | The value for the metadata item. You can specify a value that's 1 to 2048 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the metadata item. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#key SecretsmanagerRotationSchedule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the metadata item. You can specify a value that's 1 to 2048 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#value SecretsmanagerRotationSchedule#value}

---

### SecretsmanagerRotationScheduleHostedRotationLambda <a name="SecretsmanagerRotationScheduleHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationScheduleHostedRotationLambda;

SecretsmanagerRotationScheduleHostedRotationLambda.builder()
//  .excludeCharacters(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .masterSecretArn(java.lang.String)
//  .masterSecretKmsKeyArn(java.lang.String)
//  .rotationLambdaName(java.lang.String)
//  .rotationType(java.lang.String)
//  .runtime(java.lang.String)
//  .superuserSecretArn(java.lang.String)
//  .superuserSecretKmsKeyArn(java.lang.String)
//  .vpcSecurityGroupIds(java.lang.String)
//  .vpcSubnetIds(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.excludeCharacters">excludeCharacters</a></code> | <code>java.lang.String</code> | A string of the characters that you don't want in the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key that Secrets Manager uses to encrypt the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretArn">masterSecretArn</a></code> | <code>java.lang.String</code> | The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretKmsKeyArn">masterSecretKmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationLambdaName">rotationLambdaName</a></code> | <code>java.lang.String</code> | The name of the Lambda rotation function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationType">rotationType</a></code> | <code>java.lang.String</code> | The type of rotation template to use. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The python runtime associated with the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretArn">superuserSecretArn</a></code> | <code>java.lang.String</code> | The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretKmsKeyArn">superuserSecretKmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.lang.String</code> | A comma-separated list of security group IDs applied to the target database. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.lang.String</code> | A comma separated list of VPC subnet IDs of the target database network. |

---

##### `excludeCharacters`<sup>Optional</sup> <a name="excludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.excludeCharacters"></a>

```java
public java.lang.String getExcludeCharacters();
```

- *Type:* java.lang.String

A string of the characters that you don't want in the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#exclude_characters SecretsmanagerRotationSchedule#exclude_characters}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key that Secrets Manager uses to encrypt the secret.

If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If aws/secretsmanager doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#kms_key_arn SecretsmanagerRotationSchedule#kms_key_arn}

---

##### `masterSecretArn`<sup>Optional</sup> <a name="masterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretArn"></a>

```java
public java.lang.String getMasterSecretArn();
```

- *Type:* java.lang.String

The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy.

CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#master_secret_arn SecretsmanagerRotationSchedule#master_secret_arn}

---

##### `masterSecretKmsKeyArn`<sup>Optional</sup> <a name="masterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretKmsKeyArn"></a>

```java
public java.lang.String getMasterSecretKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key.

You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#master_secret_kms_key_arn SecretsmanagerRotationSchedule#master_secret_kms_key_arn}

---

##### `rotationLambdaName`<sup>Optional</sup> <a name="rotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationLambdaName"></a>

```java
public java.lang.String getRotationLambdaName();
```

- *Type:* java.lang.String

The name of the Lambda rotation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_name SecretsmanagerRotationSchedule#rotation_lambda_name}

---

##### `rotationType`<sup>Optional</sup> <a name="rotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationType"></a>

```java
public java.lang.String getRotationType();
```

- *Type:* java.lang.String

The type of rotation template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_type SecretsmanagerRotationSchedule#rotation_type}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The python runtime associated with the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#runtime SecretsmanagerRotationSchedule#runtime}

---

##### `superuserSecretArn`<sup>Optional</sup> <a name="superuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretArn"></a>

```java
public java.lang.String getSuperuserSecretArn();
```

- *Type:* java.lang.String

The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy.

CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#superuser_secret_arn SecretsmanagerRotationSchedule#superuser_secret_arn}

---

##### `superuserSecretKmsKeyArn`<sup>Optional</sup> <a name="superuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretKmsKeyArn"></a>

```java
public java.lang.String getSuperuserSecretKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key.

You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#superuser_secret_kms_key_arn SecretsmanagerRotationSchedule#superuser_secret_kms_key_arn}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSecurityGroupIds"></a>

```java
public java.lang.String getVpcSecurityGroupIds();
```

- *Type:* java.lang.String

A comma-separated list of security group IDs applied to the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#vpc_security_group_ids SecretsmanagerRotationSchedule#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Optional</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSubnetIds"></a>

```java
public java.lang.String getVpcSubnetIds();
```

- *Type:* java.lang.String

A comma separated list of VPC subnet IDs of the target database network.

The Lambda rotation function is in the same subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#vpc_subnet_ids SecretsmanagerRotationSchedule#vpc_subnet_ids}

---

### SecretsmanagerRotationScheduleRotationRules <a name="SecretsmanagerRotationScheduleRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationScheduleRotationRules;

SecretsmanagerRotationScheduleRotationRules.builder()
//  .automaticallyAfterDays(java.lang.Number)
//  .duration(java.lang.String)
//  .scheduleExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>java.lang.Number</code> | The number of days between automatic scheduled rotations of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.duration">duration</a></code> | <code>java.lang.String</code> | The length of the rotation window in hours, for example 3h for a three hour window. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | A cron() or rate() expression that defines the schedule for rotating your secret. |

---

##### `automaticallyAfterDays`<sup>Optional</sup> <a name="automaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.automaticallyAfterDays"></a>

```java
public java.lang.Number getAutomaticallyAfterDays();
```

- *Type:* java.lang.Number

The number of days between automatic scheduled rotations of the secret.

You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#automatically_after_days SecretsmanagerRotationSchedule#automatically_after_days}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The length of the rotation window in hours, for example 3h for a three hour window.

Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the ScheduleExpression. If you don't specify a Duration, for a ScheduleExpression in hours, the window automatically closes after one hour. For a ScheduleExpression in days, the window automatically closes at the end of the UTC day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#duration SecretsmanagerRotationSchedule#duration}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

A cron() or rate() expression that defines the schedule for rotating your secret.

Secrets Manager rotation schedules use UTC time zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#schedule_expression SecretsmanagerRotationSchedule#schedule_expression}

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerRotationScheduleExternalSecretRotationMetadataList <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadataList" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList;

new SecretsmanagerRotationScheduleExternalSecretRotationMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get"></a>

```java
public SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecretsmanagerRotationScheduleExternalSecretRotationMetadata> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>>

---


### SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference;

new SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|SecretsmanagerRotationScheduleExternalSecretRotationMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>

---


### SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference <a name="SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference;

new SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetExcludeCharacters">resetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretArn">resetMasterSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretKmsKeyArn">resetMasterSecretKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationLambdaName">resetRotationLambdaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationType">resetRotationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretArn">resetSuperuserSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretKmsKeyArn">resetSuperuserSecretKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSubnetIds">resetVpcSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeCharacters` <a name="resetExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetExcludeCharacters"></a>

```java
public void resetExcludeCharacters()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetMasterSecretArn` <a name="resetMasterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretArn"></a>

```java
public void resetMasterSecretArn()
```

##### `resetMasterSecretKmsKeyArn` <a name="resetMasterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretKmsKeyArn"></a>

```java
public void resetMasterSecretKmsKeyArn()
```

##### `resetRotationLambdaName` <a name="resetRotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationLambdaName"></a>

```java
public void resetRotationLambdaName()
```

##### `resetRotationType` <a name="resetRotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationType"></a>

```java
public void resetRotationType()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetSuperuserSecretArn` <a name="resetSuperuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretArn"></a>

```java
public void resetSuperuserSecretArn()
```

##### `resetSuperuserSecretKmsKeyArn` <a name="resetSuperuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretKmsKeyArn"></a>

```java
public void resetSuperuserSecretKmsKeyArn()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

##### `resetVpcSubnetIds` <a name="resetVpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSubnetIds"></a>

```java
public void resetVpcSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharactersInput">excludeCharactersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArnInput">masterSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArnInput">masterSecretKmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaNameInput">rotationLambdaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationTypeInput">rotationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArnInput">superuserSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArnInput">superuserSecretKmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIdsInput">vpcSubnetIdsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters">excludeCharacters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn">masterSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn">masterSecretKmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName">rotationLambdaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType">rotationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn">superuserSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn">superuserSecretKmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeCharactersInput`<sup>Optional</sup> <a name="excludeCharactersInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharactersInput"></a>

```java
public java.lang.String getExcludeCharactersInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `masterSecretArnInput`<sup>Optional</sup> <a name="masterSecretArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArnInput"></a>

```java
public java.lang.String getMasterSecretArnInput();
```

- *Type:* java.lang.String

---

##### `masterSecretKmsKeyArnInput`<sup>Optional</sup> <a name="masterSecretKmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArnInput"></a>

```java
public java.lang.String getMasterSecretKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `rotationLambdaNameInput`<sup>Optional</sup> <a name="rotationLambdaNameInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaNameInput"></a>

```java
public java.lang.String getRotationLambdaNameInput();
```

- *Type:* java.lang.String

---

##### `rotationTypeInput`<sup>Optional</sup> <a name="rotationTypeInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationTypeInput"></a>

```java
public java.lang.String getRotationTypeInput();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `superuserSecretArnInput`<sup>Optional</sup> <a name="superuserSecretArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArnInput"></a>

```java
public java.lang.String getSuperuserSecretArnInput();
```

- *Type:* java.lang.String

---

##### `superuserSecretKmsKeyArnInput`<sup>Optional</sup> <a name="superuserSecretKmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArnInput"></a>

```java
public java.lang.String getSuperuserSecretKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIdsInput"></a>

```java
public java.lang.String getVpcSecurityGroupIdsInput();
```

- *Type:* java.lang.String

---

##### `vpcSubnetIdsInput`<sup>Optional</sup> <a name="vpcSubnetIdsInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIdsInput"></a>

```java
public java.lang.String getVpcSubnetIdsInput();
```

- *Type:* java.lang.String

---

##### `excludeCharacters`<sup>Required</sup> <a name="excludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters"></a>

```java
public java.lang.String getExcludeCharacters();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `masterSecretArn`<sup>Required</sup> <a name="masterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn"></a>

```java
public java.lang.String getMasterSecretArn();
```

- *Type:* java.lang.String

---

##### `masterSecretKmsKeyArn`<sup>Required</sup> <a name="masterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn"></a>

```java
public java.lang.String getMasterSecretKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `rotationLambdaName`<sup>Required</sup> <a name="rotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName"></a>

```java
public java.lang.String getRotationLambdaName();
```

- *Type:* java.lang.String

---

##### `rotationType`<sup>Required</sup> <a name="rotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType"></a>

```java
public java.lang.String getRotationType();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `superuserSecretArn`<sup>Required</sup> <a name="superuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn"></a>

```java
public java.lang.String getSuperuserSecretArn();
```

- *Type:* java.lang.String

---

##### `superuserSecretKmsKeyArn`<sup>Required</sup> <a name="superuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn"></a>

```java
public java.lang.String getSuperuserSecretKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds"></a>

```java
public java.lang.String getVpcSecurityGroupIds();
```

- *Type:* java.lang.String

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds"></a>

```java
public java.lang.String getVpcSubnetIds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue"></a>

```java
public IResolvable|SecretsmanagerRotationScheduleHostedRotationLambda getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---


### SecretsmanagerRotationScheduleRotationRulesOutputReference <a name="SecretsmanagerRotationScheduleRotationRulesOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_rotation_schedule.SecretsmanagerRotationScheduleRotationRulesOutputReference;

new SecretsmanagerRotationScheduleRotationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetAutomaticallyAfterDays">resetAutomaticallyAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticallyAfterDays` <a name="resetAutomaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetAutomaticallyAfterDays"></a>

```java
public void resetAutomaticallyAfterDays()
```

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDaysInput">automaticallyAfterDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticallyAfterDaysInput`<sup>Optional</sup> <a name="automaticallyAfterDaysInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```java
public java.lang.Number getAutomaticallyAfterDaysInput();
```

- *Type:* java.lang.Number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `automaticallyAfterDays`<sup>Required</sup> <a name="automaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```java
public java.lang.Number getAutomaticallyAfterDays();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|SecretsmanagerRotationScheduleRotationRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---



