# `networkfirewallContainerAssociation` Submodule <a name="`networkfirewallContainerAssociation` Submodule" id="@cdktn/provider-awscc.networkfirewallContainerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallContainerAssociation <a name="NetworkfirewallContainerAssociation" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association awscc_networkfirewall_container_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociation(Construct Scope, string Id, NetworkfirewallContainerAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations">PutContainerMonitoringConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerMonitoringConfigurations` <a name="PutContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations"></a>

```csharp
private void PutContainerMonitoringConfigurations(IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworkfirewallContainerAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallContainerAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallContainerAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallContainerAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallContainerAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkfirewallContainerAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkfirewallContainerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallContainerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn">ContainerAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurations">ContainerMonitoringConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount">ResolvedCidrCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList">NetworkfirewallContainerAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput">ContainerAssociationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationsInput">ContainerMonitoringConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName">ContainerAssociationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContainerAssociationArn`<sup>Required</sup> <a name="ContainerAssociationArn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn"></a>

```csharp
public string ContainerAssociationArn { get; }
```

- *Type:* string

---

##### `ContainerMonitoringConfigurations`<sup>Required</sup> <a name="ContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurations"></a>

```csharp
public NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList ContainerMonitoringConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResolvedCidrCount`<sup>Required</sup> <a name="ResolvedCidrCount" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount"></a>

```csharp
public double ResolvedCidrCount { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags"></a>

```csharp
public NetworkfirewallContainerAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList">NetworkfirewallContainerAssociationTagsList</a>

---

##### `ContainerAssociationNameInput`<sup>Optional</sup> <a name="ContainerAssociationNameInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput"></a>

```csharp
public string ContainerAssociationNameInput { get; }
```

- *Type:* string

---

##### `ContainerMonitoringConfigurationsInput`<sup>Optional</sup> <a name="ContainerMonitoringConfigurationsInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationsInput"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurations[] ContainerMonitoringConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContainerAssociationName`<sup>Required</sup> <a name="ContainerAssociationName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName"></a>

```csharp
public string ContainerAssociationName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallContainerAssociationConfig <a name="NetworkfirewallContainerAssociationConfig" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ContainerAssociationName,
    IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurations[] ContainerMonitoringConfigurations,
    string Type,
    string Description = null,
    IResolvable|NetworkfirewallContainerAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName">ContainerAssociationName</a></code> | <code>string</code> | The descriptive name of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfigurations">ContainerMonitoringConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]</code> | The monitoring configurations for the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type">Type</a></code> | <code>string</code> | The type of containers to monitor. You can't change the container type after creation. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description">Description</a></code> | <code>string</code> | A description of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContainerAssociationName`<sup>Required</sup> <a name="ContainerAssociationName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName"></a>

```csharp
public string ContainerAssociationName { get; set; }
```

- *Type:* string

The descriptive name of the container association.

You can't change the name of a container association after you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}

---

##### `ContainerMonitoringConfigurations`<sup>Required</sup> <a name="ContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfigurations"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurations[] ContainerMonitoringConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]

The monitoring configurations for the container association.

Each configuration specifies an Amazon ECS or Amazon EKS cluster to monitor and optional attribute filters to narrow which containers are tracked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_monitoring_configurations NetworkfirewallContainerAssociation#container_monitoring_configurations}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of containers to monitor. You can't change the container type after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the container association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurations <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurations {
    string ClusterArn,
    IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters[] AttributeFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.clusterArn">ClusterArn</a></code> | <code>string</code> | The ARN of the Amazon ECS or Amazon EKS cluster to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.attributeFilters">AttributeFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]</code> | Key-value pairs that filter which containers are tracked. |

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

The ARN of the Amazon ECS or Amazon EKS cluster to monitor.

The cluster must be in the same Region and account as the container association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}

---

##### `AttributeFilters`<sup>Optional</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.attributeFilters"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters[] AttributeFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]

Key-value pairs that filter which containers are tracked.

For Amazon EKS, you can filter by namespace and Kubernetes labels. For Amazon ECS, you can filter by container instance attributes (EC2 launch type only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#attribute_filters NetworkfirewallContainerAssociation#attribute_filters}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.key">Key</a></code> | <code>string</code> | The attribute key to filter on. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.value">Value</a></code> | <code>string</code> | The attribute value to match. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The attribute key to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The attribute value to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}

---

### NetworkfirewallContainerAssociationTags <a name="NetworkfirewallContainerAssociationTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.key">Key</a></code> | <code>string</code> | The part of the key:value pair that defines a tag. Tag keys are case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.value">Value</a></code> | <code>string</code> | The part of the key:value pair that defines a tag. Tag values are case-sensitive. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The part of the key:value pair that defines a tag. Tag keys are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The part of the key:value pair that defines a tag. Tag values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get"></a>

```csharp
private NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get"></a>

```csharp
private NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters">PutAttributeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resetAttributeFilters">ResetAttributeFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeFilters` <a name="PutAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters"></a>

```csharp
private void PutAttributeFilters(IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]

---

##### `ResetAttributeFilters` <a name="ResetAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resetAttributeFilters"></a>

```csharp
private void ResetAttributeFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters">AttributeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFiltersInput">AttributeFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeFilters`<sup>Required</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters"></a>

```csharp
public NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList AttributeFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a>

---

##### `AttributeFiltersInput`<sup>Optional</sup> <a name="AttributeFiltersInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFiltersInput"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters[] AttributeFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>

---


### NetworkfirewallContainerAssociationTagsList <a name="NetworkfirewallContainerAssociationTagsList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get"></a>

```csharp
private NetworkfirewallContainerAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]

---


### NetworkfirewallContainerAssociationTagsOutputReference <a name="NetworkfirewallContainerAssociationTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallContainerAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>

---



