# `ec2VpcEncryptionControl` Submodule <a name="`ec2VpcEncryptionControl` Submodule" id="@cdktn/provider-awscc.ec2VpcEncryptionControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEncryptionControl <a name="Ec2VpcEncryptionControl" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control awscc_ec2_vpc_encryption_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControl(Construct Scope, string Id, Ec2VpcEncryptionControlConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig">Ec2VpcEncryptionControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig">Ec2VpcEncryptionControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusionInput">ResetEgressOnlyInternetGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetElasticFileSystemExclusionInput">ResetElasticFileSystemExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetInternetGatewayExclusionInput">ResetInternetGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetLambdaExclusionInput">ResetLambdaExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetNatGatewayExclusionInput">ResetNatGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVirtualPrivateGatewayExclusionInput">ResetVirtualPrivateGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcId">ResetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcLatticeExclusionInput">ResetVpcLatticeExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcPeeringExclusionInput">ResetVpcPeeringExclusionInput</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2VpcEncryptionControlTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]

---

##### `ResetEgressOnlyInternetGatewayExclusionInput` <a name="ResetEgressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusionInput"></a>

```csharp
private void ResetEgressOnlyInternetGatewayExclusionInput()
```

##### `ResetElasticFileSystemExclusionInput` <a name="ResetElasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetElasticFileSystemExclusionInput"></a>

```csharp
private void ResetElasticFileSystemExclusionInput()
```

##### `ResetInternetGatewayExclusionInput` <a name="ResetInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetInternetGatewayExclusionInput"></a>

```csharp
private void ResetInternetGatewayExclusionInput()
```

##### `ResetLambdaExclusionInput` <a name="ResetLambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetLambdaExclusionInput"></a>

```csharp
private void ResetLambdaExclusionInput()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetNatGatewayExclusionInput` <a name="ResetNatGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetNatGatewayExclusionInput"></a>

```csharp
private void ResetNatGatewayExclusionInput()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVirtualPrivateGatewayExclusionInput` <a name="ResetVirtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVirtualPrivateGatewayExclusionInput"></a>

```csharp
private void ResetVirtualPrivateGatewayExclusionInput()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

##### `ResetVpcLatticeExclusionInput` <a name="ResetVpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcLatticeExclusionInput"></a>

```csharp
private void ResetVpcLatticeExclusionInput()
```

##### `ResetVpcPeeringExclusionInput` <a name="ResetVpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcPeeringExclusionInput"></a>

```csharp
private void ResetVpcPeeringExclusionInput()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEncryptionControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcEncryptionControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcEncryptionControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcEncryptionControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcEncryptionControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2VpcEncryptionControl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcEncryptionControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcEncryptionControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEncryptionControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.resourceExclusions">ResourceExclusions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference">Ec2VpcEncryptionControlResourceExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList">Ec2VpcEncryptionControlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcEncryptionControlId">VpcEncryptionControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInputInput">EgressOnlyInternetGatewayExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInputInput">ElasticFileSystemExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInputInput">InternetGatewayExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInputInput">LambdaExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInputInput">NatGatewayExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInputInput">VirtualPrivateGatewayExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInputInput">VpcLatticeExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInputInput">VpcPeeringExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput">EgressOnlyInternetGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInput">ElasticFileSystemExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInput">InternetGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInput">LambdaExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInput">NatGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput">VirtualPrivateGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInput">VpcLatticeExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInput">VpcPeeringExclusionInput</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceExclusions`<sup>Required</sup> <a name="ResourceExclusions" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.resourceExclusions"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsOutputReference ResourceExclusions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference">Ec2VpcEncryptionControlResourceExclusionsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tags"></a>

```csharp
public Ec2VpcEncryptionControlTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList">Ec2VpcEncryptionControlTagsList</a>

---

##### `VpcEncryptionControlId`<sup>Required</sup> <a name="VpcEncryptionControlId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcEncryptionControlId"></a>

```csharp
public string VpcEncryptionControlId { get; }
```

- *Type:* string

---

##### `EgressOnlyInternetGatewayExclusionInputInput`<sup>Optional</sup> <a name="EgressOnlyInternetGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInputInput"></a>

```csharp
public string EgressOnlyInternetGatewayExclusionInputInput { get; }
```

- *Type:* string

---

##### `ElasticFileSystemExclusionInputInput`<sup>Optional</sup> <a name="ElasticFileSystemExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInputInput"></a>

```csharp
public string ElasticFileSystemExclusionInputInput { get; }
```

- *Type:* string

---

##### `InternetGatewayExclusionInputInput`<sup>Optional</sup> <a name="InternetGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInputInput"></a>

```csharp
public string InternetGatewayExclusionInputInput { get; }
```

- *Type:* string

---

##### `LambdaExclusionInputInput`<sup>Optional</sup> <a name="LambdaExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInputInput"></a>

```csharp
public string LambdaExclusionInputInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NatGatewayExclusionInputInput`<sup>Optional</sup> <a name="NatGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInputInput"></a>

```csharp
public string NatGatewayExclusionInputInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tagsInput"></a>

```csharp
public IResolvable|Ec2VpcEncryptionControlTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]

---

##### `VirtualPrivateGatewayExclusionInputInput`<sup>Optional</sup> <a name="VirtualPrivateGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInputInput"></a>

```csharp
public string VirtualPrivateGatewayExclusionInputInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `VpcLatticeExclusionInputInput`<sup>Optional</sup> <a name="VpcLatticeExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInputInput"></a>

```csharp
public string VpcLatticeExclusionInputInput { get; }
```

- *Type:* string

---

##### `VpcPeeringExclusionInputInput`<sup>Optional</sup> <a name="VpcPeeringExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInputInput"></a>

```csharp
public string VpcPeeringExclusionInputInput { get; }
```

- *Type:* string

---

##### `EgressOnlyInternetGatewayExclusionInput`<sup>Required</sup> <a name="EgressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput"></a>

```csharp
public string EgressOnlyInternetGatewayExclusionInput { get; }
```

- *Type:* string

---

##### `ElasticFileSystemExclusionInput`<sup>Required</sup> <a name="ElasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInput"></a>

```csharp
public string ElasticFileSystemExclusionInput { get; }
```

- *Type:* string

---

##### `InternetGatewayExclusionInput`<sup>Required</sup> <a name="InternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInput"></a>

```csharp
public string InternetGatewayExclusionInput { get; }
```

- *Type:* string

---

##### `LambdaExclusionInput`<sup>Required</sup> <a name="LambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInput"></a>

```csharp
public string LambdaExclusionInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `NatGatewayExclusionInput`<sup>Required</sup> <a name="NatGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInput"></a>

```csharp
public string NatGatewayExclusionInput { get; }
```

- *Type:* string

---

##### `VirtualPrivateGatewayExclusionInput`<sup>Required</sup> <a name="VirtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput"></a>

```csharp
public string VirtualPrivateGatewayExclusionInput { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `VpcLatticeExclusionInput`<sup>Required</sup> <a name="VpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInput"></a>

```csharp
public string VpcLatticeExclusionInput { get; }
```

- *Type:* string

---

##### `VpcPeeringExclusionInput`<sup>Required</sup> <a name="VpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInput"></a>

```csharp
public string VpcPeeringExclusionInput { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEncryptionControlConfig <a name="Ec2VpcEncryptionControlConfig" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EgressOnlyInternetGatewayExclusionInput = null,
    string ElasticFileSystemExclusionInput = null,
    string InternetGatewayExclusionInput = null,
    string LambdaExclusionInput = null,
    string Mode = null,
    string NatGatewayExclusionInput = null,
    IResolvable|Ec2VpcEncryptionControlTags[] Tags = null,
    string VirtualPrivateGatewayExclusionInput = null,
    string VpcId = null,
    string VpcLatticeExclusionInput = null,
    string VpcPeeringExclusionInput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusionInput">EgressOnlyInternetGatewayExclusionInput</a></code> | <code>string</code> | Used to enable or disable EIGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.elasticFileSystemExclusionInput">ElasticFileSystemExclusionInput</a></code> | <code>string</code> | Used to enable or disable EFS exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.internetGatewayExclusionInput">InternetGatewayExclusionInput</a></code> | <code>string</code> | Used to enable or disable IGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lambdaExclusionInput">LambdaExclusionInput</a></code> | <code>string</code> | Used to enable or disable Lambda exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.mode">Mode</a></code> | <code>string</code> | The VPC encryption control mode, either monitor or enforce. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.natGatewayExclusionInput">NatGatewayExclusionInput</a></code> | <code>string</code> | Used to enable or disable Nat gateway exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]</code> | The tags to assign to the VPC encryption control. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusionInput">VirtualPrivateGatewayExclusionInput</a></code> | <code>string</code> | Used to enable or disable VGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcId">VpcId</a></code> | <code>string</code> | The VPC on which this VPC encryption control is applied. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcLatticeExclusionInput">VpcLatticeExclusionInput</a></code> | <code>string</code> | Used to enable or disable Vpc Lattice exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcPeeringExclusionInput">VpcPeeringExclusionInput</a></code> | <code>string</code> | Used to enable or disable VPC peering exclusion. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EgressOnlyInternetGatewayExclusionInput`<sup>Optional</sup> <a name="EgressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusionInput"></a>

```csharp
public string EgressOnlyInternetGatewayExclusionInput { get; set; }
```

- *Type:* string

Used to enable or disable EIGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#egress_only_internet_gateway_exclusion_input Ec2VpcEncryptionControl#egress_only_internet_gateway_exclusion_input}

---

##### `ElasticFileSystemExclusionInput`<sup>Optional</sup> <a name="ElasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.elasticFileSystemExclusionInput"></a>

```csharp
public string ElasticFileSystemExclusionInput { get; set; }
```

- *Type:* string

Used to enable or disable EFS exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#elastic_file_system_exclusion_input Ec2VpcEncryptionControl#elastic_file_system_exclusion_input}

---

##### `InternetGatewayExclusionInput`<sup>Optional</sup> <a name="InternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.internetGatewayExclusionInput"></a>

```csharp
public string InternetGatewayExclusionInput { get; set; }
```

- *Type:* string

Used to enable or disable IGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#internet_gateway_exclusion_input Ec2VpcEncryptionControl#internet_gateway_exclusion_input}

---

##### `LambdaExclusionInput`<sup>Optional</sup> <a name="LambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lambdaExclusionInput"></a>

```csharp
public string LambdaExclusionInput { get; set; }
```

- *Type:* string

Used to enable or disable Lambda exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#lambda_exclusion_input Ec2VpcEncryptionControl#lambda_exclusion_input}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The VPC encryption control mode, either monitor or enforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#mode Ec2VpcEncryptionControl#mode}

---

##### `NatGatewayExclusionInput`<sup>Optional</sup> <a name="NatGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.natGatewayExclusionInput"></a>

```csharp
public string NatGatewayExclusionInput { get; set; }
```

- *Type:* string

Used to enable or disable Nat gateway exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#nat_gateway_exclusion_input Ec2VpcEncryptionControl#nat_gateway_exclusion_input}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.tags"></a>

```csharp
public IResolvable|Ec2VpcEncryptionControlTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]

The tags to assign to the VPC encryption control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#tags Ec2VpcEncryptionControl#tags}

---

##### `VirtualPrivateGatewayExclusionInput`<sup>Optional</sup> <a name="VirtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusionInput"></a>

```csharp
public string VirtualPrivateGatewayExclusionInput { get; set; }
```

- *Type:* string

Used to enable or disable VGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#virtual_private_gateway_exclusion_input Ec2VpcEncryptionControl#virtual_private_gateway_exclusion_input}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The VPC on which this VPC encryption control is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#vpc_id Ec2VpcEncryptionControl#vpc_id}

---

##### `VpcLatticeExclusionInput`<sup>Optional</sup> <a name="VpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcLatticeExclusionInput"></a>

```csharp
public string VpcLatticeExclusionInput { get; set; }
```

- *Type:* string

Used to enable or disable Vpc Lattice exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#vpc_lattice_exclusion_input Ec2VpcEncryptionControl#vpc_lattice_exclusion_input}

---

##### `VpcPeeringExclusionInput`<sup>Optional</sup> <a name="VpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcPeeringExclusionInput"></a>

```csharp
public string VpcPeeringExclusionInput { get; set; }
```

- *Type:* string

Used to enable or disable VPC peering exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#vpc_peering_exclusion_input Ec2VpcEncryptionControl#vpc_peering_exclusion_input}

---

### Ec2VpcEncryptionControlResourceExclusions <a name="Ec2VpcEncryptionControlResourceExclusions" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusions {

};
```


### Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway <a name="Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway {

};
```


### Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem <a name="Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem {

};
```


### Ec2VpcEncryptionControlResourceExclusionsInternetGateway <a name="Ec2VpcEncryptionControlResourceExclusionsInternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsInternetGateway {

};
```


### Ec2VpcEncryptionControlResourceExclusionsLambda <a name="Ec2VpcEncryptionControlResourceExclusionsLambda" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsLambda {

};
```


### Ec2VpcEncryptionControlResourceExclusionsNatGateway <a name="Ec2VpcEncryptionControlResourceExclusionsNatGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsNatGateway {

};
```


### Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway <a name="Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway {

};
```


### Ec2VpcEncryptionControlResourceExclusionsVpcLattice <a name="Ec2VpcEncryptionControlResourceExclusionsVpcLattice" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsVpcLattice {

};
```


### Ec2VpcEncryptionControlResourceExclusionsVpcPeering <a name="Ec2VpcEncryptionControlResourceExclusionsVpcPeering" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsVpcPeering {

};
```


### Ec2VpcEncryptionControlTags <a name="Ec2VpcEncryptionControlTags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#key Ec2VpcEncryptionControl#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#value Ec2VpcEncryptionControl#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem</a>

---


### Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway">Ec2VpcEncryptionControlResourceExclusionsInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsInternetGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway">Ec2VpcEncryptionControlResourceExclusionsInternetGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda">Ec2VpcEncryptionControlResourceExclusionsLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsLambda InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda">Ec2VpcEncryptionControlResourceExclusionsLambda</a>

---


### Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway">Ec2VpcEncryptionControlResourceExclusionsNatGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsNatGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway">Ec2VpcEncryptionControlResourceExclusionsNatGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway">EgressOnlyInternetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem">ElasticFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway">InternetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference">Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway">NatGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway">VirtualPrivateGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice">VpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering">VpcPeering</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions">Ec2VpcEncryptionControlResourceExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressOnlyInternetGateway`<sup>Required</sup> <a name="EgressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference EgressOnlyInternetGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a>

---

##### `ElasticFileSystem`<sup>Required</sup> <a name="ElasticFileSystem" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference ElasticFileSystem { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a>

---

##### `InternetGateway`<sup>Required</sup> <a name="InternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference InternetGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.lambda"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference Lambda { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference">Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference</a>

---

##### `NatGateway`<sup>Required</sup> <a name="NatGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference NatGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a>

---

##### `VirtualPrivateGateway`<sup>Required</sup> <a name="VirtualPrivateGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference VirtualPrivateGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a>

---

##### `VpcLattice`<sup>Required</sup> <a name="VpcLattice" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference VpcLattice { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a>

---

##### `VpcPeering`<sup>Required</sup> <a name="VpcPeering" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference VpcPeering { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions">Ec2VpcEncryptionControlResourceExclusions</a>

---


### Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice">Ec2VpcEncryptionControlResourceExclusionsVpcLattice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsVpcLattice InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice">Ec2VpcEncryptionControlResourceExclusionsVpcLattice</a>

---


### Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering">Ec2VpcEncryptionControlResourceExclusionsVpcPeering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue"></a>

```csharp
public Ec2VpcEncryptionControlResourceExclusionsVpcPeering InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering">Ec2VpcEncryptionControlResourceExclusionsVpcPeering</a>

---


### Ec2VpcEncryptionControlTagsList <a name="Ec2VpcEncryptionControlTagsList" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.get"></a>

```csharp
private Ec2VpcEncryptionControlTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpcEncryptionControlTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]

---


### Ec2VpcEncryptionControlTagsOutputReference <a name="Ec2VpcEncryptionControlTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEncryptionControlTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpcEncryptionControlTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>

---



