# `ssmguiconnectPreferences` Submodule <a name="`ssmguiconnectPreferences` Submodule" id="@cdktn/provider-awscc.ssmguiconnectPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmguiconnectPreferences <a name="SsmguiconnectPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences awscc_ssmguiconnect_preferences}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmguiconnectPreferences(Construct Scope, string Id, SsmguiconnectPreferencesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig">SsmguiconnectPreferencesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig">SsmguiconnectPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences">PutConnectionRecordingPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetConnectionRecordingPreferences">ResetConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionRecordingPreferences` <a name="PutConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences"></a>

```csharp
private void PutConnectionRecordingPreferences(SsmguiconnectPreferencesConnectionRecordingPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

---

##### `ResetConnectionRecordingPreferences` <a name="ResetConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetConnectionRecordingPreferences"></a>

```csharp
private void ResetConnectionRecordingPreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmguiconnectPreferences resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmguiconnectPreferences.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmguiconnectPreferences.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmguiconnectPreferences.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmguiconnectPreferences.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmguiconnectPreferences resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmguiconnectPreferences to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmguiconnectPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmguiconnectPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferences">ConnectionRecordingPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferencesInput">ConnectionRecordingPreferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ConnectionRecordingPreferences`<sup>Required</sup> <a name="ConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferences"></a>

```csharp
public SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference ConnectionRecordingPreferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConnectionRecordingPreferencesInput`<sup>Optional</sup> <a name="ConnectionRecordingPreferencesInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferencesInput"></a>

```csharp
public IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferences ConnectionRecordingPreferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmguiconnectPreferencesConfig <a name="SsmguiconnectPreferencesConfig" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmguiconnectPreferencesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SsmguiconnectPreferencesConnectionRecordingPreferences ConnectionRecordingPreferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connectionRecordingPreferences">ConnectionRecordingPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionRecordingPreferences`<sup>Optional</sup> <a name="ConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connectionRecordingPreferences"></a>

```csharp
public SsmguiconnectPreferencesConnectionRecordingPreferences ConnectionRecordingPreferences { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region.

This includes details such as which S3 bucket recordings are stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#connection_recording_preferences SsmguiconnectPreferences#connection_recording_preferences}

---

### SsmguiconnectPreferencesConnectionRecordingPreferences <a name="SsmguiconnectPreferencesConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmguiconnectPreferencesConnectionRecordingPreferences {
    string KmsKeyArn = null,
    SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations RecordingDestinations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.recordingDestinations">RecordingDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | Determines where recordings of RDP connections are stored. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service.

This key must exist in the same AWS Region as the node you start an RDP connection to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#kms_key_arn SsmguiconnectPreferences#kms_key_arn}

---

##### `RecordingDestinations`<sup>Optional</sup> <a name="RecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.recordingDestinations"></a>

```csharp
public SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations RecordingDestinations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

Determines where recordings of RDP connections are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#recording_destinations SsmguiconnectPreferences#recording_destinations}

---

### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations {
    IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[] S3Buckets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.property.s3Buckets">S3Buckets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]</code> | The S3 bucket where RDP connection recordings are stored. |

---

##### `S3Buckets`<sup>Optional</sup> <a name="S3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.property.s3Buckets"></a>

```csharp
public IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[] S3Buckets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]

The S3 bucket where RDP connection recordings are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#s3_buckets SsmguiconnectPreferences#s3_buckets}

---

### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets {
    string BucketName = null,
    string BucketOwner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketName">BucketName</a></code> | <code>string</code> | The name of the S3 bucket where RDP connection recordings are stored. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | The AWS account number that owns the S3 bucket. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The name of the S3 bucket where RDP connection recordings are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#bucket_name SsmguiconnectPreferences#bucket_name}

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

The AWS account number that owns the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#bucket_owner SsmguiconnectPreferences#bucket_owner}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations">PutRecordingDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetRecordingDestinations">ResetRecordingDestinations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordingDestinations` <a name="PutRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations"></a>

```csharp
private void PutRecordingDestinations(SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetRecordingDestinations` <a name="ResetRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetRecordingDestinations"></a>

```csharp
private void ResetRecordingDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations">RecordingDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinationsInput">RecordingDestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordingDestinations`<sup>Required</sup> <a name="RecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations"></a>

```csharp
public SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference RecordingDestinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `RecordingDestinationsInput`<sup>Optional</sup> <a name="RecordingDestinationsInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinationsInput"></a>

```csharp
public IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations RecordingDestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets">PutS3Buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resetS3Buckets">ResetS3Buckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Buckets` <a name="PutS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets"></a>

```csharp
private void PutS3Buckets(IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]

---

##### `ResetS3Buckets` <a name="ResetS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resetS3Buckets"></a>

```csharp
private void ResetS3Buckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets">S3Buckets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3BucketsInput">S3BucketsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Buckets`<sup>Required</sup> <a name="S3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets"></a>

```csharp
public SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList S3Buckets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a>

---

##### `S3BucketsInput`<sup>Optional</sup> <a name="S3BucketsInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3BucketsInput"></a>

```csharp
public IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[] S3BucketsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get"></a>

```csharp
private SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.internalValue"></a>

```csharp
public IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>[]

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>

---



