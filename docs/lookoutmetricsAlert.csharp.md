# `lookoutmetricsAlert` Submodule <a name="`lookoutmetricsAlert` Submodule" id="@cdktn/provider-awscc.lookoutmetricsAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutmetricsAlert <a name="LookoutmetricsAlert" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert awscc_lookoutmetrics_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutmetricsAlert(Construct Scope, string Id, LookoutmetricsAlertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig">LookoutmetricsAlertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig">LookoutmetricsAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertDescription">ResetAlertDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertName">ResetAlertName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction"></a>

```csharp
private void PutAction(LookoutmetricsAlertAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---

##### `ResetAlertDescription` <a name="ResetAlertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertDescription"></a>

```csharp
private void ResetAlertDescription()
```

##### `ResetAlertName` <a name="ResetAlertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertName"></a>

```csharp
private void ResetAlertName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LookoutmetricsAlert resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LookoutmetricsAlert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LookoutmetricsAlert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LookoutmetricsAlert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LookoutmetricsAlert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LookoutmetricsAlert resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LookoutmetricsAlert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LookoutmetricsAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LookoutmetricsAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference">LookoutmetricsAlertActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescriptionInput">AlertDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertNameInput">AlertNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThresholdInput">AlertSensitivityThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArnInput">AnomalyDetectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescription">AlertDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertName">AlertName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThreshold">AlertSensitivityThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArn">AnomalyDetectorArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.action"></a>

```csharp
public LookoutmetricsAlertActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference">LookoutmetricsAlertActionOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.actionInput"></a>

```csharp
public IResolvable|LookoutmetricsAlertAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---

##### `AlertDescriptionInput`<sup>Optional</sup> <a name="AlertDescriptionInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescriptionInput"></a>

```csharp
public string AlertDescriptionInput { get; }
```

- *Type:* string

---

##### `AlertNameInput`<sup>Optional</sup> <a name="AlertNameInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertNameInput"></a>

```csharp
public string AlertNameInput { get; }
```

- *Type:* string

---

##### `AlertSensitivityThresholdInput`<sup>Optional</sup> <a name="AlertSensitivityThresholdInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThresholdInput"></a>

```csharp
public double AlertSensitivityThresholdInput { get; }
```

- *Type:* double

---

##### `AnomalyDetectorArnInput`<sup>Optional</sup> <a name="AnomalyDetectorArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArnInput"></a>

```csharp
public string AnomalyDetectorArnInput { get; }
```

- *Type:* string

---

##### `AlertDescription`<sup>Required</sup> <a name="AlertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescription"></a>

```csharp
public string AlertDescription { get; }
```

- *Type:* string

---

##### `AlertName`<sup>Required</sup> <a name="AlertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertName"></a>

```csharp
public string AlertName { get; }
```

- *Type:* string

---

##### `AlertSensitivityThreshold`<sup>Required</sup> <a name="AlertSensitivityThreshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThreshold"></a>

```csharp
public double AlertSensitivityThreshold { get; }
```

- *Type:* double

---

##### `AnomalyDetectorArn`<sup>Required</sup> <a name="AnomalyDetectorArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArn"></a>

```csharp
public string AnomalyDetectorArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutmetricsAlertAction <a name="LookoutmetricsAlertAction" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutmetricsAlertAction {
    LookoutmetricsAlertActionLambdaConfiguration LambdaConfiguration = null,
    LookoutmetricsAlertActionSnsConfiguration SnsConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.lambdaConfiguration">LambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | Configuration options for a Lambda alert action. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.snsConfiguration">SnsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | Configuration options for an SNS alert action. |

---

##### `LambdaConfiguration`<sup>Optional</sup> <a name="LambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.lambdaConfiguration"></a>

```csharp
public LookoutmetricsAlertActionLambdaConfiguration LambdaConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

Configuration options for a Lambda alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#lambda_configuration LookoutmetricsAlert#lambda_configuration}

---

##### `SnsConfiguration`<sup>Optional</sup> <a name="SnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.snsConfiguration"></a>

```csharp
public LookoutmetricsAlertActionSnsConfiguration SnsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

Configuration options for an SNS alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#sns_configuration LookoutmetricsAlert#sns_configuration}

---

### LookoutmetricsAlertActionLambdaConfiguration <a name="LookoutmetricsAlertActionLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutmetricsAlertActionLambdaConfiguration {
    string LambdaArn = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | ARN of a Lambda to send alert notifications to. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | ARN of an IAM role that LookoutMetrics should assume to access the Lambda function. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

ARN of a Lambda to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#lambda_arn LookoutmetricsAlert#lambda_arn}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

ARN of an IAM role that LookoutMetrics should assume to access the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

### LookoutmetricsAlertActionSnsConfiguration <a name="LookoutmetricsAlertActionSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutmetricsAlertActionSnsConfiguration {
    string RoleArn = null,
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | ARN of an IAM role that LookoutMetrics should assume to access the SNS topic. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | ARN of an SNS topic to send alert notifications to. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

ARN of an IAM role that LookoutMetrics should assume to access the SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

ARN of an SNS topic to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#sns_topic_arn LookoutmetricsAlert#sns_topic_arn}

---

### LookoutmetricsAlertConfig <a name="LookoutmetricsAlertConfig" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutmetricsAlertConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    LookoutmetricsAlertAction Action,
    double AlertSensitivityThreshold,
    string AnomalyDetectorArn,
    string AlertDescription = null,
    string AlertName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | The action to be taken by the alert when an anomaly is detected. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertSensitivityThreshold">AlertSensitivityThreshold</a></code> | <code>double</code> | A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.anomalyDetectorArn">AnomalyDetectorArn</a></code> | <code>string</code> | The Amazon resource name (ARN) of the Anomaly Detector to alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertDescription">AlertDescription</a></code> | <code>string</code> | A description for the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertName">AlertName</a></code> | <code>string</code> | The name of the alert. If not provided, a name is generated automatically. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.action"></a>

```csharp
public LookoutmetricsAlertAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

The action to be taken by the alert when an anomaly is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#action LookoutmetricsAlert#action}

---

##### `AlertSensitivityThreshold`<sup>Required</sup> <a name="AlertSensitivityThreshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertSensitivityThreshold"></a>

```csharp
public double AlertSensitivityThreshold { get; set; }
```

- *Type:* double

A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#alert_sensitivity_threshold LookoutmetricsAlert#alert_sensitivity_threshold}

---

##### `AnomalyDetectorArn`<sup>Required</sup> <a name="AnomalyDetectorArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.anomalyDetectorArn"></a>

```csharp
public string AnomalyDetectorArn { get; set; }
```

- *Type:* string

The Amazon resource name (ARN) of the Anomaly Detector to alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#anomaly_detector_arn LookoutmetricsAlert#anomaly_detector_arn}

---

##### `AlertDescription`<sup>Optional</sup> <a name="AlertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertDescription"></a>

```csharp
public string AlertDescription { get; set; }
```

- *Type:* string

A description for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#alert_description LookoutmetricsAlert#alert_description}

---

##### `AlertName`<sup>Optional</sup> <a name="AlertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertName"></a>

```csharp
public string AlertName { get; set; }
```

- *Type:* string

The name of the alert. If not provided, a name is generated automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lookoutmetrics_alert#alert_name LookoutmetricsAlert#alert_name}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutmetricsAlertActionLambdaConfigurationOutputReference <a name="LookoutmetricsAlertActionLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutmetricsAlertActionLambdaConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetLambdaArn"></a>

```csharp
private void ResetLambdaArn()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LookoutmetricsAlertActionLambdaConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---


### LookoutmetricsAlertActionOutputReference <a name="LookoutmetricsAlertActionOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutmetricsAlertActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration">PutLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration">PutSnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetLambdaConfiguration">ResetLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetSnsConfiguration">ResetSnsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaConfiguration` <a name="PutLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration"></a>

```csharp
private void PutLambdaConfiguration(LookoutmetricsAlertActionLambdaConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---

##### `PutSnsConfiguration` <a name="PutSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration"></a>

```csharp
private void PutSnsConfiguration(LookoutmetricsAlertActionSnsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---

##### `ResetLambdaConfiguration` <a name="ResetLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetLambdaConfiguration"></a>

```csharp
private void ResetLambdaConfiguration()
```

##### `ResetSnsConfiguration` <a name="ResetSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetSnsConfiguration"></a>

```csharp
private void ResetSnsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfiguration">LambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference">LookoutmetricsAlertActionLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfiguration">SnsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference">LookoutmetricsAlertActionSnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfigurationInput">LambdaConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfigurationInput">SnsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaConfiguration`<sup>Required</sup> <a name="LambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfiguration"></a>

```csharp
public LookoutmetricsAlertActionLambdaConfigurationOutputReference LambdaConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference">LookoutmetricsAlertActionLambdaConfigurationOutputReference</a>

---

##### `SnsConfiguration`<sup>Required</sup> <a name="SnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfiguration"></a>

```csharp
public LookoutmetricsAlertActionSnsConfigurationOutputReference SnsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference">LookoutmetricsAlertActionSnsConfigurationOutputReference</a>

---

##### `LambdaConfigurationInput`<sup>Optional</sup> <a name="LambdaConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfigurationInput"></a>

```csharp
public IResolvable|LookoutmetricsAlertActionLambdaConfiguration LambdaConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---

##### `SnsConfigurationInput`<sup>Optional</sup> <a name="SnsConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfigurationInput"></a>

```csharp
public IResolvable|LookoutmetricsAlertActionSnsConfiguration SnsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LookoutmetricsAlertAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---


### LookoutmetricsAlertActionSnsConfigurationOutputReference <a name="LookoutmetricsAlertActionSnsConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LookoutmetricsAlertActionSnsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LookoutmetricsAlertActionSnsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---



