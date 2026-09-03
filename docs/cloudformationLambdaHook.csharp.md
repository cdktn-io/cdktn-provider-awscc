# `cloudformationLambdaHook` Submodule <a name="`cloudformationLambdaHook` Submodule" id="@cdktn/provider-awscc.cloudformationLambdaHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationLambdaHook <a name="CloudformationLambdaHook" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHook(Construct Scope, string Id, CloudformationLambdaHookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig">CloudformationLambdaHookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig">CloudformationLambdaHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters">PutStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters">PutTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetAutoUpdate">ResetAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetHookStatus">ResetHookStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetStackFilters">ResetStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetTargetFilters">ResetTargetFilters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(CloudformationLambdaHookLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

---

##### `PutStackFilters` <a name="PutStackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters"></a>

```csharp
private void PutStackFilters(CloudformationLambdaHookStackFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

---

##### `PutTargetFilters` <a name="PutTargetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters"></a>

```csharp
private void PutTargetFilters(CloudformationLambdaHookTargetFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

---

##### `ResetAutoUpdate` <a name="ResetAutoUpdate" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetAutoUpdate"></a>

```csharp
private void ResetAutoUpdate()
```

##### `ResetHookStatus` <a name="ResetHookStatus" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetHookStatus"></a>

```csharp
private void ResetHookStatus()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetStackFilters` <a name="ResetStackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetStackFilters"></a>

```csharp
private void ResetStackFilters()
```

##### `ResetTargetFilters` <a name="ResetTargetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetTargetFilters"></a>

```csharp
private void ResetTargetFilters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationLambdaHook resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationLambdaHook.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationLambdaHook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationLambdaHook.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationLambdaHook.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudformationLambdaHook resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationLambdaHook to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationLambdaHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationLambdaHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookArn">HookArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference">CloudformationLambdaHookLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFilters">StackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference">CloudformationLambdaHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFilters">TargetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference">CloudformationLambdaHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdateInput">AutoUpdateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureModeInput">FailureModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatusInput">HookStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunctionInput">LambdaFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfigInput">LoggingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFiltersInput">StackFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFiltersInput">TargetFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperationsInput">TargetOperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdate">AutoUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureMode">FailureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatus">HookStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunction">LambdaFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperations">TargetOperations</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HookArn`<sup>Required</sup> <a name="HookArn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookArn"></a>

```csharp
public string HookArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfig"></a>

```csharp
public CloudformationLambdaHookLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference">CloudformationLambdaHookLoggingConfigOutputReference</a>

---

##### `StackFilters`<sup>Required</sup> <a name="StackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFilters"></a>

```csharp
public CloudformationLambdaHookStackFiltersOutputReference StackFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference">CloudformationLambdaHookStackFiltersOutputReference</a>

---

##### `TargetFilters`<sup>Required</sup> <a name="TargetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFilters"></a>

```csharp
public CloudformationLambdaHookTargetFiltersOutputReference TargetFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference">CloudformationLambdaHookTargetFiltersOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AutoUpdateInput`<sup>Optional</sup> <a name="AutoUpdateInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdateInput"></a>

```csharp
public bool|IResolvable AutoUpdateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `FailureModeInput`<sup>Optional</sup> <a name="FailureModeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureModeInput"></a>

```csharp
public string FailureModeInput { get; }
```

- *Type:* string

---

##### `HookStatusInput`<sup>Optional</sup> <a name="HookStatusInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatusInput"></a>

```csharp
public string HookStatusInput { get; }
```

- *Type:* string

---

##### `LambdaFunctionInput`<sup>Optional</sup> <a name="LambdaFunctionInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunctionInput"></a>

```csharp
public string LambdaFunctionInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfigInput"></a>

```csharp
public IResolvable|CloudformationLambdaHookLoggingConfig LoggingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

---

##### `StackFiltersInput`<sup>Optional</sup> <a name="StackFiltersInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFiltersInput"></a>

```csharp
public IResolvable|CloudformationLambdaHookStackFilters StackFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

---

##### `TargetFiltersInput`<sup>Optional</sup> <a name="TargetFiltersInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFiltersInput"></a>

```csharp
public IResolvable|CloudformationLambdaHookTargetFilters TargetFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

---

##### `TargetOperationsInput`<sup>Optional</sup> <a name="TargetOperationsInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperationsInput"></a>

```csharp
public string[] TargetOperationsInput { get; }
```

- *Type:* string[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AutoUpdate`<sup>Required</sup> <a name="AutoUpdate" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdate"></a>

```csharp
public bool|IResolvable AutoUpdate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `FailureMode`<sup>Required</sup> <a name="FailureMode" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureMode"></a>

```csharp
public string FailureMode { get; }
```

- *Type:* string

---

##### `HookStatus`<sup>Required</sup> <a name="HookStatus" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatus"></a>

```csharp
public string HookStatus { get; }
```

- *Type:* string

---

##### `LambdaFunction`<sup>Required</sup> <a name="LambdaFunction" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunction"></a>

```csharp
public string LambdaFunction { get; }
```

- *Type:* string

---

##### `TargetOperations`<sup>Required</sup> <a name="TargetOperations" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperations"></a>

```csharp
public string[] TargetOperations { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationLambdaHookConfig <a name="CloudformationLambdaHookConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Alias,
    string ExecutionRole,
    string FailureMode,
    string LambdaFunction,
    string[] TargetOperations,
    bool|IResolvable AutoUpdate = null,
    string HookStatus = null,
    CloudformationLambdaHookLoggingConfig LoggingConfig = null,
    CloudformationLambdaHookStackFilters StackFilters = null,
    CloudformationLambdaHookTargetFilters TargetFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.alias">Alias</a></code> | <code>string</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.executionRole">ExecutionRole</a></code> | <code>string</code> | The execution role ARN assumed by Hooks to invoke Lambda. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.failureMode">FailureMode</a></code> | <code>string</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lambdaFunction">LambdaFunction</a></code> | <code>string</code> | Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetOperations">TargetOperations</a></code> | <code>string[]</code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.autoUpdate">AutoUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.hookStatus">HookStatus</a></code> | <code>string</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | Contains logging configuration information for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.stackFilters">StackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetFilters">TargetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#alias CloudformationLambdaHook#alias}

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

The execution role ARN assumed by Hooks to invoke Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#execution_role CloudformationLambdaHook#execution_role}

---

##### `FailureMode`<sup>Required</sup> <a name="FailureMode" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.failureMode"></a>

```csharp
public string FailureMode { get; set; }
```

- *Type:* string

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#failure_mode CloudformationLambdaHook#failure_mode}

---

##### `LambdaFunction`<sup>Required</sup> <a name="LambdaFunction" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lambdaFunction"></a>

```csharp
public string LambdaFunction { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#lambda_function CloudformationLambdaHook#lambda_function}

---

##### `TargetOperations`<sup>Required</sup> <a name="TargetOperations" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetOperations"></a>

```csharp
public string[] TargetOperations { get; set; }
```

- *Type:* string[]

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#target_operations CloudformationLambdaHook#target_operations}

---

##### `AutoUpdate`<sup>Optional</sup> <a name="AutoUpdate" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.autoUpdate"></a>

```csharp
public bool|IResolvable AutoUpdate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#auto_update CloudformationLambdaHook#auto_update}

---

##### `HookStatus`<sup>Optional</sup> <a name="HookStatus" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.hookStatus"></a>

```csharp
public string HookStatus { get; set; }
```

- *Type:* string

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#hook_status CloudformationLambdaHook#hook_status}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.loggingConfig"></a>

```csharp
public CloudformationLambdaHookLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

Contains logging configuration information for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#logging_config CloudformationLambdaHook#logging_config}

---

##### `StackFilters`<sup>Optional</sup> <a name="StackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.stackFilters"></a>

```csharp
public CloudformationLambdaHookStackFilters StackFilters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#stack_filters CloudformationLambdaHook#stack_filters}

---

##### `TargetFilters`<sup>Optional</sup> <a name="TargetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetFilters"></a>

```csharp
public CloudformationLambdaHookTargetFilters TargetFilters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#target_filters CloudformationLambdaHook#target_filters}

---

### CloudformationLambdaHookLoggingConfig <a name="CloudformationLambdaHookLoggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookLoggingConfig {
    string LogGroupName = null,
    string LogRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logGroupName">LogGroupName</a></code> | <code>string</code> | The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logRoleArn">LogRoleArn</a></code> | <code>string</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch Logs. |

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#log_group_name CloudformationLambdaHook#log_group_name}

---

##### `LogRoleArn`<sup>Optional</sup> <a name="LogRoleArn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logRoleArn"></a>

```csharp
public string LogRoleArn { get; set; }
```

- *Type:* string

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#log_role_arn CloudformationLambdaHook#log_role_arn}

---

### CloudformationLambdaHookStackFilters <a name="CloudformationLambdaHookStackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookStackFilters {
    string FilteringCriteria = null,
    CloudformationLambdaHookStackFiltersStackNames StackNames = null,
    CloudformationLambdaHookStackFiltersStackRoles StackRoles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.filteringCriteria">FilteringCriteria</a></code> | <code>string</code> | Attribute to specify the filtering behavior. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackNames">StackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a></code> | List of stack names as filters. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackRoles">StackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a></code> | List of stack roles that are performing the stack operations. |

---

##### `FilteringCriteria`<sup>Optional</sup> <a name="FilteringCriteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.filteringCriteria"></a>

```csharp
public string FilteringCriteria { get; set; }
```

- *Type:* string

Attribute to specify the filtering behavior.

ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#filtering_criteria CloudformationLambdaHook#filtering_criteria}

---

##### `StackNames`<sup>Optional</sup> <a name="StackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackNames"></a>

```csharp
public CloudformationLambdaHookStackFiltersStackNames StackNames { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

List of stack names as filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#stack_names CloudformationLambdaHook#stack_names}

---

##### `StackRoles`<sup>Optional</sup> <a name="StackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackRoles"></a>

```csharp
public CloudformationLambdaHookStackFiltersStackRoles StackRoles { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

List of stack roles that are performing the stack operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#stack_roles CloudformationLambdaHook#stack_roles}

---

### CloudformationLambdaHookStackFiltersStackNames <a name="CloudformationLambdaHookStackFiltersStackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookStackFiltersStackNames {
    string[] Exclude = null,
    string[] Include = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.exclude">Exclude</a></code> | <code>string[]</code> | List of stack names that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.include">Include</a></code> | <code>string[]</code> | List of stack names that the hook is going to target. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.exclude"></a>

```csharp
public string[] Exclude { get; set; }
```

- *Type:* string[]

List of stack names that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.include"></a>

```csharp
public string[] Include { get; set; }
```

- *Type:* string[]

List of stack names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}

---

### CloudformationLambdaHookStackFiltersStackRoles <a name="CloudformationLambdaHookStackFiltersStackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookStackFiltersStackRoles {
    string[] Exclude = null,
    string[] Include = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.exclude">Exclude</a></code> | <code>string[]</code> | List of stack roles that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.include">Include</a></code> | <code>string[]</code> | List of stack roles that the hook is going to target. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.exclude"></a>

```csharp
public string[] Exclude { get; set; }
```

- *Type:* string[]

List of stack roles that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.include"></a>

```csharp
public string[] Include { get; set; }
```

- *Type:* string[]

List of stack roles that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}

---

### CloudformationLambdaHookTargetFilters <a name="CloudformationLambdaHookTargetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookTargetFilters {
    string[] Actions = null,
    string[] InvocationPoints = null,
    string[] TargetNames = null,
    IResolvable|CloudformationLambdaHookTargetFiltersTargets[] Targets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.actions">Actions</a></code> | <code>string[]</code> | List of actions that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.invocationPoints">InvocationPoints</a></code> | <code>string[]</code> | List of invocation points that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targetNames">TargetNames</a></code> | <code>string[]</code> | List of type names that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]</code> | List of hook targets. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

List of actions that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#actions CloudformationLambdaHook#actions}

---

##### `InvocationPoints`<sup>Optional</sup> <a name="InvocationPoints" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.invocationPoints"></a>

```csharp
public string[] InvocationPoints { get; set; }
```

- *Type:* string[]

List of invocation points that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#invocation_points CloudformationLambdaHook#invocation_points}

---

##### `TargetNames`<sup>Optional</sup> <a name="TargetNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targetNames"></a>

```csharp
public string[] TargetNames { get; set; }
```

- *Type:* string[]

List of type names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#target_names CloudformationLambdaHook#target_names}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targets"></a>

```csharp
public IResolvable|CloudformationLambdaHookTargetFiltersTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]

List of hook targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#targets CloudformationLambdaHook#targets}

---

### CloudformationLambdaHookTargetFiltersTargets <a name="CloudformationLambdaHookTargetFiltersTargets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookTargetFiltersTargets {
    string Action = null,
    string InvocationPoint = null,
    string TargetName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.action">Action</a></code> | <code>string</code> | Target actions are the type of operation hooks will be executed at. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.invocationPoint">InvocationPoint</a></code> | <code>string</code> | Invocation points are the point in provisioning workflow where hooks will be executed. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.targetName">TargetName</a></code> | <code>string</code> | Type name of hook target. Hook targets are the destination where hooks will be invoked against. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Target actions are the type of operation hooks will be executed at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#action CloudformationLambdaHook#action}

---

##### `InvocationPoint`<sup>Optional</sup> <a name="InvocationPoint" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.invocationPoint"></a>

```csharp
public string InvocationPoint { get; set; }
```

- *Type:* string

Invocation points are the point in provisioning workflow where hooks will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#invocation_point CloudformationLambdaHook#invocation_point}

---

##### `TargetName`<sup>Optional</sup> <a name="TargetName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.targetName"></a>

```csharp
public string TargetName { get; set; }
```

- *Type:* string

Type name of hook target. Hook targets are the destination where hooks will be invoked against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_lambda_hook#target_name CloudformationLambdaHook#target_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationLambdaHookLoggingConfigOutputReference <a name="CloudformationLambdaHookLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogRoleArn">ResetLogRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogGroupName"></a>

```csharp
private void ResetLogGroupName()
```

##### `ResetLogRoleArn` <a name="ResetLogRoleArn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogRoleArn"></a>

```csharp
private void ResetLogRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArnInput">LogRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn">LogRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogRoleArnInput`<sup>Optional</sup> <a name="LogRoleArnInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArnInput"></a>

```csharp
public string LogRoleArnInput { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogRoleArn`<sup>Required</sup> <a name="LogRoleArn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn"></a>

```csharp
public string LogRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudformationLambdaHookLoggingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

---


### CloudformationLambdaHookStackFiltersOutputReference <a name="CloudformationLambdaHookStackFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookStackFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames">PutStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles">PutStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetFilteringCriteria">ResetFilteringCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackNames">ResetStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackRoles">ResetStackRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStackNames` <a name="PutStackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames"></a>

```csharp
private void PutStackNames(CloudformationLambdaHookStackFiltersStackNames Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

---

##### `PutStackRoles` <a name="PutStackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles"></a>

```csharp
private void PutStackRoles(CloudformationLambdaHookStackFiltersStackRoles Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

---

##### `ResetFilteringCriteria` <a name="ResetFilteringCriteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetFilteringCriteria"></a>

```csharp
private void ResetFilteringCriteria()
```

##### `ResetStackNames` <a name="ResetStackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackNames"></a>

```csharp
private void ResetStackNames()
```

##### `ResetStackRoles` <a name="ResetStackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackRoles"></a>

```csharp
private void ResetStackRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNames">StackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference">CloudformationLambdaHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRoles">StackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference">CloudformationLambdaHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteriaInput">FilteringCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNamesInput">StackNamesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRolesInput">StackRolesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria">FilteringCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNames"></a>

```csharp
public CloudformationLambdaHookStackFiltersStackNamesOutputReference StackNames { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference">CloudformationLambdaHookStackFiltersStackNamesOutputReference</a>

---

##### `StackRoles`<sup>Required</sup> <a name="StackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRoles"></a>

```csharp
public CloudformationLambdaHookStackFiltersStackRolesOutputReference StackRoles { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference">CloudformationLambdaHookStackFiltersStackRolesOutputReference</a>

---

##### `FilteringCriteriaInput`<sup>Optional</sup> <a name="FilteringCriteriaInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteriaInput"></a>

```csharp
public string FilteringCriteriaInput { get; }
```

- *Type:* string

---

##### `StackNamesInput`<sup>Optional</sup> <a name="StackNamesInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNamesInput"></a>

```csharp
public IResolvable|CloudformationLambdaHookStackFiltersStackNames StackNamesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

---

##### `StackRolesInput`<sup>Optional</sup> <a name="StackRolesInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRolesInput"></a>

```csharp
public IResolvable|CloudformationLambdaHookStackFiltersStackRoles StackRolesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

---

##### `FilteringCriteria`<sup>Required</sup> <a name="FilteringCriteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria"></a>

```csharp
public string FilteringCriteria { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudformationLambdaHookStackFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

---


### CloudformationLambdaHookStackFiltersStackNamesOutputReference <a name="CloudformationLambdaHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookStackFiltersStackNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.includeInput">IncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude">Exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.excludeInput"></a>

```csharp
public string[] ExcludeInput { get; }
```

- *Type:* string[]

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.includeInput"></a>

```csharp
public string[] IncludeInput { get; }
```

- *Type:* string[]

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```csharp
public string[] Exclude { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudformationLambdaHookStackFiltersStackNames InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

---


### CloudformationLambdaHookStackFiltersStackRolesOutputReference <a name="CloudformationLambdaHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookStackFiltersStackRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.includeInput">IncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude">Exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.excludeInput"></a>

```csharp
public string[] ExcludeInput { get; }
```

- *Type:* string[]

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.includeInput"></a>

```csharp
public string[] IncludeInput { get; }
```

- *Type:* string[]

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```csharp
public string[] Exclude { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudformationLambdaHookStackFiltersStackRoles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

---


### CloudformationLambdaHookTargetFiltersOutputReference <a name="CloudformationLambdaHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookTargetFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetInvocationPoints">ResetInvocationPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargetNames">ResetTargetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.putTargets"></a>

```csharp
private void PutTargets(IResolvable|CloudformationLambdaHookTargetFiltersTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetInvocationPoints` <a name="ResetInvocationPoints" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetInvocationPoints"></a>

```csharp
private void ResetInvocationPoints()
```

##### `ResetTargetNames` <a name="ResetTargetNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargetNames"></a>

```csharp
private void ResetTargetNames()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargets"></a>

```csharp
private void ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList">CloudformationLambdaHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPointsInput">InvocationPointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNamesInput">TargetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints">InvocationPoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNames">TargetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targets"></a>

```csharp
public CloudformationLambdaHookTargetFiltersTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList">CloudformationLambdaHookTargetFiltersTargetsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `InvocationPointsInput`<sup>Optional</sup> <a name="InvocationPointsInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPointsInput"></a>

```csharp
public string[] InvocationPointsInput { get; }
```

- *Type:* string[]

---

##### `TargetNamesInput`<sup>Optional</sup> <a name="TargetNamesInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNamesInput"></a>

```csharp
public string[] TargetNamesInput { get; }
```

- *Type:* string[]

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetsInput"></a>

```csharp
public IResolvable|CloudformationLambdaHookTargetFiltersTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `InvocationPoints`<sup>Required</sup> <a name="InvocationPoints" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints"></a>

```csharp
public string[] InvocationPoints { get; }
```

- *Type:* string[]

---

##### `TargetNames`<sup>Required</sup> <a name="TargetNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNames"></a>

```csharp
public string[] TargetNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudformationLambdaHookTargetFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

---


### CloudformationLambdaHookTargetFiltersTargetsList <a name="CloudformationLambdaHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookTargetFiltersTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.get"></a>

```csharp
private CloudformationLambdaHookTargetFiltersTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.internalValue"></a>

```csharp
public IResolvable|CloudformationLambdaHookTargetFiltersTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]

---


### CloudformationLambdaHookTargetFiltersTargetsOutputReference <a name="CloudformationLambdaHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationLambdaHookTargetFiltersTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetInvocationPoint">ResetInvocationPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetTargetName">ResetTargetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetInvocationPoint` <a name="ResetInvocationPoint" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetInvocationPoint"></a>

```csharp
private void ResetInvocationPoint()
```

##### `ResetTargetName` <a name="ResetTargetName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetTargetName"></a>

```csharp
private void ResetTargetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPointInput">InvocationPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetNameInput">TargetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint">InvocationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `InvocationPointInput`<sup>Optional</sup> <a name="InvocationPointInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPointInput"></a>

```csharp
public string InvocationPointInput { get; }
```

- *Type:* string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetNameInput"></a>

```csharp
public string TargetNameInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InvocationPoint`<sup>Required</sup> <a name="InvocationPoint" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```csharp
public string InvocationPoint { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudformationLambdaHookTargetFiltersTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>

---



