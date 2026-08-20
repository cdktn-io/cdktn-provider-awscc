# `quicksightDlpSetting` Submodule <a name="`quicksightDlpSetting` Submodule" id="@cdktn/provider-awscc.quicksightDlpSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDlpSetting <a name="QuicksightDlpSetting" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting awscc_quicksight_dlp_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSetting(Construct Scope, string Id, QuicksightDlpSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig">QuicksightDlpSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig">QuicksightDlpSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putProviderConfig"></a>

```csharp
private void PutProviderConfig(QuicksightDlpSettingProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putTags"></a>

```csharp
private void PutTags(IResolvable|QuicksightDlpSettingTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightDlpSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightDlpSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightDlpSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightDlpSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightDlpSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuicksightDlpSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightDlpSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightDlpSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightDlpSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference">QuicksightDlpSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList">QuicksightDlpSettingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingIdInput">DlpSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageActionInput">ProviderOutageActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerTypeInput">ProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingId">DlpSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageAction">ProviderOutageAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfig"></a>

```csharp
public QuicksightDlpSettingProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference">QuicksightDlpSettingProviderConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tags"></a>

```csharp
public QuicksightDlpSettingTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList">QuicksightDlpSettingTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `DlpSettingIdInput`<sup>Optional</sup> <a name="DlpSettingIdInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingIdInput"></a>

```csharp
public string DlpSettingIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfigInput"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

---

##### `ProviderOutageActionInput`<sup>Optional</sup> <a name="ProviderOutageActionInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageActionInput"></a>

```csharp
public string ProviderOutageActionInput { get; }
```

- *Type:* string

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerTypeInput"></a>

```csharp
public string ProviderTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tagsInput"></a>

```csharp
public IResolvable|QuicksightDlpSettingTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DlpSettingId`<sup>Required</sup> <a name="DlpSettingId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingId"></a>

```csharp
public string DlpSettingId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderOutageAction`<sup>Required</sup> <a name="ProviderOutageAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageAction"></a>

```csharp
public string ProviderOutageAction { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDlpSettingConfig <a name="QuicksightDlpSettingConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DlpSettingId,
    string Name,
    QuicksightDlpSettingProviderConfig ProviderConfig,
    string ProviderOutageAction,
    string ProviderType,
    string AwsAccountId = null,
    bool|IResolvable Enabled = null,
    IResolvable|QuicksightDlpSettingTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dlpSettingId">DlpSettingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#dlp_setting_id QuicksightDlpSetting#dlp_setting_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#name QuicksightDlpSetting#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#provider_config QuicksightDlpSetting#provider_config}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerOutageAction">ProviderOutageAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#provider_outage_action QuicksightDlpSetting#provider_outage_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerType">ProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#provider_type QuicksightDlpSetting#provider_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#aws_account_id QuicksightDlpSetting#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#enabled QuicksightDlpSetting#enabled}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#tags QuicksightDlpSetting#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DlpSettingId`<sup>Required</sup> <a name="DlpSettingId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dlpSettingId"></a>

```csharp
public string DlpSettingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#dlp_setting_id QuicksightDlpSetting#dlp_setting_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#name QuicksightDlpSetting#name}.

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerConfig"></a>

```csharp
public QuicksightDlpSettingProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#provider_config QuicksightDlpSetting#provider_config}.

---

##### `ProviderOutageAction`<sup>Required</sup> <a name="ProviderOutageAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerOutageAction"></a>

```csharp
public string ProviderOutageAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#provider_outage_action QuicksightDlpSetting#provider_outage_action}.

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerType"></a>

```csharp
public string ProviderType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#provider_type QuicksightDlpSetting#provider_type}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#aws_account_id QuicksightDlpSetting#aws_account_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#enabled QuicksightDlpSetting#enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.tags"></a>

```csharp
public IResolvable|QuicksightDlpSettingTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#tags QuicksightDlpSetting#tags}.

---

### QuicksightDlpSettingProviderConfig <a name="QuicksightDlpSettingProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingProviderConfig {
    QuicksightDlpSettingProviderConfigMicrosoftPurview MicrosoftPurview = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig.property.microsoftPurview">MicrosoftPurview</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#microsoft_purview QuicksightDlpSetting#microsoft_purview}. |

---

##### `MicrosoftPurview`<sup>Optional</sup> <a name="MicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig.property.microsoftPurview"></a>

```csharp
public QuicksightDlpSettingProviderConfigMicrosoftPurview MicrosoftPurview { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#microsoft_purview QuicksightDlpSetting#microsoft_purview}.

---

### QuicksightDlpSettingProviderConfigMicrosoftPurview <a name="QuicksightDlpSettingProviderConfigMicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingProviderConfigMicrosoftPurview {
    QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials Credentials = null,
    IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[] LabelActionMappings = null,
    string UnmappedAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#credentials QuicksightDlpSetting#credentials}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.labelActionMappings">LabelActionMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#label_action_mappings QuicksightDlpSetting#label_action_mappings}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.unmappedAction">UnmappedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#unmapped_action QuicksightDlpSetting#unmapped_action}. |

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.credentials"></a>

```csharp
public QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials Credentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#credentials QuicksightDlpSetting#credentials}.

---

##### `LabelActionMappings`<sup>Optional</sup> <a name="LabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.labelActionMappings"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[] LabelActionMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#label_action_mappings QuicksightDlpSetting#label_action_mappings}.

---

##### `UnmappedAction`<sup>Optional</sup> <a name="UnmappedAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.unmappedAction"></a>

```csharp
public string UnmappedAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#unmapped_action QuicksightDlpSetting#unmapped_action}.

---

### QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials {
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#secret_arn QuicksightDlpSetting#secret_arn}. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#secret_arn QuicksightDlpSetting#secret_arn}.

---

### QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings {
    string Action = null,
    string LabelId = null,
    string LabelName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#action QuicksightDlpSetting#action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelId">LabelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#label_id QuicksightDlpSetting#label_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelName">LabelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#label_name QuicksightDlpSetting#label_name}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#action QuicksightDlpSetting#action}.

---

##### `LabelId`<sup>Optional</sup> <a name="LabelId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelId"></a>

```csharp
public string LabelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#label_id QuicksightDlpSetting#label_id}.

---

##### `LabelName`<sup>Optional</sup> <a name="LabelName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelName"></a>

```csharp
public string LabelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#label_name QuicksightDlpSetting#label_name}.

---

### QuicksightDlpSettingTags <a name="QuicksightDlpSettingTags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.key">Key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.value">Value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#key QuicksightDlpSetting#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#value QuicksightDlpSetting#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

---


### QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.get"></a>

```csharp
private QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]

---


### QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelId">ResetLabelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelName">ResetLabelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetLabelId` <a name="ResetLabelId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelId"></a>

```csharp
private void ResetLabelId()
```

##### `ResetLabelName` <a name="ResetLabelName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelName"></a>

```csharp
private void ResetLabelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelIdInput">LabelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelNameInput">LabelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelId">LabelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelName">LabelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `LabelIdInput`<sup>Optional</sup> <a name="LabelIdInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelIdInput"></a>

```csharp
public string LabelIdInput { get; }
```

- *Type:* string

---

##### `LabelNameInput`<sup>Optional</sup> <a name="LabelNameInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelNameInput"></a>

```csharp
public string LabelNameInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `LabelId`<sup>Required</sup> <a name="LabelId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelId"></a>

```csharp
public string LabelId { get; }
```

- *Type:* string

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelName"></a>

```csharp
public string LabelName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>

---


### QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putLabelActionMappings">PutLabelActionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetLabelActionMappings">ResetLabelActionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetUnmappedAction">ResetUnmappedAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredentials` <a name="PutCredentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putCredentials"></a>

```csharp
private void PutCredentials(QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

---

##### `PutLabelActionMappings` <a name="PutLabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putLabelActionMappings"></a>

```csharp
private void PutLabelActionMappings(IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putLabelActionMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]

---

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetLabelActionMappings` <a name="ResetLabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetLabelActionMappings"></a>

```csharp
private void ResetLabelActionMappings()
```

##### `ResetUnmappedAction` <a name="ResetUnmappedAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetUnmappedAction"></a>

```csharp
private void ResetUnmappedAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappings">LabelActionMappings</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappingsInput">LabelActionMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedActionInput">UnmappedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedAction">UnmappedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentials"></a>

```csharp
public QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference</a>

---

##### `LabelActionMappings`<sup>Required</sup> <a name="LabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappings"></a>

```csharp
public QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList LabelActionMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentialsInput"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials CredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

---

##### `LabelActionMappingsInput`<sup>Optional</sup> <a name="LabelActionMappingsInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappingsInput"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[] LabelActionMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings</a>[]

---

##### `UnmappedActionInput`<sup>Optional</sup> <a name="UnmappedActionInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedActionInput"></a>

```csharp
public string UnmappedActionInput { get; }
```

- *Type:* string

---

##### `UnmappedAction`<sup>Required</sup> <a name="UnmappedAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedAction"></a>

```csharp
public string UnmappedAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurview InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

---


### QuicksightDlpSettingProviderConfigOutputReference <a name="QuicksightDlpSettingProviderConfigOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.putMicrosoftPurview">PutMicrosoftPurview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resetMicrosoftPurview">ResetMicrosoftPurview</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMicrosoftPurview` <a name="PutMicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.putMicrosoftPurview"></a>

```csharp
private void PutMicrosoftPurview(QuicksightDlpSettingProviderConfigMicrosoftPurview Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.putMicrosoftPurview.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

---

##### `ResetMicrosoftPurview` <a name="ResetMicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resetMicrosoftPurview"></a>

```csharp
private void ResetMicrosoftPurview()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurview">MicrosoftPurview</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurviewInput">MicrosoftPurviewInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MicrosoftPurview`<sup>Required</sup> <a name="MicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurview"></a>

```csharp
public QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference MicrosoftPurview { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference</a>

---

##### `MicrosoftPurviewInput`<sup>Optional</sup> <a name="MicrosoftPurviewInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurviewInput"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfigMicrosoftPurview MicrosoftPurviewInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDlpSettingProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

---


### QuicksightDlpSettingTagsList <a name="QuicksightDlpSettingTagsList" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.get"></a>

```csharp
private QuicksightDlpSettingTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDlpSettingTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>[]

---


### QuicksightDlpSettingTagsOutputReference <a name="QuicksightDlpSettingTagsOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDlpSettingTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDlpSettingTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags">QuicksightDlpSettingTags</a>

---



