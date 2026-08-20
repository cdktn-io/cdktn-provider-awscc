# `connectTestCase` Submodule <a name="`connectTestCase` Submodule" id="@cdktn/provider-awscc.connectTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectTestCase <a name="ConnectTestCase" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case awscc_connect_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCase(Construct Scope, string Id, ConnectTestCaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig">ConnectTestCaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig">ConnectTestCaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint">PutEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetInitializationData">ResetInitializationData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntryPoint` <a name="PutEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint"></a>

```csharp
private void PutEntryPoint(ConnectTestCaseEntryPoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectTestCaseTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetEntryPoint"></a>

```csharp
private void ResetEntryPoint()
```

##### `ResetInitializationData` <a name="ResetInitializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetInitializationData"></a>

```csharp
private void ResetInitializationData()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectTestCase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectTestCase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectTestCase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectTestCase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectTestCase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectTestCase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPoint">EntryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference">ConnectTestCaseEntryPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList">ConnectTestCaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.testCaseArn">TestCaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPointInput">EntryPointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationDataInput">InitializationDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationData">InitializationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPoint"></a>

```csharp
public ConnectTestCaseEntryPointOutputReference EntryPoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference">ConnectTestCaseEntryPointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedRegion"></a>

```csharp
public string LastModifiedRegion { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tags"></a>

```csharp
public ConnectTestCaseTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList">ConnectTestCaseTagsList</a>

---

##### `TestCaseArn`<sup>Required</sup> <a name="TestCaseArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.testCaseArn"></a>

```csharp
public string TestCaseArn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPointInput"></a>

```csharp
public IResolvable|ConnectTestCaseEntryPoint EntryPointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---

##### `InitializationDataInput`<sup>Optional</sup> <a name="InitializationDataInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationDataInput"></a>

```csharp
public string InitializationDataInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tagsInput"></a>

```csharp
public IResolvable|ConnectTestCaseTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InitializationData`<sup>Required</sup> <a name="InitializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationData"></a>

```csharp
public string InitializationData { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectTestCaseConfig <a name="ConnectTestCaseConfig" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Content,
    string InstanceArn,
    string Name,
    string Description = null,
    ConnectTestCaseEntryPoint EntryPoint = null,
    string InitializationData = null,
    string Status = null,
    IResolvable|ConnectTestCaseTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.content">Content</a></code> | <code>string</code> | The content of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.name">Name</a></code> | <code>string</code> | The name of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.description">Description</a></code> | <code>string</code> | The description of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.entryPoint">EntryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | Entry point for Testcase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.initializationData">InitializationData</a></code> | <code>string</code> | The initialization data of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.status">Status</a></code> | <code>string</code> | The status of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The content of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#content ConnectTestCase#content}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#instance_arn ConnectTestCase#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#name ConnectTestCase#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#description ConnectTestCase#description}

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.entryPoint"></a>

```csharp
public ConnectTestCaseEntryPoint EntryPoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

Entry point for Testcase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#entry_point ConnectTestCase#entry_point}

---

##### `InitializationData`<sup>Optional</sup> <a name="InitializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.initializationData"></a>

```csharp
public string InitializationData { get; set; }
```

- *Type:* string

The initialization data of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#initialization_data ConnectTestCase#initialization_data}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#status ConnectTestCase#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.tags"></a>

```csharp
public IResolvable|ConnectTestCaseTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#tags ConnectTestCase#tags}

---

### ConnectTestCaseEntryPoint <a name="ConnectTestCaseEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseEntryPoint {
    ConnectTestCaseEntryPointChatEntryPointParameters ChatEntryPointParameters = null,
    string Type = null,
    ConnectTestCaseEntryPointVoiceCallEntryPointParameters VoiceCallEntryPointParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.chatEntryPointParameters">ChatEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | The chat entry point parameters for the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.type">Type</a></code> | <code>string</code> | The type of the Entry Point. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.voiceCallEntryPointParameters">VoiceCallEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | The voice call entry point parameters for the test case. |

---

##### `ChatEntryPointParameters`<sup>Optional</sup> <a name="ChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.chatEntryPointParameters"></a>

```csharp
public ConnectTestCaseEntryPointChatEntryPointParameters ChatEntryPointParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

The chat entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#chat_entry_point_parameters ConnectTestCase#chat_entry_point_parameters}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the Entry Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#type ConnectTestCase#type}

---

##### `VoiceCallEntryPointParameters`<sup>Optional</sup> <a name="VoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.voiceCallEntryPointParameters"></a>

```csharp
public ConnectTestCaseEntryPointVoiceCallEntryPointParameters VoiceCallEntryPointParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

The voice call entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#voice_call_entry_point_parameters ConnectTestCase#voice_call_entry_point_parameters}

---

### ConnectTestCaseEntryPointChatEntryPointParameters <a name="ConnectTestCaseEntryPointChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseEntryPointChatEntryPointParameters {
    string FlowId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.property.flowId">FlowId</a></code> | <code>string</code> | The flow id used for the TestCase. |

---

##### `FlowId`<sup>Optional</sup> <a name="FlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.property.flowId"></a>

```csharp
public string FlowId { get; set; }
```

- *Type:* string

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

### ConnectTestCaseEntryPointVoiceCallEntryPointParameters <a name="ConnectTestCaseEntryPointVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseEntryPointVoiceCallEntryPointParameters {
    string DestinationPhoneNumber = null,
    string FlowId = null,
    string SourcePhoneNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.destinationPhoneNumber">DestinationPhoneNumber</a></code> | <code>string</code> | The destination phonenumber of the EntryPoint. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.flowId">FlowId</a></code> | <code>string</code> | The flow id used for the TestCase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.sourcePhoneNumber">SourcePhoneNumber</a></code> | <code>string</code> | The source phonenumber of the EntryPoint. |

---

##### `DestinationPhoneNumber`<sup>Optional</sup> <a name="DestinationPhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.destinationPhoneNumber"></a>

```csharp
public string DestinationPhoneNumber { get; set; }
```

- *Type:* string

The destination phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#destination_phone_number ConnectTestCase#destination_phone_number}

---

##### `FlowId`<sup>Optional</sup> <a name="FlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.flowId"></a>

```csharp
public string FlowId { get; set; }
```

- *Type:* string

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

##### `SourcePhoneNumber`<sup>Optional</sup> <a name="SourcePhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.sourcePhoneNumber"></a>

```csharp
public string SourcePhoneNumber { get; set; }
```

- *Type:* string

The source phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#source_phone_number ConnectTestCase#source_phone_number}

---

### ConnectTestCaseTags <a name="ConnectTestCaseTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#key ConnectTestCase#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#value ConnectTestCase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectTestCaseEntryPointChatEntryPointParametersOutputReference <a name="ConnectTestCaseEntryPointChatEntryPointParametersOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseEntryPointChatEntryPointParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resetFlowId">ResetFlowId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlowId` <a name="ResetFlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resetFlowId"></a>

```csharp
private void ResetFlowId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowIdInput">FlowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowId">FlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlowIdInput`<sup>Optional</sup> <a name="FlowIdInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowIdInput"></a>

```csharp
public string FlowIdInput { get; }
```

- *Type:* string

---

##### `FlowId`<sup>Required</sup> <a name="FlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowId"></a>

```csharp
public string FlowId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTestCaseEntryPointChatEntryPointParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---


### ConnectTestCaseEntryPointOutputReference <a name="ConnectTestCaseEntryPointOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseEntryPointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters">PutChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters">PutVoiceCallEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetChatEntryPointParameters">ResetChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetVoiceCallEntryPointParameters">ResetVoiceCallEntryPointParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChatEntryPointParameters` <a name="PutChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters"></a>

```csharp
private void PutChatEntryPointParameters(ConnectTestCaseEntryPointChatEntryPointParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---

##### `PutVoiceCallEntryPointParameters` <a name="PutVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters"></a>

```csharp
private void PutVoiceCallEntryPointParameters(ConnectTestCaseEntryPointVoiceCallEntryPointParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---

##### `ResetChatEntryPointParameters` <a name="ResetChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetChatEntryPointParameters"></a>

```csharp
private void ResetChatEntryPointParameters()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVoiceCallEntryPointParameters` <a name="ResetVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetVoiceCallEntryPointParameters"></a>

```csharp
private void ResetVoiceCallEntryPointParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParameters">ChatEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference">ConnectTestCaseEntryPointChatEntryPointParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParameters">VoiceCallEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference">ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParametersInput">ChatEntryPointParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParametersInput">VoiceCallEntryPointParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChatEntryPointParameters`<sup>Required</sup> <a name="ChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParameters"></a>

```csharp
public ConnectTestCaseEntryPointChatEntryPointParametersOutputReference ChatEntryPointParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference">ConnectTestCaseEntryPointChatEntryPointParametersOutputReference</a>

---

##### `VoiceCallEntryPointParameters`<sup>Required</sup> <a name="VoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParameters"></a>

```csharp
public ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference VoiceCallEntryPointParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference">ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference</a>

---

##### `ChatEntryPointParametersInput`<sup>Optional</sup> <a name="ChatEntryPointParametersInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParametersInput"></a>

```csharp
public IResolvable|ConnectTestCaseEntryPointChatEntryPointParameters ChatEntryPointParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VoiceCallEntryPointParametersInput`<sup>Optional</sup> <a name="VoiceCallEntryPointParametersInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParametersInput"></a>

```csharp
public IResolvable|ConnectTestCaseEntryPointVoiceCallEntryPointParameters VoiceCallEntryPointParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTestCaseEntryPoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---


### ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference <a name="ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetDestinationPhoneNumber">ResetDestinationPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetFlowId">ResetFlowId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetSourcePhoneNumber">ResetSourcePhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPhoneNumber` <a name="ResetDestinationPhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetDestinationPhoneNumber"></a>

```csharp
private void ResetDestinationPhoneNumber()
```

##### `ResetFlowId` <a name="ResetFlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetFlowId"></a>

```csharp
private void ResetFlowId()
```

##### `ResetSourcePhoneNumber` <a name="ResetSourcePhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetSourcePhoneNumber"></a>

```csharp
private void ResetSourcePhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumberInput">DestinationPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowIdInput">FlowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumberInput">SourcePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumber">DestinationPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowId">FlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumber">SourcePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPhoneNumberInput`<sup>Optional</sup> <a name="DestinationPhoneNumberInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumberInput"></a>

```csharp
public string DestinationPhoneNumberInput { get; }
```

- *Type:* string

---

##### `FlowIdInput`<sup>Optional</sup> <a name="FlowIdInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowIdInput"></a>

```csharp
public string FlowIdInput { get; }
```

- *Type:* string

---

##### `SourcePhoneNumberInput`<sup>Optional</sup> <a name="SourcePhoneNumberInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumberInput"></a>

```csharp
public string SourcePhoneNumberInput { get; }
```

- *Type:* string

---

##### `DestinationPhoneNumber`<sup>Required</sup> <a name="DestinationPhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumber"></a>

```csharp
public string DestinationPhoneNumber { get; }
```

- *Type:* string

---

##### `FlowId`<sup>Required</sup> <a name="FlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowId"></a>

```csharp
public string FlowId { get; }
```

- *Type:* string

---

##### `SourcePhoneNumber`<sup>Required</sup> <a name="SourcePhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumber"></a>

```csharp
public string SourcePhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTestCaseEntryPointVoiceCallEntryPointParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---


### ConnectTestCaseTagsList <a name="ConnectTestCaseTagsList" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get"></a>

```csharp
private ConnectTestCaseTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectTestCaseTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]

---


### ConnectTestCaseTagsOutputReference <a name="ConnectTestCaseTagsOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectTestCaseTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectTestCaseTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>

---



