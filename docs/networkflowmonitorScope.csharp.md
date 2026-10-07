# `networkflowmonitorScope` Submodule <a name="`networkflowmonitorScope` Submodule" id="@cdktn/provider-awscc.networkflowmonitorScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorScope <a name="NetworkflowmonitorScope" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope awscc_networkflowmonitor_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScope(Construct Scope, string Id, NetworkflowmonitorScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworkflowmonitorScopeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags">NetworkflowmonitorScopeTags</a>[]

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTargets"></a>

```csharp
private void PutTargets(IResolvable|NetworkflowmonitorScopeTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets">NetworkflowmonitorScopeTargets</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkflowmonitorScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkflowmonitorScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkflowmonitorScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkflowmonitorScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkflowmonitorScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkflowmonitorScope resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkflowmonitorScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkflowmonitorScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn">ScopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList">NetworkflowmonitorScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList">NetworkflowmonitorScopeTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags">NetworkflowmonitorScopeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets">NetworkflowmonitorScopeTargets</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn"></a>

```csharp
public string ScopeArn { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tags"></a>

```csharp
public NetworkflowmonitorScopeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList">NetworkflowmonitorScopeTagsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.targets"></a>

```csharp
public NetworkflowmonitorScopeTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList">NetworkflowmonitorScopeTargetsList</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags">NetworkflowmonitorScopeTags</a>[]

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.targetsInput"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets">NetworkflowmonitorScopeTargets</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorScopeConfig <a name="NetworkflowmonitorScopeConfig" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|NetworkflowmonitorScopeTargets[] Targets,
    IResolvable|NetworkflowmonitorScopeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets">NetworkflowmonitorScopeTargets</a>[]</code> | The targets for the scope. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags">NetworkflowmonitorScopeTags</a>[]</code> | The tags for the scope. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.targets"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets">NetworkflowmonitorScopeTargets</a>[]

The targets for the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#targets NetworkflowmonitorScope#targets}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags">NetworkflowmonitorScopeTags</a>[]

The tags for the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#tags NetworkflowmonitorScope#tags}

---

### NetworkflowmonitorScopeTags <a name="NetworkflowmonitorScopeTags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#key NetworkflowmonitorScope#key}. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#value NetworkflowmonitorScope#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#key NetworkflowmonitorScope#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#value NetworkflowmonitorScope#value}.

---

### NetworkflowmonitorScopeTargets <a name="NetworkflowmonitorScopeTargets" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTargets {
    string Region,
    NetworkflowmonitorScopeTargetsTargetIdentifier TargetIdentifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.property.region">Region</a></code> | <code>string</code> | The AWS Region for the target resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.property.targetIdentifier">TargetIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a></code> | A target identifier is a pair of identifying information for a scope target. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The AWS Region for the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}

---

##### `TargetIdentifier`<sup>Required</sup> <a name="TargetIdentifier" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.property.targetIdentifier"></a>

```csharp
public NetworkflowmonitorScopeTargetsTargetIdentifier TargetIdentifier { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a>

A target identifier is a pair of identifying information for a scope target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#target_identifier NetworkflowmonitorScope#target_identifier}

---

### NetworkflowmonitorScopeTargetsTargetIdentifier <a name="NetworkflowmonitorScopeTargetsTargetIdentifier" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTargetsTargetIdentifier {
    NetworkflowmonitorScopeTargetsTargetIdentifierTargetId TargetId,
    string TargetType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.property.targetId">TargetId</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a></code> | A target ID is an internally-generated identifier for a target. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.property.targetType">TargetType</a></code> | <code>string</code> | The type of the target. Currently always ACCOUNT. |

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.property.targetId"></a>

```csharp
public NetworkflowmonitorScopeTargetsTargetIdentifierTargetId TargetId { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a>

A target ID is an internally-generated identifier for a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#target_id NetworkflowmonitorScope#target_id}

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

The type of the target. Currently always ACCOUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#target_type NetworkflowmonitorScope#target_type}

---

### NetworkflowmonitorScopeTargetsTargetIdentifierTargetId <a name="NetworkflowmonitorScopeTargetsTargetIdentifierTargetId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTargetsTargetIdentifierTargetId {
    string AccountId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId.property.accountId">AccountId</a></code> | <code>string</code> | The account ID for the target. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account ID for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#account_id NetworkflowmonitorScope#account_id}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorScopeTagsList <a name="NetworkflowmonitorScopeTagsList" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.get"></a>

```csharp
private NetworkflowmonitorScopeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags">NetworkflowmonitorScopeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags">NetworkflowmonitorScopeTags</a>[]

---


### NetworkflowmonitorScopeTagsOutputReference <a name="NetworkflowmonitorScopeTagsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags">NetworkflowmonitorScopeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags">NetworkflowmonitorScopeTags</a>

---


### NetworkflowmonitorScopeTargetsList <a name="NetworkflowmonitorScopeTargetsList" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.get"></a>

```csharp
private NetworkflowmonitorScopeTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets">NetworkflowmonitorScopeTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets">NetworkflowmonitorScopeTargets</a>[]

---


### NetworkflowmonitorScopeTargetsOutputReference <a name="NetworkflowmonitorScopeTargetsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.putTargetIdentifier">PutTargetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetIdentifier` <a name="PutTargetIdentifier" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.putTargetIdentifier"></a>

```csharp
private void PutTargetIdentifier(NetworkflowmonitorScopeTargetsTargetIdentifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.putTargetIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifier">TargetIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference">NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifierInput">TargetIdentifierInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets">NetworkflowmonitorScopeTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetIdentifier`<sup>Required</sup> <a name="TargetIdentifier" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifier"></a>

```csharp
public NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference TargetIdentifier { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference">NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TargetIdentifierInput`<sup>Optional</sup> <a name="TargetIdentifierInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifierInput"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetsTargetIdentifier TargetIdentifierInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets">NetworkflowmonitorScopeTargets</a>

---


### NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference <a name="NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.putTargetId">PutTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetId` <a name="PutTargetId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.putTargetId"></a>

```csharp
private void PutTargetId(NetworkflowmonitorScopeTargetsTargetIdentifierTargetId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.putTargetId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetId">TargetId</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference">NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetIdInput">TargetIdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetId"></a>

```csharp
public NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference TargetId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference">NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference</a>

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetIdInput"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetsTargetIdentifierTargetId TargetIdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a>

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetsTargetIdentifier InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a>

---


### NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference <a name="NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetsTargetIdentifierTargetId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a>

---



