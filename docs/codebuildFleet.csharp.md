# `codebuildFleet` Submodule <a name="`codebuildFleet` Submodule" id="@cdktn/provider-awscc.codebuildFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildFleet <a name="CodebuildFleet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet awscc_codebuild_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleet(Construct Scope, string Id, CodebuildFleetConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig">CodebuildFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig">CodebuildFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putComputeConfiguration">PutComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetProxyConfiguration">PutFleetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetVpcConfig">PutFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putScalingConfiguration">PutScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetBaseCapacity">ResetBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeConfiguration">ResetComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeType">ResetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetEnvironmentType">ResetEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetProxyConfiguration">ResetFleetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetServiceRole">ResetFleetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetVpcConfig">ResetFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverflowBehavior">ResetOverflowBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetScalingConfiguration">ResetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeConfiguration` <a name="PutComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putComputeConfiguration"></a>

```csharp
private void PutComputeConfiguration(CodebuildFleetComputeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putComputeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---

##### `PutFleetProxyConfiguration` <a name="PutFleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetProxyConfiguration"></a>

```csharp
private void PutFleetProxyConfiguration(CodebuildFleetFleetProxyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetProxyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

---

##### `PutFleetVpcConfig` <a name="PutFleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetVpcConfig"></a>

```csharp
private void PutFleetVpcConfig(CodebuildFleetFleetVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

---

##### `PutScalingConfiguration` <a name="PutScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putScalingConfiguration"></a>

```csharp
private void PutScalingConfiguration(CodebuildFleetScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putTags"></a>

```csharp
private void PutTags(IResolvable|CodebuildFleetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]

---

##### `ResetBaseCapacity` <a name="ResetBaseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetBaseCapacity"></a>

```csharp
private void ResetBaseCapacity()
```

##### `ResetComputeConfiguration` <a name="ResetComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeConfiguration"></a>

```csharp
private void ResetComputeConfiguration()
```

##### `ResetComputeType` <a name="ResetComputeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeType"></a>

```csharp
private void ResetComputeType()
```

##### `ResetEnvironmentType` <a name="ResetEnvironmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetEnvironmentType"></a>

```csharp
private void ResetEnvironmentType()
```

##### `ResetFleetProxyConfiguration` <a name="ResetFleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetProxyConfiguration"></a>

```csharp
private void ResetFleetProxyConfiguration()
```

##### `ResetFleetServiceRole` <a name="ResetFleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetServiceRole"></a>

```csharp
private void ResetFleetServiceRole()
```

##### `ResetFleetVpcConfig` <a name="ResetFleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetVpcConfig"></a>

```csharp
private void ResetFleetVpcConfig()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOverflowBehavior` <a name="ResetOverflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverflowBehavior"></a>

```csharp
private void ResetOverflowBehavior()
```

##### `ResetScalingConfiguration` <a name="ResetScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetScalingConfiguration"></a>

```csharp
private void ResetScalingConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodebuildFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodebuildFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodebuildFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodebuildFleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodebuildFleet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodebuildFleet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodebuildFleet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodebuildFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodebuildFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfiguration">ComputeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference">CodebuildFleetComputeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfiguration">FleetProxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference">CodebuildFleetFleetProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfig">FleetVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference">CodebuildFleetFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference">CodebuildFleetScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList">CodebuildFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacityInput">BaseCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfigurationInput">ComputeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeTypeInput">ComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentTypeInput">EnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfigurationInput">FleetProxyConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRoleInput">FleetServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfigInput">FleetVpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehaviorInput">OverflowBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfigurationInput">ScalingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacity">BaseCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeType">ComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentType">EnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRole">FleetServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehavior">OverflowBehavior</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComputeConfiguration`<sup>Required</sup> <a name="ComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfiguration"></a>

```csharp
public CodebuildFleetComputeConfigurationOutputReference ComputeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference">CodebuildFleetComputeConfigurationOutputReference</a>

---

##### `FleetProxyConfiguration`<sup>Required</sup> <a name="FleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfiguration"></a>

```csharp
public CodebuildFleetFleetProxyConfigurationOutputReference FleetProxyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference">CodebuildFleetFleetProxyConfigurationOutputReference</a>

---

##### `FleetVpcConfig`<sup>Required</sup> <a name="FleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfig"></a>

```csharp
public CodebuildFleetFleetVpcConfigOutputReference FleetVpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference">CodebuildFleetFleetVpcConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfiguration"></a>

```csharp
public CodebuildFleetScalingConfigurationOutputReference ScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference">CodebuildFleetScalingConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tags"></a>

```csharp
public CodebuildFleetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList">CodebuildFleetTagsList</a>

---

##### `BaseCapacityInput`<sup>Optional</sup> <a name="BaseCapacityInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacityInput"></a>

```csharp
public double BaseCapacityInput { get; }
```

- *Type:* double

---

##### `ComputeConfigurationInput`<sup>Optional</sup> <a name="ComputeConfigurationInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfigurationInput"></a>

```csharp
public IResolvable|CodebuildFleetComputeConfiguration ComputeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeTypeInput"></a>

```csharp
public string ComputeTypeInput { get; }
```

- *Type:* string

---

##### `EnvironmentTypeInput`<sup>Optional</sup> <a name="EnvironmentTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentTypeInput"></a>

```csharp
public string EnvironmentTypeInput { get; }
```

- *Type:* string

---

##### `FleetProxyConfigurationInput`<sup>Optional</sup> <a name="FleetProxyConfigurationInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfigurationInput"></a>

```csharp
public IResolvable|CodebuildFleetFleetProxyConfiguration FleetProxyConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

---

##### `FleetServiceRoleInput`<sup>Optional</sup> <a name="FleetServiceRoleInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRoleInput"></a>

```csharp
public string FleetServiceRoleInput { get; }
```

- *Type:* string

---

##### `FleetVpcConfigInput`<sup>Optional</sup> <a name="FleetVpcConfigInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfigInput"></a>

```csharp
public IResolvable|CodebuildFleetFleetVpcConfig FleetVpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OverflowBehaviorInput`<sup>Optional</sup> <a name="OverflowBehaviorInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehaviorInput"></a>

```csharp
public string OverflowBehaviorInput { get; }
```

- *Type:* string

---

##### `ScalingConfigurationInput`<sup>Optional</sup> <a name="ScalingConfigurationInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfigurationInput"></a>

```csharp
public IResolvable|CodebuildFleetScalingConfiguration ScalingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tagsInput"></a>

```csharp
public IResolvable|CodebuildFleetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]

---

##### `BaseCapacity`<sup>Required</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacity"></a>

```csharp
public double BaseCapacity { get; }
```

- *Type:* double

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeType"></a>

```csharp
public string ComputeType { get; }
```

- *Type:* string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentType"></a>

```csharp
public string EnvironmentType { get; }
```

- *Type:* string

---

##### `FleetServiceRole`<sup>Required</sup> <a name="FleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRole"></a>

```csharp
public string FleetServiceRole { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OverflowBehavior`<sup>Required</sup> <a name="OverflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehavior"></a>

```csharp
public string OverflowBehavior { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildFleetComputeConfiguration <a name="CodebuildFleetComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetComputeConfiguration {
    double Disk = null,
    string InstanceType = null,
    string MachineType = null,
    double Memory = null,
    double VCpu = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.disk">Disk</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#instance_type CodebuildFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.machineType">MachineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.memory">Memory</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.vCpu">VCpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#v_cpu CodebuildFleet#v_cpu}. |

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.disk"></a>

```csharp
public double Disk { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#instance_type CodebuildFleet#instance_type}.

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}.

---

##### `VCpu`<sup>Optional</sup> <a name="VCpu" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.vCpu"></a>

```csharp
public double VCpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#v_cpu CodebuildFleet#v_cpu}.

---

### CodebuildFleetConfig <a name="CodebuildFleetConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double BaseCapacity = null,
    CodebuildFleetComputeConfiguration ComputeConfiguration = null,
    string ComputeType = null,
    string EnvironmentType = null,
    CodebuildFleetFleetProxyConfiguration FleetProxyConfiguration = null,
    string FleetServiceRole = null,
    CodebuildFleetFleetVpcConfig FleetVpcConfig = null,
    string ImageId = null,
    string Name = null,
    string OverflowBehavior = null,
    CodebuildFleetScalingConfiguration ScalingConfiguration = null,
    IResolvable|CodebuildFleetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.baseCapacity">BaseCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeConfiguration">ComputeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeType">ComputeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.environmentType">EnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetProxyConfiguration">FleetProxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#fleet_proxy_configuration CodebuildFleet#fleet_proxy_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetServiceRole">FleetServiceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetVpcConfig">FleetVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#fleet_vpc_config CodebuildFleet#fleet_vpc_config}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.overflowBehavior">OverflowBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BaseCapacity`<sup>Optional</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.baseCapacity"></a>

```csharp
public double BaseCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}.

---

##### `ComputeConfiguration`<sup>Optional</sup> <a name="ComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeConfiguration"></a>

```csharp
public CodebuildFleetComputeConfiguration ComputeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}.

---

##### `ComputeType`<sup>Optional</sup> <a name="ComputeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeType"></a>

```csharp
public string ComputeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}.

---

##### `EnvironmentType`<sup>Optional</sup> <a name="EnvironmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.environmentType"></a>

```csharp
public string EnvironmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}.

---

##### `FleetProxyConfiguration`<sup>Optional</sup> <a name="FleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetProxyConfiguration"></a>

```csharp
public CodebuildFleetFleetProxyConfiguration FleetProxyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#fleet_proxy_configuration CodebuildFleet#fleet_proxy_configuration}.

---

##### `FleetServiceRole`<sup>Optional</sup> <a name="FleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetServiceRole"></a>

```csharp
public string FleetServiceRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}.

---

##### `FleetVpcConfig`<sup>Optional</sup> <a name="FleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetVpcConfig"></a>

```csharp
public CodebuildFleetFleetVpcConfig FleetVpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#fleet_vpc_config CodebuildFleet#fleet_vpc_config}.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}.

---

##### `OverflowBehavior`<sup>Optional</sup> <a name="OverflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.overflowBehavior"></a>

```csharp
public string OverflowBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}.

---

##### `ScalingConfiguration`<sup>Optional</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.scalingConfiguration"></a>

```csharp
public CodebuildFleetScalingConfiguration ScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.tags"></a>

```csharp
public IResolvable|CodebuildFleetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}.

---

### CodebuildFleetFleetProxyConfiguration <a name="CodebuildFleetFleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetFleetProxyConfiguration {
    string DefaultBehavior = null,
    IResolvable|CodebuildFleetFleetProxyConfigurationOrderedProxyRules[] OrderedProxyRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.defaultBehavior">DefaultBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#default_behavior CodebuildFleet#default_behavior}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.orderedProxyRules">OrderedProxyRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#ordered_proxy_rules CodebuildFleet#ordered_proxy_rules}. |

---

##### `DefaultBehavior`<sup>Optional</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.defaultBehavior"></a>

```csharp
public string DefaultBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#default_behavior CodebuildFleet#default_behavior}.

---

##### `OrderedProxyRules`<sup>Optional</sup> <a name="OrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.orderedProxyRules"></a>

```csharp
public IResolvable|CodebuildFleetFleetProxyConfigurationOrderedProxyRules[] OrderedProxyRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#ordered_proxy_rules CodebuildFleet#ordered_proxy_rules}.

---

### CodebuildFleetFleetProxyConfigurationOrderedProxyRules <a name="CodebuildFleetFleetProxyConfigurationOrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetFleetProxyConfigurationOrderedProxyRules {
    string Effect = null,
    string[] Entities = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.effect">Effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#effect CodebuildFleet#effect}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.entities">Entities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#entities CodebuildFleet#entities}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#type CodebuildFleet#type}. |

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#effect CodebuildFleet#effect}.

---

##### `Entities`<sup>Optional</sup> <a name="Entities" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.entities"></a>

```csharp
public string[] Entities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#entities CodebuildFleet#entities}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#type CodebuildFleet#type}.

---

### CodebuildFleetFleetVpcConfig <a name="CodebuildFleetFleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetFleetVpcConfig {
    string[] SecurityGroupIds = null,
    string[] Subnets = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}.

---

### CodebuildFleetScalingConfiguration <a name="CodebuildFleetScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetScalingConfiguration {
    double MaxCapacity = null,
    string ScalingType = null,
    IResolvable|CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] TargetTrackingScalingConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.scalingType">ScalingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.targetTrackingScalingConfigs">TargetTrackingScalingConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CodebuildFleet#target_tracking_scaling_configs}. |

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}.

---

##### `ScalingType`<sup>Optional</sup> <a name="ScalingType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.scalingType"></a>

```csharp
public string ScalingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}.

---

##### `TargetTrackingScalingConfigs`<sup>Optional</sup> <a name="TargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.targetTrackingScalingConfigs"></a>

```csharp
public IResolvable|CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] TargetTrackingScalingConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CodebuildFleet#target_tracking_scaling_configs}.

---

### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs {
    string MetricType = null,
    double TargetValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.metricType">MetricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.targetValue">TargetValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}. |

---

##### `MetricType`<sup>Optional</sup> <a name="MetricType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.metricType"></a>

```csharp
public string MetricType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}.

---

##### `TargetValue`<sup>Optional</sup> <a name="TargetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.targetValue"></a>

```csharp
public double TargetValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}.

---

### CodebuildFleetTags <a name="CodebuildFleetTags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#key CodebuildFleet#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codebuild_fleet#value CodebuildFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildFleetComputeConfigurationOutputReference <a name="CodebuildFleetComputeConfigurationOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetComputeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetDisk">ResetDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetVCpu">ResetVCpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisk` <a name="ResetDisk" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetDisk"></a>

```csharp
private void ResetDisk()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetVCpu` <a name="ResetVCpu" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetVCpu"></a>

```csharp
private void ResetVCpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.diskInput">DiskInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpuInput">VCpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.disk">Disk</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpu">VCpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.diskInput"></a>

```csharp
public double DiskInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `VCpuInput`<sup>Optional</sup> <a name="VCpuInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpuInput"></a>

```csharp
public double VCpuInput { get; }
```

- *Type:* double

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.disk"></a>

```csharp
public double Disk { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `VCpu`<sup>Required</sup> <a name="VCpu" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpu"></a>

```csharp
public double VCpu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetComputeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---


### CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList <a name="CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get"></a>

```csharp
private CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetFleetProxyConfigurationOrderedProxyRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]

---


### CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference <a name="CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEntities">ResetEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEffect` <a name="ResetEffect" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEffect"></a>

```csharp
private void ResetEffect()
```

##### `ResetEntities` <a name="ResetEntities" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEntities"></a>

```csharp
private void ResetEntities()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entitiesInput">EntitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entities">Entities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entitiesInput"></a>

```csharp
public string[] EntitiesInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entities"></a>

```csharp
public string[] Entities { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetFleetProxyConfigurationOrderedProxyRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>

---


### CodebuildFleetFleetProxyConfigurationOutputReference <a name="CodebuildFleetFleetProxyConfigurationOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetFleetProxyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.putOrderedProxyRules">PutOrderedProxyRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetDefaultBehavior">ResetDefaultBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetOrderedProxyRules">ResetOrderedProxyRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOrderedProxyRules` <a name="PutOrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.putOrderedProxyRules"></a>

```csharp
private void PutOrderedProxyRules(IResolvable|CodebuildFleetFleetProxyConfigurationOrderedProxyRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.putOrderedProxyRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]

---

##### `ResetDefaultBehavior` <a name="ResetDefaultBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetDefaultBehavior"></a>

```csharp
private void ResetDefaultBehavior()
```

##### `ResetOrderedProxyRules` <a name="ResetOrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetOrderedProxyRules"></a>

```csharp
private void ResetOrderedProxyRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRules">OrderedProxyRules</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList">CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehaviorInput">DefaultBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRulesInput">OrderedProxyRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehavior">DefaultBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrderedProxyRules`<sup>Required</sup> <a name="OrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRules"></a>

```csharp
public CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList OrderedProxyRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList">CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList</a>

---

##### `DefaultBehaviorInput`<sup>Optional</sup> <a name="DefaultBehaviorInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehaviorInput"></a>

```csharp
public string DefaultBehaviorInput { get; }
```

- *Type:* string

---

##### `OrderedProxyRulesInput`<sup>Optional</sup> <a name="OrderedProxyRulesInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRulesInput"></a>

```csharp
public IResolvable|CodebuildFleetFleetProxyConfigurationOrderedProxyRules[] OrderedProxyRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]

---

##### `DefaultBehavior`<sup>Required</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehavior"></a>

```csharp
public string DefaultBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetFleetProxyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

---


### CodebuildFleetFleetVpcConfigOutputReference <a name="CodebuildFleetFleetVpcConfigOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetFleetVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetFleetVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

---


### CodebuildFleetScalingConfigurationOutputReference <a name="CodebuildFleetScalingConfigurationOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs">PutTargetTrackingScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetScalingType">ResetScalingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetTargetTrackingScalingConfigs">ResetTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetTrackingScalingConfigs` <a name="PutTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs"></a>

```csharp
private void PutTargetTrackingScalingConfigs(IResolvable|CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]

---

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetScalingType` <a name="ResetScalingType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetScalingType"></a>

```csharp
private void ResetScalingType()
```

##### `ResetTargetTrackingScalingConfigs` <a name="ResetTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetTargetTrackingScalingConfigs"></a>

```csharp
private void ResetTargetTrackingScalingConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs">TargetTrackingScalingConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingTypeInput">ScalingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigsInput">TargetTrackingScalingConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingType">ScalingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetTrackingScalingConfigs`<sup>Required</sup> <a name="TargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs"></a>

```csharp
public CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList TargetTrackingScalingConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a>

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `ScalingTypeInput`<sup>Optional</sup> <a name="ScalingTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingTypeInput"></a>

```csharp
public string ScalingTypeInput { get; }
```

- *Type:* string

---

##### `TargetTrackingScalingConfigsInput`<sup>Optional</sup> <a name="TargetTrackingScalingConfigsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigsInput"></a>

```csharp
public IResolvable|CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] TargetTrackingScalingConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `ScalingType`<sup>Required</sup> <a name="ScalingType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingType"></a>

```csharp
public string ScalingType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetScalingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---


### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get"></a>

```csharp
private CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]

---


### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetMetricType">ResetMetricType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetTargetValue">ResetTargetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricType` <a name="ResetMetricType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetMetricType"></a>

```csharp
private void ResetMetricType()
```

##### `ResetTargetValue` <a name="ResetTargetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetTargetValue"></a>

```csharp
private void ResetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricTypeInput">MetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue">TargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricTypeInput`<sup>Optional</sup> <a name="MetricTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricTypeInput"></a>

```csharp
public string MetricTypeInput { get; }
```

- *Type:* string

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValueInput"></a>

```csharp
public double TargetValueInput { get; }
```

- *Type:* double

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue"></a>

```csharp
public double TargetValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>

---


### CodebuildFleetTagsList <a name="CodebuildFleetTagsList" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.get"></a>

```csharp
private CodebuildFleetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]

---


### CodebuildFleetTagsOutputReference <a name="CodebuildFleetTagsOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodebuildFleetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodebuildFleetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>

---



