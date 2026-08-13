# `networkmanagerCoreNetworkPrefixListAssociation` Submodule <a name="`networkmanagerCoreNetworkPrefixListAssociation` Submodule" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetworkPrefixListAssociation <a name="NetworkmanagerCoreNetworkPrefixListAssociation" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_core_network_prefix_list_association awscc_networkmanager_core_network_prefix_list_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerCoreNetworkPrefixListAssociation(Construct Scope, string Id, NetworkmanagerCoreNetworkPrefixListAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig">NetworkmanagerCoreNetworkPrefixListAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig">NetworkmanagerCoreNetworkPrefixListAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerCoreNetworkPrefixListAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerCoreNetworkPrefixListAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerCoreNetworkPrefixListAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerCoreNetworkPrefixListAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerCoreNetworkPrefixListAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkmanagerCoreNetworkPrefixListAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerCoreNetworkPrefixListAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerCoreNetworkPrefixListAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_core_network_prefix_list_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerCoreNetworkPrefixListAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListAliasInput">PrefixListAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListArnInput">PrefixListArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListAlias">PrefixListAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListArn">PrefixListArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.coreNetworkIdInput"></a>

```csharp
public string CoreNetworkIdInput { get; }
```

- *Type:* string

---

##### `PrefixListAliasInput`<sup>Optional</sup> <a name="PrefixListAliasInput" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListAliasInput"></a>

```csharp
public string PrefixListAliasInput { get; }
```

- *Type:* string

---

##### `PrefixListArnInput`<sup>Optional</sup> <a name="PrefixListArnInput" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListArnInput"></a>

```csharp
public string PrefixListArnInput { get; }
```

- *Type:* string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `PrefixListAlias`<sup>Required</sup> <a name="PrefixListAlias" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListAlias"></a>

```csharp
public string PrefixListAlias { get; }
```

- *Type:* string

---

##### `PrefixListArn`<sup>Required</sup> <a name="PrefixListArn" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListArn"></a>

```csharp
public string PrefixListArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkPrefixListAssociationConfig <a name="NetworkmanagerCoreNetworkPrefixListAssociationConfig" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerCoreNetworkPrefixListAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CoreNetworkId,
    string PrefixListAlias,
    string PrefixListArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | The ID of the core network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.prefixListAlias">PrefixListAlias</a></code> | <code>string</code> | The alias of the prefix list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.prefixListArn">PrefixListArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the prefix list. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; set; }
```

- *Type:* string

The ID of the core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_core_network_prefix_list_association#core_network_id NetworkmanagerCoreNetworkPrefixListAssociation#core_network_id}

---

##### `PrefixListAlias`<sup>Required</sup> <a name="PrefixListAlias" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.prefixListAlias"></a>

```csharp
public string PrefixListAlias { get; set; }
```

- *Type:* string

The alias of the prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_core_network_prefix_list_association#prefix_list_alias NetworkmanagerCoreNetworkPrefixListAssociation#prefix_list_alias}

---

##### `PrefixListArn`<sup>Required</sup> <a name="PrefixListArn" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.prefixListArn"></a>

```csharp
public string PrefixListArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_core_network_prefix_list_association#prefix_list_arn NetworkmanagerCoreNetworkPrefixListAssociation#prefix_list_arn}

---



