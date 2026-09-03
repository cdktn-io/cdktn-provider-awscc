# `resourcegroupsTagSyncTask` Submodule <a name="`resourcegroupsTagSyncTask` Submodule" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcegroupsTagSyncTask <a name="ResourcegroupsTagSyncTask" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resourcegroups_tag_sync_task awscc_resourcegroups_tag_sync_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResourcegroupsTagSyncTask(Construct Scope, string Id, ResourcegroupsTagSyncTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig">ResourcegroupsTagSyncTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig">ResourcegroupsTagSyncTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ResourcegroupsTagSyncTask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ResourcegroupsTagSyncTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ResourcegroupsTagSyncTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ResourcegroupsTagSyncTask.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ResourcegroupsTagSyncTask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ResourcegroupsTagSyncTask resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourcegroupsTagSyncTask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourcegroupsTagSyncTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resourcegroups_tag_sync_task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ResourcegroupsTagSyncTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupArn">GroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.taskArn">TaskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValueInput">TagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupArn`<sup>Required</sup> <a name="GroupArn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupArn"></a>

```csharp
public string GroupArn { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TaskArn`<sup>Required</sup> <a name="TaskArn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.taskArn"></a>

```csharp
public string TaskArn { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValueInput"></a>

```csharp
public string TagValueInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcegroupsTagSyncTaskConfig <a name="ResourcegroupsTagSyncTaskConfig" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ResourcegroupsTagSyncTaskConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Group,
    string RoleArn,
    string TagKey,
    string TagValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.group">Group</a></code> | <code>string</code> | The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagKey">TagKey</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagValue">TagValue</a></code> | <code>string</code> | The tag value. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resourcegroups_tag_sync_task#group ResourcegroupsTagSyncTask#group}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resourcegroups_tag_sync_task#role_arn ResourcegroupsTagSyncTask#role_arn}

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

The tag key.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resourcegroups_tag_sync_task#tag_key ResourcegroupsTagSyncTask#tag_key}

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagValue"></a>

```csharp
public string TagValue { get; set; }
```

- *Type:* string

The tag value.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resourcegroups_tag_sync_task#tag_value ResourcegroupsTagSyncTask#tag_value}

---



