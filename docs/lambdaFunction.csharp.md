# `lambdaFunction` Submodule <a name="`lambdaFunction` Submodule" id="@cdktn/provider-awscc.lambdaFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunction <a name="LambdaFunction" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function awscc_lambda_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunction(Construct Scope, string Id, LambdaFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig">LambdaFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig">LambdaFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCapacityProviderConfig">PutCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode">PutCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDeadLetterConfig">PutDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig">PutDurableConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEphemeralStorage">PutEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFileSystemConfigs">PutFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig">PutFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig">PutImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig">PutRuntimeManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putSnapStart">PutSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTenancyConfig">PutTenancyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTracingConfig">PutTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCapacityProviderConfig">ResetCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn">ResetCodeSigningConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDeadLetterConfig">ResetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDurableConfig">ResetDurableConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFileSystemConfigs">ResetFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionScalingConfig">ResetFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetHandler">ResetHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetImageConfig">ResetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLayers">ResetLayers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetMemorySize">ResetMemorySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPackageType">ResetPackageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPublishToLatestPublished">ResetPublishToLatestPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRecursiveLoop">ResetRecursiveLoop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions">ResetReservedConcurrentExecutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntimeManagementConfig">ResetRuntimeManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetSnapStart">ResetSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTenancyConfig">ResetTenancyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTracingConfig">ResetTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityProviderConfig` <a name="PutCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCapacityProviderConfig"></a>

```csharp
private void PutCapacityProviderConfig(LambdaFunctionCapacityProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCapacityProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

---

##### `PutCode` <a name="PutCode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode"></a>

```csharp
private void PutCode(LambdaFunctionCode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

---

##### `PutDeadLetterConfig` <a name="PutDeadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDeadLetterConfig"></a>

```csharp
private void PutDeadLetterConfig(LambdaFunctionDeadLetterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `PutDurableConfig` <a name="PutDurableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig"></a>

```csharp
private void PutDurableConfig(LambdaFunctionDurableConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEnvironment"></a>

```csharp
private void PutEnvironment(LambdaFunctionEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `PutEphemeralStorage` <a name="PutEphemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEphemeralStorage"></a>

```csharp
private void PutEphemeralStorage(LambdaFunctionEphemeralStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEphemeralStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `PutFileSystemConfigs` <a name="PutFileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFileSystemConfigs"></a>

```csharp
private void PutFileSystemConfigs(IResolvable|LambdaFunctionFileSystemConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFileSystemConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]

---

##### `PutFunctionScalingConfig` <a name="PutFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig"></a>

```csharp
private void PutFunctionScalingConfig(LambdaFunctionFunctionScalingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

---

##### `PutImageConfig` <a name="PutImageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig"></a>

```csharp
private void PutImageConfig(LambdaFunctionImageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(LambdaFunctionLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

---

##### `PutRuntimeManagementConfig` <a name="PutRuntimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig"></a>

```csharp
private void PutRuntimeManagementConfig(LambdaFunctionRuntimeManagementConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

---

##### `PutSnapStart` <a name="PutSnapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putSnapStart"></a>

```csharp
private void PutSnapStart(LambdaFunctionSnapStart Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putSnapStart.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTags"></a>

```csharp
private void PutTags(IResolvable|LambdaFunctionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]

---

##### `PutTenancyConfig` <a name="PutTenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTenancyConfig"></a>

```csharp
private void PutTenancyConfig(LambdaFunctionTenancyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTenancyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

---

##### `PutTracingConfig` <a name="PutTracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTracingConfig"></a>

```csharp
private void PutTracingConfig(LambdaFunctionTracingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTracingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig"></a>

```csharp
private void PutVpcConfig(LambdaFunctionVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetArchitectures"></a>

```csharp
private void ResetArchitectures()
```

##### `ResetCapacityProviderConfig` <a name="ResetCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCapacityProviderConfig"></a>

```csharp
private void ResetCapacityProviderConfig()
```

##### `ResetCodeSigningConfigArn` <a name="ResetCodeSigningConfigArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn"></a>

```csharp
private void ResetCodeSigningConfigArn()
```

##### `ResetDeadLetterConfig` <a name="ResetDeadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDeadLetterConfig"></a>

```csharp
private void ResetDeadLetterConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDurableConfig` <a name="ResetDurableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDurableConfig"></a>

```csharp
private void ResetDurableConfig()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEphemeralStorage"></a>

```csharp
private void ResetEphemeralStorage()
```

##### `ResetFileSystemConfigs` <a name="ResetFileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFileSystemConfigs"></a>

```csharp
private void ResetFileSystemConfigs()
```

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetFunctionScalingConfig` <a name="ResetFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionScalingConfig"></a>

```csharp
private void ResetFunctionScalingConfig()
```

##### `ResetHandler` <a name="ResetHandler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetHandler"></a>

```csharp
private void ResetHandler()
```

##### `ResetImageConfig` <a name="ResetImageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetImageConfig"></a>

```csharp
private void ResetImageConfig()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetLayers` <a name="ResetLayers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLayers"></a>

```csharp
private void ResetLayers()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetMemorySize` <a name="ResetMemorySize" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetMemorySize"></a>

```csharp
private void ResetMemorySize()
```

##### `ResetPackageType` <a name="ResetPackageType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPackageType"></a>

```csharp
private void ResetPackageType()
```

##### `ResetPublishToLatestPublished` <a name="ResetPublishToLatestPublished" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPublishToLatestPublished"></a>

```csharp
private void ResetPublishToLatestPublished()
```

##### `ResetRecursiveLoop` <a name="ResetRecursiveLoop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRecursiveLoop"></a>

```csharp
private void ResetRecursiveLoop()
```

##### `ResetReservedConcurrentExecutions` <a name="ResetReservedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions"></a>

```csharp
private void ResetReservedConcurrentExecutions()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetRuntimeManagementConfig` <a name="ResetRuntimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntimeManagementConfig"></a>

```csharp
private void ResetRuntimeManagementConfig()
```

##### `ResetSnapStart` <a name="ResetSnapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetSnapStart"></a>

```csharp
private void ResetSnapStart()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTenancyConfig` <a name="ResetTenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTenancyConfig"></a>

```csharp
private void ResetTenancyConfig()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTracingConfig` <a name="ResetTracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTracingConfig"></a>

```csharp
private void ResetTracingConfig()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaFunction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaFunction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfig">CapacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference">LambdaFunctionCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfig">DurableConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference">LambdaFunctionDurableConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigs">FileSystemConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList">LambdaFunctionFileSystemConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfig">FunctionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference">LambdaFunctionFunctionScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference">LambdaFunctionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfig">RuntimeManagementConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference">LambdaFunctionRuntimeManagementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStart">SnapStart</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartResponse">SnapStartResponse</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference">LambdaFunctionSnapStartResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList">LambdaFunctionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfig">TenancyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference">LambdaFunctionTenancyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfig">TracingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architecturesInput">ArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfigInput">CapacityProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeInput">CodeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput">CodeSigningConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfigInput">DeadLetterConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfigInput">DurableConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environmentInput">EnvironmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigsInput">FileSystemConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfigInput">FunctionScalingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handlerInput">HandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfigInput">ImageConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layersInput">LayersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfigInput">LoggingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySizeInput">MemorySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageTypeInput">PackageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublishedInput">PublishToLatestPublishedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoopInput">RecursiveLoopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput">ReservedConcurrentExecutionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfigInput">RuntimeManagementConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartInput">SnapStartInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfigInput">TenancyConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfigInput">TracingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architectures">Architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArn">CodeSigningConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handler">Handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layers">Layers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySize">MemorySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageType">PackageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublished">PublishToLatestPublished</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoop">RecursiveLoop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions">ReservedConcurrentExecutions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacityProviderConfig`<sup>Required</sup> <a name="CapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfig"></a>

```csharp
public LambdaFunctionCapacityProviderConfigOutputReference CapacityProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigOutputReference</a>

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.code"></a>

```csharp
public LambdaFunctionCodeOutputReference Code { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference">LambdaFunctionCodeOutputReference</a>

---

##### `DeadLetterConfig`<sup>Required</sup> <a name="DeadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfig"></a>

```csharp
public LambdaFunctionDeadLetterConfigOutputReference DeadLetterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a>

---

##### `DurableConfig`<sup>Required</sup> <a name="DurableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfig"></a>

```csharp
public LambdaFunctionDurableConfigOutputReference DurableConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference">LambdaFunctionDurableConfigOutputReference</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environment"></a>

```csharp
public LambdaFunctionEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a>

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorage"></a>

```csharp
public LambdaFunctionEphemeralStorageOutputReference EphemeralStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a>

---

##### `FileSystemConfigs`<sup>Required</sup> <a name="FileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigs"></a>

```csharp
public LambdaFunctionFileSystemConfigsList FileSystemConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList">LambdaFunctionFileSystemConfigsList</a>

---

##### `FunctionScalingConfig`<sup>Required</sup> <a name="FunctionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfig"></a>

```csharp
public LambdaFunctionFunctionScalingConfigOutputReference FunctionScalingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference">LambdaFunctionFunctionScalingConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfig"></a>

```csharp
public LambdaFunctionImageConfigOutputReference ImageConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a>

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfig"></a>

```csharp
public LambdaFunctionLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference">LambdaFunctionLoggingConfigOutputReference</a>

---

##### `RuntimeManagementConfig`<sup>Required</sup> <a name="RuntimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfig"></a>

```csharp
public LambdaFunctionRuntimeManagementConfigOutputReference RuntimeManagementConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference">LambdaFunctionRuntimeManagementConfigOutputReference</a>

---

##### `SnapStart`<sup>Required</sup> <a name="SnapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStart"></a>

```csharp
public LambdaFunctionSnapStartOutputReference SnapStart { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a>

---

##### `SnapStartResponse`<sup>Required</sup> <a name="SnapStartResponse" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartResponse"></a>

```csharp
public LambdaFunctionSnapStartResponseOutputReference SnapStartResponse { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference">LambdaFunctionSnapStartResponseOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tags"></a>

```csharp
public LambdaFunctionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList">LambdaFunctionTagsList</a>

---

##### `TenancyConfig`<sup>Required</sup> <a name="TenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfig"></a>

```csharp
public LambdaFunctionTenancyConfigOutputReference TenancyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference">LambdaFunctionTenancyConfigOutputReference</a>

---

##### `TracingConfig`<sup>Required</sup> <a name="TracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfig"></a>

```csharp
public LambdaFunctionTracingConfigOutputReference TracingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfig"></a>

```csharp
public LambdaFunctionVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a>

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architecturesInput"></a>

```csharp
public string[] ArchitecturesInput { get; }
```

- *Type:* string[]

---

##### `CapacityProviderConfigInput`<sup>Optional</sup> <a name="CapacityProviderConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionCapacityProviderConfig CapacityProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeInput"></a>

```csharp
public IResolvable|LambdaFunctionCode CodeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

---

##### `CodeSigningConfigArnInput`<sup>Optional</sup> <a name="CodeSigningConfigArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput"></a>

```csharp
public string CodeSigningConfigArnInput { get; }
```

- *Type:* string

---

##### `DeadLetterConfigInput`<sup>Optional</sup> <a name="DeadLetterConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionDeadLetterConfig DeadLetterConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DurableConfigInput`<sup>Optional</sup> <a name="DurableConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionDurableConfig DurableConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environmentInput"></a>

```csharp
public IResolvable|LambdaFunctionEnvironment EnvironmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorageInput"></a>

```csharp
public IResolvable|LambdaFunctionEphemeralStorage EphemeralStorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `FileSystemConfigsInput`<sup>Optional</sup> <a name="FileSystemConfigsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigsInput"></a>

```csharp
public IResolvable|LambdaFunctionFileSystemConfigs[] FileSystemConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `FunctionScalingConfigInput`<sup>Optional</sup> <a name="FunctionScalingConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionFunctionScalingConfig FunctionScalingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

---

##### `HandlerInput`<sup>Optional</sup> <a name="HandlerInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handlerInput"></a>

```csharp
public string HandlerInput { get; }
```

- *Type:* string

---

##### `ImageConfigInput`<sup>Optional</sup> <a name="ImageConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionImageConfig ImageConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `LayersInput`<sup>Optional</sup> <a name="LayersInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layersInput"></a>

```csharp
public string[] LayersInput { get; }
```

- *Type:* string[]

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionLoggingConfig LoggingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

---

##### `MemorySizeInput`<sup>Optional</sup> <a name="MemorySizeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySizeInput"></a>

```csharp
public double MemorySizeInput { get; }
```

- *Type:* double

---

##### `PackageTypeInput`<sup>Optional</sup> <a name="PackageTypeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageTypeInput"></a>

```csharp
public string PackageTypeInput { get; }
```

- *Type:* string

---

##### `PublishToLatestPublishedInput`<sup>Optional</sup> <a name="PublishToLatestPublishedInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublishedInput"></a>

```csharp
public bool|IResolvable PublishToLatestPublishedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RecursiveLoopInput`<sup>Optional</sup> <a name="RecursiveLoopInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoopInput"></a>

```csharp
public string RecursiveLoopInput { get; }
```

- *Type:* string

---

##### `ReservedConcurrentExecutionsInput`<sup>Optional</sup> <a name="ReservedConcurrentExecutionsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput"></a>

```csharp
public double ReservedConcurrentExecutionsInput { get; }
```

- *Type:* double

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `RuntimeManagementConfigInput`<sup>Optional</sup> <a name="RuntimeManagementConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionRuntimeManagementConfig RuntimeManagementConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

---

##### `SnapStartInput`<sup>Optional</sup> <a name="SnapStartInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartInput"></a>

```csharp
public IResolvable|LambdaFunctionSnapStart SnapStartInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tagsInput"></a>

```csharp
public IResolvable|LambdaFunctionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]

---

##### `TenancyConfigInput`<sup>Optional</sup> <a name="TenancyConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionTenancyConfig TenancyConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TracingConfigInput`<sup>Optional</sup> <a name="TracingConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionTracingConfig TracingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architectures"></a>

```csharp
public string[] Architectures { get; }
```

- *Type:* string[]

---

##### `CodeSigningConfigArn`<sup>Required</sup> <a name="CodeSigningConfigArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArn"></a>

```csharp
public string CodeSigningConfigArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handler"></a>

```csharp
public string Handler { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Layers`<sup>Required</sup> <a name="Layers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layers"></a>

```csharp
public string[] Layers { get; }
```

- *Type:* string[]

---

##### `MemorySize`<sup>Required</sup> <a name="MemorySize" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySize"></a>

```csharp
public double MemorySize { get; }
```

- *Type:* double

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageType"></a>

```csharp
public string PackageType { get; }
```

- *Type:* string

---

##### `PublishToLatestPublished`<sup>Required</sup> <a name="PublishToLatestPublished" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublished"></a>

```csharp
public bool|IResolvable PublishToLatestPublished { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RecursiveLoop`<sup>Required</sup> <a name="RecursiveLoop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoop"></a>

```csharp
public string RecursiveLoop { get; }
```

- *Type:* string

---

##### `ReservedConcurrentExecutions`<sup>Required</sup> <a name="ReservedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions"></a>

```csharp
public double ReservedConcurrentExecutions { get; }
```

- *Type:* double

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionCapacityProviderConfig <a name="LambdaFunctionCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionCapacityProviderConfig {
    LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig LambdaManagedInstancesCapacityProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig.property.lambdaManagedInstancesCapacityProviderConfig">LambdaManagedInstancesCapacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | Configuration for Lambda-managed instances used by the capacity provider. |

---

##### `LambdaManagedInstancesCapacityProviderConfig`<sup>Optional</sup> <a name="LambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig.property.lambdaManagedInstancesCapacityProviderConfig"></a>

```csharp
public LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig LambdaManagedInstancesCapacityProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

Configuration for Lambda-managed instances used by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#lambda_managed_instances_capacity_provider_config LambdaFunction#lambda_managed_instances_capacity_provider_config}

---

### LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig <a name="LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig {
    string CapacityProviderArn = null,
    double ExecutionEnvironmentMemoryGiBPerVCpu = null,
    double PerExecutionEnvironmentMaxConcurrency = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.capacityProviderArn">CapacityProviderArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.executionEnvironmentMemoryGiBPerVCpu">ExecutionEnvironmentMemoryGiBPerVCpu</a></code> | <code>double</code> | The amount of memory in GiB allocated per vCPU for execution environments. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.perExecutionEnvironmentMaxConcurrency">PerExecutionEnvironmentMaxConcurrency</a></code> | <code>double</code> | The maximum number of concurrent executions that can run on each execution environment. |

---

##### `CapacityProviderArn`<sup>Optional</sup> <a name="CapacityProviderArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.capacityProviderArn"></a>

```csharp
public string CapacityProviderArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#capacity_provider_arn LambdaFunction#capacity_provider_arn}

---

##### `ExecutionEnvironmentMemoryGiBPerVCpu`<sup>Optional</sup> <a name="ExecutionEnvironmentMemoryGiBPerVCpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.executionEnvironmentMemoryGiBPerVCpu"></a>

```csharp
public double ExecutionEnvironmentMemoryGiBPerVCpu { get; set; }
```

- *Type:* double

The amount of memory in GiB allocated per vCPU for execution environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#execution_environment_memory_gi_b_per_v_cpu LambdaFunction#execution_environment_memory_gi_b_per_v_cpu}

---

##### `PerExecutionEnvironmentMaxConcurrency`<sup>Optional</sup> <a name="PerExecutionEnvironmentMaxConcurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.perExecutionEnvironmentMaxConcurrency"></a>

```csharp
public double PerExecutionEnvironmentMaxConcurrency { get; set; }
```

- *Type:* double

The maximum number of concurrent executions that can run on each execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#per_execution_environment_max_concurrency LambdaFunction#per_execution_environment_max_concurrency}

---

### LambdaFunctionCode <a name="LambdaFunctionCode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionCode {
    string ImageUri = null,
    string S3Bucket = null,
    string S3Key = null,
    string S3ObjectStorageMode = null,
    string S3ObjectVersion = null,
    string SourceKmsKeyArn = null,
    string ZipFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.imageUri">ImageUri</a></code> | <code>string</code> | URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Key">S3Key</a></code> | <code>string</code> | The Amazon S3 key of the deployment package. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectStorageMode">S3ObjectStorageMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#s3_object_storage_mode LambdaFunction#s3_object_storage_mode}. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | For versioned objects, the version of the deployment package object to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.sourceKmsKeyArn">SourceKmsKeyArn</a></code> | <code>string</code> | The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.zipFile">ZipFile</a></code> | <code>string</code> | (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.   When you specify source code inline for a Node.js function, the ``index`` file that CFN creates uses the extension ``.js``. This means that Node.js treats the file as a CommonJS module.  When using Node.js 24 or later, Node.js can automatically detect if a ``.js`` file should be treated as CommonJS or as an ES module. To enable auto-detection, add the ``--experimental-detect-module`` flag to the ``NODE_OPTIONS`` environment variable. For more information, see [Experimental Node.js features](https://docs.aws.amazon.com//lambda/latest/dg/lambda-nodejs.html#nodejs-experimental-features).    For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.  If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details. |

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#image_uri LambdaFunction#image_uri}

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#s3_bucket LambdaFunction#s3_bucket}

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

The Amazon S3 key of the deployment package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#s3_key LambdaFunction#s3_key}

---

##### `S3ObjectStorageMode`<sup>Optional</sup> <a name="S3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectStorageMode"></a>

```csharp
public string S3ObjectStorageMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#s3_object_storage_mode LambdaFunction#s3_object_storage_mode}.

---

##### `S3ObjectVersion`<sup>Optional</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; set; }
```

- *Type:* string

For versioned objects, the version of the deployment package object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#s3_object_version LambdaFunction#s3_object_version}

---

##### `SourceKmsKeyArn`<sup>Optional</sup> <a name="SourceKmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.sourceKmsKeyArn"></a>

```csharp
public string SourceKmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#source_kms_key_arn LambdaFunction#source_kms_key_arn}

---

##### `ZipFile`<sup>Optional</sup> <a name="ZipFile" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.zipFile"></a>

```csharp
public string ZipFile { get; set; }
```

- *Type:* string

(Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.   When you specify source code inline for a Node.js function, the ``index`` file that CFN creates uses the extension ``.js``. This means that Node.js treats the file as a CommonJS module.  When using Node.js 24 or later, Node.js can automatically detect if a ``.js`` file should be treated as CommonJS or as an ES module. To enable auto-detection, add the ``--experimental-detect-module`` flag to the ``NODE_OPTIONS`` environment variable. For more information, see [Experimental Node.js features](https://docs.aws.amazon.com//lambda/latest/dg/lambda-nodejs.html#nodejs-experimental-features).    For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.  If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#zip_file LambdaFunction#zip_file}

---

### LambdaFunctionConfig <a name="LambdaFunctionConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    LambdaFunctionCode Code,
    string Role,
    string[] Architectures = null,
    LambdaFunctionCapacityProviderConfig CapacityProviderConfig = null,
    string CodeSigningConfigArn = null,
    LambdaFunctionDeadLetterConfig DeadLetterConfig = null,
    string Description = null,
    LambdaFunctionDurableConfig DurableConfig = null,
    LambdaFunctionEnvironment Environment = null,
    LambdaFunctionEphemeralStorage EphemeralStorage = null,
    IResolvable|LambdaFunctionFileSystemConfigs[] FileSystemConfigs = null,
    string FunctionName = null,
    LambdaFunctionFunctionScalingConfig FunctionScalingConfig = null,
    string Handler = null,
    LambdaFunctionImageConfig ImageConfig = null,
    string KmsKeyArn = null,
    string[] Layers = null,
    LambdaFunctionLoggingConfig LoggingConfig = null,
    double MemorySize = null,
    string PackageType = null,
    bool|IResolvable PublishToLatestPublished = null,
    string RecursiveLoop = null,
    double ReservedConcurrentExecutions = null,
    string Runtime = null,
    LambdaFunctionRuntimeManagementConfig RuntimeManagementConfig = null,
    LambdaFunctionSnapStart SnapStart = null,
    IResolvable|LambdaFunctionTags[] Tags = null,
    LambdaFunctionTenancyConfig TenancyConfig = null,
    double Timeout = null,
    LambdaFunctionTracingConfig TracingConfig = null,
    LambdaFunctionVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | The code for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.role">Role</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the function's execution role. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.architectures">Architectures</a></code> | <code>string[]</code> | The instruction set architecture that the function supports. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.capacityProviderConfig">CapacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | Configuration for the capacity provider that manages compute resources for Lambda functions. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn">CodeSigningConfigArn</a></code> | <code>string</code> | To enable code signing for this function, specify the ARN of a code-signing configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.description">Description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.durableConfig">DurableConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout and retention period for execution history. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | Environment variables that are accessible from function code during execution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | The size of the function's ``/tmp`` directory in MB. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfigs">FileSystemConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]</code> | Connection settings for an Amazon EFS or Amazon S3 Files file system. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionName">FunctionName</a></code> | <code>string</code> | The name of the Lambda function, up to 64 characters in length. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionScalingConfig">FunctionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.handler">Handler</a></code> | <code>string</code> | The name of the method within your code that Lambda calls to run your function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:   +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).   +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.   +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).   +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).     If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.layers">Layers</a></code> | <code>string[]</code> | A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | The function's Amazon CloudWatch Logs configuration settings. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.memorySize">MemorySize</a></code> | <code>double</code> | The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.packageType">PackageType</a></code> | <code>string</code> | The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.publishToLatestPublished">PublishToLatestPublished</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#publish_to_latest_published LambdaFunction#publish_to_latest_published}. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.recursiveLoop">RecursiveLoop</a></code> | <code>string</code> | The status of your function's recursive loop detection configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions">ReservedConcurrentExecutions</a></code> | <code>double</code> | The number of simultaneous executions to reserve for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtime">Runtime</a></code> | <code>string</code> | The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.  The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).  For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtimeManagementConfig">RuntimeManagementConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.snapStart">SnapStart</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]</code> | A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tenancyConfig">TenancyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | The function's tenant isolation configuration settings. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.timeout">Timeout</a></code> | <code>double</code> | The amount of time (in seconds) that Lambda allows a function to run before stopping it. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tracingConfig">TracingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.code"></a>

```csharp
public LambdaFunctionCode Code { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

The code for the function.

You can define your function code in multiple ways:

* For .zip deployment packages, you can specify the S3 location of the .zip file in the `S3Bucket`, `S3Key`, and `S3ObjectVersion` properties.
* For .zip deployment packages, you can alternatively define the function code inline in the `ZipFile` property. This method works only for Node.js and Python functions.
* For container images, specify the URI of your container image in the ECR registry in the `ImageUri` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#code LambdaFunction#code}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the function's execution role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#role LambdaFunction#role}

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.architectures"></a>

```csharp
public string[] Architectures { get; set; }
```

- *Type:* string[]

The instruction set architecture that the function supports.

Enter a string array with one of the valid values (arm64 or x86_64). The default value is `x86_64`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#architectures LambdaFunction#architectures}

---

##### `CapacityProviderConfig`<sup>Optional</sup> <a name="CapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.capacityProviderConfig"></a>

```csharp
public LambdaFunctionCapacityProviderConfig CapacityProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

Configuration for the capacity provider that manages compute resources for Lambda functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#capacity_provider_config LambdaFunction#capacity_provider_config}

---

##### `CodeSigningConfigArn`<sup>Optional</sup> <a name="CodeSigningConfigArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn"></a>

```csharp
public string CodeSigningConfigArn { get; set; }
```

- *Type:* string

To enable code signing for this function, specify the ARN of a code-signing configuration.

A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}

---

##### `DeadLetterConfig`<sup>Optional</sup> <a name="DeadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig"></a>

```csharp
public LambdaFunctionDeadLetterConfig DeadLetterConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing.

For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#description LambdaFunction#description}

---

##### `DurableConfig`<sup>Optional</sup> <a name="DurableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.durableConfig"></a>

```csharp
public LambdaFunctionDurableConfig DurableConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout and retention period for execution history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#durable_config LambdaFunction#durable_config}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.environment"></a>

```csharp
public LambdaFunctionEnvironment Environment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

Environment variables that are accessible from function code during execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#environment LambdaFunction#environment}

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage"></a>

```csharp
public LambdaFunctionEphemeralStorage EphemeralStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

The size of the function's ``/tmp`` directory in MB.

The default value is 512, but it can be any whole number between 512 and 10,240 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `FileSystemConfigs`<sup>Optional</sup> <a name="FileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfigs"></a>

```csharp
public IResolvable|LambdaFunctionFileSystemConfigs[] FileSystemConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]

Connection settings for an Amazon EFS or Amazon S3 Files file system.

To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) or [AWS::S3Files::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-mounttarget.html) resource, you must also specify a `DependsOn` attribute to ensure that the mount target is created or updated before the function.
For more information about using the `DependsOn` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#file_system_configs LambdaFunction#file_system_configs}

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

The name of the Lambda function, up to 64 characters in length.

If you don't specify a name, CFN generates one.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#function_name LambdaFunction#function_name}

---

##### `FunctionScalingConfig`<sup>Optional</sup> <a name="FunctionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionScalingConfig"></a>

```csharp
public LambdaFunctionFunctionScalingConfig FunctionScalingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#function_scaling_config LambdaFunction#function_scaling_config}

---

##### `Handler`<sup>Optional</sup> <a name="Handler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.handler"></a>

```csharp
public string Handler { get; set; }
```

- *Type:* string

The name of the method within your code that Lambda calls to run your function.

Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#handler LambdaFunction#handler}

---

##### `ImageConfig`<sup>Optional</sup> <a name="ImageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.imageConfig"></a>

```csharp
public LambdaFunctionImageConfig ImageConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#image_config LambdaFunction#image_config}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:   +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).   +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.   +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).   +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).     If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}

---

##### `Layers`<sup>Optional</sup> <a name="Layers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.layers"></a>

```csharp
public string[] Layers { get; set; }
```

- *Type:* string[]

A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#layers LambdaFunction#layers}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.loggingConfig"></a>

```csharp
public LambdaFunctionLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

The function's Amazon CloudWatch Logs configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#logging_config LambdaFunction#logging_config}

---

##### `MemorySize`<sup>Optional</sup> <a name="MemorySize" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.memorySize"></a>

```csharp
public double MemorySize { get; set; }
```

- *Type:* double

The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#memory_size LambdaFunction#memory_size}

---

##### `PackageType`<sup>Optional</sup> <a name="PackageType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.packageType"></a>

```csharp
public string PackageType { get; set; }
```

- *Type:* string

The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#package_type LambdaFunction#package_type}

---

##### `PublishToLatestPublished`<sup>Optional</sup> <a name="PublishToLatestPublished" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.publishToLatestPublished"></a>

```csharp
public bool|IResolvable PublishToLatestPublished { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#publish_to_latest_published LambdaFunction#publish_to_latest_published}.

---

##### `RecursiveLoop`<sup>Optional</sup> <a name="RecursiveLoop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.recursiveLoop"></a>

```csharp
public string RecursiveLoop { get; set; }
```

- *Type:* string

The status of your function's recursive loop detection configuration.

When this value is set to `Allow`and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
When this value is set to `Terminate` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#recursive_loop LambdaFunction#recursive_loop}

---

##### `ReservedConcurrentExecutions`<sup>Optional</sup> <a name="ReservedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions"></a>

```csharp
public double ReservedConcurrentExecutions { get; set; }
```

- *Type:* double

The number of simultaneous executions to reserve for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.  The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).  For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#runtime LambdaFunction#runtime}

---

##### `RuntimeManagementConfig`<sup>Optional</sup> <a name="RuntimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtimeManagementConfig"></a>

```csharp
public LambdaFunctionRuntimeManagementConfig RuntimeManagementConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#runtime_management_config LambdaFunction#runtime_management_config}

---

##### `SnapStart`<sup>Optional</sup> <a name="SnapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.snapStart"></a>

```csharp
public LambdaFunctionSnapStart SnapStart { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tags"></a>

```csharp
public IResolvable|LambdaFunctionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]

A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#tags LambdaFunction#tags}

---

##### `TenancyConfig`<sup>Optional</sup> <a name="TenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tenancyConfig"></a>

```csharp
public LambdaFunctionTenancyConfig TenancyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

The function's tenant isolation configuration settings.

Determines whether the Lambda function runs on a shared or dedicated infrastructure per unique tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#tenancy_config LambdaFunction#tenancy_config}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The amount of time (in seconds) that Lambda allows a function to run before stopping it.

The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#timeout LambdaFunction#timeout}

---

##### `TracingConfig`<sup>Optional</sup> <a name="TracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tracingConfig"></a>

```csharp
public LambdaFunctionTracingConfig TracingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.vpcConfig"></a>

```csharp
public LambdaFunctionVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.

When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#vpc_config LambdaFunction#vpc_config}

---

### LambdaFunctionDeadLetterConfig <a name="LambdaFunctionDeadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionDeadLetterConfig {
    string TargetArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn">TargetArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic. |

---

##### `TargetArn`<sup>Optional</sup> <a name="TargetArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#target_arn LambdaFunction#target_arn}

---

### LambdaFunctionDurableConfig <a name="LambdaFunctionDurableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionDurableConfig {
    double ExecutionTimeout = null,
    double RetentionPeriodInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.executionTimeout">ExecutionTimeout</a></code> | <code>double</code> | The maximum time (in seconds) that a durable execution can run before timing out. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | The number of days to retain execution history after a durable execution completes. |

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.executionTimeout"></a>

```csharp
public double ExecutionTimeout { get; set; }
```

- *Type:* double

The maximum time (in seconds) that a durable execution can run before timing out.

This timeout applies to the entire durable execution, not individual function invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#execution_timeout LambdaFunction#execution_timeout}

---

##### `RetentionPeriodInDays`<sup>Optional</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; set; }
```

- *Type:* double

The number of days to retain execution history after a durable execution completes.

After this period, execution history is no longer available through the GetDurableExecutionHistory API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#retention_period_in_days LambdaFunction#retention_period_in_days}

---

### LambdaFunctionEnvironment <a name="LambdaFunctionEnvironment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionEnvironment {
    System.Collections.Generic.IDictionary<string, string> Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variable key-value pairs. |

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variable key-value pairs.

For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).
If the value of the environment variable is a time or a duration, enclose the value in quotes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#variables LambdaFunction#variables}

---

### LambdaFunctionEphemeralStorage <a name="LambdaFunctionEphemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionEphemeralStorage {
    double Size = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage.property.size">Size</a></code> | <code>double</code> | The size of the function's ``/tmp`` directory. |

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

The size of the function's ``/tmp`` directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#size LambdaFunction#size}

---

### LambdaFunctionFileSystemConfigs <a name="LambdaFunctionFileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionFileSystemConfigs {
    string Arn = null,
    string LocalMountPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.arn">Arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.localMountPath">LocalMountPath</a></code> | <code>string</code> | The path where the function can access the file system, starting with ``/mnt/``. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#arn LambdaFunction#arn}

---

##### `LocalMountPath`<sup>Optional</sup> <a name="LocalMountPath" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.localMountPath"></a>

```csharp
public string LocalMountPath { get; set; }
```

- *Type:* string

The path where the function can access the file system, starting with ``/mnt/``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#local_mount_path LambdaFunction#local_mount_path}

---

### LambdaFunctionFunctionScalingConfig <a name="LambdaFunctionFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionFunctionScalingConfig {
    double MaxExecutionEnvironments = null,
    double MinExecutionEnvironments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.maxExecutionEnvironments">MaxExecutionEnvironments</a></code> | <code>double</code> | The maximum number of execution environments that can be provisioned for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.minExecutionEnvironments">MinExecutionEnvironments</a></code> | <code>double</code> | The minimum number of execution environments to maintain for the function. |

---

##### `MaxExecutionEnvironments`<sup>Optional</sup> <a name="MaxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.maxExecutionEnvironments"></a>

```csharp
public double MaxExecutionEnvironments { get; set; }
```

- *Type:* double

The maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#max_execution_environments LambdaFunction#max_execution_environments}

---

##### `MinExecutionEnvironments`<sup>Optional</sup> <a name="MinExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.minExecutionEnvironments"></a>

```csharp
public double MinExecutionEnvironments { get; set; }
```

- *Type:* double

The minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#min_execution_environments LambdaFunction#min_execution_environments}

---

### LambdaFunctionImageConfig <a name="LambdaFunctionImageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionImageConfig {
    string[] Command = null,
    string[] EntryPoint = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.command">Command</a></code> | <code>string[]</code> | Specifies parameters that you want to pass in with ENTRYPOINT. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint">EntryPoint</a></code> | <code>string[]</code> | Specifies the entry point to their application, which is typically the location of the runtime executable. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | Specifies the working directory. The length of the directory string cannot exceed 1,000 characters. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Specifies parameters that you want to pass in with ENTRYPOINT.

You can specify a maximum of 1,500 parameters in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#command LambdaFunction#command}

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint"></a>

```csharp
public string[] EntryPoint { get; set; }
```

- *Type:* string[]

Specifies the entry point to their application, which is typically the location of the runtime executable.

You can specify a maximum of 1,500 string entries in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#entry_point LambdaFunction#entry_point}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#working_directory LambdaFunction#working_directory}

---

### LambdaFunctionLoggingConfig <a name="LambdaFunctionLoggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionLoggingConfig {
    string ApplicationLogLevel = null,
    string LogFormat = null,
    string LogGroup = null,
    string SystemLogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.applicationLogLevel">ApplicationLogLevel</a></code> | <code>string</code> | Set this property to filter the application logs for your function that Lambda sends to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logFormat">LogFormat</a></code> | <code>string</code> | The format in which Lambda sends your function's application and system logs to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logGroup">LogGroup</a></code> | <code>string</code> | The name of the Amazon CloudWatch log group the function sends logs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.systemLogLevel">SystemLogLevel</a></code> | <code>string</code> | Set this property to filter the system logs for your function that Lambda sends to CloudWatch. |

---

##### `ApplicationLogLevel`<sup>Optional</sup> <a name="ApplicationLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.applicationLogLevel"></a>

```csharp
public string ApplicationLogLevel { get; set; }
```

- *Type:* string

Set this property to filter the application logs for your function that Lambda sends to CloudWatch.

Lambda only sends application logs at the selected level of detail and lower, where `TRACE` is the highest level and `FATAL` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#application_log_level LambdaFunction#application_log_level}

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logFormat"></a>

```csharp
public string LogFormat { get; set; }
```

- *Type:* string

The format in which Lambda sends your function's application and system logs to CloudWatch.

Select between plain text and structured JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#log_format LambdaFunction#log_format}

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

The name of the Amazon CloudWatch log group the function sends logs to.

By default, Lambda functions send logs to a default log group named `/aws/lambda/<function name>`. To use a different log group, enter an existing log group or enter a new log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#log_group LambdaFunction#log_group}

---

##### `SystemLogLevel`<sup>Optional</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.systemLogLevel"></a>

```csharp
public string SystemLogLevel { get; set; }
```

- *Type:* string

Set this property to filter the system logs for your function that Lambda sends to CloudWatch.

Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#system_log_level LambdaFunction#system_log_level}

---

### LambdaFunctionRuntimeManagementConfig <a name="LambdaFunctionRuntimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionRuntimeManagementConfig {
    string RuntimeVersionArn = null,
    string UpdateRuntimeOn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.runtimeVersionArn">RuntimeVersionArn</a></code> | <code>string</code> | The ARN of the runtime version you want the function to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.updateRuntimeOn">UpdateRuntimeOn</a></code> | <code>string</code> | Specify the runtime update mode. |

---

##### `RuntimeVersionArn`<sup>Optional</sup> <a name="RuntimeVersionArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.runtimeVersionArn"></a>

```csharp
public string RuntimeVersionArn { get; set; }
```

- *Type:* string

The ARN of the runtime version you want the function to use.

This is only required if you're using the *Manual* runtime update mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#runtime_version_arn LambdaFunction#runtime_version_arn}

---

##### `UpdateRuntimeOn`<sup>Optional</sup> <a name="UpdateRuntimeOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.updateRuntimeOn"></a>

```csharp
public string UpdateRuntimeOn { get; set; }
```

- *Type:* string

Specify the runtime update mode.

* *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.
* *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
* *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).

*Valid Values*: `Auto` | `FunctionUpdate` | `Manual`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#update_runtime_on LambdaFunction#update_runtime_on}

---

### LambdaFunctionSnapStart <a name="LambdaFunctionSnapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionSnapStart {
    string ApplyOn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart.property.applyOn">ApplyOn</a></code> | <code>string</code> | Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version. |

---

##### `ApplyOn`<sup>Optional</sup> <a name="ApplyOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart.property.applyOn"></a>

```csharp
public string ApplyOn { get; set; }
```

- *Type:* string

Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#apply_on LambdaFunction#apply_on}

---

### LambdaFunctionSnapStartResponse <a name="LambdaFunctionSnapStartResponse" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionSnapStartResponse {

};
```


### LambdaFunctionTags <a name="LambdaFunctionTags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.key">Key</a></code> | <code>string</code> | The key for this tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.value">Value</a></code> | <code>string</code> | The value for this tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#key LambdaFunction#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#value LambdaFunction#value}

---

### LambdaFunctionTenancyConfig <a name="LambdaFunctionTenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionTenancyConfig {
    string TenantIsolationMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig.property.tenantIsolationMode">TenantIsolationMode</a></code> | <code>string</code> | Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID. |

---

##### `TenantIsolationMode`<sup>Optional</sup> <a name="TenantIsolationMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig.property.tenantIsolationMode"></a>

```csharp
public string TenantIsolationMode { get; set; }
```

- *Type:* string

Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#tenant_isolation_mode LambdaFunction#tenant_isolation_mode}

---

### LambdaFunctionTracingConfig <a name="LambdaFunctionTracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionTracingConfig {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig.property.mode">Mode</a></code> | <code>string</code> | The tracing mode. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The tracing mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#mode LambdaFunction#mode}

---

### LambdaFunctionVpcConfig <a name="LambdaFunctionVpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionVpcConfig {
    bool|IResolvable Ipv6AllowedForDualStack = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.ipv6AllowedForDualStack">Ipv6AllowedForDualStack</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | A list of VPC security group IDs. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | A list of VPC subnet IDs. |

---

##### `Ipv6AllowedForDualStack`<sup>Optional</sup> <a name="Ipv6AllowedForDualStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.ipv6AllowedForDualStack"></a>

```csharp
public bool|IResolvable Ipv6AllowedForDualStack { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#ipv_6_allowed_for_dual_stack LambdaFunction#ipv_6_allowed_for_dual_stack}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of VPC security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#security_group_ids LambdaFunction#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

A list of VPC subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_function#subnet_ids LambdaFunction#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference <a name="LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetCapacityProviderArn">ResetCapacityProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetExecutionEnvironmentMemoryGiBPerVCpu">ResetExecutionEnvironmentMemoryGiBPerVCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetPerExecutionEnvironmentMaxConcurrency">ResetPerExecutionEnvironmentMaxConcurrency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityProviderArn` <a name="ResetCapacityProviderArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetCapacityProviderArn"></a>

```csharp
private void ResetCapacityProviderArn()
```

##### `ResetExecutionEnvironmentMemoryGiBPerVCpu` <a name="ResetExecutionEnvironmentMemoryGiBPerVCpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetExecutionEnvironmentMemoryGiBPerVCpu"></a>

```csharp
private void ResetExecutionEnvironmentMemoryGiBPerVCpu()
```

##### `ResetPerExecutionEnvironmentMaxConcurrency` <a name="ResetPerExecutionEnvironmentMaxConcurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetPerExecutionEnvironmentMaxConcurrency"></a>

```csharp
private void ResetPerExecutionEnvironmentMaxConcurrency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArnInput">CapacityProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpuInput">ExecutionEnvironmentMemoryGiBPerVCpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrencyInput">PerExecutionEnvironmentMaxConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArn">CapacityProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpu">ExecutionEnvironmentMemoryGiBPerVCpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrency">PerExecutionEnvironmentMaxConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityProviderArnInput`<sup>Optional</sup> <a name="CapacityProviderArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArnInput"></a>

```csharp
public string CapacityProviderArnInput { get; }
```

- *Type:* string

---

##### `ExecutionEnvironmentMemoryGiBPerVCpuInput`<sup>Optional</sup> <a name="ExecutionEnvironmentMemoryGiBPerVCpuInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpuInput"></a>

```csharp
public double ExecutionEnvironmentMemoryGiBPerVCpuInput { get; }
```

- *Type:* double

---

##### `PerExecutionEnvironmentMaxConcurrencyInput`<sup>Optional</sup> <a name="PerExecutionEnvironmentMaxConcurrencyInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrencyInput"></a>

```csharp
public double PerExecutionEnvironmentMaxConcurrencyInput { get; }
```

- *Type:* double

---

##### `CapacityProviderArn`<sup>Required</sup> <a name="CapacityProviderArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArn"></a>

```csharp
public string CapacityProviderArn { get; }
```

- *Type:* string

---

##### `ExecutionEnvironmentMemoryGiBPerVCpu`<sup>Required</sup> <a name="ExecutionEnvironmentMemoryGiBPerVCpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpu"></a>

```csharp
public double ExecutionEnvironmentMemoryGiBPerVCpu { get; }
```

- *Type:* double

---

##### `PerExecutionEnvironmentMaxConcurrency`<sup>Required</sup> <a name="PerExecutionEnvironmentMaxConcurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrency"></a>

```csharp
public double PerExecutionEnvironmentMaxConcurrency { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

---


### LambdaFunctionCapacityProviderConfigOutputReference <a name="LambdaFunctionCapacityProviderConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionCapacityProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig">PutLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resetLambdaManagedInstancesCapacityProviderConfig">ResetLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaManagedInstancesCapacityProviderConfig` <a name="PutLambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig"></a>

```csharp
private void PutLambdaManagedInstancesCapacityProviderConfig(LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

---

##### `ResetLambdaManagedInstancesCapacityProviderConfig` <a name="ResetLambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resetLambdaManagedInstancesCapacityProviderConfig"></a>

```csharp
private void ResetLambdaManagedInstancesCapacityProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfig">LambdaManagedInstancesCapacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfigInput">LambdaManagedInstancesCapacityProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaManagedInstancesCapacityProviderConfig`<sup>Required</sup> <a name="LambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfig"></a>

```csharp
public LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference LambdaManagedInstancesCapacityProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference</a>

---

##### `LambdaManagedInstancesCapacityProviderConfigInput`<sup>Optional</sup> <a name="LambdaManagedInstancesCapacityProviderConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig LambdaManagedInstancesCapacityProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionCapacityProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

---


### LambdaFunctionCodeOutputReference <a name="LambdaFunctionCodeOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionCodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectStorageMode">ResetS3ObjectStorageMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectVersion">ResetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetSourceKmsKeyArn">ResetSourceKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetZipFile">ResetZipFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```

##### `ResetS3ObjectStorageMode` <a name="ResetS3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectStorageMode"></a>

```csharp
private void ResetS3ObjectStorageMode()
```

##### `ResetS3ObjectVersion` <a name="ResetS3ObjectVersion" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectVersion"></a>

```csharp
private void ResetS3ObjectVersion()
```

##### `ResetSourceKmsKeyArn` <a name="ResetSourceKmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetSourceKmsKeyArn"></a>

```csharp
private void ResetSourceKmsKeyArn()
```

##### `ResetZipFile` <a name="ResetZipFile" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetZipFile"></a>

```csharp
private void ResetZipFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageModeInput">S3ObjectStorageModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersionInput">S3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArnInput">SourceKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFileInput">ZipFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageMode">S3ObjectStorageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArn">SourceKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFile">ZipFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3ObjectStorageModeInput`<sup>Optional</sup> <a name="S3ObjectStorageModeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageModeInput"></a>

```csharp
public string S3ObjectStorageModeInput { get; }
```

- *Type:* string

---

##### `S3ObjectVersionInput`<sup>Optional</sup> <a name="S3ObjectVersionInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersionInput"></a>

```csharp
public string S3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `SourceKmsKeyArnInput`<sup>Optional</sup> <a name="SourceKmsKeyArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArnInput"></a>

```csharp
public string SourceKmsKeyArnInput { get; }
```

- *Type:* string

---

##### `ZipFileInput`<sup>Optional</sup> <a name="ZipFileInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFileInput"></a>

```csharp
public string ZipFileInput { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `S3ObjectStorageMode`<sup>Required</sup> <a name="S3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageMode"></a>

```csharp
public string S3ObjectStorageMode { get; }
```

- *Type:* string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; }
```

- *Type:* string

---

##### `SourceKmsKeyArn`<sup>Required</sup> <a name="SourceKmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArn"></a>

```csharp
public string SourceKmsKeyArn { get; }
```

- *Type:* string

---

##### `ZipFile`<sup>Required</sup> <a name="ZipFile" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFile"></a>

```csharp
public string ZipFile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionCode InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

---


### LambdaFunctionDeadLetterConfigOutputReference <a name="LambdaFunctionDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionDeadLetterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resetTargetArn">ResetTargetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetArn` <a name="ResetTargetArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resetTargetArn"></a>

```csharp
private void ResetTargetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionDeadLetterConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---


### LambdaFunctionDurableConfigOutputReference <a name="LambdaFunctionDurableConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionDurableConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetRetentionPeriodInDays">ResetRetentionPeriodInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetExecutionTimeout"></a>

```csharp
private void ResetExecutionTimeout()
```

##### `ResetRetentionPeriodInDays` <a name="ResetRetentionPeriodInDays" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetRetentionPeriodInDays"></a>

```csharp
private void ResetRetentionPeriodInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDaysInput">RetentionPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeout">ExecutionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeoutInput"></a>

```csharp
public double ExecutionTimeoutInput { get; }
```

- *Type:* double

---

##### `RetentionPeriodInDaysInput`<sup>Optional</sup> <a name="RetentionPeriodInDaysInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDaysInput"></a>

```csharp
public double RetentionPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeout"></a>

```csharp
public double ExecutionTimeout { get; }
```

- *Type:* double

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionDurableConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

---


### LambdaFunctionEnvironmentOutputReference <a name="LambdaFunctionEnvironmentOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables"></a>

```csharp
private void ResetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput">VariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionEnvironment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---


### LambdaFunctionEphemeralStorageOutputReference <a name="LambdaFunctionEphemeralStorageOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionEphemeralStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSize` <a name="ResetSize" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionEphemeralStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---


### LambdaFunctionFileSystemConfigsList <a name="LambdaFunctionFileSystemConfigsList" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionFileSystemConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.get"></a>

```csharp
private LambdaFunctionFileSystemConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionFileSystemConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]

---


### LambdaFunctionFileSystemConfigsOutputReference <a name="LambdaFunctionFileSystemConfigsOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionFileSystemConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetLocalMountPath">ResetLocalMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetLocalMountPath` <a name="ResetLocalMountPath" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetLocalMountPath"></a>

```csharp
private void ResetLocalMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPathInput">LocalMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPath">LocalMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `LocalMountPathInput`<sup>Optional</sup> <a name="LocalMountPathInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPathInput"></a>

```csharp
public string LocalMountPathInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `LocalMountPath`<sup>Required</sup> <a name="LocalMountPath" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPath"></a>

```csharp
public string LocalMountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionFileSystemConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>

---


### LambdaFunctionFunctionScalingConfigOutputReference <a name="LambdaFunctionFunctionScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionFunctionScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments">ResetMaxExecutionEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments">ResetMinExecutionEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxExecutionEnvironments` <a name="ResetMaxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments"></a>

```csharp
private void ResetMaxExecutionEnvironments()
```

##### `ResetMinExecutionEnvironments` <a name="ResetMinExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments"></a>

```csharp
private void ResetMinExecutionEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput">MaxExecutionEnvironmentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput">MinExecutionEnvironmentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">MaxExecutionEnvironments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironments">MinExecutionEnvironments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxExecutionEnvironmentsInput`<sup>Optional</sup> <a name="MaxExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput"></a>

```csharp
public double MaxExecutionEnvironmentsInput { get; }
```

- *Type:* double

---

##### `MinExecutionEnvironmentsInput`<sup>Optional</sup> <a name="MinExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput"></a>

```csharp
public double MinExecutionEnvironmentsInput { get; }
```

- *Type:* double

---

##### `MaxExecutionEnvironments`<sup>Required</sup> <a name="MaxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```csharp
public double MaxExecutionEnvironments { get; }
```

- *Type:* double

---

##### `MinExecutionEnvironments`<sup>Required</sup> <a name="MinExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```csharp
public double MinExecutionEnvironments { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionFunctionScalingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

---


### LambdaFunctionImageConfigOutputReference <a name="LambdaFunctionImageConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionImageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint"></a>

```csharp
private void ResetEntryPoint()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint">EntryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput"></a>

```csharp
public string[] EntryPointInput { get; }
```

- *Type:* string[]

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint"></a>

```csharp
public string[] EntryPoint { get; }
```

- *Type:* string[]

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionImageConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---


### LambdaFunctionLoggingConfigOutputReference <a name="LambdaFunctionLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetApplicationLogLevel">ResetApplicationLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetSystemLogLevel">ResetSystemLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationLogLevel` <a name="ResetApplicationLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```csharp
private void ResetApplicationLogLevel()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogFormat"></a>

```csharp
private void ResetLogFormat()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```

##### `ResetSystemLogLevel` <a name="ResetSystemLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetSystemLogLevel"></a>

```csharp
private void ResetSystemLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevelInput">ApplicationLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevelInput">SystemLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevel">ApplicationLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormat">LogFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevel">SystemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationLogLevelInput`<sup>Optional</sup> <a name="ApplicationLogLevelInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```csharp
public string ApplicationLogLevelInput { get; }
```

- *Type:* string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormatInput"></a>

```csharp
public string LogFormatInput { get; }
```

- *Type:* string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `SystemLogLevelInput`<sup>Optional</sup> <a name="SystemLogLevelInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```csharp
public string SystemLogLevelInput { get; }
```

- *Type:* string

---

##### `ApplicationLogLevel`<sup>Required</sup> <a name="ApplicationLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevel"></a>

```csharp
public string ApplicationLogLevel { get; }
```

- *Type:* string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormat"></a>

```csharp
public string LogFormat { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `SystemLogLevel`<sup>Required</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevel"></a>

```csharp
public string SystemLogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionLoggingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

---


### LambdaFunctionRuntimeManagementConfigOutputReference <a name="LambdaFunctionRuntimeManagementConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionRuntimeManagementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetRuntimeVersionArn">ResetRuntimeVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetUpdateRuntimeOn">ResetUpdateRuntimeOn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuntimeVersionArn` <a name="ResetRuntimeVersionArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetRuntimeVersionArn"></a>

```csharp
private void ResetRuntimeVersionArn()
```

##### `ResetUpdateRuntimeOn` <a name="ResetUpdateRuntimeOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetUpdateRuntimeOn"></a>

```csharp
private void ResetUpdateRuntimeOn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArnInput">RuntimeVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOnInput">UpdateRuntimeOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArn">RuntimeVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOn">UpdateRuntimeOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuntimeVersionArnInput`<sup>Optional</sup> <a name="RuntimeVersionArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArnInput"></a>

```csharp
public string RuntimeVersionArnInput { get; }
```

- *Type:* string

---

##### `UpdateRuntimeOnInput`<sup>Optional</sup> <a name="UpdateRuntimeOnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOnInput"></a>

```csharp
public string UpdateRuntimeOnInput { get; }
```

- *Type:* string

---

##### `RuntimeVersionArn`<sup>Required</sup> <a name="RuntimeVersionArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArn"></a>

```csharp
public string RuntimeVersionArn { get; }
```

- *Type:* string

---

##### `UpdateRuntimeOn`<sup>Required</sup> <a name="UpdateRuntimeOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOn"></a>

```csharp
public string UpdateRuntimeOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionRuntimeManagementConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

---


### LambdaFunctionSnapStartOutputReference <a name="LambdaFunctionSnapStartOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionSnapStartOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resetApplyOn">ResetApplyOn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplyOn` <a name="ResetApplyOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resetApplyOn"></a>

```csharp
private void ResetApplyOn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput">ApplyOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn">ApplyOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyOnInput`<sup>Optional</sup> <a name="ApplyOnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput"></a>

```csharp
public string ApplyOnInput { get; }
```

- *Type:* string

---

##### `ApplyOn`<sup>Required</sup> <a name="ApplyOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn"></a>

```csharp
public string ApplyOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionSnapStart InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---


### LambdaFunctionSnapStartResponseOutputReference <a name="LambdaFunctionSnapStartResponseOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionSnapStartResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.applyOn">ApplyOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.optimizationStatus">OptimizationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse">LambdaFunctionSnapStartResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyOn`<sup>Required</sup> <a name="ApplyOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.applyOn"></a>

```csharp
public string ApplyOn { get; }
```

- *Type:* string

---

##### `OptimizationStatus`<sup>Required</sup> <a name="OptimizationStatus" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.optimizationStatus"></a>

```csharp
public string OptimizationStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.internalValue"></a>

```csharp
public LambdaFunctionSnapStartResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse">LambdaFunctionSnapStartResponse</a>

---


### LambdaFunctionTagsList <a name="LambdaFunctionTagsList" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.get"></a>

```csharp
private LambdaFunctionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]

---


### LambdaFunctionTagsOutputReference <a name="LambdaFunctionTagsOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>

---


### LambdaFunctionTenancyConfigOutputReference <a name="LambdaFunctionTenancyConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionTenancyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resetTenantIsolationMode">ResetTenantIsolationMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTenantIsolationMode` <a name="ResetTenantIsolationMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resetTenantIsolationMode"></a>

```csharp
private void ResetTenantIsolationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationModeInput">TenantIsolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationMode">TenantIsolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TenantIsolationModeInput`<sup>Optional</sup> <a name="TenantIsolationModeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationModeInput"></a>

```csharp
public string TenantIsolationModeInput { get; }
```

- *Type:* string

---

##### `TenantIsolationMode`<sup>Required</sup> <a name="TenantIsolationMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationMode"></a>

```csharp
public string TenantIsolationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionTenancyConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

---


### LambdaFunctionTracingConfigOutputReference <a name="LambdaFunctionTracingConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionTracingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionTracingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---


### LambdaFunctionVpcConfigOutputReference <a name="LambdaFunctionVpcConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaFunctionVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetIpv6AllowedForDualStack">ResetIpv6AllowedForDualStack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6AllowedForDualStack` <a name="ResetIpv6AllowedForDualStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetIpv6AllowedForDualStack"></a>

```csharp
private void ResetIpv6AllowedForDualStack()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStackInput">Ipv6AllowedForDualStackInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStack">Ipv6AllowedForDualStack</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AllowedForDualStackInput`<sup>Optional</sup> <a name="Ipv6AllowedForDualStackInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStackInput"></a>

```csharp
public bool|IResolvable Ipv6AllowedForDualStackInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `Ipv6AllowedForDualStack`<sup>Required</sup> <a name="Ipv6AllowedForDualStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```csharp
public bool|IResolvable Ipv6AllowedForDualStack { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---



