# `connectUserHierarchyStructure` Submodule <a name="`connectUserHierarchyStructure` Submodule" id="@cdktn/provider-awscc.connectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyStructure <a name="ConnectUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructure(Construct Scope, string Id, ConnectUserHierarchyStructureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig">ConnectUserHierarchyStructureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig">ConnectUserHierarchyStructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure">PutUserHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetUserHierarchyStructure">ResetUserHierarchyStructure</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUserHierarchyStructure` <a name="PutUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure"></a>

```csharp
private void PutUserHierarchyStructure(ConnectUserHierarchyStructureUserHierarchyStructure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---

##### `ResetUserHierarchyStructure` <a name="ResetUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetUserHierarchyStructure"></a>

```csharp
private void ResetUserHierarchyStructure()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectUserHierarchyStructure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectUserHierarchyStructure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectUserHierarchyStructure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectUserHierarchyStructure.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectUserHierarchyStructure to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectUserHierarchyStructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectUserHierarchyStructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructure">UserHierarchyStructure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureArn">UserHierarchyStructureArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureInput">UserHierarchyStructureInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UserHierarchyStructure`<sup>Required</sup> <a name="UserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructure"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureOutputReference UserHierarchyStructure { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a>

---

##### `UserHierarchyStructureArn`<sup>Required</sup> <a name="UserHierarchyStructureArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureArn"></a>

```csharp
public string UserHierarchyStructureArn { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `UserHierarchyStructureInput`<sup>Optional</sup> <a name="UserHierarchyStructureInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureInput"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructure UserHierarchyStructureInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyStructureConfig <a name="ConnectUserHierarchyStructureConfig" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    ConnectUserHierarchyStructureUserHierarchyStructure UserHierarchyStructure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.userHierarchyStructure">UserHierarchyStructure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | Information about the hierarchy structure. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#instance_arn ConnectUserHierarchyStructure#instance_arn}

---

##### `UserHierarchyStructure`<sup>Optional</sup> <a name="UserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.userHierarchyStructure"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructure UserHierarchyStructure { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

Information about the hierarchy structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#user_hierarchy_structure ConnectUserHierarchyStructure#user_hierarchy_structure}

---

### ConnectUserHierarchyStructureUserHierarchyStructure <a name="ConnectUserHierarchyStructureUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructure {
    ConnectUserHierarchyStructureUserHierarchyStructureLevelFive LevelFive = null,
    ConnectUserHierarchyStructureUserHierarchyStructureLevelFour LevelFour = null,
    ConnectUserHierarchyStructureUserHierarchyStructureLevelOne LevelOne = null,
    ConnectUserHierarchyStructureUserHierarchyStructureLevelThree LevelThree = null,
    ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo LevelTwo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFive">LevelFive</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | Information about level five. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFour">LevelFour</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | Information about level four. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelOne">LevelOne</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | Information about level one. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelThree">LevelThree</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | Information about level three. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelTwo">LevelTwo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | Information about level two. |

---

##### `LevelFive`<sup>Optional</sup> <a name="LevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFive"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelFive LevelFive { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

Information about level five.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}

---

##### `LevelFour`<sup>Optional</sup> <a name="LevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFour"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelFour LevelFour { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

Information about level four.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}

---

##### `LevelOne`<sup>Optional</sup> <a name="LevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelOne"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelOne LevelOne { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

Information about level one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}

---

##### `LevelThree`<sup>Optional</sup> <a name="LevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelThree"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelThree LevelThree { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

Information about level three.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}

---

##### `LevelTwo`<sup>Optional</sup> <a name="LevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelTwo"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo LevelTwo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

Information about level two.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFive <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelFive {
    string HierarchyLevelArn = null,
    string HierarchyLevelId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.name">Name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `HierarchyLevelArn`<sup>Optional</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `HierarchyLevelId`<sup>Optional</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; set; }
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFour <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelFour {
    string HierarchyLevelArn = null,
    string HierarchyLevelId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.name">Name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `HierarchyLevelArn`<sup>Optional</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `HierarchyLevelId`<sup>Optional</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; set; }
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelOne <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelOne {
    string HierarchyLevelArn = null,
    string HierarchyLevelId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.name">Name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `HierarchyLevelArn`<sup>Optional</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `HierarchyLevelId`<sup>Optional</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; set; }
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelThree <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelThree {
    string HierarchyLevelArn = null,
    string HierarchyLevelId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.name">Name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `HierarchyLevelArn`<sup>Optional</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `HierarchyLevelId`<sup>Optional</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; set; }
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo {
    string HierarchyLevelArn = null,
    string HierarchyLevelId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.name">Name</a></code> | <code>string</code> | The name of the hierarchy level. |

---

##### `HierarchyLevelArn`<sup>Optional</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `HierarchyLevelId`<sup>Optional</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; set; }
```

- *Type:* string

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelArn">ResetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelId">ResetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHierarchyLevelArn` <a name="ResetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelArn"></a>

```csharp
private void ResetHierarchyLevelArn()
```

##### `ResetHierarchyLevelId` <a name="ResetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelId"></a>

```csharp
private void ResetHierarchyLevelId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArnInput">HierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelIdInput">HierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HierarchyLevelArnInput`<sup>Optional</sup> <a name="HierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArnInput"></a>

```csharp
public string HierarchyLevelArnInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelIdInput`<sup>Optional</sup> <a name="HierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelIdInput"></a>

```csharp
public string HierarchyLevelIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; }
```

- *Type:* string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelFive InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelArn">ResetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelId">ResetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHierarchyLevelArn` <a name="ResetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelArn"></a>

```csharp
private void ResetHierarchyLevelArn()
```

##### `ResetHierarchyLevelId` <a name="ResetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelId"></a>

```csharp
private void ResetHierarchyLevelId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArnInput">HierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelIdInput">HierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HierarchyLevelArnInput`<sup>Optional</sup> <a name="HierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArnInput"></a>

```csharp
public string HierarchyLevelArnInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelIdInput`<sup>Optional</sup> <a name="HierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelIdInput"></a>

```csharp
public string HierarchyLevelIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; }
```

- *Type:* string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelFour InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelArn">ResetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelId">ResetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHierarchyLevelArn` <a name="ResetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelArn"></a>

```csharp
private void ResetHierarchyLevelArn()
```

##### `ResetHierarchyLevelId` <a name="ResetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelId"></a>

```csharp
private void ResetHierarchyLevelId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArnInput">HierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelIdInput">HierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HierarchyLevelArnInput`<sup>Optional</sup> <a name="HierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArnInput"></a>

```csharp
public string HierarchyLevelArnInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelIdInput`<sup>Optional</sup> <a name="HierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelIdInput"></a>

```csharp
public string HierarchyLevelIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; }
```

- *Type:* string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelOne InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelArn">ResetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelId">ResetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHierarchyLevelArn` <a name="ResetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelArn"></a>

```csharp
private void ResetHierarchyLevelArn()
```

##### `ResetHierarchyLevelId` <a name="ResetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelId"></a>

```csharp
private void ResetHierarchyLevelId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArnInput">HierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelIdInput">HierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HierarchyLevelArnInput`<sup>Optional</sup> <a name="HierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArnInput"></a>

```csharp
public string HierarchyLevelArnInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelIdInput`<sup>Optional</sup> <a name="HierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelIdInput"></a>

```csharp
public string HierarchyLevelIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; }
```

- *Type:* string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelThree InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelArn">ResetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelId">ResetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHierarchyLevelArn` <a name="ResetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelArn"></a>

```csharp
private void ResetHierarchyLevelArn()
```

##### `ResetHierarchyLevelId` <a name="ResetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelId"></a>

```csharp
private void ResetHierarchyLevelId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArnInput">HierarchyLevelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelIdInput">HierarchyLevelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HierarchyLevelArnInput`<sup>Optional</sup> <a name="HierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArnInput"></a>

```csharp
public string HierarchyLevelArnInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelIdInput`<sup>Optional</sup> <a name="HierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelIdInput"></a>

```csharp
public string HierarchyLevelIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn"></a>

```csharp
public string HierarchyLevelArn { get; }
```

- *Type:* string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId"></a>

```csharp
public string HierarchyLevelId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserHierarchyStructureUserHierarchyStructureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive">PutLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour">PutLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne">PutLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree">PutLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo">PutLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFive">ResetLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFour">ResetLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelOne">ResetLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelThree">ResetLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelTwo">ResetLevelTwo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLevelFive` <a name="PutLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive"></a>

```csharp
private void PutLevelFive(ConnectUserHierarchyStructureUserHierarchyStructureLevelFive Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---

##### `PutLevelFour` <a name="PutLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour"></a>

```csharp
private void PutLevelFour(ConnectUserHierarchyStructureUserHierarchyStructureLevelFour Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---

##### `PutLevelOne` <a name="PutLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne"></a>

```csharp
private void PutLevelOne(ConnectUserHierarchyStructureUserHierarchyStructureLevelOne Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---

##### `PutLevelThree` <a name="PutLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree"></a>

```csharp
private void PutLevelThree(ConnectUserHierarchyStructureUserHierarchyStructureLevelThree Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---

##### `PutLevelTwo` <a name="PutLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo"></a>

```csharp
private void PutLevelTwo(ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---

##### `ResetLevelFive` <a name="ResetLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFive"></a>

```csharp
private void ResetLevelFive()
```

##### `ResetLevelFour` <a name="ResetLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFour"></a>

```csharp
private void ResetLevelFour()
```

##### `ResetLevelOne` <a name="ResetLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelOne"></a>

```csharp
private void ResetLevelOne()
```

##### `ResetLevelThree` <a name="ResetLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelThree"></a>

```csharp
private void ResetLevelThree()
```

##### `ResetLevelTwo` <a name="ResetLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelTwo"></a>

```csharp
private void ResetLevelTwo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive">LevelFive</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour">LevelFour</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne">LevelOne</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree">LevelThree</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo">LevelTwo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFiveInput">LevelFiveInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFourInput">LevelFourInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOneInput">LevelOneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThreeInput">LevelThreeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwoInput">LevelTwoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LevelFive`<sup>Required</sup> <a name="LevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference LevelFive { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a>

---

##### `LevelFour`<sup>Required</sup> <a name="LevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference LevelFour { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a>

---

##### `LevelOne`<sup>Required</sup> <a name="LevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference LevelOne { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a>

---

##### `LevelThree`<sup>Required</sup> <a name="LevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference LevelThree { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a>

---

##### `LevelTwo`<sup>Required</sup> <a name="LevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo"></a>

```csharp
public ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference LevelTwo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a>

---

##### `LevelFiveInput`<sup>Optional</sup> <a name="LevelFiveInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFiveInput"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelFive LevelFiveInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---

##### `LevelFourInput`<sup>Optional</sup> <a name="LevelFourInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFourInput"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelFour LevelFourInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---

##### `LevelOneInput`<sup>Optional</sup> <a name="LevelOneInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOneInput"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelOne LevelOneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---

##### `LevelThreeInput`<sup>Optional</sup> <a name="LevelThreeInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThreeInput"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelThree LevelThreeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---

##### `LevelTwoInput`<sup>Optional</sup> <a name="LevelTwoInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwoInput"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo LevelTwoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructure InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---



