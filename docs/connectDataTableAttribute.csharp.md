# `connectDataTableAttribute` Submodule <a name="`connectDataTableAttribute` Submodule" id="@cdktn/provider-awscc.connectDataTableAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableAttribute <a name="ConnectDataTableAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute awscc_connect_data_table_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableAttribute(Construct Scope, string Id, ConnectDataTableAttributeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig">ConnectDataTableAttributeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig">ConnectDataTableAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation">PutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation">ResetValidation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutValidation` <a name="PutValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation"></a>

```csharp
private void PutValidation(ConnectDataTableAttributeValidation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetValidation` <a name="ResetValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation"></a>

```csharp
private void ResetValidation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectDataTableAttribute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectDataTableAttribute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectDataTableAttribute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectDataTableAttribute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectDataTableAttribute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectDataTableAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId">AttributeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion">LockVersion</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput">DataTableArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput">PrimaryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput">ValidationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn">DataTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttributeId`<sup>Required</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId"></a>

```csharp
public string AttributeId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion"></a>

```csharp
public string LastModifiedRegion { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `LockVersion`<sup>Required</sup> <a name="LockVersion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion"></a>

```csharp
public ConnectDataTableAttributeLockVersionOutputReference LockVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a>

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation"></a>

```csharp
public ConnectDataTableAttributeValidationOutputReference Validation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a>

---

##### `DataTableArnInput`<sup>Optional</sup> <a name="DataTableArnInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput"></a>

```csharp
public string DataTableArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput"></a>

```csharp
public bool|IResolvable PrimaryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput"></a>

```csharp
public IResolvable|ConnectDataTableAttributeValidation ValidationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `DataTableArn`<sup>Required</sup> <a name="DataTableArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn"></a>

```csharp
public string DataTableArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableAttributeConfig <a name="ConnectDataTableAttributeConfig" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableAttributeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataTableArn,
    string InstanceArn,
    string Name,
    string ValueType,
    string Description = null,
    bool|IResolvable Primary = null,
    ConnectDataTableAttributeValidation Validation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn">DataTableArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType">ValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataTableArn`<sup>Required</sup> <a name="DataTableArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn"></a>

```csharp
public string DataTableArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}.

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}.

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}.

---

##### `Validation`<sup>Optional</sup> <a name="Validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation"></a>

```csharp
public ConnectDataTableAttributeValidation Validation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}.

---

### ConnectDataTableAttributeLockVersion <a name="ConnectDataTableAttributeLockVersion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableAttributeLockVersion {

};
```


### ConnectDataTableAttributeValidation <a name="ConnectDataTableAttributeValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableAttributeValidation {
    ConnectDataTableAttributeValidationEnum Enum = null,
    double ExclusiveMaximum = null,
    double ExclusiveMinimum = null,
    double Maximum = null,
    double MaxLength = null,
    double MaxValues = null,
    double Minimum = null,
    double MinLength = null,
    double MinValues = null,
    double MultipleOf = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum">Enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum">ExclusiveMaximum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum">ExclusiveMinimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum">Maximum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength">MaxLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues">MaxValues</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum">Minimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength">MinLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues">MinValues</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf">MultipleOf</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}. |

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum"></a>

```csharp
public ConnectDataTableAttributeValidationEnum Enum { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}.

---

##### `ExclusiveMaximum`<sup>Optional</sup> <a name="ExclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum"></a>

```csharp
public double ExclusiveMaximum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}.

---

##### `ExclusiveMinimum`<sup>Optional</sup> <a name="ExclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum"></a>

```csharp
public double ExclusiveMinimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}.

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}.

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength"></a>

```csharp
public double MaxLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}.

---

##### `MaxValues`<sup>Optional</sup> <a name="MaxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues"></a>

```csharp
public double MaxValues { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}.

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}.

---

##### `MinValues`<sup>Optional</sup> <a name="MinValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues"></a>

```csharp
public double MinValues { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}.

---

##### `MultipleOf`<sup>Optional</sup> <a name="MultipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf"></a>

```csharp
public double MultipleOf { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}.

---

### ConnectDataTableAttributeValidationEnum <a name="ConnectDataTableAttributeValidationEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableAttributeValidationEnum {
    bool|IResolvable Strict = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict">Strict</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}. |

---

##### `Strict`<sup>Optional</sup> <a name="Strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict"></a>

```csharp
public bool|IResolvable Strict { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableAttributeLockVersionOutputReference <a name="ConnectDataTableAttributeLockVersionOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableAttributeLockVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable">DataTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `DataTable`<sup>Required</sup> <a name="DataTable" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable"></a>

```csharp
public string DataTable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue"></a>

```csharp
public ConnectDataTableAttributeLockVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a>

---


### ConnectDataTableAttributeValidationEnumOutputReference <a name="ConnectDataTableAttributeValidationEnumOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableAttributeValidationEnumOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict">ResetStrict</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStrict` <a name="ResetStrict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict"></a>

```csharp
private void ResetStrict()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput">StrictInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict">Strict</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StrictInput`<sup>Optional</sup> <a name="StrictInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput"></a>

```csharp
public bool|IResolvable StrictInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Strict`<sup>Required</sup> <a name="Strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict"></a>

```csharp
public bool|IResolvable Strict { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectDataTableAttributeValidationEnum InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---


### ConnectDataTableAttributeValidationOutputReference <a name="ConnectDataTableAttributeValidationOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableAttributeValidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum">PutEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum">ResetExclusiveMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum">ResetExclusiveMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues">ResetMaxValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues">ResetMinValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf">ResetMultipleOf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnum` <a name="PutEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum"></a>

```csharp
private void PutEnum(ConnectDataTableAttributeValidationEnum Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---

##### `ResetEnum` <a name="ResetEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum"></a>

```csharp
private void ResetEnum()
```

##### `ResetExclusiveMaximum` <a name="ResetExclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum"></a>

```csharp
private void ResetExclusiveMaximum()
```

##### `ResetExclusiveMinimum` <a name="ResetExclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum"></a>

```csharp
private void ResetExclusiveMinimum()
```

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetMaxValues` <a name="ResetMaxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues"></a>

```csharp
private void ResetMaxValues()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength"></a>

```csharp
private void ResetMinLength()
```

##### `ResetMinValues` <a name="ResetMinValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues"></a>

```csharp
private void ResetMinValues()
```

##### `ResetMultipleOf` <a name="ResetMultipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf"></a>

```csharp
private void ResetMultipleOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum">Enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput">EnumInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput">ExclusiveMaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput">ExclusiveMinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput">MaxLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput">MaxValuesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput">MinValuesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput">MultipleOfInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum">ExclusiveMaximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum">ExclusiveMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues">MaxValues</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues">MinValues</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf">MultipleOf</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum"></a>

```csharp
public ConnectDataTableAttributeValidationEnumOutputReference Enum { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a>

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput"></a>

```csharp
public IResolvable|ConnectDataTableAttributeValidationEnum EnumInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---

##### `ExclusiveMaximumInput`<sup>Optional</sup> <a name="ExclusiveMaximumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput"></a>

```csharp
public double ExclusiveMaximumInput { get; }
```

- *Type:* double

---

##### `ExclusiveMinimumInput`<sup>Optional</sup> <a name="ExclusiveMinimumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput"></a>

```csharp
public double ExclusiveMinimumInput { get; }
```

- *Type:* double

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput"></a>

```csharp
public double MaxLengthInput { get; }
```

- *Type:* double

---

##### `MaxValuesInput`<sup>Optional</sup> <a name="MaxValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput"></a>

```csharp
public double MaxValuesInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `MinValuesInput`<sup>Optional</sup> <a name="MinValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput"></a>

```csharp
public double MinValuesInput { get; }
```

- *Type:* double

---

##### `MultipleOfInput`<sup>Optional</sup> <a name="MultipleOfInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput"></a>

```csharp
public double MultipleOfInput { get; }
```

- *Type:* double

---

##### `ExclusiveMaximum`<sup>Required</sup> <a name="ExclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum"></a>

```csharp
public double ExclusiveMaximum { get; }
```

- *Type:* double

---

##### `ExclusiveMinimum`<sup>Required</sup> <a name="ExclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum"></a>

```csharp
public double ExclusiveMinimum { get; }
```

- *Type:* double

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `MaxValues`<sup>Required</sup> <a name="MaxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues"></a>

```csharp
public double MaxValues { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `MinValues`<sup>Required</sup> <a name="MinValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues"></a>

```csharp
public double MinValues { get; }
```

- *Type:* double

---

##### `MultipleOf`<sup>Required</sup> <a name="MultipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf"></a>

```csharp
public double MultipleOf { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectDataTableAttributeValidation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---



