# `secretsmanagerRotationSchedule` Submodule <a name="`secretsmanagerRotationSchedule` Submodule" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerRotationSchedule <a name="SecretsmanagerRotationSchedule" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule awscc_secretsmanager_rotation_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerRotationSchedule(Construct Scope, string Id, SecretsmanagerRotationScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig">SecretsmanagerRotationScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig">SecretsmanagerRotationScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata">PutExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda">PutHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules">PutRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationMetadata">ResetExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationRoleArn">ResetExternalSecretRotationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetHostedRotationLambda">ResetHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotateImmediatelyOnUpdate">ResetRotateImmediatelyOnUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationLambdaArn">ResetRotationLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationRules">ResetRotationRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalSecretRotationMetadata` <a name="PutExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata"></a>

```csharp
private void PutExternalSecretRotationMetadata(IResolvable|SecretsmanagerRotationScheduleExternalSecretRotationMetadata[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]

---

##### `PutHostedRotationLambda` <a name="PutHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda"></a>

```csharp
private void PutHostedRotationLambda(SecretsmanagerRotationScheduleHostedRotationLambda Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---

##### `PutRotationRules` <a name="PutRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules"></a>

```csharp
private void PutRotationRules(SecretsmanagerRotationScheduleRotationRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---

##### `ResetExternalSecretRotationMetadata` <a name="ResetExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationMetadata"></a>

```csharp
private void ResetExternalSecretRotationMetadata()
```

##### `ResetExternalSecretRotationRoleArn` <a name="ResetExternalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationRoleArn"></a>

```csharp
private void ResetExternalSecretRotationRoleArn()
```

##### `ResetHostedRotationLambda` <a name="ResetHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetHostedRotationLambda"></a>

```csharp
private void ResetHostedRotationLambda()
```

##### `ResetRotateImmediatelyOnUpdate` <a name="ResetRotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotateImmediatelyOnUpdate"></a>

```csharp
private void ResetRotateImmediatelyOnUpdate()
```

##### `ResetRotationLambdaArn` <a name="ResetRotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationLambdaArn"></a>

```csharp
private void ResetRotationLambdaArn()
```

##### `ResetRotationRules` <a name="ResetRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationRules"></a>

```csharp
private void ResetRotationRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerRotationSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerRotationSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerRotationSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerRotationSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsmanagerRotationSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsmanagerRotationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerRotationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadata">ExternalSecretRotationMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList">SecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambda">HostedRotationLambda</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference">SecretsmanagerRotationScheduleRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationScheduleId">RotationScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadataInput">ExternalSecretRotationMetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArnInput">ExternalSecretRotationRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambdaInput">HostedRotationLambdaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdateInput">RotateImmediatelyOnUpdateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArnInput">RotationLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRulesInput">RotationRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn">ExternalSecretRotationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate">RotateImmediatelyOnUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExternalSecretRotationMetadata`<sup>Required</sup> <a name="ExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadata"></a>

```csharp
public SecretsmanagerRotationScheduleExternalSecretRotationMetadataList ExternalSecretRotationMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList">SecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a>

---

##### `HostedRotationLambda`<sup>Required</sup> <a name="HostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambda"></a>

```csharp
public SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference HostedRotationLambda { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RotationRules`<sup>Required</sup> <a name="RotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRules"></a>

```csharp
public SecretsmanagerRotationScheduleRotationRulesOutputReference RotationRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference">SecretsmanagerRotationScheduleRotationRulesOutputReference</a>

---

##### `RotationScheduleId`<sup>Required</sup> <a name="RotationScheduleId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationScheduleId"></a>

```csharp
public string RotationScheduleId { get; }
```

- *Type:* string

---

##### `ExternalSecretRotationMetadataInput`<sup>Optional</sup> <a name="ExternalSecretRotationMetadataInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadataInput"></a>

```csharp
public IResolvable|SecretsmanagerRotationScheduleExternalSecretRotationMetadata[] ExternalSecretRotationMetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]

---

##### `ExternalSecretRotationRoleArnInput`<sup>Optional</sup> <a name="ExternalSecretRotationRoleArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArnInput"></a>

```csharp
public string ExternalSecretRotationRoleArnInput { get; }
```

- *Type:* string

---

##### `HostedRotationLambdaInput`<sup>Optional</sup> <a name="HostedRotationLambdaInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambdaInput"></a>

```csharp
public IResolvable|SecretsmanagerRotationScheduleHostedRotationLambda HostedRotationLambdaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---

##### `RotateImmediatelyOnUpdateInput`<sup>Optional</sup> <a name="RotateImmediatelyOnUpdateInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdateInput"></a>

```csharp
public bool|IResolvable RotateImmediatelyOnUpdateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RotationLambdaArnInput`<sup>Optional</sup> <a name="RotationLambdaArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArnInput"></a>

```csharp
public string RotationLambdaArnInput { get; }
```

- *Type:* string

---

##### `RotationRulesInput`<sup>Optional</sup> <a name="RotationRulesInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRulesInput"></a>

```csharp
public IResolvable|SecretsmanagerRotationScheduleRotationRules RotationRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `ExternalSecretRotationRoleArn`<sup>Required</sup> <a name="ExternalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn"></a>

```csharp
public string ExternalSecretRotationRoleArn { get; }
```

- *Type:* string

---

##### `RotateImmediatelyOnUpdate`<sup>Required</sup> <a name="RotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate"></a>

```csharp
public bool|IResolvable RotateImmediatelyOnUpdate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RotationLambdaArn`<sup>Required</sup> <a name="RotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArn"></a>

```csharp
public string RotationLambdaArn { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerRotationScheduleConfig <a name="SecretsmanagerRotationScheduleConfig" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerRotationScheduleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecretId,
    IResolvable|SecretsmanagerRotationScheduleExternalSecretRotationMetadata[] ExternalSecretRotationMetadata = null,
    string ExternalSecretRotationRoleArn = null,
    SecretsmanagerRotationScheduleHostedRotationLambda HostedRotationLambda = null,
    bool|IResolvable RotateImmediatelyOnUpdate = null,
    string RotationLambdaArn = null,
    SecretsmanagerRotationScheduleRotationRules RotationRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.secretId">SecretId</a></code> | <code>string</code> | The ARN or name of the secret to rotate. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationMetadata">ExternalSecretRotationMetadata</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]</code> | The list of metadata needed to successfully rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationRoleArn">ExternalSecretRotationRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.hostedRotationLambda">HostedRotationLambda</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotateImmediatelyOnUpdate">RotateImmediatelyOnUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>string</code> | The ARN of an existing Lambda rotation function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | A structure that defines the rotation configuration for this secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The ARN or name of the secret to rotate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#secret_id SecretsmanagerRotationSchedule#secret_id}

---

##### `ExternalSecretRotationMetadata`<sup>Optional</sup> <a name="ExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationMetadata"></a>

```csharp
public IResolvable|SecretsmanagerRotationScheduleExternalSecretRotationMetadata[] ExternalSecretRotationMetadata { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]

The list of metadata needed to successfully rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_metadata SecretsmanagerRotationSchedule#external_secret_rotation_metadata}

---

##### `ExternalSecretRotationRoleArn`<sup>Optional</sup> <a name="ExternalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationRoleArn"></a>

```csharp
public string ExternalSecretRotationRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_role_arn SecretsmanagerRotationSchedule#external_secret_rotation_role_arn}

---

##### `HostedRotationLambda`<sup>Optional</sup> <a name="HostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.hostedRotationLambda"></a>

```csharp
public SecretsmanagerRotationScheduleHostedRotationLambda HostedRotationLambda { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates.

To use a rotation function that already exists, specify RotationLambdaARN instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#hosted_rotation_lambda SecretsmanagerRotationSchedule#hosted_rotation_lambda}

---

##### `RotateImmediatelyOnUpdate`<sup>Optional</sup> <a name="RotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotateImmediatelyOnUpdate"></a>

```csharp
public bool|IResolvable RotateImmediatelyOnUpdate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#rotate_immediately_on_update SecretsmanagerRotationSchedule#rotate_immediately_on_update}

---

##### `RotationLambdaArn`<sup>Optional</sup> <a name="RotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationLambdaArn"></a>

```csharp
public string RotationLambdaArn { get; set; }
```

- *Type:* string

The ARN of an existing Lambda rotation function.

To specify a rotation function that is also defined in this template, use the Ref function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_arn SecretsmanagerRotationSchedule#rotation_lambda_arn}

---

##### `RotationRules`<sup>Optional</sup> <a name="RotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationRules"></a>

```csharp
public SecretsmanagerRotationScheduleRotationRules RotationRules { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

A structure that defines the rotation configuration for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#rotation_rules SecretsmanagerRotationSchedule#rotation_rules}

---

### SecretsmanagerRotationScheduleExternalSecretRotationMetadata <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerRotationScheduleExternalSecretRotationMetadata {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.key">Key</a></code> | <code>string</code> | The key name of the metadata item. You can specify a value that's 1 to 256 characters in length. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.value">Value</a></code> | <code>string</code> | The value for the metadata item. You can specify a value that's 1 to 2048 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the metadata item. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#key SecretsmanagerRotationSchedule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the metadata item. You can specify a value that's 1 to 2048 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#value SecretsmanagerRotationSchedule#value}

---

### SecretsmanagerRotationScheduleHostedRotationLambda <a name="SecretsmanagerRotationScheduleHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerRotationScheduleHostedRotationLambda {
    string ExcludeCharacters = null,
    string KmsKeyArn = null,
    string MasterSecretArn = null,
    string MasterSecretKmsKeyArn = null,
    string RotationLambdaName = null,
    string RotationType = null,
    string Runtime = null,
    string SuperuserSecretArn = null,
    string SuperuserSecretKmsKeyArn = null,
    string VpcSecurityGroupIds = null,
    string VpcSubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.excludeCharacters">ExcludeCharacters</a></code> | <code>string</code> | A string of the characters that you don't want in the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key that Secrets Manager uses to encrypt the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretArn">MasterSecretArn</a></code> | <code>string</code> | The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretKmsKeyArn">MasterSecretKmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationLambdaName">RotationLambdaName</a></code> | <code>string</code> | The name of the Lambda rotation function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationType">RotationType</a></code> | <code>string</code> | The type of rotation template to use. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.runtime">Runtime</a></code> | <code>string</code> | The python runtime associated with the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretArn">SuperuserSecretArn</a></code> | <code>string</code> | The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretKmsKeyArn">SuperuserSecretKmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string</code> | A comma-separated list of security group IDs applied to the target database. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string</code> | A comma separated list of VPC subnet IDs of the target database network. |

---

##### `ExcludeCharacters`<sup>Optional</sup> <a name="ExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.excludeCharacters"></a>

```csharp
public string ExcludeCharacters { get; set; }
```

- *Type:* string

A string of the characters that you don't want in the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#exclude_characters SecretsmanagerRotationSchedule#exclude_characters}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMS key that Secrets Manager uses to encrypt the secret.

If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If aws/secretsmanager doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#kms_key_arn SecretsmanagerRotationSchedule#kms_key_arn}

---

##### `MasterSecretArn`<sup>Optional</sup> <a name="MasterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretArn"></a>

```csharp
public string MasterSecretArn { get; set; }
```

- *Type:* string

The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy.

CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#master_secret_arn SecretsmanagerRotationSchedule#master_secret_arn}

---

##### `MasterSecretKmsKeyArn`<sup>Optional</sup> <a name="MasterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretKmsKeyArn"></a>

```csharp
public string MasterSecretKmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key.

You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#master_secret_kms_key_arn SecretsmanagerRotationSchedule#master_secret_kms_key_arn}

---

##### `RotationLambdaName`<sup>Optional</sup> <a name="RotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationLambdaName"></a>

```csharp
public string RotationLambdaName { get; set; }
```

- *Type:* string

The name of the Lambda rotation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_name SecretsmanagerRotationSchedule#rotation_lambda_name}

---

##### `RotationType`<sup>Optional</sup> <a name="RotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationType"></a>

```csharp
public string RotationType { get; set; }
```

- *Type:* string

The type of rotation template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#rotation_type SecretsmanagerRotationSchedule#rotation_type}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

The python runtime associated with the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#runtime SecretsmanagerRotationSchedule#runtime}

---

##### `SuperuserSecretArn`<sup>Optional</sup> <a name="SuperuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretArn"></a>

```csharp
public string SuperuserSecretArn { get; set; }
```

- *Type:* string

The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy.

CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#superuser_secret_arn SecretsmanagerRotationSchedule#superuser_secret_arn}

---

##### `SuperuserSecretKmsKeyArn`<sup>Optional</sup> <a name="SuperuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretKmsKeyArn"></a>

```csharp
public string SuperuserSecretKmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key.

You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#superuser_secret_kms_key_arn SecretsmanagerRotationSchedule#superuser_secret_kms_key_arn}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSecurityGroupIds"></a>

```csharp
public string VpcSecurityGroupIds { get; set; }
```

- *Type:* string

A comma-separated list of security group IDs applied to the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#vpc_security_group_ids SecretsmanagerRotationSchedule#vpc_security_group_ids}

---

##### `VpcSubnetIds`<sup>Optional</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSubnetIds"></a>

```csharp
public string VpcSubnetIds { get; set; }
```

- *Type:* string

A comma separated list of VPC subnet IDs of the target database network.

The Lambda rotation function is in the same subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#vpc_subnet_ids SecretsmanagerRotationSchedule#vpc_subnet_ids}

---

### SecretsmanagerRotationScheduleRotationRules <a name="SecretsmanagerRotationScheduleRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerRotationScheduleRotationRules {
    double AutomaticallyAfterDays = null,
    string Duration = null,
    string ScheduleExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>double</code> | The number of days between automatic scheduled rotations of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.duration">Duration</a></code> | <code>string</code> | The length of the rotation window in hours, for example 3h for a three hour window. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | A cron() or rate() expression that defines the schedule for rotating your secret. |

---

##### `AutomaticallyAfterDays`<sup>Optional</sup> <a name="AutomaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.automaticallyAfterDays"></a>

```csharp
public double AutomaticallyAfterDays { get; set; }
```

- *Type:* double

The number of days between automatic scheduled rotations of the secret.

You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#automatically_after_days SecretsmanagerRotationSchedule#automatically_after_days}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The length of the rotation window in hours, for example 3h for a three hour window.

Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the ScheduleExpression. If you don't specify a Duration, for a ScheduleExpression in hours, the window automatically closes after one hour. For a ScheduleExpression in days, the window automatically closes at the end of the UTC day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#duration SecretsmanagerRotationSchedule#duration}

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

A cron() or rate() expression that defines the schedule for rotating your secret.

Secrets Manager rotation schedules use UTC time zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_rotation_schedule#schedule_expression SecretsmanagerRotationSchedule#schedule_expression}

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerRotationScheduleExternalSecretRotationMetadataList <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadataList" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerRotationScheduleExternalSecretRotationMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get"></a>

```csharp
private SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.internalValue"></a>

```csharp
public IResolvable|SecretsmanagerRotationScheduleExternalSecretRotationMetadata[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>[]

---


### SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecretsmanagerRotationScheduleExternalSecretRotationMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata">SecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>

---


### SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference <a name="SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetExcludeCharacters">ResetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretArn">ResetMasterSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretKmsKeyArn">ResetMasterSecretKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationLambdaName">ResetRotationLambdaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationType">ResetRotationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretArn">ResetSuperuserSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretKmsKeyArn">ResetSuperuserSecretKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSubnetIds">ResetVpcSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeCharacters` <a name="ResetExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetExcludeCharacters"></a>

```csharp
private void ResetExcludeCharacters()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetMasterSecretArn` <a name="ResetMasterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretArn"></a>

```csharp
private void ResetMasterSecretArn()
```

##### `ResetMasterSecretKmsKeyArn` <a name="ResetMasterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretKmsKeyArn"></a>

```csharp
private void ResetMasterSecretKmsKeyArn()
```

##### `ResetRotationLambdaName` <a name="ResetRotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationLambdaName"></a>

```csharp
private void ResetRotationLambdaName()
```

##### `ResetRotationType` <a name="ResetRotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationType"></a>

```csharp
private void ResetRotationType()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetSuperuserSecretArn` <a name="ResetSuperuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretArn"></a>

```csharp
private void ResetSuperuserSecretArn()
```

##### `ResetSuperuserSecretKmsKeyArn` <a name="ResetSuperuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretKmsKeyArn"></a>

```csharp
private void ResetSuperuserSecretKmsKeyArn()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

##### `ResetVpcSubnetIds` <a name="ResetVpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSubnetIds"></a>

```csharp
private void ResetVpcSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharactersInput">ExcludeCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArnInput">MasterSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArnInput">MasterSecretKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaNameInput">RotationLambdaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationTypeInput">RotationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArnInput">SuperuserSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArnInput">SuperuserSecretKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIdsInput">VpcSubnetIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters">ExcludeCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn">MasterSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn">MasterSecretKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName">RotationLambdaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType">RotationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn">SuperuserSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn">SuperuserSecretKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeCharactersInput`<sup>Optional</sup> <a name="ExcludeCharactersInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharactersInput"></a>

```csharp
public string ExcludeCharactersInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `MasterSecretArnInput`<sup>Optional</sup> <a name="MasterSecretArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArnInput"></a>

```csharp
public string MasterSecretArnInput { get; }
```

- *Type:* string

---

##### `MasterSecretKmsKeyArnInput`<sup>Optional</sup> <a name="MasterSecretKmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArnInput"></a>

```csharp
public string MasterSecretKmsKeyArnInput { get; }
```

- *Type:* string

---

##### `RotationLambdaNameInput`<sup>Optional</sup> <a name="RotationLambdaNameInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaNameInput"></a>

```csharp
public string RotationLambdaNameInput { get; }
```

- *Type:* string

---

##### `RotationTypeInput`<sup>Optional</sup> <a name="RotationTypeInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationTypeInput"></a>

```csharp
public string RotationTypeInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `SuperuserSecretArnInput`<sup>Optional</sup> <a name="SuperuserSecretArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArnInput"></a>

```csharp
public string SuperuserSecretArnInput { get; }
```

- *Type:* string

---

##### `SuperuserSecretKmsKeyArnInput`<sup>Optional</sup> <a name="SuperuserSecretKmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArnInput"></a>

```csharp
public string SuperuserSecretKmsKeyArnInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string VpcSecurityGroupIdsInput { get; }
```

- *Type:* string

---

##### `VpcSubnetIdsInput`<sup>Optional</sup> <a name="VpcSubnetIdsInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIdsInput"></a>

```csharp
public string VpcSubnetIdsInput { get; }
```

- *Type:* string

---

##### `ExcludeCharacters`<sup>Required</sup> <a name="ExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters"></a>

```csharp
public string ExcludeCharacters { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `MasterSecretArn`<sup>Required</sup> <a name="MasterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn"></a>

```csharp
public string MasterSecretArn { get; }
```

- *Type:* string

---

##### `MasterSecretKmsKeyArn`<sup>Required</sup> <a name="MasterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn"></a>

```csharp
public string MasterSecretKmsKeyArn { get; }
```

- *Type:* string

---

##### `RotationLambdaName`<sup>Required</sup> <a name="RotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName"></a>

```csharp
public string RotationLambdaName { get; }
```

- *Type:* string

---

##### `RotationType`<sup>Required</sup> <a name="RotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType"></a>

```csharp
public string RotationType { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `SuperuserSecretArn`<sup>Required</sup> <a name="SuperuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn"></a>

```csharp
public string SuperuserSecretArn { get; }
```

- *Type:* string

---

##### `SuperuserSecretKmsKeyArn`<sup>Required</sup> <a name="SuperuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn"></a>

```csharp
public string SuperuserSecretKmsKeyArn { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds"></a>

```csharp
public string VpcSecurityGroupIds { get; }
```

- *Type:* string

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds"></a>

```csharp
public string VpcSubnetIds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecretsmanagerRotationScheduleHostedRotationLambda InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---


### SecretsmanagerRotationScheduleRotationRulesOutputReference <a name="SecretsmanagerRotationScheduleRotationRulesOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerRotationScheduleRotationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetAutomaticallyAfterDays">ResetAutomaticallyAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomaticallyAfterDays` <a name="ResetAutomaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetAutomaticallyAfterDays"></a>

```csharp
private void ResetAutomaticallyAfterDays()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDaysInput">AutomaticallyAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticallyAfterDaysInput`<sup>Optional</sup> <a name="AutomaticallyAfterDaysInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```csharp
public double AutomaticallyAfterDaysInput { get; }
```

- *Type:* double

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `AutomaticallyAfterDays`<sup>Required</sup> <a name="AutomaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```csharp
public double AutomaticallyAfterDays { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecretsmanagerRotationScheduleRotationRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---



