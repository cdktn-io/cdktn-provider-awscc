# `vpclatticeServiceNetworkResourceAssociation` Submodule <a name="`vpclatticeServiceNetworkResourceAssociation` Submodule" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkResourceAssociation <a name="VpclatticeServiceNetworkResourceAssociation" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association awscc_vpclattice_service_network_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkResourceAssociation(Construct Scope, string Id, VpclatticeServiceNetworkResourceAssociationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig">VpclatticeServiceNetworkResourceAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig">VpclatticeServiceNetworkResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetPrivateDnsEnabled">ResetPrivateDnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetResourceConfigurationId">ResetResourceConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetServiceNetworkId">ResetServiceNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|VpclatticeServiceNetworkResourceAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags">VpclatticeServiceNetworkResourceAssociationTags</a>[]

---

##### `ResetPrivateDnsEnabled` <a name="ResetPrivateDnsEnabled" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetPrivateDnsEnabled"></a>

```csharp
private void ResetPrivateDnsEnabled()
```

##### `ResetResourceConfigurationId` <a name="ResetResourceConfigurationId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetResourceConfigurationId"></a>

```csharp
private void ResetResourceConfigurationId()
```

##### `ResetServiceNetworkId` <a name="ResetServiceNetworkId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetServiceNetworkId"></a>

```csharp
private void ResetServiceNetworkId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeServiceNetworkResourceAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeServiceNetworkResourceAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeServiceNetworkResourceAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeServiceNetworkResourceAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeServiceNetworkResourceAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeServiceNetworkResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkResourceAssociationId">ServiceNetworkResourceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList">VpclatticeServiceNetworkResourceAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabledInput">PrivateDnsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdInput">ResourceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdInput">ServiceNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags">VpclatticeServiceNetworkResourceAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkId">ServiceNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceNetworkResourceAssociationId`<sup>Required</sup> <a name="ServiceNetworkResourceAssociationId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkResourceAssociationId"></a>

```csharp
public string ServiceNetworkResourceAssociationId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tags"></a>

```csharp
public VpclatticeServiceNetworkResourceAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList">VpclatticeServiceNetworkResourceAssociationTagsList</a>

---

##### `PrivateDnsEnabledInput`<sup>Optional</sup> <a name="PrivateDnsEnabledInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabledInput"></a>

```csharp
public bool|IResolvable PrivateDnsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceConfigurationIdInput`<sup>Optional</sup> <a name="ResourceConfigurationIdInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdInput"></a>

```csharp
public string ResourceConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ServiceNetworkIdInput`<sup>Optional</sup> <a name="ServiceNetworkIdInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdInput"></a>

```csharp
public string ServiceNetworkIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsInput"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkResourceAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags">VpclatticeServiceNetworkResourceAssociationTags</a>[]

---

##### `PrivateDnsEnabled`<sup>Required</sup> <a name="PrivateDnsEnabled" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabled"></a>

```csharp
public bool|IResolvable PrivateDnsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationId"></a>

```csharp
public string ResourceConfigurationId { get; }
```

- *Type:* string

---

##### `ServiceNetworkId`<sup>Required</sup> <a name="ServiceNetworkId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkId"></a>

```csharp
public string ServiceNetworkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkResourceAssociationConfig <a name="VpclatticeServiceNetworkResourceAssociationConfig" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkResourceAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable PrivateDnsEnabled = null,
    string ResourceConfigurationId = null,
    string ServiceNetworkId = null,
    IResolvable|VpclatticeServiceNetworkResourceAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#private_dns_enabled VpclatticeServiceNetworkResourceAssociation#private_dns_enabled}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_id VpclatticeServiceNetworkResourceAssociation#resource_configuration_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.serviceNetworkId">ServiceNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#service_network_id VpclatticeServiceNetworkResourceAssociation#service_network_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags">VpclatticeServiceNetworkResourceAssociationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PrivateDnsEnabled`<sup>Optional</sup> <a name="PrivateDnsEnabled" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.privateDnsEnabled"></a>

```csharp
public bool|IResolvable PrivateDnsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#private_dns_enabled VpclatticeServiceNetworkResourceAssociation#private_dns_enabled}.

---

##### `ResourceConfigurationId`<sup>Optional</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.resourceConfigurationId"></a>

```csharp
public string ResourceConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_id VpclatticeServiceNetworkResourceAssociation#resource_configuration_id}.

---

##### `ServiceNetworkId`<sup>Optional</sup> <a name="ServiceNetworkId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.serviceNetworkId"></a>

```csharp
public string ServiceNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#service_network_id VpclatticeServiceNetworkResourceAssociation#service_network_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.tags"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkResourceAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags">VpclatticeServiceNetworkResourceAssociationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}.

---

### VpclatticeServiceNetworkResourceAssociationTags <a name="VpclatticeServiceNetworkResourceAssociationTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkResourceAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#key VpclatticeServiceNetworkResourceAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#value VpclatticeServiceNetworkResourceAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#key VpclatticeServiceNetworkResourceAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/vpclattice_service_network_resource_association#value VpclatticeServiceNetworkResourceAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkResourceAssociationTagsList <a name="VpclatticeServiceNetworkResourceAssociationTagsList" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkResourceAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.get"></a>

```csharp
private VpclatticeServiceNetworkResourceAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags">VpclatticeServiceNetworkResourceAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkResourceAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags">VpclatticeServiceNetworkResourceAssociationTags</a>[]

---


### VpclatticeServiceNetworkResourceAssociationTagsOutputReference <a name="VpclatticeServiceNetworkResourceAssociationTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeServiceNetworkResourceAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags">VpclatticeServiceNetworkResourceAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkResourceAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTags">VpclatticeServiceNetworkResourceAssociationTags</a>

---



