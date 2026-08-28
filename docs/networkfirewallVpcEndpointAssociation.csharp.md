# `networkfirewallVpcEndpointAssociation` Submodule <a name="`networkfirewallVpcEndpointAssociation` Submodule" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallVpcEndpointAssociation <a name="NetworkfirewallVpcEndpointAssociation" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association awscc_networkfirewall_vpc_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallVpcEndpointAssociation(Construct Scope, string Id, NetworkfirewallVpcEndpointAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig">NetworkfirewallVpcEndpointAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig">NetworkfirewallVpcEndpointAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping">PutSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubnetMapping` <a name="PutSubnetMapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping"></a>

```csharp
private void PutSubnetMapping(NetworkfirewallVpcEndpointAssociationSubnetMapping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworkfirewallVpcEndpointAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallVpcEndpointAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallVpcEndpointAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallVpcEndpointAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallVpcEndpointAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkfirewallVpcEndpointAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkfirewallVpcEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallVpcEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMapping">SubnetMapping</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList">NetworkfirewallVpcEndpointAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn">VpcEndpointAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId">VpcEndpointAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArnInput">FirewallArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMappingInput">SubnetMappingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArn">FirewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMapping"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference SubnetMapping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tags"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList">NetworkfirewallVpcEndpointAssociationTagsList</a>

---

##### `VpcEndpointAssociationArn`<sup>Required</sup> <a name="VpcEndpointAssociationArn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn"></a>

```csharp
public string VpcEndpointAssociationArn { get; }
```

- *Type:* string

---

##### `VpcEndpointAssociationId`<sup>Required</sup> <a name="VpcEndpointAssociationId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId"></a>

```csharp
public string VpcEndpointAssociationId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FirewallArnInput`<sup>Optional</sup> <a name="FirewallArnInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArnInput"></a>

```csharp
public string FirewallArnInput { get; }
```

- *Type:* string

---

##### `SubnetMappingInput`<sup>Optional</sup> <a name="SubnetMappingInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMappingInput"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationSubnetMapping SubnetMappingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsInput"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArn"></a>

```csharp
public string FirewallArn { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallVpcEndpointAssociationConfig <a name="NetworkfirewallVpcEndpointAssociationConfig" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallVpcEndpointAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FirewallArn,
    NetworkfirewallVpcEndpointAssociationSubnetMapping SubnetMapping,
    string VpcId,
    string Description = null,
    IResolvable|NetworkfirewallVpcEndpointAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.firewallArn">FirewallArn</a></code> | <code>string</code> | A resource ARN. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.subnetMapping">SubnetMapping</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_mapping NetworkfirewallVpcEndpointAssociation#subnet_mapping}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.firewallArn"></a>

```csharp
public string FirewallArn { get; set; }
```

- *Type:* string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#firewall_arn NetworkfirewallVpcEndpointAssociation#firewall_arn}

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.subnetMapping"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationSubnetMapping SubnetMapping { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_mapping NetworkfirewallVpcEndpointAssociation#subnet_mapping}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.tags"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}.

---

### NetworkfirewallVpcEndpointAssociationSubnetMapping <a name="NetworkfirewallVpcEndpointAssociationSubnetMapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallVpcEndpointAssociationSubnetMapping {
    string SubnetId,
    string IpAddressType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.subnetId">SubnetId</a></code> | <code>string</code> | A SubnetId. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | A IPAddressType. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

A SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_id NetworkfirewallVpcEndpointAssociation#subnet_id}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

A IPAddressType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#ip_address_type NetworkfirewallVpcEndpointAssociation#ip_address_type}

---

### NetworkfirewallVpcEndpointAssociationTags <a name="NetworkfirewallVpcEndpointAssociationTags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallVpcEndpointAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#key NetworkfirewallVpcEndpointAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#value NetworkfirewallVpcEndpointAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#key NetworkfirewallVpcEndpointAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkfirewall_vpc_endpoint_association#value NetworkfirewallVpcEndpointAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference <a name="NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationSubnetMapping InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

---


### NetworkfirewallVpcEndpointAssociationTagsList <a name="NetworkfirewallVpcEndpointAssociationTagsList" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallVpcEndpointAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.get"></a>

```csharp
private NetworkfirewallVpcEndpointAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>[]

---


### NetworkfirewallVpcEndpointAssociationTagsOutputReference <a name="NetworkfirewallVpcEndpointAssociationTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallVpcEndpointAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>

---



