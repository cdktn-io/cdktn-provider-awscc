# `apptestTestCase` Submodule <a name="`apptestTestCase` Submodule" id="@cdktn/provider-awscc.apptestTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApptestTestCase <a name="ApptestTestCase" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case awscc_apptest_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCase(Construct Scope, string Id, ApptestTestCaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig">ApptestTestCaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig">ApptestTestCaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSteps` <a name="PutSteps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps"></a>

```csharp
private void PutSteps(IResolvable|ApptestTestCaseSteps[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApptestTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApptestTestCase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApptestTestCase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApptestTestCase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApptestTestCase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApptestTestCase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApptestTestCase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApptestTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApptestTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.latestVersion">LatestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference">ApptestTestCaseLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.steps">Steps</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList">ApptestTestCaseStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseArn">TestCaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseId">TestCaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseVersion">TestCaseVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.stepsInput">StepsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.latestVersion"></a>

```csharp
public ApptestTestCaseLatestVersionOutputReference LatestVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference">ApptestTestCaseLatestVersionOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.steps"></a>

```csharp
public ApptestTestCaseStepsList Steps { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList">ApptestTestCaseStepsList</a>

---

##### `TestCaseArn`<sup>Required</sup> <a name="TestCaseArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseArn"></a>

```csharp
public string TestCaseArn { get; }
```

- *Type:* string

---

##### `TestCaseId`<sup>Required</sup> <a name="TestCaseId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseId"></a>

```csharp
public string TestCaseId { get; }
```

- *Type:* string

---

##### `TestCaseVersion`<sup>Required</sup> <a name="TestCaseVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseVersion"></a>

```csharp
public double TestCaseVersion { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.stepsInput"></a>

```csharp
public IResolvable|ApptestTestCaseSteps[] StepsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApptestTestCaseConfig <a name="ApptestTestCaseConfig" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|ApptestTestCaseSteps[] Steps,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.steps">Steps</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#description ApptestTestCase#description}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.steps"></a>

```csharp
public IResolvable|ApptestTestCaseSteps[] Steps { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#description ApptestTestCase#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}.

---

### ApptestTestCaseLatestVersion <a name="ApptestTestCaseLatestVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseLatestVersion {

};
```


### ApptestTestCaseSteps <a name="ApptestTestCaseSteps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseSteps {
    ApptestTestCaseStepsAction Action,
    string Name,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action ApptestTestCase#action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#description ApptestTestCase#description}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.action"></a>

```csharp
public ApptestTestCaseStepsAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action ApptestTestCase#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#description ApptestTestCase#description}.

---

### ApptestTestCaseStepsAction <a name="ApptestTestCaseStepsAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsAction {
    ApptestTestCaseStepsActionCompareAction CompareAction = null,
    ApptestTestCaseStepsActionMainframeAction MainframeAction = null,
    ApptestTestCaseStepsActionResourceAction ResourceAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.compareAction">CompareAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.mainframeAction">MainframeAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.resourceAction">ResourceAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}. |

---

##### `CompareAction`<sup>Optional</sup> <a name="CompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.compareAction"></a>

```csharp
public ApptestTestCaseStepsActionCompareAction CompareAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}.

---

##### `MainframeAction`<sup>Optional</sup> <a name="MainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.mainframeAction"></a>

```csharp
public ApptestTestCaseStepsActionMainframeAction MainframeAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}.

---

##### `ResourceAction`<sup>Optional</sup> <a name="ResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.resourceAction"></a>

```csharp
public ApptestTestCaseStepsActionResourceAction ResourceAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}.

---

### ApptestTestCaseStepsActionCompareAction <a name="ApptestTestCaseStepsActionCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareAction {
    ApptestTestCaseStepsActionCompareActionInput Input = null,
    ApptestTestCaseStepsActionCompareActionOutput Output = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.input">Input</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#input ApptestTestCase#input}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.output">Output</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#output ApptestTestCase#output}. |

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.input"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInput Input { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#input ApptestTestCase#input}.

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.output"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionOutput Output { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#output ApptestTestCase#output}.

---

### ApptestTestCaseStepsActionCompareActionInput <a name="ApptestTestCaseStepsActionCompareActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInput {
    ApptestTestCaseStepsActionCompareActionInputFile File = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#file ApptestTestCase#file}. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.property.file"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFile File { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

### ApptestTestCaseStepsActionCompareActionInputFile <a name="ApptestTestCaseStepsActionCompareActionInputFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFile {
    ApptestTestCaseStepsActionCompareActionInputFileFileMetadata FileMetadata = null,
    string SourceLocation = null,
    string TargetLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.sourceLocation">SourceLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.targetLocation">TargetLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}. |

---

##### `FileMetadata`<sup>Optional</sup> <a name="FileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.fileMetadata"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileFileMetadata FileMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}.

---

##### `SourceLocation`<sup>Optional</sup> <a name="SourceLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.sourceLocation"></a>

```csharp
public string SourceLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}.

---

##### `TargetLocation`<sup>Optional</sup> <a name="TargetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.targetLocation"></a>

```csharp
public string TargetLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadata {
    ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc DatabaseCdc = null,
    IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[] DataSets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.databaseCdc">DatabaseCdc</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.dataSets">DataSets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}. |

---

##### `DatabaseCdc`<sup>Optional</sup> <a name="DatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.databaseCdc"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc DatabaseCdc { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}.

---

##### `DataSets`<sup>Optional</sup> <a name="DataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.dataSets"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[] DataSets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc {
    ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata SourceMetadata = null,
    ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata TargetMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.sourceMetadata">SourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.targetMetadata">TargetMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}. |

---

##### `SourceMetadata`<sup>Optional</sup> <a name="SourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.sourceMetadata"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata SourceMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}.

---

##### `TargetMetadata`<sup>Optional</sup> <a name="TargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.targetMetadata"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata TargetMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata {
    string CaptureTool = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.captureTool">CaptureTool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `CaptureTool`<sup>Optional</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.captureTool"></a>

```csharp
public string CaptureTool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata {
    string CaptureTool = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.captureTool">CaptureTool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `CaptureTool`<sup>Optional</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.captureTool"></a>

```csharp
public string CaptureTool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets {
    string Ccsid = null,
    string Format = null,
    double Length = null,
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.ccsid">Ccsid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#ccsid ApptestTestCase#ccsid}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#format ApptestTestCase#format}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.length">Length</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#length ApptestTestCase#length}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `Ccsid`<sup>Optional</sup> <a name="Ccsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.ccsid"></a>

```csharp
public string Ccsid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#ccsid ApptestTestCase#ccsid}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#format ApptestTestCase#format}.

---

##### `Length`<sup>Optional</sup> <a name="Length" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.length"></a>

```csharp
public double Length { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#length ApptestTestCase#length}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionOutput <a name="ApptestTestCaseStepsActionCompareActionOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionOutput {
    ApptestTestCaseStepsActionCompareActionOutputFile File = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#file ApptestTestCase#file}. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.property.file"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionOutputFile File { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

### ApptestTestCaseStepsActionCompareActionOutputFile <a name="ApptestTestCaseStepsActionCompareActionOutputFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionOutputFile {
    string FileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.property.fileLocation">FileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}. |

---

##### `FileLocation`<sup>Optional</sup> <a name="FileLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.property.fileLocation"></a>

```csharp
public string FileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}.

---

### ApptestTestCaseStepsActionMainframeAction <a name="ApptestTestCaseStepsActionMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeAction {
    ApptestTestCaseStepsActionMainframeActionActionType ActionType = null,
    ApptestTestCaseStepsActionMainframeActionProperties Properties = null,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.actionType">ActionType</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.actionType"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionActionType ActionType { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.properties"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionMainframeActionActionType <a name="ApptestTestCaseStepsActionMainframeActionActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionActionType {
    ApptestTestCaseStepsActionMainframeActionActionTypeBatch Batch = null,
    ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 Tn3270 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.batch">Batch</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.tn3270">Tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}. |

---

##### `Batch`<sup>Optional</sup> <a name="Batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.batch"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionActionTypeBatch Batch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}.

---

##### `Tn3270`<sup>Optional</sup> <a name="Tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.tn3270"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 Tn3270 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeBatch <a name="ApptestTestCaseStepsActionMainframeActionActionTypeBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionActionTypeBatch {
    string BatchJobName = null,
    System.Collections.Generic.IDictionary<string, string> BatchJobParameters = null,
    string[] ExportDataSetNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobName">BatchJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobParameters">BatchJobParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}. |

---

##### `BatchJobName`<sup>Optional</sup> <a name="BatchJobName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobName"></a>

```csharp
public string BatchJobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}.

---

##### `BatchJobParameters`<sup>Optional</sup> <a name="BatchJobParameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BatchJobParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}.

---

##### `ExportDataSetNames`<sup>Optional</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.exportDataSetNames"></a>

```csharp
public string[] ExportDataSetNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 {
    string[] ExportDataSetNames = null,
    ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script Script = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.script">Script</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#script ApptestTestCase#script}. |

---

##### `ExportDataSetNames`<sup>Optional</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.exportDataSetNames"></a>

```csharp
public string[] ExportDataSetNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.script"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script Script { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#script ApptestTestCase#script}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script {
    string ScriptLocation = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.scriptLocation">ScriptLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `ScriptLocation`<sup>Optional</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.scriptLocation"></a>

```csharp
public string ScriptLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionMainframeActionProperties <a name="ApptestTestCaseStepsActionMainframeActionProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionProperties {
    string DmsTaskArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.property.dmsTaskArn">DmsTaskArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}. |

---

##### `DmsTaskArn`<sup>Optional</sup> <a name="DmsTaskArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.property.dmsTaskArn"></a>

```csharp
public string DmsTaskArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}.

---

### ApptestTestCaseStepsActionResourceAction <a name="ApptestTestCaseStepsActionResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceAction {
    ApptestTestCaseStepsActionResourceActionCloudformationAction CloudformationAction = null,
    ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction M2ManagedApplicationAction = null,
    ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction M2NonManagedApplicationAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.cloudformationAction">CloudformationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2ManagedApplicationAction">M2ManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2NonManagedApplicationAction">M2NonManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}. |

---

##### `CloudformationAction`<sup>Optional</sup> <a name="CloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.cloudformationAction"></a>

```csharp
public ApptestTestCaseStepsActionResourceActionCloudformationAction CloudformationAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}.

---

##### `M2ManagedApplicationAction`<sup>Optional</sup> <a name="M2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2ManagedApplicationAction"></a>

```csharp
public ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction M2ManagedApplicationAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}.

---

##### `M2NonManagedApplicationAction`<sup>Optional</sup> <a name="M2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2NonManagedApplicationAction"></a>

```csharp
public ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction M2NonManagedApplicationAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}.

---

### ApptestTestCaseStepsActionResourceActionCloudformationAction <a name="ApptestTestCaseStepsActionResourceActionCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceActionCloudformationAction {
    string ActionType = null,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.actionType">ActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction {
    string ActionType = null,
    ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties Properties = null,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.actionType">ActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.properties"></a>

```csharp
public ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties {
    bool|IResolvable ForceStop = null,
    string ImportDataSetLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.forceStop">ForceStop</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.importDataSetLocation">ImportDataSetLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}. |

---

##### `ForceStop`<sup>Optional</sup> <a name="ForceStop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.forceStop"></a>

```csharp
public bool|IResolvable ForceStop { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}.

---

##### `ImportDataSetLocation`<sup>Optional</sup> <a name="ImportDataSetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.importDataSetLocation"></a>

```csharp
public string ImportDataSetLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}.

---

### ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction <a name="ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction {
    string ActionType = null,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.actionType">ActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApptestTestCaseLatestVersionOutputReference <a name="ApptestTestCaseLatestVersionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseLatestVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion">ApptestTestCaseLatestVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.internalValue"></a>

```csharp
public ApptestTestCaseLatestVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion">ApptestTestCaseLatestVersion</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata">PutSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata">PutTargetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetSourceMetadata">ResetSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetTargetMetadata">ResetTargetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceMetadata` <a name="PutSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata"></a>

```csharp
private void PutSourceMetadata(ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---

##### `PutTargetMetadata` <a name="PutTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata"></a>

```csharp
private void PutTargetMetadata(ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---

##### `ResetSourceMetadata` <a name="ResetSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetSourceMetadata"></a>

```csharp
private void ResetSourceMetadata()
```

##### `ResetTargetMetadata` <a name="ResetTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetTargetMetadata"></a>

```csharp
private void ResetTargetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata">SourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata">TargetMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadataInput">SourceMetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadataInput">TargetMetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceMetadata`<sup>Required</sup> <a name="SourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference SourceMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a>

---

##### `TargetMetadata`<sup>Required</sup> <a name="TargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference TargetMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a>

---

##### `SourceMetadataInput`<sup>Optional</sup> <a name="SourceMetadataInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadataInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata SourceMetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---

##### `TargetMetadataInput`<sup>Optional</sup> <a name="TargetMetadataInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadataInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata TargetMetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetCaptureTool">ResetCaptureTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaptureTool` <a name="ResetCaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetCaptureTool"></a>

```csharp
private void ResetCaptureTool()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureToolInput">CaptureToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool">CaptureTool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaptureToolInput`<sup>Optional</sup> <a name="CaptureToolInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureToolInput"></a>

```csharp
public string CaptureToolInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CaptureTool`<sup>Required</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool"></a>

```csharp
public string CaptureTool { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetCaptureTool">ResetCaptureTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaptureTool` <a name="ResetCaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetCaptureTool"></a>

```csharp
private void ResetCaptureTool()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureToolInput">CaptureToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool">CaptureTool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaptureToolInput`<sup>Optional</sup> <a name="CaptureToolInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureToolInput"></a>

```csharp
public string CaptureToolInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CaptureTool`<sup>Required</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool"></a>

```csharp
public string CaptureTool { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get"></a>

```csharp
private ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetCcsid">ResetCcsid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetLength">ResetLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCcsid` <a name="ResetCcsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetCcsid"></a>

```csharp
private void ResetCcsid()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetLength` <a name="ResetLength" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetLength"></a>

```csharp
private void ResetLength()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsidInput">CcsidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.lengthInput">LengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid">Ccsid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CcsidInput`<sup>Optional</sup> <a name="CcsidInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsidInput"></a>

```csharp
public string CcsidInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.lengthInput"></a>

```csharp
public double LengthInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Ccsid`<sup>Required</sup> <a name="Ccsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid"></a>

```csharp
public string Ccsid { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc">PutDatabaseCdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets">PutDataSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDatabaseCdc">ResetDatabaseCdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDataSets">ResetDataSets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseCdc` <a name="PutDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc"></a>

```csharp
private void PutDatabaseCdc(ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---

##### `PutDataSets` <a name="PutDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets"></a>

```csharp
private void PutDataSets(IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]

---

##### `ResetDatabaseCdc` <a name="ResetDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDatabaseCdc"></a>

```csharp
private void ResetDatabaseCdc()
```

##### `ResetDataSets` <a name="ResetDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDataSets"></a>

```csharp
private void ResetDataSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc">DatabaseCdc</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets">DataSets</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdcInput">DatabaseCdcInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSetsInput">DataSetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseCdc`<sup>Required</sup> <a name="DatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference DatabaseCdc { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a>

---

##### `DataSets`<sup>Required</sup> <a name="DataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList DataSets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a>

---

##### `DatabaseCdcInput`<sup>Optional</sup> <a name="DatabaseCdcInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdcInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc DatabaseCdcInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---

##### `DataSetsInput`<sup>Optional</sup> <a name="DataSetsInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSetsInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[] DataSetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata">PutFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetFileMetadata">ResetFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetSourceLocation">ResetSourceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetTargetLocation">ResetTargetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileMetadata` <a name="PutFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata"></a>

```csharp
private void PutFileMetadata(ApptestTestCaseStepsActionCompareActionInputFileFileMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---

##### `ResetFileMetadata` <a name="ResetFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetFileMetadata"></a>

```csharp
private void ResetFileMetadata()
```

##### `ResetSourceLocation` <a name="ResetSourceLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetSourceLocation"></a>

```csharp
private void ResetSourceLocation()
```

##### `ResetTargetLocation` <a name="ResetTargetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetTargetLocation"></a>

```csharp
private void ResetTargetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadataInput">FileMetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocationInput">SourceLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocationInput">TargetLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation">SourceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation">TargetLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileMetadata`<sup>Required</sup> <a name="FileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference FileMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a>

---

##### `FileMetadataInput`<sup>Optional</sup> <a name="FileMetadataInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadataInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFileFileMetadata FileMetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---

##### `SourceLocationInput`<sup>Optional</sup> <a name="SourceLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocationInput"></a>

```csharp
public string SourceLocationInput { get; }
```

- *Type:* string

---

##### `TargetLocationInput`<sup>Optional</sup> <a name="TargetLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocationInput"></a>

```csharp
public string TargetLocationInput { get; }
```

- *Type:* string

---

##### `SourceLocation`<sup>Required</sup> <a name="SourceLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation"></a>

```csharp
public string SourceLocation { get; }
```

- *Type:* string

---

##### `TargetLocation`<sup>Required</sup> <a name="TargetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation"></a>

```csharp
public string TargetLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

---


### ApptestTestCaseStepsActionCompareActionInputOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resetFile">ResetFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile"></a>

```csharp
private void PutFile(ApptestTestCaseStepsActionCompareActionInputFile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference">ApptestTestCaseStepsActionCompareActionInputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fileInput">FileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.file"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputFileOutputReference File { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference">ApptestTestCaseStepsActionCompareActionInputFileOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fileInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInputFile FileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

---


### ApptestTestCaseStepsActionCompareActionOutputFileOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputFileOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionOutputFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resetFileLocation">ResetFileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileLocation` <a name="ResetFileLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resetFileLocation"></a>

```csharp
private void ResetFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocationInput">FileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation">FileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileLocationInput`<sup>Optional</sup> <a name="FileLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocationInput"></a>

```csharp
public string FileLocationInput { get; }
```

- *Type:* string

---

##### `FileLocation`<sup>Required</sup> <a name="FileLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation"></a>

```csharp
public string FileLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionOutputFile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

---


### ApptestTestCaseStepsActionCompareActionOutputOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resetFile">ResetFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile"></a>

```csharp
private void PutFile(ApptestTestCaseStepsActionCompareActionOutputFile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference">ApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fileInput">FileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionOutputFileOutputReference File { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference">ApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fileInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionOutputFile FileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionOutput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

---


### ApptestTestCaseStepsActionCompareActionOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionCompareActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput"></a>

```csharp
private void PutInput(ApptestTestCaseStepsActionCompareActionInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

---

##### `PutOutput` <a name="PutOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput"></a>

```csharp
private void PutOutput(ApptestTestCaseStepsActionCompareActionOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

---

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.input">Input</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference">ApptestTestCaseStepsActionCompareActionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.output">Output</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference">ApptestTestCaseStepsActionCompareActionOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.inputInput">InputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.outputInput">OutputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.input"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionInputOutputReference Input { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference">ApptestTestCaseStepsActionCompareActionInputOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.output"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionOutputOutputReference Output { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference">ApptestTestCaseStepsActionCompareActionOutputOutputReference</a>

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.inputInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionInput InputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.outputInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareActionOutput OutputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobName">ResetBatchJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobParameters">ResetBatchJobParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetExportDataSetNames">ResetExportDataSetNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchJobName` <a name="ResetBatchJobName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobName"></a>

```csharp
private void ResetBatchJobName()
```

##### `ResetBatchJobParameters` <a name="ResetBatchJobParameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobParameters"></a>

```csharp
private void ResetBatchJobParameters()
```

##### `ResetExportDataSetNames` <a name="ResetExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetExportDataSetNames"></a>

```csharp
private void ResetExportDataSetNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobNameInput">BatchJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParametersInput">BatchJobParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNamesInput">ExportDataSetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName">BatchJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters">BatchJobParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchJobNameInput`<sup>Optional</sup> <a name="BatchJobNameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobNameInput"></a>

```csharp
public string BatchJobNameInput { get; }
```

- *Type:* string

---

##### `BatchJobParametersInput`<sup>Optional</sup> <a name="BatchJobParametersInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BatchJobParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExportDataSetNamesInput`<sup>Optional</sup> <a name="ExportDataSetNamesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNamesInput"></a>

```csharp
public string[] ExportDataSetNamesInput { get; }
```

- *Type:* string[]

---

##### `BatchJobName`<sup>Required</sup> <a name="BatchJobName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName"></a>

```csharp
public string BatchJobName { get; }
```

- *Type:* string

---

##### `BatchJobParameters`<sup>Required</sup> <a name="BatchJobParameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BatchJobParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExportDataSetNames`<sup>Required</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames"></a>

```csharp
public string[] ExportDataSetNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionActionTypeBatch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch">PutBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270">PutTn3270</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetBatch">ResetBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetTn3270">ResetTn3270</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatch` <a name="PutBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch"></a>

```csharp
private void PutBatch(ApptestTestCaseStepsActionMainframeActionActionTypeBatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---

##### `PutTn3270` <a name="PutTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270"></a>

```csharp
private void PutTn3270(ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---

##### `ResetBatch` <a name="ResetBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetBatch"></a>

```csharp
private void ResetBatch()
```

##### `ResetTn3270` <a name="ResetTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetTn3270"></a>

```csharp
private void ResetTn3270()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch">Batch</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270">Tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batchInput">BatchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270Input">Tn3270Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Batch`<sup>Required</sup> <a name="Batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference Batch { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a>

---

##### `Tn3270`<sup>Required</sup> <a name="Tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference Tn3270 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a>

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batchInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionActionTypeBatch BatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---

##### `Tn3270Input`<sup>Optional</sup> <a name="Tn3270Input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270Input"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 Tn3270Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionActionType InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript">PutScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetExportDataSetNames">ResetExportDataSetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetScript">ResetScript</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScript` <a name="PutScript" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript"></a>

```csharp
private void PutScript(ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---

##### `ResetExportDataSetNames` <a name="ResetExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetExportDataSetNames"></a>

```csharp
private void ResetExportDataSetNames()
```

##### `ResetScript` <a name="ResetScript" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetScript"></a>

```csharp
private void ResetScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script">Script</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNamesInput">ExportDataSetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.scriptInput">ScriptInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference Script { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a>

---

##### `ExportDataSetNamesInput`<sup>Optional</sup> <a name="ExportDataSetNamesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNamesInput"></a>

```csharp
public string[] ExportDataSetNamesInput { get; }
```

- *Type:* string[]

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.scriptInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script ScriptInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---

##### `ExportDataSetNames`<sup>Required</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames"></a>

```csharp
public string[] ExportDataSetNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetScriptLocation">ResetScriptLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScriptLocation` <a name="ResetScriptLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetScriptLocation"></a>

```csharp
private void ResetScriptLocation()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocationInput">ScriptLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptLocationInput`<sup>Optional</sup> <a name="ScriptLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocationInput"></a>

```csharp
public string ScriptLocationInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation"></a>

```csharp
public string ScriptLocation { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---


### ApptestTestCaseStepsActionMainframeActionOutputReference <a name="ApptestTestCaseStepsActionMainframeActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType">PutActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionType` <a name="PutActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType"></a>

```csharp
private void PutActionType(ApptestTestCaseStepsActionMainframeActionActionType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties"></a>

```csharp
private void PutProperties(ApptestTestCaseStepsActionMainframeActionProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

---

##### `ResetActionType` <a name="ResetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetActionType"></a>

```csharp
private void ResetActionType()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType">ActionType</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference ActionType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.properties"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionTypeInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionActionType ActionTypeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.propertiesInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionProperties PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

---


### ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference <a name="ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resetDmsTaskArn">ResetDmsTaskArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDmsTaskArn` <a name="ResetDmsTaskArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resetDmsTaskArn"></a>

```csharp
private void ResetDmsTaskArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArnInput">DmsTaskArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn">DmsTaskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DmsTaskArnInput`<sup>Optional</sup> <a name="DmsTaskArnInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArnInput"></a>

```csharp
public string DmsTaskArnInput { get; }
```

- *Type:* string

---

##### `DmsTaskArn`<sup>Required</sup> <a name="DmsTaskArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn"></a>

```csharp
public string DmsTaskArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeActionProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

---


### ApptestTestCaseStepsActionOutputReference <a name="ApptestTestCaseStepsActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction">PutCompareAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction">PutMainframeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction">PutResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetCompareAction">ResetCompareAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetMainframeAction">ResetMainframeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetResourceAction">ResetResourceAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompareAction` <a name="PutCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction"></a>

```csharp
private void PutCompareAction(ApptestTestCaseStepsActionCompareAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

---

##### `PutMainframeAction` <a name="PutMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction"></a>

```csharp
private void PutMainframeAction(ApptestTestCaseStepsActionMainframeAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

---

##### `PutResourceAction` <a name="PutResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction"></a>

```csharp
private void PutResourceAction(ApptestTestCaseStepsActionResourceAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

---

##### `ResetCompareAction` <a name="ResetCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetCompareAction"></a>

```csharp
private void ResetCompareAction()
```

##### `ResetMainframeAction` <a name="ResetMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetMainframeAction"></a>

```csharp
private void ResetMainframeAction()
```

##### `ResetResourceAction` <a name="ResetResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetResourceAction"></a>

```csharp
private void ResetResourceAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareAction">CompareAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference">ApptestTestCaseStepsActionCompareActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeAction">MainframeAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference">ApptestTestCaseStepsActionMainframeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceAction">ResourceAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference">ApptestTestCaseStepsActionResourceActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareActionInput">CompareActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeActionInput">MainframeActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceActionInput">ResourceActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompareAction`<sup>Required</sup> <a name="CompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareAction"></a>

```csharp
public ApptestTestCaseStepsActionCompareActionOutputReference CompareAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference">ApptestTestCaseStepsActionCompareActionOutputReference</a>

---

##### `MainframeAction`<sup>Required</sup> <a name="MainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeAction"></a>

```csharp
public ApptestTestCaseStepsActionMainframeActionOutputReference MainframeAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference">ApptestTestCaseStepsActionMainframeActionOutputReference</a>

---

##### `ResourceAction`<sup>Required</sup> <a name="ResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceAction"></a>

```csharp
public ApptestTestCaseStepsActionResourceActionOutputReference ResourceAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference">ApptestTestCaseStepsActionResourceActionOutputReference</a>

---

##### `CompareActionInput`<sup>Optional</sup> <a name="CompareActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareActionInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionCompareAction CompareActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

---

##### `MainframeActionInput`<sup>Optional</sup> <a name="MainframeActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeActionInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionMainframeAction MainframeActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

---

##### `ResourceActionInput`<sup>Optional</sup> <a name="ResourceActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceActionInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceAction ResourceActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

---


### ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionType` <a name="ResetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetActionType"></a>

```csharp
private void ResetActionType()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceActionCloudformationAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---


### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties"></a>

```csharp
private void PutProperties(ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---

##### `ResetActionType` <a name="ResetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetActionType"></a>

```csharp
private void ResetActionType()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties"></a>

```csharp
public ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.propertiesInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---


### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetForceStop">ResetForceStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetImportDataSetLocation">ResetImportDataSetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForceStop` <a name="ResetForceStop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetForceStop"></a>

```csharp
private void ResetForceStop()
```

##### `ResetImportDataSetLocation` <a name="ResetImportDataSetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetImportDataSetLocation"></a>

```csharp
private void ResetImportDataSetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStopInput">ForceStopInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocationInput">ImportDataSetLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop">ForceStop</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation">ImportDataSetLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForceStopInput`<sup>Optional</sup> <a name="ForceStopInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStopInput"></a>

```csharp
public bool|IResolvable ForceStopInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ImportDataSetLocationInput`<sup>Optional</sup> <a name="ImportDataSetLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocationInput"></a>

```csharp
public string ImportDataSetLocationInput { get; }
```

- *Type:* string

---

##### `ForceStop`<sup>Required</sup> <a name="ForceStop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop"></a>

```csharp
public bool|IResolvable ForceStop { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ImportDataSetLocation`<sup>Required</sup> <a name="ImportDataSetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation"></a>

```csharp
public string ImportDataSetLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---


### ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionType` <a name="ResetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetActionType"></a>

```csharp
private void ResetActionType()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---


### ApptestTestCaseStepsActionResourceActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsActionResourceActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction">PutCloudformationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction">PutM2ManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction">PutM2NonManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetCloudformationAction">ResetCloudformationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2ManagedApplicationAction">ResetM2ManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2NonManagedApplicationAction">ResetM2NonManagedApplicationAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudformationAction` <a name="PutCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction"></a>

```csharp
private void PutCloudformationAction(ApptestTestCaseStepsActionResourceActionCloudformationAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---

##### `PutM2ManagedApplicationAction` <a name="PutM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction"></a>

```csharp
private void PutM2ManagedApplicationAction(ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---

##### `PutM2NonManagedApplicationAction` <a name="PutM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction"></a>

```csharp
private void PutM2NonManagedApplicationAction(ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---

##### `ResetCloudformationAction` <a name="ResetCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetCloudformationAction"></a>

```csharp
private void ResetCloudformationAction()
```

##### `ResetM2ManagedApplicationAction` <a name="ResetM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2ManagedApplicationAction"></a>

```csharp
private void ResetM2ManagedApplicationAction()
```

##### `ResetM2NonManagedApplicationAction` <a name="ResetM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2NonManagedApplicationAction"></a>

```csharp
private void ResetM2NonManagedApplicationAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction">CloudformationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction">M2ManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction">M2NonManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationActionInput">CloudformationActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationActionInput">M2ManagedApplicationActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationActionInput">M2NonManagedApplicationActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudformationAction`<sup>Required</sup> <a name="CloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction"></a>

```csharp
public ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference CloudformationAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a>

---

##### `M2ManagedApplicationAction`<sup>Required</sup> <a name="M2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction"></a>

```csharp
public ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference M2ManagedApplicationAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a>

---

##### `M2NonManagedApplicationAction`<sup>Required</sup> <a name="M2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction"></a>

```csharp
public ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference M2NonManagedApplicationAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a>

---

##### `CloudformationActionInput`<sup>Optional</sup> <a name="CloudformationActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationActionInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceActionCloudformationAction CloudformationActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---

##### `M2ManagedApplicationActionInput`<sup>Optional</sup> <a name="M2ManagedApplicationActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationActionInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction M2ManagedApplicationActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---

##### `M2NonManagedApplicationActionInput`<sup>Optional</sup> <a name="M2NonManagedApplicationActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationActionInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction M2NonManagedApplicationActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseStepsActionResourceAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

---


### ApptestTestCaseStepsList <a name="ApptestTestCaseStepsList" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get"></a>

```csharp
private ApptestTestCaseStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseSteps[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]

---


### ApptestTestCaseStepsOutputReference <a name="ApptestTestCaseStepsOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApptestTestCaseStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction"></a>

```csharp
private void PutAction(ApptestTestCaseStepsAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference">ApptestTestCaseStepsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.action"></a>

```csharp
public ApptestTestCaseStepsActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference">ApptestTestCaseStepsActionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.actionInput"></a>

```csharp
public IResolvable|ApptestTestCaseStepsAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApptestTestCaseSteps InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>

---



