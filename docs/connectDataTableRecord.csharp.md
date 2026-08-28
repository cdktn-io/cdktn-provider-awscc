# `connectDataTableRecord` Submodule <a name="`connectDataTableRecord` Submodule" id="@cdktn/provider-awscc.connectDataTableRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableRecord <a name="ConnectDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record awscc_connect_data_table_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecord(Construct Scope, string Id, ConnectDataTableRecordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig">ConnectDataTableRecordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig">ConnectDataTableRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord">PutDataTableRecord</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataTableRecord` <a name="PutDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord"></a>

```csharp
private void PutDataTableRecord(ConnectDataTableRecordDataTableRecord Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectDataTableRecord.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectDataTableRecord.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectDataTableRecord.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectDataTableRecord.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectDataTableRecord to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectDataTableRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord">DataTableRecord</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId">RecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput">DataTableArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput">DataTableRecordInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn">DataTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataTableRecord`<sup>Required</sup> <a name="DataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord"></a>

```csharp
public ConnectDataTableRecordDataTableRecordOutputReference DataTableRecord { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RecordId`<sup>Required</sup> <a name="RecordId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId"></a>

```csharp
public string RecordId { get; }
```

- *Type:* string

---

##### `DataTableArnInput`<sup>Optional</sup> <a name="DataTableArnInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput"></a>

```csharp
public string DataTableArnInput { get; }
```

- *Type:* string

---

##### `DataTableRecordInput`<sup>Optional</sup> <a name="DataTableRecordInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecord DataTableRecordInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `DataTableArn`<sup>Required</sup> <a name="DataTableArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn"></a>

```csharp
public string DataTableArn { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableRecordConfig <a name="ConnectDataTableRecordConfig" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecordConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataTableArn,
    ConnectDataTableRecordDataTableRecord DataTableRecord,
    string InstanceArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn">DataTableArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord">DataTableRecord</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataTableArn`<sup>Required</sup> <a name="DataTableArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn"></a>

```csharp
public string DataTableArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}.

---

##### `DataTableRecord`<sup>Required</sup> <a name="DataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord"></a>

```csharp
public ConnectDataTableRecordDataTableRecord DataTableRecord { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}.

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}.

---

### ConnectDataTableRecordDataTableRecord <a name="ConnectDataTableRecordDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecordDataTableRecord {
    IResolvable|ConnectDataTableRecordDataTableRecordValues[] Values,
    IResolvable|ConnectDataTableRecordDataTableRecordPrimaryValues[] PrimaryValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values">Values</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues">PrimaryValues</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecordValues[] Values { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}.

---

##### `PrimaryValues`<sup>Optional</sup> <a name="PrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecordPrimaryValues[] PrimaryValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}.

---

### ConnectDataTableRecordDataTableRecordPrimaryValues <a name="ConnectDataTableRecordDataTableRecordPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecordDataTableRecordPrimaryValues {
    string AttributeId = null,
    string AttributeValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId">AttributeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `AttributeId`<sup>Optional</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId"></a>

```csharp
public string AttributeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

### ConnectDataTableRecordDataTableRecordValues <a name="ConnectDataTableRecordDataTableRecordValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecordDataTableRecordValues {
    string AttributeId = null,
    string AttributeValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId">AttributeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `AttributeId`<sup>Optional</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId"></a>

```csharp
public string AttributeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableRecordDataTableRecordOutputReference <a name="ConnectDataTableRecordDataTableRecordOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecordDataTableRecordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues">PutPrimaryValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues">ResetPrimaryValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryValues` <a name="PutPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues"></a>

```csharp
private void PutPrimaryValues(IResolvable|ConnectDataTableRecordDataTableRecordPrimaryValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]

---

##### `PutValues` <a name="PutValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues"></a>

```csharp
private void PutValues(IResolvable|ConnectDataTableRecordDataTableRecordValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]

---

##### `ResetPrimaryValues` <a name="ResetPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues"></a>

```csharp
private void ResetPrimaryValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues">PrimaryValues</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput">PrimaryValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput">ValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryValues`<sup>Required</sup> <a name="PrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues"></a>

```csharp
public ConnectDataTableRecordDataTableRecordPrimaryValuesList PrimaryValues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a>

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values"></a>

```csharp
public ConnectDataTableRecordDataTableRecordValuesList Values { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a>

---

##### `PrimaryValuesInput`<sup>Optional</sup> <a name="PrimaryValuesInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecordPrimaryValues[] PrimaryValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecordValues[] ValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecord InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesList <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecordDataTableRecordPrimaryValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get"></a>

```csharp
private ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecordPrimaryValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId">ResetAttributeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeId` <a name="ResetAttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId"></a>

```csharp
private void ResetAttributeId()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput">AttributeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId">AttributeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeIdInput`<sup>Optional</sup> <a name="AttributeIdInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput"></a>

```csharp
public string AttributeIdInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `AttributeId`<sup>Required</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId"></a>

```csharp
public string AttributeId { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecordPrimaryValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>

---


### ConnectDataTableRecordDataTableRecordValuesList <a name="ConnectDataTableRecordDataTableRecordValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecordDataTableRecordValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get"></a>

```csharp
private ConnectDataTableRecordDataTableRecordValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecordValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]

---


### ConnectDataTableRecordDataTableRecordValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectDataTableRecordDataTableRecordValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId">ResetAttributeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeId` <a name="ResetAttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId"></a>

```csharp
private void ResetAttributeId()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput">AttributeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId">AttributeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeIdInput`<sup>Optional</sup> <a name="AttributeIdInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput"></a>

```csharp
public string AttributeIdInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `AttributeId`<sup>Required</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId"></a>

```csharp
public string AttributeId { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectDataTableRecordDataTableRecordValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>

---



