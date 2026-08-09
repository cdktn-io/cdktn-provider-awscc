# `lambdaCapacityProvider` Submodule <a name="`lambdaCapacityProvider` Submodule" id="@cdktn/provider-awscc.lambdaCapacityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaCapacityProvider <a name="LambdaCapacityProvider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider awscc_lambda_capacity_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProvider(Construct Scope, string Id, LambdaCapacityProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig">LambdaCapacityProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig">LambdaCapacityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig">PutCapacityProviderScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements">PutInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig">PutPermissionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPropagateTags">PutPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTelemetryConfig">PutTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderName">ResetCapacityProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderScalingConfig">ResetCapacityProviderScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetInstanceRequirements">ResetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetTelemetryConfig">ResetTelemetryConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityProviderScalingConfig` <a name="PutCapacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig"></a>

```csharp
private void PutCapacityProviderScalingConfig(LambdaCapacityProviderCapacityProviderScalingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

---

##### `PutInstanceRequirements` <a name="PutInstanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements"></a>

```csharp
private void PutInstanceRequirements(LambdaCapacityProviderInstanceRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

---

##### `PutPermissionsConfig` <a name="PutPermissionsConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig"></a>

```csharp
private void PutPermissionsConfig(LambdaCapacityProviderPermissionsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

---

##### `PutPropagateTags` <a name="PutPropagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPropagateTags"></a>

```csharp
private void PutPropagateTags(LambdaCapacityProviderPropagateTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putPropagateTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTags"></a>

```csharp
private void PutTags(IResolvable|LambdaCapacityProviderTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>[]

---

##### `PutTelemetryConfig` <a name="PutTelemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTelemetryConfig"></a>

```csharp
private void PutTelemetryConfig(LambdaCapacityProviderTelemetryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig"></a>

```csharp
private void PutVpcConfig(LambdaCapacityProviderVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

---

##### `ResetCapacityProviderName` <a name="ResetCapacityProviderName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderName"></a>

```csharp
private void ResetCapacityProviderName()
```

##### `ResetCapacityProviderScalingConfig` <a name="ResetCapacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderScalingConfig"></a>

```csharp
private void ResetCapacityProviderScalingConfig()
```

##### `ResetInstanceRequirements` <a name="ResetInstanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetInstanceRequirements"></a>

```csharp
private void ResetInstanceRequirements()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetPropagateTags"></a>

```csharp
private void ResetPropagateTags()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTelemetryConfig` <a name="ResetTelemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.resetTelemetryConfig"></a>

```csharp
private void ResetTelemetryConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaCapacityProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaCapacityProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaCapacityProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaCapacityProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaCapacityProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaCapacityProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaCapacityProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaCapacityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaCapacityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfig">CapacityProviderScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference">LambdaCapacityProviderCapacityProviderScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference">LambdaCapacityProviderInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfig">PermissionsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference">LambdaCapacityProviderPermissionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.propagateTags">PropagateTags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference">LambdaCapacityProviderPropagateTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList">LambdaCapacityProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference">LambdaCapacityProviderTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference">LambdaCapacityProviderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderNameInput">CapacityProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfigInput">CapacityProviderScalingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirementsInput">InstanceRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfigInput">PermissionsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.telemetryConfigInput">TelemetryConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderName">CapacityProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacityProviderScalingConfig`<sup>Required</sup> <a name="CapacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfig"></a>

```csharp
public LambdaCapacityProviderCapacityProviderScalingConfigOutputReference CapacityProviderScalingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference">LambdaCapacityProviderCapacityProviderScalingConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirements"></a>

```csharp
public LambdaCapacityProviderInstanceRequirementsOutputReference InstanceRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference">LambdaCapacityProviderInstanceRequirementsOutputReference</a>

---

##### `PermissionsConfig`<sup>Required</sup> <a name="PermissionsConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfig"></a>

```csharp
public LambdaCapacityProviderPermissionsConfigOutputReference PermissionsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference">LambdaCapacityProviderPermissionsConfigOutputReference</a>

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.propagateTags"></a>

```csharp
public LambdaCapacityProviderPropagateTagsOutputReference PropagateTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference">LambdaCapacityProviderPropagateTagsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tags"></a>

```csharp
public LambdaCapacityProviderTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList">LambdaCapacityProviderTagsList</a>

---

##### `TelemetryConfig`<sup>Required</sup> <a name="TelemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.telemetryConfig"></a>

```csharp
public LambdaCapacityProviderTelemetryConfigOutputReference TelemetryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference">LambdaCapacityProviderTelemetryConfigOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfig"></a>

```csharp
public LambdaCapacityProviderVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference">LambdaCapacityProviderVpcConfigOutputReference</a>

---

##### `CapacityProviderNameInput`<sup>Optional</sup> <a name="CapacityProviderNameInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderNameInput"></a>

```csharp
public string CapacityProviderNameInput { get; }
```

- *Type:* string

---

##### `CapacityProviderScalingConfigInput`<sup>Optional</sup> <a name="CapacityProviderScalingConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfigInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderCapacityProviderScalingConfig CapacityProviderScalingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

---

##### `InstanceRequirementsInput`<sup>Optional</sup> <a name="InstanceRequirementsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirementsInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderInstanceRequirements InstanceRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `PermissionsConfigInput`<sup>Optional</sup> <a name="PermissionsConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfigInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderPermissionsConfig PermissionsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.propagateTagsInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderPropagateTags PropagateTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>[]

---

##### `TelemetryConfigInput`<sup>Optional</sup> <a name="TelemetryConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.telemetryConfigInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderTelemetryConfig TelemetryConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a>

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfigInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

---

##### `CapacityProviderName`<sup>Required</sup> <a name="CapacityProviderName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderName"></a>

```csharp
public string CapacityProviderName { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaCapacityProviderCapacityProviderScalingConfig <a name="LambdaCapacityProviderCapacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderCapacityProviderScalingConfig {
    double MaxVCpuCount = null,
    string ScalingMode = null,
    IResolvable|LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[] ScalingPolicies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.maxVCpuCount">MaxVCpuCount</a></code> | <code>double</code> | The maximum number of vCPUs that the capacity provider can provision across all compute instances. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingMode">ScalingMode</a></code> | <code>string</code> | The scaling mode that determines how the capacity provider responds to changes in demand. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingPolicies">ScalingPolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]</code> | A list of target tracking scaling policies for the capacity provider. |

---

##### `MaxVCpuCount`<sup>Optional</sup> <a name="MaxVCpuCount" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.maxVCpuCount"></a>

```csharp
public double MaxVCpuCount { get; set; }
```

- *Type:* double

The maximum number of vCPUs that the capacity provider can provision across all compute instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#max_v_cpu_count LambdaCapacityProvider#max_v_cpu_count}

---

##### `ScalingMode`<sup>Optional</sup> <a name="ScalingMode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingMode"></a>

```csharp
public string ScalingMode { get; set; }
```

- *Type:* string

The scaling mode that determines how the capacity provider responds to changes in demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#scaling_mode LambdaCapacityProvider#scaling_mode}

---

##### `ScalingPolicies`<sup>Optional</sup> <a name="ScalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingPolicies"></a>

```csharp
public IResolvable|LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[] ScalingPolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]

A list of target tracking scaling policies for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#scaling_policies LambdaCapacityProvider#scaling_policies}

---

### LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies {
    string PredefinedMetricType = null,
    double TargetValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.predefinedMetricType">PredefinedMetricType</a></code> | <code>string</code> | The predefined metric type to track for scaling decisions. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.targetValue">TargetValue</a></code> | <code>double</code> | The target value for the metric that the scaling policy attempts to maintain through scaling actions. |

---

##### `PredefinedMetricType`<sup>Optional</sup> <a name="PredefinedMetricType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.predefinedMetricType"></a>

```csharp
public string PredefinedMetricType { get; set; }
```

- *Type:* string

The predefined metric type to track for scaling decisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#predefined_metric_type LambdaCapacityProvider#predefined_metric_type}

---

##### `TargetValue`<sup>Optional</sup> <a name="TargetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.targetValue"></a>

```csharp
public double TargetValue { get; set; }
```

- *Type:* double

The target value for the metric that the scaling policy attempts to maintain through scaling actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#target_value LambdaCapacityProvider#target_value}

---

### LambdaCapacityProviderConfig <a name="LambdaCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    LambdaCapacityProviderPermissionsConfig PermissionsConfig,
    LambdaCapacityProviderVpcConfig VpcConfig,
    string CapacityProviderName = null,
    LambdaCapacityProviderCapacityProviderScalingConfig CapacityProviderScalingConfig = null,
    LambdaCapacityProviderInstanceRequirements InstanceRequirements = null,
    string KmsKeyArn = null,
    LambdaCapacityProviderPropagateTags PropagateTags = null,
    IResolvable|LambdaCapacityProviderTags[] Tags = null,
    LambdaCapacityProviderTelemetryConfig TelemetryConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.permissionsConfig">PermissionsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a></code> | The permissions configuration for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a></code> | The VPC configuration for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderName">CapacityProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#capacity_provider_name LambdaCapacityProvider#capacity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderScalingConfig">CapacityProviderScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a></code> | The scaling configuration for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a></code> | The instance requirements for compute resources managed by the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key used to encrypt the capacity provider's resources. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.propagateTags">PropagateTags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a></code> | Configuration for tag propagation to managed resources launched by the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>[]</code> | A key-value pair that provides metadata for the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a></code> | The telemetry configuration for the capacity provider, including logging settings. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PermissionsConfig`<sup>Required</sup> <a name="PermissionsConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.permissionsConfig"></a>

```csharp
public LambdaCapacityProviderPermissionsConfig PermissionsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

The permissions configuration for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#permissions_config LambdaCapacityProvider#permissions_config}

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.vpcConfig"></a>

```csharp
public LambdaCapacityProviderVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

The VPC configuration for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#vpc_config LambdaCapacityProvider#vpc_config}

---

##### `CapacityProviderName`<sup>Optional</sup> <a name="CapacityProviderName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderName"></a>

```csharp
public string CapacityProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#capacity_provider_name LambdaCapacityProvider#capacity_provider_name}.

---

##### `CapacityProviderScalingConfig`<sup>Optional</sup> <a name="CapacityProviderScalingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderScalingConfig"></a>

```csharp
public LambdaCapacityProviderCapacityProviderScalingConfig CapacityProviderScalingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

The scaling configuration for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}

---

##### `InstanceRequirements`<sup>Optional</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.instanceRequirements"></a>

```csharp
public LambdaCapacityProviderInstanceRequirements InstanceRequirements { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

The instance requirements for compute resources managed by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMS key used to encrypt the capacity provider's resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.propagateTags"></a>

```csharp
public LambdaCapacityProviderPropagateTags PropagateTags { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a>

Configuration for tag propagation to managed resources launched by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#propagate_tags LambdaCapacityProvider#propagate_tags}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.tags"></a>

```csharp
public IResolvable|LambdaCapacityProviderTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>[]

A key-value pair that provides metadata for the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}

---

##### `TelemetryConfig`<sup>Optional</sup> <a name="TelemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.telemetryConfig"></a>

```csharp
public LambdaCapacityProviderTelemetryConfig TelemetryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a>

The telemetry configuration for the capacity provider, including logging settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#telemetry_config LambdaCapacityProvider#telemetry_config}

---

### LambdaCapacityProviderInstanceRequirements <a name="LambdaCapacityProviderInstanceRequirements" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderInstanceRequirements {
    string[] AllowedInstanceTypes = null,
    string[] Architectures = null,
    string[] ExcludedInstanceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | A list of EC2 instance types that the capacity provider is allowed to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.architectures">Architectures</a></code> | <code>string[]</code> | A list of supported CPU architectures for compute instances. Valid values include ``x86_64`` and ``arm64``. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | A list of EC2 instance types that the capacity provider should not use, even if they meet other requirements. |

---

##### `AllowedInstanceTypes`<sup>Optional</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; set; }
```

- *Type:* string[]

A list of EC2 instance types that the capacity provider is allowed to use.

If not specified, all compatible instance types are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#allowed_instance_types LambdaCapacityProvider#allowed_instance_types}

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.architectures"></a>

```csharp
public string[] Architectures { get; set; }
```

- *Type:* string[]

A list of supported CPU architectures for compute instances. Valid values include ``x86_64`` and ``arm64``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#architectures LambdaCapacityProvider#architectures}

---

##### `ExcludedInstanceTypes`<sup>Optional</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; set; }
```

- *Type:* string[]

A list of EC2 instance types that the capacity provider should not use, even if they meet other requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#excluded_instance_types LambdaCapacityProvider#excluded_instance_types}

---

### LambdaCapacityProviderPermissionsConfig <a name="LambdaCapacityProviderPermissionsConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderPermissionsConfig {
    string CapacityProviderOperatorRoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.property.capacityProviderOperatorRoleArn">CapacityProviderOperatorRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that the capacity provider uses to manage compute instances and other AWS resources. |

---

##### `CapacityProviderOperatorRoleArn`<sup>Required</sup> <a name="CapacityProviderOperatorRoleArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.property.capacityProviderOperatorRoleArn"></a>

```csharp
public string CapacityProviderOperatorRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that the capacity provider uses to manage compute instances and other AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#capacity_provider_operator_role_arn LambdaCapacityProvider#capacity_provider_operator_role_arn}

---

### LambdaCapacityProviderPropagateTags <a name="LambdaCapacityProviderPropagateTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderPropagateTags {
    IResolvable|LambdaCapacityProviderPropagateTagsExplicitTags[] ExplicitTags = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.property.explicitTags">ExplicitTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>[]</code> | A list of tags to explicitly propagate to managed resources. Maximum of 40 tags. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.property.mode">Mode</a></code> | <code>string</code> | The mode for tag propagation. Use ``Explicit`` to propagate specific tags, or ``None`` to disable propagation. |

---

##### `ExplicitTags`<sup>Optional</sup> <a name="ExplicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.property.explicitTags"></a>

```csharp
public IResolvable|LambdaCapacityProviderPropagateTagsExplicitTags[] ExplicitTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>[]

A list of tags to explicitly propagate to managed resources. Maximum of 40 tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#explicit_tags LambdaCapacityProvider#explicit_tags}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode for tag propagation. Use ``Explicit`` to propagate specific tags, or ``None`` to disable propagation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#mode LambdaCapacityProvider#mode}

---

### LambdaCapacityProviderPropagateTagsExplicitTags <a name="LambdaCapacityProviderPropagateTagsExplicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderPropagateTagsExplicitTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#key LambdaCapacityProvider#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#value LambdaCapacityProvider#value}

---

### LambdaCapacityProviderTags <a name="LambdaCapacityProviderTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#key LambdaCapacityProvider#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#value LambdaCapacityProvider#value}

---

### LambdaCapacityProviderTelemetryConfig <a name="LambdaCapacityProviderTelemetryConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderTelemetryConfig {
    LambdaCapacityProviderTelemetryConfigLoggingConfig LoggingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a></code> | The capacity provider's Amazon CloudWatch Logs configuration settings. |

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig.property.loggingConfig"></a>

```csharp
public LambdaCapacityProviderTelemetryConfigLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a>

The capacity provider's Amazon CloudWatch Logs configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#logging_config LambdaCapacityProvider#logging_config}

---

### LambdaCapacityProviderTelemetryConfigLoggingConfig <a name="LambdaCapacityProviderTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderTelemetryConfigLoggingConfig {
    string LogGroup = null,
    string SystemLogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.property.logGroup">LogGroup</a></code> | <code>string</code> | The name of the Amazon CloudWatch log group the capacity provider sends logs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.property.systemLogLevel">SystemLogLevel</a></code> | <code>string</code> | Set this property to filter the system logs for your capacity provider that Lambda sends to CloudWatch. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

The name of the Amazon CloudWatch log group the capacity provider sends logs to.

By default, Lambda capacity providers send logs to a default log group named `/aws/lambda/capacity-provider/<capacity provider name>`. To use a different log group, enter an existing log group or enter a new log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#log_group LambdaCapacityProvider#log_group}

---

##### `SystemLogLevel`<sup>Optional</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig.property.systemLogLevel"></a>

```csharp
public string SystemLogLevel { get; set; }
```

- *Type:* string

Set this property to filter the system logs for your capacity provider that Lambda sends to CloudWatch.

Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#system_log_level LambdaCapacityProvider#system_log_level}

---

### LambdaCapacityProviderVpcConfig <a name="LambdaCapacityProviderVpcConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderVpcConfig {
    string[] SecurityGroupIds,
    string[] SubnetIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | A list of security group IDs that control network access for compute instances managed by the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | A list of subnet IDs where the capacity provider launches compute instances. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of security group IDs that control network access for compute instances managed by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#security_group_ids LambdaCapacityProvider#security_group_ids}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

A list of subnet IDs where the capacity provider launches compute instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_capacity_provider#subnet_ids LambdaCapacityProvider#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaCapacityProviderCapacityProviderScalingConfigOutputReference <a name="LambdaCapacityProviderCapacityProviderScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderCapacityProviderScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies">PutScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetMaxVCpuCount">ResetMaxVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingMode">ResetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingPolicies">ResetScalingPolicies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScalingPolicies` <a name="PutScalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies"></a>

```csharp
private void PutScalingPolicies(IResolvable|LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]

---

##### `ResetMaxVCpuCount` <a name="ResetMaxVCpuCount" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetMaxVCpuCount"></a>

```csharp
private void ResetMaxVCpuCount()
```

##### `ResetScalingMode` <a name="ResetScalingMode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingMode"></a>

```csharp
private void ResetScalingMode()
```

##### `ResetScalingPolicies` <a name="ResetScalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingPolicies"></a>

```csharp
private void ResetScalingPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies">ScalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCountInput">MaxVCpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingModeInput">ScalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPoliciesInput">ScalingPoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCount">MaxVCpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode">ScalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScalingPolicies`<sup>Required</sup> <a name="ScalingPolicies" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies"></a>

```csharp
public LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList ScalingPolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a>

---

##### `MaxVCpuCountInput`<sup>Optional</sup> <a name="MaxVCpuCountInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCountInput"></a>

```csharp
public double MaxVCpuCountInput { get; }
```

- *Type:* double

---

##### `ScalingModeInput`<sup>Optional</sup> <a name="ScalingModeInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingModeInput"></a>

```csharp
public string ScalingModeInput { get; }
```

- *Type:* string

---

##### `ScalingPoliciesInput`<sup>Optional</sup> <a name="ScalingPoliciesInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPoliciesInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[] ScalingPoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]

---

##### `MaxVCpuCount`<sup>Required</sup> <a name="MaxVCpuCount" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCount"></a>

```csharp
public double MaxVCpuCount { get; }
```

- *Type:* double

---

##### `ScalingMode`<sup>Required</sup> <a name="ScalingMode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode"></a>

```csharp
public string ScalingMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderCapacityProviderScalingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

---


### LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get"></a>

```csharp
private LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]

---


### LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetPredefinedMetricType">ResetPredefinedMetricType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetTargetValue">ResetTargetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredefinedMetricType` <a name="ResetPredefinedMetricType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetPredefinedMetricType"></a>

```csharp
private void ResetPredefinedMetricType()
```

##### `ResetTargetValue` <a name="ResetTargetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetTargetValue"></a>

```csharp
private void ResetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricTypeInput">PredefinedMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType">PredefinedMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue">TargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredefinedMetricTypeInput`<sup>Optional</sup> <a name="PredefinedMetricTypeInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricTypeInput"></a>

```csharp
public string PredefinedMetricTypeInput { get; }
```

- *Type:* string

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValueInput"></a>

```csharp
public double TargetValueInput { get; }
```

- *Type:* double

---

##### `PredefinedMetricType`<sup>Required</sup> <a name="PredefinedMetricType" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType"></a>

```csharp
public string PredefinedMetricType { get; }
```

- *Type:* string

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue"></a>

```csharp
public double TargetValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>

---


### LambdaCapacityProviderInstanceRequirementsOutputReference <a name="LambdaCapacityProviderInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderInstanceRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetAllowedInstanceTypes">ResetAllowedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetExcludedInstanceTypes">ResetExcludedInstanceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedInstanceTypes` <a name="ResetAllowedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetAllowedInstanceTypes"></a>

```csharp
private void ResetAllowedInstanceTypes()
```

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetArchitectures"></a>

```csharp
private void ResetArchitectures()
```

##### `ResetExcludedInstanceTypes` <a name="ResetExcludedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```csharp
private void ResetExcludedInstanceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">AllowedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architecturesInput">ArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">ExcludedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures">Architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedInstanceTypesInput`<sup>Optional</sup> <a name="AllowedInstanceTypesInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```csharp
public string[] AllowedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architecturesInput"></a>

```csharp
public string[] ArchitecturesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypesInput`<sup>Optional</sup> <a name="ExcludedInstanceTypesInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```csharp
public string[] ExcludedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures"></a>

```csharp
public string[] Architectures { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderInstanceRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

---


### LambdaCapacityProviderPermissionsConfigOutputReference <a name="LambdaCapacityProviderPermissionsConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderPermissionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArnInput">CapacityProviderOperatorRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn">CapacityProviderOperatorRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityProviderOperatorRoleArnInput`<sup>Optional</sup> <a name="CapacityProviderOperatorRoleArnInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArnInput"></a>

```csharp
public string CapacityProviderOperatorRoleArnInput { get; }
```

- *Type:* string

---

##### `CapacityProviderOperatorRoleArn`<sup>Required</sup> <a name="CapacityProviderOperatorRoleArn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn"></a>

```csharp
public string CapacityProviderOperatorRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderPermissionsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

---


### LambdaCapacityProviderPropagateTagsExplicitTagsList <a name="LambdaCapacityProviderPropagateTagsExplicitTagsList" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderPropagateTagsExplicitTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.get"></a>

```csharp
private LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderPropagateTagsExplicitTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>[]

---


### LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference <a name="LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderPropagateTagsExplicitTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>

---


### LambdaCapacityProviderPropagateTagsOutputReference <a name="LambdaCapacityProviderPropagateTagsOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderPropagateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.putExplicitTags">PutExplicitTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resetExplicitTags">ResetExplicitTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExplicitTags` <a name="PutExplicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.putExplicitTags"></a>

```csharp
private void PutExplicitTags(IResolvable|LambdaCapacityProviderPropagateTagsExplicitTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.putExplicitTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>[]

---

##### `ResetExplicitTags` <a name="ResetExplicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resetExplicitTags"></a>

```csharp
private void ResetExplicitTags()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.explicitTags">ExplicitTags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList">LambdaCapacityProviderPropagateTagsExplicitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.explicitTagsInput">ExplicitTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExplicitTags`<sup>Required</sup> <a name="ExplicitTags" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.explicitTags"></a>

```csharp
public LambdaCapacityProviderPropagateTagsExplicitTagsList ExplicitTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTagsList">LambdaCapacityProviderPropagateTagsExplicitTagsList</a>

---

##### `ExplicitTagsInput`<sup>Optional</sup> <a name="ExplicitTagsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.explicitTagsInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderPropagateTagsExplicitTags[] ExplicitTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsExplicitTags">LambdaCapacityProviderPropagateTagsExplicitTags</a>[]

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderPropagateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderPropagateTags">LambdaCapacityProviderPropagateTags</a>

---


### LambdaCapacityProviderTagsList <a name="LambdaCapacityProviderTagsList" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.get"></a>

```csharp
private LambdaCapacityProviderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>[]

---


### LambdaCapacityProviderTagsOutputReference <a name="LambdaCapacityProviderTagsOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTags">LambdaCapacityProviderTags</a>

---


### LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference <a name="LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel">ResetSystemLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```

##### `ResetSystemLogLevel` <a name="ResetSystemLogLevel" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel"></a>

```csharp
private void ResetSystemLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput">SystemLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">SystemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `SystemLogLevelInput`<sup>Optional</sup> <a name="SystemLogLevelInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```csharp
public string SystemLogLevelInput { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `SystemLogLevel`<sup>Required</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```csharp
public string SystemLogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderTelemetryConfigLoggingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a>

---


### LambdaCapacityProviderTelemetryConfigOutputReference <a name="LambdaCapacityProviderTelemetryConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderTelemetryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(LambdaCapacityProviderTelemetryConfigLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a>

---

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference">LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfig"></a>

```csharp
public LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference">LambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference</a>

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfigInput"></a>

```csharp
public IResolvable|LambdaCapacityProviderTelemetryConfigLoggingConfig LoggingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigLoggingConfig">LambdaCapacityProviderTelemetryConfigLoggingConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderTelemetryConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderTelemetryConfig">LambdaCapacityProviderTelemetryConfig</a>

---


### LambdaCapacityProviderVpcConfigOutputReference <a name="LambdaCapacityProviderVpcConfigOutputReference" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaCapacityProviderVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaCapacityProviderVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

---



