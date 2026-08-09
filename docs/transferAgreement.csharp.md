# `transferAgreement` Submodule <a name="`transferAgreement` Submodule" id="@cdktn/provider-awscc.transferAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferAgreement <a name="TransferAgreement" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement awscc_transfer_agreement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferAgreement(Construct Scope, string Id, TransferAgreementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig">TransferAgreementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig">TransferAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories">PutCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory">ResetBaseDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories">ResetCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning">ResetEnforceMessageSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename">ResetPreserveFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomDirectories` <a name="PutCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories"></a>

```csharp
private void PutCustomDirectories(TransferAgreementCustomDirectories Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags"></a>

```csharp
private void PutTags(IResolvable|TransferAgreementTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]

---

##### `ResetBaseDirectory` <a name="ResetBaseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory"></a>

```csharp
private void ResetBaseDirectory()
```

##### `ResetCustomDirectories` <a name="ResetCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories"></a>

```csharp
private void ResetCustomDirectories()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnforceMessageSigning` <a name="ResetEnforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning"></a>

```csharp
private void ResetEnforceMessageSigning()
```

##### `ResetPreserveFilename` <a name="ResetPreserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename"></a>

```csharp
private void ResetPreserveFilename()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TransferAgreement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TransferAgreement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TransferAgreement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

TransferAgreement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferAgreement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransferAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId">AgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories">CustomDirectories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput">AccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput">BaseDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput">CustomDirectoriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput">EnforceMessageSigningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput">LocalProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput">PartnerProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput">PreserveFilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole">AccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory">BaseDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning">EnforceMessageSigning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId">LocalProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId">PartnerProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename">PreserveFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId"></a>

```csharp
public string AgreementId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CustomDirectories`<sup>Required</sup> <a name="CustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories"></a>

```csharp
public TransferAgreementCustomDirectoriesOutputReference CustomDirectories { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags"></a>

```csharp
public TransferAgreementTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a>

---

##### `AccessRoleInput`<sup>Optional</sup> <a name="AccessRoleInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput"></a>

```csharp
public string AccessRoleInput { get; }
```

- *Type:* string

---

##### `BaseDirectoryInput`<sup>Optional</sup> <a name="BaseDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput"></a>

```csharp
public string BaseDirectoryInput { get; }
```

- *Type:* string

---

##### `CustomDirectoriesInput`<sup>Optional</sup> <a name="CustomDirectoriesInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput"></a>

```csharp
public IResolvable|TransferAgreementCustomDirectories CustomDirectoriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnforceMessageSigningInput`<sup>Optional</sup> <a name="EnforceMessageSigningInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput"></a>

```csharp
public string EnforceMessageSigningInput { get; }
```

- *Type:* string

---

##### `LocalProfileIdInput`<sup>Optional</sup> <a name="LocalProfileIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput"></a>

```csharp
public string LocalProfileIdInput { get; }
```

- *Type:* string

---

##### `PartnerProfileIdInput`<sup>Optional</sup> <a name="PartnerProfileIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput"></a>

```csharp
public string PartnerProfileIdInput { get; }
```

- *Type:* string

---

##### `PreserveFilenameInput`<sup>Optional</sup> <a name="PreserveFilenameInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput"></a>

```csharp
public string PreserveFilenameInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput"></a>

```csharp
public IResolvable|TransferAgreementTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole"></a>

```csharp
public string AccessRole { get; }
```

- *Type:* string

---

##### `BaseDirectory`<sup>Required</sup> <a name="BaseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory"></a>

```csharp
public string BaseDirectory { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnforceMessageSigning`<sup>Required</sup> <a name="EnforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning"></a>

```csharp
public string EnforceMessageSigning { get; }
```

- *Type:* string

---

##### `LocalProfileId`<sup>Required</sup> <a name="LocalProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId"></a>

```csharp
public string LocalProfileId { get; }
```

- *Type:* string

---

##### `PartnerProfileId`<sup>Required</sup> <a name="PartnerProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId"></a>

```csharp
public string PartnerProfileId { get; }
```

- *Type:* string

---

##### `PreserveFilename`<sup>Required</sup> <a name="PreserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename"></a>

```csharp
public string PreserveFilename { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferAgreementConfig <a name="TransferAgreementConfig" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferAgreementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessRole,
    string LocalProfileId,
    string PartnerProfileId,
    string ServerId,
    string BaseDirectory = null,
    TransferAgreementCustomDirectories CustomDirectories = null,
    string Description = null,
    string EnforceMessageSigning = null,
    string PreserveFilename = null,
    string Status = null,
    IResolvable|TransferAgreementTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole">AccessRole</a></code> | <code>string</code> | Specifies the access role for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId">LocalProfileId</a></code> | <code>string</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId">PartnerProfileId</a></code> | <code>string</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId">ServerId</a></code> | <code>string</code> | A unique identifier for the server. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory">BaseDirectory</a></code> | <code>string</code> | Specifies the base directory for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories">CustomDirectories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | Specifies a separate directory for each type of file to store for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description">Description</a></code> | <code>string</code> | A textual description for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning">EnforceMessageSigning</a></code> | <code>string</code> | Specifies whether to enforce an AS2 message is signed for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename">PreserveFilename</a></code> | <code>string</code> | Specifies whether to preserve the filename received for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status">Status</a></code> | <code>string</code> | Specifies the status of the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]</code> | Key-value pairs that can be used to group and search for agreements. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole"></a>

```csharp
public string AccessRole { get; set; }
```

- *Type:* string

Specifies the access role for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#access_role TransferAgreement#access_role}

---

##### `LocalProfileId`<sup>Required</sup> <a name="LocalProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId"></a>

```csharp
public string LocalProfileId { get; set; }
```

- *Type:* string

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#local_profile_id TransferAgreement#local_profile_id}

---

##### `PartnerProfileId`<sup>Required</sup> <a name="PartnerProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId"></a>

```csharp
public string PartnerProfileId { get; set; }
```

- *Type:* string

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#partner_profile_id TransferAgreement#partner_profile_id}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

A unique identifier for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#server_id TransferAgreement#server_id}

---

##### `BaseDirectory`<sup>Optional</sup> <a name="BaseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory"></a>

```csharp
public string BaseDirectory { get; set; }
```

- *Type:* string

Specifies the base directory for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#base_directory TransferAgreement#base_directory}

---

##### `CustomDirectories`<sup>Optional</sup> <a name="CustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories"></a>

```csharp
public TransferAgreementCustomDirectories CustomDirectories { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

Specifies a separate directory for each type of file to store for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#custom_directories TransferAgreement#custom_directories}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A textual description for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#description TransferAgreement#description}

---

##### `EnforceMessageSigning`<sup>Optional</sup> <a name="EnforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning"></a>

```csharp
public string EnforceMessageSigning { get; set; }
```

- *Type:* string

Specifies whether to enforce an AS2 message is signed for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#enforce_message_signing TransferAgreement#enforce_message_signing}

---

##### `PreserveFilename`<sup>Optional</sup> <a name="PreserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename"></a>

```csharp
public string PreserveFilename { get; set; }
```

- *Type:* string

Specifies whether to preserve the filename received for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#preserve_filename TransferAgreement#preserve_filename}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Specifies the status of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#status TransferAgreement#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags"></a>

```csharp
public IResolvable|TransferAgreementTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]

Key-value pairs that can be used to group and search for agreements.

Tags are metadata attached to agreements for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#tags TransferAgreement#tags}

---

### TransferAgreementCustomDirectories <a name="TransferAgreementCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferAgreementCustomDirectories {
    string FailedFilesDirectory = null,
    string MdnFilesDirectory = null,
    string PayloadFilesDirectory = null,
    string StatusFilesDirectory = null,
    string TemporaryFilesDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory">FailedFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the failed files for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory">MdnFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the MDN file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory">PayloadFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the payload file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory">StatusFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the status file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory">TemporaryFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the temporary processing file for an AS2 message. |

---

##### `FailedFilesDirectory`<sup>Optional</sup> <a name="FailedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory"></a>

```csharp
public string FailedFilesDirectory { get; set; }
```

- *Type:* string

Specifies a location to store the failed files for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#failed_files_directory TransferAgreement#failed_files_directory}

---

##### `MdnFilesDirectory`<sup>Optional</sup> <a name="MdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory"></a>

```csharp
public string MdnFilesDirectory { get; set; }
```

- *Type:* string

Specifies a location to store the MDN file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#mdn_files_directory TransferAgreement#mdn_files_directory}

---

##### `PayloadFilesDirectory`<sup>Optional</sup> <a name="PayloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory"></a>

```csharp
public string PayloadFilesDirectory { get; set; }
```

- *Type:* string

Specifies a location to store the payload file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#payload_files_directory TransferAgreement#payload_files_directory}

---

##### `StatusFilesDirectory`<sup>Optional</sup> <a name="StatusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory"></a>

```csharp
public string StatusFilesDirectory { get; set; }
```

- *Type:* string

Specifies a location to store the status file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#status_files_directory TransferAgreement#status_files_directory}

---

##### `TemporaryFilesDirectory`<sup>Optional</sup> <a name="TemporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory"></a>

```csharp
public string TemporaryFilesDirectory { get; set; }
```

- *Type:* string

Specifies a location to store the temporary processing file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#temporary_files_directory TransferAgreement#temporary_files_directory}

---

### TransferAgreementTags <a name="TransferAgreementTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferAgreementTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key">Key</a></code> | <code>string</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value">Value</a></code> | <code>string</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#key TransferAgreement#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#value TransferAgreement#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferAgreementCustomDirectoriesOutputReference <a name="TransferAgreementCustomDirectoriesOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferAgreementCustomDirectoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory">ResetFailedFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory">ResetMdnFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory">ResetPayloadFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory">ResetStatusFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory">ResetTemporaryFilesDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailedFilesDirectory` <a name="ResetFailedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory"></a>

```csharp
private void ResetFailedFilesDirectory()
```

##### `ResetMdnFilesDirectory` <a name="ResetMdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory"></a>

```csharp
private void ResetMdnFilesDirectory()
```

##### `ResetPayloadFilesDirectory` <a name="ResetPayloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory"></a>

```csharp
private void ResetPayloadFilesDirectory()
```

##### `ResetStatusFilesDirectory` <a name="ResetStatusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory"></a>

```csharp
private void ResetStatusFilesDirectory()
```

##### `ResetTemporaryFilesDirectory` <a name="ResetTemporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory"></a>

```csharp
private void ResetTemporaryFilesDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput">FailedFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput">MdnFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput">PayloadFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput">StatusFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput">TemporaryFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory">FailedFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory">MdnFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory">PayloadFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory">StatusFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory">TemporaryFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailedFilesDirectoryInput`<sup>Optional</sup> <a name="FailedFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput"></a>

```csharp
public string FailedFilesDirectoryInput { get; }
```

- *Type:* string

---

##### `MdnFilesDirectoryInput`<sup>Optional</sup> <a name="MdnFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput"></a>

```csharp
public string MdnFilesDirectoryInput { get; }
```

- *Type:* string

---

##### `PayloadFilesDirectoryInput`<sup>Optional</sup> <a name="PayloadFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput"></a>

```csharp
public string PayloadFilesDirectoryInput { get; }
```

- *Type:* string

---

##### `StatusFilesDirectoryInput`<sup>Optional</sup> <a name="StatusFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput"></a>

```csharp
public string StatusFilesDirectoryInput { get; }
```

- *Type:* string

---

##### `TemporaryFilesDirectoryInput`<sup>Optional</sup> <a name="TemporaryFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput"></a>

```csharp
public string TemporaryFilesDirectoryInput { get; }
```

- *Type:* string

---

##### `FailedFilesDirectory`<sup>Required</sup> <a name="FailedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory"></a>

```csharp
public string FailedFilesDirectory { get; }
```

- *Type:* string

---

##### `MdnFilesDirectory`<sup>Required</sup> <a name="MdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory"></a>

```csharp
public string MdnFilesDirectory { get; }
```

- *Type:* string

---

##### `PayloadFilesDirectory`<sup>Required</sup> <a name="PayloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory"></a>

```csharp
public string PayloadFilesDirectory { get; }
```

- *Type:* string

---

##### `StatusFilesDirectory`<sup>Required</sup> <a name="StatusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory"></a>

```csharp
public string StatusFilesDirectory { get; }
```

- *Type:* string

---

##### `TemporaryFilesDirectory`<sup>Required</sup> <a name="TemporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory"></a>

```csharp
public string TemporaryFilesDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferAgreementCustomDirectories InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---


### TransferAgreementTagsList <a name="TransferAgreementTagsList" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferAgreementTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get"></a>

```csharp
private TransferAgreementTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue"></a>

```csharp
public IResolvable|TransferAgreementTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]

---


### TransferAgreementTagsOutputReference <a name="TransferAgreementTagsOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new TransferAgreementTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferAgreementTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>

---



