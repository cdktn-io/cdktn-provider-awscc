# `odbOdbPeeringConnection` Submodule <a name="`odbOdbPeeringConnection` Submodule" id="@cdktn/provider-awscc.odbOdbPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbOdbPeeringConnection <a name="OdbOdbPeeringConnection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_peering_connection awscc_odb_odb_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbPeeringConnection(Construct Scope, string Id, OdbOdbPeeringConnectionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig">OdbOdbPeeringConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig">OdbOdbPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetAdditionalPeerNetworkCidrs">ResetAdditionalPeerNetworkCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOdbNetworkId">ResetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkId">ResetPeerNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkRouteTableIds">ResetPeerNetworkRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags"></a>

```csharp
private void PutTags(IResolvable|OdbOdbPeeringConnectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]

---

##### `ResetAdditionalPeerNetworkCidrs` <a name="ResetAdditionalPeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetAdditionalPeerNetworkCidrs"></a>

```csharp
private void ResetAdditionalPeerNetworkCidrs()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetOdbNetworkId` <a name="ResetOdbNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOdbNetworkId"></a>

```csharp
private void ResetOdbNetworkId()
```

##### `ResetPeerNetworkId` <a name="ResetPeerNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkId"></a>

```csharp
private void ResetPeerNetworkId()
```

##### `ResetPeerNetworkRouteTableIds` <a name="ResetPeerNetworkRouteTableIds" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkRouteTableIds"></a>

```csharp
private void ResetPeerNetworkRouteTableIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbOdbPeeringConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbOdbPeeringConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbOdbPeeringConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbOdbPeeringConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbOdbPeeringConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbOdbPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OdbOdbPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionArn">OdbPeeringConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionId">OdbPeeringConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkArn">PeerNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkCidrs">PeerNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList">OdbOdbPeeringConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrsInput">AdditionalPeerNetworkCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkIdInput">OdbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkIdInput">PeerNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIdsInput">PeerNetworkRouteTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrs">AdditionalPeerNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkId">PeerNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIds">PeerNetworkRouteTableIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; }
```

- *Type:* string

---

##### `OdbPeeringConnectionArn`<sup>Required</sup> <a name="OdbPeeringConnectionArn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionArn"></a>

```csharp
public string OdbPeeringConnectionArn { get; }
```

- *Type:* string

---

##### `OdbPeeringConnectionId`<sup>Required</sup> <a name="OdbPeeringConnectionId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionId"></a>

```csharp
public string OdbPeeringConnectionId { get; }
```

- *Type:* string

---

##### `PeerNetworkArn`<sup>Required</sup> <a name="PeerNetworkArn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkArn"></a>

```csharp
public string PeerNetworkArn { get; }
```

- *Type:* string

---

##### `PeerNetworkCidrs`<sup>Required</sup> <a name="PeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkCidrs"></a>

```csharp
public string[] PeerNetworkCidrs { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tags"></a>

```csharp
public OdbOdbPeeringConnectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList">OdbOdbPeeringConnectionTagsList</a>

---

##### `AdditionalPeerNetworkCidrsInput`<sup>Optional</sup> <a name="AdditionalPeerNetworkCidrsInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrsInput"></a>

```csharp
public string[] AdditionalPeerNetworkCidrsInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `OdbNetworkIdInput`<sup>Optional</sup> <a name="OdbNetworkIdInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkIdInput"></a>

```csharp
public string OdbNetworkIdInput { get; }
```

- *Type:* string

---

##### `PeerNetworkIdInput`<sup>Optional</sup> <a name="PeerNetworkIdInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkIdInput"></a>

```csharp
public string PeerNetworkIdInput { get; }
```

- *Type:* string

---

##### `PeerNetworkRouteTableIdsInput`<sup>Optional</sup> <a name="PeerNetworkRouteTableIdsInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIdsInput"></a>

```csharp
public string[] PeerNetworkRouteTableIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tagsInput"></a>

```csharp
public IResolvable|OdbOdbPeeringConnectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]

---

##### `AdditionalPeerNetworkCidrs`<sup>Required</sup> <a name="AdditionalPeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrs"></a>

```csharp
public string[] AdditionalPeerNetworkCidrs { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `PeerNetworkId`<sup>Required</sup> <a name="PeerNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkId"></a>

```csharp
public string PeerNetworkId { get; }
```

- *Type:* string

---

##### `PeerNetworkRouteTableIds`<sup>Required</sup> <a name="PeerNetworkRouteTableIds" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIds"></a>

```csharp
public string[] PeerNetworkRouteTableIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbOdbPeeringConnectionConfig <a name="OdbOdbPeeringConnectionConfig" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbPeeringConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AdditionalPeerNetworkCidrs = null,
    string DisplayName = null,
    string OdbNetworkId = null,
    string PeerNetworkId = null,
    string[] PeerNetworkRouteTableIds = null,
    IResolvable|OdbOdbPeeringConnectionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.additionalPeerNetworkCidrs">AdditionalPeerNetworkCidrs</a></code> | <code>string[]</code> | The additional CIDR blocks for the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The name of the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | The unique identifier of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkId">PeerNetworkId</a></code> | <code>string</code> | The unique identifier of the peer network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkRouteTableIds">PeerNetworkRouteTableIds</a></code> | <code>string[]</code> | The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]</code> | Tags to assign to the Odb peering connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalPeerNetworkCidrs`<sup>Optional</sup> <a name="AdditionalPeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.additionalPeerNetworkCidrs"></a>

```csharp
public string[] AdditionalPeerNetworkCidrs { get; set; }
```

- *Type:* string[]

The additional CIDR blocks for the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_peering_connection#additional_peer_network_cidrs OdbOdbPeeringConnection#additional_peer_network_cidrs}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_peering_connection#display_name OdbOdbPeeringConnection#display_name}

---

##### `OdbNetworkId`<sup>Optional</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; set; }
```

- *Type:* string

The unique identifier of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_peering_connection#odb_network_id OdbOdbPeeringConnection#odb_network_id}

---

##### `PeerNetworkId`<sup>Optional</sup> <a name="PeerNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkId"></a>

```csharp
public string PeerNetworkId { get; set; }
```

- *Type:* string

The unique identifier of the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_peering_connection#peer_network_id OdbOdbPeeringConnection#peer_network_id}

---

##### `PeerNetworkRouteTableIds`<sup>Optional</sup> <a name="PeerNetworkRouteTableIds" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkRouteTableIds"></a>

```csharp
public string[] PeerNetworkRouteTableIds { get; set; }
```

- *Type:* string[]

The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_peering_connection#peer_network_route_table_ids OdbOdbPeeringConnection#peer_network_route_table_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.tags"></a>

```csharp
public IResolvable|OdbOdbPeeringConnectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]

Tags to assign to the Odb peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_peering_connection#tags OdbOdbPeeringConnection#tags}

---

### OdbOdbPeeringConnectionTags <a name="OdbOdbPeeringConnectionTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbPeeringConnectionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_peering_connection#value OdbOdbPeeringConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbOdbPeeringConnectionTagsList <a name="OdbOdbPeeringConnectionTagsList" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbPeeringConnectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get"></a>

```csharp
private OdbOdbPeeringConnectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|OdbOdbPeeringConnectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]

---


### OdbOdbPeeringConnectionTagsOutputReference <a name="OdbOdbPeeringConnectionTagsOutputReference" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbOdbPeeringConnectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbOdbPeeringConnectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>

---



