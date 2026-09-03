# `devopsguruResourceCollection` Submodule <a name="`devopsguruResourceCollection` Submodule" id="@cdktn/provider-awscc.devopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruResourceCollection <a name="DevopsguruResourceCollection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_resource_collection awscc_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruResourceCollection(Construct Scope, string Id, DevopsguruResourceCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig">DevopsguruResourceCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig">DevopsguruResourceCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter">PutResourceCollectionFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceCollectionFilter` <a name="PutResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter"></a>

```csharp
private void PutResourceCollectionFilter(DevopsguruResourceCollectionResourceCollectionFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsguruResourceCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsguruResourceCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsguruResourceCollection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsguruResourceCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsguruResourceCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter">ResourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType">ResourceCollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput">ResourceCollectionFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceCollectionFilter`<sup>Required</sup> <a name="ResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter"></a>

```csharp
public DevopsguruResourceCollectionResourceCollectionFilterOutputReference ResourceCollectionFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a>

---

##### `ResourceCollectionType`<sup>Required</sup> <a name="ResourceCollectionType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType"></a>

```csharp
public string ResourceCollectionType { get; }
```

- *Type:* string

---

##### `ResourceCollectionFilterInput`<sup>Optional</sup> <a name="ResourceCollectionFilterInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilter ResourceCollectionFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruResourceCollectionConfig <a name="DevopsguruResourceCollectionConfig" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruResourceCollectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DevopsguruResourceCollectionResourceCollectionFilter ResourceCollectionFilter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter">ResourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourceCollectionFilter`<sup>Required</sup> <a name="ResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter"></a>

```csharp
public DevopsguruResourceCollectionResourceCollectionFilter ResourceCollectionFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_resource_collection#resource_collection_filter DevopsguruResourceCollection#resource_collection_filter}

---

### DevopsguruResourceCollectionResourceCollectionFilter <a name="DevopsguruResourceCollectionResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruResourceCollectionResourceCollectionFilter {
    DevopsguruResourceCollectionResourceCollectionFilterCloudformation Cloudformation = null,
    IResolvable|DevopsguruResourceCollectionResourceCollectionFilterTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation">Cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | CloudFormation resource for DevOps Guru to monitor. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]</code> | Tagged resources for DevOps Guru to monitor. |

---

##### `Cloudformation`<sup>Optional</sup> <a name="Cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation"></a>

```csharp
public DevopsguruResourceCollectionResourceCollectionFilterCloudformation Cloudformation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

CloudFormation resource for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_resource_collection#cloudformation DevopsguruResourceCollection#cloudformation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]

Tagged resources for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_resource_collection#tags DevopsguruResourceCollection#tags}

---

### DevopsguruResourceCollectionResourceCollectionFilterCloudformation <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruResourceCollectionResourceCollectionFilterCloudformation {
    string[] StackNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames">StackNames</a></code> | <code>string[]</code> | An array of CloudFormation stack names. |

---

##### `StackNames`<sup>Optional</sup> <a name="StackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames"></a>

```csharp
public string[] StackNames { get; set; }
```

- *Type:* string[]

An array of CloudFormation stack names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_resource_collection#stack_names DevopsguruResourceCollection#stack_names}

---

### DevopsguruResourceCollectionResourceCollectionFilterTags <a name="DevopsguruResourceCollectionResourceCollectionFilterTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruResourceCollectionResourceCollectionFilterTags {
    string AppBoundaryKey = null,
    string[] TagValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey">AppBoundaryKey</a></code> | <code>string</code> | A Tag key for DevOps Guru app boundary. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues">TagValues</a></code> | <code>string[]</code> | Tag values of DevOps Guru app boundary. |

---

##### `AppBoundaryKey`<sup>Optional</sup> <a name="AppBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey"></a>

```csharp
public string AppBoundaryKey { get; set; }
```

- *Type:* string

A Tag key for DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_resource_collection#app_boundary_key DevopsguruResourceCollection#app_boundary_key}

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues"></a>

```csharp
public string[] TagValues { get; set; }
```

- *Type:* string[]

Tag values of DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_resource_collection#tag_values DevopsguruResourceCollection#tag_values}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames">ResetStackNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStackNames` <a name="ResetStackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames"></a>

```csharp
private void ResetStackNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput">StackNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames">StackNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StackNamesInput`<sup>Optional</sup> <a name="StackNamesInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput"></a>

```csharp
public string[] StackNamesInput { get; }
```

- *Type:* string[]

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames"></a>

```csharp
public string[] StackNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilterCloudformation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---


### DevopsguruResourceCollectionResourceCollectionFilterOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruResourceCollectionResourceCollectionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation">PutCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation">ResetCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudformation` <a name="PutCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation"></a>

```csharp
private void PutCloudformation(DevopsguruResourceCollectionResourceCollectionFilterCloudformation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|DevopsguruResourceCollectionResourceCollectionFilterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]

---

##### `ResetCloudformation` <a name="ResetCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation"></a>

```csharp
private void ResetCloudformation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation">Cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput">CloudformationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cloudformation`<sup>Required</sup> <a name="Cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation"></a>

```csharp
public DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference Cloudformation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags"></a>

```csharp
public DevopsguruResourceCollectionResourceCollectionFilterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a>

---

##### `CloudformationInput`<sup>Optional</sup> <a name="CloudformationInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilterCloudformation CloudformationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsList <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsList" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruResourceCollectionResourceCollectionFilterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get"></a>

```csharp
private DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey">ResetAppBoundaryKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppBoundaryKey` <a name="ResetAppBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey"></a>

```csharp
private void ResetAppBoundaryKey()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues"></a>

```csharp
private void ResetTagValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput">AppBoundaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey">AppBoundaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues">TagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppBoundaryKeyInput`<sup>Optional</sup> <a name="AppBoundaryKeyInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput"></a>

```csharp
public string AppBoundaryKeyInput { get; }
```

- *Type:* string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput"></a>

```csharp
public string[] TagValuesInput { get; }
```

- *Type:* string[]

---

##### `AppBoundaryKey`<sup>Required</sup> <a name="AppBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey"></a>

```csharp
public string AppBoundaryKey { get; }
```

- *Type:* string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues"></a>

```csharp
public string[] TagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>

---



