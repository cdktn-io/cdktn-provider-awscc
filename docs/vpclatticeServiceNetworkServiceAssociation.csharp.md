# `vpclatticeServiceNetworkServiceAssociation` Submodule <a name="`vpclatticeServiceNetworkServiceAssociation` Submodule" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkServiceAssociation <a name="VpclatticeServiceNetworkServiceAssociation" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association awscc_vpclattice_service_network_service_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkServiceAssociation(Construct Scope, string Id, VpclatticeServiceNetworkServiceAssociationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig">VpclatticeServiceNetworkServiceAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig">VpclatticeServiceNetworkServiceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putDnsEntry">PutDnsEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetDnsEntry">ResetDnsEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetServiceIdentifier">ResetServiceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetServiceNetworkIdentifier">ResetServiceNetworkIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDnsEntry` <a name="PutDnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putDnsEntry"></a>

```csharp
private void PutDnsEntry(VpclatticeServiceNetworkServiceAssociationDnsEntry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putDnsEntry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|VpclatticeServiceNetworkServiceAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]

---

##### `ResetDnsEntry` <a name="ResetDnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetDnsEntry"></a>

```csharp
private void ResetDnsEntry()
```

##### `ResetServiceIdentifier` <a name="ResetServiceIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetServiceIdentifier"></a>

```csharp
private void ResetServiceIdentifier()
```

##### `ResetServiceNetworkIdentifier` <a name="ResetServiceNetworkIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetServiceNetworkIdentifier"></a>

```csharp
private void ResetServiceNetworkIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeServiceNetworkServiceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeServiceNetworkServiceAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeServiceNetworkServiceAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeServiceNetworkServiceAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeServiceNetworkServiceAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpclatticeServiceNetworkServiceAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeServiceNetworkServiceAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeServiceNetworkServiceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkServiceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntry">DnsEntry</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference">VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceArn">ServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkArn">ServiceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkId">ServiceNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkName">ServiceNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkServiceAssociationId">ServiceNetworkServiceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList">VpclatticeServiceNetworkServiceAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntryInput">DnsEntryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifierInput">ServiceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifierInput">ServiceNetworkIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DnsEntry`<sup>Required</sup> <a name="DnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntry"></a>

```csharp
public VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference DnsEntry { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference">VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceArn"></a>

```csharp
public string ServiceArn { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceNetworkArn`<sup>Required</sup> <a name="ServiceNetworkArn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkArn"></a>

```csharp
public string ServiceNetworkArn { get; }
```

- *Type:* string

---

##### `ServiceNetworkId`<sup>Required</sup> <a name="ServiceNetworkId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkId"></a>

```csharp
public string ServiceNetworkId { get; }
```

- *Type:* string

---

##### `ServiceNetworkName`<sup>Required</sup> <a name="ServiceNetworkName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkName"></a>

```csharp
public string ServiceNetworkName { get; }
```

- *Type:* string

---

##### `ServiceNetworkServiceAssociationId`<sup>Required</sup> <a name="ServiceNetworkServiceAssociationId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkServiceAssociationId"></a>

```csharp
public string ServiceNetworkServiceAssociationId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tags"></a>

```csharp
public VpclatticeServiceNetworkServiceAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList">VpclatticeServiceNetworkServiceAssociationTagsList</a>

---

##### `DnsEntryInput`<sup>Optional</sup> <a name="DnsEntryInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntryInput"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkServiceAssociationDnsEntry DnsEntryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

---

##### `ServiceIdentifierInput`<sup>Optional</sup> <a name="ServiceIdentifierInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifierInput"></a>

```csharp
public string ServiceIdentifierInput { get; }
```

- *Type:* string

---

##### `ServiceNetworkIdentifierInput`<sup>Optional</sup> <a name="ServiceNetworkIdentifierInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifierInput"></a>

```csharp
public string ServiceNetworkIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsInput"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkServiceAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; }
```

- *Type:* string

---

##### `ServiceNetworkIdentifier`<sup>Required</sup> <a name="ServiceNetworkIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier"></a>

```csharp
public string ServiceNetworkIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkServiceAssociationConfig <a name="VpclatticeServiceNetworkServiceAssociationConfig" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkServiceAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    VpclatticeServiceNetworkServiceAssociationDnsEntry DnsEntry = null,
    string ServiceIdentifier = null,
    string ServiceNetworkIdentifier = null,
    IResolvable|VpclatticeServiceNetworkServiceAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dnsEntry">DnsEntry</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#dns_entry VpclatticeServiceNetworkServiceAssociation#dns_entry}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DnsEntry`<sup>Optional</sup> <a name="DnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dnsEntry"></a>

```csharp
public VpclatticeServiceNetworkServiceAssociationDnsEntry DnsEntry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#dns_entry VpclatticeServiceNetworkServiceAssociation#dns_entry}.

---

##### `ServiceIdentifier`<sup>Optional</sup> <a name="ServiceIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}.

---

##### `ServiceNetworkIdentifier`<sup>Optional</sup> <a name="ServiceNetworkIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceNetworkIdentifier"></a>

```csharp
public string ServiceNetworkIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tags"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkServiceAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}.

---

### VpclatticeServiceNetworkServiceAssociationDnsEntry <a name="VpclatticeServiceNetworkServiceAssociationDnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkServiceAssociationDnsEntry {

};
```


### VpclatticeServiceNetworkServiceAssociationTags <a name="VpclatticeServiceNetworkServiceAssociationTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkServiceAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#key VpclatticeServiceNetworkServiceAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#value VpclatticeServiceNetworkServiceAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#key VpclatticeServiceNetworkServiceAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_service_association#value VpclatticeServiceNetworkServiceAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference <a name="VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkServiceAssociationDnsEntry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

---


### VpclatticeServiceNetworkServiceAssociationTagsList <a name="VpclatticeServiceNetworkServiceAssociationTagsList" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkServiceAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.get"></a>

```csharp
private VpclatticeServiceNetworkServiceAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkServiceAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]

---


### VpclatticeServiceNetworkServiceAssociationTagsOutputReference <a name="VpclatticeServiceNetworkServiceAssociationTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkServiceAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkServiceAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>

---



