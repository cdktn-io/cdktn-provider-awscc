# `ecsClusterCapacityProviderAssociations` Submodule <a name="`ecsClusterCapacityProviderAssociations` Submodule" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsClusterCapacityProviderAssociations <a name="EcsClusterCapacityProviderAssociations" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations awscc_ecs_cluster_capacity_provider_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsClusterCapacityProviderAssociations(Construct Scope, string Id, EcsClusterCapacityProviderAssociationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig">EcsClusterCapacityProviderAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig">EcsClusterCapacityProviderAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.putDefaultCapacityProviderStrategy">PutDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetCapacityProviders">ResetCapacityProviders</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultCapacityProviderStrategy` <a name="PutDefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.putDefaultCapacityProviderStrategy"></a>

```csharp
private void PutDefaultCapacityProviderStrategy(IResolvable|EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.putDefaultCapacityProviderStrategy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>[]

---

##### `ResetCapacityProviders` <a name="ResetCapacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetCapacityProviders"></a>

```csharp
private void ResetCapacityProviders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsClusterCapacityProviderAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsClusterCapacityProviderAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsClusterCapacityProviderAssociations.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsClusterCapacityProviderAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsClusterCapacityProviderAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsClusterCapacityProviderAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcsClusterCapacityProviderAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProvidersInput">CapacityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategyInput">DefaultCapacityProviderStrategyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProviders">CapacityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultCapacityProviderStrategy`<sup>Required</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy"></a>

```csharp
public EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList DefaultCapacityProviderStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CapacityProvidersInput`<sup>Optional</sup> <a name="CapacityProvidersInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProvidersInput"></a>

```csharp
public string[] CapacityProvidersInput { get; }
```

- *Type:* string[]

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `DefaultCapacityProviderStrategyInput`<sup>Optional</sup> <a name="DefaultCapacityProviderStrategyInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategyInput"></a>

```csharp
public IResolvable|EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[] DefaultCapacityProviderStrategyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>[]

---

##### `CapacityProviders`<sup>Required</sup> <a name="CapacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProviders"></a>

```csharp
public string[] CapacityProviders { get; }
```

- *Type:* string[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterCapacityProviderAssociationsConfig <a name="EcsClusterCapacityProviderAssociationsConfig" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsClusterCapacityProviderAssociationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Cluster,
    IResolvable|EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[] DefaultCapacityProviderStrategy,
    string[] CapacityProviders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.cluster">Cluster</a></code> | <code>string</code> | The name of the cluster. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>[]</code> | List of capacity providers to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.capacityProviders">CapacityProviders</a></code> | <code>string[]</code> | List of capacity providers to associate with the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The name of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations#cluster EcsClusterCapacityProviderAssociations#cluster}

---

##### `DefaultCapacityProviderStrategy`<sup>Required</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.defaultCapacityProviderStrategy"></a>

```csharp
public IResolvable|EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[] DefaultCapacityProviderStrategy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>[]

List of capacity providers to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations#default_capacity_provider_strategy EcsClusterCapacityProviderAssociations#default_capacity_provider_strategy}

---

##### `CapacityProviders`<sup>Optional</sup> <a name="CapacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.capacityProviders"></a>

```csharp
public string[] CapacityProviders { get; set; }
```

- *Type:* string[]

List of capacity providers to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations#capacity_providers EcsClusterCapacityProviderAssociations#capacity_providers}

---

### EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy <a name="EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy {
    string CapacityProvider,
    double Base = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.base">Base</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations#base EcsClusterCapacityProviderAssociations#base}. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations#weight EcsClusterCapacityProviderAssociations#weight}. |

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; set; }
```

- *Type:* string

If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations#capacity_provider EcsClusterCapacityProviderAssociations#capacity_provider}

---

##### `Base`<sup>Optional</sup> <a name="Base" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.base"></a>

```csharp
public double Base { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations#base EcsClusterCapacityProviderAssociations#base}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_cluster_capacity_provider_associations#weight EcsClusterCapacityProviderAssociations#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList <a name="EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get"></a>

```csharp
private EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.internalValue"></a>

```csharp
public IResolvable|EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>[]

---


### EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference <a name="EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetBase">ResetBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase` <a name="ResetBase" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetBase"></a>

```csharp
private void ResetBase()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.baseInput">BaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput">CapacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.baseInput"></a>

```csharp
public double BaseInput { get; }
```

- *Type:* double

---

##### `CapacityProviderInput`<sup>Optional</sup> <a name="CapacityProviderInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```csharp
public string CapacityProviderInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```csharp
public double Base { get; }
```

- *Type:* double

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>

---



