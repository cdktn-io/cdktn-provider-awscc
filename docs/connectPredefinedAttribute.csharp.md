# `connectPredefinedAttribute` Submodule <a name="`connectPredefinedAttribute` Submodule" id="@cdktn/provider-awscc.connectPredefinedAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPredefinedAttribute <a name="ConnectPredefinedAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute awscc_connect_predefined_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPredefinedAttribute(Construct Scope, string Id, ConnectPredefinedAttributeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig">ConnectPredefinedAttributeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig">ConnectPredefinedAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration">PutAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration">ResetAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes">ResetPurposes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributeConfiguration` <a name="PutAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration"></a>

```csharp
private void PutAttributeConfiguration(ConnectPredefinedAttributeAttributeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---

##### `PutValues` <a name="PutValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues"></a>

```csharp
private void PutValues(ConnectPredefinedAttributeValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---

##### `ResetAttributeConfiguration` <a name="ResetAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration"></a>

```csharp
private void ResetAttributeConfiguration()
```

##### `ResetPurposes` <a name="ResetPurposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes"></a>

```csharp
private void ResetPurposes()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues"></a>

```csharp
private void ResetValues()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectPredefinedAttribute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectPredefinedAttribute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectPredefinedAttribute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectPredefinedAttribute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectPredefinedAttribute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectPredefinedAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectPredefinedAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration">AttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput">AttributeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput">PurposesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput">ValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes">Purposes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttributeConfiguration`<sup>Required</sup> <a name="AttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration"></a>

```csharp
public ConnectPredefinedAttributeAttributeConfigurationOutputReference AttributeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion"></a>

```csharp
public string LastModifiedRegion { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values"></a>

```csharp
public ConnectPredefinedAttributeValuesOutputReference Values { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a>

---

##### `AttributeConfigurationInput`<sup>Optional</sup> <a name="AttributeConfigurationInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput"></a>

```csharp
public IResolvable|ConnectPredefinedAttributeAttributeConfiguration AttributeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PurposesInput`<sup>Optional</sup> <a name="PurposesInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput"></a>

```csharp
public string[] PurposesInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput"></a>

```csharp
public IResolvable|ConnectPredefinedAttributeValues ValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Purposes`<sup>Required</sup> <a name="Purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes"></a>

```csharp
public string[] Purposes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPredefinedAttributeAttributeConfiguration <a name="ConnectPredefinedAttributeAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPredefinedAttributeAttributeConfiguration {
    bool|IResolvable EnableValueValidationOnAssociation = null,
    bool|IResolvable IsReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation">EnableValueValidationOnAssociation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables customers to enforce strict validation on the specific values that this predefined attribute can hold. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly">IsReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Allows the predefined attribute to show up and be managed in the Amazon Connect UI. |

---

##### `EnableValueValidationOnAssociation`<sup>Optional</sup> <a name="EnableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation"></a>

```csharp
public bool|IResolvable EnableValueValidationOnAssociation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables customers to enforce strict validation on the specific values that this predefined attribute can hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute#enable_value_validation_on_association ConnectPredefinedAttribute#enable_value_validation_on_association}

---

##### `IsReadOnly`<sup>Optional</sup> <a name="IsReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly"></a>

```csharp
public bool|IResolvable IsReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Allows the predefined attribute to show up and be managed in the Amazon Connect UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute#is_read_only ConnectPredefinedAttribute#is_read_only}

---

### ConnectPredefinedAttributeConfig <a name="ConnectPredefinedAttributeConfig" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPredefinedAttributeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    string Name,
    ConnectPredefinedAttributeAttributeConfiguration AttributeConfiguration = null,
    string[] Purposes = null,
    ConnectPredefinedAttributeValues Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name">Name</a></code> | <code>string</code> | The name of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration">AttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes">Purposes</a></code> | <code>string[]</code> | The assigned purposes of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | The values of a predefined attribute. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute#instance_arn ConnectPredefinedAttribute#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute#name ConnectPredefinedAttribute#name}

---

##### `AttributeConfiguration`<sup>Optional</sup> <a name="AttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration"></a>

```csharp
public ConnectPredefinedAttributeAttributeConfiguration AttributeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute#attribute_configuration ConnectPredefinedAttribute#attribute_configuration}

---

##### `Purposes`<sup>Optional</sup> <a name="Purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes"></a>

```csharp
public string[] Purposes { get; set; }
```

- *Type:* string[]

The assigned purposes of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute#purposes ConnectPredefinedAttribute#purposes}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values"></a>

```csharp
public ConnectPredefinedAttributeValues Values { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

The values of a predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute#values ConnectPredefinedAttribute#values}

---

### ConnectPredefinedAttributeValues <a name="ConnectPredefinedAttributeValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPredefinedAttributeValues {
    string[] StringList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList">StringList</a></code> | <code>string[]</code> | Predefined attribute values of type string list. |

---

##### `StringList`<sup>Optional</sup> <a name="StringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList"></a>

```csharp
public string[] StringList { get; set; }
```

- *Type:* string[]

Predefined attribute values of type string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_predefined_attribute#string_list ConnectPredefinedAttribute#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectPredefinedAttributeAttributeConfigurationOutputReference <a name="ConnectPredefinedAttributeAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPredefinedAttributeAttributeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation">ResetEnableValueValidationOnAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly">ResetIsReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableValueValidationOnAssociation` <a name="ResetEnableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation"></a>

```csharp
private void ResetEnableValueValidationOnAssociation()
```

##### `ResetIsReadOnly` <a name="ResetIsReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly"></a>

```csharp
private void ResetIsReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput">EnableValueValidationOnAssociationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput">IsReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation">EnableValueValidationOnAssociation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableValueValidationOnAssociationInput`<sup>Optional</sup> <a name="EnableValueValidationOnAssociationInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput"></a>

```csharp
public bool|IResolvable EnableValueValidationOnAssociationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsReadOnlyInput`<sup>Optional</sup> <a name="IsReadOnlyInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput"></a>

```csharp
public bool|IResolvable IsReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableValueValidationOnAssociation`<sup>Required</sup> <a name="EnableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation"></a>

```csharp
public bool|IResolvable EnableValueValidationOnAssociation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly"></a>

```csharp
public bool|IResolvable IsReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectPredefinedAttributeAttributeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---


### ConnectPredefinedAttributeValuesOutputReference <a name="ConnectPredefinedAttributeValuesOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPredefinedAttributeValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList">ResetStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStringList` <a name="ResetStringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList"></a>

```csharp
private void ResetStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput">StringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList">StringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StringListInput`<sup>Optional</sup> <a name="StringListInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput"></a>

```csharp
public string[] StringListInput { get; }
```

- *Type:* string[]

---

##### `StringList`<sup>Required</sup> <a name="StringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList"></a>

```csharp
public string[] StringList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectPredefinedAttributeValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---



